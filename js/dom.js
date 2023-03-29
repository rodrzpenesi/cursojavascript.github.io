const conteiner = document.getElementById("conteiner")
const precios = [   { nombre: "Matambre", precioo: 3960},
                    { nombre: "Bondiola", precioo: 4000 },
                    { nombre: "Chorizo", precioo: 1280 },
                    { nombre: "Pierna", precioo: 8500 },
                    { nombre: "Paleta", precioo: 3100 },
                    { nombre: "Costillar", precioo: 4160 },
                    { nombre: "Carre", precioo: 3810 },]

function cargarProducto () {
    productos.forEach ((producto)=>{
        conteiner.innerHTML += crearCard(producto)
    })
}
function calcularTotalPieza() {
    let precioProductos = productos.map((producto)=> {
        return {
                nombre: producto.nombre,
                total: (producto.precio * producto.peso),
            }
    })
    console.table(precioProductos)
}

function productoComprar (){
    let producto1= prompt("que producto desea comprar?")
    let cantidad = parseInt(prompt("cuantas unidades desea comprar?:"))
    if (producto1=== "matambre"){
        let total = (cantidad * 3960)
        console.log(total + "$ "+"serian los " + cantidad +" " + producto1)
    } else if (producto1=== "bondiola"){
        let total = (cantidad * 4000)
        console.log(total + "$ "+"serian las " + cantidad +" " + producto1)
    }else if (producto1=== "chorizo"){
        let total = (cantidad * 1280)
        console.log(total + "$ "+"serian los " + cantidad +" kg de " + producto1)
    }else if (producto1=== "pierna"){
        let total = (cantidad * 8500)
        console.log(total + "$ "+"serian las " + cantidad +" " + producto1)
    }else if (producto1=== "paleta"){
        let total = (cantidad * 3100)
        console.log(total + "$ "+"serian las " + cantidad +" " + producto1)
    }else if (producto1=== "costillar"){
        let total = (cantidad * 4160)
        console.log(total + "$ "+"serian los " + cantidad +" " + producto1)
    }else if (producto1=== "carre"){
        let total = (cantidad * 3810)
        console.log(total + "$ "+"serian los " + cantidad +" " + producto1)
    } else {
        console.warn("ese producto no se encuentra disponible")
    }
}

function productoEnStock() {
    let nombreProducto = prompt("Ingresa el nombre del producto a buscar:").toUpperCase()
    console.log(nombreProducto)
    let siHay = productos.some((producto)=> {
        return producto.nombre === nombreProducto
    })
    
    if (siHay === false) {
        alert("⛔️ No se encontró ese producto.")
    } else {
        alert("✅ El producto esta en stock.")
    }
}
