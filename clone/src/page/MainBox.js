import React, { useState } from 'react';
import Film from './Film';
import '../scss/Home.scss';
import { ReactComponent as Read } from '../imgs/read.svg';

const MainBox = ({ movies, theme }) => {
  const [slidePx, setSlidePx] = useState(0);

  const toPrev = () => {
    slidePx < 0 && setSlidePx(slidePx + 1375);
  };

  const toNext = () => {
    slidePx > -4125 && setSlidePx(slidePx - 1375);
  };
  if (!movies) return;
  return (
    <div className="mainBox">
      <p className="filmTheme">{theme.title}</p>
      <ul className="filmList">
        {movies.map((movie) => (
          <Film slide={slidePx} key={movie.id} movie={movie} />
        ))}
      </ul>
      <div className="rowimg">
        <div className="rowbut"></div>
        <ul className="rowimgbox">
          <li className="rowimg01">
            <div className="state01">
              <Read className="menojang" width="570px" height="470px" />
              <div className="menobox">
                <img className="pasting01" src="/img/home/sticker-9.png" />
                <img
                  className="pasting02"
                  src="/img/home/1840_Ncom_SP3_EN.jpg"
                />
                <div className="pasting03">
                  <p>
                    Dive into a fresh new season of Splatoon 3 (and newly
                    launched DLC)!
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
                <img className="pasting01" src="/img/home/sticker-9.png" />
                <img
                  className="pasting02"
                  src="/img/home/1840_SpecialHardware.jpg"
                />
                <div className="pasting03">
                  <p>
                    Dive into a fresh new season of Splatoon 3 (and newly
                    launched DLC)!
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
                <img className="pasting01" src="/img/home/sticker-9.png" />
                <img className="pasting02" src="/img/home/splucky1840.jpg" />
                <div className="pasting03">
                  <p>
                    Dive into a fresh new season of Splatoon 3 (and newly
                    launched DLC)!
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
                <img className="pasting01" src="/img/home/sticker-9.png" />
                <img
                  className="pasting02"
                  src="/img/home/S3_deepcutinterview_header.jpg"
                />
                <div className="pasting03">
                  <p>
                    Dive into a fresh new season of Splatoon 3 (and newly
                    launched DLC)!
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
      </div>
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
    </div>
  );
};

export default MainBox;
