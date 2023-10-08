import { useEffect, useState } from "react";
import { BsThreeDots, BsChevronRight, BsPlayCircle, BsHeart } from "react-icons/bs";


import mentality1 from '~/assets/imgs/mentality-1.jpg';
import mentality2 from '~/assets/imgs/mentality-2.jpg';
import mentality3 from '~/assets/imgs/mentality-3.jpg';
import mentality4 from '~/assets/imgs/mentality-4.jpg';
import mentality5 from '~/assets/imgs/mentality-5.jpg';
import Card from "~/components/Card";

const dataMentality = [
    {
        perface: `Đôi khi việc lặng lẽ đi sau một người dõi theo từng bước chân của người ấy bằng cả trái tim đã có thể gọi là yêu`,
        img: mentality1,
        singer: [],
    },
    {
        perface: 'Chẳng có nơi nào yên bình được như ta bên nhau',
        img: mentality2,
        singer: [],
    },
    {
        perface: 'Có những nỗi buồn không biết chia sẻ cùng ai...',
        img: mentality3,
        singer: [],
    },
    {
        perface: 'Người ấy làm trái tim bạn tan vỡ, ấy vậy mà bạn vẫn yêu người ấy với từng mảnh vỡ nhỏ',
        img: mentality4,
        singer: [],
    },
    {
        perface: `Nếu một ngày mình không gặp nhau, nỗi buồn ấy có thể là màu nâu như mắt em đợi anh từng giây phút, cũng có thể màu
        hồng khi trộn lẫn nhớ mong...`,
        img: mentality5,
        singer: [],
    },
]

function Mentality() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(dataMentality);
    }, []);


    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                <h1 className="text-[18px] capitalize font-bold">Tâm trạng tan chậm</h1>
            </div>
            <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
                {datas?.map((data, index) => {
                    return (
                        <div key={index}>
                            <Card data={data} type={{perface: true}} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Mentality;