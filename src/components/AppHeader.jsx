import dcLogo from '/dc-logo.png'


const navMenu = [
    {
        id: 1,
        text: 'characters',
        active: false
    },
    {
        id: 2,
        text: 'comics',
        active: true
    },
    {
        id: 3,
        text: 'movies',
        active: false
    },
    {
        id: 4,
        text: 'tv',
        active: false
    },
    {
        id: 5, text: 'games',
        active: false
    },
    {
        id: 6,
        text: 'collectibles',
        active: false
    },
    {
        id: 7,
        text: 'videos',
        active: false
    },
    {
        id: 8,
        text: 'fans',
        active: false
    },
    {
        id: 9,
        text: 'news',
        active: false
    },
    {
        id: 10,
        text: 'shop',
        active: false
    },
]

export default function AppHeader() {

    return (
        <header>
            <div className="container">
                <nav className="navbar d-flex justify-content-between align-items-center">

                    <a className="navbar-brand" href="#">
                        <img src={dcLogo} alt="DC Logo" />
                    </a>

                    <div className='d-flex gap-4 fw-bold'>

                        {
                            navMenu.map(menu => (
                                <a className={`nav-link text-uppercase ${menu.active ? 'active-link' : ''}`} key={menu.id} href="#">{menu.text}</a>
                            ))
                        }

                    </div>
                    
                </nav>
            </div>
        </header>
    )

}