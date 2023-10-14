import { NavLink } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import config from "~/config";
import { useState } from "react";

import Calendar from "./Calendar";


function DefaultLayout() {


    return (
        <div className="pt-[20px] text-[#fff]">
            <div className="flex items-center">
                <h1 className="text-[34px] font-[700] capitalize">Bảng Xếp Hạng Tuần</h1>
                <div className="hover:opacity-[.8] cursor-pointer text-[26px] ml-[6px] h-[36px] w-[36px] flex justify-center items-center bg-[#9b4de0] rounded-[50%]">
                    <BsFillPlayFill />
                </div>
            </div>
            <ul className="flex mt-[24px] gap-[30px]">
                <li>
                    <NavLink to={`${config.routes.zingChartVietNam}/123`} className={(nav) => nav.isActive ? 'py-[6px] text-[20px] uppercase font-[600] border-b-[2px] border-solid border-[#9b4de0]' : 'py-[6px] text-[20px] uppercase font-[600] border-b-[2px] border-solid border-transparent'}>
                        VIỆT NAM
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${config.routes.zingChartUsUk}/123`} className={(nav) => nav.isActive ? 'py-[6px] text-[20px] uppercase font-[600] border-b-[2px] border-solid border-[#9b4de0]' : 'py-[6px] text-[20px] uppercase font-[600] border-b-[2px] border-solid border-transparent'}>
                        US-UK
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${config.routes.zingChartKpop}/123`} className={(nav) => nav.isActive ? 'py-[6px] text-[20px] uppercase font-[600] border-b-[2px] border-solid border-[#9b4de0]' : 'py-[6px] text-[20px] uppercase font-[600] border-b-[2px] border-solid border-transparent'}>
                        K-POP
                    </NavLink>
                </li>
            </ul>
            <div className="mt-[30px]">
                <Calendar />
            </div>
        </div>
    );
}

export default DefaultLayout;