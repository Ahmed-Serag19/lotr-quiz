markdown

# LOTR Quiz App

This is a Lord of the Rings themed quiz application built with React. The questions are stored in a JSON file and served using json-server.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ahmed-Serag19/lotr-quiz.git
   cd lotr-quiz
   Install dependencies
   ```

bash

npm install
Running the Application
Start the React application

bash

npm start
This will start the React app and open it in your default web browser.

Start the JSON server

In a new terminal window or tab, run:

bash

npm run server
This will start the json-server on port 8000 and serve the questions from src/data/questions.json.

Project Structure
css

lotr-quiz/
├── public/
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── Main.js
│ │ ├── Loader.js
│ │ ├── Error.js
│ │ ├── StartScreen.js
│ │ ├── Question.js
│ │ ├── NextButton.js
│ │ ├── Progress.js
│ │ ├── FinishScreen.js
│ │ ├── Timer.js
│ ├── data/
│ │ ├── questions.json
│ ├── App.js
│ ├── index.js
├── README.md
├── package.json
└── .gitignore
Dependencies
React: A JavaScript library for building user interfaces.
React-DOM: Provides DOM-specific methods that can be used at the top level of a web app.
React-Scripts: Scripts and configuration used by Create React App.
json-server: A full fake REST API with zero coding.
Scripts
npm start: Runs the app in development mode.
npm run build: Builds the app for production.
npm run test: Launches the test runner in interactive watch mode.
npm run eject: Removes the single build dependency from your project.
npm run server: Starts the json-server to serve the questions from src/data/questions.json.
Contributing
Contributions are welcome! Please open an issue or submit a pull request.
