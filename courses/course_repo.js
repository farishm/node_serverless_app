'use strict';

class CourseRepo {

    //constructor creates a in memory array of courses
    constructor() {
        this.courses = [
        {id: 1, title: 'ASP .Net Basics',description: 'ASP .Net Course for beginners',reference: 'ASPNETB001',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 90},
        {id: 2, title: 'ASP .Net Advanced',description: 'ASP .Net Course for middle level programmers',reference: 'ASPNETA001',duration: 10, fees: 1500, status: 'open',location: 'Net Hall 3',totalplaces: 100, availableplaces: 60},
        {id: 3, title: 'JavaScript with 12 Projects',description: 'JavaScript Course with 12 interactive Project work',reference: 'JSCRM001',duration: 9, fees: 1000, status: 'open',location: 'Net Hall 2',totalplaces: 100, availableplaces: 50},
        {id: 4, title: 'AngularJS',description: 'AngularJS Course for developers with some JavaScript knowledge',reference: 'JSCRM006',duration: 6, fees: 1000, status: 'open',location: 'Net Hall 5',totalplaces: 100, availableplaces: 30},
        {id: 5, title: 'ReactJS',description: 'ReactJS Course for developers with some JavaScript knowledge',reference: 'JSCRM007',duration: 6, fees: 1000, status: 'open',location: 'Net Hall 5',totalplaces: 100, availableplaces: 90},
        {id: 6, title: 'HTML5 Basics',description: 'HTML5 Basics',reference: 'HTMLB001',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 10},
        {id: 7, title: 'Bootstrap',description: 'Bootstrap',reference: 'BSTB001',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 100},
        {id: 8, title: 'JQuery and Ajax',description: 'JQuery and Ajax',reference: 'JSCRM007',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 100},
        {id: 9, title: 'SQL Server Development',description: 'SQL Server Development',reference: 'SQL001',duration: 15, fees: 2500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 0},
        {id: 10, title: 'ASP .Net Web API1',description: 'ASP .Net Web API Development with Project work',reference: 'ASPNETB010',duration: 18, fees: 2500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 100},
        {id: 11, title: 'ASP .Net Basics1',description: 'ASP .Net Course for beginners',reference: 'ASPNETB001',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 90},
        {id: 12, title: 'ASP .Net Advanced1',description: 'ASP .Net Course for middle level programmers',reference: 'ASPNETA011',duration: 10, fees: 1500, status: 'open',location: 'Net Hall 3',totalplaces: 100, availableplaces: 60},
        {id: 13, title: 'JavaScript with 12 Projects1',description: 'JavaScript Course with 12 interactive Project work',reference: 'JSCRM011',duration: 9, fees: 1000, status: 'open',location: 'Net Hall 2',totalplaces: 100, availableplaces: 50},
        {id: 14, title: 'AngularJS1',description: 'AngularJS Course for developers with some JavaScript knowledge',reference: 'JSCRM0061',duration: 6, fees: 1000, status: 'open',location: 'Net Hall 5',totalplaces: 100, availableplaces: 30},
        {id: 15, title: 'ReactJS1',description: 'ReactJS Course for developers with some JavaScript knowledge',reference: 'JSCRM0071',duration: 6, fees: 1000, status: 'open',location: 'Net Hall 5',totalplaces: 100, availableplaces: 90},
        {id: 16, title: 'HTML5 Basics1',description: 'HTML5 Basics',reference: 'HTMLB0011',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 10},
        {id: 17, title: 'Bootstrap1',description: 'Bootstrap',reference: 'BSTB0011',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 100},
        {id: 18, title: 'JQuery and Ajax1',description: 'JQuery and Ajax',reference: 'JSCRM0071',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 100},
        {id: 19, title: 'SQL Server Development1',description: 'SQL Server Development',reference: 'SQL0011',duration: 15, fees: 2500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 100},
        {id: 20, title: 'ASP .Net Web API2',description: 'ASP .Net Web API Development with Project work',reference: 'ASPNETB0101',duration: 18, fees: 2500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 100},
        {id: 21, title: 'ASP .Net Basics2',description: 'ASP .Net Course for beginners',reference: 'ASPNETB0012',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 90},
        {id: 22, title: 'ASP .Net Advanced2',description: 'ASP .Net Course for middle level programmers',reference: 'ASPNETA0012',duration: 10, fees: 1500, status: 'open',location: 'Net Hall 3',totalplaces: 100, availableplaces: 60},
        {id: 23, title: 'JavaScript with 12 Projects2',description: 'JavaScript Course with 12 interactive Project work',reference: 'JSCRM0012',duration: 9, fees: 1000, status: 'open',location: 'Net Hall 2',totalplaces: 100, availableplaces: 50},
        {id: 24, title: 'AngularJS2',description: 'AngularJS Course for developers with some JavaScript knowledge',reference: 'JSCRM0062',duration: 6, fees: 1000, status: 'open',location: 'Net Hall 5',totalplaces: 100, availableplaces: 30},
        {id: 25, title: 'ReactJS2',description: 'ReactJS Course for developers with some JavaScript knowledge',reference: 'JSCRM0072',duration: 6, fees: 1000, status: 'open',location: 'Net Hall 5',totalplaces: 100, availableplaces: 90},
        {id: 26, title: 'HTML5 Basics2',description: 'HTML5 Basics',reference: 'HTMLB0012',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 10},
        {id: 27, title: 'Bootstrap2',description: 'Bootstrap',reference: 'BSTB0012',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 100},
        {id: 28, title: 'JQuery and Ajax2',description: 'JQuery and Ajax',reference: 'JSCRM0072',duration: 6, fees: 500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces:100},
        {id: 29, title: 'SQL Server Development2',description: 'SQL Server Development',reference: 'SQL0012',duration: 15, fees: 2500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 100},
        {id: 30, title: 'ASP .Net Web API2',description: 'ASP .Net Web API Development with Project work',reference: 'ASPNETB0102',duration: 18, fees: 2500, status: 'open',location: 'Net Hall 1',totalplaces: 100, availableplaces: 100}
        ];
    }

    //list method takes parameters skip and take for pagination sortBy for sorting
    list(skip=0,take=10,sortBy='id') {

        //Initialize the course list to return
        let courseList=[];

        //Sort the Array based on sortBy parameter
        switch(sortBy) {
            case 'id':
                courseList=this.courses.sort((a, b) => a.id !== b.id ? a.id < b.id ? -1 : 1 : 0);
                break;
            case 'title':
                courseList=this.courses.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0);
                break;
            case 'reference':
                courseList=this.courses.sort((a, b) => a.reference !== b.reference ? a.reference < b.reference ? -1 : 1 : 0);
                break;
            case 'duration':
                courseList=this.courses.sort((a, b) => a.duration !== b.duration ? a.duration < b.duration ? -1 : 1 : 0);
                break;
            case 'duration':
                courseList=this.courses.sort((a, b) => a.duration !== b.duration ? a.duration < b.duration ? -1 : 1 : 0);
                break;
            case 'fees':
                courseList=this.courses.sort((a, b) => a.fees !== b.fees ? a.fees < b.fees ? -1 : 1 : 0);
                break;
            case 'status':
                courseList=this.courses.sort((a, b) => a.status !== b.status ? a.status < b.status ? -1 : 1 : 0);
                break;
            default:
                courseList=this.courses.sort((a, b) => a.id !== b.id ? a.id < b.id ? -1 : 1 : 0);
                break;
        }

        //Array Slice - Pagination
        courseList=courseList.slice(skip,take)
        return courseList;
    }

    //listByFilter method takes filter as parameter
    listByFilter(filter='status',filterVal='open') {

        //Initialize the course list to return
        let courseList=[];
        console.log(filter); 
        console.log(filterVal); 
        //Sort the Array based on sortBy parameter
        switch(filter) {
            case 'duration':
                courseList=this.courses.filter(c => c.duration === parseInt(filterVal));
                break;
            case 'fees':
                courseList=this.courses.filter(c => c.fees === parseInt(filterVal));
                break;
            case 'status':
                courseList=this.courses.filter(c => c.status === filterVal);
                break;
            case 'location':
                courseList=this.courses.filter(c => c.location === filterVal);
                break;
            case 'totalplaces':
                courseList=this.courses.filter(c => c.totalplaces === filterVal);
                break; 
             case 'availableplaces':
                courseList=this.courses.filter(c => c.availableplaces === filterVal);
                break;          
            default:
                courseList=this.courses.filter(c => c.status === filterVal);
                break;
        }

        return courseList;
    }

    getCourseById(id)
    {
        return this.courses.find(c => c.id === id);
    }

    getCourseByReference(reference)
    {
        return this.courses.find(c => c.reference === reference);
    }

}

module.exports = new CourseRepo()