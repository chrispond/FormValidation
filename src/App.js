import React, { useEffect, useReducer, useState } from "react";

// TextField, Dropdown, Checkbox, Radio, Numberfield,

const FORM_NAME = "test";
const FormContext = React.createContext();
const FormElementName = {
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  EMAIL: "email"
};

export default function App() {
  const defaultFormContext = (contextData = {}) => {
    const { firstName, lastName, emailAddress } = contextData;

    return {
      isFormValid: (!!firstName, !!lastName, !!emailAddress) || false,
      formFields: {
        [FormElementName.FIRST_NAME]: {
          required: true,
          valid: !!firstName || null,
          value: firstName || ""
        },
        [FormElementName.LAST_NAME]: {
          required: true,
          valid: !!firstName || null,
          value: firstName || ""
        },
        [FormElementName.EMAIL]: {
          required: true,
          valid: !!firstName || null,
          value: firstName || ""
        }
      }
    };
  };

  const [formContext, setFormContext] = useReducer(reducer, {
    ...defaultFormContext()
  });

  return (
    <form>
      <TextField
        className={`${FORM_NAME}__${FormElementName.FIRST_NAME}`}
        errorMessage="You need to provide your first name"
        isValid={formContext.FormElementName[FormElementName.FIRST_NAME].valid}
        key={`${FORM_NAME}${FormElementName.FIRST_NAME}`}
        name={`${FORM_NAME}${FormElementName.FIRST_NAME}`}
        onBlur={verifyFormValue(FormElementName.FIRST_NAME)}
        onChange={setFormValue(FormElementName.FIRST_NAME)}
        required={
          formContext.FormElementName[FormElementName.FIRST_NAME].required
        }
        type="input"
        value={formContext.FormElementName[FormElementName.FIRST_NAME].value}
      />
    </form>
  );
}
