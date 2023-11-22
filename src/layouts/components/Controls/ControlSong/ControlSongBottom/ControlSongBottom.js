import { useDispatch, useSelector } from 'react-redux';
import { playlistSelector } from '~/redux/selectors';
import { useEffect, useRef, useState } from 'react';
import playlistSlice from '~/redux/slices/playlistSlice';
import axios from 'axios';

function ControlSongBottom({ refAudio }) {
    const tmp = useSelector(playlistSelector);
    const [data, setData] = useState(tmp);

    useEffect(() => {
        setData(tmp.songs[tmp.currentSong]);
    }, [tmp]);

    const processLineRef = useRef();
    const [durationCurrent, setDurationCurrent] = useState(0);
    const [process, setProcess] = useState(0);

    const dispatch = useDispatch();

    try {
        if(refAudio.current) {
            refAudio.current.ontimeupdate = () => {
                if (refAudio.current?.duration) {
                    const progressPercent = Math.floor((refAudio.current?.currentTime / refAudio.current?.duration) * 100);
        
                    setDurationCurrent(refAudio.current?.currentTime)
                    setProcess(progressPercent)
        
                    processLineRef.current.style.width = progressPercent + '%'; //2
                }
            };
    
            
            refAudio.current.onended = (e) => {
                if(data.isRepeat){
                    refAudio?.current?.play();
                } else if(data.isRandom) {
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
        }
        
    } catch (error) {
        
    }
    
    const handleOnInput = (e) => {
        try {
            processLineRef.current.style.width = e.target.value + '%';

            const seektime = e.target.value / 100 * refAudio.current?.duration;
            refAudio.current.currentTime = seektime;

            setDurationCurrent(refAudio.current?.currentTime)
        } catch {

        }
    }

    useEffect(() => {
        handleListenSong();

    }, [data.linkMusic]);


    const handleListenSong = async () => {
        try {
            const currentDate = new Date(); // Ngày hiện tại
            const currentDateTime = currentDate.getTime() / 1000;

            const res = await axios.put(`http://localhost:5000/api/v1/song/listen/${data._id}?ctime=${currentDateTime}`);
            

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="flex items-center text-[#fff] mb-[18px]">
            <span className="min-w-[44px] text-[12px] font-bold opacity-[0.5]">
                {`${
                    Math.floor(durationCurrent / 60) < 10
                        ? '0' + Math.floor(durationCurrent / 60)
                        : Math.floor(durationCurrent / 60)
                }:${
                    durationCurrent % 60 < 10
                        ? '0' + Math.floor(durationCurrent % 60)
                        : Math.floor(durationCurrent % 60)
                }` || '00:00'}
            </span>
            <div className="flex-1 flex relative items-center">
                <input
                    onInput={handleOnInput}
                    className="w-full absolute appearance-none h-[4px] outline-none rounded-[20px] cursor-pointer transition-opacity duration-[0.2s] opacity-[1] bg-[#d3d3d3]"
                    type="range"
                    value={process}
                    step="1"
                    min="0"
                    max="100"
                />
                <div
                    ref={processLineRef}
                    className={`absolute h-[4px] w-[0%] rounded-[20px] bg-[#ed2b91] pointer-events-none`}
                ></div>
            </div>
            <span className="min-w-[44px] text-[12px] font-bold text-right">{`${
                Math.floor(data.duration / 60) < 10
                    ? '0' + Math.floor(data.duration / 60)
                    : Math.floor(data.duration / 60)
            }:${data.duration % 60 < 10 ? '0' + (data.duration % 60) : data.duration % 60}`}</span>
            <audio ref={refAudio} src={data.linkMusic} autoPlay className="" preload="metadata"></audio>
        </div>
    );
}

export default ControlSongBottom;
