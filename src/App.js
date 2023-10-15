
import './App.css';
import '../src/asset/scss/_app.scss';
import {  HashRouter as Router, Route, Routes } from 'react-router-dom';
import Maincomponent from './components/Maincomponent';
import Navi from '../src/components/Navi';
import Banner from './components/Banner';
import Footer from './components/Footer';



const App = () => {

  return (
    <div className="App">
       <Banner/>
       <Navi/>
       <div className="introBox">
          <span>더 나은 이동이 더 나은 삶을 만든다는 믿음</span>
            <ul>
              <p>타다는 새로운 이동 기준을 제시하는 모빌리티 플랫폼입니다.</p>
                <p>이동의 기준을 업데이트하여, 도로 위 스트레스 없는 세상을 만들어 갑니다.</p>
            </ul>
         </div>
      <Routes>
       <Route path='/' element={<Maincomponent></Maincomponent>}></Route>
       </Routes>
      <Footer/>

       
    </div> 
  );
}

export default App;
