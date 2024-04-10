// Time Picker
import React, { Component } from 'react';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardTimePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';

export default class TimePickers extends Component {

	state = {
		selectedDate: moment(),
	};

	handleDateChange = (date) => {
		this.setState({ selectedDate: date });
	};

	render() {
		const { selectedDate } = this.state;
		return (
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<div className="rct-picker">
					<div className="picker">
						<KeyboardTimePicker
							margin="normal"
							id="time-picker"
							label="Time picker"
							KeyboardButtonProps={{
							'aria-label': 'change time',
							}}
							value={selectedDate}
							onChange={this.handleDateChange}
							fullWidth
						/>
					</div>
				</div>
			</MuiPickersUtilsProvider>
		)
	}
}
