import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
    padding: theme.spacing(3, 2),
    position: 'absolute',
    width: '80%',
    top: '25%'
  }
}))

const UserProfile = (props) => {
  const classes = useStyles()
  const { user } = props.state.userReducer.user
  const { company } = props.state.userReducer.user

  console.log({ user, company })

  return (
    <>
    {user && (
      <div className={classes.container}>
        <Paper className={classes.root}>

          <span>
            <Typography variant="h2">
            Profile
            </Typography>
            {user.completed_onboarding && (
              <Typography variant="caption">
                <span aria-label="home-icon" role="img">✅ Onboarding Completed</span>
              </Typography>
            )}
          </span>

          <br /><br />
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
    </>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(UserProfile)
