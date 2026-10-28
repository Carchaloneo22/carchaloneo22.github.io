# Portafolio de Carlos Chaparro López

Sitio personal hecho con [Astro](https://astro.build): responsivo, con tema claro y oscuro, y pensado para ser accesible.

## Empezar

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # sirve /dist
```

## Dónde editar

| Qué cambiar | Archivo |
| --- | --- |
| Nombre, presentación, correo, enlaces, proyectos, trayectoria, formación, habilidades | `src/data/profile.ts` |
| Capturas de los proyectos | `src/assets/projects/` (se importan en `profile.ts`) |
| Foto | `src/assets/carlos.png` |
| Colores y tipografía | `src/styles/global.css` |

Para añadir un proyecto, copia un objeto del arreglo `projects` y cambia sus datos. Si tiene capturas, ponlas en
`src/assets/projects/`, impórtalas arriba del archivo y agrégalas en `shots`. Con `featured: true` la tarjeta ocupa
dos columnas.

## Animaciones

- Entrada del nombre y la foto al cargar la página.
- **Zoom de proyectos**: al hacer clic en una tarjeta, el tablero se acerca hacia ella y el detalle crece desde la
  tarjeta (técnica FLIP con la Web Animations API). Al cerrar, regresa a la tarjeta.
- **Lupa**: dentro del detalle, un clic sobre la captura la amplía 2,2× en el punto exacto; con el mouse se recorre.
- Filtros con View Transitions (las tarjetas se reacomodan con movimiento).
- Línea de la trayectoria que se dibuja con el scroll (scroll-driven animations, donde el navegador lo soporte).

Todas se desactivan si la persona tiene activada la preferencia de reducir movimiento.

## Accesibilidad

- Enlace para saltar al contenido, landmarks y jerarquía de títulos.
- Detalle de proyectos en un `<dialog>` modal: atrapa el foco, cierra con Esc o clic fuera, y devuelve el foco a la
  tarjeta. Flechas izquierda y derecha para pasar de proyecto.
- Botones con `aria-pressed` / `aria-expanded`, anuncios con `aria-live` al filtrar y al copiar el correo.
- Foco visible, objetivos táctiles de 44 px, contraste AA en ambos temas y soporte de modo de alto contraste.
- Tipografía Atkinson Hyperlegible para el texto, diseñada para baja visión.

## Publicar en GitHub Pages

El sitio está configurado para `https://carchaloneo22.github.io`.

1. En GitHub crea un repositorio público llamado exactamente `Carchaloneo22.github.io`.
2. Sube este proyecto a la rama `main` (sin `node_modules` ni `dist`).
3. En *Settings → Pages → Build and deployment*, elige **GitHub Actions** como fuente.
4. El flujo `.github/workflows/deploy.yml` compila y publica en cada push. Revisa el avance en la pestaña *Actions*.

Si el repositorio tiene otro nombre (por ejemplo `portafolio`), agrega `base: '/portafolio'` en `astro.config.mjs`
y la dirección será `https://carchaloneo22.github.io/portafolio/`. Para un dominio propio, cambia `site`.

## Datos personales

El sitio no publica cédula, dirección, fecha de nacimiento, teléfono ni los datos de las referencias de la hoja de
vida. Si quieres un botón de WhatsApp, agrégalo en `src/components/Contact.astro`.
