

const IVA = 1.21


class productos{
    constructor (producto, importe, stock) {
    this.producto = producto
    this.importe = importe
    this.stock = stock
    this.precioConIVA = function () {
        let precioFinal = this.importe * IVA
        return "$" + precioFinal
    }

}
}
    const prod1 = new productos("Miel de 100gr", 150, 1000)
    const prod2 = new productos("Miel de 500gr", 300, 2000)
    const prod3 = new productos("Miel de 1000gr", 500, 5000)





function buscarProductos() {
    let prod = prompt("Ingresa el nombre del producto que deseas:")
    const resultado = productos.find (elemento => elemento.productos === prod)
    console.table(resultado)
}
