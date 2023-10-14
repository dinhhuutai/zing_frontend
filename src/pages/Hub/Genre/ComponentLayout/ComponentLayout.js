import { Link } from 'react-router-dom';
import Card from '~/components/Card';
import config from '~/config';
import { BsChevronRight } from 'react-icons/bs';



function ComponentLayout({datas}) {
    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                <h1 className="text-[18px] capitalize font-bold">{datas.title}</h1>
                <Link to={`${datas.link}/${datas.encodeId}`} className='hover:text-[#c273ed] cursor-pointer text-[hsla(0,0%,100%,0.5)] flex items-center'>
                    <div className="uppercase text-[12px]">Tất cả</div>
                    <div className='text-[18px] ml-[4px]'><BsChevronRight /></div>
                </Link>
            </div>
            <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
                {datas?.items?.map((data, index) => {
                    return (
                        <div key={index}>
                            <Card data={data} type={{perfaceSinger: true, singer: true}} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ComponentLayout;