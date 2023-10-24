import React from "react";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function EditUser() {

  const navigate = useNavigate();
  const params = useParams();
  
  console.log(params);
  var id = params.id;
  console.log(id);

  const [UserInfo, SetUserInfo] = useState({
    Nombre: "",
    Apellido: "",
    Username: "",
    Password: "",
  });

  useEffect(() => {
    const LoadInfoUser = async () => {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      console.log(response);
      SetUserInfo({
        Nombre: response.data.Nombre,
        Apellido: response.data.Apellido,
        Username: response.data.Username,
        Password: response.data.Password,
      });
      console.log(`Datos del usuario : ${id}`);
      console.log(response);
    };
    LoadInfoUser();
  }, []);
  return (
    <>
      <div className="grid m-1 loginbg">
        <div className="m-auto">
          <h1 className=" text-3xl font-bold text-center text-white">
            Agregue un nuevo usuario!
          </h1>
          <div className=" mt-10 h-auto bg-header p-10 m-auto rounded-xl ">
            <div>
              <Formik
                initialValues={UserInfo}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                  console.log(values);

                  var res = await axios.patch(
                    `http://localhost:3000/user/${id}`,
                    values,
                    values
                  );
                  actions.resetForm();
                  if (res.status === 200) {
                    Swal.fire({
                      position: "top-center",
                      icon: "success",
                      title: "Se ah actualizado el usuario correctamente",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    setTimeout(() => {
                      navigate("/Dash");
                    }, 1500);
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Ocurrio un error, durando la actualizacion!",
                      footer: '<a href="">Why do I have this issue?</a>',
                    });
                  }
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
                    <label className="text-white mb-3">
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
                      name="Username"
                      value={values.Username}
                      onChange={handleChange}
                      placeholder="Username"
                    />
                    <label className="text-white mb-3" htmlFor="">
                      Ingrese su Contraseña
                    </label>

                    <input
                      className=" mb-5 rounded-sm"
                      type="text"
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
