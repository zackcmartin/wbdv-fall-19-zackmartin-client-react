const initialState = {
    widgets: [
        { type: "HEADING", size: 3, text: "Heading Widget from Redux", name: "", id: 234 },
        { type: "LIST", ordered: false, text: "Item 1\nItem 2\nItem 3", name: "", id: 123 },
        { type: "PARAGRAPH", text: "Hello from Redux paragraph", name: "", id: 345 },
        { type: "IMAGE", url: "http://lorempixel.com/300/150/", name: "", id: 456 },
        { type: "LINK", link: "https://www.facebook.com", text: "Link Widget", name: "", id: 567 }
    ]
}


const widgetListReducer = (state = initialState, action) => {

    console.log(action)

    switch (action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        type: 'HEADING',
                        size: 2,
                        text: 'New Heading',
                        id: (new Date()).getTime()
                    }
                ]
            }
        case 'UPDATE_WIDGET':
            console.log(action.widget);
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id == action.widget.id && widget.type != action.widget.type){
                        switch(action.widget.type){
                            case 'HEADING': return { type: "HEADING", size: 3, text: "Heading Widget", name: action.widget.name, id: action.widget.id }
                            case 'LIST': return { type: "LIST", ordered: false, text: "List\n Widget", name: action.widget.name, id: action.widget.id}
                            case 'PARAGRAPH': return { type: "PARAGRAPH", text: "Paragraph Widget", name: action.widget.name, id: action.widget.id}
                            case 'IMAGE': return { type: "IMAGE", url: "http://lorempixel.com/150/75/", name: action.widget.name, id: action.widget.id }
                            case 'LINK': return { type: "LINK", link: "https://www.facebook.com", text: "Link Widget", name: action.widget.name, id: action.widget.id }
                        }
                    } 
                    else if (widget.id == action.widget.id) { return action.widget; }
                    else {
                        return widget;
                    }
                })
            }
        default:
            return state
    }
}

export default widgetListReducer;