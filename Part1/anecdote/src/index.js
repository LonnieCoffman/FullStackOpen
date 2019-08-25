import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const [mostVotes, setMostVotes] = useState(0)

    const addVotes = (idx) => () => {
        const newVotes = [...votes]
        newVotes[idx]++
        setVotes(newVotes)
        setMostVotes(newVotes.indexOf(Math.max(...newVotes)))
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>{anecdotes[selected]}</div>
            <div>has {votes[selected]} votes</div>
            <button onClick={addVotes(selected)}>Vote</button>
            <button onClick={() => setSelected(Math.floor(Math.random() * 6))} >Next Anecdote</button>
            <h1>anecdote with most votes</h1>
            <div>{anecdotes[mostVotes]}</div>
            <div>has {votes[mostVotes]} votes</div>
        </div >
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)