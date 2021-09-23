import React from 'react';
import { addToDb, removeFromDb } from '../fakeDb/fakeDb';
import "./DeveloperInfo.css"

const DeveloperInfo = (props) => {
    const {name,age,job,salary,id} = props.developer;

    // onclick Handler add to localStorage
    const clickHandler=(id)=>{
        // console.log("clicked",id)
      // add to localStorage as add to database 
      addToDb(id);

    }
    // onclick handler remove from localStorage
    const clickHandler2=(id)=>{
        removeFromDb(id);
    }
    return (
      <div>
            <div className="developerStyle">
            <h4>Name: {name}</h4>
            <p>Age: {age}</p>
            <span><small>Salary: {salary}</small></span>
            <h5>{job}</h5>
            <button className="btn btn-primary me-1" onClick={()=>clickHandler(id)}>Add</button>
            <button className="btn btn-secondary" onClick={()=>clickHandler2(id)}>Delete</button>
        </div>
      </div>
    );
};

export default DeveloperInfo;