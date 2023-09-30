import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


function Controll() {
    return (
        <div className="text-[white] h-full flex items-center gap-[2px] text-[20px]">
            <div className="py-[8px] px-[10px] cursor-pointer"><AiOutlineArrowLeft /></div>
            <div className="py-[8px] px-[10px] cursor-default opacity-[0.4]"><AiOutlineArrowRight /></div>
        </div>
    );
}

export default Controll;