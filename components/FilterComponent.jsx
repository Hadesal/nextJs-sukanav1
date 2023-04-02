import React from 'react'

export default function FilterComponent(props) {
  const { currency, options, label, onChange } = props;
    return (
      <div className='filter-combo'>
        <label>{label}
     
        <select
        name="currency"
        id=""
        className="select-ctn"
        value={currency}
        onChange={onChange}
      >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        </label>
      </div>
    );
  }
