import { useEffect, useState } from "react";
import Card from "~/components/Card";


const data = [
    {
        perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/8/0/6/78065f7be5202c0cd7037ed5cb731811.jpg',
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
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/8/0/6/78065f7be5202c0cd7037ed5cb731811.jpg',
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
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/8/0/6/78065f7be5202c0cd7037ed5cb731811.jpg',
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
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/8/0/6/78065f7be5202c0cd7037ed5cb731811.jpg',
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
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/8/0/6/78065f7be5202c0cd7037ed5cb731811.jpg',
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


function BottomAlbum() {

    const [datas, setDatas] = useState();

    useEffect(() => {
        setDatas(data);
    }, []);


    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                <h1 className="text-[18px] capitalize font-bold">Có Thể Bạn Quan Tâm</h1>
            </div>
            <div className="grid grid-cols-5 gap-[20px] mt-[16px]">
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

export default BottomAlbum;