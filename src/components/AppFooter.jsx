import logoFooter from '/dc-logo-bg.png'

export default function AppFooter() {

    return (

        <footer className="py-5 text-white">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-8">
                        <div className="row">

                            <div className="col">
                                <h3 className='text-uppercase'>dc comics</h3>
                                <ul className="list-unstyled">
                                    <li><a href="" className='nav-link'>Characters</a></li>
                                    <li><a href="" className='nav-link'>Comics</a></li>
                                    <li><a href="" className='nav-link'>Movies</a></li>
                                    <li><a href="" className='nav-link'>TV</a></li>
                                    <li><a href="" className='nav-link'>Games</a></li>
                                    <li><a href="" className='nav-link'>Videos</a></li>
                                    <li><a href="" className='nav-link'>News</a></li>
                                </ul>

                                <h3 className='text-uppercase'>shop</h3>
                                <ul className="list-unstyled">
                                    <li><a href="" className='nav-link'>Shop DC</a></li>
                                    <li><a href="" className='nav-link'>Shop DC Collectibles</a></li>
                                </ul>
                            </div>

                            <div className="col">
                                <h3 className='text-uppercase'>DC</h3>
                                <ul className="list-unstyled">
                                    <li><a href="" className='nav-link'>Terms Of Use</a></li>
                                    <li><a href="" className='nav-link'>Privacy Policy (New)</a></li>
                                    <li><a href="" className='nav-link'>Ad Choise</a></li>
                                    <li><a href="" className='nav-link'>Advertising</a></li>
                                    <li><a href="" className='nav-link'>Jobs</a></li>
                                    <li><a href="" className='nav-link'>Subscription</a></li>
                                    <li><a href="" className='nav-link'>Talent Workshops</a></li>
                                    <li><a href="" className='nav-link'>CPSC Certificates</a></li>
                                    <li><a href="" className='nav-link'>Ratings</a></li>
                                    <li><a href="" className='nav-link'>Shop Help</a></li>
                                    <li><a href="" className='nav-link'>Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="col">
                                <h3 className='text-uppercase'>sites</h3>
                                <ul className="list-unstyled">
                                    <li><a href="" className='nav-link'>DC</a></li>
                                    <li><a href="" className='nav-link'>MAD Magazine</a></li>
                                    <li><a href="" className='nav-link'>DC Kinds</a></li>
                                    <li><a href="" className='nav-link'>DC Universe</a></li>
                                    <li><a href="" className='nav-link'>DC Power Visa</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 footer_logo">
                        <img src={logoFooter} alt="" />
                    </div>

                </div>
            </div>
        </footer>

    )

}