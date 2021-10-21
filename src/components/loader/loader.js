import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loader(){
    const style={
        display:"flex",
        height:"100vh",
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    }
    return(
        <div style={style}>
            <Spinner animation="border" size="xg"/>
        </div>
    )
}
