import { useSortable } from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';

import { BsPlus } from "react-icons/bs";


function Card({genre, handleAddCardSelect}) {

    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: genre?._id, data: {...genre} });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : undefined,
    };
    


    return (
        <button
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="px-[6px] py-[4px] rounded-[20px] bg-[#fff] w-full h-fit flex items-center justify-start cursor-pointer box-shadow-admin-path"
        >
            <img
                className="w-[24px] h-[24px] rounded-[50%] border-[.5px] border-solid border-[#c9bebe] object-cover"
                alt={genre?.name}
                src={genre?.cover}
            />
            <p className="ml-[8px] flex-1 text-start">{genre?.name}</p>
            <button onClick={() => handleAddCardSelect(genre)} className="ml-[6px] bg-[#fff] p-[4px] rounded-[50%] box-shadow-admin-notice hover:opacity-[.8] active:opacity-[.7]">
                <BsPlus />
            </button>
        </button>
    );
}

export default Card;
