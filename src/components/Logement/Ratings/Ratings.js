import React, { startTransition } from "react";
import fillStar from "../../../assets/svg/star_fill.svg";
import noFillStar from "../../../assets/svg/star_nofill.svg";
import classes from "../../../styles/Ratings.module.css";


const Ratings = ({ rating }) => {
    const stars = [];
    console.log(rating);
    for (let i = 1; i < 6; i++) {

        if (i <= rating) {
            stars.push(<img src={fillStar} alt="fill star" />);
            console.log(stars);
        } else {
            stars.push(<img src={noFillStar} alt=" no fill star" />)
        }
    }

    return (
        <div className={classes.cntnr_stars_style}>
            {stars}
        </div>
    )
};

export default Ratings;