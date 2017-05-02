'use strict';
const courseRepo = require('../course_repo');

module.exports.courses_list = (event, context, callback) => {
  const skip=(event.queryStringParameters !== null && event.queryStringParameters.skip !== null && event.queryStringParameters.skip !== "")? parseInt(event.queryStringParameters.skip) : 0;
  const take=(event.queryStringParameters !== null && event.queryStringParameters.take !== null && event.queryStringParameters.take !== "")? parseInt(event.queryStringParameters.take) : 10;
  const sortBy=(event.queryStringParameters !== null && event.queryStringParameters.sortBy !== null && event.queryStringParameters.sortBy !== "")? event.queryStringParameters.sortBy : 'title';

  //console.log(event);
  console.log(skip);
  console.log(take);
  console.log(sortBy);

  let courses =courseRepo.list(skip,take,sortBy);
  const count = courseRepo.courses.length;

  console.log(count);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      meta:[{count:count}],
      data: courses
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};