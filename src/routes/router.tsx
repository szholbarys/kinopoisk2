import { createBrowserRouter } from "react-router-dom";
import { RootPage } from "../pages/Root/RootPage";
import { IndexPage } from "../pages/IndexPage";
import { MoviePage } from "../pages/MoviePage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootPage/>
    },
    {
        path: "/",
        element: <IndexPage/>
    },
    // {
    //     path: "moviepage/",
    //     element: <MoviePage movie={movie}/>
    // }
])