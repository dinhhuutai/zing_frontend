import { NavLink } from "react-router-dom";
import { BsRocket, BsChevronDown, BsWindowFullscreen, BsBoxes, BsMusicPlayer, BsMusicNoteList, BsMic, BsJournalAlbum, BsPerson, BsColumnsGap, BsPersonPlus, BsBarChartLine } from "react-icons/bs";
import { useState } from "react";
import config from "~/config";

function Sidebar() {

    const [downDashboard, setDownDashboard] = useState(true);
    const [downPage, setDownPage] = useState(false);
    const [downApplication, setDownApplication] = useState(false);

    const [downArtist, setDownArtist] = useState(false);
    const [downSong, setDownSong] = useState(false);
    const [downPlaylist, setDownPlaylist] = useState(false);
    const [downAlbum, setDownAlbum] = useState(false);
    const [downUser, setDownUser] = useState(false);
    const [downGenre, setDownGenre] = useState(false);
    const [downPartner, setDownPartner] = useState(false);
    const [downWeekchart, setDownWeekchart] = useState(false);

    const hiddenItem = (key) => {
        key !== 'dashboard' && setDownDashboard(false);
        key !== 'page' && setDownPage(false);
        key !== 'application' && setDownApplication(false);
        key !== 'artist' && setDownArtist(false);
        key !== 'song' && setDownSong(false);
        key !== 'playlist' && setDownPlaylist(false);
        key !== 'album' && setDownAlbum(false);
        key !== 'user' && setDownUser(false);
        key !== 'genre' && setDownGenre(false);
        key !== 'partner' && setDownPartner(false);
        key !== 'weekchart' && setDownWeekchart(false);
    }


    return (
        <div className="hover:scrollbar-admin-sidebar w-full h-full shadow-lg shadow-indigo-500/50 overflow-y-auto scrollbar-admin-sidebar-none group/parent">
            <ul className="px-[24px] pt-[12px] pb-[22px] mr-[4px] group-hover/parent:mr-[0px]">
                <li>
                    <li className='uppercase text-[#3F69D6] text-[12px] font-[700]'>menu</li>
                    <ul className="mt-[12px]">
                        <li>
                            <li onClick={() => {hiddenItem('dashboard'); setDownDashboard(prev => !prev)}} className="flex items-center py-[8px] rounded-[4px] cursor-pointer hover:bg-[#E0F3FF] group">
                                <div className="text-[#999797] group-hover:text-[#333] text-[20px] w-[34px] flex justify-center"><BsRocket /></div>
                                <span className={`${downDashboard ? 'text-[13px] flex-1 ml-[6px] font-[600]' : 'text-[13px] flex-1 ml-[6px]'} capitalize`}>Dashboards</span>
                                <div className={`${downDashboard ? "rotate-[180deg]" : "rotate-[0deg]"} ease-linear duration-[.2s] text-[#999797] group-hover:text-[#333] text-[12px] mr-[10px]`}><BsChevronDown /></div>
                            </li>
                            <ul className={`${downDashboard ? 'animate-downSlide' : 'animate-upSlide'} overflow-hidden pl-[28px] pt-[4px] relative before:content-[""] before:left-[16px] before:absolute before:w-[2px] before:h-full before:bg-[#c0cfd8]`}>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminAnalytics} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Analytics</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminChartArea} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Chart Area</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-[6px]">
                            <li onClick={() => {hiddenItem('page'); setDownPage(prev => !prev)}} className="flex items-center py-[8px] rounded-[4px] cursor-pointer hover:bg-[#E0F3FF] group">
                                <div className="text-[#999797] group-hover:text-[#333] text-[20px] w-[34px] flex justify-center"><BsWindowFullscreen /></div>
                                <span className={`${downPage ? 'text-[13px] flex-1 ml-[6px] font-[600]' : 'text-[13px] flex-1 ml-[6px]'} capitalize`}>pages</span>
                                <div className={`${downPage ? "rotate-[180deg]" : "rotate-[0deg]"} ease-linear duration-[.2s] text-[#999797] group-hover:text-[#333] text-[12px] mr-[10px]`}><BsChevronDown /></div>
                            </li>
                            <ul className={`${downPage ? 'animate-downSlide' : 'animate-upSlide'} overflow-hidden pl-[28px] pt-[4px] relative before:content-[""] before:left-[16px] before:absolute before:w-[2px] before:h-full before:bg-[#c0cfd8]`}>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminExplore} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Explore</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminHub} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Hub</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-[6px]">
                            <li onClick={() => {hiddenItem('application'); setDownApplication(prev => !prev)}} className="flex items-center py-[8px] rounded-[4px] cursor-pointer hover:bg-[#E0F3FF] group">
                                <div className="text-[#999797] group-hover:text-[#333] text-[20px] w-[34px] flex justify-center"><BsBoxes /></div>
                                <span className={`${downApplication ? 'text-[13px] flex-1 ml-[6px] font-[600]' : 'text-[13px] flex-1 ml-[6px]'} capitalize`}>applications</span>
                                <div className={`${downApplication ? "rotate-[180deg]" : "rotate-[0deg]"} ease-linear duration-[.2s] text-[#999797] group-hover:text-[#333] text-[12px] mr-[10px]`}><BsChevronDown /></div>
                            </li>
                            <ul className={`${downApplication ? 'animate-downSlide1' : 'animate-upSlide1'} overflow-hidden pl-[28px] pt-[4px] relative before:content-[""] before:left-[16px] before:absolute before:w-[2px] before:h-full before:bg-[#c0cfd8]`}>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminMailBox} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Mailbox</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminChat} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Chat</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminSection} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>FAQ Section</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="mt-[12px]">
                    <li className='uppercase text-[#3F69D6] text-[12px] font-[700]'>Manage</li>
                    <ul className="mt-[12px]">
                        <li>
                            <li onClick={() => {hiddenItem('artist'); setDownArtist(prev => !prev)}} className="flex items-center py-[8px] rounded-[4px] cursor-pointer hover:bg-[#E0F3FF] group">
                                <div className="text-[#999797] group-hover:text-[#333] text-[20px] w-[34px] flex justify-center"><BsMic /></div>
                                <span className={`${downArtist ? 'text-[13px] flex-1 ml-[6px] font-[600]' : 'text-[13px] flex-1 ml-[6px]'} capitalize`}>Artist</span>
                                <div className={`${downArtist ? "rotate-[180deg]" : "rotate-[0deg]"} ease-linear duration-[.2s] text-[#999797] group-hover:text-[#333] text-[12px] mr-[10px]`}><BsChevronDown /></div>
                            </li>
                            <ul className={`${downArtist ? 'animate-downSlide' : 'animate-upSlide'} overflow-hidden pl-[28px] pt-[4px] relative before:content-[""] before:left-[16px] before:absolute before:w-[2px] before:h-full before:bg-[#c0cfd8]`}>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminArtist} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>List</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminArtistCreate} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Create</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-[6px]">
                            <li onClick={() => {hiddenItem('song'); setDownSong(prev => !prev)}} className="flex items-center py-[8px] rounded-[4px] cursor-pointer hover:bg-[#E0F3FF] group">
                                <div className="text-[#999797] group-hover:text-[#333] text-[20px] w-[34px] flex justify-center"><BsMusicPlayer /></div>
                                <span className={`${downSong ? 'text-[13px] flex-1 ml-[6px] font-[600]' : 'text-[13px] flex-1 ml-[6px]'} capitalize`}>Song</span>
                                <div className={`${downSong ? "rotate-[180deg]" : "rotate-[0deg]"} ease-linear duration-[.2s] text-[#999797] group-hover:text-[#333] text-[12px] mr-[10px]`}><BsChevronDown /></div>
                            </li>
                            <ul className={`${downSong ? 'animate-downSlide' : 'animate-upSlide'} overflow-hidden pl-[28px] pt-[4px] relative before:content-[""] before:left-[16px] before:absolute before:w-[2px] before:h-full before:bg-[#c0cfd8]`}>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminSong} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>List</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminSongCreate} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Create</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-[6px]">
                            <li onClick={() => {hiddenItem('playlist'); setDownPlaylist(prev => !prev)}} className="flex items-center py-[8px] rounded-[4px] cursor-pointer hover:bg-[#E0F3FF] group">
                                <div className="text-[#999797] group-hover:text-[#333] text-[20px] w-[34px] flex justify-center"><BsMusicNoteList /></div>
                                <span className={`${downPlaylist ? 'text-[13px] flex-1 ml-[6px] font-[600]' : 'text-[13px] flex-1 ml-[6px]'} capitalize`}>Playlist</span>
                                <div className={`${downPlaylist ? "rotate-[180deg]" : "rotate-[0deg]"} ease-linear duration-[.2s] text-[#999797] group-hover:text-[#333] text-[12px] mr-[10px]`}><BsChevronDown /></div>
                            </li>
                            <ul className={`${downPlaylist ? 'animate-downSlide' : 'animate-upSlide'} overflow-hidden pl-[28px] pt-[4px] relative before:content-[""] before:left-[16px] before:absolute before:w-[2px] before:h-full before:bg-[#c0cfd8]`}>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminPlaylist} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>List</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminPlaylistCreate} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Create</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-[6px]">
                            <li onClick={() => {hiddenItem('album'); setDownAlbum(prev => !prev)}} className="flex items-center py-[8px] rounded-[4px] cursor-pointer hover:bg-[#E0F3FF] group">
                                <div className="text-[#999797] group-hover:text-[#333] text-[20px] w-[34px] flex justify-center"><BsJournalAlbum /></div>
                                <span className={`${downAlbum ? 'text-[13px] flex-1 ml-[6px] font-[600]' : 'text-[13px] flex-1 ml-[6px]'} capitalize`}>Album</span>
                                <div className={`${downAlbum ? "rotate-[180deg]" : "rotate-[0deg]"} ease-linear duration-[.2s] text-[#999797] group-hover:text-[#333] text-[12px] mr-[10px]`}><BsChevronDown /></div>
                            </li>
                            <ul className={`${downAlbum ? 'animate-downSlide' : 'animate-upSlide'} overflow-hidden pl-[28px] pt-[4px] relative before:content-[""] before:left-[16px] before:absolute before:w-[2px] before:h-full before:bg-[#c0cfd8]`}>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminAlbum} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>List</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminAlbumCreate} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Create</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-[6px]">
                            <li onClick={() => {hiddenItem('user'); setDownUser(prev => !prev)}} className="flex items-center py-[8px] rounded-[4px] cursor-pointer hover:bg-[#E0F3FF] group">
                                <div className="text-[#999797] group-hover:text-[#333] text-[20px] w-[34px] flex justify-center"><BsPerson /></div>
                                <span className={`${downUser ? 'text-[13px] flex-1 ml-[6px] font-[600]' : 'text-[13px] flex-1 ml-[6px]'} capitalize`}>User</span>
                                <div className={`${downUser ? "rotate-[180deg]" : "rotate-[0deg]"} ease-linear duration-[.2s] text-[#999797] group-hover:text-[#333] text-[12px] mr-[10px]`}><BsChevronDown /></div>
                            </li>
                            <ul className={`${downUser ? 'animate-downSlide' : 'animate-upSlide'} overflow-hidden pl-[28px] pt-[4px] relative before:content-[""] before:left-[16px] before:absolute before:w-[2px] before:h-full before:bg-[#c0cfd8]`}>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminUser} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>List</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminUserCreate} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Create</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-[6px]">
                            <li onClick={() => {hiddenItem('genre'); setDownGenre(prev => !prev)}} className="flex items-center py-[8px] rounded-[4px] cursor-pointer hover:bg-[#E0F3FF] group">
                                <div className="text-[#999797] group-hover:text-[#333] text-[20px] w-[34px] flex justify-center"><BsColumnsGap /></div>
                                <span className={`${downGenre ? 'text-[13px] flex-1 ml-[6px] font-[600]' : 'text-[13px] flex-1 ml-[6px]'} capitalize`}>Genre</span>
                                <div className={`${downGenre ? "rotate-[180deg]" : "rotate-[0deg]"} ease-linear duration-[.2s] text-[#999797] group-hover:text-[#333] text-[12px] mr-[10px]`}><BsChevronDown /></div>
                            </li>
                            <ul className={`${downGenre ? 'animate-downSlide' : 'animate-upSlide'} overflow-hidden pl-[28px] pt-[4px] relative before:content-[""] before:left-[16px] before:absolute before:w-[2px] before:h-full before:bg-[#c0cfd8]`}>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminGenre} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>List</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminGenreCreate} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Create</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-[6px]">
                            <li onClick={() => {hiddenItem('partner'); setDownPartner(prev => !prev)}} className="flex items-center py-[8px] rounded-[4px] cursor-pointer hover:bg-[#E0F3FF] group">
                                <div className="text-[#999797] group-hover:text-[#333] text-[20px] w-[34px] flex justify-center"><BsPersonPlus /></div>
                                <span className={`${downPartner ? 'text-[13px] flex-1 ml-[6px] font-[600]' : 'text-[13px] flex-1 ml-[6px]'} capitalize`}>Partner</span>
                                <div className={`${downPartner ? "rotate-[180deg]" : "rotate-[0deg]"} ease-linear duration-[.2s] text-[#999797] group-hover:text-[#333] text-[12px] mr-[10px]`}><BsChevronDown /></div>
                            </li>
                            <ul className={`${downPartner ? 'animate-downSlide' : 'animate-upSlide'} overflow-hidden pl-[28px] pt-[4px] relative before:content-[""] before:left-[16px] before:absolute before:w-[2px] before:h-full before:bg-[#c0cfd8]`}>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminPartner} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>List</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminPartnerCreate} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Create</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-[6px]">
                            <li onClick={() => {hiddenItem('weekchart'); setDownWeekchart(prev => !prev)}} className="flex items-center py-[8px] rounded-[4px] cursor-pointer hover:bg-[#E0F3FF] group">
                                <div className="text-[#999797] group-hover:text-[#333] text-[20px] w-[34px] flex justify-center"><BsBarChartLine /></div>
                                <span className={`${downWeekchart ? 'text-[13px] flex-1 ml-[6px] font-[600]' : 'text-[13px] flex-1 ml-[6px]'} capitalize`}>Weekchart</span>
                                <div className={`${downWeekchart ? "rotate-[180deg]" : "rotate-[0deg]"} ease-linear duration-[.2s] text-[#999797] group-hover:text-[#333] text-[12px] mr-[10px]`}><BsChevronDown /></div>
                            </li>
                            <ul className={`${downWeekchart ? 'animate-downSlide' : 'animate-upSlide'} overflow-hidden pl-[28px] pt-[4px] relative before:content-[""] before:left-[16px] before:absolute before:w-[2px] before:h-full before:bg-[#c0cfd8]`}>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminWeekchart} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>List</NavLink>
                                </li>
                                <li className="hover:text-[#3F6AD8] text-[13px] mt-[4px] capitalize rounded-[4px] hover:bg-[#E0F3FF] cursor-pointer">
                                    <NavLink to={config.routes.adminWeekchartCreate} className={(nav) => nav.isActive ? "font-[600] text-[#3F6AD8] py-[6px] px-[22px] block w-full" : "font-[400] py-[6px] px-[22px] block w-full"}>Create</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;