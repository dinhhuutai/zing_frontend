import { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp, BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import HeadlessTippy from '@tippyjs/react/headless';

function Calendar() {
    function getWeek(target) {
        var date = new Date(target.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        var week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
    }
    function getWeekStartAndEnd(year, weekNumber) {
        var januaryFirst = new Date(year, 0, 1);
        var daysToMonday = 1 - januaryFirst.getDay(); // Tìm ngày bắt đầu (Thứ Hai) của năm

        var startDate = new Date(year, 0, 1 + daysToMonday + (weekNumber - 1) * 7); // Ngày bắt đầu của tuần
        var endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 6); // Ngày kết thúc của tuần

        return {
            start: {
                startDate,
                date: startDate.getDate(),
                month: startDate.getMonth() + 1,
                year: startDate.getFullYear(),
            },
            end: {
                endDate,
                date: endDate.getDate(),
                month: endDate.getMonth() + 1,
                year: startDate.getFullYear(),
            },
        };
    }


    function getWeeksInMonth(year, month) {
        var weeks = [];
        var startDate = new Date(year, month, 1);
        var endDate = new Date(year, month + 1, 0); // Lấy ngày cuối cùng của tháng

        while (startDate <= endDate) {
            var weekNumber = getWeek1(startDate);
            if (!weeks.includes(weekNumber)) {
                weeks.push(weekNumber);
            }
            startDate.setDate(startDate.getDate() + 7);
        }

        return weeks;
    }
    function getWeek1(startDate) {
        var date = new Date(startDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        var week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
    }

    // var year = 2023;
    // var month = 3; // Tháng 4 (tháng 1 = 0, tháng 2 = 1, v.v.)

    // var weeksInMonth = getWeeksInMonth(year, month);
    // console.log('Các tuần trong tháng ' + (month + 1) + ' năm ' + year + ':');
    // console.log(weeksInMonth);

    
    const [downCalendar, setDownCalendar] = useState(false);
    const [weekCurrent, setWeekCurrent] = useState({
        indexWeek: 0,
        weekDates: {},
    })
    const [indexWeekLast, setIndexWeekLast] = useState({
        indexWeek: 0,
        weekDates: {},
    });
    const [monthYearCurrent, setMonthYearCurrent] = useState({
        month: 0,
        year: 0,
    })
    const [listWeek, setListWeek] = useState([])

    useEffect(() => {
        var newDate = new Date();
        setIndexWeekLast({
            indexWeek: getWeek(newDate) - 1,
            weekDates: getWeekStartAndEnd(newDate.getFullYear(), getWeek(newDate) - 1),
        });
        
        setWeekCurrent({
            indexWeek: getWeek(newDate) - 1,
            weekDates: getWeekStartAndEnd(newDate.getFullYear(), getWeek(newDate) - 1),
        });

        setMonthYearCurrent({
            month: newDate.getMonth() + 1,
            year: newDate.getFullYear(),
        });
    }, []);

    useEffect(() => {
        let weekInMonth = getWeeksInMonth(monthYearCurrent.year, monthYearCurrent.month - 1);

        let list = weekInMonth?.map(value => {
            return {
                indexWeek: value,
                weekDates: getWeekStartAndEnd(monthYearCurrent.year, value),
            }
        })

        setListWeek(list);
    }, [monthYearCurrent]);

    const handleSelect = (item) => {
        if((item.indexWeek <= weekCurrent.indexWeek && item.weekDates.start.year <= weekCurrent.weekDates.start.year) || item.weekDates.start.year < weekCurrent.weekDates.start.year){
            setIndexWeekLast({
                indexWeek: item.indexWeek,
                weekDates: getWeekStartAndEnd(monthYearCurrent.year, item.indexWeek),
            });

            setDownCalendar((prev) => !prev)
        }
    }


    const handleCalendarLeft = () => {

        let month = monthYearCurrent.month;
        let year = monthYearCurrent.year;

        if(month <= 1) {
            month = 12;
            year -= 1;
        } else {
            month -= 1;
        }
        

        setMonthYearCurrent({
            month,
            year,
        });
    }

    const handleCalendarRight = () => {

        let month = monthYearCurrent.month;
        let year = monthYearCurrent.year;

        if(month >= 12) {
            month = 1;
            year += 1;
        } else {
            month += 1;
        }
        

        setMonthYearCurrent({
            month,
            year,
        });
    }


    return (
        <div className="relative w-fit">
            <HeadlessTippy
                interactive
                placement="bottom"
                visible={downCalendar}
                onClickOutside={() => setDownCalendar(false)}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs} className='absolute after:content-[""] after:absolute after:border-b-[8px] after:border-b-solid after:border-b-[#34224f] after:border-l-[8px] after:border-l-solid after:border-l-transparent after:border-r-[8px] after:border-r-solid after:border-r-transparent after:top-[-6px] after:left-[15px] w-[208px] bg-[#34224f] left-[-105px] rounded-[10px] py-[12px] px-[14px] z-[1]'>
                        <div className='flex items-center justify-between'>
                            <button onClick={handleCalendarLeft} className='text-[16px] h-[20px] w-[20px] rounded-[50%] flex justify-center items-center cursor-pointer bg-[rgba(101,80,158,.15)] font-[800] hover:opacity-[.8]'>
                                <BsChevronLeft />
                            </button>
                            <span>{`Tháng ${monthYearCurrent.month} - ${monthYearCurrent.year}`}</span>
                            <button onClick={handleCalendarRight} className='text-[16px] h-[20px] w-[20px] rounded-[50%] flex justify-center items-center cursor-pointer bg-[rgba(101,80,158,.15)] font-[800] hover:opacity-[.8]'>
                                <BsChevronRight />
                            </button>
                        </div>
                        <div className='py-[6px]'>
                            {
                                listWeek.map((item, index) => {
                                    return <div onClick={() => handleSelect(item)} key={index} className='flex items-center group'>
                                        <span className={item.indexWeek === indexWeekLast.indexWeek && item.weekDates.start.year === indexWeekLast.weekDates.start.year ? 'bg-[hsla(0,0%,100%,0.08)] cursor-pointer rounded-[4px] py-[4px] min-w-[28px] flex justify-center items-center' : (item.indexWeek > weekCurrent.indexWeek && item.weekDates.start.year >= weekCurrent.weekDates.start.year) || item.weekDates.start.year > weekCurrent.weekDates.start.year ? 'cursor-default text-[#6c5f80] py-[4px] min-w-[28px] flex justify-center items-center' : 'group-hover:bg-[hsla(0,0%,100%,0.08)] cursor-pointer rounded-[4px] py-[4px] min-w-[28px] flex justify-center items-center'}>{item.indexWeek}</span>
                                        <div className={item.indexWeek === indexWeekLast.indexWeek && item.weekDates.start.year === indexWeekLast.weekDates.start.year ? 'bg-[hsla(0,0%,100%,0.08)] cursor-pointer rounded-[4px] py-[4px] flex flex-1 justify-center ml-[4px]' : (item.indexWeek > weekCurrent.indexWeek && item.weekDates.start.year >= weekCurrent.weekDates.start.year) || item.weekDates.start.year > weekCurrent.weekDates.start.year ? 'cursor-default text-[#6c5f80] py-[4px] flex flex-1 justify-center ml-[4px]' : 'group-hover:bg-[hsla(0,0%,100%,0.08)] cursor-pointer rounded-[4px] py-[4px] flex flex-1 justify-center ml-[4px]'}>
                                            <span>
                                                {`
                                                    ${
                                                        item.weekDates.start.date < 10 ? '0'+item.weekDates.start.date : item.weekDates.start.date
                                                    }/${
                                                        item.weekDates.start.month < 10 ? '0'+item.weekDates.start.month : item.weekDates.start.month
                                                    } - ${
                                                        item.weekDates.end.date < 10 ? '0'+item.weekDates.end.date : item.weekDates.end.date
                                                    }/${
                                                        item.weekDates.end.month < 10 ? '0'+item.weekDates.end.month : item.weekDates.end.month
                                                    }
                                                `}
                                            </span>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                )}
            >
                <button
                    onClick={() => setDownCalendar((prev) => !prev)}
                    className="flex items-center bg-[hsla(0,0%,100%,0.1)] rounded-[20px] px-[14px] py-[5px]"
                >
                    <span>
                        {`Tuần ${indexWeekLast.indexWeek}
                            (${
                                indexWeekLast?.weekDates?.start?.date < 10
                                    ? '0' + indexWeekLast?.weekDates?.start?.date
                                    : indexWeekLast?.weekDates?.start?.date
                            }/${
                            indexWeekLast?.weekDates?.start?.month < 10
                                ? '0' + indexWeekLast?.weekDates?.start?.month
                                : indexWeekLast?.weekDates?.start?.month
                        } - 
                            ${
                                indexWeekLast?.weekDates?.end?.date < 10
                                    ? '0' + indexWeekLast?.weekDates?.end?.date
                                    : indexWeekLast?.weekDates?.end?.date
                            }/${
                            indexWeekLast?.weekDates?.end?.month < 10
                                ? '0' + indexWeekLast?.weekDates?.end?.month
                                : indexWeekLast?.weekDates?.end?.month
                        })`}
                    </span>
                    <div className="flex items-center text-[18px] ml-[16px]">
                        {downCalendar ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                </button>
            </HeadlessTippy>
        </div>
    );
}

export default Calendar;
