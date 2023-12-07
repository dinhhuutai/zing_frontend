import { useEffect, useState } from 'react';
import FrameRank from './FrameRank';


import bgWeekChart from '~/assets/imgs/bg-weekchart.jpg';


function WeekRank({data}) {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(data);
    }, [data]);


    return (
        <div className='mt-[30px] bg-cover mx-[-50px] my-[-20px] relative'>
            <div className='bg-cover absolute top-[0px] bottom-[0px] left-[0px] right-[0px]' style={{backgroundImage: `url(${bgWeekChart})`}}></div>
            <div className='bg-[rgba(32,19,53,0.9)] absolute top-[0px] bottom-[0px] left-[0px] right-[0px]'></div>
            <div className='px-[50px] py-[20px] relative'>
                <h1 className='text-[34px] text-[#fff] capitalize font-[700] cursor-pointer'>Bảng xếp hạng tuần</h1>
                <div className='grid grid-cols-3 gap-[16px] mt-[10px]'>
                    {
                        datas?.map((item, index) => {
                            return <div key={index} className='bg-[hsla(0,0%,100%,0.05)] py-[20px] px-[10px] rounded-[14px]'>
                                <FrameRank data={item} index={index} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default WeekRank;