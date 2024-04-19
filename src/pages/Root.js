import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";


function RootLayout(){
    return (
        <>
            <MainNavigation />


            <main>
                {/* with the help of that outlet we can access children route  */}
                <Outlet />
            </main>
            
        </>
    )
}

export default RootLayout;