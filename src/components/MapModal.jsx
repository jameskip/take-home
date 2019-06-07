import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const rand = () => {
  return Math.round(Math.random() * 20) - 10
}

const getModalStyle = () => {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 675,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none'
  }
}))

const MapsModal = (props) => {
  const [open, setOpen] = React.useState(false)
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)
  const [loaded, setLoaded] = React.useState(false)

  const handleRender = () => setLoaded(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setLoaded(false)
  }
  const classes = useStyles()

  const renderModal = (location) => {
    return (
      <iframe width="600" height="450" frameBorder="0" onLoad={handleRender} style={{ 'border': '0' }} src={`https://www.google.com/maps/embed/v1/place?q=${location}&key=AIzaSyDAh9dEXF_kYIqYav1ZFboMtXfRvlQtONo`} allowFullScreen>
      </iframe>
    )
  }

  return (

    <div>
      <Button onClick={handleOpen}>Map</Button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >

        <div style={modalStyle} className={classes.paper}>'
          {renderModal(props.location)}
        </div>

      </Modal>
    </div>
  )
}

export default MapsModal
