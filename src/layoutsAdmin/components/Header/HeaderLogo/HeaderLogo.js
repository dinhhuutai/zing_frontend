import { BsList } from "react-icons/bs";

import logo from '~/assets/imgs/logo-light.svg';



function HeaderLogo() {
    return (
        <div className="flex justify-between items-center px-[24px] w-[var(--admin-width-sidebar)] h-full">
            <div className="">
                <img alt="logo" src={logo} className="h-[40px]" />
            </div>
            <div className="text-[26px] text-[#3e5cb1] cursor-pointer">
                <BsList />
            </div>
        </div>
    );
}

export default HeaderLogo;
