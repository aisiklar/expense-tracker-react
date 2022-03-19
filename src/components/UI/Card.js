import React from 'react'; // aslında yeni nesil react app'de gerekmiyor
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    //console.log(`classes= ${classes}`);
    
    return <div className={classes}>{props.children}</div>;
}

export default Card;