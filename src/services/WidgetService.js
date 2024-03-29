
class WidgetService {

    static myInstance = null;

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    findAllWidgets = (courseId, moduleId) =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/courses/${courseId}/modules/${moduleId}/widgets`)
        .then(response => response.json())

    deleteWidget = (cid, mid, wid) =>
        fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/courses/${cid}/modules/${mid}/widgets/${wid}`, {
            method: 'DELETE'
        })
        .then(response => response.json())

    createWidget = (cid, mid) => 
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/courses/${cid}/modules/${mid}/widgets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            type: 'HEADING',
            size: 2,
            text: 'New Heading'
        })
    })
        .then(response => response.json())

    updateWidget = (cid, mid, editedWidget) =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/courses/${cid}/modules/${mid}/widgets/${editedWidget.id}`, {
        method: 'PUT',
        body: JSON.stringify(editedWidget),
        headers:{
            'content-type':'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Credentials':true,
            'Access-Control-Allow-Origin':true
            },
    }).then(response => response.json())

    findWidgetById = id =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/widgets/${id}`)
        .then(response => response.json)




}

export default WidgetService