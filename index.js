import { actions, carrousel, categorias, informacion, plantilla, productos, search_products } from "./imports/utils.mjs";

///ETIQUETAS///
const headers = document.querySelector(".header");
if (headers) {
  plantilla.header({
    father: headers,
  });
}

const contenido_categorias = document.querySelector(".seccion-categorias");
const contenido_categorias_globales = document.querySelector(".seccion-categorias-globales");
const contenido_producto = document.querySelector(".contenido-producto");
const titles = document.querySelector(".seccion-search");
const footer = document.querySelector(".footer");

if (titles) {
  plantilla.titles({
    father: titles,
  });
}

if (contenido_categorias) {
  if (contenido_categorias_globales) {
    Object.keys(categorias).forEach((each_cat) => {
      let res_cat = categorias[each_cat];

      plantilla.categorias_globales({
        father: contenido_categorias_globales,
        code: each_cat,
        nombre: each_cat,
      });

      Object.keys(res_cat).forEach((each_cat_int) => {
        plantilla.categorias({
          father: contenido_categorias,
          father_producto : contenido_producto,
          code: each_cat_int,
          nombre: res_cat[each_cat_int],
          code_global: each_cat,
        });
      });
    });
  }

  var clickselectcategorias_globales = document.querySelectorAll(
    ".click-to-select-categorias-globales"
  );
  if (clickselectcategorias_globales) {
    clickselectcategorias_globales.forEach((each_click) => {
      each_click.addEventListener("click", function () {
        document.querySelectorAll(".click-to-select-categorias-globales").forEach((each_selected) => {
          each_selected.classList.remove("btn-categorias-selected");
        });
        this.classList.add("btn-categorias-selected");
        contenido_categorias.innerHTML = "";
        Object.keys(categorias[this.getAttribute("code")]).forEach(
          (each_cat_int) => {
            plantilla.categorias({
              father: contenido_categorias,
              father_producto : contenido_producto,
              code: each_cat_int,
              nombre: categorias[this.getAttribute("code")][each_cat_int],
              code_global: this.getAttribute("code"),
            });
          }
        );
      });
    });
  }
}

if(contenido_producto) {
  actions.build_productos({
    father: contenido_producto,
    prod: "pantalones",
    prod_global: "mujer",
  });
}

if(footer) {
  plantilla.footer_whatsapp({
    father: footer,
    tel_movil: informacion.contacto.tel_movil,
    ubicacion: informacion.contacto.ubicacion,
    servicio_domicilio: informacion.contacto.servicio_domicilio,
  });
}

