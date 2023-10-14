import DefaultLayout from "../../DefaultLayout";
import CardRank from "~/components/CardRank";


import chart1 from '~/assets/imgs/chart-1.jpg';
import chart2 from '~/assets/imgs/chart-2.jpg';
import chart3 from '~/assets/imgs/chart-3.jpg';
import { useEffect, useState } from "react";

const dataChartApi = {
    RTChart: {
        items: [
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

function Kpop() {

    const [datas, setDatas] = useState();
    
    useEffect(() => {
        setDatas(dataChartApi.RTChart.items);
    }, []);

    return (
        <div className="px-[50px]">
            <DefaultLayout />
            <div className="mt-[30px] h-[300px] relative">
                <div className='absolute overflow-auto inset-0'>
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

export default Kpop;