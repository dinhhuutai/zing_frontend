import Slider from './Slider';
import Recently from './Recently';
import NewRelease from './NewRelease';
import Chill from './Chill';
import Favorite from './Favorite';
import Remix from './Remix';
import Mentality from './Mentality';
import Rank from './Rank';
import Chart from './Chart';
import WeekChart from './WeekChart';
import Top from './Top';
import Popular from './Popular';
import Album from './Album';
import Radio from './Radio';
import Partner from './Partner';

function Explore() {
    return (
        <div className='px-[50px]'>
            <Slider />
            <Recently />
            <NewRelease />
            <Chill />
            <Favorite />
            <Remix />
            <Mentality />
            <Popular />
            <Rank />
            <Chart />
            <WeekChart />
            <Top />
            <Album />
            <Radio />
            <Partner />
        </div>
    );
}

export default Explore;
