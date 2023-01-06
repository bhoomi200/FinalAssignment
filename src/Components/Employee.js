import React,{useState,useEffect} from "react";
import './AddEmployee.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Clock from "./Clock";


export default function Employee() {
    const navigate =useNavigate();
  const [employee, setEmployee]=useState([]);
  const [searchData, setSearchData]=useState([]);
  const [filterValue, setFilterValue]=useState('');
  
  const getEmployee=()=>{
    const url="http://localhost:5130/api/employee/GetEmployee";
    fetch (url,{
      method:'GET'
    })
    .then(response => response.json())
    .then(employeeFromServer =>{
      console.log(employeeFromServer);
      setEmployee(employeeFromServer);
      setSearchData(employeeFromServer);
    })
    .catch((error) =>{
      console.log(error);
      alert(error);

    })
  }
  useEffect(()=>{ 
    getEmployee();
  }, [])

  const handlefilter=(e)=>{
    if(e.target.value == ''){
      setEmployee(searchData)
    }
    else{
      const filterRes = searchData.filter(employee=>employee.EmpDes.toLowerCase().includes(e.target.value.toLowerCase()))
      setEmployee(filterRes)
    }
    setFilterValue(e.target.value)
  }

  function deletePost(EmpId){
    const link="http://localhost:5130/api/";
    fetch (link + 'employee/' + EmpId,{
      method: 'DELETE',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
          .then(responseFromServer =>{
            console.log(responseFromServer);
            getEmployee();
      
    })
    .catch((error) =>{
      console.log(error);
      alert(error);

    });
    
  }
  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">

          <div><Clock/></div>
            <div>
              <div className="search">
                <input type="text"  placeholder="Search" value={filterValue} onInput={(e)=>handlefilter(e)}/>
              </div>
          </div>
          {(employee.length>0 ) && renderEmployeeTable()}

        </div>
      </div>
    </div>
  );

  function renderEmployeeTable(){
    return(
      <div>
      <div className="etable">
        <table className="table">
          <thead>
            <tr>
              <th scope='col'>EmpId </th>
              <th scope='col'>Name</th>
              <th scope='col'>Band</th>
              <th scope='col'>Role</th>
              <th scope='col'>Designation</th>
              <th scope='col'>Responsibilities</th>
              <th scope='col'>Options</th>
            </tr>
          </thead>
          <tbody>
           {employee.map((employee) => (
            <tr key={employee.EmpId}>
              <td scope='row'>{employee.EmpId}</td>
              <td>{employee.EmpName}</td>
              <td>{employee.EmpBand}</td>
              <td>{employee.EmpRole}</td>
              <td>{employee.EmpDes}</td>
              <td>{employee.EmpRes}</td>
              <td>
                <Link  className="btn btn-primary btn-lg mx-3 my-3" to={`/updateemployee/${employee.EmpId}`}>Edit</Link>
                <button  onClick={() => {if(window.confirm("Are you sure you want to delete this")) deletePost(employee.EmpId)}} className="btn btn-danger btn-lg ">Delete</button>
              </td>
            </tr>

           ))}
          </tbody>
        </table>
        </div>
        <div>
              <button className="Addbtn" onClick={()=>navigate('/addemployee')}>Add Employee</button>
      </div>
      </div> 
    )
  }
  


}

