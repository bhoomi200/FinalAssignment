import React,{useState,useEffect} from 'react';
import './AddEmployee.css';
import { useNavigate } from 'react-router-dom';
import validation from './Validation';



export default function AddEmployee(props) {
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
        EmpName :"",
        EmpBand:"",
        EmpRole:"",
        EmpDes:"",
        EmpRes:""
    });
    const [formData, setFormData] = useState(initialFormData);
    const [errors,setErrors]=useState({})
   

    const handleChange= (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
        

    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        setErrors(validation(formData));   
    };

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && (formData.EmpName !== "" && formData.EmpBand !== "" && formData.EmpRole !== "" && formData.EmpDes !== "" && formData.EmpRes!== "")){
            
            const postToCreate ={
                EmpId:0,
                EmpName:formData.EmpName,
                EmpBand:formData.EmpBand,
                EmpRole:formData.EmpRole,
                EmpDes:formData.EmpDes,
                EmpRes:formData.EmpRes
            };
            const url ="http://localhost:5130/api/employee/AddEmployee";
            fetch (url,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(postToCreate)
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
        }
    },[errors])
  return (
    <div className='border'>
    <form onSubmit={handleSubmit} className='px-5'>
            <h2 className='mt-3'>Add Employee</h2>
            <div className='mt-3'>
                <label className='h4 form-lable'>Name</label>
                <input value={formData.EmpName} name="EmpName" type="text" className='form-control' onChange={handleChange}/>
                {errors.EmpName && <p style={{color:"red",fontSize:"13px"}}>{errors.EmpName}</p>}
            </div>
            <div className='mt-3'>
                <label className='h4 form-lable'>Band</label>
                <input value={formData.EmpBand} name="EmpBand" type="text" className='form-control' onChange={handleChange}/>
                {errors.EmpBand && <p style={{color:"red",fontSize:"13px"}}>{errors.EmpBand}</p>}
            </div>
            <div className='mt-3'>
                <label className='h4 form-lable'>Role</label>
                <input value={formData.EmpRole} name="EmpRole" type="text" className='form-control' onChange={handleChange}/>
                {errors.EmpRole && <p style={{color:"red",fontSize:"13px"}}>{errors.EmpRole}</p>}
            </div>
            <div className='mt-3'>
                <label className='h4 form-lable'>Designation</label>
                <input value={formData.EmpDes} name="EmpDes" type="text" className='form-control' onChange={handleChange}/>
                {errors.EmpDes && <p style={{color:"red",fontSize:"13px"}}>{errors.EmpDes}</p>}
            </div>
            <div className='mt-3'>
                <label className='h4 form-lable'>Responsibilities</label>
                <input value={formData.EmpRes} name="EmpRes" type="text" className='form-control' onChange={handleChange}/>
                {errors.EmpRes && <p style={{color:"red",fontSize:"13px"}}>{errors.EmpRes}</p>}
            </div>
            <button type='submit' className="submitbtn">Submit</button>
            <button onClick={()=>navigate('/')} className="cancelbtn">Cancel</button>
        </form>
        </div>
  );
}
