import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getUsers } from "../../services/services";

function Owners(props){
    const[owners,setOwners]=useState([]);
    useEffect(()=>{
        getUsers().then(res=>{
            setOwners(res.data.data)
        }).catch(err=>{
            console.log(err)
        }) 
    },[])
    return(  
        <Form.Group> 
            <Form.Select onChange={(e)=>props.selectOwner(e)} disabled={props.disabled ? true : false} required>
            <option hidden>Select user</option>
            {owners.map(o=> <option key={o.id} value={o.id}>{`${o.firstName} ${o.lastName}`}</option> )}
            </Form.Select>
        </Form.Group>
    )
}

export default Owners;