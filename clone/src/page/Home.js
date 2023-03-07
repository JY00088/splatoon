import { useContext, useEffect, useRef, useState } from 'react'
import { Route, useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import '../scss/Home.scss';
import { Context } from "../Mycontext";



    

const Home = () => {
    const {setState} = useContext(Context)
    let { page } = useParams();
    <Route path='/:page'></Route>;
    useEffect(()=>{
        setState(true)
    },[])
    return (
        <>
            <section>{page}</section>
            <div id='main-content'>
                <div className='headerbox'>
                    <div className="groupback">
                        <div className='backpage'>
                            <picture>
                                <source srcSet="/img/home/header-back-medium-up.webp" media="(min-width:640px)" width="1947" height="952" type="image/webp" />
                                <source srcSet="/img/home/header-back.jpg" width="901" height="1151" type="image/jpg" />
                                <img className='backimg' src="/img/home/header-back-medium-up.webp" />
                            </picture>
                        </div>

                        <div className='calamarimotion01'>
                            <picture>
                                <source media="(min-width:640px)" srcSet='/img/home/char-4-medium-up.webp' width="1112" height="845" type="image/webp" />
                                <source media="(min-width:640px)" srcSet='/img/home/char-4.png' width="515" height="390" type="image/png" />
                                <img className='motion01' src="./img/home/char-4.png" />
                            </picture>
                        </div>
                        <div className='calamarimotion02'>
                            <picture>
                                <source media="(min-width:640px)" srcSet='/img/home/char-3.webp' width="207" height="238" type="image/webp" />
                                <source media="(min-width:640px)" srcSet='/img/home/char-3.png' width="207" height="238" type="image/png" />
                                <img className='motion02' src="./img/home/char-3.png" />
                            </picture>
                        </div>
                        <div className='calamarimotion03'>
                            <picture>
                                <source media="(min-width:640px)" srcSet='/img/home/char-2.webp' width="261" height="220" type="image/webp" />
                                <source media="(min-width:640px)" srcSet='/img/home/char-2.png' width="261" height="220" type="image/png" />
                                <img className='motion03' src="./img/home/char-2.png" />
                            </picture>
                        </div>
                        <div className='calamarimotion04'>
                            <picture>
                                <source media="(min-width:640px)" srcSet='/img/home/character.webp' width="1193" height="767" type="image/webp" />
                                <source media="(min-width:640px)" srcSet='/img/home/character.png' width="1193" height="767" type="image/png" />
                                <img className='motion04' src="./img/home/character.png" />
                            </picture>
                        </div>
                        <div className='calamarimotion05'>
                            <picture>
                                <source media="(min-width:640px)" srcSet='/img/home/char-5-medium-up.webp' width="612" height="192" type="image/webp" />
                                <source media="(min-width:640px)" srcSet='/img/home/char-5.png' width="295" height="104" type="image/png" />
                                <img className='motion05' src="./img/home/char-5.png" />
                            </picture>
                        </div>

                        <div className='homelogo'>
                            <div className='stagger'></div>
                            <h1 className='view'>
                                <picture>
                                    <source src="/img/home/splatoon3-logo.webp" type='image/webp' width="560" height="322" />
                                    <source src="/img/home/splatoon3-logo.png" type='image/png' width="560" height="322" />
                                    <img className='pos' src="/img/home/splatoon3-logo.png" />
                                </picture>
                            </h1>
                            <div className='relatext'>
                                <picture>
                                    <source media='(min-width: 640px)' srcSet='/img/home/tape-1-medium-up.webp' width="300" height="68" type="image/webp" />
                                    <source media='(min-width: 640px)' srcSet='/img/home/tape-1.png' width="300" height="68" type="image/png" />
                                    <img className='tape1' src="/img/home/tape-1.png" />
                                </picture>
                                <a>
                                    <span className="aip"></span>
                                    <span className='drip'> Buy now <FontAwesomeIcon icon={faChevronRight} />  </span>
                                </a>
                            </div>
                        </div>

                        <div className='headerbanner'>
                            <div className='banner01'></div>
                            <div className='banner02'></div>
                        </div>
                    </div>
                </div>

                <div className="maintool">
                    <div className="List01">
                        <section className="Lvideo01">
                            <article className="Ltool01">
                                <div className="element01"></div>
                                <div className="element02"></div>
                                <div className="element03">
                                    <div className="titlebanner">
                                        <h2>Watch the trailer</h2>
                                    </div>
                                    <div className="inview">
                                        <button>
                                            <div className="buton">
                                                <div className="one"></div>
                                                <Link to="/trailer">
                                                <div className="plays"><FontAwesomeIcon icon={faPlay} size="10x" /> </div>
                                                </Link>
                                            </div>
                                            <picture>
                                            <source srcSet="/img/home/video-trailer.webp" type="imge/webp" width="748" height="421" />
                                            <source srcSet="/img/home/video-trailer.jpg" type="imge/jpg" width="748" height="421" />
                                            <img className="videot" src="/img/home/video-trailer.jpg" />
                                        </picture>
                                        </button>
                                        
                                    </div>
                                </div>
                            </article>
                            <article className="Ltool02">
                                <div className="element04" ></div>
                                <div className="element05"></div>
                                <div className="elemenst06">
                                    <picture>
                                        <source srcSet='/img/home/graffiti-1.webp' type='image/webp'width="642" height="561.5" />
                                        <source srcSet='/img/home/graffiti-1.png' type='image/png'width="642" height="561.5" />
                                        <img src='/img/home/graffiti-1.png' />
                                    </picture>
                                </div>
                                <div className="element07">
                                    <div className="bo07">
                                        <h2>Ink up the
                                            <span>Splatlands</span>
                                        </h2>
                                        <div></div>
                                        <span></span>
                                    </div>
                                    
                                </div>
                                <div className="element08"></div>
                            </article>
                        </section>
                    </div>


                    <div className="List02"></div>
                    <div className="List03"></div>
                    <div className="List04"></div>
                </div>
            </div>

        </>
    )
}

export default Home