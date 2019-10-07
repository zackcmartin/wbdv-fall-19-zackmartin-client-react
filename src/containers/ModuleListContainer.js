    import React from 'react'
    import ModuleListItem from "../components/ModuleListItem";
    import ModuleList from "../components/ModuleList"
    import CourseService from "../services/CourseService"
    import Form from 'react-bootstrap/Form'
    import FormControl from 'react-bootstrap/FormControl'
    import Button from 'react-bootstrap/Button'

    let courseService = CourseService.getInstance()

    let editedModuleId
    let isEdit = false;

    export default class ModuleListContainer
        extends React.Component {
        constructor(props) {
            super(props)
            // this.titleChanged = this.titleChanged.bind(this)
            // this.createModule = this.createModule.bind(this)
            this.state = {
                newModule: {
                    title: '',
                    id: ''
                }
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
            this.props.createModule(this.state.newModule)
            this.setState(prevState => ({
                newModule: {
                    title: ''
                }
            }))
        }

        editModule = (module) => {
            isEdit = true;
            editedModuleId = module.id
            console.log(editedModuleId)
            this.setState({
                newModule: {
                    title: module.title,
                    id: module.id
                }
            })
        }
        completeEditModule = () => {
            if (isEdit) {
                this.props.completeEditModule(this.state.newModule.title, editedModuleId)
                this.setState(prevState => ({
                    newModule: {
                        title: ''
                    }
                }))
                isEdit = false;
            }
        }

        render() {
            return (
                <div>
                    {/* <ul className="list-group"> */}
                        <Form inline>
                            <FormControl type="text" value={this.state.newModule.title} onChange={this.titleChanged} placeholder="New Module" className="full" />
                            <Button onClick={this.createModule}>Add</Button>
                        </Form>
                        <br/>
                        {/* <li className="list-group-item">
                            <input
                                value={this.state.newModule.title}
                                onChange={this.titleChanged}
                                placeholder="Module title" className="form-control" />
                            <button onClick={this.createModule} className="btn btn-primary btn-block">Create</button>
                        </li> */}
                        <ModuleList modules={this.props.modules} selectModule={this.props.selectModule} deleteModule={this.props.deleteModule} editModule={this.editModule} completeEditModule={this.completeEditModule} />
                    {/* </ul> */}
                </div>
            )
        }
    }