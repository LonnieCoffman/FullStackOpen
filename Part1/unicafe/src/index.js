import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text, onClick }) =>
    <button onClick={onClick}>{text}</button>

const Statistic = ({ text, value }) =>
    <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const average = total === 0 ? 0 : (good * 1 + bad * -1) / total
    const positive = (total === 0 ? 0 : good / total * 100).toString().concat(' %')

    if (total === 0) return (
        <div>
            <h1>statistics</h1>
            <div>No Feedback Given</div>
        </div>
    )

    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text='Good' value={good} />
                    <Statistic text='Neutral' value={neutral} />
                    <Statistic text='Bad' value={bad} />
                    <Statistic text='All' value={total} />
                    <Statistic text='Average' value={average} />
                    <Statistic text='Positive' value={positive} />
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const addGood = () => setGood(good + 1)
    const addNeutral = () => setNeutral(neutral + 1)
    const addBad = () => setBad(bad + 1)

    return (
        <div>
            <h1>give feedback</h1>
            <Button text='good' onClick={addGood} />
            <Button text='neutral' onClick={addNeutral} />
            <Button text='bad' onClick={addBad} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

