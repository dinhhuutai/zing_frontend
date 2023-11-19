import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { BsFilePlus } from "react-icons/bs";


function CardAdd({activeCardAdd}) {
    
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: '310702' });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    };


    return (
        <button
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`${activeCardAdd ? 'box-shadow-admin-card-add' : ''} px-[6px] py-[4px] rounded-[20px] bg-[#fff] w-fit flex items-center justify-center cursor-pointer box-shadow-admin-path`}
        >
            <div className='w-[60px] text-[#5e5252] text-[20px] rotate-[90deg] flex justify-center items-center'><BsFilePlus /></div>
        </button>
    );
}

export default CardAdd;
