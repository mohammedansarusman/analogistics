export const useNameValidity = (empName) =>{
    if(empName.length > 20)
    {
        return "Name should not exceed 20 characters.";
    }
    else if(empName.trim() === "")
    {
        return "Name should not be empty.";
    }
    else if(!/^[a-zA-Z]+$/.test(empName))
    {
        return "Name should only contain alphabetic characters.";
    }
    else
    {
        return "";
    }
}