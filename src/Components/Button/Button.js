import React from 'react';
import './Button.css';

const Bttn = (props) => {
  return (
    <div className='btnn'>
      <button>{props.content}</button>
    </div>
  )
}

export default Bttn
