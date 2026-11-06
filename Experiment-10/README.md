# Experiment 10: HTML Form Request Handling using Node.js and MongoDB

**Name:** Sivasanand  
**Register Number:** URK24CS9062

## Aim
Create a Node.js server that shows a user registration form, stores the submitted details in MongoDB and displays them from the database in a table.

## Exercises

| # | File | Description | Live Demo |
|---|------|-------------|-----------|
| 1 | [Ex-10-1.html](Ex-10-1.html) | Static view of the Node.js + MongoDB code and its expected output (the real app is in app/) | [Open](https://sivasanand.github.io/Web-Technology-Lab/Experiment-10/Ex-10-1.html) |

## Topics Covered
Node.js http module, POST form data, URLSearchParams, MongoDB insertOne/findOne

## Live Link
https://sivasanand.github.io/Web-Technology-Lab/Experiment-10/Ex-10.html

## Question
[Experiment-10-Question.pdf](Experiment-10-Question.pdf)

## Running the Node.js app

```
cd app
npm install
node app.js
```

MongoDB must be running on `mongodb://localhost:27017`. The server uses port 6000 as given in the question. Chrome and Firefox block port 6000 as unsafe, so if the page does not open, set `PORT=3000` and open http://localhost:3000.

Files: [app/app.js](app/app.js), [app/home.html](app/home.html), [app/package.json](app/package.json)
