import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from "react-bootstrap";

const schema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
  }).required();

export default function App({ plans }) {
  const { register, handleSubmit, reset, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    const newPlans = [...plans, data];
    localStorage.setItem('plan', JSON.stringify(newPlans));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mx-auto">برنامتو بنویس</h2>
        <label className="mb-1">موضوع:</label>
        <input className="mb-3" {...register("title")} />
        
        <label className="mb-1">توضیحات:</label>
        <input {...register("description")} />

        <p className="mt-3">{errors.title && 'این فیلد اجباری است.'}</p>
        <p className="mb-3">{errors.description && 'این فیلد اجباری است.'}</p>
        
        <Button variant="primary" type="submit">ثبت برنامه</Button>
    </form>
  );
}