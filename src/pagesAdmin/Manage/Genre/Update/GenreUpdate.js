import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import { useEffect, useRef, useState } from 'react';
import { BsColumnsGap, BsStarFill, BsArrowRepeat } from 'react-icons/bs';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import uploadImage from '~/utils/uploadImage';
import { useDispatch, useSelector } from 'react-redux';
import noticeAdminSlice from '~/redux/slices/noticeAdminSlice';
import { noticeAdminSelector } from '~/redux/selectors';
import Alert from '~/components/Alert';
import config from '~/config';


let setTimeoutTmp;

function GenreUpdate() {
    const [notChangeImg, setNoChangeImg] = useState(true);
    const [star, setStar] = useState(false);
    const [data, setData] = useState();

    const {id} = useParams();


    const [loadingUpdate, setLoadingUpdate] = useState(false);

    const [radioUp, setRadioUp] = useState(true);
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState("");
    const [imageLocal, setImageLocal] = useState("");

    const refName = useRef();

    var imageMain = useRef();

    function handleImage(e) {
        setNoChangeImg(false);
        try {
            const check = e.target.files[0];
            const urlImg = URL.createObjectURL(check);
            setImageLocal(e);
    
            setImage(urlImg);
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


    const handleUpdateGenre = async () => {
        try {
            if(!name){
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng nhập tên thể loại'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            } else if(!image) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng thêm hình ảnh thể loại'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            } else if(!description) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng thêm mô tả thể loại'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            }

            dispatch(noticeAdminSlice.actions.processingNotice('Đang Cập nhật thể loại'));
            setLoadingUpdate(true);

            let resLinkImg;

            if(radioUp && !notChangeImg){
                resLinkImg = await axios.post(`${process.env.REACT_APP_API_URL}/v1/cloudinary/uploadimg`, uploadImage(imageLocal))
            }
    
            const formData = {
                name,
                description,
                image: radioUp && !notChangeImg ? resLinkImg?.data?.link : image,
            }
    
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/v1/genre/update/${id}`, formData);
    
            if(res.data.success) {
                dispatch(noticeAdminSlice.actions.successNotice('Cập nhật thể loại thành công'));

                getData();

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                setTimeout(() => {
                    setLoadingUpdate(false);
                }, 1000);
            }
            
        } catch (error) {
            setTimeout(() => {
                setLoadingUpdate(false);
            }, 1000);
        }
    }

    
    useEffect(() => {

        getData();


    }, [id]);

    const getData = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/v1/genre/getSingle/${id}`);

        if(res.data.success) {
            setName(res.data.genre.name);
            setDescription(res.data.genre.description);
            setImage(res.data.genre.cover);

            setData(res.data.genre);
        }

    }


    return (
        <div>
            <div className="py-[16px] px-[60px] bg-[#F7F9FA] flex items-center justify-between">
                <div className="flex items-center gap-[20px]">
                    <Link to={config.routes.adminGenre} className="text-[26px] h-[50px] text-[#858080] w-[50px] box-shadow-admin-path rounded-[4px] bg-[#fff] flex items-center justify-center">
                        <BsColumnsGap />
                    </Link>
                    <h1 className="text-[20px] text-[#5a5757]">{`Artist Update: ${data?.name}`}</h1>
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

            <div className='m-[20px] p-[16px] bg-[#fff] rounded-[4px] box-shadow-admin-path'>
                <div className='flex gap-[20px]'>
                    <div className='flex-1'>
                        <div className='flex flex-col gap-[4px]'>
                            <label>Name Genre: <span className='text-[red] text-[14px] font-[700]'>*</span></label>
                            <input ref={refName} value={name} name='name' onChange={(e) => setName(e.target.value)} className='border-[1px] px-[8px] py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]' type="text" placeholder="Name Genre" />
                        </div>
                        <div className='mt-[14px]'>
                            <label>Image Genre: <span className='text-[red] text-[14px] font-[700]'>*</span></label>
                            <div className='flex justify-around items-center mt-[6px]'>
                                <div className='flex items-center gap-[6px]'>
                                    <input onClick={() => setRadioUp(prev => !prev)} type='radio' checked={radioUp} />
                                    <label>Tải ảnh lên</label>
                                </div>
                                <div className='flex items-center gap-[6px]'>
                                    <input onClick={() => setRadioUp(prev => !prev)} type='radio' checked={!radioUp} />
                                    <label>Link ảnh có sẵn</label>
                                </div>
                            </div>
                            <div className='mt-[6px] flex justify-center'>
                                {
                                    radioUp ? 
                                    <div className='relative w-[210px] h-[210px] border-[2px] border-dashed border-[#989494] cursor-pointer bg-[#fff]'>
                                        <input
                                            onChange={(e) => handleImage(e)}
                                            accept="image/png, image/jpeg"
                                            type="file"
                                            className='absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 z-[100]'
                                        />
                                        <div className='absolute top-0 left-0 w-full h-full text-[#877575] flex flex-col items-center justify-center text-[14px]'>
                                            <AiOutlineFileAdd className='text-[50px]' />
                                            <p className='mt-[20px]'>Upload a genre image</p>
                                        </div>
                                        <img ref={imageMain} src={image} alt="" className='absolute top-0 left-0 w-full h-full outline-none border-none cursor-pointer z-[10]' /> :
                                    </div> :
                                    <input value={image} name='name' onChange={(e) => setImage(e.target.value)} className='border-[1px] px-[8px] w-full py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]' type="text" placeholder="Link Image Genre" />
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <label>Description Genre: <span className='text-[red] text-[14px] font-[700]'>*</span></label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={description}
                            config={{
                                placeholder: 'Description Genre',
                            }}
                            onChange={(e, editor) => setDescription(editor.getData())}
                        />
                    </div>
                </div>
                <div className='flex justify-center mt-[30px]'>
                    <Alert funcHandle={handleUpdateGenre} title='Update Genre' content={`Bạn có chắc chắn muốn cập nhật lại genre ${name} không?`}>
                        <button disabled={loadingUpdate || notice.state} className={`${(loadingUpdate || notice.state) ? 'opacity-[.7] hover:opacity-[.7]' : 'hover:opacity-[.9]'} w-[120px] h-[30px] flex justify-center items-center bg-[#259d23] rounded-[4px] text-[#fff] active:opacity-[.7]`}>
                            {
                                (loadingUpdate || notice.state) ?
                                <div className='text-[20px] animate-loading'>
                                    <BsArrowRepeat />
                                </div> :
                                'Update Genre'
                            }
                        </button>
                    </Alert>
                </div>
            </div>
        </div>
    );
}

export default GenreUpdate;
