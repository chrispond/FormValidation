export const validatePattern = {
  EMAIL: /^$/, // TODO
  NAME: /\S+/gi,
  PHONE: /^$/ // TODO
};

export const validateFormValue = (pattern, value) => {
  if (pattern) {
    const regexp = new RegExp(pattern);
    return regexp.test(value);
  }

  return false;
};
