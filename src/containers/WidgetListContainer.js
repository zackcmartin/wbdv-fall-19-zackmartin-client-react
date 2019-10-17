import React from 'react'
import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from 'react-redux'

const stateToPropertyMapper = state => {
    return {
        widgets: state.widgets,
        preview: state.preview
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
            dispatch({type: 'UPDATE_WIDGET', widget: widget})
        },
        repositionWidgets: (widget, direction) => {
            dispatch({type: 'REPOSITION_WIDGETS', widget: widget, direction: direction})
        },
        togglePreview: () => {
            dispatch({type: 'TOGGLE_PREVIEW'})
        }
    }
}

const WidgetListContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (WidgetListComponent)

export default WidgetListContainer;