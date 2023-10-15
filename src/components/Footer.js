import React from 'react';
import FooterDB from '../json/Footer.json';
import insta from '../asset/img/tada_insta.svg';
import youtube from '../asset/img/tada_youtube.svg';
import facebook from '../asset/img/tada_facebook.svg';
import naver from '../asset/img/tada_naver.svg';

const Footer = () => {


    return(

         <>
         <div className="footerWrap">
             <p className='footerTitle'>VCNC 브이씨엔씨</p>
            <div className="footerBox">
             <ul>
                {FooterDB.footerCont1.map((v, i) => (
                    <li key={'footerCont1' + i}>
                        {v}</li>
                ))}
                </ul>
             <ul>
                {FooterDB.footerCont2.map((v, i) => (
                    <li key={'footerCont2' + i}>{v.title}<a href={v.href}>{v.url}</a></li>
                ))}
                </ul>
             <ul>
                {FooterDB.footerCont3.map((v, i) => (
                    <li key={'footerCont3' + i}><a href="#">{v}</a></li>
                ))}
                </ul>
            </div>
            <div className="footerSns">
                <ul><p>&copy; TADA by Value Creators & Company</p></ul>
                <ul>
                    {FooterDB.footerSns.map((v,i) => (
                    <li key={'footerSns' + i} ><a href={v.href} target="_blank"></a></li>
                    ))}
                </ul>
            </div>
         </div>
         </>

    )

}

export default Footer;