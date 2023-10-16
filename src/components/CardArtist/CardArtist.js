import { BsShuffle, BsPersonPlus } from "react-icons/bs";


function CardArtist({data}) {
    return (
        <div>
            <div className='relative group cursor-pointer'>
                <div className='overflow-hidden rounded-[50%]'>
                    <img className="group-hover:scale-[1.1] group-hover:brightness-50 bg-cover transition-all ease-linear duration-[.4s]" alt={data.name} src={data.thumbnail} />
                </div>
                <div className="hidden absolute text-[24px] top-[0px] left-[0px] w-full h-full group-hover:flex justify-center items-center">
                    <BsShuffle className="hover:opacity-[.8]" />
                </div>
            </div>
            <div className="flex flex-col items-center mt-[10px]">
                <span className="text-[13px] font-[600] hover:text-[#c273ed] cursor-pointer hover:underline">{data.name}</span>
                <span className="text-[12px] cursor-default text-[hsla(0,0%,100%,0.5)]">{Math.floor(data.totalFollow / 1000)}K quan tâm</span>
            </div>
            <div className="flex justify-center mt-[10px]">
                <button className="hover:brightness-[0.9] flex justify-center items-center px-[16px] py-[4px] rounded-[20px] border-[1px] border-solid border-[hsla(0,0%,100%,0.1)] bg-[hsla(0,0%,100%,0.1)]">
                    <div className="flex items-center text-[18px]">
                        <BsPersonPlus />
                    </div>
                    <span className="ml-[6px] text-[12px] font-[500]">QUAN TÂM</span>
                </button>
            </div>
        </div>
    );
}

export default CardArtist;