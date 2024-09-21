fetch('../imagenes/imagen1.png')
.then(resp => resp.blob())
.then(image => {
   console.log(image);
});
fetch('../imagenes/imagen2.png')
.then(resp => {
   return resp.blob();
})
.then(image => {
   console.log(image);
});
