import React from 'react'
import ModuleListItem from "../components/ModuleListItem";
import ModuleList from "../components/ModuleList"



export default class ModuleListContainer
    extends React.Component {
    constructor(props) {
        super(props)
        // this.titleChanged = this.titleChanged.bind(this)
        // this.createModule = this.createModule.bind(this)
        this.state = {
            newModule: {
                title: ''
            },
            modules: props.course.modules,
            currentModule: ''
        }
    }

    titleChanged = (event) => {
        // this.state.newModule.title = event.currentTarget.value
        this.setState({
            newModule: {
                title: event.currentTarget.value,
                id: (new Date()).getTime()
            }
        })
    }

    createModule = () => {
        this.setState(prevState => ({
            newModule: {
                title: ''
            },
            modules: [
                ... prevState.modules,
                prevState.newModule
            ]
        }))
    }


    render() {
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            value={this.state.newModule.title}
                            onChange={this.titleChanged}
                            placeholder="Module title" className="form-control"/>
                        <button onClick={this.createModule} className="btn btn-primary btn-block">Create</button>
                    </li>
                    <ModuleList modules={this.state.modules}/>
                </ul>
            </div>
        )
    }
}