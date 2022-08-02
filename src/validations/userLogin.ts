import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { Error } from '@args';
import { REGEX } from '@constants';

export default (err: Error) => {
  const {
    register, formState: { errors }, handleSubmit, setError,
  } = useForm();

  useEffect(() => {
    if (err) {
      setError(err.title, { message: err.detail });
    }
  }, [err, setError]);

  const email = register('email', {
    required: 'Email is required',
    pattern: {
      value: REGEX.EMAIL,
      message: 'Invalid email address',
    },
  });
  const password = register('password', { required: 'Password is required' });

  return {
    errors,
    handleSubmit,
    setError,
    email,
    password,
  };
};
