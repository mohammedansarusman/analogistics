// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
export const useIdValidity = (empId,empRecords)=>{
    const lang = useSelector(store=>store.navigation.lang)
    const data = empRecords.filter((record)=>record.id === empId);
    // const empSwitch = useSelector((store)=>store.registration.empidSwitch)
    // the ( data.length && empSwitch)  empSwitch is removed 
    if(data.length > 0 ){
        if(lang === 'en'){
            return "Employee ID already exists."
        }else if(lang === 'ma'){
            return "ജീവനക്കാരന്റെ ഐഡി ഇതിനകം നിലവിലുണ്ട്."
        }else{
            return "कर्मचारी आईडी पहले से मौजूद है।  "    
        }
    }
    else if(empId.length>6){
        if(lang === 'en'){
            return "Employee ID should not exceed 6 digits."
        }else if(lang === 'ma'){
            return "ജീവനക്കാരന്റെ ഐഡി 6 അക്കങ്ങൾ കവിയരുത്."
        }else{
            return "कर्मचारी आईडी 6 अंकों से अधिक नहीं होनी चाहिए।"
        }
    }
    else if(empId.trim() === "" || empId.length === 0 ){
        if(lang === 'en'){
            return "Employee ID should not be empty."
        }else if(lang === 'ma'){
            return "ജീവനക്കാരന്റെ ഐഡി ഒഴിവാകരുത്."
        }else{
            return "कर्मचारी आईडी खाली नहीं होनी चाहिए।"
        }
    }
    else if(!/^[e][0-9]{5}$/.test(empId)){
        if(lang === 'en'){
            return "Employee ID should start with 'e' followed by exactly 5 digits.";
        }else if(lang === 'ma'){
            return "ജീവനക്കാരന്റെ ഐഡി 'e' എന്നതിലൂടെ ആരംഭിക്കണം, അതിന് പിന്നാലെ കൃത്യമായി 5 അക്കങ്ങൾ വരണം."
        }else{
            return "कर्मचारी आईडी 'e' से शुरू होनी चाहिए और उसके बाद ठीक 5 अंक होने चाहिए।"
        }
    }
    else{
        return null;
    }
}