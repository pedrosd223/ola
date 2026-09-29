# Guía rápida para explicar la Semana 05

## 1. Transitions
Pregunta al estudiante: ¿qué pasa si quitamos `transition`?
Idea: el navegador sigue cambiando el estado, pero el cambio deja de interpolarse suavemente.

Puntos:
- property: qué propiedad cambia.
- duration: cuánto dura.
- timing-function: cómo varía la velocidad.
- delay: espera antes de empezar.

## 2. @keyframes
Explicar la diferencia:
- transition = normalmente A → B y necesita un cambio de estado.
- @keyframes = varios puntos de una línea de tiempo y puede repetirse con `infinite`.

## 3. Estados
- `:hover`: puntero encima.
- `:focus-visible`: foco visible, especialmente útil con teclado.
- `:active`: mientras se presiona.
No eliminar el foco sin reemplazarlo por otro indicador visible.

## 4. Loaders
Relacionar cada loader con su mensaje:
- spinner: espera corta.
- puntos: actividad tipo "escribiendo".
- skeleton: se conoce la estructura del contenido.

## 5. Botón de carga
Secuencia:
reposo → `.cargando` → espera → `.listo`.

Idea clave: JavaScript cambia la clase; CSS decide cómo se ve y cómo se anima.

## 6. SVG Check
`stroke-dasharray` y `stroke-dashoffset` permiten ocultar el trazo y después revelarlo mediante `@keyframes`.

## 7. Rendimiento
Comparar `left` con `transform`.
Para animaciones frecuentes, priorizar `transform` y `opacity`.
`will-change` debe utilizarse con medida.

## 8. Proyecto
La tarjeta integra:
1. transición de tarjeta;
2. hover;
3. hover/active/focus-visible del botón;
4. spinner;
5. reduced motion;
6. JavaScript: cargando → añadido + check.
