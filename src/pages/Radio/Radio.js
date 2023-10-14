import RadioChil from "../Explore/Radio";
import Channel from "./Channel";


function Radio() {
    return (
        <div className='px-[50px]'>
            <RadioChil pageOther={true} />
            <Channel />
        </div>
    );
}

export default Radio;