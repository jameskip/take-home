// @flow
import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    top: '25%',
    position: 'absolute'
  },
  root: {
    padding: theme.spacing(3, 2)
  }
}))

const UserProfile = (props) => {
  const classes = useStyles()
  const { user } = props.state.userReducer.user
  const { company } = props.state.userReducer.user

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      {user && (
        <div className={classes.container}>

          <div className={classes.root}>
            <Typography variant="h2">Profile</Typography>

            {user.completed_onboarding && (
              <Typography variant="caption">
                <span aria-label="home-icon" role="img">✅</span> Onboarding Completed
              </Typography>
            )}
          </div>

          <Paper className={classes.root}>
            <Typography variant="h5">
              {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="caption">{company.name}</Typography>

            <br /><br />
            <Typography variant="body1">
              {user.email} <br />
              {user.phone_number}
            </Typography>
          </Paper>

        </div>
      )}
    </Grid>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(UserProfile)
