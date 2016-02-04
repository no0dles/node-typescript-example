# node-typescript-example

## Installation
```
npm install
```

## Build & Develop
```
gulp build
gulp develop
```

## Test
```
gulp test
```

## Gulp commands

*install* Installs all bower and tsd packages 

*clean* Removes all built server and client files 
*clean-server* Removes all built server files
*clean-client* Removes all built client files

*build* Builds server and client
*build-server* Builds server
*build-client* Builds client
*build-server-test* Builds server and server tests

*watch* Watches for *.ts file changes on server and client
*run-server* Runs a node server
*develop* Runs watch for *.ts files and restarts the node server on changes

*test-server* Builds server tests and runs them in mocha