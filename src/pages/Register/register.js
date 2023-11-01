import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import { BsArrowBarLeft, BsEyeSlash, BsEye } from "react-icons/bs";

import bgRegister from '~/assets/imgs/bg-register.jpg';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import authSlice from '~/redux/slices/authSlice';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [unvisiblePassword, setUnvisiblePassword] = useState(true);
    const [unvisibleConfirmPassword, setUnvisibleConfirmPassword] = useState(true);

    const [noticeError, setNoticeError] = useState({
        status: false,
        text: '',
    })

    const {name, username, password, confirmPassword} = formData;

    const dispatch = useDispatch();
    const navigate= useNavigate();

    const handleChange = (e) => {
        setNoticeError({
            status: false,
            text: '',
        })
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    };

    const handleBlurConfirmPassword = (e) => {
        if(password.trim() !== confirmPassword.trim()) {
            setNoticeError({
                status: true,
                text: 'confirm password không hợp lệ',
            })
        }
    }

    const handleSubmit = async (e) => {
        if(!name){
            setNoticeError({
                status: true,
                text: 'Bạn chưa nhập name',
            })
        } else if(!username){
            setNoticeError({
                status: true,
                text: 'Bạn chưa nhập username',
            })
        } else if(!password){
            setNoticeError({
                status: true,
                text: 'Bạn chưa nhập passwordd',
            })
        } else if(password.trim() !== confirmPassword.trim()) {
            setNoticeError({
                status: true,
                text: 'confirm password không hợp lệ',
            })
        } else {

            dispatch(authSlice.actions.loginStart());

            try {
                
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/v1/user/register`, formData);

                if(res?.data?.success){
                    dispatch(authSlice.actions.loginSuccess({
                        user: res.data?.user,
                        accessToken: res.data?.accessToken,
                    }));

                    if(res.data.user.isAdmin){
                        navigate(config.routes.adminDashboard);
                    } else {
                        navigate(config.routes.explore);
                    }

                } else {
                    dispatch(authSlice.actions.loginFailed());
                }
            } catch (error) {
                setNoticeError({
                    status: true,
                    text: error.response.data.message,
                })
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center" style={{backgroundImage: `url(${bgRegister})`}}>
            <div className="bg-white p-8 rounded shadow-lg w-[360px]">
                <h2 className="text-2xl font-bold mb-4">Đăng ký</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="w-full p-2 border rounded outline-none"
                        value={name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        className="w-full p-2 border rounded outline-none"
                        value={username}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="mb-4 relative">
                    <input
                        type={unvisiblePassword ? 'password' : 'text'}
                        placeholder="Password"
                        name="password"
                        className="w-full p-2 border rounded outline-none pr-[30px]"
                        value={password}
                        onChange={(e) => handleChange(e)}
                    />
                    <button onClick={() => setUnvisiblePassword(prev => !prev)} className='text-[18px] pr-[10px] h-full absolute flex justify-center items-center top-[50%] translate-y-[-50%] right-0'>
                        {
                            unvisiblePassword ? 
                            <button className="flex justify-center items-center">
                                <BsEyeSlash />
                            </button> :
                            <button className="flex justify-center items-center">
                                <BsEye />
                            </button>
                        }
                    </button>
                </div>
                <div className="mb-4 relative">
                    <input
                        type={unvisibleConfirmPassword ? 'password' : 'text'}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        className="w-full p-2 border rounded outline-none pr-[30px]"
                        value={confirmPassword}
                        onChange={(e) => handleChange(e)}
                        onBlur={handleBlurConfirmPassword}
                    />
                    <button onClick={() => setUnvisibleConfirmPassword(prev => !prev)} className='text-[18px] pr-[10px] h-full absolute flex justify-center items-center top-[50%] translate-y-[-50%] right-0'>
                        {
                            unvisibleConfirmPassword ? 
                            <button className="flex justify-center items-center">
                                <BsEyeSlash />
                            </button> :
                            <button className="flex justify-center items-center">
                                <BsEye />
                            </button>
                        }
                    </button>
                </div>
                {
                    noticeError.status &&
                    <div className='text-[12px] text-[#e25444dc] my-[8px] font-[600]'>
                        {noticeError.text}
                    </div>
                }
                <button className="bg-blue-500 text-white rounded w-full py-2" onClick={handleSubmit}>
                    Đăng ký
                </button>
                <div className="mt-[16px] flex justify-between">
                    <Link to={config.routes.login} className="flex items-center gap-[2px] cursor-pointer text-[#7a7aba]">
                        <BsArrowBarLeft className="text-[16px]" />
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
