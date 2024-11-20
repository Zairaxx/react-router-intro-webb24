import { Link } from "react-router-dom"

const Navigation = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Startsida</Link></li>
                <li><Link to="/contact">Kontakta oss</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation