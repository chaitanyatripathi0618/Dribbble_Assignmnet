import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContentPage.css";
import fvrt from '../Assets/heart.png';
import bukmrk from '../Assets/bookmark.png';
import pos2 from '../Assets/g.png';
import u from "../Assets/u.jpg";

function ContentPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/upload")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {data.map((item) => (
                <div className="boxdiv">
                    <div className="dividebox">
                        <div className="pos">
                            <div id="photo">
                                <img src={u}/>
                            </div>
                            <div id="names">
                            <h4>{item.Servicename}-{item.description}</h4>
                            <p>{item.name} . Follow . Hire me</p>
                            </div>
                            
                        </div>
                        <div className="icons">
                            <div id="fvrt">
                            <img src={fvrt}/>
                            </div>
                            <div id="fvrt">
                            <img src={bukmrk}/>

                            </div>   
                            

                        </div>
                    </div>
                    <div id="poster">
                    <img
                        src={`data:${item.img.contentType};base64,${item.img.data}`}
                        alt=""
                    />
                    </div>
                    <div className="details">
                        <h2 id="h">Hello !</h2>
                        <p id="c">{item.contents}</p>
                        <h1 id="a">AVAILABLE FOR NEW PROJECT</h1>
                        <h2 id="w">WORK INQUIRY</h2>
                        <h3 id="p">Contact Me:</h3>
                        <p>{item.EmailId}</p>
                    </div>
                    <div id="pos2">
                    <img src={pos2}/>
                    </div>
                    

                </div>
            ))}
        </div>
    );
}

export default ContentPage;
