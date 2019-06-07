import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}))

const Welcome = props => {
  const classes = useStyles()
  const [values, setValues] = React.useState({ toAddress: 'Cat in the Hat', fromAddress: '123 fake street' })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
    console.log({ ...values })
  }

  return (
    <>
    <TextField
      required
      id="standard-required"
      label="To"
      value={values.toAddress}
      onChange={handleChange('toAddress')}
      className={classes.textField}
      margin="normal"
    />
    <TextField
      required
      id="standard-required"
      label="From"
      value={values.fromAddress}
      onChange={handleChange('fromAddress')}
      className={classes.textField}
      margin="normal"
    />
  </>
  )
}

export default Welcome
