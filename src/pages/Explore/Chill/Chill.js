import { useEffect, useState } from "react";
import { BsThreeDots, BsChevronRight, BsPlayCircle, BsHeart } from "react-icons/bs";
import Card from '~/components/Card';


import chill1 from '~/assets/imgs/chill-1.jpg';
import chill2 from '~/assets/imgs/chill-2.jpg';
import chill3 from '~/assets/imgs/chill-3.jpg';
import chill4 from '~/assets/imgs/chill-4.jpg';
import chill5 from '~/assets/imgs/chill-5.jpg';
import { Link } from "react-router-dom";

const dataChill = [
    {
        perface: 'Đắm mình trong giai điệu Lofi kết hợp với những âm thanh thiên nhiên thơ mộng',
        img: chill1,
        singer: [],
    },
    {
        perface: 'Va vào những giai điệu thư giãn của V-Pop',
        img: chill2,
        singer: [],
    },
    {
        perface: 'Thả mình cùng những giai điệu V-Pop nhẹ nhàng',
        img: chill3,
        singer: [],
    },
    {
        perface: 'Lắng nghe những giai điệu nhạc Hoa lời Việt nhẹ nhàng như những cánh hoa rơi',
        img: chill4,
        singer: [],
    },
    {
        perface: 'Thả mình vào những giai điệu Lofi Chill nghe là nghiện',
        img: chill5,
        singer: [],
    },
]

function Chill() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(dataChill);
    }, []);


    return (
        <div className='text-[#fff] mt-[40px]'>
            <div className='mt-[18px] flex justify-between'>
                <h1 className='text-[18px] capitalize font-bold'>Chill</h1>
                <Link to='/hub/Chill-Thu-Gian/IWZ9Z0CI' className='hover:text-[#c273ed] cursor-pointer text-[hsla(0,0%,100%,0.5)] flex items-center'>
                    <div className="uppercase text-[12px]">Tất cả</div>
                    <div className='text-[18px] ml-[4px]'><BsChevronRight /></div>
                </Link>
            </div>
            <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
                {
                    datas?.map((data, index) => {
                        return <div key={index}>
                            <Card data={data} type={{perface: true}} />
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Chill;