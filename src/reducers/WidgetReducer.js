const initialState = {
    widgets: [
        { type: "HEADING", size: 3, text: "Heading Widget", name: "", id: 234 },
        { type: "LIST", ordered: false, text: "List\nWidget", name: "", id: 123 },
        { type: "PARAGRAPH", text: "Paragraph Widget", name: "", id: 345 },
        { type: "IMAGE", url: "http://lorempixel.com/300/150/", name: "", id: 456 },
        { type: "LINK", url: "https://www.facebook.com", text: "Link Widget", name: "", id: 567 }
    ],
    preview: false
}


const widgetListReducer = (state = initialState, action) => {

    console.log(action)

    switch (action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId),
                preview: state.preview
            }
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        type: 'HEADING',
                        size: 1,
                        text: 'New Heading',
                        id: (new Date()).getTime()
                    }
                ],
                preview: state.preview
            }
        case 'UPDATE_WIDGET':
            console.log(action.widget);
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id == action.widget.id && widget.type != action.widget.type) {
                        switch (action.widget.type) {
                            case 'HEADING': return { type: "HEADING", size: 1, text: "", name: action.widget.name, id: action.widget.id }
                            case 'LIST': return { type: "LIST", ordered: false, text: "", name: action.widget.name, id: action.widget.id }
                            case 'PARAGRAPH': return { type: "PARAGRAPH", text: "", name: action.widget.name, id: action.widget.id }
                            case 'IMAGE': return { type: "IMAGE", url: "", name: action.widget.name, id: action.widget.id }
                            case 'LINK': return { type: "LINK", url: "", text: "", name: action.widget.name, id: action.widget.id }
                        }
                    }
                    else if (widget.id == action.widget.id) { return action.widget; }
                    else {
                        return widget;
                    }
                }),
                preview: state.preview
            }

        case 'REPOSITION_WIDGETS':
            if (action.direction == "up") {
                console.log(state)
                var indexOf = state.widgets.indexOf(action.widget)
                var newWidgets = []
                for (var i = 0; i < state.widgets.length; i++) {
                    if ((indexOf - 1) == i) {
                        newWidgets.push(action.widget)
                        newWidgets.push(state.widgets[i])
                        i++
                    }
                    else {
                        newWidgets.push(state.widgets[i])
                    }
                }
                return {
                    widgets: [...newWidgets],
                    preview: state.preview
                }
            }
            else if (action.direction == "down") {
                var indexOf = state.widgets.indexOf(action.widget)
                var newWidgets = []
                for (var i = 0; i < state.widgets.length; i++) {
                    if (indexOf == i) {
                        newWidgets.push(state.widgets[i + 1])
                        newWidgets.push(action.widget)
                        i++
                    }
                    else {
                        newWidgets.push(state.widgets[i])
                    }
                }
                return {
                    widgets: [...newWidgets],
                    preview: state.preview
                }
            }

            case 'TOGGLE_PREVIEW':
                if(state.preview){
                    return {
                        widgets: [...state.widgets],
                        preview: false
                    }
                }
                else{
                    return {
                        widgets: [...state.widgets],
                        preview: true
                    }
                }
        default:
            return state
    }
}

export default widgetListReducer;