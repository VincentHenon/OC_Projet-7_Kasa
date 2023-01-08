import React from "react";
import fillStar from "../../../assets/svg/star_fill.svg";
import noFillStar from "../../../assets/svg/star_nofill.svg";
import classes from "../../../styles/Ratings.module.css";


const Ratings = ({ rating }) => {
    const stars = [];
    for (let i = 1; i < 6; i++) {

        if (i <= rating) {
            stars.push(<img key={i} className={classes.star} src={fillStar} alt="fill star" />);
        } else {
            stars.push(<img key={i} className={classes.star} src={noFillStar} alt=" no fill star" />)
        }
    }

    return (
        <div className={classes.cntnr_stars}>
            {stars}
        </div>
    )
};

export default Ratings;