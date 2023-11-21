import { useEffect } from "react";
import RadioChil from "../Explore/Radio";
import Channel from "./Channel";


function Radio() {

    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div className='px-[50px]'>
            <RadioChil pageOther={true} />
            <Channel />
        </div>
    );
}

export default Radio;