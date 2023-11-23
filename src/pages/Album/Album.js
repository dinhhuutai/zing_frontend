import TopAlbum from "./TopAlbum";
import BottomAlbum from "./BottomAlbum";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import playlistSlice from "~/redux/slices/playlistSlice";
import btnPlaySlice from "~/redux/slices/btnPlaySlice";

import { useSelector } from "react-redux";
import { userSelector } from "~/redux/selectors";
import { useNavigate } from "react-router-dom";
import config from "~/config";
import { AudioContext } from "~/contexts/AudioContext";


function Album() {
    

    const {id} = useParams();


    const [data, setData] = useState();
    const [like, setLike] = useState();

    
    const tmp = useSelector(userSelector);
    const [user, setUser] = useState(tmp);
    
    
    useEffect(() => {
        setUser(tmp)
    }, [tmp])

    const dispatch = useDispatch();
    
    useEffect(() => {
        getData();
    }, [id]);


    const getData = async () => {

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/v1/page/album/getSingle/${id}`);

    
            if(res.data.success) {
                setData(res.data.items);

                
                dispatch(playlistSlice.actions.startPlaylist({songs: res?.data?.items?.playlist?.songs, index: 0}));
                dispatch(btnPlaySlice.actions.playMusic());
                setLike(res?.data?.items?.playlist.like?.includes(tmp?.login?.currentUser?._id));
            }


        } catch (error) {
            console.log(error);
        }

    }

    
    useEffect(() => {

        handleHistoryPlaylist();

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [id]);

    const handleHistoryPlaylist = async () => {
        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/v1/page/album/historyPlaylist/${id}`);
        } catch (error) {
            console.log(error);
        }
    }




    const navigate = useNavigate();

    const handleLike = async () => {
        try {

            let res;
    
            user.login.currentUser ?
            res = await axios.put(`${process.env.REACT_APP_API_URL}/v1/page/album/${like ? 'unlike' : 'like'}/${id}`) :
            navigate(config.routes.login);
    
            if(res.data.success) {
                setLike(res?.data?.playlist.like?.includes(tmp.login.currentUser._id));
            }

        } catch (error) {
            
        }
    }



    return (
        <div className="px-[50px] text-[#fff] pt-[10px] pb-[30px]">
            <TopAlbum data={data} handleLike={handleLike} like={like} />
            <BottomAlbum data={data?.playlistFollow} />
        </div>
    );
}

export default Album;