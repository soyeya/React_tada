import React , { useEffect, useRef } from 'react';
import Free from '../json/Free.json';




const Freedive = () => {

    const targetRef = useRef(null);
    const scrollEvet = () => {

        if (window.scrollY > 2000) {

        targetRef.current.style.backgroundColor = "#020019";
        targetRef.current.style.transition = "1s";

        }else{

        targetRef.current.style.backgroundColor = "#fff";
        targetRef.current.style.transition = "1s";

        }

    };

    useEffect ( () => {

        const timer = setInterval(() => {

            window.addEventListener("scroll",  scrollEvet);

          }, 100);

          return () => {

            clearInterval(timer);

            window.removeEventListener("scroll",  scrollEvet);

          };


    },[])

    
     return (

        <>
     <div className="freediveBack" ref={targetRef}>
            <span className='free-title'>Stress-Free Ride to Life</span>
        <div className="freeContent">
        {Free.freeCont.map((v,i) => (
           <ul>
             <li key={'content' + i}>
               <span>{v.subTitle}</span>
               <p>{v.subCont}</p>
             </li>
           </ul>
            ))}
           </div>
         </div>
        </>
     )

}

export default Freedive;