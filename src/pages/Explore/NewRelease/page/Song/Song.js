import { useEffect, useState } from "react";
import DefaultLayout from "../../DefaultLayout";
import { useNavigate, useSearchParams } from "react-router-dom";
import config from "~/config";
import Card from "./Card";

const dataSong = {
    all: [
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/b/4/f/fb4fe09a78c943c0ead57f0358d6bdb3.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/b/4/f/fb4fe09a78c943c0ead57f0358d6bdb3.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/b/4/f/fb4fe09a78c943c0ead57f0358d6bdb3.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/b/4/f/fb4fe09a78c943c0ead57f0358d6bdb3.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/b/4/f/fb4fe09a78c943c0ead57f0358d6bdb3.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/b/4/f/fb4fe09a78c943c0ead57f0358d6bdb3.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/b/4/f/fb4fe09a78c943c0ead57f0358d6bdb3.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/b/4/f/fb4fe09a78c943c0ead57f0358d6bdb3.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
    ],
    vn: [
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/f/9/6/f/f96f3240b75280181a5a9722ee7a3c95.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/f/9/6/f/f96f3240b75280181a5a9722ee7a3c95.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/f/9/6/f/f96f3240b75280181a5a9722ee7a3c95.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/f/9/6/f/f96f3240b75280181a5a9722ee7a3c95.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/f/9/6/f/f96f3240b75280181a5a9722ee7a3c95.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/f/9/6/f/f96f3240b75280181a5a9722ee7a3c95.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/f/9/6/f/f96f3240b75280181a5a9722ee7a3c95.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/f/9/6/f/f96f3240b75280181a5a9722ee7a3c95.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
    ],
    usuk: [
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/7/1/2/d7123f53d2258d24b02ee2550f1e79cd.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/7/1/2/d7123f53d2258d24b02ee2550f1e79cd.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/7/1/2/d7123f53d2258d24b02ee2550f1e79cd.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/7/1/2/d7123f53d2258d24b02ee2550f1e79cd.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/7/1/2/d7123f53d2258d24b02ee2550f1e79cd.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/7/1/2/d7123f53d2258d24b02ee2550f1e79cd.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/7/1/2/d7123f53d2258d24b02ee2550f1e79cd.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/7/1/2/d7123f53d2258d24b02ee2550f1e79cd.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
    ],
    kpop: [
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
    ],
    other: [
        {
            encodeId: 'Z6FWCOO0',
            name: 'Chẳng Thể Né Tránh',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/5/b/c/45bc9f1c2f55bf727ac2a3b964447846.jpg',
            singer: [
                {
                    name: 'Mỹ Anh',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
    ]
};



function Song() {

    const navigate = useNavigate();
    const [filter, setFilter] = useState(useSearchParams()[0].get('filter'));
    const [data, setData] = useState([]);

    useEffect(() => {
        navigate(`${config.routes.newReleaseSong}?filter=${filter}`);
    }, [filter]);

    useEffect(() => {
        setData(dataSong[filter]);
    }, [filter]);



    return (
        <div className='px-[50px] pt-[10px] pb-[30px] text-[#fff]'>
            <DefaultLayout />
            <div className="mt-[30px]">
                <div className="flex gap-[14px]">
                    <button onClick={() => setFilter('all')} className={filter === 'all' ? 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid bg-[#9b4de0] border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]' : 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]'}>Tất cả</button>
                    <button onClick={() => setFilter('vn')} className={filter === 'vn' ? 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid bg-[#9b4de0] border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]' : 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]'}>Việt Nam</button>
                    <button onClick={() => setFilter('usuk')} className={filter === 'usuk' ? 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid bg-[#9b4de0] border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]' : 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]'}>ÂU MỸ</button>
                    <button onClick={() => setFilter('kpop')} className={filter === 'kpop' ? 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid bg-[#9b4de0] border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]' : 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]'}>HÀN QUỐC</button>
                    <button onClick={() => setFilter('other')} className={filter === 'other' ? 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid bg-[#9b4de0] border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]' : 'uppercase text-[12px] min-w-[90px] py-[2px] border-[1px] border-solid border-[#9b4de0] rounded-[20px] hover:brightness-[0.8]'}>KHÁC</button>
                </div>
                <div className="mt-[20px]">
                    <div className="flex text-[12px] py-[10px] font-[600] text-[hsla(0,0%,100%,0.5)] border-b-[1px] border-b-solid border-b-[hsla(0,0%,100%,0.05)]">
                        <div className="w-[60%]">
                            <span className='cursor-default ml-[30px]'>BÀI HÁT</span>
                        </div>
                        <div className="flex flex-1">
                            <span className='cursor-default'>PHÁT HÀNH</span>
                        </div>
                        <div>
                            <span className='cursor-default'>THỜI GIAN</span>
                        </div>
                    </div>
                    <div className="min-h-[50vh]">
                        {
                            data?.map((item, index) => {
                                return <div key={index}>
                                    <Card value={item} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Song;