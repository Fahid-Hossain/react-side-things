import React, { useEffect, useState } from 'react';
import DeveloperInfo from '../DeveloperInfo/DeveloperInfo';
import "./Main.css"

const Main = () => {
    //useState for developer Data
    const [developers,setDevelopers]=useState([]);
    //useEffect for fetch developer data
    useEffect(()=>{
        fetch("./developerData.json")
        .then(res=>res.json())
        .then(data=>setDevelopers(data))
    },[])

    // reducer for total sum of salary
const reducer = (previous,current)=>previous+current.salary;
const salaryTotal = developers.reduce(reducer,0)

    return (
        <div className="border border-primary m-4 p-1 row">
            <h1>Developers World</h1>
            <div className="col-md-8 border border-dark p-1">
                 <h3>Total Developers : {developers.length} </h3>

                 <div className="developers">
                 {
                     developers.map(developer=><DeveloperInfo developer={developer} key={developer.id}></DeveloperInfo>)
                 }

                 </div>
            </div>
            <div className="col-md-4 border border-dark p-1">
                 <h3>Salary Total</h3><hr />  
                 <h4>totalSalary: {salaryTotal}</h4>          
            </div>
        </div>
    );
};

export default Main;