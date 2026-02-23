# 🌦️ El Tiempo en Scadrial

Aplicación web de clima temática inspirada en el mundo de Mistborn de Brandon Sanderson.

## 📝 Descripción

Esta es una aplicación frontend que muestra el clima de 10 ciudades del Imperio Final, permitiendo ver información detallada y pronósticos semanales. En esta iteración (Módulo 3) se refactorizó la interfaz aplicando SASS, metodología BEM y mejoras visuales consistentes con la temática Mistborn.

## 🎯 Características

- Listado de 10 ciudades con información de clima actual
- Vista de detalle con pronóstico semanal
- Página "Acerca de nosotros"
- Diseño responsive (mobile-first)
- Temática Mistborn (ceniza, niebla, oscuridad)
- Estilos modularizados con SASS

## 🛠️ Tecnologías utilizadas

- HTML5 semántico
- SASS/SCSS con arquitectura modular
- Bootstrap 5.3.8
- JavaScript
- Bootstrap Icons

## 🎨 Metodología de estilos: BEM

Se aplica la metodología **BEM (Block Element Modifier)** para nombrar clases propias:

- **Bloque:** `.weather-card`
- **Elemento:** `.card__icon`
- **Modificador:** aplicado en componentes según estado del clima

Las clases de Bootstrap se usan en paralelo sin reemplazar la nomenclatura BEM.

## 🗂️ Estructura SASS

```
assets/scss/
├── abstracts/
│   ├── _variables.scss   # Colores, tipografías y espaciados
│   └── _mixins.scss      # Mixins reutilizables (flex-center, card-theme, footer-nav)
├── base/
│   ├── _base.scss        # Reset y estilos base (links, box-sizing)
│   └── _body.scss        # Fondo, tipografía general y headings
├── components/
│   ├── _card.scss        # Estilos de weather-card y card__icon
│   ├── _navbar.scss      # Navbar oscuro con borde dorado
│   └── _detalle.scss     # Estilos para la vista de detalle
├── layout/
│   └── _footer.scss      # Footer centrado con navegación
└── main.scss             # Importa todos los parciales
```

## 🎓 Estructura completa del proyecto

```
📄 index.html
├── <nav>             → Navegación principal
├── <main>            → Contenido principal
│   ├── <header>      → Título de la página
│   └── <section>     → Grilla de ciudades
│       └── <article> (×10) → Cada tarjeta
└── <footer>          → Pie de página
    └── <nav>         → Enlaces del footer

📄 detalle.html
├── <nav>             → Navegación principal
├── <main>            → Contenido principal
│   └── <section>     → Detalle completo
│       ├── <article> → Info de la ciudad
│       │   └── <header> → Título "El tiempo en:"
│       └── <aside>   → Pronóstico semanal
│           └── <header> → Título "Pronóstico"
└── <footer>          → Pie de página
    └── <nav>         → Enlaces del footer

📄 acerca.html
├── <nav>             → Navegación principal
├── <main>            → Contenido principal
│   ├── <header>      → Título y descripción
│   ├── <section>     → Misión del proyecto
│   ├── <section>     → Equipo
│   └── <section>     → Contacto
└── <footer>          → Pie de página
```

## 🚀 Cómo usar

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Nyliram1906/weather-frontend-m3.git
   ```

2. **Navegar a la carpeta del proyecto:**
   ```bash
   cd weather-frontend-m3
   ```

3. **Compilar SASS:**
   ```bash
   sass assets/scss/main.scss assets/css/main.css
   ```

4. **Abrir el proyecto:**
   - Opción 1: Abrir `index.html` directamente en tu navegador
   - Opción 2: Usar Live Server en VS Code

**Repositorio público en GitHub:**  
[https://github.com/Nyliram1906/weather-frontend-m3](https://github.com/Nyliram1906/weather-frontend-m3)

## ✅ Objetivos de aprendizaje cumplidos

- ✅ Metodología BEM aplicada en componentes
- ✅ SASS modularizado con variables, mixins, anidamiento y parciales
- ✅ Layout responsivo con Bootstrap 5 (mobile-first)
- ✅ Identidad visual consistente con temática Mistborn
- ✅ Commits descriptivos con Git/GitHub
- ✅ HTML5 semántico (nav, header, main, section, article, aside, footer)

## 👩‍💻 Autor

**Marilyn Villalobos**