import { useEffect, useState } from 'react';
import { BsThreeDots, BsChevronRight, BsPlayCircle, BsHeart } from 'react-icons/bs';

import album1 from '~/assets/imgs/album-1.jpg';
import album2 from '~/assets/imgs/album-1.jpg';
import album3 from '~/assets/imgs/album-1.jpg';
import album4 from '~/assets/imgs/album-1.jpg';
import album5 from '~/assets/imgs/album-1.jpg';

import Card from '~/components/Card';

const dataAlbum = [
    {
        perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
        img: album1,
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
        img: album2,
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
        img: album3,
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
        img: album4,
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
        img: album5,
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



function Album() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(dataAlbum);
    }, []);


    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                <h1 className="text-[18px] capitalize font-bold">Album Hot</h1>
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

export default Album;