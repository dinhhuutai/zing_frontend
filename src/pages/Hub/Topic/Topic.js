import { Link } from "react-router-dom";

function Topic({data}) {
    return (
        <div className="mt-[40px] text-[#fff]">
            <h1 className="text-[20px] font-[700]">Tâm Trạng Và Hoạt Động</h1>
            <div className="grid grid-cols-4 gap-[20px] mt-[18px]">
                {
                    data?.map((item, index) => {
                        return <Link to={`${item?.link}/${item?.encodeId}`} className='group overflow-hidden rounded-[4px] relative' key={index}>
                            <img alt={item?.encodeId} src={item?.thumbnail} className="group-hover:scale-[1.2] transition-all ease-linear duration-[0.4s]" />
                            <div className='absolute flex flex-col justify-end top-[0px] left-[0px] w-full h-full pl-[15px] pb-[15px]'>
                                <span className='font-[700] text-[18px]'>{item?.title}</span>
                                <div className="flex gap-[6px] mt-[8px]">
                                    {
                                        item?.playlists?.map((img, index) => {
                                            return <div key={index} className="h-[40px] w-[40px] overflow-hidden rounded-[4px]">
                                                <img className="w-full h-full" src={img?.thumbnail} alt='img' />
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    );
}

export default Topic;