import { yupResolver } from '@hookform/resolvers/yup';
// import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../../components/form-controls/InputField';

const TodoForm = (props) => {
  const schema = yup
    .object({
      title: yup.string().required('Please enter title').min(5, 'Title is too short'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TodoForm;
