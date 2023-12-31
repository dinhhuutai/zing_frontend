import { Link, NavLink } from 'react-router-dom';
import logoDart from '~/assets/imgs/logo-dart.png'

import { BsFillDeviceHddFill, BsFillCloudUploadFill, BsFileEarmarkMusicFill, BsFillClipboardHeartFill, BsFillClockFill, BsBullseye, BsPieChart, BsMusicNoteList, BsFileEarmarkMusic, BsPlayCircle, BsPlus, BsMusicNoteBeamed, BsGrid, BsStar } from "react-icons/bs";
import config from '~/config';
import { useSelector } from 'react-redux';
import { userSelector } from '~/redux/selectors';
import { useEffect, useState } from 'react';


function Sidebar() {

    const tmp = useSelector(userSelector);
    const [user, setUser] = useState(tmp);

    useEffect(() => {
        setUser(tmp)
    }, [tmp])

    return (
        <div className="h-full bg-[var(--bg-color-sidebar)] flex flex-col">
            <Link to={config.routes.explore} className='h-[var(--height-header)] flex items-center px-[26px]'>
                <img src={logoDart} alt='logo-dart' className='w-[120px] h-[40px]' />
            </Link>
            <div>
                <ul>
                    <li>
                        <NavLink to={config.routes.explore} className={(nav) => nav.isActive ? `px-[23px] py-[12px] flex text-[#fff] bg-[#ffffff1a] border-l-[3px] border-solid border-[#9b4de0]` : `border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]`}>
                            <BsBullseye className='w-[20px] h-[20px] mr-[12px]' />
                            <span className='text-[14px]'>Khám Phá</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.zingChart} className={(nav) => nav.isActive ? `group px-[23px] py-[12px] flex text-[#fff] bg-[#ffffff1a] border-l-[3px] border-solid border-[#9b4de0]` : `group border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]`}>
                            <BsPieChart className='w-[20px] h-[20px] mr-[12px]' />
                            <span className='text-[14px] flex-1'>#zingchart</span>
                            <BsPlayCircle className='w-[20px] h-[20px] group-hover:block hidden' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.radio} className={(nav) => nav.isActive ? `group px-[23px] py-[12px]  flex text-[#fff] bg-[#ffffff1a] border-l-[3px] border-solid border-[#9b4de0]` : `group border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]`}>
                            <BsMusicNoteList className='w-[20px] h-[20px] mr-[12px]' />
                            <span className='text-[14px] flex-1 flex items-center'>
                                Radio
                                <p className='text-[10px] px-[6px] bg-[#ff0a0a] ml-[6px] rounded-[2px]'>LIVE</p>
                            </span>
                            <BsPlayCircle className='w-[20px] h-[20px] group-hover:block hidden' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.library} className={(nav) => nav.isActive ? `px-[23px] py-[12px] flex text-[#fff] bg-[#ffffff1a] border-l-[3px] border-solid border-[#9b4de0]` : `border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]`}>
                            <BsFileEarmarkMusic className='w-[20px] h-[20px] mr-[12px]' />
                            <span className='text-[14px]'>Thư Viện</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='px-[26px] mt-[6px] pb-[4px] z-10 shadow-md'>
                <div className='h-[0.5px] w-full bg-[#b4b4b43d]'></div>
            </div>

            <div className='flex-1 relative mb-[56px]'>
                <div className='absolute overflow-auto inset-0'>
                    <ul className='py-[10px]'>
                        <li>
                            <NavLink to={config.routes.releaseNew} className={(nav) => nav.isActive ? `group px-[23px] py-[12px] flex text-[#fff] bg-[#ffffff1a] border-l-[3px] border-solid border-[#9b4de0]` : `group border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]`}>
                                <BsMusicNoteBeamed className='w-[20px] h-[20px] mr-[12px]' />
                                <span className='text-[14px] flex-1'>BXH Nhạc Mới</span>
                                <BsPlayCircle className='w-[20px] h-[20px] group-hover:block hidden' />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={config.routes.hub} className={(nav) => nav.isActive ? `group px-[23px] py-[12px] flex text-[#fff] bg-[#ffffff1a] border-l-[3px] border-solid border-[#9b4de0]` : `group border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]`}>
                                <BsGrid className='w-[20px] h-[20px] mr-[12px]' />
                                <span className='text-[14px] flex-1'>Chủ Đề & Thể Loại</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={config.routes.top100} className={(nav) => nav.isActive ? `group px-[23px] py-[12px] flex text-[#fff] bg-[#ffffff1a] border-l-[3px] border-solid border-[#9b4de0]` : `group border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]`}>
                                <BsStar className='w-[20px] h-[20px] mr-[12px]' />
                                <span className='text-[14px] flex-1'>Top 100</span>
                            </NavLink>
                        </li>
                    </ul>
                    {
                        user.login.currentUser ? 
                        <div className='px-[26px] pb-[10px]'>
                            <div className='bg-[#fff] px-[8px] py-[10px] flex flex-col items-center rounded-[8px] bg-gradient-to-r from-[#5a4be7] to-[#c86dd7]'>
                                <p className='text-[12px] text-center font-bold leading-[16px] text-[#fff]'>Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM</p>
                                <Link><button className='hover:brightness-[0.9] transition-all mt-[10px] bg-[#ffdb00] py-[4px] px-[13px] rounded-[20px] text-[12px] text-[#32323d] font-bold uppercase border-[1px] border-solid border-[#ffdb00]'>Nâng cấp tài khoản</button></Link>
                            </div>
                        </div> :
                        <div className='px-[26px] pb-[10px]'>
                            <div className='bg-[#fff] px-[14px] py-[10px] flex flex-col items-center rounded-[8px] bg-gradient-to-b from-red-500 to-blue-500'>
                                <p className='text-[12px] text-center font-bold leading-[16px] text-[#fff]'>Đăng nhập để khám phá playlist dành riêng cho bạn</p>
                                <NavLink to={config.routes.login}><button className='hover:text-[#dad7d7] transition-all mt-[10px] bg-[#a55fe3] py-[4px] px-[30px] rounded-[20px] text-[12px] text-[#fff] font-bold uppercase border-[1px] border-solid border-[#fff]'>Đăng nhập</button></NavLink>
                            </div>
                        </div>
                    }
                    {
                        user.login.currentUser &&
                        <ul className='py-[10px]'>
                            <li>
                                <Link to={config.routes.myMusicHistory} className="group border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]">
                                    <BsFillClockFill className='w-[20px] h-[20px] mr-[12px]' />
                                    <span className='text-[14px] flex-1'>Nghe gần đây</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={config.routes.myMusicSongFavourite} className="group border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]">
                                    <BsFillClipboardHeartFill className='w-[20px] h-[20px] mr-[12px]' />
                                    <span className='text-[14px] flex-1'>Bài hát yêu thích</span>
                                    <BsPlayCircle className='w-[20px] h-[20px] group-hover:block hidden' />
                                </Link>
                            </li>
                            <li>
                                <Link to={config.routes.myMusicLibraryPlaylist} className="group border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]">
                                    <BsFileEarmarkMusicFill className='w-[20px] h-[20px] mr-[12px]' />
                                    <span className='text-[14px] flex-1'>Playlist</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={config.routes.myMusicAlbum} className="group border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]">
                                    <BsFillDeviceHddFill className='w-[20px] h-[20px] mr-[12px]' />
                                    <span className='text-[14px] flex-1'>Album</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={config.routes.myMusicSongUpload} className="group border-l-[3px] border-solid border-[var(--bg-color-sidebar)] px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]">
                                    <BsFillCloudUploadFill className='w-[20px] h-[20px] mr-[12px]' />
                                    <span className='text-[14px] flex-1'>Đã tải lên</span>
                                </Link>
                            </li>
                        </ul>
                    }
                    {
                        user.login.currentUser &&
                        <div className='px-[26px] mt-[6px] pb-[4px] z-10 shadow-md'>
                            <div className='h-[0.5px] w-full bg-[#b4b4b43d]'></div>
                        </div>
                    }
                </div>
            </div>

            
            <NavLink to={config.routes.playlistNew} className='absolute bottom-0 w-full cursor-pointer'>
                <div className='h-[0.5px] w-full bg-[#7a7a7a7e]'></div>
                <div className='px-[26px] text-[#fff] flex items-center py-[16px]'>
                    <BsPlus className='text-[24px]' />
                    <span className='ml-[6px]'>Tạo playlist mới</span>
                </div>
            </NavLink>
        </div>
    );
}

export default Sidebar;