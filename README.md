# SimuESP Studio PRO MAX — Android + Windows

Este repositorio empaqueta el simulador HTML en dos aplicaciones:

- **Windows:** Electron; GitHub Actions publica instalador y versión portable como artefactos.
- **Android:** Capacitor; GitHub Actions compila un APK de depuración.

## Importante

`index.html` es la interfaz base incluida en este paquete. Se mantiene como archivo fuente y no se reescribe al empaquetar. La apariencia y las funciones del simulador dependen de ese HTML. Este repositorio es una base de empaquetado; los instaladores aún deben compilarse y probarse en GitHub Actions o localmente.

## Subir a GitHub desde Windows

1. Descomprime el ZIP.
2. Crea un repositorio en GitHub llamado `SimuESP-Studio-PRO-MAX`.
3. En la página del repositorio, pulsa **Add file → Upload files** y sube el contenido de esta carpeta (incluida la carpeta `.github`). También puedes usar GitHub Desktop.
4. Confirma los cambios con un commit.
5. Abre la pestaña **Actions**, habilita workflows si GitHub lo pide y ejecuta **Build Windows app** y **Build Android APK** con **Run workflow**.
6. Al terminar, entra en cada ejecución y descarga el artefacto desde **Artifacts**.

## Compilar localmente en Windows

Instala Node.js LTS y abre una terminal en esta carpeta:

```bash
npm install
npm start
npm run desktop:dist
```

Los archivos de Windows se guardan en `release/`.

## Compilar Android localmente

Requiere Node.js, Android Studio y un JDK compatible instalado:

```bash
npm install
npm run android:init
npm run android:sync
npx cap open android
```

En Android Studio, compila el proyecto para generar el APK. Para GitHub Actions se genera un APK debug, no firmado para publicar en Google Play.

## Iconos

Los iconos se generaron a partir del logo del chip de `index.html`. Para cambiarlos: reemplaza `build/icon.ico` (Windows) y los PNG de `resources/` (Android, 1024×1024; se convierten con `npm run android:icons` tras `npm run android:init`).
