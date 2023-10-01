import imgSong from '~/assets/imgs/img-song-controls.jpg'

import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";


function InfoSong() {
    return (
        <div className='h-full flex items-center'>
            <div className='flex items-center cursor-pointer'>
                <img src={imgSong} alt="img" className='h-[66px] w-[66px] rounded-[4px]' />
            </div>
            <div className="text-[#fff] text-[12px] ml-[8px]">
                <span className='font-bold cursor-pointer'>Đại Minh Tinh</span>
                <h3 className='flex'>
                    <p className='text-[hsla(0,0%,100%,0.5)] cursor-pointer hover:text-[#c273ed] hover:underline'>Văn Mai Hương</p>
                    ,&nbsp;
                    <p className='text-[hsla(0,0%,100%,0.5)] cursor-pointer hover:text-[#c273ed] hover:underline'>Hứa Kim Tuyền</p>
                </h3>
            </div>
            <div className='text-[white] flex gap-[6px] ml-[10px]'>
                <div className="h-[28px] w-[28px] text-[18px] flex justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)]">
                    <AiOutlineHeart />
                </div>
                <div className="h-[28px] w-[28px] text-[18px] flex justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,.1)]">
                    <BsThreeDots />
                </div>
            </div>
        </div>
    );
}

export default InfoSong;