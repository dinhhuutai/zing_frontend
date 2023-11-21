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
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { userSelector } from '~/redux/selectors';

function Explore() {

    const [data, setData] = useState();
    const [dataRecently, setDataRecently] = useState();

    const tmp = useSelector(userSelector);
    
    useEffect(() => {
        setDataRecently(tmp?.login?.currentUser?.playlistHistory);
    }, [tmp])


    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {

        try {
            const currentDate = new Date(); // Ngày hiện tại
            const currentDateTime = currentDate.getTime() / 1000;
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/v1/page/explore/get?ctime=${currentDateTime}`);
    
            if(res.data.success) {
                setData(res.data.items);
            }


        } catch (error) {

        }

    }

    
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div className='px-[50px]'>
            <Slider data={data?.slider} />
            {
                dataRecently && <Recently data={dataRecently} />
            }
            <NewRelease data={data?.newRelease} />
            <Chill data={data?.chill} />
            <Favorite data={data?.loveInLife} />
            <Remix data={data?.remix} />
            <Mentality data={data?.slowly} />
            <Popular data={data?.onlyArtist} />
            <Rank data={data?.bxhSongNew} />
            <Chart data={data?.rtChart} />
            <WeekChart data={data?.weekchart} />
            <Top data={data?.top100} />
            <Album data={data?.album} />
            <Radio />
            <Partner data={data?.partner} />
        </div>
    );
}

export default Explore;
