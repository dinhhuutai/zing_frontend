import { useEffect, useState } from "react";
import { BsHeart, BsPlayCircle, BsThreeDots } from "react-icons/bs";

import near1 from '~/assets/imgs/near-1.jpg';
import near2 from '~/assets/imgs/near-2.jpg'
import near3 from '~/assets/imgs/near-3.jpg'
import near4 from '~/assets/imgs/near-4.jpg'
import near5 from '~/assets/imgs/near-5.jpg'


const recentlyData = [
    {
        name: 'Nhạc mới mỗi tuần',
        img: near1,
    },
    {
        name: 'Women in music',
        img: near2,
    },
    {
        name: 'Nhạc mới mỗi tuần',
        img: near3,
    },
    {
        name: 'Đóa hồng nhạc việt',
        img: near4,
    },
    {
        name: '#zingchart',
        img: near5,
    },
]

function Recently() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(recentlyData);
    }, []);


    
    return (
        <div className='text-[#fff] mt-[10px]'>
            <h1 className='text-[18px] capitalize font-bold'>Gần đây</h1>
            <div className='grid grid-cols-7 gap-[16px] mt-[16px]'>
                {
                    datas.map((recently, index) => {
                        return <div key={index} className=''>
                            <div className='rounded-[6px] overflow-hidden cursor-pointer group relative'>
                                <div className='absolute w-full h-full z-[1] hidden group-hover:flex justify-around items-center px-[6px]'>
                                    <div className="text-[14px] h-[26px] w-[26px] hover:bg-[hsla(0,0%,100%,.3)] flex justify-center items-center rounded-[50%]">
                                        <BsHeart />
                                    </div>
                                    <div className="text-[40px] hover:opacity-[0.7]">
                                        <BsPlayCircle />
                                    </div>
                                    <div className="text-[14px] h-[26px] w-[26px] hover:bg-[hsla(0,0%,100%,.3)] flex justify-center items-center rounded-[50%]">
                                        <BsThreeDots />
                                    </div>
                                </div>
                                <img src={recently.img} alt={recently.name} className='group-hover:scale-[1.1] group-hover:brightness-50 transition-all ease-linear duration-[.2s]' />
                            </div>
                            <span className='hover:text-[#c273ed] capitalize cursor-pointer text-[12px] mt-[6px] block font-bold'>{recently.name}</span>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Recently;