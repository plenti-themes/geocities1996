import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,text}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[2]=t[n],s}function create_if_block(e){let t,n;return{c(){t=element("h3"),n=text(e[0]),this.h()},l(s){t=claim_element(s,"H3",{class:!0});var o=children(t);n=claim_text(o,e[0]),o.forEach(detach),this.h()},h(){attr(t,"class","select")},m(e,s){insert_hydration(e,t,s),append_hydration(t,n)},p(e,t){t&1&&set_data(n,e[0])},d(e){e&&detach(t)}}}function create_each_block(e){let s,n,o=e[2].design.name+"",l,c,r,h,t,i=e[2].designer.name+"",a,d,u,m;return{c(){s=element("li"),n=element("a"),l=text(o),h=text(`
                    by
                    `),t=element("a"),a=text(i),m=space(),this.h()},l(e){s=claim_element(e,"LI",{});var c,d,r=children(s);n=claim_element(r,"A",{href:!0,class:!0}),c=children(n),l=claim_text(c,o),c.forEach(detach),h=claim_text(r,`
                    by
                    `),t=claim_element(r,"A",{href:!0,class:!0}),d=children(t),a=claim_text(d,i),d.forEach(detach),m=claim_space(r),r.forEach(detach),this.h()},h(){attr(n,"href",c=e[2].design.href),attr(n,"class",r=e[2].design.class),attr(t,"href",d=e[2].designer.href),attr(t,"class",u=e[2].designer.class)},m(e,o){insert_hydration(e,s,o),append_hydration(s,n),append_hydration(n,l),append_hydration(s,h),append_hydration(s,t),append_hydration(t,a),append_hydration(s,m)},p(e,s){s&2&&o!==(o=e[2].design.name+"")&&set_data(l,o),s&2&&c!==(c=e[2].design.href)&&attr(n,"href",c),s&2&&r!==(r=e[2].design.class)&&attr(n,"class",r),s&2&&i!==(i=e[2].designer.name+"")&&set_data(a,i),s&2&&d!==(d=e[2].designer.href)&&attr(t,"href",d),s&2&&u!==(u=e[2].designer.class)&&attr(t,"class",u)},d(e){e&&detach(s)}}}function create_fragment(e){let s,r,o,i,n=e[0]&&create_if_block(e),a=e[1],t=[];for(let n=0;n<a.length;n+=1)t[n]=create_each_block(get_each_context(e,a,n));return{c(){s=element("div"),n&&n.c(),r=space(),o=element("nav"),i=element("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){s=claim_element(e,"DIV",{class:!0,id:!0});var c,l,a=children(s);n&&n.l(a),r=claim_space(a),o=claim_element(a,"NAV",{role:!0}),c=children(o),i=claim_element(c,"UL",{}),l=children(i);for(let e=0;e<t.length;e+=1)t[e].l(l);l.forEach(detach),c.forEach(detach),a.forEach(detach),this.h()},h(){attr(o,"role","navigation"),attr(s,"class","design-selection"),attr(s,"id","design-selection")},m(e,a){insert_hydration(e,s,a),n&&n.m(s,null),append_hydration(s,r),append_hydration(s,o),append_hydration(o,i);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(i,null)},p(e,[o]){if(e[0]?n?n.p(e,o):(n=create_if_block(e),n.c(),n.m(s,r)):n&&(n.d(1),n=null),o&2){a=e[1];let n;for(n=0;n<a.length;n+=1){const s=get_each_context(e,a,n);t[n]?t[n].p(s,o):(t[n]=create_each_block(s),t[n].c(),t[n].m(i,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=a.length}},i:noop,o:noop,d(e){e&&detach(s),n&&n.d(),destroy_each(t,e)}}}function instance(e,t,n){let{title:s,design_selection_links:o}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"design_selection_links"in e&&n(1,o=e.design_selection_links)},[s,o]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,design_selection_links:1})}}export default Component