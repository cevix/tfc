import './formulario_CECs7nbH.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_B6cYgTnJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Sesion, $ as $$Layout } from './index_DnoJICxq.mjs';
import { g as getSession } from './__C1CYcNGq.mjs';

const $$Astro = createAstro();
const $$Perfil = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Perfil;
  const session = await getSession(Astro2.request);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="col-12"> <header> <nav class="navbar navbar-expand-lg bg-body-tertiary"> <div class="container-fluid"> <a class="navbar-brand" href="#">Gamermart</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Features</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Pricing</a> </li> </ul> </div> ${renderComponent($$result2, "Sesion", $$Sesion, {})} </div> </nav> <nav class="navbar navbar-expand-lg bg-body-tertiary"> <div class="container-fluid"> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" aria-current="page" href="#">Pereferico</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Ordenadores</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Componentes</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Auriculares</a> </li><li class="nav-item"> <a class="nav-link" href="#">Monitores</a> </li> </ul> </div> </div> </nav> </header> <div class=" col-12"> <div class="col-6"> <img${addAttribute(session?.user?.image, "srcset")} alt=""> </div> <div class="col-6"> <h3>${session?.user?.name}</h3> </div> </div> </div> ` })}`;
}, "C:/Users/yamir/programacion/astro/TFC/src/pages/perfil.astro", void 0);

const $$file = "C:/Users/yamir/programacion/astro/TFC/src/pages/perfil.astro";
const $$url = "/perfil";

export { $$Perfil as default, $$file as file, $$url as url };
