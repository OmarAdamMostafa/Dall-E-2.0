# Dall-E-2.0

![Current Version](https://img.shields.io/badge/version-v0.1-blue)
![GitHub contributors](https://img.shields.io/github/contributors/madhur-taneja/README-Template)

Open and view the Project using the `.zip` file provided or at my [GitHub Repository]

The project is also hosted on [Official Site]

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

* `master` contains aggregate code of all branches

```
Dall-E-2.0
	├── README.md
	├── .gitignore
	├── server
	│   ├── mongoDB
        │   │	├── models
        │   │   │	└── post.js
        │   │	└── connect.js        
	│   ├── routes
        │   │	├── dalleRoutes.js
        │   │	└── postRoutes.js        
	│   ├── index.js
	│   ├── package-lock.json
	│   └── package.json
	└── client
		├── public
		│	└── ...
		├── src
		│	├── assets
              	│	│	└── ... 
		│	├── components
              	│	│	└── ...     
 		│	├── constants
              	│	│	└── ...    
 		│	├── pages
               	│	│	└── ...   
 		│	├── utils
               	│	│	└── ...   
		│	├── App.css
 		│	├── App.jsx
 		│	├── index.css
		│	└── main.jsx
		├── package-lock.json
		├── package.json
		├── postcss.config.cjs
		├── index.html
		├── tailwind.config.cjs
		└── vite.config.js
```

### Tools Required

* Any web development IDE can be used, but I would recommend Visual Code.
* React, React-DOM, React-Router-DOM, File-Saver and  Tailwind CSS.
* Third Party Tools: Mongoose, OpenAI, Cloudinary, Dotenv, Express, Nodemon and Cors.


### Installation

Note: All installations are done using npm.

* Installing React-DOM
  ```
    npm i react-dom
  ```

* Installing React-Router-DOM
  ```
    npm i react-router-dom
  ```

* Installing Mongoose
  ```
	npm i mongoose
  ```

* Installing OpenAI
  ```
	npm i openai
  ```

* Installing Cloudinary
  ```
	npm i cloudinary
  ```

* Installing Dotenv
  ```
	npm i react-dotenv
  ```

* Installing Express
  ```
	npm i express
  ```

* Installing Nodemon
  ```
	npm i nodemon
  ```
  
* Installing Cors
  ```
	npm i cors
  ```
  

## Running the App
There are two ways in running the app:

* Client Side:
  ```
    npm run dev
  ```

* Server Side:
  ```
    npm start
  ```

## Deployment

The app is deployed on **Netlify**.

### Steps in Deploying App

1. Create Netlify account.
2. Go to *Sites*.
3. Click on *Add New Site*.
4. Select *Import an existing project*.
5. Use any of the Git Providers (Note: I'll continue with GitHub as it's the most common used)
6. After connecting to your GitHub account, choose the existing repositiry you would like to deploy.
7. Click on *Deploy Site*.
8. Wait for site to build and deploy.

## Authors

#### Omar Adam Mostafa
* [GitHub]
* [LinkedIn]

## License

`Dall-E-2.0` is open source software [licensed as MIT][license].

## Acknowledgments

* This app was developed through a tutorial on Udemy called **Build and Deploy a Full Stack MERN AI Image Generation App | Midjourney & DALL-E Clone** by JavaScript Mastery.

[//]: # (HyperLinks)

[GitHub Repository]: https://github.com/OmarAdamMostafa/Dall-E-2.0
[Official Site]: https://dalle-v2-omar-adam.netlify.app/

[GitHub]: https://github.com/OmarAdamMostafa
[LinkedIn]: https://www.linkedin.com/in/omar-adam-mostafa-a445a3259/

[license]: https://github.com/OmarAdamMostafa/Dall-E-2.0/blob/main/license
