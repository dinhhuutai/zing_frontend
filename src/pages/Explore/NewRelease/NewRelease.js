import { useContext, useEffect, useState } from 'react';
import {format} from "timeago.js";
import { BsFillPlayFill, BsThreeDots, BsChevronRight } from "react-icons/bs";

import { Link } from 'react-router-dom';
import config from '~/config';
import { useDispatch, useSelector } from 'react-redux';
import playlistSlice from '~/redux/slices/playlistSlice';
import { btnPlaySelector, playlistSelector } from '~/redux/selectors';
import btnPlaySlice from '~/redux/slices/btnPlaySlice';

import iconPlay from '~/assets/imgs/icon-playing.gif';
import { AudioContext } from '~/contexts/AudioContext';


function NewRelease({data}) {
    const { refAudio } = useContext(AudioContext);

    const [datas, setDatas] = useState([]);
    const [typeRelease, setTypeRelease] = useState('all');


    useEffect(() => {
        if(typeRelease === 'all'){
            setDatas(data?.items?.all);
        } else if(typeRelease === 'vn'){
            setDatas(data?.items?.vn);
        } else if(typeRelease === 'qt'){
            setDatas(data?.items?.qt);
        }

    }, [typeRelease, data]);

    
    const tmp = useSelector(playlistSelector);
    const btnPlayTmp = useSelector(btnPlaySelector);
    const [btnPlay, setBtnPlay] = useState(false);
    const [currentSong, setCurrentSong] = useState(tmp);
    
    
    useEffect(() => {
        setCurrentSong(tmp?.songs[tmp?.currentSong]);
        setBtnPlay(btnPlayTmp);
    }, [tmp, btnPlayTmp, data])
    

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
        <div className='text-[#fff] mt-[40px]'>
            <h1 className='text-[18px] capitalize font-bold'>{data?.title}</h1>
            <div className='mt-[18px] flex justify-between'>
                <div className='flex gap-[14px]'>
                    <button onClick={() => setTypeRelease('all')} className={typeRelease === 'all' ? 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid bg-[#9b4de0] border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]' : 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]'}>Tất cả</button>
                    <button onClick={() => setTypeRelease('vn')} className={typeRelease === 'vn' ? 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid bg-[#9b4de0] border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]' : 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]'}>Việt Nam</button>
                    <button onClick={() => setTypeRelease('qt')} className={typeRelease === 'qt' ? 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid bg-[#9b4de0] border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]' : 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]'}>Quốc tế</button>
                </div>
                <Link to={`${config.routes.newReleaseSong}?filter=${typeRelease === 'qt' ? "usuk" : typeRelease}`} className='hover:text-[#c273ed] cursor-pointer text-[hsla(0,0%,100%,0.5)] flex items-center'>
                    <div className="uppercase text-[12px]">Tất cả</div>
                    <div className='text-[18px] ml-[4px]'><BsChevronRight /></div>
                </Link>
            </div>
            <div className='grid grid-cols-3 gap-[10px] mt-[20px]'>
                {
                    datas?.map((item, index) => {
                        return <div key={index} className={`${currentSong._id === item._id && 'bg-[hsla(0,0%,100%,0.1)]'} group flex px-[8px] py-[8px] hover:bg-[hsla(0,0%,100%,0.1)] rounded-[4px] items-center`}>
                            <button onClick={() => handlePlayMusic(item, index)} className='h-[60px] w-[60px] rounded-[4px] overflow-hidden cursor-pointer relative'>
                                <img alt={item.name} src={item.thumbnail} className={`${currentSong._id === item._id && 'brightness-[0.5]'} group-hover:brightness-[0.5]`} />
                                <div className={`${currentSong._id === item._id ? 'flex group-hover:flex absolute h-full w-full justify-center items-center text-[36px] text-[#fff] top-[0px]' : 'group-hover:flex absolute h-full w-full hidden justify-center items-center text-[36px] text-[#fff] top-[0px]'}`}>
                                    {
                                        currentSong._id === item._id && btnPlay.isPlay ?
                                        <img className='h-[20px]' src={iconPlay} alt='play' /> :
                                        <BsFillPlayFill className='hover:opacity-[.8]' />
                                    }
                                </div>
                            </button>
                            <div className='ml-[10px] flex flex-col justify-center flex-1'>
                                <span className='capitalize dotThreeHiddenText h-[16px] overflow-hidden text-[14px] leading-[16px]'>{item.name}</span>
                                <div className='text-[12px] text-[hsla(0,0%,100%,0.5)] flex dotThreeHiddenText overflow-hidden h-[16px] leading-[16px]'>
                                    {
                                        item.artists && item?.artists.map((sing, index) => {
                                            if(index === 0){
                                                return <span className='hover:text-[#c273ed] cursor-pointer hover:underline' key={index}>{sing.name}</span>
                                            } else {
                                                return <span className='hover:text-[#c273ed] cursor-pointer hover:underline flex group' key={index}><p className='group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline'>,&nbsp;</p>{sing.name}</span>
                                            }
                                        })
                                    }
                                </div>
                                <span className='text-[12px] text-[hsla(0,0%,100%,0.5)]'>{format(item.createDate)}</span>
                            </div>
                            <div className='group-hover:flex text-[16px] mr-[6px] cursor-pointer h-[30px] w-[30px] hidden justify-center items-center rounded-[50%] hover:bg-[hsla(0,0%,100%,0.1)]'>
                                <BsThreeDots />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default NewRelease;