import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button' // eslint-disable-line no-unused-vars
import Modal from '@material-ui/core/Modal' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { GOOGLE_MAPS_API_KEY } from '../.env.dev'

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
    display: 'flex',
    width: 675,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none'
  },
  button: {
    backgroundColor: theme.palette.primary.main
  }
}))

const renderModal = (location) => {
  const url = `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}${location}&avoid=tolls`
  console.log({ location })
  return (
    <iframe
      width="600"
      height="450"
      frameBorder="0"
      title="Directions"
      style={{ 'border': '0' }}
      src={url}
      allowFullScreen
    >
    </iframe>
  )
}

const MapsModal = (props) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const [modalStyle] = React.useState(getModalStyle)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (

    <>
      <Button className={classes.button} onClick={handleOpen}>Map</Button>

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
    </>
  )
}

const mapStateToProps = (state, ownProps) => ({ state })

export default connect(mapStateToProps)(MapsModal)
