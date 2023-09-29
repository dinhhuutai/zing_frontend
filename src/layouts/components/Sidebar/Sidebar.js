import { Link, NavLink } from 'react-router-dom';
import logoDart from '~/assets/imgs/logo-dart.png'

import { BsBullseye, BsPieChart, BsMusicNoteList, BsFileEarmarkMusic, BsPlayCircle } from "react-icons/bs";
import config from '~/config';


function Sidebar() {
    return (
        <div className="w-full h-full bg-[#221a2d]">
            <Link to={config.routes.explore} className='h-[var(--height-header)] flex items-center px-[26px]'>
                <img src={logoDart} alt='logo-dart' className='w-[120px] h-[40px]' />
            </Link>
            <div>
                <ul>
                    <li>
                        <NavLink to={config.routes.explore} className={(nav) => nav.isActive ? `px-[23px] py-[12px] flex text-[#fff] bg-[#ffffff1a] border-l-[3px] border-solid border-[#9b4de0]` : `border-l-[3px] border-solid border-transparent px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]`}>
                            <BsBullseye className='w-[20px] h-[20px] mr-[12px]' />
                            <span className='text-[14px]'>Khám Phá</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.zingChart} className={(nav) => nav.isActive ? `group px-[23px] py-[12px] flex text-[#fff] bg-[#ffffff1a] border-l-[3px] border-solid border-[#9b4de0]` : `group border-l-[3px] border-solid border-transparent px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]`}>
                            <BsPieChart className='w-[20px] h-[20px] mr-[12px]' />
                            <span className='text-[14px] flex-1'>#zingchart</span>
                            <BsPlayCircle className='w-[20px] h-[20px] group-hover:block hidden' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.radio} className={(nav) => nav.isActive ? `group px-[23px] py-[12px]  flex text-[#fff] bg-[#ffffff1a] border-l-[3px] border-solid border-[#9b4de0]` : `group border-l-[3px] border-solid border-transparent px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]`}>
                            <BsMusicNoteList className='w-[20px] h-[20px] mr-[12px]' />
                            <span className='text-[14px] flex-1 flex items-center'>
                                Radio
                                <p className='text-[10px] px-[6px] bg-[#ff0a0a] ml-[6px] rounded-[2px]'>LIVE</p>
                            </span>
                            <BsPlayCircle className='w-[20px] h-[20px] group-hover:block hidden' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.library} className={(nav) => nav.isActive ? `px-[23px] py-[12px] flex text-[#fff] bg-[#ffffff1a] border-l-[3px] border-solid border-[#9b4de0]` : `border-l-[3px] border-solid border-transparent px-[23px] py-[12px] text-[#c5c2c2] flex hover:text-[#fff]`}>
                            <BsFileEarmarkMusic className='w-[20px] h-[20px] mr-[12px]' />
                            <span className='text-[14px]'>Thư Viện</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;