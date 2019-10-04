import React from 'react'
import ModuleListContainer from '../containers/ModuleListContainer'


const ModuleListItem = ({module}) =>
    <li className="list-group-item">
        <button className="btn btn-primary btn-block">
            {module.title}
        </button>
    </li>

export default ModuleListItem