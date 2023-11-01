import Sidebar from "./sections/Sidebar"
import Header from "./sections/Header"
import Session from "./sections/Session"

export default function Wrapper() {
    return (
        <div className="wrapper">
            <Sidebar buttons={[]}/>
            <Session/>
            <Header/>
            
            {/* Used for background */}
            <div className="absolute bg-gray-100 outline-1 -outline-offset-1 outline-gray-300 outline row-start-1 row-end-2 col-start-1 col-end-3 -z-1"></div>
        </div>
    )
}