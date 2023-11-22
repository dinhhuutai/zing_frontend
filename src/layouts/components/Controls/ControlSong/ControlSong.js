import { useEffect, useRef } from "react";
import ControlSongBottom from "./ControlSongBottom";
import ControlSongTop from "./ControlSongTop";


function ControlSong({process}) {

    const refAudio = useRef();

    useEffect(() => {
        refAudio.current.volume = process / 100;
        
    }, [process])

    return (
        <div className="flex flex-col h-full">
            <ControlSongTop refAudio={refAudio} />
            <ControlSongBottom refAudio={refAudio} />
        </div>
    );
}

export default ControlSong;