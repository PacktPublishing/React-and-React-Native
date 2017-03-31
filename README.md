# React and React Native
This is the code repository for
[React and React Native](https://www.packtpub.com/web-development/react-and-react-native),
published by [Packt](https://www.packtpub.com/). It contains all the supporting
project files necessary to work through the book from start to finish.

## About the Book
React and React Native allow you to build cross-platform desktop and mobile
applications using Facebook’s innovative UI libraries. Combined with the Flux
data architecture and Relay, you can now create powerful and feature-complete
applications from just one code base!

## Getting Started
In this section, I'll walk you through the process of cloning this repository,
installing dependencies, and how to launch the examples.

### Cloning The Repository
To clone this repository:

```bash
git clone https://github.com/PacktPublishing/React-and-React-Native.git
```

That's it. I'll likely be pushing fixes to this repository on a regular
basis, so it's a good idea to run the examples from it. But first, you
need to make sure all required dependencies are installed.

### Installing Dependencies
To install the dependencies used with the code examples, open up a terminal
if you haven't already, and change into the repo directory:

```bash
cd React-and-React-Native
```

Now you can use [npm](https://www.npmjs.com/) to install all the packages
that we need:

```bash
npm install
```

There are quite a few dependencies to install, so this command might run
for a minute. These are the *local dependencies*, meaning that they're specific
to the code examples in this Git repository. You can take a look at the
`package.json` file to get an idea of what this project depends on. Or, you
can simply list them in the console by running:

```bash
npm ls --depth=0
```

Npm also has the notion of global depnedencies. These are npm packages that
are available to any project in on the system. We need to install two global
dependencies in order to run the example code:

```bash
npm install -g webpack-dev-server webpack
```

This will make the [webpack](https://www.npmjs.com/package/webpack) and the
[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) packages
available to any projects on your system. More importantly, this will install
the `webpack-dev-server` command needed to run the examples.

### Running Examples
First, you need to change into the directory of the example that you'd like
to run:

```bash
cd Chapter02/builtin-html-tags
```

Then, you're ready to run the Webpack development server:

```bash
webpack-dev-server --hot
```

This starts the development web server. The console output will tell you
where the server is listening for requests:

```
Project is running at http://localhost:8081/
```

You can visit this page to interact with the example. The `--hot` option isn't
always necessary. In fact, it's really only useful if you plan on modifying
the code examples (recommended!) and you want to see the results in the browser
immediately.

## Building React Native Projects
Each React Native example is it's own project. There are
a few steps that should be followed, in order to build and
run these projects. First of all, make sure you have the
react-native-cli package installed:

```bash
npm install react-native-cli -g
```

### Install Dependencies
--------------------

Just like any regular React web projects:

```bash
cd path/to/code
npm install
```

### Install iOS and Android Build Files
When you start a React Native project, there're a number
of source files generated. They're not included in this
code bundle because it would be way too big. To generate
them, run:

```bash
react-native upgrade
```

This will ask you about overwriting a number of files.
You can answer yes to all of them.

### Run the project
From within the given code directory, run one of the
following:

```bash
react-native run-ios
react-native run-android
```

### Instructions and Navigations
All of the codes are organized as per the chapters, each folder has the codes related to that chapter or appendix.                   
For example: React-and-React-Native/Chapter02/html-tag-conventions/main.js

Following is the software-hardware list:

| Chapter  | Software required | Hardware required | OS required |
| ------------- | ------------- | ------------- | ------------- |
| 01-26 | Node.js | PC or laptop with at least 2 GB of RAM (4 recommended) | OS Independent although Windows 8 or above recommended |

## Related Products
 
  
* [React Native By Example](https://www.packtpub.com/application-development/react-native-example?utm_source=github&utm_medium=repository&utm_campaign=9781786464750)
  
  
* [Mastering React Native](https://www.packtpub.com/web-development/mastering-react-native?utm_source=github&utm_medium=repository&utm_campaign=9781785885785)
  
  
* [React Native Cookbook](https://www.packtpub.com/application-development/react-native-cookbook?utm_source=github&utm_medium=repository&utm_campaign=9781786462558)
  
 

### Suggestions and Feedback
  
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSe5qwunkGf6PUvzPirPDtuy1Du5Rlzew23UBp2S-P3wB-GcwQ/viewform) if you have any feedback or suggestions.
