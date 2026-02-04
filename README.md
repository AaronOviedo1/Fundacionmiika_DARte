# DARte - Museo de la Donación de Órganos

## 🌿 Acerca de DARte

DARte es un sitio web moderno para el único museo en el mundo dedicado específicamente a la educación sobre donación de órganos. Ubicado en Hermosillo, Sonora, México, es un proyecto de la Fundación Miika con el lema "Donando Esperanzas".

### Características Principales

- 🏥 **Educación sobre Donación**: Información completa sobre el proceso de donación y trasplante
- 🎨 **Exhibiciones Interactivas**: Múltiples perspectivas: anatomía, historias de vida, ciencia y arte
- 📚 **Programas Educativos**: Diseñados para estudiantes, profesionales y comunidad
- 💚 **Diseño Inspirador**: Paleta de colores que refleja esperanza y vida
- 📱 **Totalmente Responsivo**: Funciona perfecto en todos los dispositivos
- ⚡ **Alto Rendimiento**: Construido con Vite y optimizado para velocidad

## 🛠️ Stack Tecnológico

- **React 19** - Librería de interfaz de usuario
- **Vite** - Herramienta de construcción ultrarrápida
- **Tailwind CSS** - Framework de estilos utilitarios
- **Framer Motion** - Animaciones suaves y profesionales
- **Lucide React** - Iconos consistentes y modernos
- **Vercel** - Plataforma de hosting y deployment

## 📋 Requisitos Previos

- Node.js 16+ instalado
- npm o yarn como gestor de paquetes

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd DARte
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### 4. Construir para Producción

```bash
npm run build
```

Esto generará una carpeta `dist` optimizada para producción.

### 5. Previsualizacion de Producción

```bash
npm run preview
```

## 🎨 Paleta de Colores DARte

Los colores exactos se encuentran en `tailwind.config.js`:

- **Verde DARte**: `#3F8A4B` (Vida, Esperanza)
- **Amarillo DARte**: `#EECA44` (Energía, CTAs)
- **Rojo/Naranja DARte**: `#CF423B` (Énfasis, Corazón)
- **Azul DARte**: `#5F5FA2` (Textos, Confianza)

## 📁 Estructura del Proyecto

```
DARte/
├── public/
│   └── images/          # Logos y imágenes del museo
├── src/
│   ├── components/      # Componentes React reutilizables
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Exhibitions.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Componente principal
│   ├── index.css        # Estilos globales con Tailwind
│   └── main.jsx         # Punto de entrada
├── tailwind.config.js   # Configuración de Tailwind
├── postcss.config.js    # Configuración de PostCSS
├── vercel.json          # Configuración de Vercel
├── vite.config.js       # Configuración de Vite
└── package.json         # Dependencias del proyecto
```

## 🌐 Despliegue en Vercel

### Opción 1: Conectar Repositorio Git

1. Ir a [vercel.com](https://vercel.com)
2. Hacer clic en "New Project"
3. Conectar tu repositorio de GitHub/GitLab/Bitbucket
4. Vercel detectará automáticamente que es un proyecto Vite
5. Hacer clic en "Deploy"

### Opción 2: Deploy Manual

```bash
npm i -g vercel
vercel
```

Seguir las instrucciones interactivas de Vercel.

## 📝 Componentes Principales

### Header
- Navegación responsiva con menú móvil
- Logo de DARte con icono de corazón
- Botón CTA "Donar Ahora"

### Hero
- Sección de bienvenida con gradiente
- Estadísticas destacadas
- CTAs principales

### About
- Información sobre DARte
- Detalles de Fundación Miika
- Características en cuadrícula

### Exhibitions
- 4 exhibiciones principales
- Tarjetas interactivas con hover
- CTA para visitar el museo

### Education
- Programas educativos para diferentes audiencias
- Métricas de impacto
- Información sobre alcance

### Contact
- Información de contacto completa
- Formulario de contacto funcional (estructura lista)
- Información sobre horarios y ubicación

### Footer
- Enlaces rápidos
- Información de contacto
- Copyright

## 🎨 Personalizacion

### Cambiar Colores

Editar `tailwind.config.js`:

```javascript
colors: {
  'darte-verde': '#3F8A4B',
  'darte-amarillo': '#EECA44',
  'darte-rojo': '#CF423B',
  'darte-azul': '#5F5FA2',
}
```

### Agregar Logos

1. Colocar logos en `/public/images/`
2. Importar en componentes:

```jsx
<img src="/images/logo.svg" alt="DARte Logo" />
```

### Modificar Contenido

Todo el contenido de texto se encuentra en los componentes individuales para fácil edición.

## 📞 Información de Contacto

**DARte - Museo de la Donación de Órganos**

- 📍 Angela Peralta 35, Col. Periodista, Hermosillo, Sonora
- 📱 +52 (662) 123-4567
- 📧 info@darte.mx
- 🌐 www.darte.mx

## 🤝 Contribuir

Para reportar bugs o sugerir mejoras:

1. Abrir un issue en el repositorio
2. Proporcionar descripción detallada
3. Incluir pasos para reproducir (si es applicable)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver LICENSE para más detalles.

## 💝 Agradecimientos

Proyecto desarrollado para DARte y Fundación Miika, organizaciones dedicadas a salvar vidas a través de la educación sobre donación de órganos.

**Donando Esperanzas** 💚

---

## 🔗 Enlaces Útiles

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [Documentación de Tailwind CSS](https://tailwindcss.com)
- [Documentación de Framer Motion](https://www.framer.com/motion)
- [Documentación de Vercel](https://vercel.com/docs)

## 📋 Próximas Mejoras

- [ ] Integración con CMS para gestión de contenido
- [ ] Sistema de reserva de visitas
- [ ] Blog con artículos educativos
- [ ] Galería de fotos del museo
- [ ] Video tours virtuales
- [ ] Integración con redes sociales
- [ ] Boletín informativo por email
- [ ] Sistema de donaciones online
