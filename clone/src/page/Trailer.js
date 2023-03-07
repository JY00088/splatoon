import { useContext, useEffect } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "../Mycontext";
import '../scss/Trailer.scss';
import ReactPlayer from "react-player";




const Trailer = () => {
    const { setState } = useContext(Context)
    useEffect(() => {
        setState(false)
    }, [])

    return (
        <>

            <div className="trailervideo">
                <div className="traback">
                    <img src="/img/home/camo-black-2x.png" />
                </div>
                <button className="trameun">
                    <Link to="/">
                        <img src="/img/home/x.svg" />
                    </Link>
                </button>
                <div className="videomodal">
                    <ReactPlayer
                        className="player"
                        url={"https://www.youtube.com/watch?v=ZvqGGzIOsfc"}
                        
                        playing={true}
                        muted={true}
                        controls={true}
                    />

                </div>
            </div>
        </>
    )
}

export default Trailer