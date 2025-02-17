export const useIdValidity = (empId,empRecords)=>{
    const data = empRecords.filter((record)=>record.id.includes(empId))
    if(data.length > 0){
        return "Employee ID already exists.";
    }
    if(empId>6){
        return "Employee ID should not exceed 6 digits.";
    }
    else if(empId.trim() === "" || empId.length === 0){
        return "Employee ID should not be empty.";
    }
    else if(!/^[e][0-9]{5}$/.test(empId)){
        return "Employee ID should start with 'e' followed by exactly 5 digits.";
    }
    else{
        return null;
    }
}