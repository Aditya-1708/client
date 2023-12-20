import React from 'react';
import './CardsR.css';
import defaultImg from '../images/Cv.png'
function CardsR(props) {
    return (
        <>
            <div className="card text-bg-dark my-3" style={{ width: "20rem" }}>
                <img src={defaultImg} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">{props.text}</p>
                    <p className="card-PostDate">{props.PostDate}</p>
                    <a href={props.DocumentLink} className="btn btn-primary">Pdf</a>
                </div>
            </div>
        </>
    );
}

export default CardsR;
