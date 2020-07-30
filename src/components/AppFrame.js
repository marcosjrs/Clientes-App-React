import React from 'react'
import PropTypes from 'prop-types'
import AppHeader from './AppHeader'

const AppFrame = ({ header, body, footer }) => {
    return (
        <div className="app-frame">
            <AppHeader title={header}></AppHeader>
            <div>{body}</div>
            <div>{footer}</div>
        </div>
    )
}

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.node.isRequired,
    footer: PropTypes.string.isRequired
}

export default AppFrame
