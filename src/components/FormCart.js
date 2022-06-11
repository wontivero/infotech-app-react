import { useForm } from 'react-hook-form'

const FormCart = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        //console.log(data)
    }
    return (
        <div className="p-3 flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">

                <span className="m-2">DETALLES DE FACTURACIÓN</span>

                <input {...register("firstName", { required: true, maxLength: 20 })} type="text" placeholder="Nombre" className="input input-bordered input-primary w-full my-2" />
                <span className='block text-red-600  mx-3'>{errors.firstName && "Su Nombre es requerido"}</span>

                <input {...register("lastName", { required: true, maxLength: 20 })} type="text" placeholder="Apellido" className="input input-bordered input-primary w-full my-2" />
                <span className='block text-red-600 mx-3'>{errors.lastName && "Su Apellido es requerido"}</span>

                <input {...register("phone", { required: true, maxLength: 20 })} type="text" placeholder="Telefono" className="input input-bordered input-primary w-full my-2" />
                <span className='block text-red-600 mx-3'>{errors.phone && "Su Telefono es requerido"}</span>

                <input {...register("email", { required: true, maxLength: 20 })} type="email" placeholder="email" className="input input-bordered input-primary w-full my-2" />
                <span className='block text-red-600  mx-3'>{errors.email && "Su Email es requerido"}</span>



                <button type="submit" className="btn btn-success mt-2 float-right">
                    Finalizar Compra
                </button>
            </form>
        </div>
    );
}
export default FormCart