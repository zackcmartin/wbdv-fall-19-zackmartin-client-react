import React from 'react'

const ListWidget = ({widget}) =>
    <div>
        {!widget.ordered &&
        <ul>
            {
                widget.text.split('\n').map(item =>
                    <li>{item}</li>
                )
            }
        </ul>
        }
        {widget.ordered &&
        <ol>
            {
                widget.text.split('\n').map(item =>
                    <li>{item}</li>
                )
            }
        </ol>
        }
    </div>

export default ListWidget