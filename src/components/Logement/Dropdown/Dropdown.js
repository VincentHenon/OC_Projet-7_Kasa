import React, { useState } from "react";
import classes from '../../../styles/Dropdown.module.css'
import arrow from "../../../assets/svg/arrowUp.svg"

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className={isOpen ? `${classes.cntnr_dropdown} ${classes.cntnr_open} fc_light bgc_primary ` : `${classes.cntnr_dropdown} ${classes.cntnr_close} fc_light bgc_primary `}>
                <div className={` ${classes.title} fs_18 fw_500 txt_norm txt_height fc_light  `}>
                    {props.title}
                </div>
                <img src={arrow} alt="arrow" className={isOpen ? classes.arrow_up : classes.arrow_down} />
            </div>
            <div className={isOpen ? `${classes.content} ${classes.content_open} txt_norm txt_height fc_primary fs_18 fw_400 bgc_secondary list_no_deco` : `${classes.content} txt_norm txt_height fc_primary fs_16 fw_400 bgc_secondary `}>
                {props.content}
            </div>
        </>
    )
};

export default Dropdown;