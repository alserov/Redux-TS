import React, {SyntheticEvent, useState} from 'react';
import './App.css';
import {List} from "./components/List";
import {listItemAction} from "./utilities/list"
import {useAppDispatch} from "./store/store";

function App() {
    const [inputValue, setInputValue] = useState<string>('')
    const [theme, setTheme] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const handleAddBtn = (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(listItemAction(inputValue))
        setInputValue('')
    }
    return (
        <div className={`${theme ? 'bg-sky-800' : 'bg-amber-300'} w-screen min-h-screen`}>
            <input type="text" value={inputValue} onInput={(e) => setInputValue(e.currentTarget.value)}/>
            <button onClick={(e: SyntheticEvent) => handleAddBtn(e)} className={'bg-sky-400 w-20'}>Add</button>
            <button onClick={() => setTheme(prevState => !prevState)}>Change theme</button>
            <List/>
        </div>
    );
}

export default App;
