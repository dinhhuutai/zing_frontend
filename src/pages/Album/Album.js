import TopAlbum from "./TopAlbum";
import BottomAlbum from "./BottomAlbum";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



function Album() {
    
    const {id} = useParams();

    const [data, setData] = useState();
    
    useEffect(() => {
        getData();
    }, [id]);


    const getData = async () => {

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/v1/page/album/getSingle/${id}`);
    
            if(res.data.success) {
                setData(res.data.items);
                console.log(res.data.items);
            }


        } catch (error) {

        }

    }

    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [id]);

    return (
        <div className="px-[50px] text-[#fff] pt-[10px] pb-[30px]">
            <TopAlbum data={data} />
            <BottomAlbum data={data?.playlistFollow} />
        </div>
    );
}

export default Album;