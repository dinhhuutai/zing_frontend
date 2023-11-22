import InfoSong from "./InfoSong";
import ControlSong from "./ControlSong";
import SettingSong from "./SettingSong";
import { useState } from "react";


function Controls() {

    const [process, setProcess] = useState(50);

    return (
        <div className="bg-[var(--bg-color-controls)] h-full w-full flex px-[26px] border-t-[1px] border-solid border-[hsla(0,0%,100%,0.1)]">
            <div className="w-[30%]">
                <InfoSong />
            </div>

            <div className="flex-1">
                <ControlSong process={process} />
            </div>

            <div className="w-[25%]">
                <SettingSong process={process} setProcess={setProcess} />
            </div>
        </div>
    );
}

export default Controls;