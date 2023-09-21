import mainNavList from "./mainNavList"

const MainNav = () => {
    return (
        <nav>
            <ul>
                { mainNavList.map(navLink => {
                    return <li key={navLink.id}>{navLink.title}</li>
                })}
            </ul>
        </nav>
    )
}

export default MainNav
