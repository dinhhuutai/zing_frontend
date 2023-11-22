import { useEffect, useState } from "react";
import { BsPlayCircle, BsPlayFill, BsThreeDots, BsHeart, BsFillCircleFill, BsHeartFill } from "react-icons/bs";
import Card from "./Card";
import Artist from "./Artist";



function TopAlbum({data, handleLike, like}) {

    const [datas, setDatas] = useState();
    const [totalDuration, setTotalDuration] = useState(0);

    useEffect(() => {
        setDatas(data);


        const totalTime =  datas?.playlist?.songs?.reduce((gtlt, value) => {
            return gtlt + value.duration;
        }, 0);

        setTotalDuration(totalTime);

    }, [data]);




    return (
        <div>
            <div className="flex">
                <div>
                    <div className="w-[260px] sticky top-[80px]">
                        <div className='cursor-pointer relative group'>
                            <div className="w-full overflow-hidden h-[260px] rounded-[8px]">
                                <img className="group-hover:scale-[1.1] group-hover:brightness-50 transition-all ease-linear duration-[.2s] w-full h-full" alt={datas?.playlist?.name} src={datas?.playlist?.image} />
                            </div>
                            <div className="absolute text-[40px] top-[0px] left-[0px] w-full h-full hidden group-hover:flex items-center justify-center">
                                <BsPlayCircle className="hover:opacity-[.8]" />
                            </div>
                        </div>
                        <div className="text-center mt-[8px] cursor-default">
                            <h1 className="text-[20px] font-[700]">{datas?.playlist?.name}</h1>
                            <span className="text-[hsla(0,0%,100%,0.5)] text-[12px]">Cập nhật: {`${new Date(datas?.playlist?.contentLastUpdate).getDate()}/${new Date(datas?.playlist?.contentLastUpdate).getMonth() + 1}/${new Date(datas?.playlist?.contentLastUpdate).getFullYear()}`}</span>
                            <div className="text-[12px] justify-center text-[hsla(0,0%,100%,0.5)] flex">
                                {
                                    datas?.artists?.map((sing, index) => {
                                        if (index === 0) {
                                            return (
                                                <span
                                                    className="hover:text-[#c273ed] cursor-pointer hover:underline dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]"
                                                    key={index}
                                                >
                                                    {sing.name}
                                                </span>
                                            );
                                        } else if (index < 4) {
                                            return (
                                                <span
                                                    className="hover:text-[#c273ed] cursor-pointer hover:underline flex group dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]"
                                                    key={index}
                                                >
                                                    <p className="group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline">
                                                        ,&nbsp;
                                                    </p>
                                                    {sing.name}
                                                </span>
                                            );
                                        }
                                    })
                                }
                            </div>
                            <span className="text-[hsla(0,0%,100%,0.5)] text-[12px]">{Math.floor(datas?.playlist?.like?.length / 1000)}K người yêu thích</span>
                        </div>
                        <div className="mt-[10px] flex justify-center">
                            <button className="hover:brightness-[0.9] flex justify-center items-center px-[16px] py-[5px] rounded-[20px] outline-none bg-[#9b4de0]">
                                <BsPlayFill className="text-[20px]" />
                                <span className="text-[13px] ml-[4px]">PHÁT NGẪU NHIÊN</span>
                            </button>
                        </div>
                        <div className="flex justify-center mt-[10px] gap-[18px]">
                            <div onClick={handleLike} className={`${like ? 'text-[#e23b3b]' : 'text-[#fff]'} text-[12px] h-[28px] w-[28px] bg-[hsla(0,0%,100%,.09)] hover:bg-[hsla(0,0%,100%,.07)] cursor-pointer flex justify-center items-center rounded-[50%]`}>
                                {
                                    like ? 
                                    <BsHeartFill /> :
                                    <BsHeart />
                                }
                            </div>
                            <div className="text-[12px] h-[28px] w-[28px] bg-[hsla(0,0%,100%,.09)] hover:bg-[hsla(0,0%,100%,.07)] cursor-pointer flex justify-center items-center rounded-[50%]">
                                <BsThreeDots />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 ml-[20px]'>
                    <div className="">
                        <span className="text-[hsla(0,0%,100%,0.5)] float-left mr-[8px]">Lời tựa </span>
                        <span dangerouslySetInnerHTML={{ __html: datas?.playlist?.description }}></span>
                    </div>
                    <div className="mt-[10px]">
                        <div className="flex text-[12px] py-[10px] font-[600] text-[hsla(0,0%,100%,0.5)] border-b-[1px] border-b-solid border-b-[hsla(0,0%,100%,0.05)]">
                            <div className="w-[50%]">
                                <span className='cursor-default ml-[30px]'>BÀI HÁT</span>
                            </div>
                            <div className="flex flex-1">
                                <span className='cursor-default'>ALBUM</span>
                            </div>
                            <div>
                                <span className='cursor-default'>THỜI GIAN</span>
                            </div>
                        </div>
                        <div className="min-h-[50vh]">
                            {
                                datas?.playlist?.songs?.map((item, index) => {
                                    return <div key={index}>
                                        <Card value={item} index={index} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="flex gap-[10px] items-center text-[hsla(0,0%,100%,0.5)] text-[13px] mt-[12px]">
                        <span>{datas?.song?.total} bài hát</span>
                        <div className="text-[4px] flex mt-[4px]"><BsFillCircleFill /></div>
                        <span>{`${Math.floor(totalDuration / 3600)} giờ ${Math.floor(totalDuration % 3600 / 60)} phút`}</span>
                    </div>
                </div>
            </div>
            <div>
                <Artist data={datas?.artists ? datas?.artists : []} />
            </div>
        </div>
    );
}

export default TopAlbum;