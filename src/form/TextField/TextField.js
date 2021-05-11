import React from "react";
import PropTypes from "prop-types";

export function TextField(props) {
  const {
    classNames,
    errorMessage,
    isValid,
    name,
    onBlur,
    onChange,
    required,
    type,
    value
  } = props;

  const errorId = `${name}_error`;
  const labelId = `${name}_label`;

  const handleBlur = ({ currentTarget: { value } }) => onBlur(value);
  const handleChange = ({ currentTarget: { value } }) => onChange(value);

  return (
    <div className={}>
      <input
        aria-describedby={errorId}
        aria-labelledby={lableId}
        aria-required={required}
        className=""
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        required={required}
        type={type}
        value={value}
      />
      <span aria-hidden="true" className="form-textbox-label" id={labelId}>
        label
      </span>
      <div
    </div>
  );
}

TextField.propTypes = {
  classNames: PropTypes.string,
  errorMessage: PropTypes.string,
  isValid: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.oneOf(["email", "tel", "text"]),
  value: PropTypes.string
};

TextField.defaultProps = {
  required: false,
  type: "text",
  value: ""
};
