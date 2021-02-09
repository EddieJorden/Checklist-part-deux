import React, {useState} from 'react';

const ListItem = ({listItemText, checkedCount, setCheckedCount}) => {
	const [checked, setChecked] = useState(false);
	const handleOnChange = () => {
		!checked && setCheckedCount(checkedCount+1);
		checked && setCheckedCount(checkedCount-1);
		setChecked(!checked)
	}

    return (

    <div>
    <input type='checkbox' onChange={handleOnChange}/>
    <label>{listItemText}</label>
    </div>)
}
    
    

export default ListItem; 