import React, { useState, useContext, useEffect } from 'react';
// import {ThemeContext,LocalContext} from './context'
export default function Greeting(props) {
    const [name, setName] = useState('Mary');
    const [surname, setSurName] = useState('Potter');
    const width = useWindowWidth();
    // /    const theme = useContext(ThemeContext);
    // const locale = useContext(LocaleContext);
    useEffect(() => {
        document.title = name + ' ' + surname;
    })
    
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleSurNameChange(e) {
        setSurName(e.target.value);
    }
    return (
        <div>
            <input value={name}
                onChange={handleNameChange} />
            <h1>{name}</h1>
            <input value={surname}
                onChange={handleSurNameChange} />
            <h1>{surname}</h1>
            <h1>{width}</h1>
        </div>
    )
}
// custom hook by convention custom hook always start with use
function useWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize);
        // any effect can optionally return a function
        return ()=>{
        window.removeEventListener('resize', handleResize);
            
        }
    })
    return width;
}