import { AiOutlineHeart } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { useSelector } from "react-redux";
import { playlistSelector } from "~/redux/selectors";
import { useEffect, useState } from "react";

function InfoSong() {

    
    const tmp = useSelector(playlistSelector);
    const [data, setData] = useState(tmp);
    
    
    useEffect(() => {
        setData(tmp.songs[tmp.currentSong])
    }, [tmp])

    return (
        <div className="h-full flex items-center pr-[50px]">
            <div className="flex items-center cursor-pointer">
                <img
                    src={data?.thumbnail}
                    alt="img"
                    className="h-[66px] w-[66px] rounded-[4px] border-[1px] border-solid border-[#2a292990]"
                />
            </div>
            <div className="text-[#fff] text-[12px] ml-[8px] flex-1">
                <span className="font-bold cursor-pointer">{data?.name}</span>
                <div className="text-[12px] text-[hsla(0,0%,100%,0.5)] flex dotThreeHiddenText overflow-hidden h-[16px] leading-[16px]">
                    {data?.artists &&
                        data?.artists.map((sing, index) => {
                            if (index === 0) {
                                return (
                                    <span className="hover:text-[#c273ed] cursor-pointer hover:underline" key={index}>
                                        {sing.name}
                                    </span>
                                );
                            } else {
                                return (
                                    <span
                                        className="hover:text-[#c273ed] cursor-pointer hover:underline flex group"
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
            <div className="text-[white] flex gap-[6px] ml-[10px] flex-1">
                <div className="h-[28px] w-[28px] text-[18px] flex justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)]">
                    <AiOutlineHeart />
                </div>
                <div className="h-[28px] w-[28px] text-[18px] flex justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)]">
                    <BsThreeDots />
                </div>
            </div>
        </div>
    );
}

export default InfoSong;
