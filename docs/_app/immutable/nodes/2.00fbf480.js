import{s as j,f as D,a as T,l as X,A as de,g as A,d as p,c as q,h as C,m as Y,j as v,k as se,x as S,i as E,B as U,n as Z,y as O,C as me,D as _e,r as pe,u as $e,v as ge,w as he,E as ve,F as ne,G as ye,e as le,H as re,I as be,p as we,J as ke,K as Ie,L as Ee,o as Se}from"../chunks/scheduler.af76fd68.js";import{S as F,i as G,a as h,f as De,t as y,b,d as w,m as k,e as I,g as ce,c as fe,h as Ae}from"../chunks/index.9c6b1bf4.js";function ae(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Te(l){let e,s,t,n,c,r;return{c(){e=D("link"),s=T(),t=D("span"),n=X(l[0]),this.h()},l(i){const a=de("svelte-19epn0b",document.head);e=A(a,"LINK",{rel:!0,href:!0}),a.forEach(p),s=q(i),t=A(i,"SPAN",{class:!0,style:!0});var o=C(t);n=Y(o,l[0]),o.forEach(p),this.h()},h(){v(e,"rel","stylesheet"),v(e,"href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"),v(t,"class","material-symbols-outlined icon svelte-p2jdhv"),se(t,"--color",l[2])},m(i,a){S(document.head,e),E(i,s,a),E(i,t,a),S(t,n),c||(r=U(t,"click",function(){me(l[1])&&l[1].apply(this,arguments)}),c=!0)},p(i,[a]){l=i,a&1&&Z(n,l[0]),a&4&&se(t,"--color",l[2])},i:O,o:O,d(i){i&&(p(s),p(t)),p(e),c=!1,r()}}}function qe(l,e,s){let{name:t}=e,{handler:n=()=>{}}=e,{color:c="green"}=e;return l.$$set=r=>{"name"in r&&s(0,t=r.name),"handler"in r&&s(1,n=r.handler),"color"in r&&s(2,c=r.color)},[t,n,c]}class B extends F{constructor(e){super(),G(this,e,qe,Te,j,{name:0,handler:1,color:2})}}function Ne(l,{delay:e=0,duration:s=400,easing:t=_e}={}){const n=+getComputedStyle(l).opacity;return{delay:e,duration:s,easing:t,css:c=>`opacity: ${c*n}`}}function Ce(l){let e,s,t,n,c,r;const i=l[2].default,a=pe(i,l,l[1],null);return{c(){e=D("div"),a&&a.c(),this.h()},l(o){e=A(o,"DIV",{class:!0});var m=C(e);a&&a.l(m),m.forEach(p),this.h()},h(){v(e,"class",s="cell "+(l[0]?"cell-last":"")+" svelte-7947p4")},m(o,m){E(o,e,m),a&&a.m(e,null),n=!0,c||(r=U(e,"fade",{duration:300}),c=!0)},p(o,[m]){a&&a.p&&(!n||m&2)&&$e(a,i,o,o[1],n?he(i,o[1],m,null):ge(o[1]),null),(!n||m&1&&s!==(s="cell "+(o[0]?"cell-last":"")+" svelte-7947p4"))&&v(e,"class",s)},i(o){n||(h(a,o),o&&(t||ve(()=>{t=De(e,Ne,{duration:700}),t.start()})),n=!0)},o(o){y(a,o),n=!1},d(o){o&&p(e),a&&a.d(o),c=!1,r()}}}function Le(l,e,s){let{$$slots:t={},$$scope:n}=e,{last:c=!1}=e;return l.$$set=r=>{"last"in r&&s(0,c=r.last),"$$scope"in r&&s(1,n=r.$$scope)},[c,n,t]}class K extends F{constructor(e){super(),G(this,e,Le,Ce,j,{last:0})}}function Ve(l){let e,s=l[2](l[0])+"",t,n,c,r;return{c(){e=D("span"),t=X(s),this.h()},l(i){e=A(i,"SPAN",{class:!0});var a=C(e);t=Y(a,s),a.forEach(p),this.h()},h(){v(e,"class",n=ne(l[1]?"DISABILITATO":l[2](l[0]))+" svelte-mzbtwe")},m(i,a){E(i,e,a),S(e,t),c||(r=U(e,"click",l[3]),c=!0)},p(i,[a]){a&1&&s!==(s=i[2](i[0])+"")&&Z(t,s),a&3&&n!==(n=ne(i[1]?"DISABILITATO":i[2](i[0]))+" svelte-mzbtwe")&&v(e,"class",n)},i:O,o:O,d(i){i&&p(e),c=!1,r()}}}function Be(l,e,s){let{prio:t=3}=e,{disabled:n=!1}=e;const c=i=>({1:"ALTA",2:"MEDIA",3:"BASSA"})[i],r=()=>{n||s(0,t=(t+1)%3+1)};return l.$$set=i=>{"prio"in i&&s(0,t=i.prio),"disabled"in i&&s(1,n=i.disabled)},[t,n,c,r]}class Oe extends F{constructor(e){super(),G(this,e,Be,Ve,j,{prio:0,disabled:1})}}function Pe(l){let e=l[0].id+"",s;return{c(){s=X(e)},l(t){s=Y(t,e)},m(t,n){E(t,s,n)},p(t,n){n&1&&e!==(e=t[0].id+"")&&Z(s,e)},d(t){t&&p(s)}}}function Je(l){let e,s;return e=new B({props:{name:"task_alt",handler:l[1]}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){k(e,t,n),s=!0},p:O,i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function Me(l){let e,s;return e=new B({props:{name:"circle",handler:l[1],color:"red"}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){k(e,t,n),s=!0},p:O,i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function ze(l){let e,s,t,n;const c=[Me,Je],r=[];function i(a,o){return a[0].done==!1?0:1}return e=i(l),s=r[e]=c[e](l),{c(){s.c(),t=le()},l(a){s.l(a),t=le()},m(a,o){r[e].m(a,o),E(a,t,o),n=!0},p(a,o){let m=e;e=i(a),e===m?r[e].p(a,o):(ce(),y(r[m],1,1,()=>{r[m]=null}),fe(),s=r[e],s?s.p(a,o):(s=r[e]=c[e](a),s.c()),h(s,1),s.m(t.parentNode,t))},i(a){n||(h(s),n=!0)},o(a){y(s),n=!1},d(a){a&&p(t),r[e].d(a)}}}function je(l){let e,s,t,n,c;return{c(){e=D("input"),this.h()},l(r){e=A(r,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),this.h()},h(){v(e,"type","text"),v(e,"class",s="todo-item-input-text "+(l[0].done==!0?"text-done":"")+" svelte-1dtmcw"),v(e,"id",t=l[0].id),v(e,"placeholder","Inserisci in nuovo ToDo")},m(r,i){E(r,e,i),re(e,l[0].task),n||(c=[U(e,"input",l[5]),U(e,"change",l[2])],n=!0)},p(r,i){i&1&&s!==(s="todo-item-input-text "+(r[0].done==!0?"text-done":"")+" svelte-1dtmcw")&&v(e,"class",s),i&1&&t!==(t=r[0].id)&&v(e,"id",t),i&1&&e.value!==r[0].task&&re(e,r[0].task)},d(r){r&&p(e),n=!1,be(c)}}}function Fe(l){let e,s,t;function n(r){l[6](r)}let c={disabled:l[0].done};return l[0].priority!==void 0&&(c.prio=l[0].priority),e=new Oe({props:c}),we.push(()=>Ae(e,"prio",n)),{c(){b(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,i){k(e,r,i),t=!0},p(r,i){const a={};i&1&&(a.disabled=r[0].done),!s&&i&1&&(s=!0,a.prio=r[0].priority,ke(()=>s=!1)),e.$set(a)},i(r){t||(h(e.$$.fragment,r),t=!0)},o(r){y(e.$$.fragment,r),t=!1},d(r){I(e,r)}}}function Ge(l){let e,s;return e=new B({props:{name:"delete_forever",handler:l[7],color:"red"}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){k(e,t,n),s=!0},p:O,i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function He(l){let e,s,t,n,c,r,i,a,o,m;return e=new K({props:{$$slots:{default:[Pe]},$$scope:{ctx:l}}}),t=new K({props:{$$slots:{default:[ze]},$$scope:{ctx:l}}}),c=new K({props:{$$slots:{default:[je]},$$scope:{ctx:l}}}),i=new K({props:{$$slots:{default:[Fe]},$$scope:{ctx:l}}}),o=new K({props:{last:!0,$$slots:{default:[Ge]},$$scope:{ctx:l}}}),{c(){b(e.$$.fragment),s=T(),b(t.$$.fragment),n=T(),b(c.$$.fragment),r=T(),b(i.$$.fragment),a=T(),b(o.$$.fragment)},l(f){w(e.$$.fragment,f),s=q(f),w(t.$$.fragment,f),n=q(f),w(c.$$.fragment,f),r=q(f),w(i.$$.fragment,f),a=q(f),w(o.$$.fragment,f)},m(f,u){k(e,f,u),E(f,s,u),k(t,f,u),E(f,n,u),k(c,f,u),E(f,r,u),k(i,f,u),E(f,a,u),k(o,f,u),m=!0},p(f,[u]){const M={};u&513&&(M.$$scope={dirty:u,ctx:f}),e.$set(M);const L={};u&513&&(L.$$scope={dirty:u,ctx:f}),t.$set(L);const N={};u&513&&(N.$$scope={dirty:u,ctx:f}),c.$set(N);const z={};u&513&&(z.$$scope={dirty:u,ctx:f}),i.$set(z);const V={};u&512&&(V.$$scope={dirty:u,ctx:f}),o.$set(V)},i(f){m||(h(e.$$.fragment,f),h(t.$$.fragment,f),h(c.$$.fragment,f),h(i.$$.fragment,f),h(o.$$.fragment,f),m=!0)},o(f){y(e.$$.fragment,f),y(t.$$.fragment,f),y(c.$$.fragment,f),y(i.$$.fragment,f),y(o.$$.fragment,f),m=!1},d(f){f&&(p(s),p(n),p(r),p(a)),I(e,f),I(t,f),I(c,f),I(i,f),I(o,f)}}}function Ke(l,e,s){let{todo:t}=e;const n=ye();let c=t.priority;const r=()=>{s(0,t.done=!t.done,t),a("update")},i=()=>{document.getElementById(t.id).blur(),a("update")},a=u=>{n("change",{type:u,id:t.id})};function o(){t.task=this.value,s(0,t)}function m(u){l.$$.not_equal(t.priority,u)&&(t.priority=u,s(0,t))}const f=()=>a("delete");return l.$$set=u=>{"todo"in u&&s(0,t=u.todo)},l.$$.update=()=>{l.$$.dirty&17&&t.priority!=c&&(s(4,c=t.priority),a("update"))},[t,r,i,a,c,o,m,f]}class Ue extends F{constructor(e){super(),G(this,e,Ke,He,j,{todo:0})}}function oe(l,e,s){const t=l.slice();return t[6]=e[s],t}function ie(l){let e,s;return e=new Ue({props:{todo:l[6]}}),e.$on("change",l[2]),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){k(e,t,n),s=!0},p(t,n){const c={};n&1&&(c.todo=t[6]),e.$set(c)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function Re(l){let e,s="ToDos",t,n,c,r,i,a,o,m,f,u,M,L,N,z,V,P,Q,R;r=new B({props:{name:"tag"}}),o=new B({props:{name:"task_alt"}}),u=new B({props:{name:"list"}}),N=new B({props:{name:"schedule"}}),P=new B({props:{name:"add_box",handler:l[1]}});let J=ae(l[0]),$=[];for(let d=0;d<J.length;d+=1)$[d]=ie(oe(l,J,d));const ue=d=>y($[d],1,1,()=>{$[d]=null});return{c(){e=D("h1"),e.textContent=s,t=T(),n=D("div"),c=D("div"),b(r.$$.fragment),i=T(),a=D("div"),b(o.$$.fragment),m=T(),f=D("div"),b(u.$$.fragment),M=T(),L=D("div"),b(N.$$.fragment),z=T(),V=D("div"),b(P.$$.fragment),Q=T();for(let d=0;d<$.length;d+=1)$[d].c();this.h()},l(d){e=A(d,"H1",{class:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-nh6ksq"&&(e.textContent=s),t=q(d),n=A(d,"DIV",{class:!0});var _=C(n);c=A(_,"DIV",{class:!0});var g=C(c);w(r.$$.fragment,g),g.forEach(p),i=q(_),a=A(_,"DIV",{class:!0});var H=C(a);w(o.$$.fragment,H),H.forEach(p),m=q(_),f=A(_,"DIV",{class:!0});var x=C(f);w(u.$$.fragment,x),x.forEach(p),M=q(_),L=A(_,"DIV",{class:!0});var ee=C(L);w(N.$$.fragment,ee),ee.forEach(p),z=q(_),V=A(_,"DIV",{class:!0});var te=C(V);w(P.$$.fragment,te),te.forEach(p),Q=q(_);for(let W=0;W<$.length;W+=1)$[W].l(_);_.forEach(p),this.h()},h(){v(e,"class","app-title svelte-cuwq3v"),v(c,"class","header header-last svelte-cuwq3v"),v(a,"class","header header-last svelte-cuwq3v"),v(f,"class","header header-last svelte-cuwq3v"),v(L,"class","header header-last svelte-cuwq3v"),v(V,"class","header header-last svelte-cuwq3v"),v(n,"class","todo-list svelte-cuwq3v")},m(d,_){E(d,e,_),E(d,t,_),E(d,n,_),S(n,c),k(r,c,null),S(n,i),S(n,a),k(o,a,null),S(n,m),S(n,f),k(u,f,null),S(n,M),S(n,L),k(N,L,null),S(n,z),S(n,V),k(P,V,null),S(n,Q);for(let g=0;g<$.length;g+=1)$[g]&&$[g].m(n,null);R=!0},p(d,[_]){if(_&5){J=ae(d[0]);let g;for(g=0;g<J.length;g+=1){const H=oe(d,J,g);$[g]?($[g].p(H,_),h($[g],1)):($[g]=ie(H),$[g].c(),h($[g],1),$[g].m(n,null))}for(ce(),g=J.length;g<$.length;g+=1)ue(g);fe()}},i(d){if(!R){h(r.$$.fragment,d),h(o.$$.fragment,d),h(u.$$.fragment,d),h(N.$$.fragment,d),h(P.$$.fragment,d);for(let _=0;_<J.length;_+=1)h($[_]);R=!0}},o(d){y(r.$$.fragment,d),y(o.$$.fragment,d),y(u.$$.fragment,d),y(N.$$.fragment,d),y(P.$$.fragment,d),$=$.filter(Boolean);for(let _=0;_<$.length;_+=1)y($[_]);R=!1},d(d){d&&(p(e),p(t),p(n)),I(r),I(o),I(u),I(N),I(P),Ee($,d)}}}function Qe(l,e,s){let t=[],n=0;const c=async()=>{let o={id:++n,task:"",done:!1,priority:3};console.log("Create: ",o),localStorage.setItem(`todo${o.id}`,JSON.stringify(o)),s(0,t=[...t,o])},r=async o=>{switch(o.detail.type){case"update":a(o.detail.id);break;case"delete":i(o.detail.id);break}},i=o=>{console.log("DELETE: ",o),s(0,t=t.filter(m=>m.id!=o)),localStorage.removeItem(`todo${o}`)},a=o=>{console.log("UPDATE:",o);const m=t.filter(f=>f.id==o)[0];localStorage.setItem(`todo${o}`,JSON.stringify(m))};return Se(async()=>{for(let o=0;o<localStorage.length;o++){const m=localStorage.key(o),f=+m.substring(4);f>=n&&(n=f);const u=JSON.parse(localStorage.getItem(m));u!=null&&t.push(u)}s(0,t=[...t])}),[t,c,r]}class We extends F{constructor(e){super(),G(this,e,Qe,Re,j,{})}}function Xe(l){let e,s,t;return s=new We({}),{c(){e=D("main"),b(s.$$.fragment),this.h()},l(n){e=A(n,"MAIN",{class:!0});var c=C(e);w(s.$$.fragment,c),c.forEach(p),this.h()},h(){v(e,"class","svelte-ts7oy")},m(n,c){E(n,e,c),k(s,e,null),t=!0},p:O,i(n){t||(h(s.$$.fragment,n),t=!0)},o(n){y(s.$$.fragment,n),t=!1},d(n){n&&p(e),I(s)}}}class xe extends F{constructor(e){super(),G(this,e,null,Xe,j,{})}}export{xe as component};
