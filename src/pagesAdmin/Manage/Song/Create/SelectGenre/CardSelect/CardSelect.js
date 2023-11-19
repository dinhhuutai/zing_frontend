import { BsTrash3 } from "react-icons/bs";


function CardSelect({ genre, handleDeleteCardSelect }) {
    return (
        <button className="px-[6px] py-[4px] rounded-[20px] bg-[#fff] w-fit flex items-center justify-center cursor-pointer box-shadow-admin-path">
            <img
                className="w-[24px] h-[24px] rounded-[50%] border-[.5px] border-solid border-[#c9bebe] object-cover"
                alt={genre.name}
                src={genre.cover}
            />
            <p className="ml-[4px]">{genre.name}</p>
            <button onClick={() => handleDeleteCardSelect(genre._id)} className="ml-[6px] bg-[#fff] p-[4px] rounded-[50%] box-shadow-admin-notice hover:opacity-[.8] active:opacity-[.7]">
                <BsTrash3 />
            </button>
        </button>
    );
}

export default CardSelect;
