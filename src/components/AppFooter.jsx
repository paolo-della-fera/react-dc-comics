import logoFooter from '/dc-logo-bg.png'
import facebook from '/footer-facebook.png'
import periscope from '/footer-periscope.png'
import pinterest from '/footer-pinterest.png'
import twitter from '/footer-twitter.png'
import youtube from '/footer-youtube.png'

const footerDcComics = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News']
const footerDc = ['Terms Of Use', 'Privacy Policy (New)', 'Ad Choise', 'Advertising', 'Jobs', 'Subscription', 'Talent Workshops', 'CPSC Certificates', 'Ratings', 'Shop Help', 'Contact Us']
const footerSites = ['DC', 'MAD Magazine', 'DC Kinds', 'DC Universe', 'DC Power Visa']

export default function AppFooter() {

    return (

        <>
            <footer className="py-5 text-white">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-8">
                            <div className="row">

                                <div className="col">

                                    <h3 className='text-uppercase'>dc comics</h3>
                                    <ul className="list-unstyled">
                                        {
                                            footerDcComics.map(dcComic => (
                                                <li><a href="" className='nav-link'>{dcComic}</a></li>
                                            ))
                                        }
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
                                        {
                                            footerDc.map(dc => (
                                                <li><a href="" className='nav-link'>{dc}</a></li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className="col">
                                    <h3 className='text-uppercase'>sites</h3>
                                    <ul className="list-unstyled">
                                        {
                                            footerSites.map(sites => (
                                                <li><a href="" className='nav-link'>{sites}</a></li>
                                            ))
                                        }
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

            <div className="footer-bottom py-4">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-8">
                            <button type="button" class="btn btn-outline-primary text-white">SIGN-UP NOW!</button>
                        </div>

                        <div className="col-md-4 text-end ">
                            <span className="follow-us fw-bold">FOLLOW US</span>

                            <a href="" className="social-link text-white ms-4">
                                <img src={facebook} alt="" />
                            </a>

                            <a href="" className="social-link text-white ms-4">
                                <img src={twitter} alt="" />
                            </a>

                            <a href="" className="social-link text-white ms-4">
                                <img src={youtube} alt="" />
                            </a>

                            <a href="" className="social-link text-white ms-4">
                                <img src={pinterest} alt="" />
                            </a>

                            <a href="" className="social-link text-white ms-4">
                                <img src={periscope} alt="" />
                            </a>
                            
                        </div>

                    </div>
                </div>
            </div>
        </>


    )

}