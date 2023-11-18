import SideBar from "./adminComponents/sidebar"

export default function  PerfilAdmin(){
    return(
        <div className="flex flex-col  h-screen bg-white">
        <section className="flex gap-6">
         <SideBar>
         </SideBar>
          <div className="texto">
            <div className="m-3 text-xl text-black font-semibold">
              DASHBOARD ASTROSEIZA
            </div>
            <div>
              <p>Este es el perfil del admin </p>
            </div>
          </div>
        </section>
      </div>
    )
}