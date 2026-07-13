# CLAUDE.md — Explorador de Playas UY

> Entrada operativa. La verdad completa del proyecto vive en `biblia.md` — leela entera antes de codear.
> Este archivo NO repite la biblia: solo dice cómo trabajar y dónde quedamos.

---

## REGLA DE ORO

Todo cambio de arquitectura, feature, endpoint, modelo de datos o decisión técnica
debe quedar reflejado en `biblia.md` en la misma sesión en que se implementa. El
estado de avance se actualiza acá abajo.

Al iniciar una sesión sobre este repo:
1. Leer `biblia.md` completo — es la fuente de verdad.
2. Leer el ESTADO ACTUAL más abajo — es dónde quedamos.
3. Seguir desde el "próximo paso". No reescribir lo que ya funciona.

---

## ESTADO ACTUAL

> Fuente única del avance. No duplicar en biblia.md.

- **Fase activa:** 1 — Consolidación y deploy
- **Etapa activa:** 1.1 — Calidad de base
- **Último paso completado:** documentación de arquitectura (README + biblia.md + CLAUDE.md) generada con `berserk-arquitect`.
- **Próximo paso:** dejar `npm run lint` y `npm run build` en verde y fijarlos como gate antes de seguir.
- **Último archivo tocado:** `CLAUDE.md`
- **Notas de sesión:** FASE 0 (MVP explorador) ya estaba implementada en el código al momento de documentar. Roadmap completo definido (Fases 1–6); prioridad del usuario: avanzar las cuatro líneas (consolidación, buscador, condiciones/backend, favoritos) en el orden de fases de la biblia.

---

## PROTOCOLO DE RETOMA (corte de contexto)

Si estás por quedarte sin contexto o cortás la sesión:
1. Actualizá el bloque ESTADO ACTUAL: último paso completado, próximo paso exacto, último archivo tocado.
2. Si tomaste decisiones que cambian la verdad del proyecto, llevalas a `biblia.md`.
3. Commit: `WIP: {dónde quedó}`.

Al retomar: leer ESTADO ACTUAL antes que nada y continuar desde el próximo paso.

---

## CÓMO TRABAJAR

- Tomar de a **una etapa** por sesión. No mezclar etapas.
- Trabajar en bloques chicos y auditables. Validar antes de seguir.
- **Comandos:**
  - `npm install` — instalar dependencias.
  - `npm run dev` — servidor de desarrollo (Vite).
  - `npm run build` — typecheck (`tsc -b`) + bundle. Debe quedar verde antes de cerrar una etapa.
  - `npm run lint` — ESLint. Debe quedar verde antes de cerrar una etapa.
  - `npm run preview` — previsualizar el build.
- **Datos:** las playas se editan SOLO en `src/data/beaches.ts`, cada una en el array
  de su departamento (respetar INV-1..INV-4 de la biblia).
- **Deploy:** Vercel, con `main` como Production. Un cambio no está "en producción"
  hasta estar en `origin/main` y Ready en el dashboard de Vercel (no Preview).
- **Guardia de frescura:** antes de ejecutar, mandar, entregar o cerrar cualquier
  acción sobre un artefacto **derivado** de `biblia.md` (brief, módulo, export, docx),
  leé su línea de sello (`Sincronizado con biblia.md hasta: AAAA-MM-DD — última
  entrada: <ref>`) y escaneá FASES Y ETAPAS (STEPS) / BUGS / MEJORAS TÉCNICAS de la biblia por entradas
  con **fecha posterior** al sello. Si hay algo más nuevo que toca su alcance →
  reconciliá primero (regenerá/parchá) y avisá qué lo desactualizaba; recién después
  procedé, y actualizá el sello.

---

## QUÉ NO HACER NUNCA

- No duplicar contenido entre este archivo y `biblia.md` (estado acá; verdad allá).
- No hardcodear credenciales ni secretos (INV-5).
- No romper la persistencia de filtros en la URL (INV-2).
- No agregar valores fuera de los enums cerrados sin tocar tipo + filtros + labels (INV-3).
- No declarar algo "deployado" o "en producción" si no está en `origin/main`.
