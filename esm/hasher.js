function t(t){const{mem:n,xxh32:e,xxh64:r,init32:u,update32:i,digest32:o,init64:c,update64:a,digest64:h}=t;let f=new Uint8Array(n.buffer);function s(t,e){if(n.buffer.byteLength<t+e){const r=Math.ceil((t+e-n.buffer.byteLength)/65536);n.grow(r),f=new Uint8Array(n.buffer)}}function g(t,n,e,r,u,i){s(t);const o=new Uint8Array(t);return f.set(o),e(0,n),o.set(f.subarray(0,t)),{update(n){let e;return f.set(o),"string"==typeof n?(s(3*n.length,t),e=L.encodeInto(n,f.subarray(t)).written):(s(n.byteLength,t),f.set(n,t),e=n.byteLength),r(0,t,e),o.set(f.subarray(0,t)),this},digest:()=>(f.set(o),i(u(0)))}}function b(t){return t>>>0}const y=2n**64n-1n;function d(t){return t&y}function w(t){return t}const L=new TextEncoder,p=0,l=0n;function x(t,n=p){return s(3*t.length,0),e(0,L.encodeInto(t,f).written,n)}function S(t,n){return b(x(t,n))}function R(t,n=l){return s(3*t.length,0),r(0,L.encodeInto(t,f).written,n)}function A(t,n){return d(R(t,n))}function I(t,n=p){return s(t.byteLength,0),f.set(t),e(0,t.byteLength,n)}function T(t,n=l){return s(t.byteLength,0),f.set(t),r(0,t.byteLength,n)}function U(t,n=p){return g(48,n,u,i,o,t)}function m(t,n=l){return g(88,n,c,a,h,t)}return{h32:S,h32ToString:(t,n)=>S(t,n).toString(16).padStart(8,"0"),h32Raw:(t,n)=>b(I(t,n)),create32:t=>U(b,t),h64:A,h64ToString:(t,n)=>A(t,n).toString(16).padStart(16,"0"),h64Raw:(t,n)=>d(T(t,n)),create64:t=>m(d,t),signed:{h32:x,h32Raw:I,create32:t=>U(w,t),h64:R,h64Raw:T,create64:t=>m(w,t)}}}export{t as c};
//# sourceMappingURL=hasher.js.map
