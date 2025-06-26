# SGAT - Sistema de Gestión Aduanera Terrestre

Proyecto de maqueta funcional desarrollado como parte del módulo de Ingeniería de Software - Duoc UC, 5° semestre.

---

## 📌 Descripción del Proyecto

SGAT es una solución web que digitaliza y centraliza los trámites aduaneros terrestres, enfocado en mejorar los tiempos de espera y la calidad del servicio en pasos fronterizos como Los Libertadores.

---

## 🎯 Objetivos

- Reducir los tiempos de espera mediante digitalización.
- Centralizar la gestión documental (vehículos, menores, productos).
- Facilitar el cumplimiento normativo con validaciones automáticas.
- Disminuir errores humanos mediante interfaces intuitivas.
- Mejorar la experiencia del usuario.

---

## 🧰 Tecnologías utilizadas

- HTML5 + CSS3 (Dark Mode con colores institucionales)
- JavaScript Vanilla (validaciones, modularidad)
- Git + GitHub (control de versiones)
- Estructura de componentes reutilizables

---

## 📁 Estructura del Proyecto

```markdown
sgat-maqueta
│   .gitignore
│   index.html
│
├───assets
│   └───images
├───components
│       footer.html
│       navbar.html
│
├───css
│       styles.css
│
├───js
│       main.js
│
└───views
        acceso-restringido.html
        autorizacion-menor.html
        consulta-estado.html
        declaracion-productos.html
        login.html
        reportes.html
        tramite-vehiculo.html

```

## ✅ Funcionalidades implementadas

- Registro y validación de formularios (vehículos, menores, SAG)
- Validación de RUT chileno
- Navegación entre vistas mediante componentes
- Simulación de consulta de estado y reportes
- Control de acceso visual a vistas restringidas

---

## ⚙️ Instrucciones para usar localmente

1. Clona el repositorio:
git clone https://github.com/HansRamirez/SGAT-maqueta.git

2. Abre con VS Code

3. Usa la extensión **Live Server** para visualizar correctamente los componentes con `fetch()`.

---

## 🗂 Versión actual

**Versión 1.0**  
- Todas las vistas implementadas
- Validaciones JS funcionales
- Diseño dark-mode terminado
- Control de acceso simulado
- Proyecto versionado correctamente

---
**Versión 1.0 (intermedia)**  
- Se ha presentado dificultades en repositorio local
- Se crea nuevo perfil de usuario en SO
- Se conecta el repositorio y realiza validación
_Conectado correctamente desde nuevo perfil de Windows._


## 📝 Plan de Pruebas ISO/IEC 25000
Acceso al registro del plan de pruebas alojado en repositorio externo Google Drive | Google Sheets

📎 [Plan de Pruebas en Sheets](https://docs.google.com/spreadsheets/d/1FReYiRz87yKdGdVPoR7gaAuCkdCd3s3gJHrAsmrejxg/edit?usp=sharing)

---

## ✍️ Autor

Hans Ramírez  
`hans.ramirez@duocuc.cl`  
GitHub: [@HansRamirez](https://github.com/HansRamirez)


