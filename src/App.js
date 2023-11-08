import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import DefaultLayoutAdmin from './layoutsAdmin/DefaultLayout';
import { routes, routesAdmin } from './routes';
import ProtecteRouterLogin from './routing/ProtecteRouterLogin';
import ProtectedRouteAdmin from './routing/ProtectedRouteAdmin';
import config from './config';
import ProtectedCheckUser from './routing/ProtectedCheckUser';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<ProtectedCheckUser />}>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={
                                    route.isParamsIdZingChart
                                        ? `${route.path}/:id`
                                        : route.isParamsIdHub
                                        ? `${route.path}/:name/:id`
                                        : route.isParamsIdAlbum
                                        ? `${route.path}/:id`
                                        : route.path
                                }
                                element={
                                    route.login ? (
                                        <ProtecteRouterLogin />
                                    ) : route.isLogin ? (
                                        <route.component />
                                    ) : (
                                        <DefaultLayout>
                                            <route.component />
                                        </DefaultLayout>
                                    )
                                }
                            >
                                <Route
                                    path={
                                        route.isParamsIdZingChart
                                            ? `${route.path}/:id`
                                            : route.isParamsIdHub
                                            ? `${route.path}/:name/:id`
                                            : route.isParamsIdAlbum
                                            ? `${route.path}/:id`
                                            : route.path
                                    }
                                    element={
                                        <DefaultLayout>
                                            <route.component />
                                        </DefaultLayout>
                                    }
                                />
                            </Route>
                        );
                    })}

                    <Route path="/admin" element={<Navigate to={config.routes.adminAnalytics} />} />

                    <Route path="/admin" element={<ProtectedRouteAdmin />}>
                        {routesAdmin.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <DefaultLayoutAdmin>
                                            <route.component />
                                        </DefaultLayoutAdmin>
                                    }
                                />
                            );
                        })}
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
