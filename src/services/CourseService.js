//import courses from '../courses.json'

export default class CouserService {
    static myInstance = null;

    courses = [
        {
            "id": "123",
            "title": "Course 1",
            "modules": [
                {
                    "id": "123",
                    "title": "Module 1 1",
                    "lessons": [
                        {
                            "id": "123",
                            "title": "Lesson 1 1 1",
                            "topics": [
                                { "title": "Topic 1 1 1 1" }
                            ]
                        },
                        {
                            "id": "234",
                            "title": "Lesson 1 1 2",
                            "topics": [
                                { "title": "Topic 1 1 2 1" }
                            ]
                        }
                    ]
                },
                {
                    "id": "234",
                    "title": "Module 1 2",
                    "lessons": [
                        {
                            "id": "345",
                            "title": "Lesson 1 2 1",
                            "topics": [
                                { "title": "Topic 1 2 1 1" }
                            ]
                        },
                        {
                            "id": "456",
                            "title": "Lesson 1 2 2",
                            "topics": [
                                { "title": "Topic 1 2 2 1" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "234",
            "title": "Course 2",
            "modules": [
                {
                    "id": "345",
                    "title": "Module 2 1",
                    "lessons": [
                        {
                            "id": "567",
                            "title": "Lesson 1 3 1"
                        },
                        {
                            "id": "678",
                            "title": "Lesson 1 3 2"
                        }
                    ]
                },
                {
                    "id": "456",
                    "title": "Module 2 2"
                }
            ]
        },
        {
            "id": "345",
            "title": "Course 3",
            "modules": [
                {
                    "id": "567",
                    "title": "Module 3 1"
                },
                {
                    "id": "678",
                    "title": "Module 3 2"
                }
            ]
        },
        {
            "id": "456",
            "title": "Course 4"
        }
    ]

    static getInstance() {
        if (CouserService.myInstance == null) {
            CouserService.myInstance = new CouserService()
        }
        return this.myInstance
    }

    findAllCourses() {
        return this.courses
    }

    createCourse(course) {
        this.courses.push(course)
    }

    findCourseById(courseId) {
        for (var i = 0; i < this.courses.length; i++){
            // look for the entry with a matching `code` value
            if (this.courses[i].id == courseId){
               return this.courses[i];
            }
          }
    }

    deleteCourse(courseId) {
        this.courses = this.courses.filter(course => course.id !== courseId)
    }

    updateCourse(courseId, course) {
        // ...
    }
}