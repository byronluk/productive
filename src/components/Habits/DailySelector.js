// @flow
import * as React from 'react';
import type { FieldProps } from 'redux-form';

type Props = {
  day: {
    Su: FieldProps,
    M: FieldProps,
    T: FieldProps,
    W: FieldProps,
    Th: FieldProps,
    F: FieldProps,
    S: FieldProps
  },
  toggleDays: (type: string) => void
};

type State = {
  Su: string,
  M: string,
  T: string,
  W: string,
  Th: string,
  F: string,
  S: string,
  weekdays: string,
  weekends: string
};
// attempt to add in focus trigger for recent events
class DailySelector extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      Su: 'active',
      M: 'active',
      T: 'active',
      W: 'active',
      Th: 'active',
      F: 'active',
      S: 'active',
      weekdays: '',
      weekends: ''
    };
  }

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
      S: '',
      weekdays: 'active',
      weekends: ''
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
      S: 'active',
      weekdays: '',
      weekends: 'active'
    });
  };
  render() {
    const { day } = this.props;
    const { Su, M, T, W, Th, F, S, weekdays, weekends } = this.state;
    return (
      <React.Fragment>
        <div
          id="daily-buttons-container"
          className="row justify-content-around btn-group-toggle mb-3"
        >
          <label className={`btn btn-outline-secondary border-0 ${Su}`}>
            <input {...day.Su.input} defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-1">S</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${M}`}>
            <input {...day.M.input} defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-0">M</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${T}`}>
            <input {...day.T.input} defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-1">T</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${W}`}>
            <input {...day.W.input} defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-0">W</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${Th}`}>
            <input {...day.Th.input} defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-1">T</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${F}`}>
            <input {...day.F.input} defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-1">F</span>
          </label>
          <label className={`btn btn-outline-secondary border-0 ${S}`}>
            <input {...day.S.input} defaultChecked type="checkbox" autoComplete="off" />
            <span className="h4 mx-1">S</span>
          </label>
        </div>
        <div className="row">
          <button
            className={`btn btn-sm btn-outline-info btn-block col mx-1 ${weekdays}`}
            type="button"
            value="weekdays"
            onClick={this.toggleWeekdays}
          >
            Weekdays
          </button>
          <button
            className={`btn btn-sm btn-outline-info btn-block col mx-1 my-0 ${weekends}`}
            type="button"
            value="weekends"
            onClick={this.toggleWeekends}
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
