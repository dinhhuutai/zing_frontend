import { useEffect, useState } from "react";
import CardArtist from "~/components/CardArtist";

function Artist({data}) {

    const [artists, setArtists] = useState([]);
    useEffect(() => {
        const array = [];

        for(var i = 0; i < data.length ; i++) {
            for(var j = 0; j < data[i].artists.length; j++) {
                
                array.push(data[i].artists[j]);
                
                if(array.length >= 5) {
                    setArtists(array);
                    return;
                }
            }
        }

    }, [data]);


    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                <h1 className="text-[18px] capitalize font-bold">Nghệ Sĩ Tham Gia</h1>
            </div>
            <div className="grid grid-cols-5 gap-[20px] mt-[16px]">
                {
                    artists?.map((artist, index) => {
                        return (
                            <div key={index}>
                                <CardArtist data={artist} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Artist;