// @flow
import * as React from 'react';
import isEqual from 'lodash.isequal';
import type { days, daysClass } from '../types';

type Props = {
  onClick: (event: SyntheticMouseEvent<HTMLInputElement>) => void,
  toggleDays: (event: SyntheticMouseEvent<HTMLButtonElement>) => void,
  days: days
};

type State = daysClass;

class DailySelector extends React.Component<Props, State> {
  constructor(props: Props) {
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

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State | null {
    const { days } = nextProps;
    const nextState = Object.assign(prevState);
    for (let day in days) {
      //  if day doesn't need to be changed
      if (days[day] && /active/.test(nextState[day])) {
        continue;
      }
      nextState[day] = days[day]
        ? (prevState[day] += ' active')
        : prevState[day].replace(/active/g, '');
    }
    if (isEqual(prevState, nextState)) {
      return null;
    } else {
      return nextState;
    }
  }

  handleFocus = (event: SyntheticMouseEvent<HTMLInputElement>): void => {
    const day = event.currentTarget.name;
    this.setState(prevState => {
      // remove extra spaces
      let currentDay = prevState[day].trim().replace(/\s+/g, ' ');
      return { [[day]]: (currentDay += ' focus') };
    });
  };

  handleBlur = (event: SyntheticMouseEvent<HTMLButtonElement>): void => {
    const day = event.currentTarget.name;
    this.setState(prevState => {
      return { [[day]]: prevState[day].trim().replace(/focus/, '') };
    });
  };

  render() {
    const { Su, M, T, W, Th, F, S } = this.state;
    const { onClick, toggleDays, days } = this.props;
    return (
      <React.Fragment>
        <div
          id="daily-buttons-container"
          className="row justify-content-around btn-group-toggle mb-3"
        >
          <label className={`btn btn-outline-secondary border-0 ${Su}`}>
            <input
              onClick={onClick}
              onFocus={this.handleFocus}
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
              onFocus={this.handleFocus}
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
              onFocus={this.handleFocus}
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
              onFocus={this.handleFocus}
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
              onFocus={this.handleFocus}
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
              onFocus={this.handleFocus}
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
              onFocus={this.handleFocus}
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
            onClick={toggleDays}
            className="btn btn-sm btn-outline-info btn-block col mx-1"
            type="button"
            name="weekdays"
          >
            Weekdays
          </button>
          <button
            onClick={toggleDays}
            className="btn btn-sm btn-outline-info btn-block col mx-1 my-0"
            type="button"
            name="weekends"
          >
            Weekends
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default DailySelector;
