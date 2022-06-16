
const user = { nombre: 'Pepe', edad: '67', mail: 'pepe@gmail.com', vivo: true }

console.log(user.nombre);
console.log(user.edad);
console.log(user.mail);
console.log(user.vivo);

user.edad = 70 
console.log(user.edad);


class persona {
    constructor(color_ojos, color_pelo, genero, pais){
        this.color_ojos= color_ojos;
        this.color_pelo= color_pelo;
        this.genero= genero;
        this.pais= pais;
    }
}

const newpersona = new persona('marron', 'rojo', 'mujer', 'Argentina')
newpersona.genero= ('hombre');
console.log(newpersona);


class producto{
    constructor(nombre_producto, precio, stock){
        this.nombre_producto =  nombre_producto
        this.precio = precio
        this.stock = stock
    }
}


