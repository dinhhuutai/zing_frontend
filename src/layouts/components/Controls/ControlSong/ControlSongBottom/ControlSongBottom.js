function ControlSongBottom() {
    return (
        <div className="flex items-center text-[#fff] mb-[18px]">
            <span className="min-w-[44px] text-[12px] font-bold opacity-[0.5]">00:00</span>
            <div className="flex-1 flex relative items-center">
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
            <span className="min-w-[44px] text-[12px] font-bold text-right">05:21</span>
        </div>
    );
}

export default ControlSongBottom;
