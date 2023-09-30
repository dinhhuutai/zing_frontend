import { AiOutlineSearch } from "react-icons/ai";


function Search() {
    return (
        <div className="flex bg-[#2f2739] py-[8px] px-[10px] rounded-[20px]">
            <div className="flex items-center text-[20px] text-[white] mr-[4px] cursor-pointer"><AiOutlineSearch /></div>
            <input className="w-[400px] text-[14px] text-[white] px-[4px] bg-transparent outline-none" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." />
        </div>
    );
}

export default Search;