import Controll from "./Controll";
import Search from "./Search";
import Setting from "./Setting/Setting";


function Header() {
    return (
        <div className="bg-[var(--bg-color-header)] h-full w-full flex px-[40px]">
            <div className="h-full">
                <Controll />
            </div>
            <div className="h-full flex items-center flex-1 ml-[16px]">
                <Search />
            </div>
            <div className="h-full flex items-center">
                <Setting />
            </div>
        </div>
    );
}

export default Header;