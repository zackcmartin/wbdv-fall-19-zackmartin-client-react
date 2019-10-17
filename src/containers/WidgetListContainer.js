import React from 'react'
import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from 'react-redux'

const stateToPropertyMapper = state => {
    return {
        widgets: state.widgets
    }
}

const dispatcherToPropertyMapper = dispatch => {
    return {
        addWidget: () => {
            dispatch({type: 'CREATE_WIDGET'})
        },
        deleteWidget: (id) => {
            dispatch({type: 'DELETE_WIDGET', widgetId: id})
        },
        updateWidget: widget => {
            console.log(widget);
            dispatch({type: 'UPDATE_WIDGET', widget: widget})
        },
    }
}

const WidgetListContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (WidgetListComponent)

export default WidgetListContainer;