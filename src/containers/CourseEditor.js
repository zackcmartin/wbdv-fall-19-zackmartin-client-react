import React from 'react'
import ModuleListContainer from "./ModuleListContainer";
import CourseService from "../services/CourseService"
import LessonTabsContainer from "./LessonTabsContainer"
import TopicPillsContainer from "./TopicPillsContainer"
import Navbar from 'react-bootstrap/Navbar'

import WidgetListContainer from "../containers/WidgetListContainer";
import widgetListReducer from "../reducers/WidgetReducer";
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(widgetListReducer)


export default class CourseEditor extends React.Component {

    constructor(props) {
        super(props)

        const service = CourseService.getInstance()

        const course = service.findCourseById(props.match.params.courseId)
        let modules = []
        let module = ''
        let lessons = []
        let lesson = ''
        let topics = []

        try {
            modules = course.modules
            module = modules[0]
            lessons = module.lessons
            lesson = lessons[0]
            topics = lesson.topics
        }
        catch{
            try {
                modules = course.modules
                module = modules[0]
                lessons = module.lessons
                lesson = lessons[0]
                topics = []
            }
            catch{
                try {
                    modules = course.modules
                    module = modules[0]
                    lessons = module.lessons
                    lesson = ''
                    topics = []
                }
                catch{
                    try {
                        modules = course.modules
                        module = modules[0]
                        lessons = []
                        lesson = ''
                        topics = []
                    }
                    catch{
                        try {
                            modules = course.modules
                            module = ''
                            lessons = []
                            lesson = ''
                            topics = []
                        }
                        catch{
                            modules = []
                            module = ''
                            lessons = []
                            lesson = ''
                            topics = []
                        }
                    }
                }
            }
        }


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
        try {
            this.setState({
                module: module,
                lessons: module.lessons,
                lesson: module.lessons[0],
                topics: module.lessons[0].topics
            })
        }
        catch{
            try {
                this.setState({
                    module: module,
                    lessons: module.lessons,
                    lesson: module.lessons[0],
                    topics: []
                })
            }
            catch{
                this.setState({
                    module: module,
                    lessons: module.lessons,
                    lesson: [],
                    topics: []
                })
            }
        }
    }

    selectLesson = lesson => {
        this.setState({
            lesson: lesson,
            topics: lesson.topics
        })
    }

    createModule = (newModule) => {
        if (this.state.modules !== undefined) {
            this.setState(prevState => ({
                modules: [
                    ...prevState.modules,
                    newModule
                ]
            }))
        }
        else {
            this.setState({
                modules: [newModule]
            })
        }
    }

    completeEditModule = (moduleTitle, moduleId) => {
        var modules = [...this.state.modules]
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


    completeEditLesson = (lessonTitle, lessonId) => {
        var lessons = [...this.state.lessons]
        for (var i = 0; i < lessons.length; i++) {
            if (lessons[i].id == lessonId) {
                lessons[i].title = lessonTitle
                this.setState({
                    lessons: lessons
                })
            }
        }
    }


    createLesson = (newLesson) => {
        if (this.state.lessons !== undefined) {
            this.setState(prevState => ({
                lessons: [
                    ...prevState.lessons,
                    newLesson
                ]
            }))
        }
        else {
            this.setState({
                lessons: [newLesson]
            })
        }
    }


    deleteLesson = (lesson) => {
        var array = [...this.state.lessons];
        var index = array.indexOf(lesson)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ lessons: array });
        }
    }

    createTopic = (newTopic) => {
        if (this.state.topics !== undefined) {
            this.setState(prevState => ({
                topics: [
                    ...prevState.topics,
                    newTopic
                ]
            }))
        }
        else {
            this.setState({
                topics: [newTopic]
            })
        }
    }


    completeEditTopic = (topicTitle, topicId) => {
        var topics = [...this.state.topics]
        for (var i = 0; i < topics.length; i++) {
            if (topics[i].id == topicId) {
                topics[i].title = topicTitle
                this.setState({
                    topics: topics
                })
            }
        }
    }

    deleteTopic = (topic) => {
        var array = [...this.state.topics];
        var index = array.indexOf(topic)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ topics: array });
        }
    }





    render() {
        return (
            <div className="container-full-width">
                <Navbar bg="dark" variant="dark" style={{ color: "white" }}>
                    <h2>Course Editor  -  {this.props.match.params.courseId}</h2>
                </Navbar>
                <div className="row">
                    <div className="col-3">
                        <ModuleListContainer modules={this.state.modules} selectModule={this.selectModule}
                            createModule={this.createModule} deleteModule={this.deleteModule} completeEditModule={this.completeEditModule} />
                    </div>
                    <div className="col-9">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <LessonTabsContainer lessons={this.state.lessons} selectLesson={this.selectLesson} createLesson={this.createLesson}
                                    completeEditLesson={this.completeEditLesson} deleteLesson={this.deleteLesson} />
                            </li>
                            <li className="list-group-item">
                                <TopicPillsContainer topics={this.state.topics} createTopic={this.createTopic} deleteTopic={this.deleteTopic}
                                    completeEditTopic={this.completeEditTopic} />
                            </li>
                        </ul>
                        <ul className="list-group">
                            <Provider store={store}>
                                <WidgetListContainer />
                            </Provider>
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}