import { BsFillPlayFill } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import iconPlay from '~/assets/imgs/icon-playing.gif';
import config from '~/config';
import { useDispatch, useSelector } from 'react-redux';
import playlistSlice from '~/redux/slices/playlistSlice';
import { btnPlaySelector, playlistSelector } from '~/redux/selectors';
import btnPlaySlice from '~/redux/slices/btnPlaySlice';
import { AudioContext } from '~/contexts/AudioContext';

function CustomTooltip({ data, percent, index }) {
    return data ? (
        <div
            className={`flex items-center text-[#fff] group ${
                index === 1 ? 'bg-[#4a90e2]' : index === 2 ? 'bg-[#50e3c2]' : 'bg-[#e35050]'
            } py-[4px] px-[4px] rounded-[4px]`}
        >
            <div className="w-[40px] h-[40px] overflow-hidden rounded-[4px]">
                <img src={data?.thumbnail} alt={data.name} />
            </div>
            <div className="ml-[10px] flex flex-col justify-center flex-1 max-w-[80px]">
                <span className="capitalize dotThreeHiddenText2 h-[16px] overflow-hidden text-[#fff] text-[14px] font-[600] leading-[16px]">
                    {data.name}
                </span>
                <div className="text-[12px] text-[hsla(0,0%,100%,0.5)] flex">
                    {data?.artists?.map((sing, index) => {
                        if (index === 0) {
                            return (
                                <span
                                    className="hover:text-[#c273ed] cursor-pointer hover:underline dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]"
                                    key={index}
                                >
                                    {sing.name}
                                </span>
                            );
                        } else {
                            return (
                                <span
                                    className="hover:text-[#c273ed] cursor-pointer hover:underline flex group dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]"
                                    key={index}
                                >
                                    <p className="group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]">
                                        ,&nbsp;
                                    </p>
                                    {sing.name}
                                </span>
                            );
                        }
                    })}
                </div>
            </div>
            <div className="ml-[16px]">
                <span className="font-[600] text-[14px] cursor-default">{percent}%</span>
            </div>
        </div>
    ) : (
        ''
    );
}

function Chart({ data }) {
    const { refAudio } = useContext(AudioContext);


    const [datas, setDatas] = useState();
    const [percent, setPercent] = useState({});
    const [dataChart, setDataChart] = useState([]);
    const [indexChartHover, setIndexChartHover] = useState(1);
    const [dataChartTooltip, setDataChartTooltip] = useState({
        data: {},
        percent: 0,
        index: 0,
    });

    useEffect(() => {
        setDatas(data);
    }, [data]);

    useEffect(() => {
        handlePercent();
        handleChart();
    }, [datas]);

    const handlePercent = () => {
        const temp1 = datas?.items[datas?.RTChart?.items[0]?.encodeId]?.reduce((gtlt, value) => {
            return gtlt + value.counter;
        }, 0);

        const temp2 = datas?.items[datas?.RTChart?.items[1]?.encodeId]?.reduce((gtlt, value) => {
            return gtlt + value.counter;
        }, 0);

        const temp3 = datas?.items[datas?.RTChart?.items[2]?.encodeId]?.reduce((gtlt, value) => {
            return gtlt + value.counter;
        }, 0);

        const total = temp1 + temp2 + temp3;

        setPercent({
            [datas?.RTChart.items[0].encodeId]: Math.round((temp1 / total) * 100) || 0,
            [datas?.RTChart.items[1].encodeId]: Math.round((temp2 / total) * 100) || 0,
            [datas?.RTChart.items[2].encodeId]: Math.round((temp3 / total) * 100) || 0,
        });
    };

    const handleChart = () => {
        let tempArray = [];

        tempArray = datas?.items[datas?.RTChart.items[0].encodeId].map((rank) => {
            return {
                name: `${rank.hour}:00`,
                [datas?.RTChart.items[0].encodeId]: rank.counter,
            };
        });

        tempArray = datas?.items[datas?.RTChart.items[1].encodeId].map((rank, index) => {
            tempArray[index] = {
                ...tempArray[index],
                name: `${rank.hour}:00`,
                [datas?.RTChart.items[1].encodeId]: rank.counter,
            };

            return tempArray[index];
        });

        tempArray = datas?.items[datas?.RTChart.items[2].encodeId].map((rank, index) => {
            tempArray[index] = {
                ...tempArray[index],
                name: `${rank.hour}:00`,
                [datas?.RTChart.items[2].encodeId]: rank.counter,
            };

            return tempArray[index];
        });

        setDataChart(tempArray);
    };

    const handleIndexChartHover = (index) => {
        setIndexChartHover(index);
        setDataChartTooltip({
            data: datas?.RTChart?.items[index - 1],
            percent: percent[datas?.RTChart?.items[index - 1].encodeId],
            index,
        });
    };

    useEffect(() => {
        let indexChartTimeOut = setTimeout(() => {
            if (indexChartHover === 3) {
                setIndexChartHover(1);
            } else {
                setIndexChartHover((prev) => prev + 1);
            }
        }, 3000);

        return () => {
            clearTimeout(indexChartTimeOut);
        };
    }, [indexChartHover]);

    const tmp = useSelector(playlistSelector);
    const btnPlayTmp = useSelector(btnPlaySelector);
    const [btnPlay, setBtnPlay] = useState(false);
    const [currentSong, setCurrentSong] = useState(tmp);

    useEffect(() => {
        setCurrentSong(tmp?.songs[tmp?.currentSong]);
        setBtnPlay(btnPlayTmp);
    }, [tmp, btnPlayTmp, data]);

    const dispatch = useDispatch();
    const handlePlayMusic = (item, index) => {
        if (item._id !== currentSong._id) {
            dispatch(playlistSlice.actions.startPlaylist({ songs: datas?.RTChart?.items, index }));
            dispatch(btnPlaySlice.actions.playMusic());
        } else {
            if (btnPlayTmp.isPlay) {
                dispatch(btnPlaySlice.actions.pauseMusic());
                refAudio?.current?.pause();
            } else {
                dispatch(btnPlaySlice.actions.playMusic());
                refAudio?.current?.play();
            }
        }
    };

    return (
        <div className="bg-[rgba(51,16,76,.95)] p-[20px] rounded-[4px] mt-[40px]">
            <div className="flex text-[28px] font-[700] items-center">
                <h1 className="fontTextChart cursor-pointer">#zingchart</h1>
                <div className="hover:opacity-[.8] cursor-pointer text-[16px] ml-[16px] h-[20px] w-[20px] flex justify-center items-center bg-[#fff] rounded-[50%]">
                    <BsFillPlayFill />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-[10px] mt-[16px]">
                <div className="col-span-5">
                    <div>
                        {datas?.RTChart?.items.map((item, index) => {
                            return (
                                <div
                                    onMouseEnter={() => setIndexChartHover(index + 1)}
                                    className={`${
                                        index + 1 === indexChartHover
                                            ? 'bg-[hsla(0,0%,100%,.2)]'
                                            : 'bg-[hsla(0,0%,100%,.07)]'
                                    } ${currentSong._id === item._id && 'bg-[hsla(0,0%,100%,0.2)]'} flex items-center hover:bg-[hsla(0,0%,100%,0.2)] first:mt-[0px] mt-[8px] text-[#fff] group py-[14px] px-[12px] rounded-[4px]`}
                                    key={index}
                                >
                                    <div
                                        className={
                                            index === 0
                                                ? 'min-w-[18px] fontTextChartOne text-[30px] cursor-default'
                                                : index === 1
                                                ? 'min-w-[18px] fontTextChartTwo text-[30px] cursor-default'
                                                : index === 2
                                                ? 'min-w-[18px] fontTextChartThree text-[30px] cursor-default'
                                                : 'min-w-[18px] fontTextChartOther text-[30px] cursor-default'
                                        }
                                    >
                                        <span>{index + 1}</span>
                                    </div>
                                    <button
                                        onClick={() => handlePlayMusic(item, index)}
                                        className="w-[60px] h-[60px] overflow-hidden rounded-[4px] cursor-pointer relative ml-[14px]"
                                    >
                                        <img
                                            className={`${currentSong._id === item._id && 'brightness-[0.5]'} group-hover:brightness-[0.5]`}
                                            src={item.thumbnail}
                                            alt={item.name}
                                        />
                                        <div className={`${currentSong._id === item._id ? 'group-hover:flex absolute h-full w-full flex justify-center items-center text-[36px] text-[#fff] top-[0px]' : 'group-hover:flex absolute h-full w-full hidden justify-center items-center text-[36px] text-[#fff] top-[0px]'}`}>
                                            {currentSong._id === item._id && btnPlay.isPlay ? (
                                                <img className="h-[20px]" src={iconPlay} alt="play" />
                                            ) : (
                                                <BsFillPlayFill className="hover:opacity-[.8]" />
                                            )}
                                        </div>
                                    </button>
                                    <div className="ml-[10px] flex flex-col justify-center flex-1">
                                        <span className="capitalize dotThreeHiddenText2 h-[16px] overflow-hidden text-[#fff] text-[14px] font-[600] leading-[16px]">
                                            {item.name}
                                        </span>
                                        <div className="text-[12px] text-[hsla(0,0%,100%,0.5)] flex">
                                            {item?.artists?.map((sing, index) => {
                                                if (index === 0) {
                                                    return (
                                                        <span
                                                            className="hover:text-[#c273ed] cursor-pointer hover:underline dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]"
                                                            key={index}
                                                        >
                                                            {sing.name}
                                                        </span>
                                                    );
                                                } else {
                                                    return (
                                                        <span
                                                            className="hover:text-[#c273ed] cursor-pointer hover:underline flex group dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]"
                                                            key={index}
                                                        >
                                                            <p className="group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline">
                                                                ,&nbsp;
                                                            </p>
                                                            {sing.name}
                                                        </span>
                                                    );
                                                }
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-[700] text-[16px] cursor-default">
                                            {percent[item.encodeId]}%
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <Link to={config.routes.zingChart} className="flex justify-center mt-[16px] items-center">
                        <button className="hover:bg-[hsla(0,0%,100%,0.2)] px-[20px] py-[4px] rounded-[20px] outline-none text-[#fff] border-[1px] border-solid border-[#fff]">
                            Xem thêm
                        </button>
                    </Link>
                </div>
                <div className="col-span-7">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={100}
                            height={250}
                            data={dataChart}
                            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                        >
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: 'hsla(0,0%,100%,.5)', fontSize: 12 }}
                            />
                            <CartesianGrid strokeDasharray="3 6" vertical={false} />
                            <Tooltip
                                active={true}
                                content={
                                    <CustomTooltip
                                        data={dataChartTooltip.data}
                                        percent={dataChartTooltip.percent}
                                        index={dataChartTooltip.index}
                                    />
                                }
                            />
                            <Line
                                onMouseEnter={() => handleIndexChartHover(1)}
                                strokeWidth={2}
                                type="monotone"
                                dataKey={datas?.RTChart.items[0].encodeId}
                                activeDot={indexChartHover !== 1 ? false : { stroke: '#4a90e2', strokeWidth: 1, r: 6 }}
                                dot={indexChartHover === 1 ? true : false}
                                stroke="#4a90e2"
                            />
                            <Line
                                onMouseEnter={() => handleIndexChartHover(2)}
                                strokeWidth={2}
                                type="monotone"
                                dataKey={datas?.RTChart.items[1].encodeId}
                                activeDot={indexChartHover !== 2 ? false : { stroke: '#50e3c2', strokeWidth: 1, r: 6 }}
                                dot={indexChartHover === 2 ? true : false}
                                stroke="#50e3c2"
                            />
                            <Line
                                onMouseEnter={() => handleIndexChartHover(3)}
                                strokeWidth={2}
                                type="monotone"
                                dataKey={datas?.RTChart.items[2].encodeId}
                                activeDot={indexChartHover !== 3 ? false : { stroke: '#e35050', strokeWidth: 1, r: 6 }}
                                dot={indexChartHover === 3 ? true : false}
                                stroke="#e35050"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default Chart;
