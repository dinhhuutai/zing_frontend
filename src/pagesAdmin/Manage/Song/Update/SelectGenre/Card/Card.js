import { useSortable } from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';




function Card({genre}) {

    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: genre._id, data: {...genre} });

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
            className="px-[6px] py-[4px] rounded-[20px] bg-[#fff] w-fit flex items-center justify-center cursor-pointer box-shadow-admin-path"
        >
            <img
                className="w-[24px] h-[24px] rounded-[50%] border-[.5px] border-solid border-[#c9bebe] object-cover"
                alt={genre.name}
                src={genre.cover}
            />
            <p className="ml-[4px]">{genre.name}</p>
        </button>
    );
}

export default Card;
