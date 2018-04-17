// @flow
import * as React from 'react';
import type { weekly } from './types';

type Props = {
  weekly: weekly,
  onClick: (event: SyntheticMouseEvent<HTMLInputElement>) => void
};

type State = {
  times: [number, string],
  biWeekly: [boolean, string]
};

class WeeklySelector extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // 0 index is for value, 1 index is for class
      times: [5, 'active'],
      biWeekly: [false, '']
    };
  }
  render() {
    return (
      <React.Fragment>
        <div
          id="weekly-buttons-container"
          className="row justify-content-around btn-group-toggle mb-3"
          data-toggle="buttons"
        >
          <label className="btn btn-outline-secondary border-0">
            <input value="1" name="times" type="radio" autoComplete="off" />
            <span className="h4 mx-1">1</span>
          </label>
          <label className="btn btn-outline-secondary border-0">
            <input value="2" name="times" type="radio" autoComplete="off" />
            <span className="h4 mx-0">2</span>
          </label>
          <label className="btn btn-outline-secondary border-0">
            <input value="3" name="times" type="radio" autoComplete="off" />
            <span className="h4 mx-1">3</span>
          </label>
          <label className="btn btn-outline-secondary border-0">
            <input value="4" name="times" type="radio" autoComplete="off" />
            <span className="h4 mx-0">4</span>
          </label>
          <label className="btn btn-outline-secondary border-0">
            <input value="5" name="times" type="radio" autoComplete="off" />
            <span className="h4 mx-1">5</span>
          </label>
          <label className="btn btn-outline-secondary border-0">
            <input value="6" name="times" type="radio" autoComplete="off" />
            <span className="h4 mx-1">6</span>
          </label>
        </div>
        <div className="container px-5 btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-sm btn-outline-info btn-block col mx-1 my-0">
            <input type="checkbox" name="biWeekly" autoComplete="off" />
            Bi-weekly
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default WeeklySelector;
