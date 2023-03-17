import { useState, useRef, useContext, useEffect } from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from '../Mycontext';

//아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { state } = useContext(Context);
  let elBtn = useRef();
  console.log(state);

  let navFn = function () {
    elBtn.current.classList.toggle('active');

    // console.log(classList.sss);
  };

  useEffect(() => {
    const menuTrigger = document.querySelector('.menu-trigger');

    menuTrigger.addEventListener('click', (event) => {
      console.log(event.currentTarget);
      event.currentTarget.classList.toggle('active-1');
    });
  }, []);

  if (!state) return <></>;
  return (
    <header ref={elBtn}>
      <div className="gridbox">
        <div className="gone">
          <div className="logoimg">
            <a>
              <img src="/img/home/nintendo-racetrack .svg" className="logo" />
            </a>
          </div>
          <div className="loginimg">
            <FontAwesomeIcon icon={faUser} />
            <span className="login">Log in / Sign up</span>
          </div>
        </div>

        <div className="stixkbox">
          <div className="here">
            <menu className="motion">
              <li className="li1">
                <button className="afbtn">
                  <span className="af"></span>
                  <span className="aftext">Reduced motion</span>
                </button>
              </li>
              <li className="li2">
                <a href="#" className="skip">
                  Skip to main content
                </a>
              </li>
            </menu>
            <a href="https://www.nintendo.com/switch/" className="navimg">
              <img src="/img/home/logo-nintendo-switch.svg" />
            </a>

            <div className="menu">
              <div className="wavebtn">
                <div id="shape"></div>
              </div>
              <a className="menu-trigger" onClick={navFn}>
                <span></span>
                <span></span>
                <span></span>
              </a>
              <p className="opne">Menu</p>
              <p className="close">Close</p>
              <nav>
                <div className="logo-webox">
                  <picture>
                    <source />
                    <img
                      className="logo-we"
                      src="/img/home/splatoon-3-logo-plain.webp"
                    />
                    <img className="logo-ink01" src="/img/back/ink11.png" />
                    <img className="logo-ink02" src="/img/back/ink03.png" />
                    <img className="logo-ink03" src="/img/back/ink02.png" />
                  </picture>
                </div>
                <div className="navflex">
                  <div className="navbtn">
                    <Link to="/buy">
                      Buy now <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                  </div>

                  <Link to="/">
                    Home <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                  <Link to="/welcome">
                    Welcome To Splatsville{' '}
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                  <Link to="/how">
                    How to play <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                  <Link to="/weapons">
                    Weapons & gear <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                  <Link to="/nows">
                    News <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                  <Link to="/events">
                    Events <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
