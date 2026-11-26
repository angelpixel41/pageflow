import {test} from "node:test";
import assert from "node:assert/strict";
import router from "../src/router.js";
import {projects,bySlug,renderProject} from "../src/demos.js";
test("catalog has 18 unique non-official concepts",()=>{
 assert.equal(projects.length,18);
 assert.equal(new Set(projects.map(p=>p.slug)).size,18);
 for(const p of projects){
  assert.equal(bySlug.get(p.slug),p);
  const html=renderProject(p);
  assert.match(html,/DEMONSTRAÇÃO NÃO OFICIAL/);
  assert.match(html,/noindex,nofollow,noarchive/);
  assert.match(html,/Nenhum dado é enviado/);
  assert.doesNotMatch(html,/wa\.me|api\.whatsapp\.com/);
 }
});
test("preview route serves demo and excludes indexing",async()=>{
 const res=await router.fetch(new Request("https://eidos.pixelinfinite.com.br/preview/bocca"));
 assert.equal(res.status,200);
 assert.match(res.headers.get("x-robots-tag"),/noindex/);
 assert.match(await res.text(),/Bocca Odontologia/);
});
test("client subdomain serves only its concept",async()=>{
 const res=await router.fetch(new Request("https://ph-ar.pixelinfinite.com.br/"));
 assert.equal(res.status,200);
 assert.match(await res.text(),/PH Ar Condicionado/);
 assert.equal((await router.fetch(new Request("https://ph-ar.pixelinfinite.com.br/nope"))).status,404);
});
test("wrong host is rejected",async()=>{
 assert.equal((await router.fetch(new Request("https://evil.example.com/"))).status,404);
 assert.equal((await router.fetch(new Request("https://unknown.pixelinfinite.com.br/"))).status,404);
});
test("HEAD and request safety",async()=>{
 const r=await router.fetch(new Request("https://jl-vidros.pixelinfinite.com.br/",{method:"HEAD"}));
 assert.equal(r.status,200);
 assert.equal(await r.text(),"");
 assert.equal((await router.fetch(new Request("https://jl-vidros.pixelinfinite.com.br/",{method:"POST"}))).status,405);
});
