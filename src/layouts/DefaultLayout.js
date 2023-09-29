import Header from './components/Header';
import Sidebar from './components/Sidebar';

function DefaultLayout({children}) {
    return (
        <div className=''>
            <div className='w-[var(--width-sidebar)] h-screen fixed'>
                <Sidebar />
            </div>
            <div className='ml-[var(--width-sidebar)]'>
                <div className='h-[var(--height-header)]'>
                    <Header />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;