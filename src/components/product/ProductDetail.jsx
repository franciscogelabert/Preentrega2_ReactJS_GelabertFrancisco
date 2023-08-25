import React from 'react';
import '../../style.css';
import { IconHeart } from '@tabler/icons-react';
import { IconMessage } from '@tabler/icons-react';
import { IconShare } from '@tabler/icons-react';

const productos = [
  {
    id: 1,
    tipo: 'imagen',
    titulo: 'Super picada:',
    ubicacion: '../img/content/picada.png',
    alt: 'Imágen que presenta una tabla de picada con diferentes tipos de fiambres. ',
    descripcion:
      '@Yo El momento ideal para desconectarse es cuando llegan los amigos a casa, y una picada es el condimento indispensable para una juntada increíble. Pero hay que prepararlo con tiempo para que en la mesa no falte este rico.',
    tema: '#picada #fiambre #quesos',
    megusta: 125,
    precio: 1325
  },

  {
    id: 2,
    tipo: 'imagen',
    titulo: 'Panes de Molde:',
    ubicacion: '../img/content/panes.png',
    alt: 'Imágen que presenta unos panes de molde.',
    descripcion:
      '@Yo Uno de los grandes placeres en la cocina que estoy descubriendo desde hace un tiempo es el de preparar tus masas caseras, para todo tipo de preparaciones. Tal es mi afición que en la sección de masas',
    tema: '#pancasero #masamadre',
    megusta: 198,
    precio: 3425
  },

  {
    id: 3,
    tipo: 'imagen',
    titulo: 'Mandarina Pie: ',
    ubicacion: '../img/content/tortamandarina.png ',
    alt: 'Imágen que presenta una Torta de Mandarinas glaseada. ',
    descripcion:
      '@Yo ¿Es época de mandarinas y tienes una licuadora cerca? A cocinar se ha dicho, si tienes estas dos cosas a mano y dos o tres ingredientes mas podes hacer una super torta de mandarina en licuadora. Hoy te ',
    tema: '#mandarina #torta ',
    megusta: 230,
    precio: 4365
  },

  {
    id: 4,
    tipo: 'imagen',
    titulo: 'Pan Dulce: ',
    ubicacion: '../img/content/pandulce.png',
    alt: 'Imágen que presenta unos panes dulces.',
    descripcion:
      '@Yo No van a poder creer lo que son estos mini pan dulce! Receta de pan dulce en formato mini y de esfuerzo mini! Porque éste pan dulce se hace en media hora. Hoy vamos a aprender a cocinar un pan dulce rico, con muchas frutas',
    tema: '#pandulce #navidad',
    megusta: 361,
    precio: 6784
  },

  {
    id: 5,
    tipo: 'imagen',
    titulo: 'Focaccia:',
    ubicacion: '../img/content/focaccia.png',
    alt: 'Imágen que presenta una Focaccia Italiana. ',
    descripcion:
      '@Yo Me puse a leer un poquito acerca de su historia, donde surgió exactamente y encontré un montón de versiones… Resulta que sí, los italianos reclamaron su autoría en la receta dado que este tipo de pan saborizado tan particular ',
    tema: '#focaccia #italia',
    megusta: 500,
    precio: 2744
  },

  {
    id: 6,
    tipo: 'imagen',
    titulo: 'Carne al horno:',
    ubicacion: '../img/content/carnemechada.png',
    alt: 'Imágen que presenta Carne mechada con papas al horno. ',
    descripcion:
      '@Yo El plato estrella a la hora de hablar de recetas económicas y ricas. Encima es facilísima, no pueden pedir nada más. Lo ideal, y para que este pan de carne sea mucho más rico,sería que tengas El plato estrella a la hora de hablar de',
    tema: '#carne #carnehorno ',
    megusta: 421,
    precio: 2734
  },

  {
    id: 7,
    tipo: 'imagen',
    titulo: 'Baklava: ',
    ubicacion: '../img/content/baklava.png ',
    alt: 'Imágen que presenta una postre turco llamado Baklava. ',
    descripcion:
      '@Yo Baklava es un pastel elaborado con una pasta de  pistachos o nueces trituradas, distribuida en una masa filo y bañado en almíbar o jarabe de miel. Existen diversas variedades que incorporan avellanas y almendras',
    tema: '#baklava #postreturco',
    megusta: 548,
    precio: 1734
  },

  {
    id: 8,
    tipo: 'imagen',
    titulo: 'Torta de Chocolate',
    ubicacion: '../img/content/t3chkinder.jpg ',
    alt: 'Imágen que presenta una torta de Chocolate. ',
    descripcion:
      '@Yo Un simple bizcochuelo ya no es suficiente una vez que conozcas esta esponjosa torta de Kinder Bueno. Batir los huevos con el azúcar, añadir la harina, la levadura en polvo y la vainilla, a',
    tema: '#torta #kinder ',
    megusta: 256,
    precio: 8765
  },
];

const ProductDetail = () => {
  return (
    <>
      {productos.map((item, i) => (
        <article key={i} className="col-sm-12 col-md-6 col-lg-3">
          <div className="card gradiente">
            <h3>{item.titulo}</h3>
            <a href="404.html">
              <img
                src={item.ubicacion}
                className="imagenReceta card-img-top w-100 mx-auto p-2"
                alt={item.alt}
              />
            </a>
            <div className="card-body">
              <p className="card-text align-middle">
              
                {item.descripcion}
                <a  href="404.html" className="textAmpliar">
                  Ver más...
                </a>
              </p>
              <p className="textLike">{item.tema}</p>
              <IconHeart color="red" size={32} />
              <IconMessage size={32} />
              <IconShare size={32} />
              <p> Precio $ {item.precio} </p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};
export default ProductDetail;