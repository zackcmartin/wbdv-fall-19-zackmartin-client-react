//import courses from '../courses.json'
import courses from '../courses.json'

export default class CouserService {
    static myInstance = null;

    static getInstance() {
        if (CouserService.myInstance == null) {
            CouserService.myInstance = new CouserService()
        }
        return this.myInstance
    }

    findAllCourses = () =>
        fetch("http://localhost:8080/api/courses")
            .then(response => response.json())  

    deleteCourse = cid =>
        fetch(`http://localhost:8080/api/courses/${cid}`, {
            method: 'DELETE'
        })
            .then(response => response.json())

    createCourse = (course) =>
        fetch("http://localhost:8080/api/courses", {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            },
        })
            .then(response => response.json())

    updateCourse = course =>
        fetch(`http://localhost:8080/api/courses/${course.id}`, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            },
        }).then(response => response.json())

    findCourseById = id =>
        fetch(`http://localhost:8080/api/courses/${id}`)
            .then(response => response.json)
}