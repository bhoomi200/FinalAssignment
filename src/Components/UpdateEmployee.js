import React,{useState,useEffect} from 'react';
import './AddEmployee.css';

import { useNavigate, useParams } from 'react-router-dom';
export default function UpdateEmployee() {
    const navigate = useNavigate();
    const  { id }= useParams();
    
    const [formData, setFormData] = useState({
        
        EmpName:"",
        EmpBand:"",
        EmpRole:"",
        EmpDes:"",
        EmpRes:"",

    });
    const handleChange= (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = ()=>{
        const link="http://localhost:5130/api/employee/GetEmployeeByID/";
    fetch (link + id,{
      method:'GET'
    })
    .then(response => response.json())
    .then(employeeFromServer =>{
      console.log(employeeFromServer);
      setFormData(employeeFromServer);
    })
    .catch((error) =>{
      console.log(error);
      alert(error);

    })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const postToUpdate ={
            EmpId:id,
            EmpName:formData.EmpName,
            EmpBand:formData.EmpBand,
            EmpRole:formData.EmpRole,
            EmpDes:formData.EmpDes,
            EmpRes:formData.EmpRes
        };
        const url ="http://localhost:5130/api/employee/UpdateEmployee";
        fetch (url,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(postToUpdate)
          })
          .then(response => response.json())
          .then(responseFromServer =>{
            console.log(responseFromServer);
            
          })
          .catch((error) =>{
            console.log(error);
            alert(error);
      
          });
          navigate('/');

    };
  return (
    <div className='border'>
    <form className='w-100 px-5'>
            <h2 className='mt-3'>Edit employee</h2>
            <div className='mt-3'>
                <label className='h4 form-lable'>Name</label>
                <input value={formData.EmpName} name="EmpName" type="text" className='form-control' onChange={handleChange}/>
            </div>
            <div className='mt-3'>
                <label className='h4 form-lable'>Band</label>
                <input value={formData.EmpBand} name="EmpBand" type="text" className='form-control' onChange={handleChange}/>
            </div>
            <div className='mt-3'>
                <label className='h4 form-lable'>Role</label>
                <input value={formData.EmpRole} name="EmpRole" type="text" className='form-control' onChange={handleChange}/>
            </div>
            <div className='mt-3'>
                <label className='h4 form-lable'>Designation</label>
                <input value={formData.EmpDes} name="EmpDes" type="text" className='form-control' onChange={handleChange}/>
            </div>
            <div className='mt-3'>
                <label className='h4 form-lable'>Responsibilities</label>
                <input value={formData.EmpRes} name="EmpRes" type="text" className='form-control' onChange={handleChange}/>
            </div>
            <button onClick={handleSubmit} className="submitbtn">Submit</button>
            <button onClick={()=>navigate('/')}  className="cancelbtn">Cancel</button>
        </form>
        </div>
  );
}
