import React from 'react'
import ModuleListContainer from '../containers/ModuleListContainer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt);
library.add(faEdit);
library.add(faCheck);


let isEdit = false;




const ModuleListItem = ({module, moduleId, selectModule, deleteModule, editModule, completeEditModule}) =>
    <li className="list-group-item">
        <button onClick={() => selectModule(module)} className="btn btn-primary btn-block">
            {module.title}
        </button>
        <button onClick={() => deleteModule(moduleId)} className="btn">
            <FontAwesomeIcon icon="trash-alt" />
        </button>
        <button onClick={() => editModule(module)} className="btn">
            <FontAwesomeIcon icon="edit" />
        </button>
        <button onClick={() => completeEditModule(module)} className="btn">
            <FontAwesomeIcon icon="check" />
        </button>
    </li>

export default ModuleListItem