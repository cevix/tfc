import { d as db, p as producto, $ as $$Layout } from './auriculares_B-rQxgkH.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_0hkYe0U3.mjs';
import 'kleur/colors';
import 'html-escaper';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const productito = await db.select().from(producto);
  console.log(productito);
  productito.map(({ nombreProducto }) => console.log(nombreProducto));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=" py-4 d-flex justify-content-center"> <div class="w-75"> <h4 class="ms-2">Productos</h4> <hr> </div> </div> <div class="container-fluid d-flex justify-content-center"></div> <div class="container-fluid d-flex justify-content-center"> <div class="col-10 d-flex flex-wrap justify-content-center"> <!-- <div class="col-3 px-3">--><!-- </div>              --> ${productito.map(({ nombreProducto, descripcion, precio, img, tipo, autor, estado }) => renderTemplate`<div class="d-flex px-2 py-3"> <div class="card col-12" style="width: 18rem;"> <img${addAttribute(img, "srcset")} class="card-img-top" alt="..."> <div class="card-header"><a${addAttribute("/mostrarPerfil?nombreAutor=" + autor, "href")} class="author">${autor}</a></div> <div class="card-body"> <h5 class="card-title">${nombreProducto}</h5> <p class="card-text">${descripcion}</p> <input type="hidden"${addAttribute(autor, "value")}> <h4>${precio + "\u20AC"}</h4> </div> </div> </div>`)} </div> </div> ` })}`;
}, "C:/Users/yamir/programacion/astro/TFC/src/pages/index.astro", void 0);

const $$file = "C:/Users/yamir/programacion/astro/TFC/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
