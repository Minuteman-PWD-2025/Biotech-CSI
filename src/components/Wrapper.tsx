import Sidebar from "./Sidebar"
import Header from "./Header"

export default function Wrapper() {
    return (
        <div className="wrapper">
            <Sidebar buttons={[]}/>
            <Header/>
        </div>
    )
}