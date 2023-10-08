
import { BsThreeDots, BsChevronRight, BsPlayCircle, BsHeart } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import CardRadio from '~/components/CardRadio';


import avatar1 from '~/assets/imgs/radio-avatar-1.jpg';
import img1 from '~/assets/imgs/radio-img-1.jpg';

const dataRadio = [
    {
        avatar: avatar1,
        img: img1,
        name: 'XONE Radio',
        listening: '116',
    },
    {
        avatar: avatar1,
        img: img1,
        name: 'XONE Radio',
        listening: '116',
    },
    {
        avatar: avatar1,
        img: img1,
        name: 'XONE Radio',
        listening: '116',
    },
    {
        avatar: avatar1,
        img: img1,
        name: 'XONE Radio',
        listening: '116',
    },
    {
        avatar: avatar1,
        img: img1,
        name: 'XONE Radio',
        listening: '116',
    },
    {
        avatar: avatar1,
        img: img1,
        name: 'XONE Radio',
        listening: '116',
    },
    {
        avatar: avatar1,
        img: img1,
        name: 'XONE Radio',
        listening: '116',
    },
]


function Radio() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(dataRadio);
    }, [])


    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                <h1 className="text-[18px] capitalize font-bold">Radio Nổi Bật</h1>
                <div className='hover:text-[#c273ed] cursor-pointer text-[hsla(0,0%,100%,0.5)] flex items-center'>
                    <div className="uppercase text-[12px]">Tất cả</div>
                    <div className='text-[18px] ml-[4px]'><BsChevronRight /></div>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-[20px] mt-[20px]">
                {datas?.map((data, index) => {
                    return (
                        <div key={index}>
                            <CardRadio data={data} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Radio;