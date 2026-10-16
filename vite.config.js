import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

/**
 * Configuración de Vite para Orquídea.
 *
 * Trazabilidad: ADR-001 (Bun + Vite) / REQ-001 (configuración del empaquetador).
 *
 * DOMER Agnóstica:
 *   Mesa de trabajo (desk/) --vite build--> Producto desplegable (build/)
 *
 * La raíz del repositorio (donde vive este archivo) aloja únicamente la
 * orquestación: no contiene código de ejecución ni artefactos intermedios.
 */
export default defineConfig({
  // El servidor de desarrollo y el build operan desde la mesa de trabajo.
  root: 'desk',

  // Rutas relativas en el HTML compilado: el producto en build/ es portable
  // y puede desplegarse desde cualquier subdirectorio o file system.
  base: './',

  build: {
    // La salida se extrae de desk/ y no contamina el área de desarrollo.
    outDir: '../build',

    // Purga compilaciones anteriores antes de cada build.
    // Es obligatorio declararlo porque outDir queda fuera de root.
    emptyOutDir: true,

    // ESM nativo: Firebase SDK modular no requiere polyfills ni transpilación legacy.
    target: 'esnext',
    modulePreload: { polyfill: false },
    sourcemap: true,
  },

  server: {
    // Recarga rápida en vivo (HMR) sobre la mesa de trabajo.
    open: true,

    fs: {
      // desk/index.html referencia ../assets (fuera de root) mediante rutas
      // relativas; se habilita la lectura del repositorio para /@fs/.
      allow: [fileURLToPath(new URL('.', import.meta.url))],
    },
  },

  preview: {
    open: true,
  },
});
