import React,{useState} from 'react'
import {useForm, type SubmitHandler} from 'react-hook-form'

type FormData = {
    name: string;
    email: string;
    password: string;
}



const LoginForm = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const [submiteedData, setSubmittedData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    })

    const onSubmit: SubmitHandler<FormData> = (data:FormData) => {
        setSubmittedData(data);
    }

    const inputName = watch("name");
    const inputEmail = watch("email");
    const inputPassword = watch("password");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Name: </label>
        <input type="text" {...register("name",{required: "name is required"})}/>
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor='email'>Email: </label>
        <input type="email" {...register("email",{required: "email is required"})}/>
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor='password'>Password: </label>
        <input type="password" {...register("password",{required: "password is required"})}/>
        {errors.password && <p>{errors.password.message}</p>}
        
        <button disabled={isSubmitting}>{isSubmitting ? "Loading..." : "Submit"}</button>  
      </form>

      <section>
        <p>{inputName}</p>
        <p>{inputEmail}</p>
        <p>{inputPassword}</p>
      </section>
    </div>
  )
}

export default LoginForm
