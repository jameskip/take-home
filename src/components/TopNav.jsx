// @flow
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import Link from '@material-ui/core/Link'
import Menu from '@material-ui/core/Menu'
import Home from '@material-ui/icons/Home'
import Avatar from '@material-ui/core/Avatar'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { getUser } from '../redux/actions'

const useStyles = makeStyles(theme => ({
  root: {
    top: 0,
    flexGrow: 1,
    width: '100%',
    position: 'relative',
    zIndex: 1100
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
  const { dispatch } = props
  const { user } = props.state.userReducer.user
  const { company } = props.state.userReducer.user

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  useEffect(() => { if (!user) dispatch(getUser()) }, [user, dispatch]) // optional second argument provided to useEffect() in order to only run on mount and unmount

  const handleMenu = event => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <IconButton component={RouterLink} to={'/'} color="secondary" edge="start" className={classes.menuButton} aria-label="Menu"><Home /></IconButton>

          {company && (<Typography variant="overline" className={classes.title}>{company.name}</Typography>)}

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
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem component={RouterLink} to={'/user'} onClick={handleClose}>Profile</MenuItem>
                <MenuItem component={Link} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href={'https://youtu.be/dQw4w9WgXcQ'} onClick={handleClose}>My account</MenuItem>
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
