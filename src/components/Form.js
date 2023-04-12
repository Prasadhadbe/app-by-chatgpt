import React from "react";
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required(),
})

const Form = ({ onSubmit }) => {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" {...register("name")} />
                {errors.name && <p>{errors.name.message}</p>}
            </div><div>
                <label htmlFor="name">Email</label>
                <input id='email' type="email" {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
            </div><div>
                <label htmlFor="message">Message</label>
                <textarea id='message' {...register("message")} />
                {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;