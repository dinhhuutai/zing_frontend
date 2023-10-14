import { BsFillPlayFill, BsThreeDots, BsMic, BsFillCaretDownFill, BsFillCaretUpFill, BsDash } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

function CardRank({data, index, type}) {
    return (
        <div
            className={`flex items-center hover:bg-[hsla(0,0%,100%,0.2)] first:mt-[0px] mt-[8px] text-[#fff] group ${type === 'rankArea' ? 'py-[6px] px-[4px]' : 'py-[10px] px-[12px] border-b-[1px] border-solid border-[hsla(0,0%,100%,0.05)]'} rounded-[4px]`}
            key={index}
        >
            <div
                className={
                    index === 0
                        ? `${type === 'rankArea' ? 'min-w-[28px]' : 'min-w-[60px]'} fontTextChartOne text-[30px] text-center cursor-default`
                        : index === 1
                        ? `${type === 'rankArea' ? 'min-w-[28px]' : 'min-w-[60px]'} fontTextChartTwo text-[30px] text-center cursor-default`
                        : index === 2
                        ? `${type === 'rankArea' ? 'min-w-[28px]' : 'min-w-[60px]'} fontTextChartThree text-[30px] text-center cursor-default`
                        : `${type === 'rankArea' ? 'min-w-[28px]' : 'min-w-[60px]'} fontTextChartOther text-[30px] text-center cursor-default`
                }
            >
                <span>{index + 1}</span>
            </div>
            {
                data.rakingStatus === 0 ?
                <div className="text-[36px] w-[18px] font-[700] text-[hsla(0,0%,100%,0.5)] flex justify-center items-center"><BsDash /></div> :
                data.rakingStatus > 0 ?
                <div className="w-[18px] flex flex-col justify-center items-center">
                    <div className="text-[14px] text-[#1dc186]">
                        <BsFillCaretUpFill />
                    </div>
                    <span className="text-[12px] font-[700] cursor-default">{data.rakingStatus}</span>
                </div>
                :
                data.rakingStatus < 0 ?
                <div className="w-[18px] flex flex-col justify-center items-center">
                    <div className="text-[14px] text-[#e35050]">
                        <BsFillCaretDownFill />
                    </div>
                    <span className="text-[12px] font-[700] cursor-default">{-data.rakingStatus}</span>
                </div>
                : ""
            }
            <div className={`overflow-hidden rounded-[4px] cursor-pointer relative ${type === 'rankArea' ? 'ml-[6px] w-[30px] h-[30px]' : 'ml-[14px] w-[40px] h-[40px]'}`}>
                <img className="group-hover:brightness-[0.5]" src={data.img} alt={data.name} />
                <div className="group-hover:flex absolute h-full w-full hidden justify-center items-center text-[24px] text-[#fff] top-[0px]">
                    <BsFillPlayFill className="hover:opacity-[.8]" />
                </div>
            </div>
            <div className={`ml-[10px] flex flex-col justify-center ${type === 'rankArea' ? 'w-[114px]' : 'w-[340px]'}`}>
                <span className="capitalize cursor-default dotThreeHiddenText2 h-[16px] overflow-hidden text-[#fff] text-[14px] font-[600] leading-[16px]">
                    {data.name}
                </span>
                <div className="text-[12px] text-[hsla(0,0%,100%,0.5)] flex">
                    {data.singer.map((sing, index) => {
                        if (index === 0) {
                            return (
                                <span
                                    className="hover:text-[#c273ed] cursor-pointer hover:underline dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]"
                                    key={index}
                                >
                                    {sing.name}
                                </span>
                            );
                        } else {
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
                    })}
                </div>
            </div>
            {
                type === 'rankArea' ? "" :
                <div className="flex-1 text-[12px] text-[hsla(0,0%,100%,0.5)]">
                    <span className="hover:text-[#c273ed] cursor-pointer hover:underline dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]">{data.album}</span>
                </div>
            }
            <div className={type === 'rankArea' ? "flex-1 text-end" : ""}>
                <div className="text-[12px] text-[hsla(0,0%,100%,0.5)] group-hover:hidden">
                    <span>{data.duration}</span>
                </div>
                <div className={`group-hover:flex text-[14px] hidden ${type === 'rankArea' ? "gap-[2px]" : "gap-[10px]"}`}>
                    <div className="flex h-[30px] w-[30px] justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]">
                        <BsMic />
                    </div>
                    {
                        type === 'rankArea' ? "" :
                        <div className="flex h-[30px] w-[30px] justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]">
                            <AiOutlineHeart />
                        </div>
                    }
                    <div className="flex h-[30px] w-[30px] justify-center items-center rounded-[50%] cursor-pointer hover:bg-[hsla(0,0%,100%,0.1)]">
                        <BsThreeDots />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardRank;
