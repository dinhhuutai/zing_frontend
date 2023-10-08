import { useEffect, useState } from "react";
import { BsChevronRight, BsPlayCircle, BsChevronLeft } from "react-icons/bs";

import rank1 from '~/assets/imgs/rank-1.jpg';

const dataRank = [
    {
        name: 'Phấn hoa màu son',
        img: rank1,
        release: '01.10.2023',
        singer: [
            {
                name: 'H-Kray',
            },
            {
                name: 'Thoại Mỹ',
            }
        ],
    },
    {
        name: 'Phấn hoa màu son',
        img: rank1,
        release: '01.10.2023',
        singer: [
            {
                name: 'H-Kray',
            },
            {
                name: 'Thoại Mỹ',
            }
        ],
    },
    {
        name: 'Phấn hoa màu son',
        img: rank1,
        release: '01.10.2023',
        singer: [
            {
                name: 'H-Kray',
            },
            {
                name: 'Thoại Mỹ',
            }
        ],
    },
    {
        name: 'Phấn hoa màu son',
        img: rank1,
        release: '01.10.2023',
        singer: [
            {
                name: 'H-Kray',
            },
            {
                name: 'Thoại Mỹ',
            }
        ],
    },
    {
        name: 'Phấn hoa màu son',
        img: rank1,
        release: '01.10.2023',
        singer: [
            {
                name: 'H-Kray',
            },
            {
                name: 'Thoại Mỹ',
            }
        ],
    },
    {
        name: 'Phấn hoa màu son',
        img: rank1,
        release: '01.10.2023',
        singer: [
            {
                name: 'H-Kray',
            },
            {
                name: 'Thoại Mỹ',
            }
        ],
    },
    {
        name: 'Phấn hoa màu son',
        img: rank1,
        release: '01.10.2023',
        singer: [
            {
                name: 'H-Kray',
            },
            {
                name: 'Thoại Mỹ',
            }
        ],
    },
    {
        name: 'Phấn hoa màu son',
        img: rank1,
        release: '01.10.2023',
        singer: [
            {
                name: 'H-Kray',
            },
            {
                name: 'Thoại Mỹ',
            }
        ],
    },
]

function Rank() {

    const [datas, setDatas] = useState([]);
    const [indexRank, setIndexRank] = useState(0);

    useEffect(() => {
        setDatas(dataRank);
    }, []);

    useEffect(() => {
        const slierRank = setTimeout(() => {
            if(indexRank === 2){
                setIndexRank(0);
            } else {
                setIndexRank(prev => prev + 1);
            }
        }, 3000)
        
        return () => {
            clearTimeout(slierRank);
        }
    }, [indexRank])


    const handleRight = () => {
        if(indexRank === 2) {
            setIndexRank(0);
        } else {
            setIndexRank(prev => prev + 1);
        }
    }
    const handleLeft = () => {
        if(indexRank === 0) {
            setIndexRank(2);
        } else {
            setIndexRank(prev => prev - 1);
        }
    }


    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                <h1 className="text-[18px] capitalize font-bold">BXH Nhạc mới</h1>
                <div className='hover:text-[#c273ed] cursor-pointer text-[hsla(0,0%,100%,0.5)] flex items-center'>
                    <div className="uppercase text-[12px]">Tất cả</div>
                    <div className='text-[18px] ml-[4px]'><BsChevronRight /></div>
                </div>
            </div>
            <div className="mt-[20px] relative w-full h-[130px]">
                <div onClick={handleRight} className="flex hover:opacity-[0.6] cursor-pointer absolute text-[#fff] top-[50%] translate-y-[-50%] right-[0px] translate-x-[50%] text-[18px] z-[5] h-[30px] w-[30px] bg-[hsla(0,0%,100%,.1)] items-center justify-center rounded-[50%]">
                    <BsChevronRight />
                </div>
                <div onClick={handleLeft} className="flex hover:opacity-[0.6] cursor-pointer absolute text-[#fff] top-[50%] translate-y-[-50%] left-[0px] translate-x-[-50%] text-[18px] z-[5] h-[30px] w-[30px] bg-[hsla(0,0%,100%,.1)] items-center justify-center rounded-[50%]">
                    <BsChevronLeft />
                </div>
                <div className="w-full relative h-full overflow-hidden">
                    <div className={`w-[96%] flex absolute gap-[2%] ${indexRank === 0 ? "transition-all duration-[0.3s] ease-linear" : "transition-all duration-[0.6s] ease-linear"} ${indexRank === 1 ? 'translate-x-[-106%]' : indexRank === 2 ? "translate-x-[-212%]" : ""}`}>
                        {
                            datas.map((data, index) => {
                                return <div key={index} className="group w-[33.33%] shrink-0 cursor-pointer flex bg-[hsla(0,0%,100%,0.1)] py-[10px] px-[10px] rounded-[4px]">
                                    <div className="w-[100px] h-[100px] overflow-hidden rounded-[4px] relative group/item">
                                        <img src={data.img} alt={data.name} className="group-hover/item:scale-[1.1] group-hover:brightness-50 transition-all ease-linear duration-[.4s]" />
                                        <div className='group-hover:flex absolute h-full w-full hidden justify-center items-center text-[36px] text-[#fff] top-[0px]'>
                                            <BsPlayCircle className='hover:opacity-[.8]' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-between ml-[10px] flex-1'>
                                        <div>
                                            <span className="capitalize">{data.name}</span>
                                            <div className='text-[12px] text-[hsla(0,0%,100%,0.5)] flex'>
                                                {
                                                    data.singer.map((sing, index) => {
                                                        if(index === 0){
                                                            return <span className='hover:text-[#c273ed] cursor-pointer hover:underline' key={index}>{sing.name}</span>
                                                        } else {
                                                            return <span className='hover:text-[#c273ed] cursor-pointer hover:underline flex group' key={index}><p className='group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline'>,&nbsp;</p>{sing.name}</span>
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[hsla(0,0%,100%,0.5)] items-end">
                                            <span className="fontTextRank">#{index + 1}</span>
                                            <span>{data.release}</span>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        <div className="group w-[33.33%] shrink-0 cursor-pointer flex bg-[hsla(0,0%,100%,0.1)] py-[10px] px-[10px] rounded-[4px] justify-center items-center">
                            <span className='uppercase text-[#c273ed]'>xem tất cả</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rank;