import React, { useState } from "react";
import classes from '../../../styles/Dropdown.module.css'
import arrow from "../../../assets/svg/arrowUp.svg"

const Dropdown = (props) => {

    const dropdown_close = `${classes.dropdown_style} ${classes.close_style}`
    const dropdown_open = `${classes.dropdown_style} ${classes.open_style}`
    // const contentOpen = `${classes.content_style} ${classes.content_open}`
    // const contentClose = `${classes.content_stye} ${classes.content_close}`

    const [isOpen, setIsOpen] = useState(false);
    /*function handleClick() {
        setIsOpen(!isOpen);
    }*/

    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className={isOpen ? dropdown_open : dropdown_close}>
                <div className={classes.title_style}>
                    {props.title}
                </div>
                <img
                    src={arrow}
                    alt="arrow"
                    className={isOpen ? classes.arrow_up_style : classes.arrow_down_style}
                />
            </div>
            <div className={`${classes.content_style} ${isOpen ? 'open' : 'closed'}`}>{isOpen ? props.content : null}</div>
            {/* {isOpen ?
                <div className={contentOpen}>{props.content}</div>
                :
                <div className={contentClose}></div>
            }
            {console.log(isOpen)} */}
        </>
    )
};

export default Dropdown;