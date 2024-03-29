import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({modules, moduleId, selectModule, deleteModule, editModule, completeEditModule}) =>
    <div>
        <ul className="list-group">
            {
                modules !== undefined && 
                modules.map(module =>
                        <ModuleListItem
                            key={module.id}
                            module={module}
                            moduleId={module.id}
                            selectModule={selectModule}
                            deleteModule={deleteModule}
                            editModule={editModule}
                            completeEditModule={completeEditModule}/>
                )
            }
        </ul>
    </div>

export default ModuleList