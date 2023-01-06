const Validation =(formData)=>{
    let errors = {}

    if(!formData.EmpName){
        errors.EmpName = "Name is required"
    }
    else if(!formData.EmpBand){
        errors.EmpBand = "Band is required"
    }
    else if(!formData.EmpRole){
        errors.EmpRole = "Role is required"
    }
    else if(!formData.EmpDes){
        errors.EmpDes = "Des is required"
    }
    else if(!formData.EmpRes){
        errors.EmpRes = "Res is required"
    }
    return errors;
}

export default Validation;
