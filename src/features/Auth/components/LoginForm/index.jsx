import { yupResolver } from '@hookform/resolvers/yup';
// import InputField from 'components/form-controls/InputField';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Typography, Button, Box, LinearProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField/index';

const LoginForm = (props) => {
  const schema = yup
    .object({
      identifier: yup
        .string()
        .required('Please enter your email.')
        .email('Please enter a valid email address.'),
      password: yup.string().required('Please enter your password'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
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
        Sign in
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

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
          Sign in
        </Button>
      </form>
    </Box>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
