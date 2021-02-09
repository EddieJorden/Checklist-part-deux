import React, {useState} from 'react';
import ListItem from './ListItem'
import styled from 'styled-components';
import img from './images/balloons.jpeg';
import SubmitButton from './SubmitButton'


const StyledBackground = styled.div`
	background-image: url(${img});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	height: 100%;
	width: 100%;
`;

const StyledTitle = styled.div`
    color: white;
    font-size: 50px;
    margin-top: 80px;
`
const StyledListItem = styled.ol`
    
    color: white;
`
const StyledSubmitButton = styled.div`
    background-color: blue
    font-color: red
`

const StyledMessage = styled.div`
    font-color: white
    font-border: red
`


const Checklist = () => {
    const list = ['arbitrary item a', 'arbitrary item b']
    const [checkedCount, setCheckedCount] = useState(0)
    const percentageClicked = Math.round(checkedCount / list.length * 100)
    const isWorthy = percentageClicked > 88 ? true : false;
    
    const handleClick = true
    return (

    <StyledBackground>
        <StyledTitle>Relax</StyledTitle>
        <StyledListItem>
            {list.map((element) => <ListItem
                listItemText={element}
                checkedCount={checkedCount}
                setCheckedCount={setCheckedCount}
            />)}
        </StyledListItem>
        <StyledSubmitButton>
            <SubmitButton onClick={handleClick}/>
        </StyledSubmitButton>
       {isWorthy && <StyledMessage>congratulations</StyledMessage>}
    </StyledBackground>)
};



export default Checklist;