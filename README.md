# Laboratorio 8 – QuickBite QA

## Inicio sin instalaciones locales
1. Haz **Fork** de este repositorio en GitHub.
2. En tu fork: **Code → Codespaces → Create codespace on main**.
3. Espera a que termine la configuración automática. Necesitas una cuenta GitHub con acceso y cuota de Codespaces.
4. En la terminal integrada ejecuta `npx playwright test`.
5. Para ver la aplicación ejecuta `npm start` y abre el puerto 3000 desde la pestaña **Ports**. Detén el servidor con Ctrl+C antes de ejecutar pruebas si fuera necesario.
6. Revisa el reporte: `npx playwright show-report --host 0.0.0.0` y abre el puerto indicado en **Ports**.
7. Para investigar trazas, usa el reporte HTML y selecciona **Trace** en una prueba ejecutada.

## Retos
- `tests/01-ejemplos.spec.js`: 2 pruebas resueltas.
- `tests/02-guiados.spec.js`: 4 pruebas con TODO. Quita `.skip` y escribe las acciones y verificaciones.
- `tests/03-autonomos.spec.js`: 2 pruebas sin solución. Una debe fallar por un defecto intencional.

## Evidencia de entrega
Capturas de resultados reales, análisis de al menos una falla, código completado y vínculo al fork. Relaciona 3 casos de prueba del Laboratorio 7 con posibilidades de automatización en tu proyecto original. No presentes resultados simulados como reales.

**Nota:** El entorno de práctica no sustituye al proyecto del semestre. Los recursos de Codespaces pueden tener límites o cargos según el plan y la configuración de la cuenta.
