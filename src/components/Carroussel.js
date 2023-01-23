import React, { useState } from "react";
import Arrow from "../assets/svg/sliderArrow.svg";

const Carroussel = ({ pics }) => {
    const imgUrlArray = pics;
    const maxNbr = pics.length - 1;
    let [currImg, setCurrImg] = useState(0);
    const displayNbr = `${currImg + 1} / ${maxNbr + 1}`;

    const handleArrows = (direction) => {
        if (direction === 'left') {
            if (currImg === 0) {
                setCurrImg(maxNbr);
            } else {
                setCurrImg(currImg - 1);
            }
        } else {
            if (currImg === maxNbr) {
                setCurrImg(0);
            } else {
                setCurrImg(currImg + 1)
            }
        }
    }

    return (
        <div className="slider-cntnr">
            {maxNbr !== 1 ?
                <div className="arrow-left" onClick={() => handleArrows("left")}>
                    <img src={Arrow} alt="left arrow" />
                </div> : null}

            <img className="slider-img" src={imgUrlArray[currImg]} alt="slider" />
            <div className="display-number">{displayNbr}</div>
            {maxNbr !== 1 ?
                <div className="arrow-right" onClick={() => handleArrows("right")}>
                    <img src={Arrow} alt="right arrow" />
                </div> : null}
        </div>
    )
};

export default Carroussel;