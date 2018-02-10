# ng-interview — a sample AngularJS app


## TL;DR

1. Fork the [ng-interview][ng-interview] repository on GitHub
2. Run `npm install`
3. Run `npm start`
4. Browse to [http://localhost:8000](http://localhost:8000/index.html)


## Introduction

This project is a simple [AngularJS](http://angularjs.org/) web app for front end developer candidates,
based on the [angular-seed](https://github.com/angular/angular-seed) project.

The project is preconfigured to install the Angular framework and a bunch of development and testing tools
for quickly setting up your development environment.

The app doesn't do much, that part is up to the applicant.


## Getting Started

To get you started you can simply fork the [ng-interview][ng-interview] repository, clone it locally, and install the dependencies.

### Prerequisites

You need to have git installed locally so you can clone your fork of the ng-interview repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test ng-interview. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Fork and Clone ng-interview

Fork the [ng-interview][ng-interview] repository on GitHub.
If you are unfamiliar with forking, [follow these instructions](http://lmgtfy.com/?q=how+to+fork+a+repo+in+github).

Then clone your repository locally using [git][git]:

```
git clone https://github.com/YOUR-USERNAME/ng-interview.git
cd ng-interview
```

*Note: Be sure to replace the URL with the correct URL to your forked repository.*

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
ng-interview changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.


## Structure and Patterns

### Folder Structure

The application uses a folders-by-feature structure to keep the code modular. 

```
app/                           --> all of the source files for the application
  components/                    --> all app-specific components
    current-date/                  --> a simple sample component
      current-date.directive.js      --> directive to insert the current date in an element
      current-date.directive.spec.js --> unit tests for current date directive
      current-date.module.js         --> current date module declaration
      current-date.service.js        --> simple service for returning the current date
  services/                      --> all app-specific services
    api/                           --> all services for interacting with APIs
      students/                      --> service for interacting with students API
        students.module.js             --> students service module declaration
        students.service.js            --> implementation of students service
        students.service.spec.js       --> unit tests for students service
      api.module.js                  --> api module declaration
  students/                      --> students view template and logic
    students.html                  --> the partial template
    students.config.js             --> configuration and routes for the students module
    students.controller.js         --> the controller logic
    students.controller.spec.js    --> unit tests for the controller
    students.module.js             --> students module declaration
  app.config.js                  --> main configuration of application
  app.module.js                  --> main application module declaration
  app.css                        --> default stylesheet
  index.html                     --> app layout file (the main html template file of the app)
e2e-tests/                     --> end-to-end tests
  protractor-conf.js             --> Protractor config file
  scenarios.js                   --> end-to-end scenarios to be run by Protractor
karma.conf.js                  --> config file for running unit tests with Karma
```

### Style Guide

The project follows the patterns and conventions outlined in [John Papa's Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).

You will notice each module is comprised of multiple files. This is an application of the [Rule of 1](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y001),
which recommends you define 1 component per file.

Also take note of the section on [manually identifying dependencies](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y091)
if you are not familiar with using `$inject` to identify your dependencies.

## Testing

There are two kinds of tests in the ng-interview application: Unit tests and end-to-end tests.

### Running Unit Tests

The ng-interview app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `*.spec.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The ng-interview app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The ng-interview
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Contact

For more information on AngularJS please check out [http://angularjs.org/](http://angularjs.org/)

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[http-server]: https://github.com/nodeapps/http-server
[ng-interview]: https://github.com/ImagineLearning/ng-interview
