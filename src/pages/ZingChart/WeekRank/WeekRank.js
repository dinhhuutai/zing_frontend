import { useEffect, useState } from 'react';
import FrameRank from './FrameRank';



import chart1 from '~/assets/imgs/chart-1.jpg';
import chart2 from '~/assets/imgs/chart-2.jpg';
import chart3 from '~/assets/imgs/chart-3.jpg';
import bgWeekChart from '~/assets/imgs/bg-weekchart.jpg';

const dataChartApi = {
    WeekChart: [
        {
            name: 'vn',
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
            ],
        },
        {
            name: 'us',
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
            ],
        },
        {
            name: 'korea',
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
            ],
        },
    ],
};

function WeekRank() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        setDatas(dataChartApi.WeekChart);
    }, []);


    return (
        <div className='mt-[30px] bg-cover mx-[-50px] my-[-20px] relative'>
            <div className='bg-cover absolute top-[0px] bottom-[0px] left-[0px] right-[0px]' style={{backgroundImage: `url(${bgWeekChart})`}}></div>
            <div className='bg-[rgba(32,19,53,0.9)] absolute top-[0px] bottom-[0px] left-[0px] right-[0px]'></div>
            <div className='px-[50px] py-[20px] relative'>
                <h1 className='text-[34px] text-[#fff] capitalize font-[700] cursor-pointer'>Bảng xếp hạng tuần</h1>
                <div className='grid grid-cols-3 gap-[16px] mt-[10px]'>
                    {
                        datas?.map((data, index) => {
                            return <div key={index} className='bg-[hsla(0,0%,100%,0.05)] py-[20px] px-[10px] rounded-[14px]'>
                                <FrameRank data={data} index={index} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default WeekRank;