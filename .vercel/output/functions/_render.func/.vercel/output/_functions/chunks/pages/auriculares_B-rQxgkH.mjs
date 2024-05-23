import crypto from 'node:crypto';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_0hkYe0U3.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { g as getSession } from './__DrK9I3rn.mjs';
/* empty css                                */
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { like } from '@astrojs/db/dist/runtime/virtual.js';

if (!globalThis.crypto) globalThis.crypto = crypto;
if (typeof globalThis.crypto.subtle === "undefined") globalThis.crypto.subtle = crypto.webcrypto.subtle;
if (typeof globalThis.crypto.randomUUID === "undefined") globalThis.crypto.randomUUID = crypto.randomUUID;

const $$Astro$2 = createAstro();
const $$Sesion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sesion;
  const session = await getSession(Astro2.request);
  console.log(session);
  const { nombreUsuario = session?.user?.name } = Astro2.props;
  return renderTemplate`${session ? renderTemplate`${maybeRenderHead()}<div class="dropdown w-auto"><button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img class="img-fluid w-25 rounded-circle"${addAttribute(session?.user?.image, "srcset")}></button><ul class="dropdown-menu"><li><a class="dropdown-item" href="/perfil/">perfil</a></li><li><a class="dropdown-item" id="logout">Cerrar sesión</a></li></ul></div>
							

							
							<a href="/subirProducto/"><button type="button" class="btn btn-primary">Publicar</button></a>` : renderTemplate`<button id="login" class="btn btn-primary">Iniciar sesión</button>`}`;
}, "C:/Users/yamir/programacion/astro/TFC/src/components/Sesion.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"><\/script><meta name="generator"', "><title>", "</title>", '</head> <body data-astro-cid-sckkx6r4> <nav class="navbar navbar-expand-lg bg-body-tertiary" data-astro-cid-sckkx6r4> <div class="container-fluid" data-astro-cid-sckkx6r4> <a class="navbar-brand" href="/" data-astro-cid-sckkx6r4>Gamermart</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-astro-cid-sckkx6r4> <span class="navbar-toggler-icon" data-astro-cid-sckkx6r4></span> </button> <div class="collapse navbar-collapse" id="navbarNav" data-astro-cid-sckkx6r4></div> ', ' </div> </nav> <nav class="navbar navbar-expand-lg bg-body-tertiary" data-astro-cid-sckkx6r4> <div class="container-fluid" data-astro-cid-sckkx6r4> <div class="collapse navbar-collapse" id="navbarNav" data-astro-cid-sckkx6r4> <ul class="navbar-nav" data-astro-cid-sckkx6r4> <li class="nav-item" data-astro-cid-sckkx6r4> <a class="nav-link" aria-current="page" href="/" data-astro-cid-sckkx6r4>Periferico</a> </li> <li class="nav-item" data-astro-cid-sckkx6r4> <a class="nav-link" href="/" data-astro-cid-sckkx6r4>Ordenadores</a> </li> <li class="nav-item" data-astro-cid-sckkx6r4> <a class="nav-link" href="/componentes/" data-astro-cid-sckkx6r4>Componentes</a> </li> <li class="nav-item" data-astro-cid-sckkx6r4> <a class="nav-link" href="/auriculares/" data-astro-cid-sckkx6r4>Auriculares</a> </li> <li class="nav-item" data-astro-cid-sckkx6r4> <a class="nav-link" href="/monitores/" data-astro-cid-sckkx6r4>Monitores</a> </li> <li class="nav-item" data-astro-cid-sckkx6r4> <a class="nav-link" href="/raton/" data-astro-cid-sckkx6r4>Raton</a> </li> <li class="nav-item" data-astro-cid-sckkx6r4> <a class="nav-link" href="/teclado" data-astro-cid-sckkx6r4>Teclado</a> </li> </ul> </div> </div> </nav> <script src="https://code.jquery.com/jquery-3.7.0.min.js"><\/script> ', " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Sesion", $$Sesion, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]));
}, "C:/Users/yamir/programacion/astro/TFC/src/layouts/Layout.astro", void 0);

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const producto = asDrizzleTable("producto", { "columns": { "nombreProducto": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "nombreProducto", "collection": "producto", "primaryKey": false, "optional": false } }, "descripcion": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "descripcion", "collection": "producto", "primaryKey": false, "optional": false } }, "precio": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "precio", "collection": "producto", "primaryKey": false, "optional": false } }, "img": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "img", "collection": "producto", "primaryKey": false, "optional": false } }, "tipo": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "tipo", "collection": "producto", "primaryKey": false, "optional": false } }, "autor": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "autor", "collection": "producto", "primaryKey": false, "optional": false } }, "estado": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "estado", "collection": "producto", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro = createAstro();
const $$Auriculares = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Auriculares;
  const productito = await db.select().from(producto).where(
    like(producto.tipo, "auriculares")
  );
  productito.map(({ nombreProducto }) => console.log(nombreProducto));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=" py-4 d-flex justify-content-center"> <div class="w-75"> <h4 class="ms-2">Auriculares</h4> <hr> </div> </div> <div class="container-fluid d-flex justify-content-center"> <div class="col-10 d-flex flex-wrap justify-content-center"> <!-- <div class="col-3 px-3">--><!-- </div>              --> ${productito.map(({ nombreProducto, descripcion, precio, img, tipo, autor, estado }) => renderTemplate`<div class="d-flex px-2 py-3"> <div class="card col-12" style="width: 18rem;"> <img${addAttribute(img, "srcset")} class="card-img-top" alt="..."> <div class="card-header"><a${addAttribute("https://www.twitch.tv/" + autor, "href")} class="author">${autor}</a></div> <div class="card-body"> <h5 class="card-title">${nombreProducto}</h5> <p class="card-text">${descripcion}</p> <h4>${precio + "\u20AC"}</h4> </div> </div> </div>`)} </div> </div> ` })}`;
}, "C:/Users/yamir/programacion/astro/TFC/src/pages/auriculares.astro", void 0);

const $$file = "C:/Users/yamir/programacion/astro/TFC/src/pages/auriculares.astro";
const $$url = "/auriculares";

const auriculares = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Auriculares,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, auriculares as a, db as d, producto as p };
