import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

export const FreeDictionary = () => {

    const [words, setWords] = useState([])
    const [input, setInput] = useState(null)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + input)
        .then(res => res.json())
        .then(data =>{
            return setWords(data)
            console.log(words)
        })
        .catch(err => setHasError(true))
    },[input])

    function searchQuery(evt) {
        const value = evt.target.value
        setInput(value)
        console.log(value)
    }

    return (
        <div>
            Dictionary
            <form>
               <input type='text' onSubmit={evt => searchQuery(evt)} />
               <input type='Submit' value='submit' />
            </form>
            {input === null ? <div>No searched word</div>: words.map(word => {return( <div>{word.word}</div>)})}
           
        </div>
    )
}