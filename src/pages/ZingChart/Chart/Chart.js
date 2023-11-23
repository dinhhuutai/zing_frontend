import { BsFillPlayFill } from "react-icons/bs";
import { useEffect, useState } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';



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


function Chart({ data }) {

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
        <div className="rounded-[4px]">
            <div className="flex text-[34px] font-[700] items-center">
                <h1 className="fontTextChart cursor-pointer">#zingchart</h1>
                <div className="hover:opacity-[.8] cursor-pointer text-[26px] ml-[16px] h-[30px] w-[30px] flex justify-center items-center bg-[#fff] rounded-[50%]">
                    <BsFillPlayFill />
                </div>
            </div>
            <div className="h-[300px] mt-[20px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={100} height={250} data={dataChart}
                        margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" tickSize="10" axisLine={false} tickLine={false} tick={{ fill: 'hsla(0,0%,100%,.5)', fontSize: 12 }} />
                        <CartesianGrid strokeDasharray="3 6" vertical={false} />
                        <Tooltip active={true} content={<CustomTooltip data={dataChartTooltip.data} percent={dataChartTooltip.percent} index={dataChartTooltip.index} />} />
                        <Line onMouseEnter={() => handleIndexChartHover(1)} strokeWidth={2} type="monotone" dataKey={datas?.RTChart.items[0].encodeId} activeDot={indexChartHover !== 1 ? false : { stroke: '#4a90e2', strokeWidth: 1, r: 6 }} dot={indexChartHover === 1 ? true : false} stroke="#4a90e2" />
                        <Line onMouseEnter={() => handleIndexChartHover(2)} strokeWidth={2} type="monotone" dataKey={datas?.RTChart.items[1].encodeId} activeDot={indexChartHover !== 2 ? false : { stroke: '#50e3c2', strokeWidth: 1, r: 6 }} dot={indexChartHover === 2 ? true : false} stroke="#50e3c2" />
                        <Line onMouseEnter={() => handleIndexChartHover(3)} strokeWidth={2} type="monotone" dataKey={datas?.RTChart.items[2].encodeId} activeDot={indexChartHover !== 3 ? false : { stroke: '#e35050', strokeWidth: 1, r: 6 }} dot={indexChartHover === 3 ? true : false} stroke="#e35050" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Chart;