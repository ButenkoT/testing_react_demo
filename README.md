## Unit and e2e React testing
 
 Using tape, enzyme and sinon for unit testing and nightwatch with selenium for e2e tests.
 
 To start:
 ```
 npm init
 npm start
 ```
 
 Run on `http://localhost:8080`
 
 Run unit tests:
 
 ```
 npm test
 ```
 
 Check up on unit test coverage:
 ```
 npm run test:cov
 ```
 
 Run e2e tests:
 
 Do once: `./node_modules/.bin/selenium-standalone install`
 
 In 3 different windows run:
 
 ```
 npm start
 ./node_modules/.bin/selenium-standalone start debug
 npm run test:e2e
 ```