import { BsTrash3 } from "react-icons/bs";


function CardSelect({ artist, handleDeleteCardSelect }) {
    return (
        <button className="px-[6px] py-[4px] rounded-[20px] bg-[#fff] w-fit flex items-center justify-center cursor-pointer box-shadow-admin-path">
            <img
                className="w-[24px] h-[24px] rounded-[50%] border-[.5px] border-solid border-[#c9bebe] object-cover"
                alt={artist.name}
                src={artist.image}
            />
            <p className="ml-[4px]">{artist.name}</p>
            <button onClick={() => handleDeleteCardSelect(artist._id)} className="ml-[6px] bg-[#fff] p-[4px] rounded-[50%] box-shadow-admin-notice hover:opacity-[.8] active:opacity-[.7]">
                <BsTrash3 />
            </button>
        </button>
    );
}

export default CardSelect;
