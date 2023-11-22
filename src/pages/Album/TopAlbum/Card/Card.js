import { BsFillPlayFill, BsThreeDots, BsMic, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import playlistSlice from "~/redux/slices/playlistSlice";
import { playlistSelector } from '~/redux/selectors';
import { useEffect, useState } from "react";
import btnPlaySlice from "~/redux/slices/btnPlaySlice";

function Card({value, index}) {

    const tmp = useSelector(playlistSelector);
    const [currentSong, setCurrentSong] = useState(tmp);
    
    
    useEffect(() => {
        setCurrentSong(tmp?.songs[tmp?.currentSong])
    }, [tmp])
    
    const dispatch = useDispatch();
    const handlePlayMusic = () => {
        if(value._id !== currentSong._id) {
            dispatch(playlistSlice.actions.changeSong(index));
            dispatch(btnPlaySlice.actions.playMusic());
        }
    }


    return (
    <div
        className={`flex px-[10px] items-center hover:bg-[hsla(0,0%,100%,0.2)] first:mt-[0px] mt-[8px] text-[#fff] group py-[10px] border-b-[1px] border-solid border-[hsla(0,0%,100%,0.05)] rounded-[4px]`}
    >
        <div className="w-[50%] flex items-center">
            <div className="text-[hsla(0,0%,100%,0.5)] text-[13px] relative w-[15px] flex items-center">
                <div className="absolute group-hover:hidden flex items-center">
                    <BsMusicNoteBeamed />
                </div>
                <div className="absolute group-hover:flex hidden items-center">
                    <input className="border-[1px] border-solid border-[#a0a0a0] appearance-none p-[5px] rounded-[2px]" type='checkbox' />
                </div>
            </div>
            <button onClick={handlePlayMusic} className={`overflow-hidden rounded-[4px] cursor-pointer relative ml-[10px] w-[40px] h-[40px]`}>
                <img className="group-hover:brightness-[0.5]" src={value.thumbnail} alt={value.title} />
                <div className="group-hover:flex absolute h-full w-full hidden justify-center items-center text-[24px] text-[#fff] top-[0px]">
                    <BsFillPlayFill className="hover:opacity-[.8]" />
                </div>
            </button>
            <div className={`ml-[10px] flex flex-col justify-center`}>
                <span className="capitalize cursor-default dotThreeHiddenText2 h-[16px] overflow-hidden text-[#fff] text-[14px] font-[600] leading-[16px]">
                    {value.name}
                </span>
                <div className="text-[12px] text-[hsla(0,0%,100%,0.5)] flex">
                    {value?.artists.map((sing, index) => {
                        if (index === 0) {
                            return (
                                <span
                                    className="hover:text-[#c273ed] cursor-pointer hover:underline dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]"
                                    key={index}
                                >
                                    {sing.name}
                                </span>
                            );
                        } else {
                            return (
                                <span
                                    className="hover:text-[#c273ed] cursor-pointer hover:underline flex group dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]"
                                    key={index}
                                >
                                    <p className="group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline">
                                        ,&nbsp;
                                    </p>
                                    {sing.name}
                                </span>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
        <div className="flex flex-1">
            <span className='text-[12px] text-[hsla(0,0%,100%,0.5)] dotThreeHiddenText2 h-[16px] overflow-hidden hover:text-[#c273ed] hover:underline cursor-pointer'>{value?.album}</span>
        </div>
        <div className=''>
            <div className="text-[12px] text-[hsla(0,0%,100%,0.5)] group-hover:hidden">
                <span>{`${Math.floor(value.duration / 60) < 10 ? "0"+Math.floor(value.duration / 60) : Math.floor(value.duration / 60)}:${value.duration % 60 < 10 ? "0"+(value.duration % 60) : value.duration % 60}`}</span>
            </div>
            <div className={`group-hover:flex text-[14px] hidden gap-[4px]`}>
                <div className="flex h-[30px] w-[30px] justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]">
                    <BsMic />
                </div>
                <div className="flex h-[30px] w-[30px] justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]">
                    <AiOutlineHeart />
                </div>
                <div className="flex h-[30px] w-[30px] justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]">
                    <BsThreeDots />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;