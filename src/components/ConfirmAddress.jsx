// @flow
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import LinearQuery from './LinearQuery'

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  paper: {
    position: 'absolute',
    top: '25%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 2),
    outline: 'none'
  },
  header: {
    margin: 15
  },
  card: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    padding: theme.spacing(4),
    margin: 15,
    outline: 'none'

  },
  button: {
    float: 'right',
    display: 'flex',
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  progress: {
    position: 'absolute',
    zIndex: 1500,
    top: 0
  }
}))

const ConfirmAddress = (props) => {
  const classes = useStyles()
  const { validOrigin, validDestination } = props.state.validationReducer.validatedAddress
  const [disabled, setDisabled] = React.useState(true)

  const disableButton = () => !(validOrigin || validDestination) ? setDisabled(true) : setDisabled(false)
  useEffect(() => disableButton())

  return (
    <>
      {!(validOrigin || validDestination) && <LinearQuery className={classes.progress} />}
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <div className={classes.container}>
            <Paper className={classes.paper}>

              <Typography className={classes.header} variant="h5" gutterBottom>Confirm Address</Typography>

              <Paper className={classes.card}>
                {validOrigin && (
                  <Typography variant="body1" className={classes.title}>
                    {validOrigin.geocoded_address && validOrigin.geocoded_address.formatted_address}
                  </Typography>
                ) || (
                  <Typography color="textSecondary" variant="overline" className={classes.title}>Orgin</Typography>
                )}
              </Paper>

              <Paper className={classes.card}>
                {validDestination && (
                  <Typography variant="body1" className={classes.title}>
                    {validDestination.geocoded_address && validDestination.geocoded_address.formatted_address}
                  </Typography>
                ) || (
                  <Typography color="textSecondary" variant="overline" className={classes.title}>Destination</Typography>
                )}
              </Paper>

              <Button disabled={disabled} component={Link} to={'/map'} className={classes.button}>Map</Button>
              <Button onClick={props.history.goBack} className={classes.button}>Back</Button>
            </Paper>
          </div>
        </Grid>

      </Grid>
    </>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(ConfirmAddress)
