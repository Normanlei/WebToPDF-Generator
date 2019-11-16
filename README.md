# github-profilePDF-generator

## Description

Creating a PDF profile is critical for us for future carerer development, since PDF file is an offical viewable and non-editable file that can spread around. For this project, I create a command-line application that dynamically generates a PDF profile throught html profile from a user-input GitHub username. 

Here is how the command-line application functioning as below:
1. The user will be prompted two questions:
    * Enter a valid GitHub Username for Github API triggering
    * Pick a user-preferred color theme for the outcome files
2. Axios is called to grab infomations from user's GitHub API

3. Generate html file and write it to local
4. Convert the local html file to pdf

### Demo
![video](asset/image/demo.gif)



In the process of building application, I have learned:
* Utilize Github repository, familiarize git commands to save all my works onto github

* Familiarize the basic html commands to build the full contents of the site

* Familiarize utilizing <b>node.js</b>, especially:
    * researching various npm
    * inquirer npm -- ask user questions
    * axios npm -- api call
    * util npm -- generate new promise
    * fs npm -- read/write file
    * puppeteer npm -- html-pdf converter





## Credits 

I am here to acknowlage to the Coding Bootcamp of University of Washington along with below falcuties:
* Jason Rosen (Instructor)
* Daniel Mont-Eton (TA)
* Kris Shore (TA)


## License
MIT License

Copyright (c) [2019] [Norman Lei]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
Copyright notice and permission notice shall be included in all copies or substantial portions of the Software.

