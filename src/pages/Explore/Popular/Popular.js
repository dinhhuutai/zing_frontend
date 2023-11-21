import { useEffect, useState } from "react";
import Card from '~/components/Card';


// import popular1 from '~/assets/imgs/popular-1.jpg';
// import popular2 from '~/assets/imgs/popular-2.jpg';
// import popular3 from '~/assets/imgs/popular-3.jpg';
// import popular4 from '~/assets/imgs/popular-4.jpg';
// import popular5 from '~/assets/imgs/popular-5.jpg';

// const dataPopular = [
//     {
//         perface: 'Đắm mình trong giai điệu Lofi kết hợp với những âm thanh thiên nhiên thơ mộng',
//         img: popular1,
//         singer: [],
//     },
//     {
//         perface: 'Va vào những giai điệu thư giãn của V-Pop',
//         img: popular2,
//         singer: [],
//     },
//     {
//         perface: 'Thả mình cùng những giai điệu V-Pop nhẹ nhàng',
//         img: popular3,
//         singer: [],
//     },
//     {
//         perface: 'Lắng nghe những giai điệu nhạc Hoa lời Việt nhẹ nhàng như những cánh hoa rơi',
//         img: popular4,
//         singer: [],
//     },
//     {
//         perface: 'Thả mình vào những giai điệu Lofi popular nghe là nghiện',
//         img: popular5,
//         singer: [],
//     },
// ]


function Popular({data}) {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(data);
    }, [data]);


    return (
        <div className='text-[#fff] mt-[40px]'>
            <div className='mt-[18px] flex justify-between'>
                <h1 className='text-[18px] capitalize font-bold'>{datas?.title}</h1>
            </div>
            <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
                {
                    datas?.items?.map((item, index) => {
                        return <div key={index}>
                            <Card data={item} type={{perface: true}} />
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Popular;