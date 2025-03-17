import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const DisplayReview = ({type, count}) => {return(<div>{type} {count}</div>)}

const DisplaySection = ({text}) => (<h1>{text}</h1>)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const good_text = "good"
  const neutral_text = "neutral"
  const bad_text = "bad"

  const addGood = () => {
    setGood(good+1) 
  }

  const addNeutral = () => {
    setNeutral(neutral+1) 
  }

  const addBad = () => {
    setBad(bad+1) 
  }


  return (
    <div>
      <DisplaySection text="Feedback page"/>
   
      <Button text={good_text} onClick={addGood}/>
      <Button text={neutral_text} onClick={addNeutral}/>
      <Button text={bad_text} onClick={addBad}/>

      <DisplaySection text="Statistics"/>
      <DisplayReview type={good_text} count={good}/>
      <DisplayReview type={neutral_text} count={neutral}/>
      <DisplayReview type={bad_text} count={bad}/>
    </div>


  )
}

export default App