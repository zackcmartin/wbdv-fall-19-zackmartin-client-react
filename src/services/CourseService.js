import courses from '../courses.json'

export default class CouserService {
    static myInstance = null;

    // courses = [
    //     {title: 'Course 1', seats: 123, id: 1},
    //     {title: 'Course 2', seats: 234, id: 2},
    //     {title: 'Course 3', seats: 345, id: 3},
    //     {title: 'Course 4', seats: 456, id: 4},
    //     {title: 'Course 5', seats: 567, id: 5},
    // ]

    static getInstance() {
        if(CouserService.myInstance == null) {
            CouserService.myInstance = new CouserService()
        }
        return this.myInstance
    }

    findAllCourses() {
        return courses
    }

    createCourse(course) {
        this.courses.push(course)
    }

    findCourseById(courseId) {
        this.courses.find(course => course.id === courseId)
    }

    deleteCourse(courseId) {
        this.courses = this.courses.filter(course => course.id !== courseId)
    }

    updateCourse(courseId, course) {
        // ...
    }
}