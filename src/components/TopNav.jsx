// @flow
import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar' // eslint-disable-line no-unused-vars
import Toolbar from '@material-ui/core/Toolbar' // eslint-disable-line no-unused-vars
import Typography from '@material-ui/core/Typography' // eslint-disable-line no-unused-vars
import IconButton from '@material-ui/core/IconButton' // eslint-disable-line no-unused-vars
import MenuIcon from '@material-ui/icons/Menu' // eslint-disable-line no-unused-vars
import AccountCircle from '@material-ui/icons/AccountCircle' // eslint-disable-line no-unused-vars
import Switch from '@material-ui/core/Switch' // eslint-disable-line no-unused-vars
import FormControlLabel from '@material-ui/core/FormControlLabel' // eslint-disable-line no-unused-vars
import FormGroup from '@material-ui/core/FormGroup' // eslint-disable-line no-unused-vars
import MenuItem from '@material-ui/core/MenuItem' // eslint-disable-line no-unused-vars
import Menu from '@material-ui/core/Menu' // eslint-disable-line no-unused-vars

const useStyles = makeStyles(theme => ({
  root: {
    top: 0,
    flexGrow: 1,
    width: '100%',
    position: 'fixed'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const TopNav = props => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const { user } = props.state.userReducer.user
  // const { company } = props.state.userReducer.user
  // const { state } = props

  const handleMenu = event => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <div className={classes.root}>
      <AppBar position="static">

        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          {user && ( // eslint-disable-line no-mixed-operators
            <Typography variant="h6" className={classes.title}>
              {user.first_name}
            </Typography>
          ) || ( // eslint-disable-line no-mixed-operators
            <Typography variant="h6" className={classes.title}></Typography> // This is used to hold a spot for the users name
          )}

          {user && (
            <div>
              <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >

                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}

        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(TopNav)
