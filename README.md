![Logo](./olist-logo.png)

# Olist signup
[![Build Status](https://travis-ci.org/jmlavoier/work-at-olist-front.svg?branch=master)](https://travis-ci.org/jmlavoier/work-at-olist-front)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Npm version](https://img.shields.io/badge/npm-5.6.0-brightgreen.svg)](https://www.npmjs.com/)
[![Coverage Status](https://coveralls.io/repos/github/jmlavoier/work-at-olist-front/badge.svg?branch=master)](https://coveralls.io/github/jmlavoier/work-at-olist-front?branch=master)
 [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> Magnific form made with Vanilla JS

A form with name, e-mail, password strength and password confirmation validations.
It was built using component-based architecture, and a little bit of FP, SOLID, KISS and DRY.
All of the rules was created on top of the especification

Take a look at the [demo](https://signup-olist-challenge.herokuapp.com/)


## Installing / Getting started

```shell
$ cd work-at-olist-front
$ yarn && yarn start
```

That will install all dependences before build a bundle version in memory and open the application in your favorite browser.

## Developing

### Built With
- **Webpack** to create modularized architecture.
- **Babel** to use the newest version of Ecma Script.
- **ESlint** to assist in help to make the code clean.
- **CSS-loader** to load the CSS on JS.
- **SASS-loader** to write you fancy SASS styles.
- **File-loader** to load the fonts.

### Prerequisites
- **Node.js 8.10.0** - Recommended version.
- **Npm 5.6.0** - Package manager.
- **Yarn 1.7.0** - If you would like to make the most in performance to build packages, you can use the Yarn.

### Dependencies
- **It doesn't have any dependendency**

### Setting up Dev

Since I suppose that you have the Node and Yarn installed in your environment.

```shell
$ git clone git@github.com:jmlavoier/work-at-olist-front.git
$ cd work-at-olist-front
```

Make sure your're able to run the project with Node.js. If don't have Node.js in your computer you can [download the recommended version](https://nodejs.org/en/) for this application.

or

If you have the node but you don't have the recommended version, you should install the **NVM** following its [documentation](https://github.com/creationix/nvm). After you complete the installation, you can install the recommended version on your environment:

```shell
$ nvm install v8.10.0
$ nvm alias default v8.10.0
```

### Building

Before you try to make changes, start building the development environment to work.

Build **dev** with live reload. Open you favoroite IDE or Text editor and make the most.
```
$ yarn start
```

Build **dev** with watch. It watch all changes but it doesn't start any server.
```
$ yarn watch
```

Build **prod** on Heroku. You mustn't care about this script, let's Heroku work for you.
```
$ yarn postinstall
```
> This script will execute every deployment.

*You don't need to set up any environment variables* :wink:

### Deploying / Publishing
The deployment will be done after the the merge to the **master** branch.
But it will be only executed if all checks on Travis CI are passed.

If you would like to contribute, after you change the code, you should create a new *pull request*. The Travis will advise you if everthing is alright or not.

## Tests & lint

It's fully recommended you get started to code while you take in consideration the **tests** and the **linter**. If you are comfortble with it, so you are gonna create a great code.

Run test
```
$ yarn test
```

Watch tests for TDD
```
$ yarn test:watch
```

Check the coverage of tests
```
$ yarn test:cov
```

Check the lint
```
$ yarn lint
```

Watch your code to lint
```
lint:watch
```

Fix some lint issues
```
lint:fix
```

## Style guide

- The [Olist Front Style Test](https://www.figma.com/file/rsSlx8jDHls6nWXziElWTk/olist----front-end-test) was the style guide to create this application.
- See the [storybook documentation](https://jmlavoier.github.io/work-at-olist-front/) with all of the components created  to get this done.

## How does it work?
Each component extends a Component class. This class is an engine for rendering each component and its childrens. It simulate a component sounds like the React. It was used `template literals` for creating the html of things.

Creating a simple **Component**
```js
import { Component } from 'helpers/engine';
import Success from 'components/Success';

class App extends Component {
  constructor() {
    super();

    this.state = {
      screen: SCREENS.form,
    }
  }

  //Before the render method
  componentWillMount() {
  }

  //After the render mothod
  componentDidMount() {
    //All events of this component
    this.events = [
      {
        el: this.element,
        events: {
          click: this.onClick.bind(this),
        },
      },
    ];

    //It will be executed after each setState
    this.listeners = [
      (previousState, nextState) => {

      },
    ];
  }

  onClick(event) {
    //This setState will change the state of its component
    this.setState(() => ({
      someState: true,
    }));
  }

  render() {
    this.template`
      <div>
        ${Success('success', {})}
      </div>
    `;
  }
}

export default new App;
```

Get the children components reference
```js
import { Component } from 'helpers/engine';
import Success from 'components/Success';

class App extends Component {
  componentDidMount() {
    const Button = this.getChildComponentRefByName('success'); // <- here
    // This child component exists after the render
    // now you can use the Button object as a Component
    Button.setState({ isLoading: true });
  }

  render() {
    //Wellcome to the template literals
    //You can add your custom Component inside the template
    //as that Sucsess('scucess', {})
    this.template`
      <div>
        ${Success('success', {})}
      </div>
    `;
  }
}

export default new App;
```

Export a Component
```js
import { Component, prepareComponent } from 'helpers/engine';

class App extends Component {
  //...
}

export default prepareComponent(App);
```

## Licensing

[MIT](https://github.com/jmlavoier/work-at-olist-front/blob/master/LICENSE)
