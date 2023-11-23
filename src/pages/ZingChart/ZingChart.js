import { useEffect, useState } from "react";
import Chart from "./Chart";
import Rank from "./Rank";
import WeekChart from "./WeekRank";
import axios from "axios";


function ZingChart() {

    const [data, setData] = useState();


    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {

        try {
            const currentDate = new Date(); // Ngày hiện tại
            const currentDateTime = currentDate.getTime() / 1000;
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/v1/page/zingchart/get?ctime=${currentDateTime}`);

    
            if(res.data.success) {
                setData(res.data.items);
            }


        } catch (error) {
            console.log(error);
        }

    }


    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div className='px-[50px] py-[20px]'>
            <Chart data={data?.rtChart} />
            <Rank />
            <WeekChart />
        </div>
    );
}

export default ZingChart;