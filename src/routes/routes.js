import config from "~/config";

import Explore from "~/pages/Explore";
import ZingChart from "~/pages/ZingChart";
import zingChartVietNam from '~/pages/ZingChart/page/VietNam';
import zingChartUsUk from '~/pages/ZingChart/page/UsUk';
import zingChartKpop from '~/pages/ZingChart/page/Kpop';
import Radio from "~/pages/Radio";
import Library from "~/pages/Library";
import ReleaseNew from "~/pages/ReleaseNew";
import Hub from "~/pages/Hub";
import HubChild from "~/pages/Hub/page/HubChild";
import Top100 from "~/pages/Top100";
import Login from "~/pages/Login";
import Register from '~/pages/Register';
import PlaylistNew from "~/pages/PlaylistNew/PlaylistNew";
import NewReleaseSong from '~/pages/Explore/NewRelease/page/Song';
import NewReleaseAlbum from '~/pages/Explore/NewRelease/page/Album';
import Album from "~/pages/Album";

import MyMusicHistory from "~/pages/MyMusicHistory";
import MyMusicSongFavourite from "~/pages/MyMusicSongFavourite";
import MyMusicLibraryPlaylist from "~/pages/MyMusicLibraryPlaylist";
import MyMusicAlbum from "~/pages/MyMusicAlbum";
import MyMusicSongUpload from "~/pages/MyMusicSongUpload";

import AdminAnalytics from "~/pagesAdmin/Menu/Dashboards/Analytics";
import AdminChartArea from "~/pagesAdmin/Menu/Dashboards/ChartArea";
import AdminExplore from '~/pagesAdmin/Menu/Pages/Explore';
import AdminHub from '~/pagesAdmin/Menu/Pages/Hub';
import AdminMailBox from '~/pagesAdmin/Menu/Applications/Mailbox';
import AdminChat from '~/pagesAdmin/Menu/Applications/Chat';
import AdminSection from '~/pagesAdmin/Menu/Applications/FAQSection';

import AdminArtist from '~/pagesAdmin/Manage/Artist/List';
import AdminArtistCreate from '~/pagesAdmin/Manage/Artist/Create';
import AdminArtistUpdate from '~/pagesAdmin/Manage/Artist/Update';
import AdminSong from '~/pagesAdmin/Manage/Song/List';
import AdminSongCreate from '~/pagesAdmin/Manage/Song/Create';
import AdminSongUpdate from '~/pagesAdmin/Manage/Song/Update';
import AdminPlaylist from '~/pagesAdmin/Manage/Playlist/List';
import AdminPlaylistCreate from '~/pagesAdmin/Manage/Playlist/Create';
import AdminPlaylistUpdate from '~/pagesAdmin/Manage/Playlist/Update';
import AdminAlbum from '~/pagesAdmin/Manage/Album/List';
import AdminAlbumCreate from '~/pagesAdmin/Manage/Album/Create';
import AdminAlbumUpdate from '~/pagesAdmin/Manage/Album/Update';
import AdminUser from '~/pagesAdmin/Manage/User/List';
import AdminUserCreate from '~/pagesAdmin/Manage/User/Create';
import AdminUserUpdate from '~/pagesAdmin/Manage/User/Update';
import AdminGenre from '~/pagesAdmin/Manage/Genre/List';
import AdminGenreCreate from '~/pagesAdmin/Manage/Genre/Create';
import AdminGenreUpdate from '~/pagesAdmin/Manage/Genre/Update';
import AdminPartner from '~/pagesAdmin/Manage/Partner/List';
import AdminPartnerCreate from '~/pagesAdmin/Manage/Partner/Create';
import AdminPartnerUpdate from '~/pagesAdmin/Manage/Partner/Update';
import AdminWeekchart from '~/pagesAdmin/Manage/Weekchart/List';
import AdminWeekchartCreate from '~/pagesAdmin/Manage/Weekchart/Create';
import AdminWeekchartUpdate from '~/pagesAdmin/Manage/Weekchart/Update';


export const routes = [
    {
        path: config.routes.explore,
        component: Explore,
        login: false,
    },
    {
        path: config.routes.zingChart,
        component: ZingChart,
        login: false,
    },
    {
        path: config.routes.zingChartVietNam,
        component: zingChartVietNam,
        login: false,
        isParamsIdZingChart: true,
    },
    {
        path: config.routes.zingChartUsUk,
        component: zingChartUsUk,
        login: false,
        isParamsIdZingChart: true,
    },
    {
        path: config.routes.zingChartKpop,
        component: zingChartKpop,
        login: false,
        isParamsIdZingChart: true,
    },
    {
        path: config.routes.radio,
        component: Radio,
        login: false,
    },
    {
        path: config.routes.library,
        component: Library,
        login: true,
    },
    {
        path: config.routes.releaseNew,
        component: ReleaseNew,
        login: false,
    },
    {
        path: config.routes.hub,
        component: Hub,
        login: false,
    },
    {
        path: config.routes.hubChild,
        component: HubChild,
        login: false,
        isParamsIdHub: true,
    },
    {
        path: config.routes.top100,
        component: Top100,
        login: false,
    },
    {
        path: config.routes.login,
        component: Login,
        login: false,
        isLogin: true,
    },
    {
        path: config.routes.register,
        component: Register,
        login: false,
        isLogin: true,
    },
    {
        path: config.routes.playlistNew,
        component: PlaylistNew,
        login: true,
    },
    {
        path: config.routes.newReleaseSong,
        component: NewReleaseSong,
        login: false,
    },
    {
        path: config.routes.newReleaseAlbum,
        component: NewReleaseAlbum,
        login: false,
    },
    {
        path: config.routes.album,
        component: Album,
        login: false,
        isParamsIdAlbum: true,
    },
    {
        path: config.routes.myMusicHistory,
        component: MyMusicHistory,
        login: true,
    },
    {
        path: config.routes.myMusicSongFavourite,
        component: MyMusicSongFavourite,
        login: true,
    },
    {
        path: config.routes.myMusicLibraryPlaylist,
        component: MyMusicLibraryPlaylist,
        login: true,
    },
    {
        path: config.routes.myMusicAlbum,
        component: MyMusicAlbum,
        login: true,
    },
    {
        path: config.routes.myMusicSongUpload,
        component: MyMusicSongUpload,
        login: true,
    },
];


export const routesAdmin = [
    {
        path: config.routes.adminAnalytics,
        component: AdminAnalytics,
        login: true,
    },
    {
        path: config.routes.adminChartArea,
        component: AdminChartArea,
        login: true,
    },
    {
        path: config.routes.adminExplore,
        component: AdminExplore,
        login: true,
    },
    {
        path: config.routes.adminHub,
        component: AdminHub,
        login: true,
    },
    {
        path: config.routes.adminMailBox,
        component: AdminMailBox,
        login: true,
    },
    {
        path: config.routes.adminChat,
        component: AdminChat,
        login: true,
    },
    {
        path: config.routes.adminSection,
        component: AdminSection,
        login: true,
    },
    {
        path: config.routes.adminArtist,
        component: AdminArtist,
        login: true,
    },
    {
        path: config.routes.adminArtistCreate,
        component: AdminArtistCreate,
        login: true,
    },
    {
        path: config.routes.adminArtistUpdate,
        component: AdminArtistUpdate,
        login: true,
        addId: true,
    },
    {
        path: config.routes.adminSong,
        component: AdminSong,
        login: true,
    },
    {
        path: config.routes.adminSongCreate,
        component: AdminSongCreate,
        login: true,
    },
    {
        path: config.routes.adminSongUpdate,
        component: AdminSongUpdate,
        login: true,
        addId: true,
    },
    {
        path: config.routes.adminPlaylist,
        component: AdminPlaylist,
        login: true,
    },
    {
        path: config.routes.adminPlaylistCreate,
        component: AdminPlaylistCreate,
        login: true,
    },
    {
        path: config.routes.adminPlaylistUpdate,
        component: AdminPlaylistUpdate,
        login: true,
        addId: true,
    },
    {
        path: config.routes.adminAlbum,
        component: AdminAlbum,
        login: true,
    },
    {
        path: config.routes.adminAlbumCreate,
        component: AdminAlbumCreate,
        login: true,
    },
    {
        path: config.routes.adminAlbumUpdate,
        component: AdminAlbumUpdate,
        login: true,
        addId: true,
    },
    {
        path: config.routes.adminUser,
        component: AdminUser,
        login: true,
    },
    {
        path: config.routes.adminUserCreate,
        component: AdminUserCreate,
        login: true,
    },
    {
        path: config.routes.adminUserUpdate,
        component: AdminUserUpdate,
        login: true,
        addId: true,
    },
    {
        path: config.routes.adminGenre,
        component: AdminGenre,
        login: true,
    },
    {
        path: config.routes.adminGenreCreate,
        component: AdminGenreCreate,
        login: true,
    },
    {
        path: config.routes.adminGenreUpdate,
        component: AdminGenreUpdate,
        login: true,
        addId: true,
    },
    {
        path: config.routes.adminPartner,
        component: AdminPartner,
        login: true,
    },
    {
        path: config.routes.adminPartnerCreate,
        component: AdminPartnerCreate,
        login: true,
    },
    {
        path: config.routes.adminPartnerUpdate,
        component: AdminPartnerUpdate,
        login: true,
        addId: true,
    },
    {
        path: config.routes.adminWeekchart,
        component: AdminWeekchart,
        login: true,
    },
    {
        path: config.routes.adminWeekchartCreate,
        component: AdminWeekchartCreate,
        login: true,
    },
    {
        path: config.routes.adminWeekchartUpdate,
        component: AdminWeekchartUpdate,
        login: true,
        addId: true,
    },
];