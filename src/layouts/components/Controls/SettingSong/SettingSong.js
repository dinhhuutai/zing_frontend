import { useRef } from 'react';
import { BsBadgeTm, BsMic, BsAspectRatio, BsVolumeUp, BsMusicNoteList, BsVolumeMute, BsVolumeDown, BsVolumeOff } from 'react-icons/bs';

function SettingSong({process, setProcess}) {
    
    const processLineRef = useRef();

    const handleOnInput = (e) => {
        processLineRef.current.style.width = e.target.value + '%';
        setProcess(e.target.value);
        
    }

    const handleVolum = () => {
        if(process > 0) {
            setProcess(0);
            processLineRef.current.style.width = '0%';
        } else {
            setProcess(60);
            processLineRef.current.style.width = '60%';
        }
    }


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
            <button onClick={handleVolum} className="h-[28px] w-[28px] text-[18px] flex justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)]">
                {
                    process <= 0 ?
                    <BsVolumeMute /> :
                    process < 30 ?
                    <BsVolumeOff /> :
                    process >= 30 && process < 80 ?
                    <BsVolumeDown /> :
                    <BsVolumeUp />
                }
            </button>
            <div className="w-[60px] relative flex items-center">
                <input
                    onInput={handleOnInput}
                    className="w-full absolute appearance-none h-[4px] outline-none rounded-[20px] cursor-pointer transition-opacity duration-[0.2s] opacity-[1] bg-[#d3d3d3]"
                    type="range"
                    value={process}
                    step="1"
                    min="0"
                    max="100"
                />
                <div ref={processLineRef} className="absolute h-[4px] w-[50%] rounded-[20px] bg-[#ed2b91] pointer-events-none"></div>
            </div>
            <div className="w-[1px] h-[30%] bg-[#6b6868] mx-[6px]"></div>
            <div className="h-[28px] w-[28px] text-[16px] flex justify-center items-center rounded-[6px] cursor-pointer bg-[hsla(0,0%,100%,.1)] hover:bg-[#d1cfcf44]">
                <BsMusicNoteList />
            </div>
        </div>
    );
}

export default SettingSong;
