import InfoSong from "./InfoSong";
import ControlSong from "./ControlSong";
import SettingSong from "./SettingSong";
import { useState } from "react";


function Controls() {


    return (
        <div className="bg-[var(--bg-color-controls)] h-full w-full flex px-[26px] border-t-[1px] border-solid border-[hsla(0,0%,100%,0.1)]">
            <div className="w-[30%]">
                <InfoSong />
            </div>

            <div className="flex-1">
                <ControlSong />
            </div>

            <div className="w-[25%]">
                <SettingSong />
            </div>
        </div>
    );
}

export default Controls;