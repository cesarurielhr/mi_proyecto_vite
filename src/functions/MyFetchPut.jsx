function MyFetchAPIsp() {
    console.log("Programa para FETCH API PUT")
    let usuario = {
    nombre: "morpheus",
    edad: 25
}
 fetch('https://reqres.in/api/users/', {
    method: 'PUT',
    body: JSON.stringify(usuario), //data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error en la peticion API PUT');
    console.log(error);
});   
    return (
        <>
            <div>
                <h1>
                    Programa para FETCH API PUT
                </h1>
            </div>
       
        </>
    );

    };
export default MyFetchAPIsp;