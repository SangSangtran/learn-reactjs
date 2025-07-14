import { yupResolver } from '@hookform/resolvers/yup';
// import InputField from 'components/form-controls/InputField';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Typography, Button, Box, LinearProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField/index';

const RegisterForm = (props) => {
  const schema = yup
    .object({
      fullname: yup
        .string()
        .required('Please enter your full name.')
        .test('should has at least two words', 'Please enter at least two words.', (value) => {
          return value.split(' ').length >= 2;
        }),
      email: yup
        .string()
        .required('Please enter your email.')
        .email('Please enter a valid email address.'),
      password: yup
        .string()
        .required('Please enter your password')
        .min(6, 'Please enter at least 6 characters.'),
      retypePassword: yup
        .string()
        .required('Please retype your password.')
        .oneOf([yup.ref('password')], 'Password does not match.')
        .min(6, 'Please enter at least 6 characters.'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <Box sx={{ position: 'relative' }}>
      {isSubmitting && (
        <LinearProgress
          sx={(theme) => ({
            position: 'absolute',
            top: theme.spacing(1),
            left: 0,
            right: 0,
          })}
        />
      )}
      <Avatar sx={{ mt: 2, mx: 'auto', backgroundColor: '#ff1744' }}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography
        textAlign="center"
        component="h3"
        variant="h5"
        sx={(theme) => ({
          margin: theme.spacing(2, 0, 3, 0),
        })}
      >
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullname" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />

        <Button
          disabled={isSubmitting}
          type="submit"
          sx={(theme) => ({
            margin: theme.spacing(3, 0, 2, 0),
          })}
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </Box>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default RegisterForm;
