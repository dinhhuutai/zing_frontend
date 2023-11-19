import { useEffect, useRef } from 'react';
import { BsCaretUpFill, BsCaretDownFill, BsCaretDown, BsCaretUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import config from '~/config';

function Table({
    weekcharts,
    show,
    currentPage,
    setArrangeName,
    setArrangeStartDate,
    setArrangeLastUpdateDate,
    setSelectArrange,
    arrangeName,
    arrangeStartDate,
    arrangeLastUpdateDate,
    selectArrange,
    setCurrentPage,
    setListIdDelete,
    listCheck,
    setListCheck
}) {
    const handleArrange = (type) => {
        setSelectArrange(type);
        if (type === 'name') {
            setArrangeName((prev) => !prev);
        } else if (type === 'startDate') {
            setArrangeStartDate((prev) => !prev);
        } else if (type === 'lastUpdateDate') {
            setArrangeLastUpdateDate((prev) => !prev);
        }
        setCurrentPage(0);
    };


 
    const handleCheckInput = (e) => {
        if(e.target.checked){
            const newArray = [];
            for(var i = 0; i < show; i++){
                newArray.push(i);
            }
            setListCheck(newArray);
        } else {
            setListCheck([]);
        }
    }


    const refInputAll = useRef();

    const handleCheckItem = (index, e) => {
        if(e.target.checked) {
            setListCheck([...listCheck, index]);
        } else {
            const newArray = listCheck.filter(el => el !== index);
            setListCheck(newArray);
        }

    }

    useEffect(() => {
        var checks = document.querySelectorAll('input[name=inputCheckboxArtistList]:checked');

        const newArray = [];
        checks.forEach((check) => {
            newArray.push(check.getAttribute('data-id'));
        });
        

        if(newArray.length === weekcharts.length && weekcharts.length !== 0) {
            refInputAll.current.checked = true;
        } else {
            refInputAll.current.checked = false;
        }

        const endArray = newArray.filter((item) => item !== null);
        
        setListIdDelete(endArray);
    }, [listCheck]);

 
    return (
        <div className="mt-[20px]">
            <table className="w-full flex flex-col justify-center">
                <thead className="w-full sticky top-[var(--admin-height-header)] bg-[#fff]">
                    <tr className="flex border-[1px] border-solid border-[#c4b8b8] rounded-t-[4px]">
                        <th className="w-[30px] border-r-solid border-r-[1px] border-r-[#c4b8b8] flex justify-center items-center">
                            <input ref={refInputAll} onChange={e => handleCheckInput(e)} type="checkbox" />
                        </th>
                        <th className="w-[50px] border-r-solid border-r-[1px] border-r-[#c4b8b8] flex justify-center items-center">
                            STT
                        </th>
                        <th>
                            <button
                                onClick={() => handleArrange('name')}
                                className="w-[200px] cursor-pointer border-r-solid border-r-[1px] border-r-[#c4b8b8] px-[10px] py-[4px] flex items-center justify-between"
                            >
                                <span>Name</span>
                                <div className="flex items-center">
                                    {selectArrange === 'name' ? (
                                        arrangeName ? (
                                            <>
                                                <BsCaretUpFill />
                                                <BsCaretDown />
                                            </>
                                        ) : (
                                            <>
                                                <BsCaretUp />
                                                <BsCaretDownFill />
                                            </>
                                        )
                                    ) : (
                                        <>
                                            <BsCaretUp />
                                            <BsCaretDown />
                                        </>
                                    )}
                                </div>
                            </button>
                        </th>
                        <th className="w-[100px] border-r-solid border-r-[1px] border-r-[#c4b8b8] px-[10px] py-[4px] flex items-center justify-start">
                            Image
                        </th>
                        <th>
                            <button
                                onClick={() => handleArrange('startDate')}
                                className="w-[150px] cursor-pointer border-r-solid border-r-[1px] border-r-[#c4b8b8] px-[10px] py-[4px] flex items-center justify-between"
                            >
                                <span>Start date</span>
                                <div className="flex items-center">
                                    {selectArrange === 'startDate' ? (
                                        arrangeStartDate ? (
                                            <>
                                                <BsCaretUpFill />
                                                <BsCaretDown />
                                            </>
                                        ) : (
                                            <>
                                                <BsCaretUp />
                                                <BsCaretDownFill />
                                            </>
                                        )
                                    ) : (
                                        <>
                                            <BsCaretUp />
                                            <BsCaretDown />
                                        </>
                                    )}
                                </div>
                            </button>
                        </th>
                        <th>
                            <button
                                onClick={() => handleArrange('lastUpdateDate')}
                                className="w-[180px] cursor-pointer px-[10px] py-[4px] flex items-center justify-between"
                            >
                                <span>Last update date</span>
                                <div className="flex items-center">
                                    {selectArrange === 'lastUpdateDate' ? (
                                        arrangeLastUpdateDate ? (
                                            <>
                                                <BsCaretUpFill />
                                                <BsCaretDown />
                                            </>
                                        ) : (
                                            <>
                                                <BsCaretUp />
                                                <BsCaretDownFill />
                                            </>
                                        )
                                    ) : (
                                        <>
                                            <BsCaretUp />
                                            <BsCaretDown />
                                        </>
                                    )}
                                </div>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {
                    weekcharts.length !== 0 ?
                    weekcharts?.map((weekchart, index) => {
                        return (
                            <tr
                                key={index}
                                className={`${
                                    show === index + 1 && 'rounded-b-[4px]'
                                } even:bg-[#fff] odd:bg-[#f7f5f5] flex border-b-[1px] border-l-[1px] border-r-[1px] border-solid border-[#c4b8b8]`}
                            >
                                <td className="w-[30px] border-r-solid border-r-[1px] border-r-[#c4b8b8] flex justify-center items-center">
                                    <input checked={listCheck.includes(index)} onChange={(e) => handleCheckItem(index, e)} data-id={listCheck.includes(index) ? weekchart._id : null} name="inputCheckboxArtistList" type="checkbox" />
                                </td>
                                <td className="w-[50px] border-r-solid border-r-[1px] border-r-[#c4b8b8] flex justify-center items-center">
                                    {index + 1 + show * currentPage}
                                </td>
                                <td className='w-[200px]'>
                                    <Link to={`${config.routes.adminWeekchartUpdate}/${weekchart._id}`} className="w-full h-full cursor-pointer border-r-solid border-r-[1px] border-r-[#c4b8b8] flex items-center px-[10px] py-[4px]">
                                        {weekchart.name}
                                    </Link>
                                </td>
                                <td className="w-[100px] h-[100px] border-r-solid border-r-[1px] border-r-[#c4b8b8] flex items-center px-[10px] py-[10px]">
                                    <img
                                        className="rounded-[4px] w-full h-full object-cover border-[1px] border-[#b9b0b0] border-solid"
                                        alt={weekchart.name}
                                        src={weekchart.image}
                                    />
                                </td>
                                <td className="w-[150px] border-r-solid border-r-[1px] border-r-[#c4b8b8] px-[10px] flex items-center py-[4px]">{`${new Date(
                                    weekchart.createDate,
                                ).getDate()}/${new Date(weekchart.createDate).getMonth() + 1}/${new Date(
                                    weekchart.createDate,
                                ).getFullYear()}`}</td>
                                <td className="w-[180px] flex items-center px-[10px] py-[4px]">{`${new Date(
                                    weekchart.updateDate,
                                ).getDate()}/${new Date(weekchart.updateDate).getMonth() + 1}/${new Date(
                                    weekchart.updateDate,
                                ).getFullYear()}`}</td>
                            </tr>
                        );
                    }) :
                    <div className='flex mt-[20px] justify-center w-full font-[600] text-[13px] uppercase text-[#ae9c9c]'>Không có weekchart này trong danh sách</div>
                }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
