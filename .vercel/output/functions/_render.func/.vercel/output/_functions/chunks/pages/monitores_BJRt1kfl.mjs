import { d as db, p as producto, $ as $$Layout } from './auriculares_B-rQxgkH.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_0hkYe0U3.mjs';
import 'kleur/colors';
import 'html-escaper';
import { like } from '@astrojs/db/dist/runtime/virtual.js';

const $$Astro = createAstro();
const $$Monitores = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Monitores;
  const productito = await db.select().from(producto).where(
    like(producto.tipo, "monitor")
  );
  productito.map(({ nombreProducto }) => console.log(nombreProducto));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=" py-4 d-flex justify-content-center"> <div class="w-75"> <h4 class="ms-2">Monitores</h4> <hr> </div> </div> <div class="container-fluid d-flex justify-content-center"> <div class="col-10 d-flex flex-wrap justify-content-center"> <!-- <div class="col-3 px-3">--><!-- </div>              --> ${productito.map(({ nombreProducto, descripcion, precio, img, tipo, autor, estado }) => renderTemplate`<div class="d-flex px-2 py-3"> <div class="card col-12" style="width: 18rem;"> <img${addAttribute(img, "srcset")} class="card-img-top" alt="..."> <div class="card-header"><a${addAttribute("https://www.twitch.tv/" + autor, "href")} class="author">${autor}</a></div> <div class="card-body"> <h5 class="card-title">${nombreProducto}</h5> <p class="card-text">${descripcion}</p> <h4>${precio + "\u20AC"}</h4> </div> </div> </div>`)} </div> </div> ` })}`;
}, "C:/Users/yamir/programacion/astro/TFC/src/pages/monitores.astro", void 0);

const $$file = "C:/Users/yamir/programacion/astro/TFC/src/pages/monitores.astro";
const $$url = "/monitores";

export { $$Monitores as default, $$file as file, $$url as url };
