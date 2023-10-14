import { BsFillPlayFill } from "react-icons/bs";
import CardRank from "~/components/CardRank";


import chart1 from '~/assets/imgs/chart-1.jpg';
import chart2 from '~/assets/imgs/chart-2.jpg';
import chart3 from '~/assets/imgs/chart-3.jpg';
import { useEffect, useState } from "react";

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


function ReleaseNew() {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(dataChartApi.RTChart.items);
    }, []);


    return (
        <div className='px-[50px] text-[#fff]'>
            <div className="flex items-center pt-[10px]">
                <h1 className='capitalize text-[34px] font-bold'>BXH Nhạc Mới</h1>
                <div className="hover:brightness-[0.9] text-[#000] cursor-pointer text-[26px] ml-[16px] h-[30px] w-[30px] flex justify-center items-center bg-[#fff] rounded-[50%]">
                    <BsFillPlayFill />
                </div>
            </div>
            <div className="mt-[20px] pb-[50px]">
                <div>
                    {datas?.map((data, index) => {
                        return (
                            <div key={index}>
                                <CardRank data={data} index={index} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ReleaseNew;