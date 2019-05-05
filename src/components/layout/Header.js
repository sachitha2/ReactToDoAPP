import React  from 'react';

function Header (){
    return(
        <header style={headeStyle}>
            <h1> Todo list</h1>
        </header>
    )
}
const headeStyle = {
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
export default Header;