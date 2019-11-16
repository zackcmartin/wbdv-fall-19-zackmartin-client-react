import React from 'react'
import ModuleListContainer from "./ModuleListContainer";
import CourseService from "../services/CourseService"
import ModuleService from "../services/ModuleService"
import WidgetService from "../services/WidgetService"
import LessonTabsContainer from "./LessonTabsContainer"
import TopicPillsContainer from "./TopicPillsContainer"
import Navbar from 'react-bootstrap/Navbar'

import WidgetListContainer from "../containers/WidgetListContainer";
import widgetListReducer from "../reducers/WidgetReducer";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import WidgetListComponent from '../components/WidgetListComponent';

//const store = createStore(widgetListReducer)


export default class CourseEditor extends React.Component {

    constructor(props) {
        super(props)

        const service = CourseService.getInstance()

        const course = service.findCourseById(props.match.params.courseId)
        const courseId = props.match.params.courseId;

        let modules = []
        let module = ''
        let moduleId = ''
        let lessons = []
        let lesson = ''
        let topics = []
        let widgets = []

        // try {
        //     modules = course.modules
        //     module = modules[0]
        //     lessons = module.lessons
        //     lesson = lessons[0]
        //     topics = lesson.topics
        // }
        // catch{
        //     try {
        //         modules = course.modules
        //         module = modules[0]
        //         lessons = module.lessons
        //         lesson = lessons[0]
        //         topics = []
        //     }
        //     catch{
        //         try {
        //             modules = course.modules
        //             module = modules[0]
        //             lessons = module.lessons
        //             lesson = ''
        //             topics = []
        //         }
        //         catch{
        //             try {
        //                 modules = course.modules
        //                 module = modules[0]
        //                 lessons = []
        //                 lesson = ''
        //                 topics = []
        //             }
        //             catch{
        //                 try {
        //                     modules = course.modules
        //                     module = ''
        //                     lessons = []
        //                     lesson = ''
        //                     topics = []
        //                 }
        //                 catch{
        //                     modules = []
        //                     module = ''
        //                     lessons = []
        //                     lesson = ''
        //                     topics = []
        //                 }
        //             }
        //         }
        //     }
        // }


        this.state = {
            courseId: courseId,
            course: course,
            modules: modules,
            module: module,
            moduleId: moduleId,
            lessons: lessons,
            lesson: lesson,
            topics: topics,
            widgets: widgets
        }

        
    }

     componentDidMount() {
        let moduleService = ModuleService.getInstance()
        moduleService.findAllModulesForCourse(this.state.courseId).then(modules => this.setState({modules: modules}))
     }

    deleteModule = moduleId => {
        let moduleService = ModuleService.getInstance()
        moduleService.deleteModule(moduleId, this.state.courseId).then(modules => this.setState({ modules: modules }))
        console.log("deleted " + this.state.courses)
    }

    createModule = newModule => {
        let moduleService = ModuleService.getInstance()
        moduleService.createModuleForCourse(this.state.courseId, newModule).then(modules => this.setState({ modules: modules }))
    }

    completeEditModule = editedModule => {
        let moduleService = ModuleService.getInstance()
        moduleService.updateModule(this.state.courseId, editedModule).then(modules => this.setState({ modules: modules }))
        
    }




    deleteWidget= widgetId => {
        let widgetService = WidgetService.getInstance()
        widgetService.deleteWidget(this.state.courseId, this.state.moduleId, widgetId).then(widgets => this.setState({ widgets: widgets }))
    }

    addWidget = () => {
        console.log("made it to add widget")
        let widgetService = WidgetService.getInstance()
        widgetService.createWidget(this.state.courseId, this.state.moduleId).then(widgets => this.setState({ widgets: widgets }))
    }

    updateWidget = editedWidget => {
        let widgetService = WidgetService.getInstance()
        widgetService.updateWidget(this.state.courseId, this.state.moduleId, editedWidget).then(widgets => this.setState({ widgets: widgets }))
        
    }





    selectModule = module => {
        let widgetService = WidgetService.getInstance()
        widgetService.findAllWidgets(this.state.courseId, module.id).then(widgets => this.setState({widgets: widgets}))
        try {
            this.setState({
                module: module,
                moduleId: module.id,
                lessons: module.lessons,
                lesson: module.lessons[0],
                topics: module.lessons[0].topics
            })
        }
        catch{
            try {
                this.setState({
                    module: module,
                    moduleId: module.id,
                    lessons: module.lessons,
                    lesson: module.lessons[0],
                    topics: []
                })
            }
            catch{
                this.setState({
                    module: module,
                    moduleId: module.id,
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

    // createModule = (newModule) => {
    //     if (this.state.modules !== undefined) {
    //         this.setState(prevState => ({
    //             modules: [
    //                 ...prevState.modules,
    //                 newModule
    //             ]
    //         }))
    //     }
    //     else {
    //         this.setState({
    //             modules: [newModule]
    //         })
    //     }
    // }

    // completeEditModule = (moduleTitle, moduleId) => {
    //     var modules = [...this.state.modules]
    //     for (var i = 0; i < modules.length; i++) {
    //         // look for the entry with a matching `code` value
    //         if (modules[i].id == moduleId) {
    //             modules[i].title = moduleTitle
    //             this.setState({
    //                 modules: modules
    //             })
    //         }
    //     }
    // }

    // deleteModule = (module) => {
    //     var array = [...this.state.modules]; // make a separate copy of the array
    //     var index = array.indexOf(module)
    //     if (index !== -1) {
    //         array.splice(index, 1);
    //         this.setState({ modules: array });
    //     }
    // }


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
                              <WidgetListComponent widgets={this.state.widgets} deleteWidget={this.deleteWidget} updateWidget={this.updateWidget}
                                    addWidget={this.addWidget} preview={false}/>
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}