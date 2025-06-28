/* **Ce face acest pattern:**

- Agregă exporturile din multiple module într-un singur punct de entry
- Simplifică importurile pentru consumatorii bibliotecii
- Oferă control centralizat asupra API-ului public

**Când să-l folosești:**

- Pentru biblioteci și package-uri NPM
- Când ai o structură de foldere complexă
- Pentru a ascunde implementarea internă și expune doar API-ul public
- Când vrei să faci refactoring fără să afectezi consumatorii*/
export { default as services } from './services/index.js'
export { default as utils } from './utils/index.js'
export { default as factories } from './factories/index.js'