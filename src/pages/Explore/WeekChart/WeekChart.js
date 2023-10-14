import { useEffect, useState } from 'react';
import weekChart1 from '~/assets/imgs/week-chart-1.jpg';
import weekChart2 from '~/assets/imgs/week-chart-2.jpg';
import weekChart3 from '~/assets/imgs/week-chart-3.jpg';


const dataWeekChart = [
    {
        name: '',
        img: weekChart1,
    },
    {
        name: '',
        img: weekChart2,
    },
    {
        name: '',
        img: weekChart3,
    },
]


function WeekChart() {

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setDatas(dataWeekChart);
    }, []); 

    return (
        <div>
            <div className='grid grid-cols-3 gap-[20px] mt-[30px]'>
                {
                    datas?.map((data, index) => {
                        return <div key={index} className='rounded-[4px] overflow-hidden cursor-pointer group'>
                            <img alt={data.name} src={data.img} className='group-hover:scale-[1.2] transition-all duration-[.8s]' />
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default WeekChart;