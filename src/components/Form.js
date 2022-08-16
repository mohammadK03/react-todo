import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const notify = (message) => {toast(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
    })}

    useEffect(() => {
        console.log(errors)
    }, [errors]);

    useEffect(() => {
        notify('sc');
    })

    const onSubmit = data => {
        console.log(data, 'hg')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer />

            <label>Title:</label>
            <input type="text" {...register('title', { required: true })} />
            <label>Description:</label>
            <input type="text" {...register('description', { required: true })} />
            <label>Status:</label>
            <input type="text" {...register('status', { required: true })} />
            <Button variant="primary" type="submit">Primary</Button>
        </form>
    );
}

export default Form;