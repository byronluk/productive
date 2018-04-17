// @flow
import React from 'react';
import DailySelector from './DailySelector';
import WeeklySelector from './WeeklySelector';
import type { days, weekly } from './types';

type Props = {
  onSubmit: (values: State) => void
};
export type State = {
  name: string,
  type: string,
  days: days,
  weekly: weekly,
  hasMultiple: boolean,
  multiple: number,
  hasDuration: boolean,
  minutes: number
};

class NewHabit extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      name: '',
      type: 'daily',
      days: {
        M: true,
        T: true,
        W: true,
        Th: true,
        F: true,
        S: true,
        Su: true
      },
      weekly: {
        times: 5,
        biWeekly: false
      },
      hasMultiple: false,
      multiple: 0,
      hasDuration: false,
      minutes: 0
    };
  }

  handleChange = (event: SyntheticKeyboardEvent<HTMLInputElement>): void => {
    let { name, value } = event.currentTarget;

    // string => boolean conversion for checkboxes
    if (/^has/.test(name)) {
      value = value === 'true' ? false : true;
    }
    this.setState({
      [[name]]: value
    });
  };

  handleSubmit = (event: SyntheticMouseEvent<HTMLButtonElement>): void => {
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit(this.state);
  };

  handleDayClick = (event: SyntheticMouseEvent<HTMLInputElement>): void => {
    const { name } = event.currentTarget;
    this.setState(prevState => {
      const days = Object.assign({}, prevState.days);
      days[name] = !days[name];
      return { days };
    });
  };

  handleWeekClick = (event: SyntheticMouseEvent<HTMLInputElement>): void => {
    console.log(event.currentTarget.name);
    const { name, value } = event.currentTarget;
    this.setState(prevState => {
      const weekly = Object.assign({}, prevState.weekly);
      if (name === 'biWeekly') {
        weekly[name] = !weekly[name];
      } else {
        weekly[name] = value;
      }
      return { weekly };
    });
  };

  toggleDays = (event: SyntheticMouseEvent<HTMLButtonElement>): void => {
    const { name } = event.currentTarget;
    const weekdays = {
      M: true,
      T: true,
      W: true,
      Th: true,
      F: true,
      S: false,
      Su: false
    };
    if (name === 'weekends') {
      for (let day in weekdays) {
        weekdays[day] = !weekdays[day];
      }
    }
    this.setState({
      days: weekdays
    });
  };

  render() {
    return (
      <div className="modal-dialog" role="document">
        <form className="modal-content" onSubmit={this.handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title" id="addHabitModalLabel">
              New Habit
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <input
                name="name"
                type="text"
                onChange={this.handleChange}
                className="form-control"
                placeholder="habit name"
              />
            </div>
            <div className="form-group container">
              <p className="lead text-center">I want to repeat this habit</p>
              <div
                className="btn-group-toggle row justify-content-around mb-4"
                data-toggle="buttons"
              >
                <label
                  className="btn btn-outline-dark btn-block col-5 border-0 active"
                  data-toggle="collapse"
                  data-target="#dailySelectCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="dailySelectCollapse"
                >
                  <input
                    type="radio"
                    name="type"
                    value="daily"
                    autoComplete="off"
                    onFocus={this.handleChange}
                  />
                  Daily
                </label>
                <span className="lead">or</span>
                <label
                  className="btn btn-outline-dark btn-block col-5 border-0 my-0"
                  data-toggle="collapse"
                  data-target="#weeklySelectCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="weeklySelectCollapse"
                >
                  <input
                    type="radio"
                    name="type"
                    value="weekly"
                    autoComplete="off"
                    onFocus={this.handleChange}
                  />
                  Weekly
                </label>
              </div>
              <div id="accordion">
                <div className="collapse show" id="dailySelectCollapse" data-parent="#accordion">
                  <DailySelector
                    days={this.state.days}
                    onClick={this.handleDayClick}
                    toggleDays={this.toggleDays}
                  />
                </div>
                <div className="collapse" id="weeklySelectCollapse" data-parent="#accordion">
                  <WeeklySelector weekly={this.state.weekly} onClick={this.handleWeekClick} />
                </div>
              </div>
            </div>
            <div className="dropdown-divider my-3" />
            <div className="form-group">
              <div
                className="btn-group-toggle row justify-content-around mb-4"
                data-toggle="buttons"
              >
                <label
                  className="btn btn-outline-dark btn-block col-5 border-0"
                  data-toggle="collapse"
                  data-target="#setMultipleCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="setMultipleCollapse"
                >
                  <input
                    type="checkbox"
                    name="hasMultiple"
                    onFocus={this.handleChange}
                    value={this.state.hasMultiple}
                    autoComplete="off"
                  />
                  Set Multiple
                </label>
                <label
                  className="btn btn-outline-dark btn-block col-5 border-0 my-0 collapsed"
                  data-toggle="collapse"
                  data-target="#setDurationCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="setDurationCollapse"
                >
                  <input
                    type="checkbox"
                    name="hasDuration"
                    onFocus={this.handleChange}
                    value={this.state.hasDuration}
                    autoComplete="off"
                  />
                  Set Duration
                </label>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="collapse form-inline" id="setMultipleCollapse">
                    <input
                      className="form-control mx-2 w-25"
                      name="multiple"
                      value={this.state.multiple}
                      onChange={this.handleChange}
                      type="number"
                    />
                    times
                  </div>
                </div>
                <div className="col-6">
                  <div className="collapse form-inline" id="setDurationCollapse">
                    <input
                      className="form-control mx-2"
                      style={{ width: '35%' }}
                      name="minutes"
                      value={this.state.minutes}
                      onChange={this.handleChange}
                      type="number"
                      step="30"
                    />
                    minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Create Habit
            </button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}

/* TODO: add text for what type of habit I am going to create
 * e.g. I want to medidate 
 * 3 times daily
 * on Sunday, Monday, and Tuesday
 * for 2 hours each rep. 
 * habit name -- daily -- days in week -- repetition && duration
 */

export default NewHabit;
