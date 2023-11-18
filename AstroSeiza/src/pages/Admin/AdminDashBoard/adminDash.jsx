import { useAuth } from "../../../api/context/AuthContext";


import SideBar from "../adminComponents/sidebar";
import React, { useState } from "react";

export default function IndexAdmin() {
  const { admin } = useAuth();
  console.log('admin', admin);



  return (
    <div className="flex flex-col  h-screen bg-white">
     
      <section className="flex gap-6">
       <SideBar>
       </SideBar>
        <div className="texto">
          <div className="m-3 text-xl text-black font-semibold">
            DASHBOARD ASTROSEIZA
          </div>
          <div>
            <p>Este es panel general del admin </p>
          </div>
        </div>
      </section>
    </div>
  );
}
