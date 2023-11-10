export default function SideBar() {
  return (
    <div className=" sticky left-0 h-screen w-44 bg-body p-5">
      <div className="flex items-center gap-4 hover:bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
        <ul>
          <h1>Inicio</h1>
        </ul>
      </div>
      <div className="flex items-center gap-4 hover:bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
        <ul>
          <h1>Admins</h1>
        </ul>
      </div>
      <div className="flex items-center gap-4 hover:bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
        <ul>
          <h1>Usuarios</h1>
        </ul>
      </div>
    </div>
  );
}
