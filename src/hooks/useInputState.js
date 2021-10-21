import {useState} from 'react';

function useInputState(initValue){
    const[value,setValue] = useState(initValue);
    const changeValue = (value)=>{
        setValue(value);
    }
    const reset = ()=>{
        setValue(initValue)
    }
    return[value,changeValue,reset]
}

export default useInputState;