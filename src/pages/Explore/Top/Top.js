import { useEffect, useState } from 'react';
import { BsThreeDots, BsChevronRight, BsPlayCircle, BsHeart } from 'react-icons/bs';

import top1 from '~/assets/imgs/top-1.jpg';
import top2 from '~/assets/imgs/top-2.jpg';
import top3 from '~/assets/imgs/top-3.jpg';
import top4 from '~/assets/imgs/top-4.jpg';
import top5 from '~/assets/imgs/top-5.jpg';

import Card from '~/components/Card';

const dataTop = [
    {
        perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
        img: top1,
        singer: [
            {
                name: 'K-ICM',
            },
            {
                name: 'Touliver',
            },
            {
                name: 'Hoaprox',
            },
            {
                name: 'Masew',
            },
        ],
    },
    {
        perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
        img: top2,
        singer: [
            {
                name: 'Lê Bảo Bình',
            },
            {
                name: 'Quân A.P',
            },
            {
                name: 'Yến Tattoo',
            },
            {
                name: 'Châu Khải Phong',
            },
        ],
    },
    {
        perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
        img: top3,
        singer: [
            {
                name: 'Hoàng Thùy Linh',
            },
            {
                name: 'Masew',
            },
            {
                name: 'Văn Mai Hương',
            },
            {
                name: 'Tăng Duy Tân',
            },
        ],
    },
    {
        perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
        img: top4,
        singer: [
            {
                name: 'Hòa Minzy',
            },
            {
                name: 'Hồ Ngọc Hà',
            },
            {
                name: 'MiiNa',
            },
            {
                name: 'Tăng Phúc',
            },
        ],
    },
    {
        perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
        img: top5,
        singer: [
            {
                name: 'Tăng Duy Tân',
            },
            {
                name: 'Hoàng Thùy Linh',
            },
            {
                name: 'Bích Phương',
            },
            {
                name: 'Touliver',
            },
        ],
    },
];


function Top() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(dataTop);
    }, []);


    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                <h1 className="text-[18px] capitalize font-bold">Top 100</h1>
                <div className='hover:text-[#c273ed] cursor-pointer text-[hsla(0,0%,100%,0.5)] flex items-center'>
                    <div className="uppercase text-[12px]">Tất cả</div>
                    <div className='text-[18px] ml-[4px]'><BsChevronRight /></div>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
                {datas?.map((data, index) => {
                    return (
                        <div key={index}>
                            <Card data={data} type={{perfaceSinger: true, singer: true}} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Top;