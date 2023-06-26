import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

const App=()=> {

  useEffect(()=>{
    changeMode();
    // eslint-disable-next-line
  },[])

  const [mode,setMode] = useState('#1D1D2C');
  const [grey,setGrey] = useState(600);

  const changeMode = () =>{
    if(mode==='#FCF6F5'){
      setGrey(300);
      setMode('#1D1D2C');
      console.log(mode);
    }
    else{
      console.log(mode);
      setGrey(600)
      setMode('#FCF6F5');
    }
  }
  
  return (
    <div className='' style = {{ backgroundColor: mode==='#FCF6F5'?'#FCF6F5':'#1D1D2C' }}>
      <Navbar mode={mode} changeMode={changeMode} grey={grey} /> 
      <Home mode={mode} changeMode={changeMode} grey={grey}/> 
      <About mode={mode} changeMode={changeMode} grey={grey}/>
      <Skills mode={mode} changeMode={changeMode} grey={grey}/>
      <Qualifications mode={mode} changeMode={changeMode} grey={grey}/>
      <Projects mode={mode} changeMode={changeMode} grey={grey}/>
      <Contact mode={mode} changeMode={changeMode} grey={grey}/>
      <Footer mode={mode} changeMode={changeMode} grey={grey}/> 
    
      </div>
  );
}

export default App;
