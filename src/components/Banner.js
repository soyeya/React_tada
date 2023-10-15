import React ,  { useEffect , useState } from 'react';
import '../asset/css/_banner.css';
import BannerDB from '../json/Banner.json';

const Banner = () =>{


    const [ clickMode  , setClickmode ] = useState(false);
    const [ changeTxt , setchangeTxt ] = useState(true);

    const appClick = () => {

            setClickmode(true);

    }

    useEffect( () => {

        setInterval( () => {    

             if(changeTxt == true || false){

                setchangeTxt(!changeTxt);

             }
             
        },5000)
        
    },[])


    return(
        
     <>
        <div className="main">
            <iframe src="https://player.vimeo.com/video/667049748?h=0a154a23f3?api=1&background=1&loop=1&autopause=0&muted=1&quality=1080p" allow ="autoplay; fullscreen; picture-in-picture" data-ready="true" className="tadaVideo"></iframe>
        <ul className="title">
               <li>
                 <p className={changeTxt ? "change" : ""}>{BannerDB.Title[0]}</p>
                 <p className={changeTxt ? "" : "change"}>{BannerDB.Title[1]}</p>
               </li>
            </ul>
            <ul className='mainBtn'>
                <li><button className={clickMode ? 'appBtnNone' : 'appBtn'} onClick={ appClick }>앱 다운로드</button></li>
                
        <li className= {clickMode ? 'displayblock' : 'displayNone'}>
           {BannerDB.Btn.map((v,i) => (
            <button key={'downBtn' + i}className='blockBtn'><a href={v.url} target='blank'>{v.brand}</a></button>
           ))}
            </li>
            </ul>
        </div>
        </>
    )

}
export default Banner;