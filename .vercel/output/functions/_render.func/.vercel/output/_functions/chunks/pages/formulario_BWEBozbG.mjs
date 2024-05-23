import './auriculares_B-rQxgkH.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_0hkYe0U3.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Formulario = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Formulario;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const ficha = formData.get("ficha");
    const url = "https://api.imgbb.com/1/upload?&key=a18deced07307d21deb85f9c3ee0c5f7&name=" + ficha;
    new FormData();
    console.log(url);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData
      });
      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData.data.url);
    } catch (error) {
    }
    console.log(ficha);
  }
  return renderTemplate`${maybeRenderHead()}<form method="POST"> <label for="author">foto</label> <input type="file" name="ficha" id="ficha"> <button type="submit">Submit</button> </form>`;
}, "C:/Users/yamir/programacion/astro/TFC/src/pages/formulario.astro", void 0);

const $$file = "C:/Users/yamir/programacion/astro/TFC/src/pages/formulario.astro";
const $$url = "/formulario";

export { $$Formulario as default, $$file as file, $$url as url };
