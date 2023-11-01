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

import AdminDashboard from "~/pagesAdmin/Dashboard";

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
        path: config.routes.adminDashboard,
        component: AdminDashboard,
        login: true,
    }
];