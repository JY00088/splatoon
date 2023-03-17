import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as Read } from '../imgs/read.svg';
import '../App.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 2,
    };
    return (
      <>
        <div className="rowimg" style={{ width: '100%', margin: '0 auto' }}>
          <Slider className="rowimgbox" {...settings}>
            <div className="state01">
              <Read className="menojang" width="400" height="450" />
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
              <Read className="menojang" width="400" height="450" />
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
            <div className="state03">
              <Read className="menojang" width="400" height="450" />
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
              <Read className="menojang" width="400" height="450" />
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
            <div className="state05">
              <Read className="menojang" width="400" height="450" />
              <div className="menobox">
                <img className="pasting01" src="/img/home/sticker-9.png" />
                <img
                  className="pasting02"
                  src="/img/home/Splatfest0223_signboard_chcolate_EN.jpg"
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
            <div className="state06">
              <Read className="menojang" width="400" height="450" />
              <div className="menobox">
                <img className="pasting01" src="/img/home/sticker-9.png" />
                <img className="pasting02" src="/img/home/1840splatfest.png" />
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
          </Slider>
        </div>
      </>
    );
  }
}
