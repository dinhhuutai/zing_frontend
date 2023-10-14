import { Link } from "react-router-dom";

function Featured({data}) {
    return (
        <div className="mt-[40px] text-[#fff]">
            <h1 className="text-[20px] font-[700]">{data?.title}</h1>
            <div className="grid grid-cols-4 gap-[20px] mt-[18px]">
                {
                    data?.items?.map((item, index) => {
                        return <Link to={`${item.link}/${item.encodeId}`} className='group overflow-hidden rounded-[4px] relative' key={index}>
                            <img alt={item?.encodeId} src={item?.thumbnail} className="group-hover:scale-[1.2] transition-all ease-linear duration-[0.4s]" />
                            <span className='absolute top-[0px] left-[0px] w-full h-full flex justify-center items-center font-[700] text-[24px]'>{item.title}</span>
                        </Link>
                    })
                }
            </div>
        </div>
    );
}

export default Featured;