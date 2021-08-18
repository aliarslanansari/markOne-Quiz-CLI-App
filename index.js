var readlineSync = require('readline-sync')

var scores = 0

var highestScore = {
  name: 'ALI ZAKWAN',
  score: 4,
}

var questionBank = [
  {
    question: 'In which country was Elon Musk born?',
    answer: 'South Africa',
  },
  {
    question:
      'Ever resourceful, Musk taught himself computer programming at what age? (Type in word)',
    answer: 'ten',
  },
  {
    question:
      'Aged 12, Musk sold his first computer program for $500. It was a video game called what?',
    answer: 'Blastar',
  },
  {
    question:
      'Aged 17, Musk left his homeland and moved to Canada. This saved him from what?',
    answer: 'National Service',
  },
  {
    question:
      'In 1999, Musk founded X.com, which merged with Confinity 2 years later to become which online business?',
    answer: 'PayPal',
  },
]

function welcome() {
  var userName = readlineSync.question('What is your name? ')
  console.log('Welcome ' + userName + ' to do you know ELON MUSK?')
}

function askQuestion(question, answer) {
  var resAnswer = readlineSync.question(question)
  if (resAnswer.toLowerCase() === answer.toLowerCase()) {
    scores = scores + 1
    console.log('Correctly answered | Current Score: ' + scores)
  } else {
    console.log('Naah! Wrong Answer | Current Score: ' + scores)
  }
  console.log('--------------')
}

function play() {
  for (var i = 0; i < questionBank.length; i++) {
    var currentQuestion = questionBank[i]
    askQuestion(currentQuestion.question, currentQuestion.answer)
  }
}

function outro() {
  console.log('Your Final SCORE: ', scores)
  console.log(
    'Current Highest Score: ' +
      highestScore.score +
      ' made by ' +
      highestScore.name
  )
  if (scores > highestScore.score) {
    console.log(
      'Congratulations!!! You have made new record by scoring ' + scores
    )
    console.log('Contact me to update the this')
  }
}

welcome()
play()
outro()
