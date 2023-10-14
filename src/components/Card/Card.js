import { BsThreeDots, BsChevronRight, BsPlayCircle, BsHeart } from "react-icons/bs";


function Card({data, type }) {
    return (
        <div>
            <div className="overflow-hidden rounded-[4px] cursor-pointer relative group">
                <div className="absolute w-full h-full z-[1] hidden group-hover:flex justify-around items-center px-[6px]">
                    <div className="text-[16px] h-[28px] w-[28px] hover:bg-[hsla(0,0%,100%,.3)] flex justify-center items-center rounded-[50%]">
                        <BsHeart />
                    </div>
                    <div className="text-[40px] hover:opacity-[0.7]">
                        <BsPlayCircle />
                    </div>
                    <div className="text-[16px] h-[28px] w-[28px] hover:bg-[hsla(0,0%,100%,.3)] flex justify-center items-center rounded-[50%]">
                        <BsThreeDots />
                    </div>
                </div>
                <img
                    className="group-hover:scale-[1.1] group-hover:brightness-50 w-full h-full bg-cover transition-all ease-linear duration-[.4s]"
                    src={data.img}
                    alt={data.perface}
                />
            </div>
            {
                type?.perfaceSinger &&
                <span className="dotThreeHiddenText2 cursor-pointer hover:text-[#c273ed] h-[16px] overflow-hidden mt-[6px] text-[#fff] text-[13px] font-normal leading-[16px]">
                    {data.perface}
                </span>
            }
            {
                type?.perface &&
                <span className="dotThreeHiddenText h-[34px] overflow-hidden mt-[6px] text-[hsla(0,0%,100%,0.5)] text-[13px] font-normal leading-[16px]">
                    {data.perface}
                </span>
            }
            {
                type?.singer &&
                <div className='overflow-hidden mt-[6px] h-[34px] leading-[16px]'>
                    <div className="text-[12px] text-[hsla(0,0%,100%,0.5)] flex flex-wrap font-normal">
                        {data.singer &&
                            data?.singer.map((sing, index) => {
                                if (index === 2) {
                                    return (
                                        <span
                                            className="hover:text-[#c273ed] cursor-pointer hover:underline flex"
                                            key={index}
                                        >
                                            {sing.name}
                                            <p className="group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline">
                                                ...
                                            </p>
                                        </span>
                                    );
                                } else if (index < 3) {
                                    return (
                                        <span
                                            className="hover:text-[#c273ed] cursor-pointer hover:underline group flex"
                                            key={index}
                                        >
                                            {sing.name}
                                            <p className="group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline">
                                                ,&nbsp;
                                            </p>
                                        </span>
                                    );
                                }
                            })}
                    </div>
                </div>
            }
        </div>
    );
}

export default Card;
