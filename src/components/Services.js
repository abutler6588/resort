import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title'
class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info:'In between laps in the pool, grab a seat at our poolside bar for some respite from the sun and a quick light bite to fuel up before your second dose of sun. For the truest sunbathers, poolside service will be available throughout the deck.'
            },
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                info:'Our hotel is just steps from white sand and the breathtaking ocean shore. We boast a variety of activities for your stay. When you are not at the beach, enjoy a refreshing dip in our zero-entry pool and an energizing workout at our 24-hour fitness center. Make even more memories in the city, offering picturesque parks, gardens, and museums.'
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free shuttle',
                info:'Airport shuttle service is complimentary 24 Hours, 7 days a week.'
            },
            {
                icon:<FaBeer/>,
                title:'Craft Beer',
                info:'A collection of bigger, bolder, more complex beers, our delicious, higher alcohol offerings are perfect for sipping or sharing.'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services'/>
                <div className='services-center'>
                {this.state.services.map((item,index) => {
                    return (<article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    );
                })}
                </div>
            </section>
        );
    }
}

export default Services;
