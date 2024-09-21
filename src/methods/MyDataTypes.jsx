function MyDataTypes() {
   let IdNombre = 'Cesar';
   const FicNombre = "Cesar";
const FicApellidos= "Hernandez Rodriguez"
const FicNumControl = 204;
const FicNumControl2 = 755;
const FicFechaReg= new Date();
let FicExperiencia = 20;
let FicActivo = true;
IdNombre = 706;
 console.log("idNombre: ",IdNombre);
    return (
        <>
            <div>
                <h1>
                    Programa para conocer diferentes Tipos de de Datos
                    
                </h1>
                <h1>{IdNombre}</h1>
            </div>
        <h3>Tipos Básicos</h3> 
          {IdNombre}<br></br>
          {FicNombre},
        <br></br>
          {FicApellidos},
        <br></br>
          {FicNumControl},
        <br></br>
          {FicNumControl2},
        <br></br>
          {FicFechaReg.toString()},
        <br></br>
          {FicExperiencia},
          <br></br>
          {(FicActivo) ? 'Activo' : 'No Activo'}     
       
        </>
        
    );
};
export default MyDataTypes;