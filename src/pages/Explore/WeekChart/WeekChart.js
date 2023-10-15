import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import weekChart1 from '~/assets/imgs/week-chart-1.jpg';
import weekChart2 from '~/assets/imgs/week-chart-2.jpg';
import weekChart3 from '~/assets/imgs/week-chart-3.jpg';
import config from '~/config';


const dataWeekChart = [
    {
        name: 'vn',
        img: weekChart1,
    },
    {
        name: 'kpop',
        img: weekChart2,
    },
    {
        name: 'usuk',
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
                        return <Link to={`${data.name === 'vn' ? config.routes.zingChartVietNam+'/123' : data.name === 'kpop' ? config.routes.zingChartKpop+'/123' : data.name === 'usuk' ? config.routes.zingChartUsUk+'/123' : ''}`} key={index} className='rounded-[4px] overflow-hidden cursor-pointer group'>
                            <img alt={data.name} src={data.img} className='group-hover:scale-[1.2] transition-all duration-[.8s]' />
                        </Link>
                    })
                }
            </div>
        </div>
    );
}

export default WeekChart;