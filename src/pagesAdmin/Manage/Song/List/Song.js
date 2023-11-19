import { useEffect, useState } from 'react';
import { BsMusicPlayer, BsStarFill, BsPlusSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import config from '~/config';

import TopTableAdmin from '~/components/TopTableAdmin';
import Table from './Table';
import BottomTableAdmin from '~/components/BottomTableAdmin';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import noticeAdminSlice from '~/redux/slices/noticeAdminSlice';
import { noticeAdminSelector } from '~/redux/selectors';


let setTimeoutTmp;


function Song() {
    const [star, setStar] = useState(false);

    // data table
    const [data, setData] = useState({
        song: [],
        totalSong: 0,
        totalAddToday: 0,
    });

    const [arrangeName, setArrangeName] = useState(true);
    const [arrangeDuration, setArrangeDuration] = useState(false);
    const [arrangeReleaseDate, setArrangeReleaseDate] = useState(false);
    const [arrangeStartDate, setArrangeStartDate] = useState(false);
    const [arrangeLastUpdateDate, setArrangeLastUpdateDate] = useState(false);

    const [selectArrange, setSelectArrange] = useState('name'); // name  |  duration   |   releaseDate   |  startDate  |  lastUpdateDate

    const [listCheck, setListCheck] = useState([]);
    const [listIdDelete, setListIdDelete] = useState([]);

    // share top start
    const [show, setShow] = useState(5);
    const [search, setSearch] = useState('');

    const notice = useSelector(noticeAdminSelector);

    useEffect(() => {
        if (!notice.state) {
            clearTimeout(setTimeoutTmp);
        }
    }, [notice.state]);

    const dispatch = useDispatch();

    const handleDelete = async () => {
        dispatch(noticeAdminSlice.actions.processingNotice('Đang xóa song'));

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/v1/song/delete`, { listId: listIdDelete });

        if (res.data.success) {
            dispatch(noticeAdminSlice.actions.successNotice('Xóa nhạc thành công'));
            setListCheck([]);

            setTimeoutTmp = setTimeout(() => {
                dispatch(noticeAdminSlice.actions.hiddenNotice());
            }, [10000]);
        }
    };

    const handleSearch = () => {
        handleGetData();
        setCurrentPage(0);
    };


    const [listArtist, setListArtist] = useState([]);
    const [selectArtist, setSelectArtist] = useState('');

    const [listGenre, setListGenre] = useState([]);
    const [selectGenre, setSelectGenre] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const resArtist = await axios.get(`${process.env.REACT_APP_API_URL}/v1/artist/getAll`);
        const resGenre = await axios.get(`${process.env.REACT_APP_API_URL}/v1/genre/getAll`);

        if(resArtist.data.success && resGenre.data.success) {
            setListArtist(resArtist.data.artists);
            setListGenre(resGenre.data.genres);
        }
    }

    // share top end

    // share bottom start
    const [currentPage, setCurrentPage] = useState(0);
    // share bottom end

    useEffect(() => {
        // lấy data
        handleGetData();
    }, [arrangeName, arrangeStartDate, arrangeLastUpdateDate, arrangeReleaseDate, arrangeDuration, currentPage, show, notice.state, selectGenre, selectArtist]);

    const handleGetData = async () => {
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/v1/song/find?limit=${show}&skip=${
                    show * currentPage
                }&search=${search}&${
                    selectArrange === 'name'
                        ? `sortName=${arrangeName ? 1 : -1}`
                        : selectArrange === 'startDate'
                        ? `sortCreateDate=${arrangeStartDate ? 1 : -1}`
                        : selectArrange === 'lastUpdateDate'
                        ? `sortContentLastUpdate=${arrangeLastUpdateDate ? 1 : -1}`
                        : selectArrange === 'releaseDate'
                        ? `sortReleaseDate=${arrangeReleaseDate ? 1 : -1}`
                        : selectArrange === 'duration'
                        ? `sortDuration=${arrangeDuration ? 1 : -1}`
                        : ''
                }&selectArtist=${selectArtist}&selectGenre=${selectGenre}`,
            );

            if (res.data.success) {
                setData({
                    ...data,
                    song: res.data.song,
                    totalSong: res.data.totalSong,
                    totalAddToday: res.data.totalAddToday,
                });
                setListCheck([]);
            }
        } catch (error) {}
    };

    return (
        <div className="pb-[10px]">
            <div className="py-[16px] px-[60px] bg-[#F7F9FA] flex items-center justify-between">
                <div className="flex items-center gap-[20px]">
                    <div className="text-[26px] h-[50px] text-[#858080] w-[50px] box-shadow-admin-path rounded-[4px] bg-[#fff] flex items-center justify-center">
                        <BsMusicPlayer />
                    </div>
                    <h1 className="text-[20px] text-[#5a5757]">Song List</h1>
                </div>
                <div className="flex gap-[16px]">
                    <button>
                        <Link
                            className="text-[14px] hover:opacity-[0.8] flex items-center font-[600] bg-[#0098EF] text-[#fff] px-[10px] py-[6px] rounded-[4px] cursor-pointer shadow-lg shadow-indigo-500/10"
                            to={config.routes.adminSongCreate}
                        >
                            <BsPlusSquare className="mr-[6px] text-[18px]" />
                            Create Song
                        </Link>
                    </button>
                    <button
                        onClick={() => setStar((prev) => !prev)}
                        className={`${
                            star ? 'text-[#f4fe3e]' : 'text-[#fff]'
                        } text-[18px] bg-[#23272B] px-[10px] py-[6px] rounded-[4px] cursor-pointer shadow-lg shadow-indigo-500/10`}
                    >
                        <BsStarFill />
                    </button>
                </div>
            </div>

            <div className="m-[20px] p-[16px] bg-[#fff] rounded-[4px] box-shadow-admin-path">
                <TopTableAdmin
                    handleDelete={handleDelete}
                    handleSearch={handleSearch}
                    setShow={setShow}
                    show={show}
                    search={search}
                    setSearch={setSearch}
                    totalAddToday={data.totalAddToday}
                    setCurrentPage={setCurrentPage}
                    listArtist={listArtist}
                    listGenre={listGenre}
                    setSelectArtist={setSelectArtist}
                    setSelectGenre={setSelectGenre}
                />
                <Table
                    songs={data.song}
                    show={show}
                    currentPage={currentPage}
                    setArrangeName={setArrangeName}
                    setArrangeDuration={setArrangeDuration}
                    setArrangeReleaseDate={setArrangeReleaseDate}
                    setArrangeStartDate={setArrangeStartDate}
                    setArrangeLastUpdateDate={setArrangeLastUpdateDate}
                    setSelectArrange={setSelectArrange}
                    arrangeName={arrangeName}
                    arrangeDuration={arrangeDuration}
                    arrangeReleaseDate={arrangeReleaseDate}
                    arrangeStartDate={arrangeStartDate}
                    arrangeLastUpdateDate={arrangeLastUpdateDate}
                    selectArrange={selectArrange}
                    setCurrentPage={setCurrentPage}
                    setListIdDelete={setListIdDelete}
                    listCheck={listCheck}
                    setListCheck={setListCheck}
                />
                <BottomTableAdmin
                    setCurrentPage={setCurrentPage}
                    show={show}
                    currentPage={currentPage}
                    totalItems={data.totalSong}
                />
            </div>
        </div>
    );
}

export default Song;
