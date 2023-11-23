import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Controls from './components/Controls';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { playlistSelector } from '~/redux/selectors';

function DefaultLayout({children}) {
    const [openControls, setOpenControls] = useState(false);

    const tmp = useSelector(playlistSelector);

    useEffect(() => {
        if(tmp.songs?.length > 0) {
            setOpenControls(true);
        } else {
            setOpenControls(false);
        }
    }, [tmp]);


    return (
        <div className=''>
            <div className={`w-[var(--width-sidebar)] fixed top-[0px] left-[0px] ${openControls ? 'bottom-[var(--height-controls)]' : 'bottom-[0px]'}`}>
                <Sidebar />
            </div>
            <div className='ml-[var(--width-sidebar)] mb-[var(--height-controls)]'>
                <div className='h-[var(--height-header)] fixed z-[999] top-[0px] left-[var(--width-sidebar)] right-[0px]'>
                    <Header />
                </div>
                <div className='mt-[var(--height-header)] bg-[var(--bg-color-page)]'>
                    {children}
                </div>
            </div>
            <div className={`fixed z-[999] bottom-[0px] left-[0px] right-[0px] ${openControls ? 'h-[var(--height-controls)]' : 'hidden h-[0px]'} `}>
                <Controls />
            </div>
        </div>
    );
}

export default DefaultLayout;