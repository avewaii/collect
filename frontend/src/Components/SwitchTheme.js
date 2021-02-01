import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//const fs = require('fs');

function SwitchTheme() {

    let [theme, setTheme] = useState('light');

    function changeTheme() {
        if(theme == 'light') {
            alert('dark');
            setTheme('dark')
        } else {
            alert('light');
            setTheme('light')
        }
    }

    return (
        <div className="custom-control custom-switch">
            <input onChange={(e) => changeTheme(e)} type="checkbox" className="custom-control-input" id="darkSwitch" />
            <label className="custom-control-label" for="darkSwitch">Theme</label>
        </ div >
    )
}

export default SwitchTheme;