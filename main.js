const carrito = []
const espacio =' '
const i = [1,2,3,4,5];

let almacenamientoProductos 
let numeracion
let final
//Funcion de visaulización de productos
const mostrarStock = () => {
    //almaceno los IDs
    numeracion = productos.map(producto=> {return producto.id  })  
    //almaceno datos a mostrar en visualización principal 
    almacenamientoProductos = productos.map(producto => {
        return '('+ producto.id +')' +espacio+ producto.marca + espacio + producto.nombre+' $'+producto.precio+espacio 
        })  
};

//Funcion de ordenamiento menor a mayor
const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio)
    mostrarStock()

    };
//Funcion de ordenamiento Mayor a menor
const ordenarMayorMenor = () => {
productos.sort((a, b) => b.precio - a.precio)
mostrarStock()
};

// Funcion pantalla principal 
function comprarProductos() {
    let continuarComprando = false;
    let productoNombre = '';
    let productoCantidad = 0;
    do {
        productoNombre = prompt('Elija que desea comprar' + '\n' + almacenamientoProductos.join('\n') + 
        '\n\nAcciones a realizar:'+ '\n(min) Ordenar de menor a mayor por precio  \n(max)Ordenar de Mayor a menor por precio \n(t)Terminar Compra\n\n(Coloqué datos que se encuentren entre los parentesis)' )

switch (productoNombre)
{
    case 'min':
        ordenarMenorMayor()
        continuarComprando=true
        break;

        case 'max':
        ordenarMayorMenor()
        continuarComprando=true
        break;

        case 't':
            continuarComprando=false

        break;

        default:
            console.log(productoNombre);
            const producto = productos.find(producto => producto.id == parseInt(productoNombre));
            console.log(producto);
            if (producto) {
                productoCantidad = parseInt(prompt('Ingrese la cantidad a comprar'));    
           //verifico que sea un numero     
                if( isNaN(productoCantidad)==false&&productoCantidad!=0)
                {
                agregarAlCarrito(producto, producto.id, productoCantidad)
                }
                else
                {
                    alert('Valores ingresados erroneos')
                }
            } else {
                alert('El producto no se encuentra disponible!');
            }
    
            continuarComprando = confirm('¿Desea agregar otro producto?');
            break
}
} 
while (continuarComprando);
}

//Incremento cantidad en base a producto.ID seleccionado previamente
const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id == productoId)
    if (productoRepetido) {
        productoRepetido.cantidad += productoCantidad
    } else {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    }
    console.log(carrito)
};

function total(){
//Calculo la cantidad total de productos comprados y calculo el precio
const cantidadCarrito = productos.reduce((acc, item) => acc + item.cantidad, 0)
 const precioTotal = productos.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
console.log(cantidadCarrito)
console.log(precioTotal)

//filtro productos comprados y muestro la cantidad 
const productosDisponibles = productos.filter(producto => producto.cantidad != 0);
const nombresProductos = productosDisponibles.map(producto => {return producto.marca +espacio+ producto.nombre+ espacio+ 'Cantidad:'+producto.cantidad });
const productosString = nombresProductos.join("\n");
alert('Productos comprados:\n'+ productosString+
'\n\nLa cantidad de articulos totales comprados fueron: '+ cantidadCarrito+
'\nEl precio total de todos los articulos comprados fueron: $'+ precioTotal)

}

//INVOCAR FUNCIONES
alert('Simulador De compra de Celulares')
mostrarStock()
comprarProductos()
total()

