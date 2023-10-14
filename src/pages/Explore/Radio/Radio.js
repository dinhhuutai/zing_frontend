
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useEffect, useState } from 'react';
import CardRadio from '~/components/CardRadio';


import avatar1 from '~/assets/imgs/radio-avatar-1.jpg';
import img1 from '~/assets/imgs/radio-img-1.jpg';
import { Link } from "react-router-dom";
import config from "~/config";

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


function Radio({pageOther}) {

    const [datas, setDatas] = useState([]);
    const [indexRadio, setIndexRadio] = useState(0);
    const [lengthRadio, setLengthRadio] = useState(0);

    useEffect(() => {
        setDatas(dataRadio);
        setLengthRadio(Math.floor(dataRadio.length/7));
    }, []);



    const handleRight = () => {
        if(indexRadio < lengthRadio){
            setIndexRadio(prev => prev + 1);
        }
    }

    const handleLeft = () => {
        if(indexRadio > 0){
            setIndexRadio(prev => prev - 1);
        }
    }


    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                {
                    !pageOther ?
                    <h1 className="text-[18px] capitalize font-bold">Radio Nổi Bật</h1> :
                    <h1 className="text-[34px] capitalize font-bold">Radio</h1>
                }
                {
                    !pageOther &&
                    <Link to={config.routes.radio} className='hover:text-[#c273ed] cursor-pointer text-[hsla(0,0%,100%,0.5)] flex items-center'>
                        <div className="uppercase text-[12px]">Tất cả</div>
                        <div className='text-[18px] ml-[4px]'><BsChevronRight /></div>
                    </Link>
                }
            </div>
            <div className='mt-[20px] relative w-full h-[200px]'>
                <button onClick={handleRight} className="flex hover:opacity-[0.6] cursor-pointer absolute text-[#333] top-[22%] right-[-10px] text-[18px] z-[5] h-[30px] w-[30px] bg-[#fff] items-center justify-center rounded-[50%]">
                    <BsChevronRight />
                </button>
                <button onClick={handleLeft} className="flex hover:opacity-[0.6] cursor-pointer absolute text-[#333] top-[22%] left-[-10px] text-[18px] z-[5] h-[30px] w-[30px] bg-[#fff] items-center justify-center rounded-[50%]">
                    <BsChevronLeft />
                </button>
                <div className='overflow-hidden relative w-full h-full'>
                    <div className={`flex absolute w-[100%] transition-all duration-[0.4s] ease-linear translate-x-[${-100 * indexRadio}%]`}>
                        {datas?.map((data, index) => {
                            return (
                                <div className="w-[14.28%] shrink-0" key={index}>
                                    <CardRadio data={data} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Radio;