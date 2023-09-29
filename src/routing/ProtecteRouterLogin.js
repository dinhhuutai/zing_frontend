import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import config from "~/config";

function ProtecteRouterLogin() {

    const [login, setLogin] = useState(false);

    return (
        login ? <Outlet /> : <Navigate to={config.routes.login} />
    );
}

export default ProtecteRouterLogin;