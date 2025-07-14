import { register } from '../../../../features/Auth/userSlice';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm/index';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

const Register = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      // auto set username = email
      // values.username = values.email;
      values.username = values.username || values.email;
      const action = register(values);
      await dispatch(action).unwrap();

      // close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      enqueueSnackbar('Register successfully', { variant: 'success' });
    } catch (error) {
      console.log('Failed to register: ', error.message);
      enqueueSnackbar(error.message || 'Registration failed', { variant: 'error' });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

Register.propTypes = { closeDialog: PropTypes.func };

export default Register;
