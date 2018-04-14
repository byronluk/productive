// @flow
import * as React from 'react';
import type { days, daysClass } from '../types';

type Props = {
  onClick: () => void,
  days: days
};

type State = daysClass;
/* TODO: add a component will recieve props for prop changes in value
 * let the value determine the class/apperance of each toggle instead of having separate controllers
 * NewHabit will hold the state for the value and pass down day values to this component
 */

class DailySelector extends React.Component<Props, State> {
  constructor(props: Props) {
    console.log(props);
    super(props);
    this.state = {
      Su: 'active',
      M: 'active',
      T: 'active',
      W: 'active',
      Th: 'active',
      F: 'active',
      S: 'active'
    };
  }

  static getDerivedStateFromProps(nextProps: State, prevState: State): State | null {
    console.log(nextProps, prevState);
    return null;
  }

  // loop through state to change focus and active classes on days
  handleDayClick = (event: SyntheticMouseEvent<HTMLButtonElement>): void => {
    let day = event.currentTarget.name;
    this.setState(prevState => {
      const stateCopy = Object.assign({}, prevState);
      for (let prop in stateCopy) {
        stateCopy[prop] = stateCopy[prop].trim().replace(/focus/, '');
      }
      if (/active/.test(stateCopy[day])) {
        stateCopy[day] = stateCopy[day].trim().replace(/active/, '');
      } else {
        stateCopy[day] += ' active';
      }
      stateCopy[day] += ' focus';
      return stateCopy;
    });
  };

  handleBlur = (event: SyntheticMouseEvent<HTMLButtonElement>): void => {
    let day = event.currentTarget.name;
    this.setState(prevState => {
      const stateCopy = Object.assign({}, prevState);
      stateCopy[day] = stateCopy[day].trim().replace(/focus/, '');

      return stateCopy;
    });
  };

  toggleWeekdays = () => {
    const { toggleDays } = this.props;
    toggleDays('weekdays');
    this.setState({
      Su: '',
      M: 'active',
      T: 'active',
      W: 'active',
      Th: 'active',
      F: 'active',
      S: ''
    });
  };

  toggleWeekends = () => {
    const { toggleDays } = this.props;
    toggleDays('weekends');
    this.setState({
      Su: 'active',
      M: '',
      T: '',
      W: '',
      Th: '',
      F: '',
      S: 'active'
    });
  };
  render() {
    const { Su, M, T, W, Th, F, S } = this.state;
    const { onClick, days } = this.props;
    return (
      <React.Fragment>
        <div
          id="daily-buttons-container"
          className="row justify-content-around btn-group-toggle mb-3"
        >
          <label className={`btn btn-outline-secondary border-0 ${Su}`}>
            <input
              onClick={onClick}
              onBlur={this.handleBlur}
              value={days.Su}
              name="Su"
              defaultChecked
              type="checkbox"
              autoComplete="off"
            />
            <span className="h4 mx-1">S</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${M}`}>
            <input
              onClick={onClick}
              onBlur={this.handleBlur}
              value={days.M}
              name="M"
              defaultChecked
              type="checkbox"
              autoComplete="off"
            />
            <span className="h4 mx-0">M</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${T}`}>
            <input
              onClick={onClick}
              onBlur={this.handleBlur}
              value={days.T}
              name="T"
              defaultChecked
              type="checkbox"
              autoComplete="off"
            />
            <span className="h4 mx-1">T</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${W}`}>
            <input
              onClick={onClick}
              onBlur={this.handleBlur}
              value={days.W}
              name="W"
              defaultChecked
              type="checkbox"
              autoComplete="off"
            />
            <span className="h4 mx-0">W</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${Th}`}>
            <input
              onClick={onClick}
              onBlur={this.handleBlur}
              value={days.Th}
              name="Th"
              defaultChecked
              type="checkbox"
              autoComplete="off"
            />
            <span className="h4 mx-1">T</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${F}`}>
            <input
              onClick={onClick}
              onBlur={this.handleBlur}
              value={days.F}
              name="F"
              defaultChecked
              type="checkbox"
              autoComplete="off"
            />
            <span className="h4 mx-1">F</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${S}`}>
            <input
              onClick={onClick}
              onBlur={this.handleBlur}
              value={days.S}
              name="S"
              defaultChecked
              type="checkbox"
              autoComplete="off"
            />
            <span className="h4 mx-1">S</span>
          </label>
        </div>
        <div className="row">
          <button
            className="btn btn-sm btn-outline-info btn-block col mx-1"
            type="button"
            value="weekdays"
          >
            Weekdays
          </button>
          <button
            className="btn btn-sm btn-outline-info btn-block col mx-1 my-0"
            type="button"
            value="weekends"
          >
            Weekends
          </button>
        </div>
      </React.Fragment>
    );
  }
}

// add onclick active for weekdays and weekends and enable functionaly to trigger weekdays only or weekends only

// const onWeekdayClick = (): void => {
//   var weekdayButtons = document.query
//   });
// };

export default DailySelector;
