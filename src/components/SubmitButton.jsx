import React from 'react';
// import styled from 'styled-components'


const SubmitButton = ({
    buttonText,
    setButtonClick,
    buttonClick
    
}) => (
    
    // const onButtonClick = () => {
    //     setButtonClick((buttonClick) => true) 
    // }
    
    <div>
    <button onClick={setButtonClick((buttonClick) => true)} >{buttonText}</button>
    
    </div>
    );

  
    

   

export default SubmitButton;

