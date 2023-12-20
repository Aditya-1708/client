import React from 'react';
import './CardsH.css';
import img1 from '../images/HackthonPostsPictures/1.jpg';
import img2 from '../images/HackthonPostsPictures/2.png';
import img3 from '../images/HackthonPostsPictures/3.png';
import img4 from '../images/HackthonPostsPictures/4.png';
import img5 from '../images/HackthonPostsPictures/5.jpg';
import img6 from '../images/HackthonPostsPictures/6.png';
import img7 from '../images/HackthonPostsPictures/7.png';
import img8 from '../images/HackthonPostsPictures/8.png';
import img9 from '../images/HackthonPostsPictures/9.jpg';
import img10 from '../images/HackthonPostsPictures/10.jpg';
import defaultImg from '../images/Cv.png'
import './CardsH.css'
function CardsH(props) {
    function handleImgSelection(num) {
        switch (num) {
            case 1: return img1;
            case 2: return img2;
            case 3: return img3;
            case 4: return img4;
            case 5: return img5;
            case 6: return img6;
            case 7: return img7;
            case 8: return img8;
            case 9: return img9;
            case 10: return img10;
            default: return defaultImg; // You may want to provide a default image here
        }
    }
    const selectedImg = handleImgSelection(Number(props.image));
    return (
        <>
            <div className="card text-bg-dark my-3" style={{ width: "20rem" }}>
                <img src={selectedImg} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.text}</p>
                    <p className="card-PostDate">{props.PostDate}</p>
                    <p className="card-LastDate">{props.LastDate}</p>
                    <a href={"https://" + props.RegistrationLink} className="btn btn-primary">Register</a>
                </div>
            </div>
        </>
    );
}

export default CardsH;
