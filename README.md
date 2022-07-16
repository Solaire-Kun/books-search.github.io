<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#languages-used">Languages Used</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#contact-me">Contact Me</a></li>
    <li><a href="License">License</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

![preview](/src/img/preview.png)

A simple website contacting [openlibrary.org](https://openlibrary.org) API and searching books for [start2impact](https://www.start2impact.it) JavaScript Advanced Project.

<!-- USAGE -->
## Usage

In the search field, the user must input a book name and press **Enter** or click the **Search** button, <br>
After that, the user need to wait a few seconds the website to finish the search, <br>
After the searching has finished the website will display only 10 results, the user can view the book name, author, and a link to view the clicked book details. 

<!-- LANGUAGES USED -->
## Languages Used

- **JavaScript with Lodash _.get library**
- **HTML**
- **Bootstrap 5 CSS**
- **Webpack**

- **Webpack Dependencies:**
```
@babel/core: 7.18.6
@babel/preset-env: 7.18.6
babel-loader: 8.2.5
html-webpack-plugin: 5.5.0
webpack: 5.73.0
webpack-cli: 4.10.0
webpack-dev-server: 4.9
lodash.get: 4.4.2
```

<!-- Installation -->
## Installation

![installation](/src/img/installation.png) <br>
Click on "Code" and "Download as ZIP" and extract it. <br>
Install [Visual Studio Code](https://code.visualstudio.com). <br>
Install [Node.js](https://nodejs.org/) along with Visual Studio Code Extensions. <br>
Once inside Visual Studio Code open the terminal install webpack with the following **DEV** dependencies:
```
@babel/core
@babel/preset-env
babel-loader
html-webpack-plugin
webpack
webpack-cli
webpack-dev-server
```
Then install ```lodash.get``` as non-dev depencency.

The available terminal commands to use are: <br>
```
  npm run build
```
^ this will create the **dist** folder with ```script.js``` and ```index.html``` file bundled and ready to publish.
```
  npm run dev
```
^ only use if you are a developer and want to debug / test your code.

<!-- CONTACT -->
## Contact Me

[Send Email](mailto:vinciguerrawork03@hotmail.com) <br>
[Project Link](https://github.com/Solaire-Kun/books-search.github.io) <br>
[Github Pages Link](https://solaire-kun.github.io/books-search.github.io/)

<!-- LICENSE -->
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br>
MIT License

Copyright (c) 2022 Solaire-Kun

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