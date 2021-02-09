import React, {useState} from 'react';
import ListItem from './ListItem'
import styled from 'styled-components';
import img from './images/balloons.jpeg';
// import SubmitButton from './SubmitButton';



const StyledBackground = styled.div`
	background-image: url(${img});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	height: 100%;
	width: 100%;
    border: 0;
`

const StyledTitle = styled.div`
    color: white;
    font-size: 50px;
    margin-top: 80px;
    text-align: center;
`
const StyledListItem = styled.ol`
    text-align: center;
    margin-right: 60px;
    color: white;
`
const StyledSubmitButton = styled.div`
   
`

const StyledMessage = styled.div`
    font-color: white;
    font-border: red;
    color: white;
`


const Checklist = () => {
    const list = ['arbitrary item a', 'arbitrary item b']
    const [checkedCount, setCheckedCount] = useState(0)
    const percentageClicked = Math.round(checkedCount / list.length * 100)
    const isWorthy = percentageClicked > 88 ? true : false;
    const [buttonClick, setButtonClick] = useState(null)
    
     const onButtonClick = () => {
        setButtonClick((buttonClick) => true) 
    }
      

    // console.log(SubmitButton)
   
    return (
        
    <StyledBackground>
        <StyledTitle>Relax...</StyledTitle>
        <div>
        <StyledListItem>
            {list.map((element) => <ListItem
                listItemText={element}
                checkedCount={checkedCount}
                setCheckedCount={setCheckedCount}
            />)}
        </StyledListItem>
        </div>
        <div class='container'>
        <StyledSubmitButton>
            {/* <SubmitButton  buttonText='Worthy Check' setButtonClick={setButtonClick} /> */}
            
            <button onClick={onButtonClick}>test button</button>
        </StyledSubmitButton>
        <styledMessage>
       {(isWorthy === buttonClick) && <StyledMessage>congratulations</StyledMessage>}
       </styledMessage>
        </div>
    </StyledBackground>)
};



export default Checklist;