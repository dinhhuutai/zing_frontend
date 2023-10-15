import { NavLink } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import config from "~/config";


function DefaultLayout() {
    return (
        <div>
            <div className="flex items-center">
                <h1 className="text-[34px] font-[700] capitalize">Mới Phát Hành</h1>
                <div className="hover:opacity-[.9] cursor-pointer text-[#000] text-[26px] ml-[12px] h-[36px] w-[36px] flex justify-center items-center bg-[#fff] rounded-[50%]">
                    <BsFillPlayFill />
                </div>
            </div>
            <ul className="h-fit mt-[20px] flex gap-[40px] text-[14px] font-[600] border-b-[1px] border-solid border-[hsla(0,0%,100%,0.1)]">
                <li className="h-fit">
                    <NavLink to={`${config.routes.newReleaseSong}?filter=all`} className={(nav) => nav.isActive ? 'my-[-2px] py-[10px] block border-b-[2px] border-solid border-[#9b4de0] text-[#fff]' : 'my-[-2px] block py-[10px] text-[#c4bebe] hover:text-[#fff]'}>
                        BÀI HÁT
                    </NavLink>
                </li>
                <li className="h-fit">
                    <NavLink to={`${config.routes.newReleaseAlbum}?filter=all`} className={(nav) => nav.isActive ? 'my-[-2px] py-[10px] block border-b-[2px] border-solid border-[#9b4de0] text-[#fff]' : 'my-[-2px] block py-[10px] text-[#c4bebe] hover:text-[#fff]'}>
                        ALBUM
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default DefaultLayout;