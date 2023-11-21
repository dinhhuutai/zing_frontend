import config from "~/config";
import DefaultLayout from "../../DefaultLayout";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card";

const dataAlbum = {
    all: [
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/1/c/831c7687ea948e8e6e028c9f4445222a.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/1/c/831c7687ea948e8e6e028c9f4445222a.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/1/c/831c7687ea948e8e6e028c9f4445222a.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/1/c/831c7687ea948e8e6e028c9f4445222a.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/1/c/831c7687ea948e8e6e028c9f4445222a.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/1/c/831c7687ea948e8e6e028c9f4445222a.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
    ],
    vn: [
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/3/b/c/53bceb01d1feb5e4589a8c7ede7fe389.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/3/b/c/53bceb01d1feb5e4589a8c7ede7fe389.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/3/b/c/53bceb01d1feb5e4589a8c7ede7fe389.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/3/b/c/53bceb01d1feb5e4589a8c7ede7fe389.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/3/b/c/53bceb01d1feb5e4589a8c7ede7fe389.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/3/b/c/53bceb01d1feb5e4589a8c7ede7fe389.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
    ],
    usuk: [
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/1/c/831c7687ea948e8e6e028c9f4445222a.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/1/c/831c7687ea948e8e6e028c9f4445222a.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/1/c/831c7687ea948e8e6e028c9f4445222a.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/1/c/831c7687ea948e8e6e028c9f4445222a.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/1/c/831c7687ea948e8e6e028c9f4445222a.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
    ],
    kpop: [
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/0/1/e/e01e8e6de9bc5a4855ac05e8a0489d97.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
    ],
    other: [
        {
            encodeId: 'Z6FWCOO0',
            name: 'MEDUZA',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/b/c/45bc9f1c2f55bf727ac2a3b964447846.jpg',
            imgDisk: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png',
            singer: [
                {
                    name: 'MEDUZA',
                },
            ],
            duration: '04:07',
            releaseDate: new Date('2023-10-13'),
        },
    ]
};

function Album() {

    const navigate = useNavigate();
    const [filter, setFilter] = useState(useSearchParams()[0].get('filter'));
    const [data, setData] = useState([]);

    useEffect(() => {
        navigate(`${config.routes.newReleaseAlbum}?filter=${filter}`);
    }, [filter]);

    useEffect(() => {
        setData(dataAlbum[filter]);
    }, [filter]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    
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
                            <span className='cursor-default ml-[30px]'>ALBUM</span>
                        </div>
                        <div className="flex flex-1">
                            <span className='cursor-default'>PHÁT HÀNH</span>
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

export default Album;