// @flow
import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper' // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button' // eslint-disable-line no-unused-vars
import Modal from '@material-ui/core/Modal' // eslint-disable-line no-unused-vars

import { GOOGLE_MAPS_API_KEY } from '../.env.dev.js'
import LinearQuery from './LinearQuery'

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
  modal: {
    width: 800,
    height: 450,
    frameBorder: 0,
    border: 0
  },
  button: {
    backgroundColor: theme.palette.primary.main
  }
}))

const MapModal = props => {
  const classes = useStyles()
  const [loaded, setLoaded] = React.useState(false)
  const handleRender = () => setLoaded(true)

  const { validOrigin, validDestination } = props.state.validationReducer.validatedAddress
  const url = `&origin=${validOrigin && validOrigin.geocoded_address.formatted_address}&destination=${validDestination && validDestination.geocoded_address.formatted_address}`

  const renderModal = (location: string) => {
    const urlString = `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}${location}&avoid=tolls`
    return <iframe onLoad={handleRender} className={classes.modal} title="Directions" src={urlString} allowFullScreen />
  }

  return (
    <div className={classes.container}>
      {!loaded && <LinearQuery className={classes.progress} />}
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
