import React , {useEffect , useRef , useState} from 'react';
import NaviDB from '../json/Navi.json';
import tadaLogo from '../asset/img/tada_black.png';
import { Link } from 'react-router-dom';
import ScrollSpy from "react-ui-scrollspy"


const Navi = () => {


    const targetNav = useRef(null);
    const [color , setColor] = useState(true);

    const scrollfixed = () => {
                

        if(window.scrollY > 700){

           
            targetNav.current.style.position = "fixed";
            targetNav.current.style.top = "0";
            setColor(true);

            if(window.scrollY > 2000){

                setColor(false);
            
        } 
           if(window.scrollY > 6300){

               setColor(true);

           }
        
        }else{

            targetNav.current.style.position = "relative";
            setColor(true);
           

        }
    }

    


    const Naviactive = (e) => {

        const navitag = e.target.parentElement.parentElement;
        const navitagArr = [...e.target.parentElement.parentElement.children] 
        const mynum = navitagArr.indexOf(e.target.parentElement);


   }

    useEffect ( () => {

        const move = setInterval(() => {

             window.addEventListener("scroll" , scrollfixed);

        },100)
 
         return () => {

            clearInterval(move);
            
            window.removeEventListener("scroll" , scrollfixed);

         }

    },[])

    return(

 <>
 <ScrollSpy>
     <div className={color ? 'navi' : 'navi txtChange'} ref={targetNav}>
        <Link to = "/"><img src={tadaLogo} alt="logo" className='logo'/></Link> 
        <ul className="line"><em></em></ul>
        <ul className="menu">
            {NaviDB.nav.map((v,i) => (
            <li key={'nav' + i}>
                <a href={v.href} onClick={Naviactive}>{v.title}</a>
            </li>
            ))}
        </ul>
     </div>
    </ScrollSpy>
 </>

     )

}

export default Navi;