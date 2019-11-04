
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
        fetch("http://localhost:8080/api/widgets")
            .then(response => response.json())

    deleteWidget = wid =>
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: 'DELETE'
        })
        .then(response => response.json())

    createWidget = () => 
    fetch("http://localhost:8080/api/widgets" , {
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
}

export default WidgetService