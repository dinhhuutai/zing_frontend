import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { audioReducer } from '~/reducers/audioReducer';
import { playlistSelector } from '~/redux/selectors';

export const AudioContext = createContext();

const AudioContextProvider = ({ children }) => {
    const [audioState, dispatch] = useReducer(audioReducer, {
        linkMusic: '',
    });

    const refAudio = useRef();

    
    const tmp = useSelector(playlistSelector);
    const [data, setData] = useState(tmp);

    useEffect(() => {
        setData(tmp.songs[tmp.currentSong]);
    }, [tmp]);



    //Context data
    const audioContextData = { audioState, refAudio };

    //Return provider
    return (
        <AudioContext.Provider value={audioContextData}>
            {children}
            <audio ref={refAudio} src={data?.linkMusic} autoPlay className="" preload="metadata"></audio>
        </AudioContext.Provider>
    );
};

export default AudioContextProvider;
