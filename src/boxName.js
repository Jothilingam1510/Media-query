import React from 'react'
import './App.css';

const Listcard = ({titleName}) =>{
return(
    <div className='cardone'>
  <div className='aboutus'>{titleName}</div>
  <div className='paraforcard'>Sample text. Click to select the text box. Click again or double click to start editing the text.</div>
  <div className='morelink'><a href='/'>MORE</a> </div>
  
</div>
);
}
export default Listcard