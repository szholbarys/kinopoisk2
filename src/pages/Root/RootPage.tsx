import { Outlet } from "react-router-dom"
import { IndexPage } from "../IndexPage"

export const RootPage = () => {
    return(
        <>
            <IndexPage/>
            <section> <Outlet/> </section>
        </>
    )
}