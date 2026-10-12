// Copia index.html a www/ para que Capacitor solo empaquete la web (no node_modules ni android/)
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'www');
fs.mkdirSync(out, { recursive: true });
fs.copyFileSync(path.join(root, 'index.html'), path.join(out, 'index.html'));
console.log('www/index.html listo');
