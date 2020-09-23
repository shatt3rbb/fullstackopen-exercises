import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Uint8Array(anecdotes.length))
  const maxindex = votes.indexOf(Math.max(...votes));

  const generateAnecdote = () => {
    let rindex = Math.floor(Math.random() * (anecdotes.length) )
    while(rindex===selected) {
      rindex = Math.floor(Math.random() * (anecdotes.length) )
    }
    setSelected(rindex)
  }

  const applyVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)
    }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}.
      <br />
      has {votes[selected]} votes
      <br />
      <br />
      <Button onClick={generateAnecdote} text="GenerateAnecdote" />
      <Button onClick={applyVote} text="Vote" />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[maxindex]}.
      <br />
      has {votes[maxindex]} votes
    </div>
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
