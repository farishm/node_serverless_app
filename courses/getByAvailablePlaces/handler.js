'use strict';
const courseRepo = require('../course_repo');

module.exports.courses_getByAvailablePlaces = (event, context, callback) => {

  const availablePlaces = event.pathParameters.availablePlaces;

  console.log(availablePlaces); 

  let course = courseRepo.listByFilter('availablePlaces',availablePlaces);

  if(course==undefined)
  {
    course="course not found";
  }

  //console.log(course);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      data: course
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};