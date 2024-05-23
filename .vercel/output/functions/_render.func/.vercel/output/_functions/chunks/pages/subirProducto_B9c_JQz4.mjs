import { $ as $$Layout } from './auriculares_B-rQxgkH.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_0hkYe0U3.mjs';
import 'kleur/colors';
import 'html-escaper';
import { g as getSession } from './__DrK9I3rn.mjs';

const $$Astro = createAstro();
const $$SubirProducto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SubirProducto;
  const session = await getSession(Astro2.request);
  console.log(session);
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const fotito = formData.get("urlFoto");
    console.log(fotito);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="d-flex justify-content-center"> <div class="col-6"> <form method="Post" action="/"> <h3>Publicar Producto</h3> <input type="hidden"${addAttribute(session?.user?.name, "value")}> <div class="mb-3"> <label for="formGroupExampleInput" class="form-label">Nombre del producto</label> <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Introduce el nombre del producto" required> </div> <div class="mb-3"> <label for="formGroupExampleInput2" class="form-label">Descripción</label> <input type="text" class="form-control" id="" placeholder="Introduce la descripción del producto"> </div> <div class="col-md-3 mb-3"> <label for="validationCustom04" class="form-label">Tipo</label> <select class="form-select" id="estado" required> <option selected disabled value="">Elige el tipo del producto</option> <option>Ratón</option> <option value="">Teclado</option> <option value="">Monitor</option> <option value="">Auriculares</option> <option value="">Altavoces</option> <option value="">Ordenador</option> <option value=""></option> <option value=""></option> </select> <div class="invalid-feedback">
Please select a  valid state.
</div> </div> <div class="col-md-3 mb-3"> <label for="validationCustom04" class="form-label">Estado</label> <select class="form-select" id="validationCustom04" required> <option selected disabled value="">Elige el estado del producto</option> <option>Sin abrir</option> <option value="">En su caja</option> <option value="">Nuevo</option> <option value="">Como nuevo</option> <option value="">En buen estado</option> <option value="">En condiciones aceptable</option> <option value="">Lo ha dado todo</option> </select> <div class="invalid-feedback">
Please select a  valid state.
</div> </div> <div class="mb-3 "> <label for="formGroupExampleInput2" class="form-label">Precio</label> <input type="number" class="form-control" id="" placeholder="Intodeuce el precio del producto"> </div> <div class="mb-3"> <input id="image" class="form-control" type="file" name="image"> </div> <div class="mb-3"> <input type="submit" class="btn btn-primary"> </div> </form> </div> </div>  ` })}`;
}, "C:/Users/yamir/programacion/astro/TFC/src/pages/subirProducto.astro", void 0);

const $$file = "C:/Users/yamir/programacion/astro/TFC/src/pages/subirProducto.astro";
const $$url = "/subirProducto";

export { $$SubirProducto as default, $$file as file, $$url as url };
