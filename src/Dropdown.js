import React from 'react'
import PropTypes from 'prop-types'
// Css
import styles from './styles.module.css'

/**
 * @description Component that show an input select
 * @returns { HTMLElement }
 */
export const SelectMenu = ({
  htmlFor,
  defaultValue,
  options,
  label,
  hideLabel,
  wrapperStyle,
  selectStyle
}) => {
  return (
    <div className={styles.dropdownSelect} style={wrapperStyle}>
      <label htmlFor={htmlFor} className={hideLabel ? 'sr-only' : ''}>
        {label}
      </label>
      <select
        name={htmlFor}
        id={htmlFor}
        className={styles.selectName}
        style={selectStyle}
      >
        <option value=''>{defaultValue}</option>
        {options.map((option) => {
          return (
            <option
              value={option.value ? option.value : option.option}
              key={option.option}
            >
              {option.option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

// Prop-Types
SelectMenu.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.array,
  hideLabel: PropTypes.bool,
  labelName: PropTypes.string,
  wrapperStyle: PropTypes.object,
  selectStyle: PropTypes.object
}
