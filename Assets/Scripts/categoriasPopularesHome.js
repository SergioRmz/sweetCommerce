let categoriasItems = document.querySelectorAll('#categoriasCarousel .popularesCategoriaItem');
let popularesItems = document.querySelectorAll('#popularesCarousel  .popularesItem');
let populares2Items = document.querySelectorAll('#populares2Carousel  .populares2Item');
const URL = '../Scripts/js/homeInfo.json';

const carruselFuncion = (grupoDeElementos) =>{

   console.log("items", grupoDeElementos);
   grupoDeElementos.forEach((el) => {
            const minPerSlide = 4;
            let next = el.nextElementSibling;
            console.log("next",next);
            for (var i=1; i<minPerSlide; i++) {
               if (!next) {
               // 
               next = grupoDeElementos[0]

                              }
         let cloneChild = next.cloneNode(true)
         el.appendChild(cloneChild.children[0])
         next = next.nextElementSibling
                                             }
                                 })
}
carruselFuncion(categoriasItems);
carruselFuncion(popularesItems);
carruselFuncion(populares2Items);



const getData = () => {
   fetch('URL')
 .then(response => response.json())
 .then(data => console.log(data));
}
getData();




