'use strict';
const courseRepo = require('../course_repo');

module.exports.courses_getByDuration = (event, context, callback) => {

  const duration = event.pathParameters.duration;

  console.log(duration); 

  let course = courseRepo.listByFilter('duration',duration);

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