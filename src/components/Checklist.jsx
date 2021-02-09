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
   align-items: center;
   background: transparent;
   margin-right: 15px
`

const StyledMessage = styled.div`
    font-color: white;
    font-border: red;
    color: white;
`

const Checklist = () => {
    const list = ['do you know how to relax?', 'have you ever been to a park?', 'have you ever read a book?', 'do you even own fuzzy slippers?', 'do you listen to classical music?']
    const [checkedCount, setCheckedCount] = useState(0);
    const percentageClicked = Math.round(checkedCount / list.length * 100);
    const isWorthy = percentageClicked > 88 ? true : false;
    const [buttonClick, setButtonClick] = useState(null);
    const onButtonClick = () => {
        setButtonClick((buttonClick) => true) 
    }
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
        
        <StyledSubmitButton>
            {/* <SubmitButton  buttonText='Worthy Check' setButtonClick={setButtonClick} /> */}
  
            <button onClick={onButtonClick}>Click to check</button>
        </StyledSubmitButton>
        <styledMessage>
       {(isWorthy === buttonClick) && <StyledMessage>congratulations</StyledMessage>}
       </styledMessage>
       
    </StyledBackground>)
};



export default Checklist;