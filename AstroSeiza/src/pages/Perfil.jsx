import { useAuth } from "../api/context/AuthContext.jsx";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
export default function Perfil() {
  const [file, setFile] = useState(null);
  const [popOn, setPopOn] = useState(false);
  const [image, setImage] = useState([]);
  const { user } = useAuth();
  // console.log(user);
  const openWindow = () => {
    setPopOn(true);
  }

  const closeWindow = () => {
    setPopOn(false);

  }


  const id = user.id;
  const usuario_id = user.id;
  // console.log(id);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No seras capaz de revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/users/${id}`);

          Swal.fire({
            title: "Eliminado!",
            text: "El usuario se elimino correctamente!.",
            icon: "success",
            timer: 1000,
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        } catch (error) {
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: "Ocurrio un error inesperado.",
            icon: "error",
          });
        }
      }
    });
  };
  const sendHandler = () => {
    if (!file) {
      return Swal.fire({
        title: "Cuidado!",
        text: "No se ha seleccionado ninguna imagen.",
        icon: "warning",
      });
    }

    const formdata = new FormData();
    formdata.append("image", file);



    fetch(`http://localhost:3000/images/upload/${usuario_id}`, {
      method: 'POST',
      body: formdata
    })
      .then(res => res.text())
      .then(res => console.log(res))
      .catch(err => {
        console.error(err)
      })


    document.getElementById("fileinput").value = "";
    setFile(null);
    closeWindow();
  };




  const selectedHandler = e => {
    setFile(e.target.files[0])
  }

  const fetchImage = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/images/${usuario_id}`);
      const imagencita = res.data.image;
      setImage(imagencita)
      console.log(imagencita)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchImage();
    // console.log(popOn)
    console.log( 'esta es la imagen ' + image)
  }, [popOn]);


  return (
    <>
      <h2 className="mt-3 text-white text-center text-3xl font-semibold">
        ¡BIENVENIDO A TU PERFIL, CIENTÍFICO!
      </h2>
      <div className="flex flex-col items-center ml-10 h-screen mt-5">
        <div className="flex flex-col items-center rounded-[5px_5px_5px_5px] w-66">
          <div className=" w-66 p-10 rounded-md gap-1 text-white">


            <img
              className="w-[150px] h-auto rounded-[7px_7px_7px_7px] ml-auto mr-auto"
              src={ 'http://localhost:3000/' + image }
              alt="profile"
            />
            <p className="text-center uppercase text-xl">{user.nombre}</p>
            <p className="my-5 text-2xl font-bold">DATOS PERSONALES: </p>
            <p className="my-7">
              <span className="font-semibold text-2xl">Usuario:</span>{" "}
              <span className="flex flex-row my-1 text-md">{user.nombre}</span>
            </p>
            <p className="">
              <span className="font-semibold text-2xl">
                Correo Electrónico:
              </span>{" "}
              <span className="flex flex-row my-1 text-md">{user.email}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <Link to={`/EditarUsuario/${id}`}>
            <div className="flex flex-row hover:scale-105 transition-shadow items-center border rounded-[7px_7px_7px_7px] ml-auto mr-auto w-auto p-1">
              <BiEdit className="text-white my-1 ml-2 mr-2" size={22} />
              <button className=" flex flex-row text-white ml-auto mr-auto text-xl">
                Editar Perfil
              </button>
            </div>
          </Link>
          <div className="flex flex-row hover:scale-105 transition-shadow items-center border rounded-[7px_7px_7px_7px] ml-auto mr-auto w-auto p-1">
            <RiDeleteBin5Fill className="text-white my-1 ml-2 mr-2" size={22} />
            <button
              onClick={() => handleDelete(id)}
              className=" flex flex-row text-white ml-auto mr-auto text-xl"
            >
              Borrar Cuenta
            </button>

          </div>


        </div>
        {popOn ? (
          <>
            <div>
              <div className="flex flex-col mt-10">
                <div className=" bg-transparent rounded-[5px_5px_5px_5px]">
                  <input id="fileinput" onChange={selectedHandler} type="file" className="cursor-pointer rounded-[5px_5px_5px_5px] bg-transparent border-2 w-42 text-white" placeholder="Inserte su imagen aca" />
                </div>
                <div className="flex flex-row gap-5 justify-center items-center mt-5">
                  <button className="bg-yellow-500 rounded-[5px_5px_5px_5px] w-1/4 p-2 text-white" onClick={sendHandler}> Subir</button>
                  <button className="bg-red-500 rounded-[5px_5px_5px_5px] w-1/4 p-2 text-white" onClick={closeWindow}>Cancelar</button>
                </div>
              </div>

            </div>

          </>

        ) : (
          <div className="flex flex-row my-5 hover:scale-105 transition-shadow items-center border rounded-[7px_7px_7px_7px] ml-auto mr-auto w-auto p-1">
            <MdOutlineAddAPhoto className="text-white my-1 ml-2 mr-2" size={22} />
            <button
              className=" flex flex-row text-white ml-auto mr-auto text-xl"
              onClick={openWindow}
            >
              Cambiar Foto de Perfil
            </button>

          </div>
        )}
      </div >
    </>
  );
}
