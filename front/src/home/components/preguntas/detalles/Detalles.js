import React from "react";

import raya from "../imgs/raya.png";

export const Detalles = () => {
  return (
     <div className="container">
   <h2 className="display-5">Contactos</h2>
      <img className="image" src={raya} alt="" width="500" height="50" />

      <h5 className="display-100">RESPONSABLE</h5>
      Ing. Luis Enrique Simbaña PhD
      <br />
      <br />

      <h5 className="display-100">CORREO</h5>
      lesimbania@espe.edu.ec
      <br />
      <br />

      <h5 className="display-100">TELEFONO</h5>
      02 356 4427
      <br />
      <br />

      <h5 className="display-100">CELULAR</h5>
      <p>
      09981602933
     </p>
      <br />
      <br />

  
      <h5 className="display-100">WHATSHAP</h5>
      (593)981602933
      <br />
      <br />

    
      

    </div>
  );
};
