import { BsPlayCircle } from "react-icons/bs";

function CardRadio({data}) {
    return (
        <div className="flex flex-col items-center">
            <div className="h-[135px] w-[120px] overflow-hidden cursor-pointer group">
                <div className='relative h-[120px] w-full'>
                    <div className='absolute h-[120px] w-full overflow-hidden rounded-[50%] border-[3px] border-solid border-[#ff4b4a]'>
                        <div className="absolute w-full h-full z-[1] hidden group-hover:flex justify-around items-center px-[6px]">
                            <div className="text-[36px] hover:opacity-[0.7]">
                                <BsPlayCircle />
                            </div>
                        </div>
                        <img className='group-hover:scale-[1.1] group-hover:brightness-50 transition-all ease-linear duration-[.4s] object-cover' alt={data.name} src={data.img} />
                    </div>
                    <div className='absolute bottom-[0px] right-[0px] h-[40px] w-[40px] overflow-hidden rounded-[50%] border-[2px] border-solid border-[#170f23]'>
                        <img className="object-cover" alt={data.name} src={data.avatar} />
                    </div>
                    <span className='absolute uppercase bottom-[-6px] left-[50%] translate-x-[-50%] text-[10px] px-[6px] bg-[#ff0a0a] rounded-[2px]'>LIVE</span>
                </div>
            </div>
            <h2 className="text-[14px] font-bold">{data.name}</h2>
            <span className="text-[11px] text-[hsla(0,0%,100%,0.5)]">{data.listening} đang nghe</span>
        </div>
    );
}

export default CardRadio;