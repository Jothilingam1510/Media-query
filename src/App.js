import React from 'react'
import './App.css';
import man from './image/man.jpg'
import Listcard from './boxName';
import Button from './Components/Button ';


function App() {
  const title=['About US' , 'Quick Tips' ,'Quality service']
  return (
  <div>
    <div className='container'>
      <div class="head"> 
        <h1 class="complex" >Complex Service Your Car</h1>
        <p class="para">Our easy-to-talk-to auto car advisors will explain any suggested maintenance or repairs. They won't take any actions unless you approve them first. OurASE-certified auto technicians are looking out for your vehicle and your budget.</p>
        <div ><Button text="LEARN MORE" className="button"/></div>  
        </div>
      <div className='pic'><img className='image' src={man} alt=''/></div>
    </div>
     
    <div className='boxName'>
    {title.map((titles,index) => {
        return(
            <Listcard key={index} titleName={titles} />
        );
      }
      )}
    </div>
      <div className='bpara'>We perform high-quality repairs of any model, restore cars with various degrees of damage.</div>
    <div><Button  text="BOOK NOW" className="nextButton"/></div>  

      

  </div>
  )
}

export default App