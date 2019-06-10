// @flow
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar' // eslint-disable-line no-unused-vars
import Toolbar from '@material-ui/core/Toolbar' // eslint-disable-line no-unused-vars
import Typography from '@material-ui/core/Typography' // eslint-disable-line no-unused-vars
import IconButton from '@material-ui/core/IconButton' // eslint-disable-line no-unused-vars
import Home from '@material-ui/icons/Home' // eslint-disable-line no-unused-vars
import Avatar from '@material-ui/core/Avatar' // eslint-disable-line no-unused-vars
import Switch from '@material-ui/core/Switch' // eslint-disable-line no-unused-vars
import FormControlLabel from '@material-ui/core/FormControlLabel' // eslint-disable-line no-unused-vars
import FormGroup from '@material-ui/core/FormGroup' // eslint-disable-line no-unused-vars
import MenuItem from '@material-ui/core/MenuItem' // eslint-disable-line no-unused-vars
import MenuList from '@material-ui/core/MenuList' // eslint-disable-line no-unused-vars
import Menu from '@material-ui/core/Menu' // eslint-disable-line no-unused-vars

import { getUser } from '../redux/actions'

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
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }
}))

const TopNav = props => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const { dispatch } = props

  const { user } = props.state.userReducer.user
  useEffect(() => { if (!user) dispatch(getUser()) }, [user, dispatch]) // optional second argument provided to useEffect() in order to only run on mount and unmount

  const handleMenu = event => setAnchorEl(event.currentTarget)
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="secondary" edge="start" className={classes.menuButton} aria-label="Menu">
            <a style={{ color: 'black' }} target="_blank" rel="noopener noreferrer" href="https://youtu.be/dQw4w9WgXcQ"> <Home /> </a>
          </IconButton>
          {user && ( // eslint-disable-line no-mixed-operators
            <Typography variant="h6" className={classes.title}>
              Hi, {user.first_name} 👋🏼
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
                <Avatar className={classes.avatar}> {user.first_name[0]} </Avatar>
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
                <MenuItem component={Link} to={'/user'} onClick={handleClose}>Profile</MenuItem>
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
