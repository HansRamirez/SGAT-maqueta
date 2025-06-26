# 📄 Changelog - SGAT Maqueta

Este documento registra los cambios principales realizados al prototipo funcional del sistema SGAT, en concordancia con las versiones gestionadas a través del repositorio GitHub y siguiendo el flujo de trabajo Git Flow. Cada iteración representa un avance funcional, técnico y visual, enfocado en cumplir los requerimientos definidos y su validación en el plan de pruebas.

---

## 📌 v1.1.1 - [Refactor Final y Entrega Documental]

**Fecha:** 2024-06-02  
**Tipo de versión:** Hotfix + Mejora visual  
**Estado:** ✅ Entregado

### 🔧 Cambios técnicos

- 🛠 Corrección final en la validación de RUT para todos los formularios (detección de formato y dígito verificador).
- 🧪 Consolidación de lógica en `main.js` y validación cruzada para todos los formularios.
- 🗂️ Inclusión de texto informativo (`.info`) en cada formulario explicando su propósito funcional.
- 📐 Mejoras visuales menores en `grid`, alineación de inputs, altura uniforme, separación clara de errores.
- 🛑 Arreglo de error que rompía layout al mostrar mensajes de validación.
- 🧾 Inclusión del gráfico GitFlow interactivo con tooltips informativos (`gitflow-diagrama.html`).
- 🎤 Presentación dinámica `presentacion.html` con navegación, transición y efecto visual final.

### 🔗 Enlaces relevantes

- ✅ [Plan de pruebas - versión 1.1.1 (Google Sheets)](https://docs.google.com/spreadsheets/d/1FReYiRz87yKdGdVPoR7gaAuCkdCd3s3gJHrAsmrejxg/edit?usp=sharing)
- 🔄 [Historial de versiones](https://docs.google.com/spreadsheets/d/15NXnY3ykFs-TE9XucyurfLrAmB2EXXO8lzf9On7L_U8/edit?usp=sharing)
- 📘 [Informe IEEE830](https://docs.google.com/document/d/14X3EB6D4ZKo4rY68AFtDEAwkY3fR6y0D/edit?usp=sharing)

---

## 🔖 v1.1.0 - [Entrega Final Prototipo Funcional]

**Fecha:** 2024-06-01  
**Tipo de versión:** Release estable  
**Estado:** ✅ Completado

### ✨ Cambios principales

- ✅ Reestructuración visual de formularios a diseño horizontal con `grid`.
- 🧮 Implementación consolidada del validador completo de RUT.
- 🪧 Corrección de `placeholders` y ayudas visuales según RNF7 e IU1.
- 📋 Etiquetas `form` con `submit` interceptado vía JavaScript.
- 🧾 Inserción de mensajes visuales inmediatos al procesar formularios.
- ℹ️ Agregados mensajes explicativos (`<p class="info">`) en cada vista.
- 🧠 Actualización del `main.js` para centralizar la validación.
- 🧪 Plan de pruebas ajustado a resultados reales de validación y presentación.

---

## 🚀 v1.0.0 - [Versión inicial funcional]

**Fecha:** 2024-05-29  
**Tipo de versión:** Versión base  
**Estado:** 🧪 En revisión

### ✅ Elementos incluidos

- 🔐 Login funcional con validación de email.
- 🧒 Formulario de autorización notarial para menores.
- 🚗 Trámite de salida de vehículo.
- 🌿 Declaración de productos SAG.
- 📊 Reportes básicos.
- 🔍 Consulta de estado de trámite.
- 🛑 Vista acceso restringido.
- 🧭 Carga dinámica de navegación/footer.
- 🌙 Modo oscuro y diseño institucional.
- ✅ Primera ejecución del plan de pruebas.

### ⚠️ Limitaciones detectadas

- ❌ Validación incompleta del RUT.
- ❌ Layout vertical poco aprovechado.
- ❌ `Placeholder` no alineado con la validación real.
- ❌ Mensajes que desarmaban el layout.
- ❌ Falta de respuesta clara al enviar formularios.

---

## 📘 Notas finales

Este changelog sigue el modelo `keep a changelog` adaptado al flujo `GitFlow`. Toda nueva versión reflejará tanto cambios técnicos como impactos en el diseño o flujo de usuario.

---
