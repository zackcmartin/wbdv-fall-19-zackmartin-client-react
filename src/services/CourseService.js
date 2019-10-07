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

    findAllCourses() {
        return courses
    }

    createCourse(newCourse) {
        courses.push(newCourse)
        return courses
    }

    findCourseById(courseId) {
        for (var i = 0; i < courses.length; i++){
            // look for the entry with a matching `code` value
            if (courses[i].id == courseId){
               return courses[i];
            }
          }
    }

    findModulesById(courseId){
         let course = this.findCourseById(courseId)
         try{
             return course.modules
         }
         catch{}
    }

    findLessonsById(courseId){
        let course = this.findCourseById(courseId)
        console.log(course)
        try{
            return course.modules.lessons[0]
        }
        catch{}
   }

    deleteCourse(courseId) {
        for (var i = 0; i < courses.length; i++){
            // look for the entry with a matching `code` value
            if (courses[i].id == courseId){
               courses.splice(i, 1)
            }
          }
        return courses
    }

    updateCourse(courseId, course) {
        // ...
    }
}