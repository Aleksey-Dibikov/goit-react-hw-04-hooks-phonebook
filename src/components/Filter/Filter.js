import PropTypes from 'prop-types';
// import React, { Component } from 'react';
import s from './Filter.module.css';

export function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        className={s.TaskEditor_input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
}

// class Filter extends Component {
//   render() {
//     const { value, onChangeFilter } = this.props;
//     return (
//       <div>
//         <h3>Find contacts by name</h3>
//         <input
//           className={s.TaskEditor_input}
//           type="text"
//           value={value}
//           onChange={e => onChangeFilter(e.target.value)}
//         />
//       </div>
//     );
//   }
// }

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};

// export default Filter;
