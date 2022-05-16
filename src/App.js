import React from 'react'
import WelcomePage from './components/WelcomePage';
import Quiz from './components/Quiz'

export default function App() {
  const [frontPage, setFrontPage] = React.useState(true)
  const [questionsApi, setQuestionsApi] = React.useState()
   

  React.useEffect(() => {

      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(response => response.json())
      .then(data => setQuestionsApi(data.results))
  }, [])

  function startQuiz() {
    setFrontPage(false)
  }
  return (
    <>
    { frontPage ? <WelcomePage onClick={startQuiz}/> : <Quiz data={questionsApi}/>}
    </>
  );
}


