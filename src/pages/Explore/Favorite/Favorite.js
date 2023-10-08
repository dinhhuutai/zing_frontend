import { useEffect, useState } from "react";
import { BsThreeDots, BsChevronRight, BsPlayCircle, BsHeart } from "react-icons/bs";
import Card from "~/components/Card";


import favorite1 from '~/assets/imgs/favorite-1.jpg';
import favorite2 from '~/assets/imgs/favorite-2.jpg';
import favorite3 from '~/assets/imgs/favorite-3.jpg';
import favorite4 from '~/assets/imgs/favorite-4.jpg';
import favorite5 from '~/assets/imgs/favorite-5.jpg';

const dataFavorite = [
    {
        perface: `'Ưng quá chừng' với giai điệu V-Pop làm bạn vui tươi cả ngày`,
        img: favorite1,
        singer: [],
    },
    {
        perface: 'Yêu đời hẳn ra cùng V-Pop Speed Up cực cuốn',
        img: favorite2,
        singer: [],
    },
    {
        perface: 'Cứ vui lên vì những âu lo rồi cũng sẽ qua thôi',
        img: favorite3,
        singer: [],
    },
    {
        perface: 'Những giai điệu gợi lại kí ức thế hệ 9x tựa viên kẹo ngọt ngào',
        img: favorite4,
        singer: [],
    },
    {
        perface: 'Lắc lư một tí, đánh bay nỗi buồn',
        img: favorite5,
        singer: [],
    },
]

function Favorite() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(dataFavorite);
    }, []);


    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                <h1 className="text-[18px] capitalize font-bold">Một chút yêu đời</h1>
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

export default Favorite;
