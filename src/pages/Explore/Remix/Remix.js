import { useEffect, useState } from 'react';
import Card from '~/components/Card';


// import remix1 from '~/assets/imgs/remix-1.jpg';
// import remix2 from '~/assets/imgs/remix-2.jpg';
// import remix3 from '~/assets/imgs/remix-3.jpg';
// import remix4 from '~/assets/imgs/remix-4.jpg';
// import remix5 from '~/assets/imgs/remix-5.jpg';

// const dataRemix = [
//     {
//         perface: `Đặc sản EDM của làng nhạc Việt`,
//         img: remix1,
//         singer: [
//             {
//                 name: 'K-ICM',
//             },
//             {
//                 name: 'Touliver',
//             },
//             {
//                 name: 'Hoaprox',
//             },
//             {
//                 name: 'Masew',
//             },
//         ],
//     },
//     {
//         perface: 'Yêu đời hẳn ra cùng V-Pop Speed Up cực cuốn',
//         img: remix2,
//         singer: [
//             {
//                 name: 'Lê Bảo Bình',
//             },
//             {
//                 name: 'Quân A.P',
//             },
//             {
//                 name: 'Yến Tattoo',
//             },
//             {
//                 name: 'Châu Khải Phong',
//             },
//         ],
//     },
//     {
//         perface: 'Cứ vui lên vì những âu lo rồi cũng sẽ qua thôi',
//         img: remix3,
//         singer: [
//             {
//                 name: 'Hoàng Thùy Linh',
//             },
//             {
//                 name: 'Masew',
//             },
//             {
//                 name: 'Văn Mai Hương',
//             },
//             {
//                 name: 'Tăng Duy Tân',
//             },
//         ],
//     },
//     {
//         perface: 'Những giai điệu gợi lại kí ức thế hệ 9x tựa viên kẹo ngọt ngào',
//         img: remix4,
//         singer: [
//             {
//                 name: 'Hòa Minzy',
//             },
//             {
//                 name: 'Hồ Ngọc Hà',
//             },
//             {
//                 name: 'MiiNa',
//             },
//             {
//                 name: 'Tăng Phúc',
//             },
//         ],
//     },
//     {
//         perface: 'Lắc lư một tí, đánh bay nỗi buồn',
//         img: remix5,
//         singer: [
//             {
//                 name: 'Tăng Duy Tân',
//             },
//             {
//                 name: 'Hoàng Thùy Linh',
//             },
//             {
//                 name: 'Bích Phương',
//             },
//             {
//                 name: 'Touliver',
//             },
//         ],
//     },
// ];

function Remix({data}) {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(data);
    }, [data]);


    
    
    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                <h1 className="text-[18px] capitalize font-bold">{datas?.title}</h1>
            </div>
            <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
                {datas?.items?.map((item, index) => {
                    return (
                        <div key={index}>
                            <Card data={item} type={{singer: true}} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Remix;
