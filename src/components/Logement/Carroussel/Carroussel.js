import React, { useState } from "react";
import Arrow from "../../../assets/svg/sliderArrow.svg";
import classes from "../../../styles/Carroussel.module.css";

// import Logements from "../../../assets/Json/logements.json"

const Carroussel = (props) => {
    const imgUrlArray = props.pics;
    const maxNbr = props.pics.length - 1;
    let [currImg, setCurrImg] = useState(0);
    // console.log(`${imgUrlArray[currImg]}`);

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
        <div className={classes.cntnr_slider}>
            {maxNbr !== 1 ?
                <div className={classes.leftArrow} onClick={() => handleArrows("left")}>
                    <img src={Arrow} alt="left arrow" />
                </div> : null}

            <img className={classes.slider} src={imgUrlArray[currImg]} alt="slider" />

            {maxNbr !== 1 ?
                <div className={classes.rightArrow} onClick={() => handleArrows("right")}>
                    <img src={Arrow} alt="right arrow" />
                </div> : null}
        </div>
    )
};

export default Carroussel;