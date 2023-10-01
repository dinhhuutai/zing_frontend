import { BsShuffle, BsFillSkipStartFill, BsFillSkipEndFill, BsPlayCircle,BsArrowLeftRight } from "react-icons/bs";

function ControlSongTop() {
    return (
        <div className="flex justify-center h-full items-center text-[#fff] gap-[20px]">
            <div className="h-[30px] w-[30px] text-[16px] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)] flex justify-center items-center rounded-[50%]">
                <BsShuffle />
            </div>
            <div className="h-[30px] w-[30px] text-[20px] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)] flex justify-center items-center rounded-[50%]">
                <BsFillSkipStartFill />
            </div>
            <div className="h-[30px] w-[30px] text-[36px] cursor-pointer hover:text-[#c273ed] flex justify-center items-center rounded-[50%]">
                <BsPlayCircle />
            </div>
            <div className="h-[30px] w-[30px] text-[20px] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)] flex justify-center items-center rounded-[50%]">
                <BsFillSkipEndFill />
            </div>
            <div className="h-[30px] w-[30px] text-[16px] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)] flex justify-center items-center rounded-[50%]">
                <BsArrowLeftRight />
            </div>
        </div>
    );
}

export default ControlSongTop;
