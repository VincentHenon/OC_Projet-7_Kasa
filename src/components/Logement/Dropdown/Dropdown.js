import React, { useState } from "react";
import classes from '../../../styles/Dropdown.module.css'
import arrow from "../../../assets/svg/arrowUp.svg"

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className={isOpen ? `${classes.dropdown_style} ${classes.open_style}` : `${classes.dropdown_style} ${classes.close_style}`}>
                <div className={classes.title_style}>
                    {props.title}
                </div>
                <img src={arrow} alt="arrow" className={isOpen ? classes.arrow_up_style : classes.arrow_down_style} />
            </div>
            <div className={isOpen ? `${classes.content_style} ${classes.open}` : `${classes.content_style}`}>
                {props.content}
            </div>
        </>
    )
};

export default Dropdown;