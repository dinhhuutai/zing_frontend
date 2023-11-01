import { useEffect, useState } from "react";
import { AiOutlineSetting, AiOutlineUser, AiOutlineDownload, AiOutlineMinusCircle, AiOutlineUpload } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "~/redux/selectors";

import HeadlessTippy from '@tippyjs/react/headless';
import { Link, useNavigate } from "react-router-dom";

import bgPlus from '~/assets/imgs/plus.png';
import bgPremium from '~/assets/imgs/premium.png';
import config from "~/config";
import authSlice from "~/redux/slices/authSlice";
import axios from "axios";

import { axiosJWT } from "~/routing/ProtectedCheckUser";

function Setting() {

    const tmp = useSelector(userSelector);
    const [user, setUser] = useState(tmp);
    const [downUser, setDownUser] = useState(false);

    useEffect(() => {
        setUser(tmp)
    }, [tmp])

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        dispatch(authSlice.actions.logoutStart());

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/v1/user/logout`);

            console.log(res.data)

            if(res?.data?.success){
                dispatch(authSlice.actions.logoutSuccess());

                //window.location.reload();
                navigate(config.routes.explore);

            } else {
                dispatch(authSlice.actions.loginFailed());
            }
        } catch (error) {

        }
    }


    return (
        <div className="text-[white] text-[20px] gap-[10px] flex">
            <div className="cursor-pointer hover:opacity-[0.8] h-[36px] text-[#c273ed] px-[20px] bg-[#463d55] rounded-[20px] flex items-center justify-center">
                <AiOutlineDownload />
                <span className="text-[12px] font-bold ml-[4px]">Tải bản Windows</span>
            </div>
            <div className="cursor-pointer hover:opacity-[0.8] h-[36px] w-[36px] bg-[#463d55] rounded-[50%] flex items-center justify-center">
                <AiOutlineSetting />
            </div>
            <HeadlessTippy
                interactive
                placement="bottom"
                visible={downUser}
                onClickOutside={() => setDownUser(false)}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs} className='z-[100] absolute w-[350px] max-h-[400px] overflow-y-auto p-[6px] rounded-[8px] bg-[#34224f] right-[-16px]'>
                        {
                            user.login.currentUser ? 
                            <div className="p-[10px] mb-[10px]">
                                <div className="flex items-center mb-[10px]">
                                    <div className="mr-[12px] rounded-[50%]">
                                        <img className="w-[64px] h-[64px] rounded-[50%] overflow-hidden" alt={user.login.currentUser?.name} src={user.login.currentUser?.avatar} />
                                    </div>
                                    <div>
                                        <p className="font-[700] text-[16px] leading-[19px] mb-[6px] text-[#fff]">{user.login.currentUser?.name}</p>
                                        <span className="text-[10px] block font-[700] px-[6px] w-fit bg-[#A1A1A1] uppercase tracking-[2px] rounded-[4px]">BASIC</span>
                                    </div>
                                </div>
                                <button className="bg-[hsla(0,0%,100%,0.1)] h-[32px] rounded-[20px] w-full text-[#fff] text-[14px] font-[600]">
                                    <Link>Nâng cấp tài khoản</Link>
                                </button>
                            </div> :
                            <div className="text-[14px] font-[600] px-[10px] py-[10px]">
                                <Link to={config.routes.login}>
                                    <button className="bg-[#9b4de0] h-[40px] rounded-[20px] w-full hover:brightness-[0.9]">
                                        Đăng nhập
                                    </button>
                                </Link>
                            </div>
                        }
                        <div className="px-[10px]">
                            <h3 className="text-[16px] font-[600] mb-[4px]">Đăng ký gói</h3>
                            <div className='relative py-[14px] px-[20px] rounded-[12px] mb-[8px] bg-no-repeat bg-cover' style={{backgroundImage: `url(${bgPlus})`}}>
                                <h2 className="flex items-center">
                                    <span className="font-[700] text-[22px] mb-[2px] text-[#8e4cff]">Zing MP3</span>
                                    <span className="text-[14px] font-[700] px-[4px] ml-[4px] bg-[#8e4cff] uppercase tracking-[2px] rounded-[4px]">PLUS</span>
                                </h2>
                                <h3 className="text-[14px] text-[#141414] mb-[4px] font-[600] leading-[20px]">
                                    Chỉ từ 11.000 đ/tháng
                                </h3>
                                <h3 className="font-[400] text-[14px] leading-[20px] mb-[14px] text-[rgba(20,20,20,.8)]">
                                    Trải nghiệm nghe nhạc với chất lượng cao nhất, không quảng cáo
                                </h3>
                                <button className="px-[24px] py-[6px] rounded-[100px] font-[600] text-[13px] leading-[20px] text-center text-[#fff] w-fit bg-[#8e4cff]">
                                    <Link>Tìm hiểu thêm</Link>
                                </button>
                            </div>

                            <div className='relative py-[14px] px-[20px] mb-[8px] rounded-[12px] bg-no-repeat bg-cover' style={{backgroundImage: `url(${bgPremium})`}}>
                                <h2 className="flex items-center">
                                    <span className="font-[700] text-[22px] mb-[2px] text-[#dca519]">Zing MP3</span>
                                    <span className="text-[14px] font-[700] px-[4px] ml-[4px] bg-[#dca519] uppercase tracking-[2px] rounded-[4px]">PREMIUM</span>
                                </h2>
                                <h3 className="text-[14px] text-[#141414] mb-[4px] font-[600] leading-[20px]">
                                    Chỉ từ 37.500 đ/tháng
                                </h3>
                                <h3 className="font-[400] text-[14px] leading-[20px] mb-[14px] text-[rgba(20,20,20,.8)]">
                                    Toàn bộ đặc quyền Plus cùng kho nhạc độc quyền
                                </h3>
                                <button className="px-[24px] py-[6px] rounded-[100px] font-[600] text-[13px] leading-[20px] text-center text-[#fff] w-fit bg-[#dca519]">
                                    <Link>Tìm hiểu thêm</Link>
                                </button>
                            </div>
                        </div>
                        {
                            user.login.currentUser && 
                            <div className="">
                                <div className="h-[1px] w-full bg-[hsla(0,0%,100%,0.1)] px-[10px]"></div>
                                <div className="mt-[6px] mb-[6px]">
                                    <h2 className="font-[600] text-[16px] mb-[6px] px-[10px] text-[#fff]">Cá nhân</h2>
                                    <div className='flex-col'>
                                        <Link className="hover:bg-[hsla(0,0%,100%,0.1)] hover:text-[#fff] rounded-[4px] flex items-center text-[14px] py-[12px] px-[10px] h-[44px]">
                                            <div className="text-[20px] mr-[10px]"><AiOutlineMinusCircle /></div>
                                            <span>Danh sách chặn</span>
                                        </Link>
                                        <Link className="hover:bg-[hsla(0,0%,100%,0.1)] hover:text-[#fff] rounded-[4px] flex items-center text-[14px] py-[12px] px-[10px] h-[44px]">
                                            <div className="text-[20px] mr-[10px]"><AiOutlineUpload /></div>
                                            <span>Tải lên</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="h-[1px] w-full bg-[hsla(0,0%,100%,0.1)] px-[10px]"></div>
                                <div className="mt-[6px]">
                                    <Link onClick={handleLogout} className="hover:bg-[hsla(0,0%,100%,0.1)] hover:text-[#fff] rounded-[4px] flex items-center text-[14px] py-[12px] px-[10px] h-[44px]">
                                        <div className="text-[20px] mr-[10px] rotate-90"><AiOutlineUpload /></div>
                                        <span>Đăng xuất</span>
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>
                )}
            >
                <div onClick={() => setDownUser((prev) => !prev)} className="cursor-pointer overflow-hidden hover:opacity-[0.8] h-[36px] w-[36px] bg-[#f3e3e6] rounded-[50%] text-[#544f4f] flex items-center justify-center">
                    {
                        user.login.currentUser ?
                        <img alt={user.login.currentUser?.name} src={user.login.currentUser?.avatar} /> :
                        <AiOutlineUser /> 
                    }
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Setting;