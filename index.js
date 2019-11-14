const questions = [
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        type: "list",
        message: "Pick your favorite color theme:",
        name: "color",
        choices: ["green", "blue", "pink", "red"]
    }
];

const util = require("util");
const pdf = require("html-pdf");
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
let githubURL;
let username;
let usercolor;
let htmlfile;
let html;

// function convertToPDF (html, pdfname){
//     var options = { format: 'A4' };
//     pdf.create(html, options).toFile(pdfname, function(err, res) {
//         if (err) return console.log(err);
//         console.log(res);
//       });
// }

function convertToPDF(html) {
}



async function writeToFile(fileName, data) {
    let writefileAsync = util.promisify(fs.writeFile);
    await writefileAsync(fileName, data);
    html = fs.readFileSync('./index.html', 'utf8');
    //convertToPDF(html, "index.pdf");
    convertToPDF(html);
}

function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            username = userInput.username;
            usercolor = userInput.color;
            username = username.toLowerCase().trim();
            // console.log(usercolor);
            // console.log(username);
            githubURL = `https://api.github.com/users/${username}`;
            return githubURL;
        })
        .then(function (githubURL) {
            callAxios(githubURL);
        });
}

function callAxios(url) {
    axios.get(url)
        .then(function (response) {
            response.data.color = usercolor; //adding data color property
            htmlfile = generateHTML(response.data);
            writeToFile("index.html", htmlfile);
        })
}

init();
