import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_0hkYe0U3.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/auth/[...auth]","pattern":"^\\/api\\/auth(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"...auth","dynamic":true,"spread":true}]],"params":["...auth"],"component":"node_modules/auth-astro/src/api/[...auth].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BgzS8gMo.js"}],"styles":[{"type":"inline","content":".author[data-astro-cid-sckkx6r4]{list-style:none;color:#a74aff}\n"}],"routeData":{"route":"/auriculares","isIndex":false,"type":"page","pattern":"^\\/auriculares\\/?$","segments":[[{"content":"auriculares","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auriculares.astro","pathname":"/auriculares","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BgzS8gMo.js"}],"styles":[{"type":"inline","content":".author[data-astro-cid-sckkx6r4]{list-style:none;color:#a74aff}\n"}],"routeData":{"route":"/componentes","isIndex":false,"type":"page","pattern":"^\\/componentes\\/?$","segments":[[{"content":"componentes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/componentes.astro","pathname":"/componentes","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/formulario","isIndex":false,"type":"page","pattern":"^\\/formulario\\/?$","segments":[[{"content":"formulario","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/formulario.astro","pathname":"/formulario","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BgzS8gMo.js"}],"styles":[{"type":"inline","content":".author[data-astro-cid-sckkx6r4]{list-style:none;color:#a74aff}\n"}],"routeData":{"route":"/monitores","isIndex":false,"type":"page","pattern":"^\\/monitores\\/?$","segments":[[{"content":"monitores","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/monitores.astro","pathname":"/monitores","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B1mGlyw9.js"}],"styles":[{"type":"inline","content":".author[data-astro-cid-sckkx6r4]{list-style:none;color:#a74aff}\n"}],"routeData":{"route":"/mostrarfoto","isIndex":false,"type":"page","pattern":"^\\/mostrarFoto\\/?$","segments":[[{"content":"mostrarFoto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mostrarFoto.astro","pathname":"/mostrarFoto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BgzS8gMo.js"}],"styles":[{"type":"inline","content":".author[data-astro-cid-sckkx6r4]{list-style:none;color:#a74aff}\n"}],"routeData":{"route":"/mostrarperfil","isIndex":false,"type":"page","pattern":"^\\/mostrarPerfil\\/?$","segments":[[{"content":"mostrarPerfil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mostrarPerfil.astro","pathname":"/mostrarPerfil","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BgzS8gMo.js"}],"styles":[{"type":"inline","content":".author[data-astro-cid-sckkx6r4]{list-style:none;color:#a74aff}\n"}],"routeData":{"route":"/perfil","isIndex":false,"type":"page","pattern":"^\\/perfil\\/?$","segments":[[{"content":"perfil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/perfil.astro","pathname":"/perfil","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BESg7HAM.js"}],"styles":[{"type":"inline","content":".author[data-astro-cid-sckkx6r4]{list-style:none;color:#a74aff}\n"}],"routeData":{"route":"/raton","isIndex":false,"type":"page","pattern":"^\\/raton\\/?$","segments":[[{"content":"raton","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/raton.astro","pathname":"/raton","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ktT4-VEq.js"}],"styles":[{"type":"inline","content":".author[data-astro-cid-sckkx6r4]{list-style:none;color:#a74aff}\n"}],"routeData":{"route":"/subirfoto","isIndex":false,"type":"page","pattern":"^\\/subirFoto\\/?$","segments":[[{"content":"subirFoto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/subirFoto.astro","pathname":"/subirFoto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DHQzkAAu.js"}],"styles":[{"type":"inline","content":".author[data-astro-cid-sckkx6r4]{list-style:none;color:#a74aff}\n"}],"routeData":{"route":"/subirproducto","isIndex":false,"type":"page","pattern":"^\\/subirProducto\\/?$","segments":[[{"content":"subirProducto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/subirProducto.astro","pathname":"/subirProducto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DpsDSNWO.js"}],"styles":[{"type":"inline","content":".author[data-astro-cid-sckkx6r4]{list-style:none;color:#a74aff}\n"}],"routeData":{"route":"/teclado","isIndex":false,"type":"page","pattern":"^\\/teclado\\/?$","segments":[[{"content":"teclado","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/teclado.astro","pathname":"/teclado","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BgzS8gMo.js"}],"styles":[{"type":"inline","content":".author[data-astro-cid-sckkx6r4]{list-style:none;color:#a74aff}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/yamir/programacion/astro/TFC/src/pages/auriculares.astro",{"propagation":"none","containsHead":true}],["C:/Users/yamir/programacion/astro/TFC/src/pages/componentes.astro",{"propagation":"none","containsHead":true}],["C:/Users/yamir/programacion/astro/TFC/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/yamir/programacion/astro/TFC/src/pages/monitores.astro",{"propagation":"none","containsHead":true}],["C:/Users/yamir/programacion/astro/TFC/src/pages/mostrarFoto.astro",{"propagation":"none","containsHead":true}],["C:/Users/yamir/programacion/astro/TFC/src/pages/mostrarPerfil.astro",{"propagation":"none","containsHead":true}],["C:/Users/yamir/programacion/astro/TFC/src/pages/perfil.astro",{"propagation":"none","containsHead":true}],["C:/Users/yamir/programacion/astro/TFC/src/pages/raton.astro",{"propagation":"none","containsHead":true}],["C:/Users/yamir/programacion/astro/TFC/src/pages/subirFoto.astro",{"propagation":"none","containsHead":true}],["C:/Users/yamir/programacion/astro/TFC/src/pages/subirProducto.astro",{"propagation":"none","containsHead":true}],["C:/Users/yamir/programacion/astro/TFC/src/pages/teclado.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/componentes.astro":"chunks/pages/componentes_CNr2wi9H.mjs","/src/pages/formulario.astro":"chunks/pages/formulario_BWEBozbG.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_d451mo3k.mjs","/src/pages/index.astro":"chunks/pages/index_DrlhUMI7.mjs","/src/pages/monitores.astro":"chunks/pages/monitores_BJRt1kfl.mjs","/src/pages/mostrarFoto.astro":"chunks/pages/mostrarFoto_CQD6oyXb.mjs","/src/pages/mostrarPerfil.astro":"chunks/pages/mostrarPerfil_C7EsZ3Ts.mjs","/src/pages/perfil.astro":"chunks/pages/perfil_BjCSirY0.mjs","/src/pages/raton.astro":"chunks/pages/raton_CZI8jsQY.mjs","/src/pages/subirFoto.astro":"chunks/pages/subirFoto_BdZB4Fof.mjs","/src/pages/subirProducto.astro":"chunks/pages/subirProducto_B9c_JQz4.mjs","/src/pages/teclado.astro":"chunks/pages/teclado_CJ3wwAnS.mjs","\u0000@astrojs-manifest":"manifest_naWEuX6o.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_lqeaf98Z.mjs","\u0000@astro-page:node_modules/auth-astro/src/api/[...auth]@_@ts":"chunks/_.._sfZ01sqy.mjs","\u0000@astro-page:src/pages/auriculares@_@astro":"chunks/auriculares_BEQw5koU.mjs","\u0000@astro-page:src/pages/componentes@_@astro":"chunks/componentes_4Irc4WFw.mjs","\u0000@astro-page:src/pages/formulario@_@astro":"chunks/formulario_5ssCUvHx.mjs","\u0000@astro-page:src/pages/monitores@_@astro":"chunks/monitores_ClbBrX14.mjs","\u0000@astro-page:src/pages/mostrarFoto@_@astro":"chunks/mostrarFoto_CDu7dmBe.mjs","\u0000@astro-page:src/pages/mostrarPerfil@_@astro":"chunks/mostrarPerfil_CHxkf-sA.mjs","\u0000@astro-page:src/pages/perfil@_@astro":"chunks/perfil_Cq7gnPDI.mjs","\u0000@astro-page:src/pages/raton@_@astro":"chunks/raton_DoLTova2.mjs","\u0000@astro-page:src/pages/subirFoto@_@astro":"chunks/subirFoto_8qaewNwP.mjs","\u0000@astro-page:src/pages/subirProducto@_@astro":"chunks/subirProducto_Yg0e8g9E.mjs","\u0000@astro-page:src/pages/teclado@_@astro":"chunks/teclado_BDHRRuyY.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_B-Z_wK3I.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.BESg7HAM.js","/astro/hoisted.js?q=4":"_astro/hoisted.DpsDSNWO.js","/astro/hoisted.js?q=5":"_astro/hoisted.BgzS8gMo.js","/astro/hoisted.js?q=2":"_astro/hoisted.ktT4-VEq.js","/astro/hoisted.js?q=3":"_astro/hoisted.DHQzkAAu.js","C:/Users/yamir/programacion/astro/TFC/node_modules/auth-astro/client.ts":"_astro/client.BqElmF-z.js","/astro/hoisted.js?q=0":"_astro/hoisted.B1mGlyw9.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/_astro/client.BqElmF-z.js","/_astro/hoisted.B1mGlyw9.js","/_astro/hoisted.BESg7HAM.js","/_astro/hoisted.BgzS8gMo.js","/_astro/hoisted.DHQzkAAu.js","/_astro/hoisted.DpsDSNWO.js","/_astro/hoisted.ktT4-VEq.js"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
