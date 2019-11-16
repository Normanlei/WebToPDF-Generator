//Global Definition
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
const puppeteer = require('puppeteer');
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");

let githubURL;
let username;
let usercolor;
let htmlfile;
let html;

// initialize with question prompt
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            username = userInput.username;
            usercolor = userInput.color; 
            username = username.toLowerCase().trim();
            githubURL = `https://api.github.com/users/${username}`;
            return githubURL;
        }, function(error){
            console.log("Enter valid inputs!",error);
        })
        .then(function (githubURL) {  //call github API
            callAxios(githubURL);
        });
}


function callAxios(url) {
    axios.get(url)
        .then(function (response) {
            response.data.color = usercolor; //adding data color property
            htmlfile = generateHTML(response.data);  // return html from generateHTML function
            writeToFile(`${username}_profile.html`, htmlfile); // write to .html file
        })
        .catch(function(error){
            console.log("Make sure input a valid username of your github",error);
        })
}

async function writeToFile(fileName, data) {
    let writefileAsync = util.promisify(fs.writeFile);
    await writefileAsync(fileName, data, error=>{
        if (error) console.log(error);
    });
    console.log("html file is generated successfully!!!");
    html = fs.readFileSync(`${username}_profile.html`, 'utf8');
    convertToPDF(html, `${username}_profile.pdf`);
}


async function convertToPDF(html,pdfname) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html,{waitUntil: 'networkidle0'});
        await page.pdf({ path: pdfname, format: 'A4' },error=>{
            if (error) console.log(error);
        });
        console.log("pdf file is generated successfully!!!")
        await browser.close();
}

//trigger
init();
