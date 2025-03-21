import { useEffect, useRef, useState } from 'react';
import { BsJournalAlbum, BsStarFill, BsArrowRepeat } from 'react-icons/bs';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import uploadImage from '~/utils/uploadImage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import noticeAdminSlice from '~/redux/slices/noticeAdminSlice';
import { noticeAdminSelector } from '~/redux/selectors';
import { Link } from 'react-router-dom';
import config from '~/config';
import SelectGenre from './SelectGenre';
import SelectSong from './SelectSong';

let setTimeoutTmp;

function AlbumCreate() {
    const [star, setStar] = useState(false);
    const [loadingCreate, setLoadingCreate] = useState(false);

    const [radioUp, setRadioUp] = useState(true);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [imageLocal, setImageLocal] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const [listIdGenre, setListIdGenre] = useState([]);
    const [listSelectGenre, setListSelectGenre] = useState([]);

    const [listIdSong, setListIdSong] = useState([]);
    const [listSelectSong, setListSelectSong] = useState([]);

    const refName = useRef();

    var imageMain = useRef();

    function handleImage(e) {
        try {
            const check = e.target.files[0];
            const urlImg = URL.createObjectURL(check);
            setImageLocal(e);

            setImage(urlImg);
            imageMain.current.style.zIndex = '10';
        } catch (error) {}
    }

    const notice = useSelector(noticeAdminSelector);

    useEffect(() => {
        if (!notice.state) {
            clearTimeout(setTimeoutTmp);
        }
    }, [notice.state]);

    const dispatch = useDispatch();

    const handleCreatePlaylist = async () => {
        console.log(imageLocal);
        try {
            if (!name) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng nhập tên album'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000]);

                return;
            } else if (!image) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng thêm hình ảnh album'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000]);

                return;
            } else if (!releaseDate) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng thêm ngày phát hành album'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000]);

                return;
            } else if (listIdGenre.length === 0) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng chọn thể loại'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000]);

                return;
            } else if (listIdSong.length === 0) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng chọn bài hát'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000]);

                return;
            }

            dispatch(noticeAdminSlice.actions.processingNotice('Đang thêm album'));
            setLoadingCreate(true);

            let resLinkImg;

            if (radioUp) {
                resLinkImg = await axios.post(
                    `${process.env.REACT_APP_API_URL}/v1/cloudinary/uploadimg`,
                    uploadImage(imageLocal),
                );
            }

            const formData = {
                name,
                description,
                image: radioUp ? resLinkImg.data.link : image,
                releaseDate: new Date(releaseDate).getTime() / 1000,
                genreId: listIdGenre,
                songs: listIdSong,
            };

            const res = await axios.post(`${process.env.REACT_APP_API_URL}/v1/album/create`, formData);

            if (res.data.success) {
                dispatch(noticeAdminSlice.actions.successNotice('Thêm album thành công'));

                setName('');
                setDescription('');
                setImage('');

                setListIdGenre([]);
                setListSelectGenre([]);

                setListIdSong([]);
                setListSelectSong([]);

                refName.current.focus();

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000]);

                setTimeout(() => {
                    setLoadingCreate(false);
                }, 1000);
            }
        } catch (error) {
            setTimeout(() => {
                setLoadingCreate(false);
            }, 1000);
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div className="pb-[10px]">
            <div className="py-[16px] px-[60px] bg-[#F7F9FA] flex items-center justify-between">
                <div className="flex items-center gap-[20px]">
                    <Link
                        to={config.routes.adminAlbum}
                        className="text-[26px] h-[50px] text-[#858080] w-[50px] box-shadow-admin-path rounded-[4px] bg-[#fff] flex items-center justify-center"
                    >
                        <BsJournalAlbum />
                    </Link>
                    <h1 className="text-[20px] text-[#5a5757]">Album Create</h1>
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
                <div className="flex flex-col">
                    <div className="flex gap-[20px]">
                        <div className="flex-1">
                            <div className="flex flex-col gap-[4px]">
                                <label>
                                    Name Album: <span className="text-[red] text-[14px] font-[700]">*</span>
                                </label>
                                <input
                                    ref={refName}
                                    value={name}
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    className="border-[1px] px-[8px] py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]"
                                    type="text"
                                    placeholder="Name Album"
                                />
                            </div>
                            <div className="mt-[14px]">
                                <label>
                                    Image Album: <span className="text-[red] text-[14px] font-[700]">*</span>
                                </label>
                                <div className="flex justify-around items-center mt-[6px]">
                                    <div className="flex items-center gap-[6px]">
                                        <input
                                            onClick={() => setRadioUp((prev) => !prev)}
                                            type="radio"
                                            checked={radioUp}
                                        />
                                        <label>Tải ảnh lên</label>
                                    </div>
                                    <div className="flex items-center gap-[6px]">
                                        <input
                                            onClick={() => setRadioUp((prev) => !prev)}
                                            type="radio"
                                            checked={!radioUp}
                                        />
                                        <label>Link ảnh có sẵn</label>
                                    </div>
                                </div>
                                <div className="mt-[6px] flex justify-center">
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
                                                <p className="mt-[20px]">Upload a album image</p>
                                            </div>
                                            <img
                                                ref={imageMain}
                                                src={image}
                                                alt=""
                                                className="absolute top-0 left-0 w-full h-full outline-none border-none cursor-pointer z-[-1]"
                                            />
                                        </div>
                                    ) : (
                                        <input
                                            value={image}
                                            name="name"
                                            onChange={(e) => setImage(e.target.value)}
                                            className="border-[1px] px-[8px] w-full py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]"
                                            type="text"
                                            placeholder="Link Image Album"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col mt-[14px] gap-[4px] w-[100%]">
                                <label>
                                    Release Date Album: <span className="text-[red] text-[14px] font-[700]">*</span>
                                </label>
                                <input
                                    value={releaseDate}
                                    name="name"
                                    onChange={(e) => setReleaseDate(e.target.value)}
                                    className="border-[1px] w-[240px] px-[8px] py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]"
                                    type="date"
                                    placeholder="Release Date Album"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <label>Description Album:</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data={description}
                                config={{
                                    placeholder: 'Description Album',
                                }}
                                onChange={(e, editor) => setDescription(editor.getData())}
                            />
                        </div>
                    </div>

                    <div className="flex mt-[20px]">
                        <div className="w-[30%]">
                            <SelectGenre
                                listIdGenre={listIdGenre}
                                setListIdGenre={setListIdGenre}
                                listSelect={listSelectGenre}
                                setListSelect={setListSelectGenre}
                            />
                        </div>

                        <div className="w-[1.5px] mx-[10px] bg-[#cdbebe]"></div>

                        <div className="flex-1">
                            <SelectSong
                                listIdSong={listIdSong}
                                setListIdSong={setListIdSong}
                                listSelect={listSelectSong}
                                setListSelect={setListSelectSong}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-[30px]">
                    <button
                        disabled={loadingCreate || notice.state}
                        onClick={handleCreatePlaylist}
                        className={`${
                            loadingCreate || notice.state ? 'opacity-[.7] hover:opacity-[.7]' : 'hover:opacity-[.9]'
                        } w-[120px] h-[30px] flex justify-center items-center bg-[#259d23] rounded-[4px] text-[#fff] active:opacity-[.7]`}
                    >
                        {loadingCreate || notice.state ? (
                            <div className="text-[20px] animate-loading">
                                <BsArrowRepeat />
                            </div>
                        ) : (
                            'Create Album'
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

export default AlbumCreate;
