
class WidgetService {

    static myInstance = null;

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    findAllWidgets = () =>
        fetch("https://wbdv-f19-zmartin-java-server.herokuapp.com/api/widgets")
            .then(response => response.json())

    deleteWidget = wid =>
        fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/widgets/${wid}`, {
            method: 'DELETE'
        })
        .then(response => response.json())

    createWidget = () => 
    fetch("https://wbdv-f19-zmartin-java-server.herokuapp.com/api/widgets" , {
        method: 'POST',
        body: JSON.stringify({ type: "HEADING", size: 1, text: "Heading Widget", name: "", id: (new Date()).getTime() % 100 }),
        headers:{
            'content-type':'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Credentials':true,
            'Access-Control-Allow-Origin':true
            },
    })
    .then(response => response.json())

    updateWidget = widget =>
    fetch(`https://wbdv-f19-zmartin-java-server.herokuapp.com/api/widgets/${widget.id}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
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