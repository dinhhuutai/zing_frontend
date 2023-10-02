import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Controls from './components/Controls';
import { useState } from 'react';

function DefaultLayout({children}) {
    const [openControls, setOpenControls] = useState(false);


    return (
        <div className=''>
            <div className='w-[var(--width-sidebar)] fixed top-[0px] left-[0px] bottom-[var(--height-controls)]'>
                <Sidebar />
            </div>
            <div className='ml-[var(--width-sidebar)]'>
                <div className='h-[var(--height-header)] fixed top-[0px] left-[var(--width-sidebar)] right-[0px]'>
                    <Header />
                </div>
                <div className='mt-[var(--height-header)] bg-[var(--bg-color-page)]'>
                    {children}
                </div>
            </div>
            <div className='fixed bottom-[0px] left-[0px] right-[0px] h-[var(--height-controls)]'>
                <Controls />
            </div>
        </div>
    );
}

export default DefaultLayout;