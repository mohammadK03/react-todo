import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

const schema = yup.object({
    name: yup.string().required(),
    family: yup.string().required(),
    city: yup.string().required(),
    number: yup.string().required(),
    idNumber: yup.string().required(),
    sex: yup.string().required(),
    email: yup.string().required(),
  }).required();

export default function App() {
  const { register, handleSubmit, reset, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const notify = (message) => {

    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }

  const onSubmit = data => {
    notify('User added successfully!')
    
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} dir="rtl">
        <h2 className="mx-auto mb-3">ثبت نام</h2>
        <label className="mb-1">نام:</label>
        <input className="mb-3 form-control" {...register("name")} />
        
        <label className="mb-1">نام و خانوادکی:</label>
        <input className="mb-3 form-control" {...register("family")} />

        <label className="mb-1">استان:</label>
        <input className="mb-3 form-control" {...register("city")} />

        <label className="mb-1" type="number">موبایل:</label>
        <input type="number" className="mb-3 form-control" {...register("number", { valueAsNumber: true, })} />

        <label className="mb-1">جنسیت:</label>
        <select className="mb-3 form-select" {...register('sex')}>
            <option value="man">مرد</option>
            <option value="female">زن</option>
        </select>

        <label className="mb-1" type="number">کد ملی:</label>
        <input type="number"t className="mb-3 form-control" {...register("idNumber", { valueAsNumber: true, })} />

        <label className="mb-1">ایمیل:</label>
        <input className="mb-3 form-control" type='email' {...register("email")} />

        <p className="error">{errors.name && 'فیلد نام اجباری است.'}</p>
        <p className="error">{errors.family && 'فیلد نام خانوادگی اجباری است.'}</p>
        <p className="error">{errors.city && 'فیلد استان اجباری است.'}</p>
        <p className="error">{errors.mobile && 'فیلد موبایل اجباری است.'}</p>
        <p className="error">{errors.sex && 'فیلد جنسیت اجباری است.'}</p>
        <p className="error">{errors.idNumber && 'فیلد کد ملی اجباری است.'}</p>
        <p className="error mb-3">{errors.email && 'فیلد ایمیل اجباری است.'}</p>
        
        <Button variant="primary" type="submit">ثبت برنامه</Button>
      </form>
    </>
  );
}