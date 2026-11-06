# Experiment 10: HTML Form Request Handling using Node.js and MongoDB

**Aim:** Create a Node.js server that shows a user registration form, stores the submitted details in MongoDB and displays them in a table.

## Solution

[Ex-10.html](Ex-10.html) - opens the working page directly.

## Node.js App

The real server is in [app/](app/) ([app.js](app/app.js), [home.html](app/home.html), [package.json](app/package.json)).
It serves the form at `/`, and on submit (`POST /server`) stores the data in MongoDB (`mydb.users`) and shows it in a table read back from the database.

```
cd Experiment-10/app
npm install
node app.js
```

Start MongoDB on `mongodb://localhost:27017` first, then open http://localhost:6000. Browsers block port 6000, so if it does not open use another port: `$env:PORT=3000; node app.js` (PowerShell) and open http://localhost:3000.

The solution page above is a browser version of the same form and result table, since GitHub Pages cannot run Node.js.

## Live Link

https://sivasanand.github.io/Web-Technology-Lab/Experiment-10/Ex-10.html
