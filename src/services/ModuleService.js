import { Module } from "module";

export default class ModuleService {
    static myInstance = null;

    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance = new ModuleService()
        }
        return this.myInstance
    }

    findAllModules = () =>
        fetch("https://wbdv-f19-zmartin-java-server.herokuapp.com/api/modules")
            .then(response => response.json()) 
    
    //
    findAllModulesForCourse = cid =>
        fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/courses/${cid}/modules`,{
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(response => response.json()) 
         
    //
    deleteModule = (mid, cid) =>
        fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/courses/${cid}/modules/${mid}`, {
            method: 'DELETE'
        })
            .then(response => response.json())

    //
    createModuleForCourse = (cid, module) =>
        fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/courses/${cid}/modules`, {
            method: 'POST',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            },
        })
            .then(response => response.json())

    updateModule = (cid, editedModule) =>
        fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/courses/${cid}/modules/${editedModule.id}`, {
            method: 'PUT',
            body: JSON.stringify(editedModule),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            },
        }).then(response => response.json())

    findModuleById = id =>
        fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/modules/${id}`)
            .then(response => response.json)
}