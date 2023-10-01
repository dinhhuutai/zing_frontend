import ControlSongBottom from "./ControlSongBottom";
import ControlSongTop from "./ControlSongTop";


function ControlSong() {
    return (
        <div className="flex flex-col h-full">
            <ControlSongTop />
            <ControlSongBottom />
        </div>
    );
}

export default ControlSong;