// @flow
import React, { useEffect } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography' // eslint-disable-line no-unused-vars
import Paper from '@material-ui/core/Paper' // eslint-disable-line no-unused-vars
import Button from '@material-ui/core/Button' // eslint-disable-line no-unused-vars
import Modal from '@material-ui/core/Modal' // eslint-disable-line no-unused-vars

import LinearQuery from './LinearQuery' // eslint-disable-line no-unused-vars
import MapModal from './MapModal' // eslint-disable-line no-unused-vars

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    width: '50%',
    top: '25%',
    marginRight: '-50%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none'
  },
  header: {
    margin: 15
  },
  card: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    padding: theme.spacing(4),
    margin: 15,
    outline: 'none'

  },
  button: {
    float: 'right',
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  progress: {
    position: 'relative',
    top: 0
  }
}))

const ConfirmAddress = (props) => {
  const { validOrigin, validDestination } = props.state.validationReducer.validatedAddress
  const classes = useStyles()

  return (
    <div className={classes.container}>

      {!validOrigin && <LinearQuery className={classes.progress} />}
      <Paper className={classes.paper}>
        <Typography className={classes.header} variant="h5" gutterBottom>
          Confirm Address
        </Typography>

        <span>
          <Paper className={classes.card}>
            {validOrigin && ( // eslint-disable-line no-mixed-operators
              <Typography variant="body1" className={classes.title}>
                {validOrigin.geocoded_address && validOrigin.geocoded_address.formatted_address}
              </Typography>
            ) || ( // eslint-disable-line no-mixed-operators
              <Typography color="textSecondary" variant="overline" className={classes.title}>Orgin</Typography>
            )}
          </Paper>

          <Paper className={classes.card}>
            {validDestination && ( // eslint-disable-line no-mixed-operators
              <Typography variant="body1" className={classes.title}>
                {validDestination.geocoded_address && validDestination.geocoded_address.formatted_address}
              </Typography>
            ) || ( // eslint-disable-line no-mixed-operators
              <Typography color="textSecondary" variant="overline" className={classes.title}>Destination</Typography>
            )}
          </Paper>
        </span>

        <div>
          <Button component={Link} to={'/map'} className={classes.button}>
          Map
          </Button>
          <Button onClick={props.history.goBack} className={classes.button}>
          Back
          </Button>
        </div>

      </Paper>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(ConfirmAddress)
