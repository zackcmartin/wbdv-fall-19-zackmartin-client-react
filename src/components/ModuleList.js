import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({modules}) =>
    <div>
        <ul className="list-group">
            {
                modules.map(module =>
                        <ModuleListItem
                            key={module.id}
                            module={module}/>
                )
            }
        </ul>
    </div>

export default ModuleList