//Le damos instrucciones a nuestra computadora/servidor para que quede escuchando en determinado puerto.
//Modulo Http, te permite gesionar todas las interacciones de red a traves de internet con una PC.
//Lo que hace es traer codigo de una libreria,ahi podemos usar un metodo para darle instrucciones a la pc.
const http = require('http'); //Acá requerimos el conteido de esta libreria,en resumen,requerimos todas las funcionalidades de esta libreria de node js y la guardamos en un objeto(constante),todo en js es un objeto.

function requestController(){
    //Lógica de nuestra Función
    console.log('Recibimos una nueva request!')
};

//  Configurar nuestro servidor.Acá le decimos que va a pasar cada vez que se reciba una request.
const server = http.createServer(requestController); //Creamos un servidor para controlar las peticiones,Cada vez que llega una request a nuestro servidor ejecuta esa funcion que pasamos como parametro en createServer,controla las peticiones que llegana nuestro servidor y controlarla a gusto,como querramos,cada vez que llega una request se ejecuta la funcion como parametro y su lógica.

//Ponemos a escuchar a nuestro servidor en un determinado puerto.
server.listen(4000);
