import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,listen,noop,safe_not_equal,set_data,space,text}from"../../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let n,t,o,s,i,a;return{c(){n=element("label"),t=element("input"),o=space(),s=text(e[0]),this.h()},l(i){n=claim_element(i,"LABEL",{});var a=children(n);t=claim_element(a,"INPUT",{id:!0,type:!0}),o=claim_space(a),s=claim_text(a,e[0]),a.forEach(detach),this.h()},h(){attr(t,"id",e[1]),attr(t,"type","checkbox")},m(r,c){insert_hydration(r,n,c),append_hydration(n,t),t.checked=e[0],append_hydration(n,o),append_hydration(n,s),i||(a=listen(t,"change",e[2]),i=!0)},p(e,[n]){n&2&&attr(t,"id",e[1]),n&1&&(t.checked=e[0]),n&1&&set_data(s,e[0])},i:noop,o:noop,d(e){e&&detach(n),i=!1,a()}}}function instance(e,t,n){let{field:s,label:o}=t;function i(){s=this.checked,n(0,s)}return e.$$set=e=>{"field"in e&&n(0,s=e.field),"label"in e&&n(1,o=e.label)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{field:0,label:1})}}export default Component