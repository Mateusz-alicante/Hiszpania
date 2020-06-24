import React from 'react'

import { connect } from 'react-redux'
import { setFairFilters } from '../../../Components/Utils/Redux/Actions/Filters'

import Expand from 'react-expand-animated';
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import styles from './ExpandableOptions.module.css'
import moment from 'moment'


class ExpandableOptions extends React.Component {

    state = {
        filtersIsOpen: false,
        startDate: this.props.redux.FairFilters.startDate ? moment(this.props.redux.FairFilters.startDate) : null,
        endDate: this.props.redux.FairFilters.endDate ? moment(this.props.redux.FairFilters.endDate) : null,
        dateSelectorFocused: "startDate"

    }


    toggleOpenFilters = () => {
        this.setState((oldState) => ({ filtersIsOpen: !oldState.filtersIsOpen }))
    }

    handleDateChange = async ({ startDate, endDate }) => {
            this.setState((oldState) => ({ ...oldState, startDate, endDate }))
            
            if (startDate && endDate) {
                this.saveFilters({ startDate: startDate.toDate(), endDate: endDate.toDate() })
            }
    }

    saveFilters = (filters) => {
        this.props.dispatch(setFairFilters(filters))
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleOpenFilters}>Filtruj targi</button>
                <Expand open={this.state.filtersIsOpen}>
                    <div>
                        <h3>Sortuj według daty:</h3>
                        <div>
                            <DateRangePicker

                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                startDateId="your_unique_start_date_id"
                                endDateId="your_unique_end_date_id"
                                onDatesChange={this.handleDateChange} // PropTypes.func.isRequired,
                                focusedInput={this.state.dateSelectorFocused}
                                onFocusChange={focusedInput => this.setState({ dateSelectorFocused: focusedInput })}
                                isOutsideRange={() => false}
                            />
                        </div>
                    </div>
                </Expand>



            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(ExpandableOptions)