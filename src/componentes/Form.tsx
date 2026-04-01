import {useState} from 'react'
import { useForm, type SubmitHandler  } from "react-hook-form";


type FormData = {
    fullName: string;
    email: string;
    password: string;
}

const ReactForm = () => {
    const [dataSumitted, setDataSumitted] = useState<FormData>({
        fullName: "",
        email: "",
        password: ""
    })
 const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({});
 
  const onSubmit : SubmitHandler<FormData> = (data:FormData) => {
    console.log("Form Data: ",data)
    setDataSumitted(data)
  }

    const nameValue = watch("fullName");
    const emailValue = watch("email");
    const passwordValue = watch("password");
    return (
    <div>
      <h2>Registriation: </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="fullName">Full Name:</label>
            <input type='text' {...register("fullName",{required:"fullName is required"})} />
            {errors.fullName && <div>{errors.fullName.message}</div>}
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="email" {...register("email",{required:"you must enterd verified email"})}/>
            {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" {...register("password",{
                required:"you must enterd 8 character password",
                minLength: { value: 8, message: "At least 8 characters required" }
                })}/>
            {errors.password && <div>{errors.password.message}</div>}
        </div>
        <button disabled={isSubmitting}>Submit</button>
      </form>
      <div>
        <p>{nameValue}</p>
        <p>{emailValue}</p>
        <p>{dataSumitted.password}</p>
        <p>{passwordValue}</p>
      </div>
    </div>
  )
}

export default ReactForm
