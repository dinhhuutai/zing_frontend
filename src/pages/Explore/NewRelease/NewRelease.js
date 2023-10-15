import { useEffect, useState } from 'react';
import {format} from "timeago.js";
import { BsFillPlayFill, BsThreeDots, BsChevronRight } from "react-icons/bs";

import newRelease1 from '~/assets/imgs/new-release-1.jpg'
import newRelease2 from '~/assets/imgs/new-release-2.jpg'
import newRelease3 from '~/assets/imgs/new-release-3.jpg'
import { Link } from 'react-router-dom';
import config from '~/config';

const dataNewReleaseAll = [
    {
        name: 'Vàng phai trước ngõ',
        img: newRelease1,
        singer: [
            {
                name: "Lân Nhã",
            }
        ],
        createDate: new Date('2023-08-28'),
    },
    {
        name: 'Vàng phai trước ngõ',
        img: newRelease1,
        singer: [
            {
                name: "Lân Nhã",
            }
        ],
        createDate: new Date('2023-08-28'),
    },
    {
        name: 'Vàng phai trước ngõ',
        img: newRelease1,
        singer: [
            {
                name: "Lân Nhã",
            }
        ],
        createDate: new Date('2023-08-28'),
    },
    {
        name: 'Vàng phai trước ngõ',
        img: newRelease1,
        singer: [
            {
                name: "Lân Nhã",
            }
        ],
        createDate: new Date('2023-08-28'),
    },
    {
        name: 'Vàng phai trước ngõ',
        img: newRelease1,
        singer: [
            {
                name: "Lân Nhã",
            }
        ],
        createDate: new Date('2023-08-28'),
    },
    {
        name: 'Vàng phai trước ngõ',
        img: newRelease1,
        singer: [
            {
                name: "Lân Nhã",
            }
        ],
        createDate: new Date('2023-08-28'),
    },
    {
        name: 'Vàng phai trước ngõ',
        img: newRelease1,
        singer: [
            {
                name: "Lân Nhã",
            }
        ],
        createDate: new Date('2023-08-28'),
    },
    {
        name: 'Vàng phai trước ngõ',
        img: newRelease1,
        singer: [
            {
                name: "Lân Nhã",
            }
        ],
        createDate: new Date('2023-08-28'),
    },
    {
        name: 'Vàng phai trước ngõ',
        img: newRelease1,
        singer: [
            {
                name: "Lân Nhã",
            }
        ],
        createDate: new Date('2023-08-28'),
    },
]

const dataNewReleaseVN = [
    {
        name: 'Có chắc yêu là đây (Remix)',
        img: newRelease2,
        singer: [
            {
                name: 'Sơn Tùng M-TP',
            },
            {
                name: "BOMATELA",
            }
        ],
        createDate: new Date('2023-10-01'),
    },
    {
        name: 'Có chắc yêu là đây (Remix)',
        img: newRelease2,
        singer: [
            {
                name: 'Sơn Tùng M-TP',
            },
            {
                name: "BOMATELA",
            }
        ],
        createDate: new Date('2023-10-01'),
    },
    {
        name: 'Có chắc yêu là đây (Remix)',
        img: newRelease2,
        singer: [
            {
                name: 'Sơn Tùng M-TP',
            },
            {
                name: "BOMATELA",
            }
        ],
        createDate: new Date('2023-10-01'),
    },
    {
        name: 'Có chắc yêu là đây (Remix)',
        img: newRelease2,
        singer: [
            {
                name: 'Sơn Tùng M-TP',
            },
            {
                name: "BOMATELA",
            }
        ],
        createDate: new Date('2023-10-01'),
    },
    {
        name: 'Có chắc yêu là đây (Remix)',
        img: newRelease2,
        singer: [
            {
                name: 'Sơn Tùng M-TP',
            },
            {
                name: "BOMATELA",
            }
        ],
        createDate: new Date('2023-10-01'),
    },
    {
        name: 'Có chắc yêu là đây (Remix)',
        img: newRelease2,
        singer: [
            {
                name: 'Sơn Tùng M-TP',
            },
            {
                name: "BOMATELA",
            }
        ],
        createDate: new Date('2023-10-01'),
    },
    {
        name: 'Có chắc yêu là đây (Remix)',
        img: newRelease2,
        singer: [
            {
                name: 'Sơn Tùng M-TP',
            },
            {
                name: "BOMATELA",
            }
        ],
        createDate: new Date('2023-10-01'),
    },
    {
        name: 'Có chắc yêu là đây (Remix)',
        img: newRelease2,
        singer: [
            {
                name: 'Sơn Tùng M-TP',
            },
            {
                name: "BOMATELA",
            }
        ],
        createDate: new Date('2023-10-01'),
    },
    {
        name: 'Có chắc yêu là đây (Remix)',
        img: newRelease2,
        singer: [
            {
                name: 'Sơn Tùng M-TP',
            },
            {
                name: "BOMATELA",
            }
        ],
        createDate: new Date('2023-10-01'),
    },
]

const dataNewReleaseQT = [
    {
        name: '3D (feat. Jack Harlow)',
        img: newRelease3,
        singer: [
            {
                name: 'Jung Kook',
            },
            {
                name: 'Jack Harlow',
            }
        ],
        createDate: new Date('2023-09-26'),
    },
    {
        name: '3D (feat. Jack Harlow)',
        img: newRelease3,
        singer: [
            {
                name: 'Jung Kook',
            },
            {
                name: 'Jack Harlow',
            }
        ],
        createDate: new Date('2023-09-26'),
    },
    {
        name: '3D (feat. Jack Harlow)',
        img: newRelease3,
        singer: [
            {
                name: 'Jung Kook',
            },
            {
                name: 'Jack Harlow',
            }
        ],
        createDate: new Date('2023-09-26'),
    },
    {
        name: '3D (feat. Jack Harlow)',
        img: newRelease3,
        singer: [
            {
                name: 'Jung Kook',
            },
            {
                name: 'Jack Harlow',
            }
        ],
        createDate: new Date('2023-09-26'),
    },
    {
        name: '3D (feat. Jack Harlow)',
        img: newRelease3,
        singer: [
            {
                name: 'Jung Kook',
            },
            {
                name: 'Jack Harlow',
            }
        ],
        createDate: new Date('2023-09-26'),
    },
    {
        name: '3D (feat. Jack Harlow)',
        img: newRelease3,
        singer: [
            {
                name: 'Jung Kook',
            },
            {
                name: 'Jack Harlow',
            }
        ],
        createDate: new Date('2023-09-26'),
    },
    {
        name: '3D (feat. Jack Harlow)',
        img: newRelease3,
        singer: [
            {
                name: 'Jung Kook',
            },
            {
                name: 'Jack Harlow',
            }
        ],
        createDate: new Date('2023-09-26'),
    },
    {
        name: '3D (feat. Jack Harlow)',
        img: newRelease3,
        singer: [
            {
                name: 'Jung Kook',
            },
            {
                name: 'Jack Harlow',
            }
        ],
        createDate: new Date('2023-09-26'),
    },
    {
        name: '3D (feat. Jack Harlow)',
        img: newRelease3,
        singer: [
            {
                name: 'Jung Kook',
            },
            {
                name: 'Jack Harlow',
            }
        ],
        createDate: new Date('2023-09-26'),
    },
]

function NewRelease() {
    const [datas, setDatas] = useState([]);
    const [typeRelease, setTypeRelease] = useState('all');

    useEffect(() => {
        if(typeRelease === 'all'){
            setDatas(dataNewReleaseAll);
        } else if(typeRelease === 'vn'){
            setDatas(dataNewReleaseVN);
        } else if(typeRelease === 'qt'){
            setDatas(dataNewReleaseQT);
        }

    }, [typeRelease]);

    return (
        <div className='text-[#fff] mt-[40px]'>
            <h1 className='text-[18px] capitalize font-bold'>Mới Phát Hành</h1>
            <div className='mt-[18px] flex justify-between'>
                <div className='flex gap-[14px]'>
                    <button onClick={() => setTypeRelease('all')} className={typeRelease === 'all' ? 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid bg-[#9b4de0] border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]' : 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]'}>Tất cả</button>
                    <button onClick={() => setTypeRelease('vn')} className={typeRelease === 'vn' ? 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid bg-[#9b4de0] border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]' : 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]'}>Việt Nam</button>
                    <button onClick={() => setTypeRelease('qt')} className={typeRelease === 'qt' ? 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid bg-[#9b4de0] border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]' : 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]'}>Quốc tế</button>
                </div>
                <Link to={`${config.routes.newReleaseSong}?filter=${typeRelease === 'qt' ? "usuk" : typeRelease}`} className='hover:text-[#c273ed] cursor-pointer text-[hsla(0,0%,100%,0.5)] flex items-center'>
                    <div className="uppercase text-[12px]">Tất cả</div>
                    <div className='text-[18px] ml-[4px]'><BsChevronRight /></div>
                </Link>
            </div>
            <div className='grid grid-cols-3 gap-[10px] mt-[20px]'>
                {
                    datas?.map((data, index) => {
                        return <div key={index} className='group flex px-[8px] py-[8px] hover:bg-[hsla(0,0%,100%,0.1)] rounded-[4px] items-center'>
                            <div className='h-[60px] w-[60px] rounded-[4px] overflow-hidden cursor-pointer relative'>
                                <img alt={data.name} src={data.img} className='group-hover:brightness-[0.5]' />
                                <div className='group-hover:flex absolute h-full w-full hidden justify-center items-center text-[36px] text-[#fff] top-[0px]'>
                                    <BsFillPlayFill className='hover:opacity-[.8]' />
                                </div>
                            </div>
                            <div className='ml-[10px] flex flex-col justify-center flex-1'>
                                <span className='capitalize'>{data.name}</span>
                                <div className='text-[12px] text-[hsla(0,0%,100%,0.5)] flex'>
                                    {
                                        data.singer && data?.singer.map((sing, index) => {
                                            if(index === 0){
                                                return <span className='hover:text-[#c273ed] cursor-pointer hover:underline' key={index}>{sing.name}</span>
                                            } else {
                                                return <span className='hover:text-[#c273ed] cursor-pointer hover:underline flex group' key={index}><p className='group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline'>,&nbsp;</p>{sing.name}</span>
                                            }
                                        })
                                    }
                                </div>
                                <span className='text-[12px] text-[hsla(0,0%,100%,0.5)]'>{format(data.createDate)}</span>
                            </div>
                            <div className='group-hover:flex text-[16px] mr-[6px] cursor-pointer h-[30px] w-[30px] hidden justify-center items-center rounded-[50%] hover:bg-[hsla(0,0%,100%,0.1)]'>
                                <BsThreeDots />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default NewRelease;