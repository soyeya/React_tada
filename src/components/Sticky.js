import React from 'react';
import stickyCont from '../json/Sticky.json';


const StickyBanner = () => {

    return(

        <>
        <div className="StickyBack">
          <div className="stickyContent">
          {stickyCont.cont.map((v,i) => (
               <ul key={'stickyCont' + i}>
                 <li>
                    <p>{v.title}</p>
                    <p>{v.txt}</p>
                   </li>
                 </ul>
                   ))}
                </div>
            </div>
        </>

    )

}
export default StickyBanner;
