# Demlik (boilerplate)

# Getting started

1. Before you start working with demlik, you first need to setup your environment. Make sure you have the following installed:
    * [Git](https://git-scm.com/downloads)
    * [NodeJs and Npm](https://nodejs.org/en/download/current/)

2. Once your environment is prepared, open a command prompt (terminal) and type in the following:

    ```sh
    git clone https://github.com/aykutsimseks/demlik.git
    cd demlik
    npm install
    npm start
    ```

3. Then open your [http://localhost:8080/](http://localhost:8080/) to see the included small users app.
Congratulations! You can now write react redux code.

# Change host and/or port

If you don't want to use localhost on port 8080, you can change it in `package.json` and `webpack.config.js`.


# Build your own app

1. Open `webpack.config.js` and change the `app_root` value from `src_users` to `src`

2. Run `npm start`

3. Congratulations! You now have a blank `Hello world` starting app


# Scripts

Besides the `start` script, there are also other scripts

|`npm run <script>`|What it does|
|------------------|------------|
|`start`|Starts the app at [http://localhost:8080/](http://localhost:8080/). The bundle js/css files are stored in memory|
|`test`|Starts the unit testing using all the files found in the `test` folder|
|`test-watch`| Starts the unit testing and watches for changes to re-run the tests|
|`build-dev`|Builds the js/css bundle files in the `public` folder. Adds debugging code for development|
|`build-prod`|Builds the js/css bundle minified files in the `public` folder|


# License

This project is licensed under the MIT license, Copyright (c) 2017 Aykut Simsek.
