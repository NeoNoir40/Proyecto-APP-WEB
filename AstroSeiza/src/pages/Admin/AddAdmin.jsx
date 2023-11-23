import { React, useEffect } from "react";
import { useAuth } from "../../api/context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function FormAdmin() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        ;
        fetchUsers();
    });

    const fetchUsers = async () => {
        try {
            const response = await allAdmins();
            setUserInfo(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };


    const { CreateAdmin, error: siginErrors } = useAuth();

    const onSubmit = handleSubmit(async (data) => {
        try {
            await CreateAdmin(data);
            fetchUsers();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Se ha creado correctamente el admin",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <div className=" bg-white my-10">
            <div className="bg-white">
                <div className=" flex justify-center items-center bg-white">
                    <form
                        onSubmit={onSubmit}
                        className=" shadow-xl rounded-xl p-10 border-black border-x-2  border-y-2 flex flex-col w-1/4 gap-2 "
                    >
                        {siginErrors.map((err, i) => (
                            <div className="bg-red-500 p-2 text-white" key={i}>
                                {err}
                            </div>
                        ))}

                        <label htmlFor="">Nombre</label>
                        {errors.nombre && (
                            <span className="text-red-500">
                                Este campo es requerido
                            </span>
                        )}
                        <input
                            {...register("nombre", { required: true })}
                            className="w-full text-black my-2 bg-t ransparent border-b border-black outline-none focus:outline-none"
                            type="text"
                            placeholder="Ingresa el nombre"
                        />

                        <label htmlFor="">Email</label>
                        {errors.email && (
                            <span className="text-red-500">
                                Este campo es requerido
                            </span>
                        )}
                        <input
                            {...register("email", { required: true })}
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                            type="text"
                            placeholder="Ingresa el email"
                        />
                        <label htmlFor="">Contraseña</label>
                        {errors.password && (
                            <span className="text-red-500">
                                Este campo es requerido
                            </span>
                        )}
                        <input
                            {...register("password", { required: true })}
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                            type="password"
                            placeholder="Ingresa la contraseña"
                        />

                        <div className="flex flex-row items-center justify-center  ">
                            <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"  >
                                Crear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex items-center justify-center p-10 bg-white">
                <button
                    className="bg-red-500  text-white font-bold py-2 px-4 rounded  hover:bg-red-400 transition-colors" onClick={() => navigate('/PerfilAdmin')}
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}

export default FormAdmin;