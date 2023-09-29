import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import { routes } from './routes';
import ProtecteRouterLogin from './routing/ProtecteRouterLogin';

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                route.login ? (
                                    <ProtecteRouterLogin />
                                ) : (
                                    route.isLogin ?
                                    <route.component /> :
                                    <DefaultLayout>
                                        <route.component />
                                    </DefaultLayout>
                                )
                            }
                        >
                            <Route
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <route.component />
                                    </DefaultLayout>
                                }
                            />
                        </Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
