'use strict'

class User {
    //estado
        constructor(username,pasword,email) {
          this.username = username;
          this.pasword = pasword;
          this.email = email;
//comportamiento          
    }
    login(username,pasword){
        //logica iniciar sesion
        if(username === this.username && pasword === this.pasword){
            alert('Bienvenido')
        }else{
            alert('Error')
        }
    }
    resetPasword(newPassword){
        this.pasword = newPassword;
    }
    updateInfo(newEmail){
        this.email = newEmail
    }
    showInfo(){
        alert(`Datos del usuario ${this.username} (${this.email})`)
    }
}
let user = new User('Fernando091','123456701.12','ferlog@gmail.com');

user.login(prompt('Ingrese su usuario','Fernando091'),(prompt('Ingrese su contraseña',123456701.12)));
user.resetPasword('123.1');
user.login('Fernando091','123.1');
user.updateInfo('f23@.com');
user.showInfo();