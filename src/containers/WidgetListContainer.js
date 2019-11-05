import React from 'react'
import WidgetListComponent from "../components/WidgetListComponent";
import { connect } from 'react-redux'
import WidgetService from '../services/WidgetService'

const service = WidgetService.getInstance();

const stateToPropertyMapper = state => {
    console.log("MAPPER" + state.widgets);
    return {
        widgets: state.widgets,
        preview: state.preview
    }
}

const propsToDispatcher = dispatch => ({
        addWidget: () => {
            service.createWidget().then(widgets => dispatch({ type: 'CREATE_WIDGET', widgets: widgets }))
        },
        deleteWidget: (id) => {
            service.deleteWidget(id).then(widgets => dispatch({ type: 'DELETE_WIDGET', widgets: widgets }))
        },
        updateWidget: widget => {
            service.updateWidget(widget).then(widgets => dispatch({ type: 'UPDATE_WIDGET', widgets: widgets }))
        },
        repositionWidgets: (widget, direction) => {
            dispatch({ type: 'REPOSITION_WIDGETS', widget: widget, direction: direction })
        },
        togglePreview: () => {
            dispatch({ type: 'TOGGLE_PREVIEW' })
        },
        findAllWidgets: () => {
            service.findAllWidgets().then(widgets => dispatch({type: 'FIND_ALL_WIDGETS', widgets: widgets}))
        }
    })

const WidgetListContainer =
    connect(stateToPropertyMapper,
        propsToDispatcher)
        (WidgetListComponent)

export default WidgetListContainer;