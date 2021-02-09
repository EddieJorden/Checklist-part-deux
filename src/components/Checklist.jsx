import React from 'react';

const ListItems = () => (['question a', 'question b'])

const Checklist = () => (
    <div >
        <ol>
        <ListItems />
        </ol>
    </div>
);



export default Checklist;