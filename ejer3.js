'use strict'

class Product {
    //estado
        constructor(description,price,stock) {
          this.description = description;
          this.price = price;
          this.stock = stock;
//comportamiento          
    }
    showInfo(){
alert(`El articulo es: ${this.description} 
El precio es: ${this.price}$
Se encuentran en stock ${this.stock}`)
    }

    minusStock(minStock){
        this.stock = minStock;
        alert(`El stock actualizado es: ${minStock}`)
alert(`El articulo es: ${this.description} 
El precio es: ${this.price}$
Se encuentran en stock: ${minStock}`)
    }

    incrementStock(inStock){
        this.stock = inStock
        alert(`El stock actualizado es: ${inStock}`)
alert(`El articulo es: ${this.description} 
El precio es: ${this.price}$
Se encuentran en stock: ${inStock}`)
    }

    updatePrice(newPrice){
        this.price = newPrice
        alert(`El precio actualizado es: ${newPrice}`)
alert(`El articulo es: ${this.description} 
El precio es: ${newPrice}$
Se encuentran en stock: ${inStock}`)
    }

}
let product = new Product(prompt('Ingrese el producto'),prompt('Ingrese el precio'),prompt('Ingrese el stock'));
product.showInfo()
product.minusStock(prompt('Disminuya el stock:'))
product.incrementStock(prompt('Incremente el stock:'))
product.updatePrice(prompt('Actualice el precio:'))