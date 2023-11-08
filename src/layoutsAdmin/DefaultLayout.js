import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { noticeAdminSelector } from "~/redux/selectors";
import { BsXOctagonFill, BsX, BsFillPatchCheckFill } from "react-icons/bs";
import noticeAdminSlice from "~/redux/slices/noticeAdminSlice";

function DefaultLayout({children}) {

    const tmp = useSelector(noticeAdminSelector);
    const [notice, setNotice] = useState()


    useEffect(() => {
        setNotice(tmp);
    }, [tmp]);


    const dispatch = useDispatch();

    const handleClosed = () => {
        dispatch(noticeAdminSlice.actions.hiddenNotice());
    }


 
    return (
        <div>
            <div className='h-[var(--admin-height-header)] fixed top-0 left-0 right-0 z-[100] bg-[#fff]'>
                <Header />
            </div>
            <div className='mt-[var(--admin-height-header)]'>
                <div className='w-[var(--admin-width-sidebar)] fixed top-[var(--admin-height-header)] left-0 bottom-0 bg-[#fff]'>
                    <Sidebar />
                </div>
                <div className="ml-[var(--admin-width-sidebar)] bg-[#F1F4F6] min-h-screen">
                    {children}
                </div>
            </div>
            {
                notice?.hidden &&
                <div className={`${ notice?.state ? 'animate-noticeSlideLeft' : 'animate-noticeSlideRight'} ${notice?.status ? 'border-l-[#2fca32]' : 'border-l-[red]'} fixed top-[70px] border-l-[4px] border-l-solid box-shadow-admin-notice right-[30px] z-[100] px-[20px] py-[8px] min-w-[260px] rounded-[6px] bg-[#fff] flex items-center`}>
                    <button onClick={handleClosed} className='absolute top-0 right-0 text-[24px] p-[2px] hover:opacity-[.9] active:bg-[#d2d0d0] active:opacity-[.7] rounded-[6px] cursor-pointer'>
                        <BsX />
                    </button>
                    <div className={`${notice?.status ? 'text-[#2fca32]' : 'text-[red]'} text-[30px]`}>
                        {
                            notice?.status ?
                            <BsFillPatchCheckFill /> :
                            <BsXOctagonFill />
                        }
                    </div>
                    <div className="ml-[16px] flex-1 text-[#000]">
                        <h2 className={`${notice?.status ? 'text-[#2fca32]' : 'text-[red]'} uppercase text-[16px] font-[700]`}>{notice?.title}</h2>
                        <p>{notice?.text}</p>
                    </div>
                    <div className={`${ notice?.state ? 'animate-noticeSlideTime w-[100%]' : 'w-[0%]' } ${notice?.status ? 'bg-[#6efe4d]' : 'bg-[#e94b4b]'}  absolute bottom-0 left-0 h-[4px] rounded-b-[6px]`}></div>
                </div>
            }
        </div>
    );
}

export default DefaultLayout;