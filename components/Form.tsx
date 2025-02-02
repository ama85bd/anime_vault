'use client';
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  image: yup.string().required('Image is required'),
});

const Form = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setValue,
    clearErrors,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      image: '',
    },
  });

  const onSubmit = async (data: any) => {
    console.log('data', { ...data });
    const res = await axios.post('/api/tasks', data);
    console.log('res', res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='w-full md:w-3/6'>
        <label>
          Name:<span className='text-red-500'>*</span>
        </label>
        <input type='text' className='' {...register('name')} />
        {errors.name && <p className='text-red-900'>{errors.name.message}</p>}
      </div>
      <div className='w-full md:w-3/6'>
        <label>
          Image:<span className='text-red-500'>*</span>
        </label>
        <input type='text' className='' {...register('image')} />
        {errors.image && <p className='text-red-900'>{errors.image.message}</p>}
      </div>
      <button type='submit' className='submit-button-custom'>
        Submit
      </button>
    </form>
  );
};

export default Form;
