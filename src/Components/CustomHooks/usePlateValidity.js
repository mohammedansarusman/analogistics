export const usePlateValidity = (plate,record) => {
    const numberOfRecords = record && record.filter((x)=>x.plate===plate);
    if (plate.trim() === "") {
      return "Field should not be empty.";
    } else if (plate.length <= 5) {
      return "Text size should be greater than 5";
    } else if (numberOfRecords.length > 0) {
        return "Number plate already exists";
    }else{
        return null;
    }   
  };
  