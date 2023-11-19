import { BsTrash3 } from "react-icons/bs";


function CardSelect({ song, handleDeleteCardSelect }) {
    return (
        <button className="px-[6px] py-[4px] rounded-[20px] bg-[#fff] w-full flex items-center justify-start cursor-pointer box-shadow-admin-path">
            <img
                className="w-[36px] h-[36px] rounded-[12px] border-[.5px] border-solid border-[#c9bebe] object-cover"
                alt={song.name}
                src={song.thumbnail}
            />
            <div className='flex-1 ml-[8px] text-start'>
                <p className="">{song?.name}</p>
                <ul className='text-[12px] text-[#867f7f] flex'>
                    {
                        song?.artists?.map((artist, index) => {
                            return index === 0 ? 
                            <li key={index}>
                                {`${artist?.name}`}
                            </li> :
                            <li key={index}>
                                &nbsp;{`- ${artist?.name}`}
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className='text-[13px] text-[#ab9e9e] flex-1'>
                {`${Math.floor(song?.duration / 60) < 10 ? "0"+Math.floor(song?.duration / 60) : Math.floor(song?.duration / 60)}:${song?.duration % 60 < 10 ? "0"+(song?.duration % 60) : song?.duration % 60}`}
            </div>
            <button onClick={() => handleDeleteCardSelect(song._id)} className="ml-[6px] bg-[#fff] p-[4px] rounded-[50%] box-shadow-admin-notice hover:opacity-[.8] active:opacity-[.7]">
                <BsTrash3 />
            </button>
        </button>
    );
}

export default CardSelect;
