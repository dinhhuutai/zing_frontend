import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CardRank from "~/components/CardRank";
import config from "~/config";


function FrameRank({data, index}) {
    return (
        <div>
            <div className="flex items-center text-[#fff] ml-[36px]">
                <h2 className="text-[20px] font-[600] cursor-default">
                    {
                        data.name === 'vn' ? "Việt Nam" : data.name === 'korea' ? "K-Pop" : data.name === 'us' ? "US-UK" : ""
                    }
                </h2>
                <div className="hover:opacity-[.8] cursor-pointer text-[20px] ml-[6px] h-[26px] w-[26px] flex justify-center items-center bg-[#9b4de0] rounded-[50%]">
                    <BsFillPlayFill />
                </div>
            </div>
            <div className="mt-[10px]">
                {
                    data?.items?.map((item, i) => {
                        return (
                            i <= 4 ? <div key={i}>
                                <CardRank data={item} index={i} type='rankArea' />
                            </div> : ""
                        );
                    })
                }
            </div>
            <div className="flex justify-center mt-[16px] items-center">
                <Link to={data.name === 'vn' ? `${config.routes.zingChartVietNam}/123` : data.name === 'korea' ? `${config.routes.zingChartKpop}/123` : data.name === 'us' ? `${config.routes.zingChartUsUk}/123` : ''} className="hover:bg-[hsla(0,0%,100%,0.2)] px-[20px] py-[4px] rounded-[20px] outline-none text-[#fff] border-[1px] border-solid border-[#fff]">
                    Xem tất cả
                </Link>
            </div>
        </div>
    );
}

export default FrameRank;