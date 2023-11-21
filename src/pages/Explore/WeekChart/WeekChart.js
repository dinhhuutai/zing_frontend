import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';

// import weekChart1 from '~/assets/imgs/week-chart-1.jpg';
// import weekChart2 from '~/assets/imgs/week-chart-2.jpg';
// import weekChart3 from '~/assets/imgs/week-chart-3.jpg';


// const dataWeekChart = [
//     {
//         name: 'vn',
//         img: weekChart1,
//     },
//     {
//         name: 'kpop',
//         img: weekChart2,
//     },
//     {
//         name: 'usuk',
//         img: weekChart3,
//     },
// ]


function WeekChart({data}) {

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setDatas(data);
    }, [data]); 

    return (
        <div>
            <div className='grid grid-cols-3 gap-[20px] mt-[30px]'>
                {
                    datas?.items?.map((item, index) => {
                        return <Link to={`${item.name === 'vn' ? config.routes.zingChartVietNam+'/123' : item.name === 'kpop' ? config.routes.zingChartKpop+'/123' : item.name === 'usuk' ? config.routes.zingChartUsUk+'/123' : ''}`} key={index} className='rounded-[4px] overflow-hidden cursor-pointer group'>
                            <img alt={item.name} src={item.image} className='group-hover:scale-[1.2] object-cover transition-all duration-[.8s]' />
                        </Link>
                    })
                }
            </div>
        </div>
    );
}

export default WeekChart;