import { useEffect, useState } from "react";
import { BsPauseCircle, BsShuffle, BsFillSkipStartFill, BsFillSkipEndFill, BsPlayCircle,BsArrowLeftRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { btnPlaySelector, playlistSelector } from "~/redux/selectors";
import btnPlaySlice from "~/redux/slices/btnPlaySlice";
import playlistSlice from "~/redux/slices/playlistSlice";

function ControlSongTop({refAudio}) {
    
    const tmp = useSelector(playlistSelector);
    const btnPlayTmp = useSelector(btnPlaySelector);

    const [data, setData] = useState(tmp);
    const [btnPlay, setBtnPlay] = useState(tmp);

    
    useEffect(() => {
        setData(tmp)
        setBtnPlay(btnPlayTmp);

    }, [tmp, btnPlayTmp])
        
    const dispatch = useDispatch();

    const handlePlay = () => {

        try {
            if(btnPlayTmp.isPlay){
                dispatch(btnPlaySlice.actions.pauseMusic());
                refAudio?.current?.pause()
            } else {
                dispatch(btnPlaySlice.actions.playMusic());
                refAudio?.current?.play()
            }
            
        } catch (error) {
            
        }


    }

    const handleNextSong = () => {
        if(data?.isRandom) {
            let newIndex;
            do{
                newIndex = Math.floor(Math.random() * data?.songs?.length);
            } while(newIndex === data.currentSong || data.indexSongRandom.includes(newIndex));
    
            const indexSongRandomNew = [...data.indexSongRandom, newIndex];

            dispatch(playlistSlice.actions.pushIndexSongRandom(indexSongRandomNew));

            
            dispatch(playlistSlice.actions.changeSong(newIndex));
    
            
            refAudio?.current?.play()
    
    
            if(data?.songs?.length === indexSongRandomNew.length){
                dispatch(playlistSlice.actions.resetIndexSongRandom());
            }
        } else {
            dispatch(playlistSlice.actions.nextMusic());
            refAudio?.current?.play()
        }
    }

    const handlePrevSong = () => {
        if(data?.isRandom) {
            let newIndex;
            do{
                newIndex = Math.floor(Math.random() * data?.songs?.length);
            } while(newIndex === data.currentSong || data.indexSongRandom.includes(newIndex));
    
            const indexSongRandomNew = [...data.indexSongRandom, newIndex];

            dispatch(playlistSlice.actions.pushIndexSongRandom(indexSongRandomNew));


            
            dispatch(playlistSlice.actions.changeSong(newIndex));
    
            
            refAudio?.current?.play()
    
    
            if(data?.songs?.length === data.indexSongRandom.length){
                dispatch(playlistSlice.actions.resetIndexSongRandom());
            }

        } else {
            dispatch(playlistSlice.actions.prevMusic());
            refAudio?.current?.play()
        }
    }


    return (
        <div className="flex justify-center h-full items-center text-[#fff] gap-[20px]">
            <button onClick={() => dispatch(playlistSlice.actions.isRandom())} className={`${data?.isRandom ? 'text-[#c273ed]' : 'text-[#fff]'} h-[30px] w-[30px] text-[16px] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)] flex justify-center items-center rounded-[50%]`}>
                <BsShuffle />
            </button>
            <button onClick={handlePrevSong} className="active:opacity-[.8] h-[30px] w-[30px] text-[20px] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)] flex justify-center items-center rounded-[50%]">
                <BsFillSkipStartFill />
            </button>
            <button onClick={handlePlay} className="h-[30px] w-[30px] text-[36px] cursor-pointer hover:text-[#c273ed] flex justify-center items-center rounded-[50%]">
                {
                    btnPlay.isPlay ?
                    <BsPauseCircle /> :
                    <BsPlayCircle />
                }
            </button>
            <button onClick={handleNextSong} className="active:opacity-[.8] h-[30px] w-[30px] text-[20px] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)] flex justify-center items-center rounded-[50%]">
                <BsFillSkipEndFill />
            </button>
            <button onClick={() => dispatch(playlistSlice.actions.isRepeat())} className={`${data?.isRepeat ? 'text-[#c273ed]' : 'text-[#fff]'} h-[30px] w-[30px] text-[16px] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)] flex justify-center items-center rounded-[50%]`}>
                <BsArrowLeftRight />
            </button>
        </div>
    );
}

export default ControlSongTop;
