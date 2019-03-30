import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Grid,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
});

class AddEvent extends React.Component {
  state = {
    open: false,
    day: 0,
    dayError: null,
    name: "",
    nameError: null,
    startTime: null,
    startTimeError: null,
    endTime: null,
    endTimeError: null,
    loc: "",
    locError: null,
    desc: "",
    descError: null,
    organizer: "",
    organizerError: null,
    organizerContact: "",
    organizerContactError: null
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
  };

  render() {
    const classes = this.props.classes;
    return (
      <span >
        <Button variant="outlined" color="default" onClick={this.handleClickOpen}>
          Add Event
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Event</DialogTitle>
          <DialogContent>
            <Grid container spacing={8}>
              {/* Introduction */}
              <Grid item xs={12}>
                <DialogContentText>
                  Please enter the details for the event. It is your responsibility to make sure your event leaves no trace.
                </DialogContentText>
              </Grid>

              {/* Event name */}
              <Grid item xs={12}>
                <TextField
                  error={this.state.nameError} 
                  autoFocus
                  onChange={(event) => this.setState({name: event.target.value})}
                  id="name"
                  label="Event Name"
                  fullWidth
                />
                <FormHelperText error>{this.state.nameError}</FormHelperText>
              </Grid>

              {/* Organizer name */}
              <Grid item xs={12}>
                <TextField
                  error={this.state.organizerError} 
                  autoFocus
                  onChange={(event) => this.setState({organizer: event.target.value})}
                  id="name"
                  label="Organizer"
                  fullWidth
                />
                <FormHelperText error>{this.state.organizerError}</FormHelperText>
              </Grid>

              {/* Location */}
              <Grid item xs={12}>
                <TextField
                  error={this.state.locError} 
                  autoFocus
                  onChange={(event) => this.setState({loc: event.target.value})}
                  id="name"
                  label="Location"
                  fullWidth
                />
                <FormHelperText error>{this.state.locError}</FormHelperText>
              </Grid>

              {/* Day dropdown */}
              <Grid item xs={4}>
                <FormControl>
                  <InputLabel htmlFor="day">Day</InputLabel>
                  <Select
                    name="day"
                    value={this.state.day}
                    onChange={(event) => this.setState({day: event.target.value})}
                  >
                    <MenuItem value="0">Tuesday</MenuItem>
                    <MenuItem value="1">Wednesday</MenuItem>
                    <MenuItem value="2">Thursday</MenuItem>
                    <MenuItem value="3">Friday</MenuItem>
                  </Select>
                  <FormHelperText error>{this.state.dayError}</FormHelperText>
                </FormControl>
              </Grid>
              
              {/* Start and end time pickers */}
              <Grid item xs={4}>
                  <TextField
                    id="startTime"
                    label="Start Time"
                    type="time"
                    onChange={(event) => this.setState({startTime: event.target.value})}
                    defaultValue=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
              </Grid>
              <Grid item xs={4}>
                  <TextField
                    id="startTime"
                    label="End Time"
                    type="time"
                    onChange={(event) => this.setState({endTime: event.target.value})}
                    defaultValue=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
              </Grid>
              
              {/* Description */}
              <Grid item xs={12}>
                  <TextField
                    error={this.state.descError} 
                    autoFocus
                    onChange={(event) => this.setState({desc: event.target.value})}
                    rows="5"
                    variant="outlined"
                    id="name"
                    label="Description"
                    multiline
                    fullWidth
                  />
                  <FormHelperText>140 character Maximum</FormHelperText>
                  <FormHelperText error>{this.state.descError}</FormHelperText>
              </Grid>
            </Grid>

            {/* Action Buttons */}
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" variant="outlined">
                Cancel
              </Button>
              <Button onClick={this.handlePreview} color="primary" variant="outlined">
                Save & Add More
              </Button>
              <Button onClick={this.handlePreview} color="primary" variant="outlined">
                Save
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </span>
    );
  }
}
export default withStyles(styles)(AddEvent);
