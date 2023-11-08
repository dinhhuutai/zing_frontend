import { useEffect, useRef, useState } from 'react';
import { BsMic, BsStarFill, BsArrowRepeat } from 'react-icons/bs';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { CKEditor } from 'ckeditor4-react';

import uploadImage from '~/utils/uploadImage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import noticeAdminSlice from '~/redux/slices/noticeAdminSlice';
import { noticeAdminSelector } from '~/redux/selectors';


let setTimeoutTmp;


function ArtistCreate() {
    const [star, setStar] = useState(false);
    const [loadingCreate, setLoadingCreate] = useState(false);

    const [radioUp, setRadioUp] = useState(true);
    
    const [name, setName] = useState('');
    const [information, setInformation] = useState('');
    const [image, setImage] = useState("");

    var imageMain = useRef();

    function handleImage(e) {
        try {
            const check = e.target.files[0];
            const urlImg = URL.createObjectURL(check);
            setImage(e);
    
            imageMain.current.src = urlImg;
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


    const handleCreateArtist = async () => {
        try {
            if(!name){
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng nhập tên nghệ sĩ'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            } else if(!image) {
                dispatch(noticeAdminSlice.actions.errorNotice('Vui lòng thêm hình ảnh nghệ sĩ'));

                setTimeoutTmp = setTimeout(() => {
                    dispatch(noticeAdminSlice.actions.hiddenNotice());
                }, [10000])

                return
            }

            setLoadingCreate(true);

            let resLinkImg;

            if(radioUp){
                resLinkImg = await axios.post(`${process.env.REACT_APP_API_URL}/v1/cloudinary/uploadimg`, uploadImage(image))
            }
    
            const formData = {
                name,
                information,
                image: radioUp ? resLinkImg.data.link : image,
            }
    
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/v1/artist/create`, formData);
    
            if(res.data.success) {
                dispatch(noticeAdminSlice.actions.successNotice('Thêm nghệ sĩ thành công'));

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
        <div>
            <div className="py-[16px] px-[60px] bg-[#F7F9FA] flex items-center justify-between">
                <div className="flex items-center gap-[20px]">
                    <div className="text-[26px] h-[50px] text-[#858080] w-[50px] box-shadow-admin-path rounded-[4px] bg-[#fff] flex items-center justify-center">
                        <BsMic />
                    </div>
                    <h1 className="text-[20px] text-[#5a5757]">Artist Create</h1>
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
                            <label>Name Artist: <span className='text-[red] text-[14px] font-[700]'>*</span></label>
                            <input value={name} name='name' onChange={(e) => setName(e.target.value)} className='border-[1px] px-[8px] py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]' type="text" placeholder="Name Artist" />
                        </div>
                        <div className='mt-[14px]'>
                            <label>Image Artist: <span className='text-[red] text-[14px] font-[700]'>*</span></label>
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
                                            <AiOutlineFileAdd className='text-[30px]' />
                                            <p className='mt-[20px]'>Upload a artist image</p>
                                        </div>
                                        <img ref={imageMain} src="" alt="" className='absolute top-0 left-0 w-full h-full outline-none border-none cursor-pointer z-[-1]' />
                                    </div> :
                                    <input value={image} name='name' onChange={(e) => setImage(e.target.value)} className='border-[1px] px-[8px] w-full py-[2px] outline-none border-solid border-[#a9a5a5] rounded-[4px]' type="text" placeholder="Link Image Artist" />
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <label>Information Artist:</label>
                        <CKEditor
                            style={{ width: '600px', borderColor: '#a9a5a5' }}
                            config={{
                                extraPlugins: 'editorplaceholder',
                                editorplaceholder: 'Information Artist',
                            }}
                            onChange={(e) => setInformation(e.editor.getData())}
                            data={information}
                        />
                    </div>
                </div>
                <div className='flex justify-center mt-[30px]'>
                    <button disabled={loadingCreate || notice.state} onClick={handleCreateArtist} className={`${(loadingCreate || notice.state) ? 'opacity-[.7] hover:opacity-[.7]' : 'hover:opacity-[.9]'} w-[120px] h-[30px] flex justify-center items-center bg-[#259d23] rounded-[4px] text-[#fff] active:opacity-[.7]`}>
                        {
                            (loadingCreate || notice.state) ?
                            <div className='text-[20px] animate-loading'>
                                <BsArrowRepeat />
                            </div> :
                            'Create Artist'
                        }
                    </button>
                </div>
                <div className='mt-[20px]'>
                    <p className='text-[10px] text-[#ac4646] font-[600]'>(*): Trường bắt buộc</p>
                </div>
            </div>
        </div>
    );
}

export default ArtistCreate;