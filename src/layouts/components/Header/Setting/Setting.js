import { AiOutlineSetting, AiOutlineUser, AiOutlineDownload } from "react-icons/ai";


function Setting() {
    return (
        <div className="text-[white] text-[20px] gap-[10px] flex">
            <div className="cursor-pointer hover:opacity-[0.8] h-[36px] text-[#c273ed] px-[20px] bg-[#463d55] rounded-[20px] flex items-center justify-center">
                <AiOutlineDownload />
                <span className="text-[12px] font-bold ml-[4px]">Tải bản Windows</span>
            </div>
            <div className="cursor-pointer hover:opacity-[0.8] h-[36px] w-[36px] bg-[#463d55] rounded-[50%] flex items-center justify-center">
                <AiOutlineSetting />
            </div>
            <div className="cursor-pointer hover:opacity-[0.8] h-[36px] w-[36px] bg-[#f3e3e6] rounded-[50%] text-[#544f4f] flex items-center justify-center">
                <AiOutlineUser />
            </div>
        </div>
    );
}

export default Setting;