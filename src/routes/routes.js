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
import PlaylistNew from "~/pages/PlaylistNew/PlaylistNew";

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
        path: config.routes.playlistNew,
        component: PlaylistNew,
        login: true,
    },
];


export const routesAdmin = [

];