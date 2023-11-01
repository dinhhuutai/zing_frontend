import { useEffect, useState } from 'react';

import partner1 from '~/assets/imgs/partner-1.png';
import partner2 from '~/assets/imgs/partner-2.png';

const dataPartner = [
    {
        img: partner1,
        name: '',
    },
    {
        img: partner2,
        name: '',
    },
    {
        img: partner1,
        name: '',
    },
    {
        img: partner2,
        name: '',
    },
    {
        img: partner1,
        name: '',
    },
    {
        img: partner2,
        name: '',
    },
    {
        img: partner1,
        name: '',
    },
    {
        img: partner2,
        name: '',
    },
    {
        img: partner1,
        name: '',
    },
    {
        img: partner2,
        name: '',
    },
    {
        img: partner1,
        name: '',
    },
    {
        img: partner2,
        name: '',
    },
    {
        img: partner1,
        name: '',
    },
    {
        img: partner2,
        name: '',
    },
    {
        img: partner1,
        name: '',
    },
    {
        img: partner2,
        name: '',
    },
];

function Partner() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setDatas(dataPartner);
    }, []);

    return (
        <div className="mt-[40px] pb-[20px] flex flex-col items-center px-[30px]">
            <h2 className="text-[hsla(0,0%,100%,0.5)] text-[13px] cursor-pointer tracking-[2px] font-bold uppercase hover:text-[#c273ed]">
                Đối tác âm nhạc
            </h2>
            <div className="grid grid-cols-8 gap-[20px] mt-[20px]">
                {datas?.map((data, index) => {
                    return (
                        <div key={index} className="bg-[#fff] flex items-center px-[20px] py-[4px] rounded-[6px]">
                            <img alt={data.name} src={data.img} className="" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Partner;
