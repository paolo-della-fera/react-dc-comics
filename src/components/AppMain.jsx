import jumbotronDc from '/jumbotron.jpg'
import digitalComics from '/buy-comics-digital-comics.png'
import dcMerch from '/buy-comics-merchandise.png'
import subscription from '/buy-comics-subscriptions.png'
import comicShop from '/buy-comics-shop-locator.png'
import dcPowerVisa from '/buy-dc-power-visa.svg'

export default function AppMain() {

    return (
        <main>
            <div className="container py-5">
                <img className='jumbotron' src={jumbotronDc} alt="" />
            </div>

            <section>
                <div className="container py-5">
                    <div className="row text-center align-items-center">

                        <div className="col">
                            <a href="#" className="d-flex align-items-center justify-content-center gap-2 text-decoration-none text-white">
                                <img className='icon_img' src={digitalComics} alt="" />
                                <span>Digital Comics</span>
                            </a>
                        </div>

                        <div className="col">
                            <a href="#" className="d-flex align-items-center justify-content-center gap-2 text-decoration-none text-white">
                                <img className='icon_img' src={dcMerch} alt="" />
                                <span>DC MERCHANDISE</span>
                            </a>
                        </div>

                        <div className="col">
                            <a href="#" className="d-flex align-items-center justify-content-center gap-2 text-decoration-none text-white">
                                <img className='icon_img' src={subscription} alt="" />
                                <span>SUBSCRIPTION</span>
                            </a>
                        </div>

                        <div className="col">
                            <a href="#" className="d-flex align-items-center justify-content-center gap-2 text-decoration-none text-white">
                                <img className='icon_img' src={comicShop} alt="" />
                                <span>COMIC SHOP LOCATOR</span>
                            </a>
                        </div>

                        <div className="col">
                            <a href="#" className="d-flex align-items-center justify-content-center gap-2 text-decoration-none text-white">
                                <img className='icon_img' src={dcPowerVisa} alt="" />
                                <span>DC POWER VISA</span>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            
        </main>
    )

}