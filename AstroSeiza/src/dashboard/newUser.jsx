import { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

export default function NuevoUsuario() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex m-1 loginbg">
        <div className="grid m-auto">
          <h1 className=" text-3xl font-bold text-center text-white">
            Agregue un nuevo usuario!
          </h1>
          <div className=" mt-10 h-auto bg-header p-10 m-auto rounded-xl ">
            <div className="">
              <Formik
                initialValues={{
                  Nombre: "",
                  Apellido: "",
                  Username: "",
                  Password: "",
                }}
                onSubmit={async (values, actions) => {
                  console.log(values);

                  var res = await axios.post(
                    "http://localhost:3000/user",
                    values
                  );

                  actions.resetForm();
                  alert("Datos agregados correctamente");
                  navigate("/");
                }}
              >
                {({ handleChange, handleSubmit, values }) => (
                  <form onSubmit={handleSubmit} className="grid">
                    <h1 className="text-white font-bold text-center text-[20px]">
                      Nuevo usuario
                    </h1>
                    <label className="text-white mb-3" htmlFor="">
                      Ingrese su Nombre
                    </label>
                    <input
                      className="rounded-sm"
                      type="text"
                      value={values.Nombre}
                      onChange={handleChange}
                      name="Nombre"
                      placeholder="Nombre"
                    />
                    <label className="text-white mb-3" htmlFor="">
                      Ingrese su Apellido
                    </label>
                    <input
                      className="rounded-sm"
                      type="text"
                      name="Apellido"
                      value={values.Apellido}
                      onChange={handleChange}
                      placeholder="Apellido"
                    />
                    <label className="text-white mb-3" htmlFor="">
                      Ingrese su nombre de usuario
                    </label>
                    <input
                      className="rounded-sm"
                      type="text"
                      value={values.Username}
                      onChange={handleChange}
                      name="Username"
                      placeholder="Username"
                    />
                    <label className="text-white mb-3" htmlFor="">
                      Ingrese su Contraseña
                    </label>

                    <input
                      className=" mb-5 rounded-sm"
                      type="Password"
                      name="Password"
                      value={values.Password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                    <button
                      type="onSubmit"
                      className="  bg-white w-[50px] rounded-sm hover:bg-gray-400 hover:text-white transition-colors font-semibold"
                    >
                      Crear
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
