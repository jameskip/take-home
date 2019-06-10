// @flow
import React, { useEffect } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper' // eslint-disable-line no-unused-vars
import { makeStyles } from '@material-ui/core/styles'

import LinearQuery from './LinearQuery'
import { GOOGLE_MAPS_API_KEY } from '../.env.dev.js'

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    width: '100%',
    top: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    flexGrow: 1,
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none'
  },
  modal: {
    position: 'absolute',
    top: 100,
    width: '100%',
    height: '80%',
    frameBorder: 0,
    border: 0,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none'
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
  const urlQuery = validOrigin && validDestination ? `&origin=${validOrigin.geocoded_address.formatted_address}&destination=${validDestination.geocoded_address.formatted_address}` : ''

  const renderModal = (location: string) => {
    const urlString = `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}${location}&avoid=tolls`
    return <iframe onLoad={handleRender} className={classes.modal} title="Directions" src={urlString} allowFullScreen />
  }

  return (
    <>
      {!loaded && <LinearQuery className={classes.progress} />}
      <Paper className={classes.container}>
        {renderModal(urlQuery)}
      </Paper>
    </>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(MapModal)
