import React from 'react';
// import styled from 'styled-components'


const SubmitButton = ({
    buttonText,
    setButtonClick,
   
    
}) => {
    
return(

   
    
    <div onClick={() => setButtonClick(true)} >{buttonText}</div>
    
    
)
    };

export default SubmitButton;

