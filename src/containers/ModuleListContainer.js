    import React from 'react'
    import ModuleList from "../components/ModuleList"
    import Form from 'react-bootstrap/Form'
    import FormControl from 'react-bootstrap/FormControl'
    import Button from 'react-bootstrap/Button'


    let editedModuleId
    let isEdit = false;

    export default class ModuleListContainer
        extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                newModule: {
                    title: '',
                    id: ''
                }
            }
        }

        titleChanged = (event) => {
            this.setState({
                newModule: {
                    title: event.currentTarget.value,
                    id: (new Date()).getTime()
                }
            })
        }

        createModule = () => {
            isEdit = false;
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
                    id: (new Date()).getTime()
                }
            })
        }
        completeEditModule = () => {
            if (isEdit) {
                this.props.completeEditModule(this.state.newModule.title, editedModuleId)
                this.setState({
                    newModule: {
                        title: ''
                    }
                })
                isEdit = false;
            }
        }

        render() {
            return (
                <div>
                        <Form inline>
                            <FormControl type="text" value={this.state.newModule.title} onChange={this.titleChanged} placeholder="New Module" className="full" />
                            <Button onClick={this.createModule}>Add</Button>
                        </Form>
                        <br/>
                        <ModuleList modules={this.props.modules} selectModule={this.props.selectModule} deleteModule={this.props.deleteModule} editModule={this.editModule} completeEditModule={this.completeEditModule} />
                </div>
            )
        }
    }