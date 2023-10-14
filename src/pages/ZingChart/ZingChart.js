import Chart from "./Chart";
import Rank from "./Rank";
import WeekChart from "./WeekRank";


function ZingChart() {
    return (
        <div className='px-[50px] py-[20px]'>
            <Chart />
            <Rank />
            <WeekChart />
        </div>
    );
}

export default ZingChart;