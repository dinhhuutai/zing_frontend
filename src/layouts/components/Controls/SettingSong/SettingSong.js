import { BsBadgeTm, BsMic, BsAspectRatio, BsVolumeUp, BsMusicNoteList } from 'react-icons/bs';

function SettingSong() {
    return (
        <div className='flex h-full text-[#fff] items-center gap-[4px] justify-end'>
            <div className="h-[28px] w-[28px] text-[16px] flex justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)]">
                <BsBadgeTm />
            </div>
            <div className="h-[28px] w-[28px] text-[16px] flex justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)]">
                <BsMic />
            </div>
            <div className="h-[28px] w-[28px] text-[16px] flex justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)]">
                <BsAspectRatio />
            </div>
            <div className="h-[28px] w-[28px] text-[16px] flex justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)]">
                <BsVolumeUp />
            </div>
            <div className="w-[60px] relative">
                <input
                    className="w-full absolute appearance-none h-[4px] outline-none rounded-[20px] cursor-pointer transition-opacity duration-[0.2s] opacity-[1] bg-[#d3d3d3]"
                    type="range"
                    value="0"
                    step="1"
                    min="0"
                    max="100"
                />
                <div className="absolute h-[4px] w-[50%] rounded-[20px] bg-[#ed2b91]"></div>
            </div>
            <div className="w-[1px] h-[30%] bg-[#6b6868] mx-[6px]"></div>
            <div className="h-[28px] w-[28px] text-[16px] flex justify-center items-center rounded-[6px] cursor-pointer bg-[hsla(0,0%,100%,.1)] hover:bg-[#d1cfcf44]">
                <BsMusicNoteList />
            </div>
        </div>
    );
}

export default SettingSong;
