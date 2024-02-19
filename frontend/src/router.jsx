import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/store-data',
        element: <Create />
    },
    {
        path: '/*',
        element: <NotFound />
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
]);

export default router;