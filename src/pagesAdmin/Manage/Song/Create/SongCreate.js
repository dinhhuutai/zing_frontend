import axios from 'axios';
import { BsMusicPlayer, BsStarFill, BsArrowRepeat } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';

import uploadImage from '~/utils/uploadImage';
import { useDispatch, useSelector } from 'react-redux';
import noticeAdminSlice from '~/redux/slices/noticeAdminSlice';
import { noticeAdminSelector } from '~/redux/selectors';

import uploadMusic from '~/utils/uploadMusic';

import SelectArtist from './SelectArtist';
import SelectGenre from './SelectGenre';
import { Link } from 'react-router-dom';
import config from '~/config';



let setTimeoutTmp;


function SongCreate() {
    const [star, setStar] = useState(false);

    
    const [loadingCreate, setLoadingCreate] = useState(false);

    const [radioUp, setRadioUp] = useState(true);
    const [radioUpMusic, setRadioUpMusic] = useState(true);
    
    const [name, setName] = useState('');
    const [thumbnail, setThumbnail] = useState("");
    const [thumbnailLocal, setThumbnailLocal] = useState("");
    const [fileMusic, setFileMusic] = useState(null);
    const [duration, setDuration] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [listIdArtist, setListIdArtist] = useState([]);
    const [listSelectArtist, setListSelectArtist] = useState([]);
    const [listIdGenre, setListIdGenre] = useState([]);
    const [listSelectGenre, setListSelectGenre] = useState([]);

    const refName = useRef();

    var imageMain = useRef();

    function handleImage(e) {
        try {
            const check = e.target.files[0];
            const urlImg = URL.createObjectURL(check);
            setThumbnailLocal(e);
    
            setThumbnail(urlImg);
            imageMain.current.style.zIndex = '10';
        } catch (error) {
            
        }
    }



    const notice = useSelector(noticeAdminSelector);

    useEffect(() => {

        if(!notice.state) {
            clearTimeout(setTimeoutTmp);
        }

    }, [notice.state]);
    
    const dispatch = useDispatch();


    const handleCreate = async () => {
        try {
            if(!name){
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng nhập tên bài hát'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            } else if(!thumbnail) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng thêm hình ảnh bài hát'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            } else if(!fileMusic) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng thêm link bài hát'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            } else if(!duration) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng thêm duration bài hát'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            } else if(Number.isNaN(Number(duration))) {
                dispatch(noticeAdminSlice.actions.errorNotice('Duration bài hát không chính xác'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            } else if(!releaseDate) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng thêm ngày phát hành bài hát'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            } else if(listIdArtist.length === 0) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng chọn ca sĩ trình bày'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            } else if(listIdGenre.length === 0) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng chọn thể loại'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            }



            dispatch(noticeAdminSlice.actions.processingNotice('Đang thêm bài hát'));
            setLoadingCreate(true);

            let resLinkImg;
            if(radioUp){
                resLinkImg = await axios.post(`${process.env.REACT_APP_API_URL}/v1/cloudinary/uploadimg`, uploadImage(thumbnailLocal))
            }

            let resLinkMusic;
            if(radioUpMusic) {
                resLinkMusic = await axios.post(`${process.env.REACT_APP_API_URL}/v1/cloudinary/uploadmusic`, uploadMusic(fileMusic));
            }
    
            const formData = {
                name,
                thumbnail: radioUp ? resLinkImg.data.link : thumbnail,
                linkMusic: radioUpMusic ? resLinkMusic.data.url : fileMusic,
                duration,
                releaseDate: (new Date(releaseDate)).getTime() / 1000,
                artists: listIdArtist,
                genreId: listIdGenre,
            }

    
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/v1/song/create`, formData);
    
            if(res.data.success) {
                dispatch(noticeAdminSlice.actions.successNotice('Thêm nhạc thành công'));

                setName('');
                setThumbnail('');
                setFileMusic('');
                setDuration('');
                setReleaseDate('');
                setListIdArtist([]);
                setListSelectArtist([]);
                setListIdGenre([]);
                setListSelectGenre([]);

                refName.current.focus();

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                setTimeout(() => {
                    setLoadingCreate(false);
                }, 1000);
            }
            
        } catch (error) {
            setTimeout(() => {
                setLoadingCreate(false);
            }, 1000);
        }
    }

    return (
        <div className='pb-[10px]'>
            <div className="py-[16px] px-[60px] bg-[#F7F9FA] flex items-center justify-between">
                <div className="flex items-center gap-[20px]">
                    <Link to={config.routes.adminSong} className="text-[26px] h-[50px] text-[#858080] w-[50px] box-shadow-admin-path rounded-[4px] bg-[#fff] flex items-center justify-center">
                        <BsMusicPlayer />
                    </Link>
                    <h1 className="text-[20px] text-[#5a5757]">Song Create</h1>
                </div>
                <button
                    onClick={() => setStar((prev) => !prev)}
                    className={`${
                        star ? 'text-[#f4fe3e]' : 'text-[#fff]'
                    } text-[18px] bg-[#23272B] px-[10px] py-[6px] rounded-[4px] cursor-pointer shadow-lg shadow-indigo-500/10`}
                >
                    <BsStarFill />
                </button>
            </div>

            <div className="m-[20px] p-[16px] bg-[#fff] rounded-[4px] box-shadow-admin-path">
                <div className="flex gap-[20px] flex-col">
                    <div className='flex'>
                        <div className="flex flex-col w-[66%]">
                            <div className='flex w-[100%]'>
                                <div className="flex flex-col gap-[4px] w-[50%]">
                                    <label>
                                        Name Song: <span className="text-[red] text-[14px] font-[700]">*</span>
                                    </label>
                                    <input
                                        ref={refName}
                                        value={name}
                                        name="name"
                                        onChange={(e) => setName(e.target.value)}
                                        className="border-[1px] w-[240px] px-[8px] py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]"
                                        type="text"
                                        placeholder="Name Song"
                                    />
                                </div>
        
                                <div className="w-[50%]">
                                    <label>
                                        Link Music: <span className="text-[red] text-[14px] font-[700]">*</span>
                                    </label>
                                    <div className="flex items-center mt-[6px]">
                                        <div className="flex items-center gap-[6px]">
                                            <input onClick={() => setRadioUpMusic((prev) => !prev)} type="radio" checked={radioUpMusic} />
                                            <label>Tải nhạc lên</label>
                                        </div>
                                        <div className="flex items-center gap-[6px] ml-[20px]">
                                            <input
                                                onClick={() => setRadioUpMusic((prev) => !prev)}
                                                type="radio"
                                                checked={!radioUpMusic}
                                            />
                                            <label>Link nhạc có sẵn</label>
                                        </div>
                                    </div>
                                    <div className="mt-[6px] flex">
                                        {radioUpMusic ? (
                                            <input type="file" onChange={(e) => setFileMusic(e)} />
                                        ) : (
                                            <input
                                                value={fileMusic}
                                                name="name"
                                                onChange={(e) => setFileMusic(e.target.value)}
                                                className="border-[1px] px-[8px] w-[240px] py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]"
                                                type="text"
                                                placeholder="Link Music Song"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex w-[100%] mt-[50px]'>
                                <div className="flex flex-col gap-[4px] w-[50%]">
                                    <label>
                                        Duration Song (giây): <span className="text-[red] text-[14px] font-[700]">*</span>
                                    </label>
                                    <input
                                        value={duration}
                                        name="name"
                                        onChange={(e) => setDuration(e.target.value)}
                                        className="border-[1px] w-[240px] px-[8px] py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]"
                                        type="text"
                                        placeholder="Duration Song"
                                    />
                                </div>
        
                                <div className="flex flex-col gap-[4px] w-[50%]">
                                    <label>
                                        Release Date Song: <span className="text-[red] text-[14px] font-[700]">*</span>
                                    </label>
                                    <input
                                        value={releaseDate}
                                        name="name"
                                        onChange={(e) => setReleaseDate(e.target.value)}
                                        className="border-[1px] w-[240px] px-[8px] py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]"
                                        type="date"
                                        placeholder="Release Date Song"
                                    />
                                </div>
                            </div>
                        </div>
    
                        <div className='flex w-[33%]'>
                            <div className="">
                                <label>
                                    Image Song: <span className="text-[red] text-[14px] font-[700]">*</span>
                                </label>
                                <div className="flex items-center mt-[6px]">
                                    <div className="flex items-center gap-[6px]">
                                        <input onClick={() => setRadioUp((prev) => !prev)} type="radio" checked={radioUp} />
                                        <label>Tải ảnh lên</label>
                                    </div>
                                    <div className="flex items-center gap-[6px] ml-[20px]">
                                        <input
                                            onClick={() => setRadioUp((prev) => !prev)}
                                            type="radio"
                                            checked={!radioUp}
                                        />
                                        <label>Link ảnh có sẵn</label>
                                    </div>
                                </div>
                                <div className="mt-[6px] flex">
                                    {radioUp ? (
                                        <div className="relative w-[210px] h-[210px] border-[2px] border-dashed border-[#989494] cursor-pointer bg-[#fff]">
                                            <input
                                                onChange={(e) => handleImage(e)}
                                                accept="image/png, image/jpeg"
                                                type="file"
                                                className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 z-[100]"
                                            />
                                            <div className="absolute top-0 left-0 w-full h-full text-[#877575] flex flex-col items-center justify-center text-[14px]">
                                                <AiOutlineFileAdd className="text-[50px]" />
                                                <p className="mt-[20px]">Upload a song image</p>
                                            </div>
                                            <img
                                                ref={imageMain}
                                                src={thumbnail}
                                                alt=""
                                                className="absolute top-0 left-0 w-full h-full outline-none border-none cursor-pointer z-[-1]"
                                            />
                                        </div>
                                    ) : (
                                        <input
                                            value={thumbnail}
                                            name="name"
                                            onChange={(e) => setThumbnail(e.target.value)}
                                            className="border-[1px] w-[240px] px-[8px] py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]"
                                            type="text"
                                            placeholder="Link Image Song"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <SelectArtist setListIdArtist={setListIdArtist} listIdArtist={listIdArtist} listSelect={listSelectArtist} setListSelect={setListSelectArtist} />
                    
                    <SelectGenre listIdGenre={listIdGenre} setListIdGenre={setListIdGenre} listSelect={listSelectGenre} setListSelect={setListSelectGenre} />

                </div>
                <div className="flex justify-center mt-[50px]">
                    <button
                        disabled={loadingCreate || notice.state}
                        onClick={handleCreate}
                        className={`${
                            loadingCreate || notice.state ? 'opacity-[.7] hover:opacity-[.7]' : 'hover:opacity-[.9]'
                        } w-[120px] h-[30px] flex justify-center items-center bg-[#259d23] rounded-[4px] text-[#fff] active:opacity-[.7]`}
                    >
                        {loadingCreate || notice.state ? (
                            <div className="text-[20px] animate-loading">
                                <BsArrowRepeat />
                            </div>
                        ) : (
                            'Create Song'
                        )}
                    </button>
                </div>
                <div className="mt-[20px]">
                    <p className="text-[10px] text-[#ac4646] font-[600]">(*): Trường bắt buộc</p>
                </div>
            </div>
        </div>
    );
}

export default SongCreate;
