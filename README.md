# Portfolio

Sitio estático con [Astro](https://astro.build). Todo el contenido vive en archivos Markdown; no hace falta tocar componentes para agregar proyectos.

## Comandos

```bash
npm run dev      # servidor local en http://localhost:4321 (muestra también los borradores)
npm run build    # genera el sitio final en /dist (los borradores NO se publican)
npm run preview  # previsualiza el build final
```

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Nombre, email, frase del hero, links, CV, certificaciones, herramientas | `src/data/site.ts` |
| Case studies UX/UI | `src/content/work/*.md` |
| Foto, video, cómic, ilustración, multimedia | `src/content/creative/*.md` |
| Imágenes de proyectos | `src/assets/work/<proyecto>/` y `src/assets/creative/<proyecto>/` |
| Archivos públicos (CV, videos propios, subtítulos, imagen social) | `public/` |
| Colores, tipografía, espaciado | `src/styles/global.css` (variables al inicio) |

## Agregar un proyecto

1. Copia la plantilla que corresponda (`template-case-study.md`, `template-photo-series.md`, `template-video.md`, `template-comic.md`).
2. Renómbrala: el nombre del archivo es la URL (`mi-proyecto.md` → `/work/mi-proyecto/`).
3. Pon las imágenes en `src/assets/...` y enlázalas con rutas relativas. Se optimizan solas (tamaños y formatos).
4. Elige `category`: `professional`, `academic`, `personal` o `experimental`.
5. Quita `draft: true` cuando esté lista para publicarse.

- `featured: true` hace que aparezca en la Home; `order` define el orden (menor = primero).
- En los case studies, cada `##` se convierte en una sección numerada automáticamente.
- Cada imagen necesita `alt` (descripción para lectores de pantalla).
