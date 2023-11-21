import { BsFillPlayFill } from "react-icons/bs";
import { useEffect, useState } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import config from "~/config";

// import chart1 from '~/assets/imgs/chart-1.jpg';
// import chart2 from '~/assets/imgs/chart-2.jpg';
// import chart3 from '~/assets/imgs/chart-3.jpg';

// const dataChartApi = {
//     items: {
//         'Z6FWCOO0': [
//             {
//                 time: 1696572000000,
//                 hour: "13",
//                 counter: 23110
//             },
//             {
//                 time: 1696575600000,
//                 hour: "14",
//                 counter: 21874
//             },
//             {
//                 time: 1696579200000,
//                 hour: "15",
//                 counter: 19815
//             },
//             {
//                 time: 1696582800000,
//                 hour: "16",
//                 counter: 19866
//             },
//             {
//                 time: 1696586400000,
//                 hour: "17",
//                 counter: 20744
//             },
//             {
//                 time: 1696590000000,
//                 hour: "18",
//                 counter: 24472
//             },
//             {
//                 time: 1696593600000,
//                 hour: "19",
//                 counter: 24853
//             },
//             {
//                 time: 1696597200000,
//                 hour: "20",
//                 counter: 22506
//             },
//             {
//                 time: 1696600800000,
//                 hour: "21",
//                 counter: 21706
//             },
//             {
//                 time: 1696604400000,
//                 hour: "22",
//                 counter: 21139
//             },
//             {
//                 time: 1696608000000,
//                 hour: "23",
//                 counter: 20075
//             },
//             {
//                 time: 1696611600000,
//                 hour: "00",
//                 counter: 17267
//             },
//             {
//                 time: 1696615200000,
//                 hour: "01",
//                 counter: 12892
//             },
//             {
//                 time: 1696618800000,
//                 hour: "02",
//                 counter: 9179
//             },
//             {
//                 time: 1696622400000,
//                 hour: "03",
//                 counter: 6512
//             },
//             {
//                 time: 1696626000000,
//                 hour: "04",
//                 counter: 5633
//             },
//             {
//                 time: 1696629600000,
//                 hour: "05",
//                 counter: 5923
//             },
//             {
//                 time: 1696633200000,
//                 hour: "06",
//                 counter: 10165
//             },
//             {
//                 time: 1696636800000,
//                 hour: "07",
//                 counter: 20731
//             },
//             {
//                 time: 1696640400000,
//                 hour: "08",
//                 counter: 26617
//             },
//             {
//                 time: 1696644000000,
//                 hour: "09",
//                 counter: 27856
//             },
//             {
//                 time: 1696647600000,
//                 hour: "10",
//                 counter: 27820
//             },
//             {
//                 time: 1696651200000,
//                 hour: "11",
//                 counter: 25369
//             },
//             {
//                 time: 1696654800000,
//                 hour: "12",
//                 counter: 22560
//             }
//         ],
//         'Z6EUB99Z': [
//             {
//                 time: 1696572000000,
//                 hour: "13",
//                 counter: 14728
//             },
//             {
//                 time: 1696575600000,
//                 hour: "14",
//                 counter: 13354
//             },
//             {
//                 time: 1696579200000,
//                 hour: "15",
//                 counter: 12400
//             },
//             {
//                 time: 1696582800000,
//                 hour: "16",
//                 counter: 12006
//             },
//             {
//                 time: 1696586400000,
//                 hour: "17",
//                 counter: 11792
//             },
//             {
//                 time: 1696590000000,
//                 hour: "18",
//                 counter: 13380
//             },
//             {
//                 time: 1696593600000,
//                 hour: "19",
//                 counter: 12689
//             },
//             {
//                 time: 1696597200000,
//                 hour: "20",
//                 counter: 11218
//             },
//             {
//                 time: 1696600800000,
//                 hour: "21",
//                 counter: 10396
//             },
//             {
//                 time: 1696604400000,
//                 hour: "22",
//                 counter: 10763
//             },
//             {
//                 time: 1696608000000,
//                 hour: "23",
//                 counter: 10835
//             },
//             {
//                 time: 1696611600000,
//                 hour: "00",
//                 counter: 9588
//             },
//             {
//                 time: 1696615200000,
//                 hour: "01",
//                 counter: 8269
//             },
//             {
//                 time: 1696618800000,
//                 hour: "02",
//                 counter: 5970
//             },
//             {
//                 time: 1696622400000,
//                 hour: "03",
//                 counter: 4820
//             },
//             {
//                 time: 1696626000000,
//                 hour: "04",
//                 counter: 3883
//             },
//             {
//                 time: 1696629600000,
//                 hour: "05",
//                 counter: 3969
//             },
//             {
//                 time: 1696633200000,
//                 hour: "06",
//                 counter: 5955
//             },
//             {
//                 time: 1696636800000,
//                 hour: "07",
//                 counter: 10538
//             },
//             {
//                 time: 1696640400000,
//                 hour: "08",
//                 counter: 13860
//             },
//             {
//                 time: 1696644000000,
//                 hour: "09",
//                 counter: 15013
//             },
//             {
//                 time: 1696647600000,
//                 hour: "10",
//                 counter: 15218
//             },
//             {
//                 time: 1696651200000,
//                 hour: "11",
//                 counter: 14128
//             },
//             {
//                 time: 1696654800000,
//                 hour: "12",
//                 counter: 11669
//             }
//         ],
//         'Z6DCE9OI': [
//             {
//                 time: 1696572000000,
//                 hour: "13",
//                 counter: 8959
//             },
//             {
//                 time: 1696575600000,
//                 hour: "14",
//                 counter: 7969
//             },
//             {
//                 time: 1696579200000,
//                 hour: "15",
//                 counter: 6706
//             },
//             {
//                 time: 1696582800000,
//                 hour: "16",
//                 counter: 5650
//             },
//             {
//                 time: 1696586400000,
//                 hour: "17",
//                 counter: 4984
//             },
//             {
//                 time: 1696590000000,
//                 hour: "18",
//                 counter: 4941
//             },
//             {
//                 time: 1696593600000,
//                 hour: "19",
//                 counter: 5024
//             },
//             {
//                 time: 1696597200000,
//                 hour: "20",
//                 counter: 4766
//             },
//             {
//                 time: 1696600800000,
//                 hour: "21",
//                 counter: 5258
//             },
//             {
//                 time: 1696604400000,
//                 hour: "22",
//                 counter: 6366
//             },
//             {
//                 time: 1696608000000,
//                 hour: "23",
//                 counter: 6887
//             },
//             {
//                 time: 1696611600000,
//                 hour: "00",
//                 counter: 6709
//             },
//             {
//                 time: 1696615200000,
//                 hour: "01",
//                 counter: 5307
//             },
//             {
//                 time: 1696618800000,
//                 hour: "02",
//                 counter: 4052
//             },
//             {
//                 time: 1696622400000,
//                 hour: "03",
//                 counter: 3186
//             },
//             {
//                 time: 1696626000000,
//                 hour: "04",
//                 counter: 2758
//             },
//             {
//                 time: 1696629600000,
//                 hour: "05",
//                 counter: 2631
//             },
//             {
//                 time: 1696633200000,
//                 hour: "06",
//                 counter: 3350
//             },
//             {
//                 time: 1696636800000,
//                 hour: "07",
//                 counter: 4546
//             },
//             {
//                 time: 1696640400000,
//                 hour: "08",
//                 counter: 5366
//             },
//             {
//                 time: 1696644000000,
//                 hour: "09",
//                 counter: 6252
//             },
//             {
//                 time: 1696647600000,
//                 hour: "10",
//                 counter: 7072
//             },
//             {
//                 time: 1696651200000,
//                 hour: "11",
//                 counter: 6507
//             },
//             {
//                 time: 1696654800000,
//                 hour: "12",
//                 counter: 6553
//             }
//         ],
//     },
//     RTChart: {
//         items: [
//             {
//                 encodeId: "Z6FWCOO0",
//                 name: 'Cắt Đôi Nỗi Sầu',
//                 img: chart1,
//                 singer: [
//                     {
//                         name: 'Tăng Duy Tân',
//                     },
//                     {
//                         name: 'Drum7',
//                     }
//                 ],
//             },
//             {
//                 encodeId: "Z6EUB99Z",
//                 name: 'Tất Cả Hoặc Không Là Gì Cả',
//                 img: chart2,
//                 singer: [
//                     {
//                         name: 'Cao Thái Sơn',
//                     },
//                     {
//                         name: 'Đông Thiên Đức',
//                     }
//                 ],
//             },
//             {
//                 encodeId: "Z6DCE9OI",
//                 name: 'Sao Trời Làm Gió',
//                 img: chart3,
//                 singer: [
//                     {
//                         name: 'Nal',
//                     },
//                     {
//                         name: 'CT',
//                     }
//                 ],
//             },
//         ]    
//     },
// }

function CustomTooltip({data, percent, index}) {

    return data ? <div className={`flex items-center text-[#fff] group ${index === 1 ? 'bg-[#4a90e2]' : index === 2 ? 'bg-[#50e3c2]' : 'bg-[#e35050]'} py-[4px] px-[4px] rounded-[4px]`}>
        <div className="w-[40px] h-[40px] overflow-hidden rounded-[4px]">
            <img src={data?.thumbnail} alt={data.name} />
        </div>
        <div className='ml-[10px] flex flex-col justify-center flex-1 max-w-[80px]'>
            <span className='capitalize dotThreeHiddenText2 h-[16px] overflow-hidden text-[#fff] text-[14px] font-[600] leading-[16px]'>{data.name}</span>
            <div className='text-[12px] text-[hsla(0,0%,100%,0.5)] flex'>
                {
                    data?.artists?.map((sing, index) => {
                        if(index === 0){
                            return <span className='hover:text-[#c273ed] cursor-pointer hover:underline dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]' key={index}>{sing.name}</span>
                        } else {
                            return <span className='hover:text-[#c273ed] cursor-pointer hover:underline flex group dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]' key={index}><p className='group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]'>,&nbsp;</p>{sing.name}</span>
                        }
                    })
                }
            </div>
        </div>
        <div className="ml-[16px]">
            <span className="font-[600] text-[14px] cursor-default">{percent}%</span>
        </div>
    </div> : ""
}

function Chart({data}) {

    const [datas, setDatas] = useState();
    const [percent, setPercent] = useState({});
    const [dataChart, setDataChart] = useState([]);
    const [indexChartHover, setIndexChartHover] = useState(1);
    const [dataChartTooltip, setDataChartTooltip] = useState({
        data: {},
        percent: 0,
        index: 0,
    });

    useEffect(() => {
        setDatas(data);
    }, [data]);

    useEffect(() => {
        handlePercent();
        handleChart();
    }, [datas]);


    const handlePercent = () => {

        const temp1 = datas?.items[datas?.RTChart?.items[0]?.encodeId]?.reduce((gtlt, value) => {
            return gtlt + value.counter;
        }, 0);

        const temp2 = datas?.items[datas?.RTChart?.items[1]?.encodeId]?.reduce((gtlt, value) => {
            return gtlt + value.counter;
        }, 0);

        const temp3 = datas?.items[datas?.RTChart?.items[2]?.encodeId]?.reduce((gtlt, value) => {
            return gtlt + value.counter;
        }, 0);

        const total = temp1 + temp2 + temp3;


        setPercent({
            [datas?.RTChart.items[0].encodeId]: Math.round((temp1/total) * 100),
            [datas?.RTChart.items[1].encodeId]: Math.round((temp2/total) * 100),
            [datas?.RTChart.items[2].encodeId]: Math.round((temp3/total) * 100),
        })
    }

    const handleChart = () => {
        let tempArray = []

        tempArray = datas?.items[datas?.RTChart.items[0].encodeId].map((rank) => {
            return {
                name: `${rank.hour}:00`,
                [datas?.RTChart.items[0].encodeId]: rank.counter,
            }
        })

        tempArray = datas?.items[datas?.RTChart.items[1].encodeId].map((rank, index) => {

            tempArray[index] = {
                ...tempArray[index],
                name: `${rank.hour}:00`,
                [datas?.RTChart.items[1].encodeId]: rank.counter,
            }

            return tempArray[index];
        })

        tempArray = datas?.items[datas?.RTChart.items[2].encodeId].map((rank, index) => {

            tempArray[index] = {
                ...tempArray[index],
                name: `${rank.hour}:00`,
                [datas?.RTChart.items[2].encodeId]: rank.counter,
            }

            return tempArray[index];
        })

        setDataChart(tempArray);
    }

    const handleIndexChartHover = (index) => {
        setIndexChartHover(index);
        setDataChartTooltip({
            data: datas?.RTChart?.items[index - 1],
            percent: percent[datas?.RTChart?.items[index - 1].encodeId],
            index,
        })
    }

    useEffect(() => {
        let indexChartTimeOut = setTimeout(() => {
            if(indexChartHover === 3) {
                setIndexChartHover(1);
            } else {
                setIndexChartHover(prev => prev + 1);
            }
        }, 3000)

        return () => {
            clearTimeout(indexChartTimeOut);
        }
    }, [indexChartHover]);


    return (
        <div className="bg-[rgba(51,16,76,.95)] p-[20px] rounded-[4px] mt-[40px]">
            <div className="flex text-[28px] font-[700] items-center">
                <h1 className="fontTextChart cursor-pointer">#zingchart</h1>
                <div className="hover:opacity-[.8] cursor-pointer text-[16px] ml-[16px] h-[20px] w-[20px] flex justify-center items-center bg-[#fff] rounded-[50%]">
                    <BsFillPlayFill />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-[10px] mt-[16px]">
                <div className="col-span-5">
                    <div>
                        {
                            datas?.RTChart?.items.map((item, index) => {
                                return <div onMouseEnter={() => setIndexChartHover(index + 1)} className={`${index + 1 === indexChartHover ? 'bg-[hsla(0,0%,100%,.2)]' : 'bg-[hsla(0,0%,100%,.07)]'} flex items-center hover:bg-[hsla(0,0%,100%,0.2)] first:mt-[0px] mt-[8px] text-[#fff] group py-[14px] px-[12px] rounded-[4px]`} key={index}>
                                    <div className={index === 0 ? 'min-w-[18px] fontTextChartOne text-[30px] cursor-default' : index === 1 ? 'min-w-[18px] fontTextChartTwo text-[30px] cursor-default' : index === 2 ? 'min-w-[18px] fontTextChartThree text-[30px] cursor-default' : 'min-w-[18px] fontTextChartOther text-[30px] cursor-default'}>
                                        <span>{index + 1}</span>
                                    </div>
                                    <div className="w-[60px] h-[60px] overflow-hidden rounded-[4px] cursor-pointer relative ml-[14px]">
                                        <img className='group-hover:brightness-[0.5]' src={item.thumbnail} alt={item.name} />
                                        <div className='group-hover:flex absolute h-full w-full hidden justify-center items-center text-[36px] text-[#fff] top-[0px]'>
                                            <BsFillPlayFill className='hover:opacity-[.8]' />
                                        </div>
                                    </div>
                                    <div className='ml-[10px] flex flex-col justify-center flex-1'>
                                        <span className='capitalize dotThreeHiddenText2 h-[16px] overflow-hidden text-[#fff] text-[14px] font-[600] leading-[16px]'>{item.name}</span>
                                        <div className='text-[12px] text-[hsla(0,0%,100%,0.5)] flex'>
                                            {
                                                item?.artists?.map((sing, index) => {
                                                    if(index === 0){
                                                        return <span className='hover:text-[#c273ed] cursor-pointer hover:underline dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]' key={index}>{sing.name}</span>
                                                    } else {
                                                        return <span className='hover:text-[#c273ed] cursor-pointer hover:underline flex group dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]' key={index}><p className='group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline'>,&nbsp;</p>{sing.name}</span>
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-[700] text-[16px] cursor-default">{percent[item.encodeId]}%</span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <Link to={config.routes.zingChart} className="flex justify-center mt-[16px] items-center">
                        <button className='hover:bg-[hsla(0,0%,100%,0.2)] px-[20px] py-[4px] rounded-[20px] outline-none text-[#fff] border-[1px] border-solid border-[#fff]'>Xem thêm</button>
                    </Link>
                </div>
                <div className="col-span-7">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={100} height={250} data={dataChart}
                            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'hsla(0,0%,100%,.5)', fontSize: 12 }} />
                            <CartesianGrid strokeDasharray="3 6" vertical={false} />
                            <Tooltip active={true} content={<CustomTooltip data={dataChartTooltip.data} percent={dataChartTooltip.percent} index={dataChartTooltip.index} />} />
                            <Line onMouseEnter={() => handleIndexChartHover(1)} strokeWidth={2} type="monotone" dataKey={datas?.RTChart.items[0].encodeId} activeDot={indexChartHover !== 1 ? false : { stroke: '#4a90e2', strokeWidth: 1, r: 6 }} dot={indexChartHover === 1 ? true : false} stroke="#4a90e2" />
                            <Line onMouseEnter={() => handleIndexChartHover(2)} strokeWidth={2} type="monotone" dataKey={datas?.RTChart.items[1].encodeId} activeDot={indexChartHover !== 2 ? false : { stroke: '#50e3c2', strokeWidth: 1, r: 6 }} dot={indexChartHover === 2 ? true : false} stroke="#50e3c2" />
                            <Line onMouseEnter={() => handleIndexChartHover(3)} strokeWidth={2} type="monotone" dataKey={datas?.RTChart.items[2].encodeId} activeDot={indexChartHover !== 3 ? false : { stroke: '#e35050', strokeWidth: 1, r: 6 }} dot={indexChartHover === 3 ? true : false} stroke="#e35050" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default Chart;