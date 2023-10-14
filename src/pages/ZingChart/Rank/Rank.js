import { useEffect, useState } from 'react';
import CardRank from "~/components/CardRank";


import chart1 from '~/assets/imgs/chart-1.jpg';
import chart2 from '~/assets/imgs/chart-2.jpg';
import chart3 from '~/assets/imgs/chart-3.jpg';

const dataChartApi = {
    RTChart: {
        items: [
            {
                encodeId: 'Z6FWCOO0',
                name: 'Cắt Đôi Nỗi Sầu',
                img: chart1,
                album: 'Cắt Đôi Nỗi Sầu (Single)',
                singer: [
                    {
                        name: 'Tăng Duy Tân',
                    },
                    {
                        name: 'Drum7',
                    },
                ],
                duration: '04:07',
                rakingStatus: 0,
            },
            {
                encodeId: 'Z6EUB99Z',
                name: 'Tất Cả Hoặc Không Là Gì Cả',
                img: chart2,
                album: 'Tất Cả Hoặc Không Là Gì Cả (Single)',
                singer: [
                    {
                        name: 'Cao Thái Sơn',
                    },
                    {
                        name: 'Đông Thiên Đức',
                    },
                ],
                duration: '03:02',
                rakingStatus: 2,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: -1,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: 0,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: 0,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: 0,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: -5,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: 12,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: -2,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: 0,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: 0,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: 0,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: 0,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: 0,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: 0,
            },
            {
                encodeId: 'Z6DCE9OI',
                name: 'Sao Trời Làm Gió',
                img: chart3,
                album: 'Sao Trời Làm Gió (Single)',
                singer: [
                    {
                        name: 'Nal',
                    },
                    {
                        name: 'CT',
                    },
                ],
                duration: '06:23',
                rakingStatus: 0,
            },
        ],
    },
};

function Rank() {
    const [datas, setDatas] = useState([]);
    const [seeMore, setSeeMore] = useState(false);

    useEffect(() => {
        setDatas(dataChartApi.RTChart.items);
    }, []);

    return (
        <div className="mt-[10px]">
            <div>
                {datas?.map((data, index) => {
                    return (
                        seeMore ? <div key={index}>
                            <CardRank data={data} index={index} />
                        </div> : 
                        index <= 9 ? <div key={index}>
                        <CardRank data={data} index={index} />
                    </div> : ""
                    );
                })}
            </div>
            <div className="flex justify-center mt-[16px] items-center">
                <button onClick={() => setSeeMore(prev => !prev)} className="hover:bg-[hsla(0,0%,100%,0.2)] px-[20px] py-[4px] rounded-[20px] outline-none text-[#fff] border-[1px] border-solid border-[#fff]">
                    {
                        seeMore ? 'Ẩn bớt' : 'Xem top 100'
                    }
                </button>
            </div>
        </div>
    );
}

export default Rank;
