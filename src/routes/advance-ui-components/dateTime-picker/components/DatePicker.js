// Date Picker
import React, { Fragment, PureComponent } from 'react';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';

export default class DatePickers extends PureComponent {

	state = {
		selectedDate: moment(),
	};

	handleDateChange = (date) => {
		this.setState({ selectedDate: date });
	};

	render() {
		const { selectedDate } = this.state;
		return (
			<Fragment>
				<div className="rct-picker">
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
						 	disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="date-picker-inline"
							KeyboardButtonProps={{
							'aria-label': 'change date',
							}}
							label="Choose a date"
							value={selectedDate}
							onChange={this.handleDateChange}
							animateYearScrolling={false}
							leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
							rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
							fullWidth
						/>
					</MuiPickersUtilsProvider>
				</div>
			</Fragment>
		)

	}
}