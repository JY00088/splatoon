import { useContext, useEffect, useRef, useState } from 'react';
import { Route, useParams, Link } from 'react-router-dom';
import { Context } from '../Mycontext';
import Sliderbox from './Sliderbox';

//아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// 꾸미기
import '../scss/Home.scss';

// SVG이미지
import { ReactComponent as Colorbox } from '../imgs/box.svg';
import { ReactComponent as Colorbox2 } from '../imgs/box2.svg';
import { ReactComponent as Read } from '../imgs/read.svg';
import { ReactComponent as Twitter } from '../imgs/twitter.svg';
import { ReactComponent as Monn } from '../imgs/monn.svg';

// 슬라이드
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import React, { Component } from 'react';
// import Slider from 'react-slick';

const Home = () => {
  const { setState } = useContext(Context);
  let { page } = useParams();
  <Route path="/:page"></Route>;
  useEffect(() => {
    setState(true);
  }, []);

  //   let observer = new IntersectionObserver((e) => {
  //     e.forEach((h2) => {
  //       h2.target.style.opacity = 1;
  //     });
  //   });

  //   let maintool = document.querySelector('.maintool');
  //   observer.observe(maintool);

  //   const [slidePx, setSlidePx] = useState(0);

  //   const toPrev = () => {
  //     slidePx < 0 && setSlidePx(slidePx + 1375);
  //   };

  //   const toNext = () => {
  //     slidePx > -4125 && setSlidePx(slidePx - 1375);
  //   };
  //   if (!Home) return;

  return (
    <>
      <section>{page}</section>
      <div id="main-content">
        <div className="headerbox">
          <div className="groupback">
            <div className="backpage">
              <picture>
                <source
                  srcSet="/img/home/header-back-medium-up.webp"
                  media="(min-width:640px)"
                  width="1947"
                  height="952"
                  type="image/webp"
                />
                <source
                  srcSet="/img/home/header-back.jpg"
                  width="901"
                  height="1151"
                  type="image/jpg"
                />
                <img
                  className="backimg"
                  src="/img/home/header-back-medium-up.webp"
                />
              </picture>
            </div>

            <div className="calamarimotion01">
              <picture>
                <source
                  media="(min-width:640px)"
                  srcSet="/img/home/char-4-medium-up.webp"
                  width="1112"
                  height="845"
                  type="image/webp"
                />
                <source
                  media="(min-width:640px)"
                  srcSet="/img/home/char-4.png"
                  width="515"
                  height="390"
                  type="image/png"
                />
                <img className="motion01" src="./img/home/char-4.png" />
              </picture>
            </div>
            <div className="calamarimotion02">
              <picture>
                <source
                  media="(min-width:640px)"
                  srcSet="/img/home/char-3.webp"
                  width="207"
                  height="238"
                  type="image/webp"
                />
                <source
                  media="(min-width:640px)"
                  srcSet="/img/home/char-3.png"
                  width="207"
                  height="238"
                  type="image/png"
                />
                <img className="motion02" src="/img/home/char-3.webp" />
              </picture>
            </div>
            <div className="calamarimotion03">
              <picture>
                <source
                  media="(min-width:640px)"
                  srcSet="/img/home/char-2.webp"
                  width="261"
                  height="220"
                  type="image/webp"
                />
                <source
                  media="(min-width:640px)"
                  srcSet="/img/home/char-2.png"
                  width="261"
                  height="220"
                  type="image/png"
                />
                <img className="motion03" src="./img/home/char-2.png" />
              </picture>
            </div>
            <div className="calamarimotion04">
              <picture>
                <source
                  media="(min-width:640px)"
                  srcSet="/img/home/character.webp"
                  width="1193"
                  height="767"
                  type="image/webp"
                />
                <source
                  media="(min-width:640px)"
                  srcSet="/img/home/character.png"
                  width="1193"
                  height="767"
                  type="image/png"
                />
                <img className="motion04" src="./img/home/character.png" />
              </picture>
            </div>
            <div className="calamarimotion05">
              <picture>
                <source
                  media="(min-width:640px)"
                  srcSet="/img/home/char-5-medium-up.webp"
                  width="612"
                  height="192"
                  type="image/webp"
                />
                <source
                  media="(min-width:640px)"
                  srcSet="/img/home/char-5.png"
                  width="295"
                  height="104"
                  type="image/png"
                />
                <img className="motion05" src="./img/home/char-5.png" />
              </picture>
            </div>
          </div>
          <div className="homelogo">
            <div className="stagger"></div>
            <h1 className="view">
              <picture>
                <source
                  src="/img/home/splatoon3-logo.webp"
                  type="image/webp"
                  width="560"
                  height="322"
                />
                <source
                  src="/img/home/splatoon3-logo.png"
                  type="image/png"
                  width="560"
                  height="322"
                />
                <img className="pos" src="/img/home/splatoon3-logo.png" />
              </picture>
            </h1>
            <div className="relatext">
              <picture>
                <source
                  media="(min-width: 640px)"
                  srcSet="/img/home/tape-1-medium-up.webp"
                  width="300"
                  height="68"
                  type="image/webp"
                />
                <source
                  media="(min-width: 640px)"
                  srcSet="/img/home/tape-1.png"
                  width="300"
                  height="68"
                  type="image/png"
                />
                <img className="tape1" src="/img/home/tape-1.png" />
              </picture>
              <a>
                <span className="aip"></span>
                <div className="wrapper">
                  <button>Buy now</button>
                </div>
                {/* <span className="drip">
                    {' '}
                    Buy now <FontAwesomeIcon icon={faChevronRight} />{' '}
                  </span> */}
              </a>
            </div>
          </div>

          <div className="headerbanner">
            <div className="banner01"></div>
            <div className="banner02"></div>
          </div>
        </div>

        <div className="maintool">
          <div className="List01">
            <section className="Lvideo01">
              <article className="Ltool01">
                <div className="element01">
                  <picture>
                    <source />
                    <img
                      className="tape1"
                      src="/img/home/tape-2-medium-up.webp"
                    />
                    <img
                      className="tape2"
                      src="/img/home/tape-3-medium-up.webp"
                    />
                  </picture>
                </div>
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
                          <div className="plays">
                            <FontAwesomeIcon icon={faPlay} size="10x" />{' '}
                          </div>
                        </Link>
                      </div>
                      <picture>
                        <source
                          srcSet="/img/home/video-trailer.webp"
                          type="imge/webp"
                          width="748"
                          height="421"
                        />
                        <source
                          srcSet="/img/home/video-trailer.jpg"
                          type="imge/jpg"
                          width="748"
                          height="421"
                        />
                        <img
                          className="videot"
                          src="/img/home/video-trailer.jpg"
                        />
                      </picture>
                    </button>
                  </div>
                </div>
              </article>
              <article className="Ltool02">
                <div className="element04"></div>
                <div className="element05"></div>
                <div className="element06">
                  <picture>
                    <source
                      srcSet="/img/home/graffiti-1.webp"
                      type="image/webp"
                      width="642"
                      height="561.5"
                    />
                    <source
                      srcSet="/img/home/graffiti-1.png"
                      type="image/png"
                      width="642"
                      height="561.5"
                    />
                    <img src="/img/home/graffiti-1.png" />
                  </picture>
                </div>
                <div className="elementbox78">
                  <div className="element07">
                    <div className="bo07">
                      <h2>
                        Ink up the
                        <span>Splatlands</span>
                      </h2>
                      <p>
                        Enter a sun-scorched desert inhabited by battle-hardened
                        Inklings and Octolings. Ink, dive, swim, and splat your
                        way to the top!
                      </p>
                      <span className="noLink">
                        <Link to="/">
                          Welcome to Splatsvlle{' '}
                          <FontAwesomeIcon icon={faChevronRight} />{' '}
                        </Link>
                      </span>
                    </div>
                  </div>
                  <picture className="tape078">
                    <source />
                    <img
                      className="tape01"
                      src="/img/home/tape-2-medium-up.webp"
                    />
                  </picture>
                  <div className="element08">
                    <picture>
                      <source
                        srcSet="/img/home/s3-home-intro-blade.webp"
                        type="image/webp"
                        width="558"
                        height="313.5"
                      />
                      <source
                        srcSet="/img/home/s3-home-intro-blade.jpg"
                        type="image/jpg"
                        width="558"
                        height="313.5"
                      />
                      <img
                        className="imgs3"
                        src="/img/home/s3-home-intro-blade.jpg"
                      />
                    </picture>
                  </div>
                </div>
              </article>
            </section>

            <section className="Lvideo02">
              <div className="back02">
                <picture>
                  <img className="backs02" src="/img/home/graffiti-2.png" />
                </picture>
              </div>

              <div className="bluereamo">
                <div className="colorbox01">
                  <div className="bluebox">
                    <Colorbox className="bluemo" width="800px" height="650px" />
                    <h2>How to play, game modes, and all that</h2>
                    <video muted autoPlay loop>
                      <source
                        src="/img/home/video/s3_howtoplay_turfwar.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <span className="noLink02">
                      <Link to="/">
                        Dive In <FontAwesomeIcon icon={faChevronRight} />{' '}
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="colorbox02">
                  <div className="reamonbox">
                    <Colorbox2
                      className="reamonmo"
                      width="800px"
                      height="650px"
                    />
                    <h2>Make a splash with the latest weapons and gear</h2>
                    <video muted autoPlay loop>
                      <source
                        src="/img/home/video/s3_weapons_headervideo.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <span className="noLink03">
                      <Link to="/">
                        Fit check <FontAwesomeIcon icon={faChevronRight} />{' '}
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="Lvideo03">
              <div className="banerover">
                <div className="banerover01"></div>
                <div className="banerover02"></div>
              </div>

              <div className="rownews">
                <span className="stickertitle">
                  <picture>
                    <source />
                    <img
                      className="t01"
                      src="/img/home/sticker-8-medium-up.webp"
                    />
                  </picture>
                  <picture>
                    <source />
                    <img className="t02" src="img/home/sticker-12.png" />
                  </picture>
                </span>
                <span className="stickername">News and updates</span>
              </div>
              <div className="row">
                <span className="rowtext">
                  <a href="#">Peep the ink-formarion feed </a>
                </span>
              </div>
              <Sliderbox />
              {/* <div className="rowimg">
                              <div className="rowbut"></div>
                              
                <ul className="rowimgbox">
                  <li className="rowimg01">
                    <div className="state01">
                      <Read className="menojang" width="570px" height="470px" />
                      <div className="menobox">
                        <img
                          className="pasting01"
                          src="/img/home/sticker-9.png"
                        />
                        <img
                          className="pasting02"
                          src="/img/home/1840_Ncom_SP3_EN.jpg"
                        />
                        <div className="pasting03">
                          <p>
                            Dive into a fresh new season of Splatoon 3 (and
                            newly launched DLC)!
                          </p>
                          <a href="#">
                            <span>Read</span>
                          </a>
                        </div>
                        <img
                          className="pasting04"
                          src="/img/home/news-staple-left.png"
                        />
                        <img
                          className="pasting05"
                          src="/img/home/news-staple-right.webp"
                        />
                      </div>
                    </div>
                    <div className="state02">
                      <Read className="menojang" width="570px" height="470px" />
                      <div className="menobox">
                        <img
                          className="pasting01"
                          src="/img/home/sticker-9.png"
                        />
                        <img
                          className="pasting02"
                          src="/img/home/1840_SpecialHardware.jpg"
                        />
                        <div className="pasting03">
                          <p>
                            Dive into a fresh new season of Splatoon 3 (and
                            newly launched DLC)!
                          </p>
                          <a href="#">
                            <span>Read</span>
                          </a>
                        </div>
                        <img
                          className="pasting04"
                          src="/img/home/news-staple-left.png"
                        />
                        <img
                          className="pasting05"
                          src="/img/home/news-staple-right.webp"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="rowimg02">
                    <div className="state03">
                      <Read className="menojang" width="570px" height="470px" />
                      <div className="menobox">
                        <img
                          className="pasting01"
                          src="/img/home/sticker-9.png"
                        />
                        <img
                          className="pasting02"
                          src="/img/home/splucky1840.jpg"
                        />
                        <div className="pasting03">
                          <p>
                            Dive into a fresh new season of Splatoon 3 (and
                            newly launched DLC)!
                          </p>
                          <a href="#">
                            <span>Read</span>
                          </a>
                        </div>
                        <img
                          className="pasting04"
                          src="/img/home/news-staple-left.png"
                        />
                        <img
                          className="pasting05"
                          src="/img/home/news-staple-right.webp"
                        />
                      </div>
                    </div>
                    <div className="state04">
                      <Read className="menojang" width="570px" height="470px" />
                      <div className="menobox">
                        <img
                          className="pasting01"
                          src="/img/home/sticker-9.png"
                        />
                        <img
                          className="pasting02"
                          src="/img/home/S3_deepcutinterview_header.jpg"
                        />
                        <div className="pasting03">
                          <p>
                            Dive into a fresh new season of Splatoon 3 (and
                            newly launched DLC)!
                          </p>
                          <a href="#">
                            <span>Read</span>
                          </a>
                        </div>
                        <img
                          className="pasting04"
                          src="/img/home/news-staple-left.png"
                        />
                        <img
                          className="pasting05"
                          src="/img/home/news-staple-right.webp"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="rowimg03"></li>
                </ul>
              </div> */}

              {/* 슬라이드 */}
              {/* <div className="rowbar">
                <div
                  className="prevBtn"
                  onClick={toPrev}
                  style={{ display: slidePx === 0 ? 'none' : '' }}
                >
                  <i className="fa-solid fa-chevron-left" />
                </div>
                <div
                  className="nextBtn"
                  onClick={toNext}
                  style={{ display: slidePx === -4125 ? 'none' : '' }}
                >
                  <i className="fa-solid fa-chevron-right" />
                </div>
              </div> */}
            </section>
          </div>

          <div className="List02">
            <div className="pinkb">
              <div className="pinkgroup">
                <div className="left">
                  <div className="leftbox">
                    <picture>
                      <source />
                      <img
                        className="leftimg01"
                        src="/img/home/graffiti-3.png"
                      />
                    </picture>

                    <picture>
                      <source />
                      <img
                        className="leftimg02"
                        src="/img/home/graffiti-9.webp"
                      />
                    </picture>

                    <picture>
                      <source />
                      <img
                        className="leftimg03"
                        src="/img/home/char-6-medium-up.webp"
                      />
                    </picture>
                  </div>
                </div>
                <div className="right">
                  <h2 className="righttitle">Squid Research LAB UPDATES</h2>
                  <div className="rigntbox">
                    <div>
                      <iframe src="https://syndication.twitter.com/srv/timeline-profile/screen-name/SplatoonNA?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2xlZ2FjeV90aW1lbGluZV9zdW5zZXQiOnsiYnVja2V0Ijp0cnVlLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfX0%3D&frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&lang=en&origin=https%3A%2F%2Fsplatoon.nintendo.com%2F&sessionId=678706308b003349ac6846c3c8387056b73b28dd&showHeader=true&showReplies=false&theme=dark&transparent=false&widgetsVersion=aaf4084522e3a%3A1674595607486"></iframe>
                    </div>
                  </div>
                  <div className="twitter">
                    <Link
                      className="twitterbox"
                      to="https://twitter.com/splatoonna"
                    >
                      <Twitter />
                      Follow these eggheads
                      <FontAwesomeIcon icon={faChevronRight} />{' '}
                    </Link>
                  </div>

                  {/* <a href="https://twitter.com/splatoonna" className="twitter">
                    <span className="twitterbox">
                      {' '}
                      <Twitter />
                      Follow these eggheads{' '}
                      <FontAwesomeIcon
                        className="iconright"
                        icon={faChevronRight}
                      />
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="List03">
            <div className="List03back">
              <article className="listfront">
                <div className="listleft">
                  <div className="listleftbox">
                    <picture>
                      <source />
                      <img
                        className="game01"
                        src="/img/home/game-pack-medium-up.webp"
                      />
                    </picture>
                    <picture>
                      <source />
                      <img
                        className="game02"
                        src="/img/home/char-7-medium-up.webp"
                      />
                    </picture>
                    <picture>
                      <source />
                      <img className="game03" src="/img/home/char-8 (1).webp" />
                    </picture>
                    <picture>
                      <source />
                      <img className="game04" src="/img/home/graffiti-7.webp" />
                    </picture>
                  </div>
                </div>
                <div className="listright">
                  <h2 className="righttext">
                    GET <span className="vartext">THE GAME</span>
                  </h2>
                  <p>Sink your beak into the Splatoon 3 game today!</p>
                  <div className="listrighta">
                    <a href="#">
                      <span className="vartext02">
                        Buy now <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </a>
                  </div>
                </div>
              </article>
              <div className="banner03">
                <div className="bannery"></div>
                <div className="bannerp"></div>
              </div>

              <article className="listback">
                <div className="backonlu">
                  <picture>
                    <source />
                    <img className="onlysti" src="/img/home/graffiti-1.webp" />
                  </picture>
                </div>

                <div className="fronolu">
                  <h2 className="only">
                    ONLY ON THE
                    <span className="only01">Nintendo Switch™ system</span>
                  </h2>
                  <div className="onlybox">
                    <picture>
                      <source />
                      <img
                        className="onlyback"
                        src="/img/home/hardware-background-medium-up.png"
                      />
                    </picture>
                    <picture>
                      <source />
                      <img
                        className="only01"
                        src="/img/home/flagship-medium-up.webp"
                      />
                    </picture>
                    <picture>
                      <source />
                      <img
                        className="only02"
                        src="/img/home/oled-medium-up.webp"
                      />
                    </picture>
                    <picture>
                      <source />
                      <img
                        className="only03"
                        src="/img/home/lite-medium-up.webp"
                      />
                    </picture>
                  </div>
                  <p>
                    The Splatoon 3 game is available exclusively on the Nintendo
                    Switch family of systems.
                  </p>
                  <a href="#" className="onlyclick">
                    <span className="onlyspan">
                      Choose your systems{' '}
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </a>
                </div>
              </article>
            </div>
          </div>
          <div className="List04">
            <div className="banner04">
              <div className="bannerb"></div>
              <div className="bannerg"></div>
            </div>
            <article className="bluestc">
              <div className="bluestcbox">
                <div className="blueleft">
                  <picture>
                    <source />
                    <img
                      className="mynin"
                      src="/img/home/my-nintendo-logo.svg"
                    />
                  </picture>
                  <h2>Didya know?</h2>
                  <div className="content-spacing">
                    <p>
                      Find these squiddos around the site to dive a little
                      deeper into the world of the Splatoon 3 game. Poke all
                      five to earn 100 My Nintendo™ Platinum Points.
                    </p>
                    <div className="monnimg">
                      <Monn className="mon01" />
                      <Monn className="mon01" />
                      <Monn className="mon01" />
                      <Monn className="mon01" />
                      <Monn className="mon01" />
                    </div>
                    <a href="#" className="inboxa">
                      <span className="inbox">Sign in</span>
                    </a>
                    <p>Not yet a My Nintendo member?</p>
                    <div className="doin">
                      <span className="dodo">Sign up</span> now for free!
                    </div>
                    <div className="doout">
                      A Nintendo Account is required to receive and redeem
                      points.{' '}
                      <a href="#" className="inboxb">
                        <span className="dodo">Terms apply.</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blueright">
                  <picture>
                    <source />
                    <img className="char8" src="/img/home/char-10.webp" />
                  </picture>
                  <picture>
                    <source />
                    <img
                      className="char9"
                      src="/img/home/char-9-medium-up.webp"
                    />
                  </picture>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="footerbox">
          <div className="foimgback">
            <div className="inkfoterleft">
              <picture>
                <source />
                <img
                  className="o01"
                  src="/img/home/sticker-2-red-medium-up.webp"
                />
                <img className="o02" src="/img/back/ink09.png" />
                <img className="o03" src="/img/back/ink04.png" />
              </picture>
            </div>
            <div className="inkfoterright">
              <picture>
                <source />
                <img className="o04" src="/img/home/sticker-3-medium-up.webp" />
                <img className="o05" src="/img/back/ink07.png" />
                <img className="o06" src="/img/back/ink03.png" />
              </picture>
            </div>
          </div>

          <div className="fotextback">
            <div className="foterbtn">
              <button>Game updates</button>
            </div>
            <div className="text-back">
              <div className="ptag">
                <p>
                  Nintendo Switch Lite plays all games that support handheld
                  mode.
                </p>
                <p>Save Data Cloud compatible with offline play data only.</p>
                <p>
                  * Additional games, systems and/or accessories may be required
                  for multiplayer mode. Games, systems, and some accessories
                  sold separately.
                </p>
                <p>
                  ** Any Nintendo Switch Online membership and Nintendo Account
                  required for online features. Not available in all countries.
                  Internet access required for online features.{' '}
                  <a href="#">
                    <span>Terms apply.</span>{' '}
                  </a>
                </p>
                <p>*** LAN adapter required; sold separately</p>
              </div>
            </div>
            <div className="img-back">
              <div className="endleft">
                <p className="leftfoll">Follow Nintendo:</p>
                <div className="foll">
                  <img src="/img/home/logo-facebook.svg" />
                  <img src="/img/home/logo-twitter.svg" />
                  <img src="/img/home/logo-youtube.svg" />
                  <img src="/img/home/logo-instagram.svg" />
                </div>
              </div>
              <div className="endrignt">
                <div className="whbox">
                  <img className="en" src="/img/home/en-e10.svg" />
                  <p>Cartoon Violence</p>
                </div>
                <img
                  className="esrb"
                  src="/img/home/logo-esrb-privacy-certified.svg"
                />
              </div>
            </div>

            <div className="endbox">
              <div className="linka">
                <a href="#">
                  <span>Privacy Policy</span>
                </a>
                <a href="#">
                  <span>Terms of Use</span>
                </a>
                <a href="#">
                  <span>Cookie Preferences</span>
                </a>
              </div>
              <p className="endtext">© Nintendo.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
