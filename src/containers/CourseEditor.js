import React from 'react'
//import LessonTabs from "./LessonTabs";
import ModuleListContainer from "./ModuleListContainer";
import CourseService from "../services/CourseService"
import LessonTabsContainer from "./LessonTabsContainer"
import TopicPillsContainer from "./TopicPillsContainer"

export default class CourseEditor extends React.Component {

    constructor(props) {
        super(props)

        const service = CourseService.getInstance()

        const course = service.findCourseById(props.match.params.courseId)
        const modules = course.modules
        const module = modules[0]
        const lessons = module.lessons
        const lesson = lessons[0]

        this.state = {
            course: course,
            modules: modules,
            module: module,
            lessons: lessons,
            lesson: lesson,
            topics: topics
        }
    }

    selectModule = module => {
        this.setState({
            module: module,
            lessons: module.lessons
        })
    }

    selectLesson = lesson => {
        this.setState({
            lesson: lesson,
            topics: lesson.topics
        })
    }

    createModule = (newModule) => {
        this.setState(prevState => ({
            modules: [
                ...prevState.modules,
                newModule
            ]
        }))
    }

    completeEditModule = (moduleTitle, moduleId) => {
        var modules = [...this.state.modules]
        console.log(modules)
        console.log(moduleId)
        for (var i = 0; i < modules.length; i++) {
            // look for the entry with a matching `code` value
            if (modules[i].id == moduleId) {
                modules[i].title = moduleTitle
                this.setState({
                    modules: modules
                })
            }
        }
    }

    deleteModule = (module) => {
        var array = [...this.state.modules]; // make a separate copy of the array
        var index = array.indexOf(module)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ modules: array });
        }
    }

    createLesson = (newLesson) => {
        this.setState(prevState => ({
            lessons: [
                ...prevState.lessons,
                newLesson
            ]
        }))
    }


    render() {
        return (
            <div>
                <h2>Course Editor {this.state.course.courseId}</h2>
                <div className="row">
                    <div className="col-3">
                        <ModuleListContainer modules={this.state.modules} selectModule={this.selectModule}
                            createModule={this.createModule} deleteModule={this.deleteModule} completeEditModule={this.completeEditModule} />
                    </div>
                    <div className="col-9">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <LessonTabsContainer lessons={this.state.lessons} createLesson={this.createLesson} />
                            </li>
                            <li className="list-group-item">
                                <TopicPillsContainer />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}