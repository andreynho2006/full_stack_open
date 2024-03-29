import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.btnClick}>next anecdote</button>
    )
}
const VoteButton = props => {
    return (
        <button onClick={props.btnVote}>vote</button>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))
  console.log(votes)
  const buttonClick = () => {
      return setSelected(Math.floor(Math.random() * anecdotes.length));
  }
  const voteClick = value => {
      const copy = [ ...votes ]
      copy[value] += 1
        setVotes(copy);
  };

  const mostVoted = votes => {
      return votes.indexOf(Math.max(...votes));
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br />
      <VoteButton btnVote={() => voteClick(selected)} />
      <Button btnClick={buttonClick } />
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[mostVoted(votes)]}</p>
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