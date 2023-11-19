import { useSortable } from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';




function Card({artist}) {

    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: artist._id, data: {...artist} });

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
                alt={artist.name}
                src={artist.image}
            />
            <p className="ml-[4px]">{artist.name}</p>
        </button>
    );
}

export default Card;
