import institutional from "./index.js";
import {projects, bySlug, renderProject} from "./demos.js";
const zone="pixelinfinite.com.br";
const headers={
 "content-type":"text/html; charset=utf-8",
 "cache-control":"public, max-age=120",
 "x-robots-tag":"noindex, nofollow, noarchive",
 "x-content-type-options":"nosniff",
 "referrer-policy":"strict-origin-when-cross-origin",
 "content-security-policy":"default-src 'none'; base-uri 'none'; object-src 'none'; form-action 'self'; frame-ancestors 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'none'; upgrade-insecure-requests",
 "permissions-policy":"camera=(),microphone=(),geolocation=()"
};
const respond=(body,status=200,extra={})=>new Response(body,{status,headers:{...headers,...extra}});
export default {
 async fetch(request,env,ctx){
  const u=new URL(request.url);
  const hostname=u.hostname.toLowerCase();
  const method=request.method.toUpperCase();
  if(!["GET","HEAD"].includes(method))return respond("Método não permitido",405,{"allow":"GET, HEAD","content-type":"text/plain; charset=utf-8"});
  // Preview is intentionally non-indexable and makes no claims of affiliation.
  let slug=null;
  if(hostname==="eidos."+zone || hostname==="localhost" || hostname==="127.0.0.1"){
   const match=u.pathname.match(/^\/preview\/([a-z0-9-]+)\/?$/);
   if(match)slug=match[1];
   else if(u.pathname==="/preview" || u.pathname==="/preview/"){
    return respond("<!doctype html><html lang=\"pt-BR\"><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"robots\" content=\"noindex\"><title>Eidos — Pré-visualizações internas</title><body style=\"font:16px system-ui;background:#0d1428;color:white;padding:30px\"><h1>Eidos · Conceitos de clientes</h1><p>Protótipos não oficiais, criados para propostas comerciais e sem autorização ou contrato.</p><ul>"+projects.map(p=>'<li style=\"margin:9px 0\"><a style=\"color:#9bd5ff\" href=\"/preview/'+p.slug+'\">'+p.name+'</a></li>').join("")+"</ul><p><a style=\"color:#9bd5ff\" href=\"/\">Voltar à Eidos</a></p></body></html>");
   } else return institutional.fetch(request,env,ctx);
  }else if(hostname.endsWith("."+zone)){
   const prefix=hostname.slice(0,-("."+zone).length);
   if(bySlug.has(prefix))slug=prefix;
  }
  if(!slug)return respond("Host não configurado",404,{"content-type":"text/plain; charset=utf-8"});
  const project=bySlug.get(slug);
  if(!project)return respond("Conceito não encontrado",404,{"content-type":"text/plain; charset=utf-8"});
  if(u.pathname==="/health")return new Response(JSON.stringify({status:"ok",project:slug,demo:true}),{headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","x-robots-tag":"noindex"}});
  if(u.pathname==="/robots.txt")return new Response("User-agent: *\nDisallow: /\n",{headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public,max-age=3600"}});
  if(u.pathname!=="/" && !u.pathname.startsWith("/preview/"))return respond("Página não encontrada",404,{"content-type":"text/plain; charset=utf-8"});
  const page=renderProject(project);
  return respond(method==="HEAD"?null:page);
 }
};
