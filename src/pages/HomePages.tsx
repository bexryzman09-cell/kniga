import Genres from "../components/Genres"
import Info from "../components/Info"
import Popular from "../components/Popular"
import Search from "../components/Search"
import Types from "../components/Types"

export default function HomePages() {
    return (
        <div>
            <Search />
            <Types />
            <Genres />  
            <Popular />
            <Info />
        </div>
    )
}
        