import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[]=[
    new Item(0,"Chorizo Ayacuchano","Saborea y disfruta de un platillo lleno de historia y sabor, es un preparado de carne molida de cerdo acompañado con Papas andinas.",
    [30.0],["Personal"],"../../assets/JoraChorizo1.png"),
    
    new Item(1,"Costilla BBQ","Costillas en salsa BBQ acompa;adas conpapas nativas y ensalada de la casa.",
    [32.00],["Personal"],"../../assets/JoraCostillaBBQ.png"),
    
    new Item(2,"Hamburguesa Jora","Combinación de lomo fino y churrasco acompañado de queso cheddar, tocino , cebolla caramelizadas, salsa de la casa y servido con papas nativas.",
    [30.00],["Personal"],"../../assets/JoraHambuerguesa.png"),
  
  ]

  promociones: Item[]=[
    new Item(0,"Mondondo de la abuela"," ",
    [30.00],["Personal"],"../../assets/JoraMondogo.png"),

    new Item(1,"Puca Picante Ayacuchano"," ",
    [32.00],["Personal"],"../../assets/JoraPuca.png")
  ]

  extras: Item[]=[
    new Item(0, "Langostinos al Panko","Langostinos al panko acompañado de salsa de rocoto y miel de citricos ¡Crujiente deliciosa!",
    [15.50,30.90],["5 unidades","10 unidades"],"../../assets/JoraLangostino-Recortado.jpg"),
    
  ]

  bebidas: Item[]=[
    new Item(0, "Coca Cola 500 mL","Coca Cola",
    [2.5],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/c/c/cc-500-oct-770px-x-488px_1.webp"),

    new Item(1, "Coca Cola 1.5 L","Coca Cola",
    [7.5],["1.5 Litros"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/c/o/coca-cola-oct-1.webp"),

    new Item(2, "Inca Kola 500 mL","Inca Kola",
    [2.5],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/i/k/ik-500-oct-770px-x-488px_1.webp"),

    new Item(3, "Inca Kola 1.5 L","Inca Kola",
    [7.5],["1.5 Litros"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/i/k/ik-1_8.webp"),

    new Item(4, "Fanta 500 mL","Fanta",
    [2],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/f/a/fanta-personal-770px-x-488px_1.webp"),

    new Item(5, "Sprite 500 mL","Sprite",
    [2],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/s/p/sprite-personal-770px-x-488px_1_.webp"),

    new Item(6, "San Luis 625 mL","Agua Mineral San Luis",
    [2.5],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/s/l/sl-sin-gas-770px-x-488px_1_.webp"),

    new Item(7, "Coca Cola 500 mL sin Azucar","Coca Cola sin Azucar",
    [2.5],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/c/c/cc-500-770px-x-488px_1_1.webp"),

    new Item(8, "Inca Kola 500 mL sin Azucar","Inca Kola sin Azucar",
    [2.5],["Personal"], "https://dsnyk1xc1sxw4.cloudfront.net/media/catalog/product/i/k/ik-500-770px-x-488px_2.webp"),
    
    new Item(9, "Chilcano Jora","PIsco,maracucya, huacatay, albaca, y hierba buena,jarabe de kion y ginger ale",
    [19.50],["Vaso"], "../../assets/JoraChilcano.png"),
  ]

  constructor() { }

  getItems(): Item[]{
    return this.items;
  }
  getPromociones(): Item[]{
    return this.promociones;
  }
  getExtras(): Item[]{
    return this.extras;
  }
  getbebidas(): Item[]{
    return this.bebidas;
  }
}
