# Extending the new dashboard framework for real world applications - .conf 2021

## FYI
this project has been created based on [https://github.com/splunk/dashboard-conf19-examples](https://github.com/splunk/dashboard-conf19-examples) . 
the structure and operation are almost the same.

## Prerequisite 
* Install last version of [nodejs](https://nodejs.org/en/) .
* Install Splunk Enterprise locally and have $SPLUNK_HOME env variable setup.
* In Windows environment, to avoid any file permission issues start the command prompt with "Run as Administrator" to run the commands mentioned in the [Development](#development) section.

## Development
* `npm install` - install dependencies.
* `npm run dev` - start the project in dev mode. This command will symlink the project into your Splunk instance. 
* Restart your Splunk instance if it's the first time you setup this project. `Dashboard framework for real world applications` application should shows up in app bar.


## How to create a new page
* Add an xml file in `resources/default/data/ui/views`.
* Modify `resources/default/data/ui/nav/default.xml` to include your new page.
* Create a new folder under `src/pages/` with the same name of the new xml file.
* Create `index.jsx` and bootstrap the page using `@splunk/react-page`.
* Restart Splunk, your new page should shows up.


# Package the app

Use the following steps to package the Dashboard app. 

Steps:
* Run `npm run prepare_splunk` to prepare an image of the app.
* Run `npx webpack --config ./webpack.config.js --bail` to package the app with NodeJS.


