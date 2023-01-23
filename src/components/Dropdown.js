import React, { useState } from "react";
import arrow from "../assets/svg/arrowUp.svg"

const Dropdown = ({ title, children, titleClass, contentClass }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} className={isOpen ? "dropdown-cntnr dropdown-cntnr_open " : "dropdown-cntnr dropdown-cntnr_close"}>
                <div className={`${titleClass} dropdown-title`}>
                    {title}
                </div>
                <img src={arrow} alt="arrow" className={isOpen ? "dropdown-arrow_down" : "dropdown-arrow_up"} />
            </div>
            <div className={`${contentClass} ${isOpen ? "dropdown-content dropdown-content_open" : "dropdown-content"}`}>
                {children}
            </div>
        </>
    )
};

export default Dropdown;