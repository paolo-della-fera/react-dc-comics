import dcLogo from '/dc-logo.png'


export default function AppHeader({navMenu}) {

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg">

                    <a className="navbar-brand" href="#">
                        <img src={dcLogo} alt="DC Logo" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navMenu">
                        <div className='d-flex flex-column flex-lg-row gap-4 fw-bold ms-auto'>
                            {
                                navMenu.map(menu => (
                                    <a className={`nav-link text-uppercase ${menu.active ? 'active-link' : ''}`} key={menu.id} href="#">{menu.text}</a>
                                ))
                            }
                        </div>
                    </div>

                </nav>
            </div>
        </header>
    )
}