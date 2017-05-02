# node_serverless_app
A Serverless application developed using Node.js, AWS Lambda, ES6, Serverless, Mocha and Chai.
this can be run locally using serverless offline plugin.
Data is stored in am in memory array.
Test is written using mocha and chai.

steps to run
--------- 
install node
clone the repository
run npm install

serverless offline start

End points to check on the local url
----------
GET /courses  -- End point with Pagination and sorting

GET /courses/{id}

GET /courses/reference/{reference}

GET /courses/duration/{duration}

GET /courses/fees/{fees}

GET /courses/status/{status}

GET /courses/totalplaces/{totalPlaces}

GET /courses/availableplaces/{availablePlaces}

Examples
---
http://localhost:3000/courses?skip=10&take=20&sort=reference

http://localhost:3000/courses/1

http://localhost:3000/courses/reference/ASPNETB001

http://localhost:3000/courses/duration/6

Run the Tests
---
npm test