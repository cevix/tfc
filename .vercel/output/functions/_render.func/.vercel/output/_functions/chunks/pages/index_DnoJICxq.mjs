import './formulario_CECs7nbH.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, i as renderSlot, j as renderHead, h as addAttribute, m as maybeRenderHead, k as renderComponent } from '../astro_B6cYgTnJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { g as getSession } from './__C1CYcNGq.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"><\/script><meta name="generator"', "><title>", "</title>", '</head> <body> <script src="https://code.jquery.com/jquery-3.7.0.min.js"><\/script> ', " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/yamir/programacion/astro/TFC/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Sesion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sesion;
  const session = await getSession(Astro2.request);
  console.log(session);
  const { nombreUsuario = session?.user?.name } = Astro2.props;
  return renderTemplate`${session ? renderTemplate`${maybeRenderHead()}<div class="dropdown w-auto"><button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img class="img-fluid w-25 rounded-circle"${addAttribute(session?.user?.image, "srcset")}></button><ul class="dropdown-menu"><li><a class="dropdown-item" id="logout">Cerrar sesión</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div>
							

							<a href="/perfil/"><button type="button" class="btn btn-primary">Perfil</button></a>
							<a href="/subirFoto/"><button type="button" class="btn btn-primary">Foto</button></a>
							<a href="/mostrarFoto/"><button type="button" class="btn btn-primary">Foto</button></a>
							<a href="/subirProducto/"><button type="button" class="btn btn-primary">Añadir</button></a>
							<a${addAttribute("https://www.twitch.tv/" + nombreUsuario, "href")}><button type="button" class="btn btn-primary">Publicar</button></a>` : renderTemplate`<button id="login" class="btn btn-primary">Iniciar sesión</button>`}`;
}, "C:/Users/yamir/programacion/astro/TFC/src/components/Sesion.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="navbar navbar-expand-lg bg-body-tertiary"> <div class="container-fluid"> <a class="navbar-brand" href="#">Gamermart</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Features</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Pricing</a> </li> </ul> </div> ${renderComponent($$result2, "Sesion", $$Sesion, {})} </div> </nav> <nav class="navbar navbar-expand-lg bg-body-tertiary"> <div class="container-fluid"> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" aria-current="page" href="#">Pereferico</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Ordenadores</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Componentes</a> </li> <li class="nav-item"> <a class="nav-link" href="#">Auriculares</a> </li><li class="nav-item"> <a class="nav-link" href="#">Monitores</a> </li> </ul> </div> </div> </nav> ` })} `;
}, "C:/Users/yamir/programacion/astro/TFC/src/pages/index.astro", void 0);

const $$file = "C:/Users/yamir/programacion/astro/TFC/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, $$Sesion as a, index as i };
