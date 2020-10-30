import React, {useState, useEffect, useRef} from 'react'
import './Block.css'

import {Card, CardContent} from '@material-ui/core'
function Block(props){
 
    return (
        <div>
            <Card style = {{backgroundColor: 'transparent'}}>
                <CardContent style = {{color: 'white'}}>
                  
                  <div className = "planetInfo">
                  <h2>{props.name}</h2>
                   <img id = {props.name} onClick = {props.onImageClick} className = 'cardImage' src = {props.image}/>
                  </div>
                
                </CardContent>
            </Card>
            </div>
      
    )
    
}


export default Block;
