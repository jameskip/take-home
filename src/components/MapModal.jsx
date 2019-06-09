// @flow
import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper' // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button' // eslint-disable-line no-unused-vars
import Modal from '@material-ui/core/Modal' // eslint-disable-line no-unused-vars

import { GOOGLE_MAPS_API_KEY } from '../.env.dev.js'

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
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
  return <iframe width="600" height="450" frameBorder="0" title="Directions" style={{ 'border': '0' }} src={url} allowFullScreen />
}

const MapModal = props => {
  const classes = useStyles()

  const { validOrigin, validDestination } = props.state.validationReducer.validatedAddress
  const url = `&origin=${validOrigin.geocoded_address.formatted_address}&destination=${validDestination.geocoded_address.formatted_address}`

  return (
    <div className={classes.container}>
      <Paper>
        <div className={classes.paper}>'
          {renderModal(url)}
        </div>
      </Paper>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(MapModal)
