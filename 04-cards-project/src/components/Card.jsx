import React from "react";
import {Bookmark} from 'lucide-react';

function Card(props) {
    return (
        <div className='card'>
            <div className='top'>
                <img src={props.brandLogo} alt="" />
                <button>Save<Bookmark /></button>
            </div>

            <div className='center'>
                <h3>{props.companyname} <span>{props.datepost}</span></h3>
                <h2>{props.post}</h2>
                
                <div className='tag'>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>
            <div className='bottom'>
                <div className='btext'>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button className='applybtn'>Apply Now</button>
            </div>
        </div>
    );
}

export default Card;