import React from 'react'

import CourseTable from '../containers/CourseTable'
import CourseEditor from '../containers/CourseEditor'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class WhiteBoard extends React.Component {
    render() {
        return( 
            <Router>
                <div>
                    <Route
                        path="/courses"
                        component={CourseTable}/>

                    <Route
                        path="/editor/:courseId"
                        component={CourseEditor}/>
                </div>
            </Router>
        )
    }
}

///:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId

export default WhiteBoard;