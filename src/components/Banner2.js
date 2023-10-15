import React from 'react';
import DriveDB from '../json/Drive.json';

const Banner2 = () => {

    return(

        <>
        <div className="bannerBox">
         <div className="bannerCont">
            <ul>
                <li><p>편안한 이동이 필요한 순간 타다와 함께하세요.</p></li>
            </ul>
            <ul className='Banner_bg'></ul>
            </div>
        <div className="bannerBtn" id ="drive">
            <p>타다 드라이버가 되어보세요</p>
             <ul>
                {DriveDB.drive1.map((v,i) => (
                    <li key={'drive1' + i}><a href={v.url}>{v.title}</a></li>
                ))}
            </ul>
             <ul>
                {DriveDB.drive2.map((v,i) => (
                    <li key={'drive2' + i}><a href={v.url}>{v.title}</a></li>
                ))}
            </ul>
        </div>
        </div>
        </>
    )

}

export default Banner2;