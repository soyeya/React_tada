import React from 'react';
import Service from '../components/Service';
import Freedive from '../components/Freedive';
import StickyBanner from './Sticky';
import Slider2 from './Slider2';
import Banner2 from './Banner2';

const Maincomponent = () => {

    return(

        <div className="Maincontent">
        <Service/>
        <Freedive/>
        <StickyBanner/>
        <Slider2/>
        <Banner2/>
        </div>
    )


}

export default Maincomponent;