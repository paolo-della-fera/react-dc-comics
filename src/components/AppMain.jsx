import digitalComics from '/buy-comics-digital-comics.png'
import dcMerch from '/buy-comics-merchandise.png'
import subscription from '/buy-comics-subscriptions.png'
import comicShop from '/buy-comics-shop-locator.png'
import dcPowerVisa from '/buy-dc-power-visa.svg'

import ComicCard from './AppComicCard'


export default function AppMain({comics}) {

    return (
        <main>

            <section className="jumbotron"></section>

            <section>
                <div className="container pt-5 pb-3">
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6'>

                        {
                            comics.map(comic => (

                                <ComicCard thumb={comic.thumb} title={comic.title} series={comic.series} />

                            ))
                        }

                    </div>
                </div>
            </section>

            <div className="d-flex justify-content-center pb-3">
                <button type="button" className="btn btn-primary rounded-0 fw-bold px-5">LOAD MORE</button>
            </div>


            <section className='quick-links'>
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