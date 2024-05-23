import { $ as $$Layout } from './auriculares_B-rQxgkH.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_0hkYe0U3.mjs';
import 'kleur/colors';
import 'html-escaper';

const $$Astro = createAstro();
const $$MostrarFoto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MostrarFoto;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const prueba = formData.get("numero");
    console.log(prueba);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="prueba"> <form method="post"> <input type="number" value="12" name="numero" id="numero"> <input type="submit"> </form> </div>  <img src="" alt="prueba" srcset="https://i.ibb.co/MG7zx8J/wp9148749-4k-anime-black-clover-wallpapers-jpg.gif"> <img src="https://i.ibb.co/JjJzXR3/wp9148749-4k-anime-black-clover-wallpapers-jpg.jpg" alt="wp9148749-4k-anime-black-clover-wallpapers-jpg"> ` })}`;
}, "C:/Users/yamir/programacion/astro/TFC/src/pages/mostrarFoto.astro", void 0);

const $$file = "C:/Users/yamir/programacion/astro/TFC/src/pages/mostrarFoto.astro";
const $$url = "/mostrarFoto";

export { $$MostrarFoto as default, $$file as file, $$url as url };
