import { BsJournalAlbum, BsStarFill } from "react-icons/bs";
import { useState } from "react";


function AlbumCreate() {
    const [star, setStar] = useState(false);

    return (
        <div>
            <div className="py-[16px] px-[60px] bg-[#F7F9FA] flex items-center justify-between">
                <div className="flex items-center gap-[20px]">
                    <div className="text-[26px] h-[50px] text-[#858080] w-[50px] box-shadow-admin-path rounded-[4px] bg-[#fff] flex items-center justify-center"><BsJournalAlbum /></div>
                    <h1 className="text-[20px] text-[#5a5757]">Album Create</h1>
                </div>
                <button onClick={() => setStar(prev => !prev)} className={`${star ? 'text-[#f4fe3e]' : 'text-[#fff]'} text-[18px] bg-[#23272B] px-[10px] py-[6px] rounded-[4px] cursor-pointer shadow-lg shadow-indigo-500/10`}>
                    <BsStarFill />
                </button>
            </div>

        </div>
    );
}

export default AlbumCreate;