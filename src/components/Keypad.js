// Code Keypad Component Here
import React from 'react';

function Keypad(){
    function keypadChnge() {
        console.log('Entering password...')
    }

    return (
    <input type = 'password' onChange = {keypadChnge}/>
    )
    
}

export default Keypad