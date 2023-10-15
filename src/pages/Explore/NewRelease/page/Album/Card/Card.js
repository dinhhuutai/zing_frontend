import { BsFillPlayFill, BsThreeDots, BsMic, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { format } from "timeago.js";

function Card({value}) {
    return (
    <div
        className={`flex px-[10px] cursor-pointer items-center hover:bg-[hsla(0,0%,100%,0.2)] first:mt-[0px] mt-[8px] text-[#fff] group py-[10px] border-b-[1px] border-solid border-[hsla(0,0%,100%,0.05)] rounded-[4px]`}
    >
        <div className="w-[60%] flex items-center">
            <div className='relative w-[85px] h-[85px] ml-[10px]'>
                <div className={`group-hover:translate-x-[-10px] transition-all ease-linear duration-[.3s] z-[1] overflow-hidden rounded-[4px] cursor-pointer relative w-full h-full`}>
                    <img className="group-hover:brightness-[0.5]" src={value.img} alt={value.name} />
                    <div className="group-hover:flex absolute h-full w-full hidden justify-center items-center text-[34px] text-[#fff] top-[0px]">
                        <BsFillPlayFill className="hover:opacity-[.8]" />
                    </div>
                </div>
                <div className="absolute w-full h-full flex top-[0px] items-center justify-end right-[-10px]">
                    <img className="group-hover:rotate-[180deg] transition-all ease-linear duration-[.3s] w-full h-full" src={value.imgDisk} alt={value.name} />
                </div>
            </div>
            <div className={`ml-[24px] flex flex-col justify-center`}>
                <span className="capitalize cursor-default dotThreeHiddenText2 h-[16px] overflow-hidden text-[#fff] text-[14px] font-[600] leading-[16px]">
                    {value.name}
                </span>
                <div className="text-[12px] mt-[4px] text-[hsla(0,0%,100%,0.5)] flex">
                    {value.singer.map((sing, index) => {
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
            <span className='text-[12px] text-[hsla(0,0%,100%,0.5)]'>{format(value.releaseDate)}</span>
        </div>
        <div className=''>
            <div className={`group-hover:flex text-[14px] hidden gap-[10px]`}>
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