import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
  const { form, name, label, disabled } = props;
  // const { errors, formState } = form;
  // const hasError = formState.touchedFields[name] && errors[name];
  // console.log(errors[ name ], formState.touchedFiels[name]);
  const {
    formState: { errors, touchedFields },
  } = form;

  const hasError = !!errors?.[name];
  console.log(errors?.[name], touchedFields?.[name]);

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          disabled={disabled}
          error={!!hasError}
          helperText={errors?.[name]?.message}
          {...field}
        />
      )}
    />
  );
};

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
