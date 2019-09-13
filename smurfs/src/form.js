import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from './action';

const Form = (props) => {
    
    const [item, setItem] = useState({name: "", age: "", height: ""});
    const handleChange = event => setItem({
        ...item,
        [event.target.name]:event.target.value
    });

    const handleSubmit = event => {
        event.preventDefault();
        props.addSmurf(item);
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <input type ="text" 
                    name="name"
                    placeholder="Smurf Name"
                    value={item.name}
                    onChange={handleChange}
                    />
            <input type ="text" 
                    name="age"
                    placeholder="Smurf Age"
                    value={item.age}
                    onChange={handleChange}
                    />
            <input type ="text" 
                    name="height"
                    placeholder="Smurf Height"
                    value={item.height}
                    onChange={handleChange}
                    />
            <button type="submit">Add Smurf</button>
        </form>
    )
};

export default connect(null, {addSmurf})(Form);