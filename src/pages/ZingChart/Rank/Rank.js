import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardRank from "~/components/CardRank";
import { AudioContext } from '~/contexts/AudioContext';
import { btnPlaySelector, playlistSelector } from '~/redux/selectors';
import btnPlaySlice from '~/redux/slices/btnPlaySlice';
import playlistSlice from '~/redux/slices/playlistSlice';



function Rank({data}) {
    const [datas, setDatas] = useState([]);
    const [seeMore, setSeeMore] = useState(false);

    useEffect(() => {
        setDatas(data);
    }, [data]);


    
    const tmp = useSelector(playlistSelector);
    const btnPlayTmp = useSelector(btnPlaySelector);
    const [currentSong, setCurrentSong] = useState(tmp);
    
    
    useEffect(() => {
        setCurrentSong(tmp?.songs[tmp?.currentSong]);
    }, [tmp, btnPlayTmp])

    const { refAudio } = useContext(AudioContext);

    
    const dispatch = useDispatch();
    const handlePlayMusic = (item, index) => {
        if(item._id !== currentSong._id) {
            dispatch(playlistSlice.actions.startPlaylist({songs: datas, index}));
            dispatch(btnPlaySlice.actions.playMusic());
        } else {
            if(btnPlayTmp.isPlay){
                dispatch(btnPlaySlice.actions.pauseMusic());
                refAudio?.current?.pause()
            } else {
                dispatch(btnPlaySlice.actions.playMusic());
                refAudio?.current?.play()
            }
        }
    }


    return (
        <div className="mt-[10px]">
            <div>
                {datas?.map((item, index) => {
                    return (
                        seeMore ? <div key={index}>
                            <CardRank handlePlayMusic={handlePlayMusic} data={item} index={index} />
                        </div> : 
                        index <= 9 ? <div key={index}>
                        <CardRank handlePlayMusic={handlePlayMusic} data={item} index={index} />
                    </div> : ""
                    );
                })}
            </div>
            <div className="flex justify-center mt-[16px] items-center">
                <button onClick={() => setSeeMore(prev => !prev)} className="hover:bg-[hsla(0,0%,100%,0.2)] px-[20px] py-[4px] rounded-[20px] outline-none text-[#fff] border-[1px] border-solid border-[#fff]">
                    {
                        seeMore ? 'Ẩn bớt' : 'Xem top 100'
                    }
                </button>
            </div>
        </div>
    );
}

export default Rank;
