import dcLogo from '/dc-logo.png'

export default function AppHeader() {

    return (
        <header>
            <div className="container">
                <nav className="navbar d-flex justify-content-between align-items-center">

                    <a className="navbar-brand" href="#">
                        <img src={dcLogo} alt="DC Logo" />
                    </a>

                    <div className="d-flex gap-3">
                        <a className="nav-link text-uppercase" href="#">characters</a>
                        <a className="nav-link text-uppercase" href="#">comics</a>
                        <a className="nav-link text-uppercase" href="#">movies</a>
                        <a className="nav-link text-uppercase" href="#">tv</a>
                        <a className="nav-link text-uppercase" href="#">games</a>
                        <a className="nav-link text-uppercase" href="#">collectibles</a>
                        <a className="nav-link text-uppercase" href="#">videos</a>
                        <a className="nav-link text-uppercase" href="#">fans</a>
                        <a className="nav-link text-uppercase" href="#">news</a>
                        <a className="nav-link text-uppercase" href="#">shop</a>
                    </div>

                </nav>
            </div>
        </header>
    )

}