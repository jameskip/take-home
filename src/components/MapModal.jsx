// @flow
import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper' // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button' // eslint-disable-line no-unused-vars
import Modal from '@material-ui/core/Modal' // eslint-disable-line no-unused-vars

import { GOOGLE_MAPS_API_KEY } from '../.env.dev.js'
import { getModalStyle } from '../utils.js'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    display: 'flex',
    width: 675,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none'
  },
  button: {
    backgroundColor: theme.palette.primary.main
  }
}))

const renderModal = (location: string) => {
  const url = `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}${location}&avoid=tolls`
  return (
    <iframe
      width="600"
      height="450"
      frameBorder="0"
      title="Directions"
      style={{ 'border': '0' }}
      src={url}
      allowFullScreen
    >
    </iframe>
  )
}

const MapModal = props => {
  const { state } = props
  const classes = useStyles()

  const [modalStyle] = React.useState(getModalStyle)
  const url = `&origin=${state.addressReducer.originAddress}&destination=${state.addressReducer.destinationAddress}`

  return (

    <Paper>
      <div style={modalStyle} className={classes.paper}>'
        {renderModal(url)}
      </div>
    </Paper>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(MapModal)
