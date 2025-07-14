import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm/index';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import { login } from '../../../../features/Auth/userSlice';

const LoginContainer = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      await dispatch(action).unwrap();

      // close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      console.log('Failed to login: ', error.response?.data || error.message);
      const errorMsg =
        error?.response?.data?.error?.message || // lấy từ Strapi 4.x
        error?.response?.data?.message || // fallback
        error.message ||
        'Login failed';
      enqueueSnackbar(errorMsg, { variant: 'error' });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

LoginContainer.propTypes = { closeDialog: PropTypes.func };

export default LoginContainer;
