import { $ as $$Layout } from './auriculares_B-rQxgkH.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_0hkYe0U3.mjs';
import 'kleur/colors';
import 'html-escaper';

const $$Astro = createAstro();
const $$SubirFoto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SubirFoto;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const fotito = formData.get("urlFoto");
    console.log(fotito);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form method="Post"> <input id="image" type="file" name="image"> <input type="submit"> </form> <button id="boton">hola</button> <div id="imagene"></div>  ` })}`;
}, "C:/Users/yamir/programacion/astro/TFC/src/pages/subirFoto.astro", void 0);

const $$file = "C:/Users/yamir/programacion/astro/TFC/src/pages/subirFoto.astro";
const $$url = "/subirFoto";

export { $$SubirFoto as default, $$file as file, $$url as url };
