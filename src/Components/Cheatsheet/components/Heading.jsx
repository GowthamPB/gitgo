import React from 'react';
import Styles from '../styles.module.scss';



function Heading(props) {
    return (
        <div id={props.id}>
            <p className={Styles.Heading}>{props.heading}</p>
        </div>
    )
}

export default Heading;
