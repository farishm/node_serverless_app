'use strict';
const courseRepo = require('../courses/course_repo');

let chai = require('chai');
let expect = chai.expect;

let should = chai.should();


describe('Course Repository getCourseById method', function() {
   it('Should return a course object when the right id is passed', function() {
    let id=1;
    let course =courseRepo.getCourseById(id); 
    course.should.be.a('object');
  });
  
   it('Should return the record with the correct id for a given id', function() {
    let id=1;
    let course =courseRepo.getCourseById(id); 
    course.id.should.equal(id);
  });
 
});

describe('Course Repository getCourseByReference method', function() {
   it('Should return a course object when the right Reference is passed', function() {
    let ref='ASPNETA001';
    let course =courseRepo.getCourseByReference(ref); 
    course.should.be.a('object');
  });
  
   it('Should return the record with the correct reference for a given id', function() {
    let ref='ASPNETA001';
    let course =courseRepo.getCourseByReference(ref); 
    course.reference.should.equal(ref);
  });
 
});

describe('Course Repository list method', function() {
   it('Should return 10 records by default', function() {    
    let courses =courseRepo.list(); 
    courses.length.should.equal(10);
  });
});

