import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { useEffect, useState } from 'react';
import slider1 from '~/assets/imgs/slider-1.jpg';
import slider2 from '~/assets/imgs/slider-2.jpg';
import slider3 from '~/assets/imgs/slider-3.jpg';
import slider4 from '~/assets/imgs/slider-4.jpg';
import slider5 from '~/assets/imgs/slider-5.jpg';

const dataSlider = [
    {
        name: 'slider 1',
        img: slider1,
    },
    {
        name: 'slider 2',
        img: slider2,
    },
    {
        name: 'slider 3',
        img: slider3,
    },
    {
        name: 'slider 4',
        img: slider4,
    },
    {
        name: 'slider 5',
        img: slider5,
    },
]



function Slider() {

    const [indexImg, setIndexImg] = useState(0);

    useEffect(() => {
        const timeSlider = setTimeout(() => {
            if(indexImg >= dataSlider.length - 1){
                setIndexImg(0);
            } else {
                setIndexImg(prev => prev + 1);
            }
        }, 3000);

        return () => {
            clearTimeout(timeSlider);
        }
    }, [indexImg]);

    const handleLeft = () => {
        if(indexImg >= dataSlider.length - 1){
            setIndexImg(0);
        } else {
            setIndexImg(prev => prev + 1);
        }
    }

    const handleRight = () => {
        if(indexImg <= 0){
            setIndexImg(dataSlider.length - 1);
        } else {
            setIndexImg(prev => prev - 1);
        }
    }

    return (
        <div className="mt-[30px] relative h-[230px] group flex items-center">
            <div onClick={handleLeft} className="group-hover:flex hover:opacity-[0.6] cursor-pointer hidden absolute text-[#fff] top-[50%] translate-y-[-50%] left-[20px] text-[30px] z-[5] h-[50px] w-[50px] bg-[hsla(0,0%,100%,.1)] items-center justify-center rounded-[50%]">
                <BsChevronLeft />
            </div>
            {
                dataSlider.map((slider, index) => {
                    return <div key={index} className={indexImg === dataSlider.length - 2 && dataSlider.length > 3 && index === 0 ? "absolute px-[14px] w-[33.33%] flex transition-all duration-[0.5s] ease-linear translate-x-[200%] z-[3] opacity-[1]" : indexImg === dataSlider.length - 1 && dataSlider.length > 3 && index === 0 ? "absolute px-[14px] w-[33.33%] flex transition-all duration-[0.5s] ease-linear translate-x-[100%] z-[4] opacity-[1]" : indexImg === dataSlider.length - 1 && dataSlider.length > 3 && index === 1 ? "absolute px-[14px] w-[33.33%] flex transition-all duration-[0.5s] ease-linear translate-x-[200%] z-[3] opacity-[1]" : index - indexImg === 0 ? "absolute px-[14px] w-[33.33%] flex transition-all duration-[0.5s] ease-linear translate-x-[0%] z-[2] opacity-[1]" : index - indexImg === 1 ? "absolute px-[14px] w-[33.33%] flex transition-all duration-[0.5s] ease-linear translate-x-[100%] z-[4] opacity-[1]" : index - indexImg === 2 ? "absolute px-[14px] w-[33.33%] flex transition-all duration-[0.5s] ease-linear translate-x-[200%] z-[3] opacity-[1]" : index - indexImg === -1 && dataSlider.length <= 3 ? "absolute px-[14px] w-[33.33%] flex transition-all duration-[0.5s] ease-linear translate-x-[200%] z-[3] opacity-[1]" : index - indexImg === -2 && dataSlider.length <= 3 ? "absolute px-[14px] w-[33.33%] flex transition-all duration-[0.5s] ease-linear translate-x-[100%] z-[4] opacity-[1]" : index - indexImg === -3 && dataSlider.length <= 3 ? "absolute px-[14px] w-[33.33%] flex transition-all duration-[0.5s] ease-linear translate-x-[0%] z-[2] opacity-[1]" : "absolute px-[14px] w-[33.33%] flex transition-all duration-[0.5s] ease-linear translate-x-[100%] z-[1] opacity-[0]"}>
                        <img alt='img' src={slider.img} className='cursor-pointer rounded-[5px]' />
                    </div>
                })
            }
            <div onClick={handleRight} className="group-hover:flex hover:opacity-[0.6] cursor-pointer hidden absolute text-[#fff] top-[50%] translate-y-[-50%] right-[20px] text-[30px] z-[5] h-[50px] w-[50px] bg-[hsla(0,0%,100%,.1)] items-center justify-center rounded-[50%]">
                <BsChevronRight />
            </div>
        </div>
    );
}

export default Slider;