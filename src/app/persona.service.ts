import { Item } from './models/item';
import { Pedido } from './pedido.model';
import { Persona } from './persona.model';

export class PersonaServicio {
  usuarioLogeado!: Persona;
  logged:boolean=false;
  loggedAdmin!:boolean;
  personas: Persona[] = [
    new Persona(
      1,
      'Yon',
      'Infanzon',
      999666555,
      71239980,
      'yon@hotmail.com',
      '05/02/2001',
      'Av. Perú 95',
      'contraCliente1',
      [
        new Pedido(
          1,
          [
            new Item(0,"Chorizo Ayacuchano","Chorizo Ayacuchano",[32.00],["Personal"],"../../assets/JoraChorizo1.png"),
            new Item(1,"Mondondo de la abuela","Mondongo de la abuela",[30.00],["Personal"],"../../assets/JoraMondogo.png")
          ],
          '02/02/2002',
          '9:30',
          'Urb. Jose Gabriel Condorcanqui 220'
        ),
              ]
    ),
    new Persona(
      2,
      'Miguel',
      'Cornejo',
      95555236,
      71239555,
      'cornejo@hotmail.com',
      '19/3/2000',
      'Jr. 3 mascaras 223',
      'pruebaContraseña2',
      [
        new Pedido(
          1,
          [
            new Item(0,"Puca Picante Ayacuchano","Puca Picante Ayacuchano",[32.00],["Personal"],"../../assets/JoraPuca.png"),
            new Item(1,"Hamburguesa Jora","Hamburguesa Jora",[30.00],["Personal"],"../../assets/JoraHambuerguesa.png")
          ],
          '02/02/2002',
          '9:30',
          "Urb Mariscal Cáceres 150"
        ),
        new Pedido(
          2,
          [
            new Item(1,"Costilla BBQ","Costilla BBQ",[31.00],["Personal"],"../../assets/JoraCostillaBBQ.jpg"),
            new Item(3,"Mondongo de la abuela","Mondongo de la abuela",[33.00],["Personal"],"../../assets/JoraMondogo.png"),
          ],
          '02/02/2002',
          '10:30',
          "Enace Mz T lt 14"
        ),
        new Pedido(
          3,
          [
            new Item(0, "Langostino al Panko","Langostino 5 unidades",[15.50],["5 unidades"],"../../assets/JoraLangostino.png"),
          ],
          '03/02/2002',
          '12:30',
          "Jr los Andes 5ta cuadra"
        ),
      ]
    ),
  ];

  administradores: Persona[] = [
    new Persona(
      1,
      'Sohnny',
      'Lima',
      8888774545,
      75684982,
      'theOne@hotmail.com',
      '15/3/2000',
      'Jr.Domingo Nieto 225',
      'admin435343',
      []
    ),
  ];
  //login ingresar a cuentas
  //usuario
  cuentaUser(correo: string, contrasenia: string) {
    let user!: Persona;
    let tipoError: string = '';
    let validarLogin;
    for (let i = 0; i < this.personas.length; i++) {
      if (
        this.personas[i].correo === correo &&
        this.personas[i].contrasenia === contrasenia
      ) {
        user = this.personas[i];
        tipoError = 'noHayError';
      } else if (
        this.personas[i].correo !== correo &&
        this.personas[i].contrasenia !== contrasenia
      ) {
        tipoError = 'noTieneCuenta';
      } else if (
        this.personas[i].correo !== correo &&
        this.personas[i].contrasenia === contrasenia
      ) {
        tipoError = 'noTieneCuenta';
      } else if (
        this.personas[i].correo === correo &&
        this.personas[i].contrasenia !== contrasenia
      ) {
        tipoError = 'contraseniaIncorrecta';
      }
    }
    validarLogin = { tipoError, user };
    return validarLogin;
  }
  cuentaAdmin(correo: string, contrasenia: string) {
    let admin!: Persona;
    let tipoError: string = '';
    let validarLogin;
    for (let i = 0; i < this.administradores.length; i++) {
      if (
        this.administradores[i].correo === correo &&
        this.administradores[i].contrasenia === contrasenia
      ) {
        admin = this.administradores[i];
        tipoError = 'noHayErrorLogAdmin';
      } else if (
        this.administradores[i].correo !== correo &&
        this.administradores[i].contrasenia !== contrasenia
      ) {
        tipoError = 'noTieneCuentaAdmin';
      } else if (
        this.administradores[i].correo !== correo &&
        this.administradores[i].contrasenia === contrasenia
      ) {
        tipoError = 'noTieneCuentaAdmin';
      } else if (
        this.administradores[i].correo === correo &&
        this.administradores[i].contrasenia !== contrasenia
      ) {
        tipoError = 'contraseniaAdminIncorrecta';
      }
    }
    validarLogin = { tipoError, admin };
    return validarLogin;
  }
  //creando metodos para verificar ciertos parametros del registro
  //generador de id
  generarId(): number {
    let id: number = 0;
    for (let i = 0; i <= this.personas.length; i++) {
      id += 1;
    }
    return id;
  }

  //verficiar si el numero de telefono ingresado en el formulario fue registrado anteriormente

  telefonoAnteriormenteRegistrado(persona: Persona): boolean {
    let telefonoRegistrado: boolean = false;
    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].numeroTelefono === persona.numeroTelefono) {
        telefonoRegistrado = true;
      }
    }
    for (let i = 0; i < this.administradores.length; i++) {
      if (this.administradores[i].numeroTelefono === persona.numeroTelefono) {
        telefonoRegistrado = true;
      }
    }
    return telefonoRegistrado;
  }
  //verificar si el número de dni ingresado en el formulario fue registrado anteriormente

  numDniRegistradoAnteriormente(persona: Persona): boolean {
    let numDniRegistrado: boolean = false;
    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].numeroDni === persona.numeroDni) {
        numDniRegistrado = true;
      }
    }
    for (let i = 0; i < this.administradores.length; i++) {
      if (this.administradores[i].numeroDni === persona.numeroDni) {
        numDniRegistrado = true;
      }
    }
    return numDniRegistrado;
  }

  //verificar si el correo ingresado en el formulario fue registrado anteriormente
  correoRegistradoAnteriormente(persona: Persona): boolean {
    let correoRegistrado: boolean = false;
    for (let i = 0; i < this.personas.length; i++) {
      if (this.personas[i].correo === persona.correo) {
        correoRegistrado = true;
      }
    }
    for (let i = 0; i < this.administradores.length; i++) {
      if (this.administradores[i].correo === persona.correo) {
        correoRegistrado = true;
      }
    }
    return correoRegistrado;
  }

  getListaPedidos(index: number){
    return this.personas[index].getHistorialPedidos();
  }
}
