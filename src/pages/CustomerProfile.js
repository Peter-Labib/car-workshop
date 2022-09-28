import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Input from "../components/Input";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown/Dropdown";

const schema = yup.object({
  first_name: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  mobile: yup.number().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  id: yup.string().required("Required"),
  gender: yup.string().required("Required"),
  nationality: yup.string().required("Required"),
});

const CustomerProfile = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // write your login to send data
  }

  return (
    <div className='grid place-content-center w-fit p-5 bg-slate-200 mx-auto rounded mt-5 shadow-lg'>
    <div className='min-w-[40rem] md:max-w-xs '>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2.5'>
          <Controller
            name='first_name'
            control={control}
            render={({ field }) => (
              <Input
                label='First Name'
                type='text'
                name='first-name'
                id='first-name'
                error={errors.first_name?.message}
                {...field}
              />
            )}
          />
          <Controller
            name='lastName'
            control={control}
            render={({ field }) => (
              <Input
                label='Last Name'
                type='text'
                name='last-name'
                id='last-name'
                error={errors.lastName?.message}
                {...field}
              />
            )}
          />
          <Controller
            name='mobile'
            control={control}
            render={({ field }) => (
              <Input
                label='Mobile'
                type='number'
                name='mobile'
                id='mobile'
                error={errors.mobile?.message}
                {...field}
              />
            )}
          />
          <Controller
            name='id'
            control={control}
            render={({ field }) => (
              <Input
                label='ID'
                name='id'
                id='id'
                error={errors.id?.message}
                {...field}
              />
            )}
          />
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <Input
                label='email'
                type='email'
                name='email'
                id='login-email'
                error={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
              name='gender'
              control={control}
              render={({ field }) => (
                <Dropdown
                  error={errors.gender?.message}
                  name='gender'
                  id='gender'
                  label='gender'
                  options={[
                    { value: 'a', label: 'male' },
                    { value: 'b', label: 'female' },
                  ]}
                  {...field}
                />
            )}
          />
          <Controller
              name='nationality'
              control={control}
              render={({ field }) => (
                <Dropdown
                  error={errors.nationality?.message}
                  name='nationality'
                  id='nationality'
                  label='nationality'
                  options={[
                    { value: 'a', label: 'egypt' },
                  ]}
                  {...field}
                />
            )}
          />
        </div>
        <div className='mx-auto w-fit mt-6'>
          <Button type='submit'>
            create
          </Button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default CustomerProfile;
