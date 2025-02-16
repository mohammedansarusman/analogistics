export const useNameValidity = (empName) =>{
    if(empName.length > 20)
    {
        return "Name should not exceed 20 characters.";
    }
    else if(empName.trim === null || empName.length === 0)
    {   
        return "Name should not be empty.";
    }
    else if(!/^[a-zA-Z\s]+$/.test(empName))
    {
        return "Name should only contain alphabetic characters.";
    }
    else
    {
        return null;
    }
}

