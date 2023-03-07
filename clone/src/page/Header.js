import { useState, useRef } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    let elBtn = useRef();

    let navFn = function () {
        elBtn.current.classList.toggle('active');
    };

    return (
        <header ref={elBtn}>
            <div className="gridbox">

                <div className="gone">
                    <div className="logoimg">
                        <a><img src="/img/home/nintendo-racetrack .svg" className="logo" /></a>
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
                                <a href="#" className="skip">Skip to main content</a>
                            </li>
                        </menu>
                        <a href="https://www.nintendo.com/switch/" className="navimg">
                            <img src="/img/home/logo-nintendo-switch.svg" />
                        </a>

                        <div className="menu">
                        <button onClick={navFn}>X</button>
                        <p className="opne">Menu</p>
                        <p className="close">Close</p>
                        <nav>
                            <Link to="/buy">Buy now</Link>
                            <Link to="/">Home</Link>
                            <Link to="/welcome">Welcome To Splatsville</Link>
                            <Link to="/how">How to play</Link>
                            <Link to="/weapons">Weapons & gear</Link>
                            <Link to="/nows">News</Link>
                            <Link to="/events">Events</Link>
                        </nav>
                    </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header