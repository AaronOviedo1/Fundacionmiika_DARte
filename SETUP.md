# Guía de Configuración Completa - DARte

## ✅ Lo que se ha completado

### 1. **Estructura del Proyecto React**
- ✅ Proyecto React 19 con Vite (ultrarrápido)
- ✅ Tailwind CSS 4 configurado con colores personalizados
- ✅ Framer Motion para animaciones suaves
- ✅ Lucide React para iconos profesionales
- ✅ Configuración de Vercel lista para deploy

### 2. **Componentes Principales Implementados**
- ✅ **Header**: Navegación responsiva con menú móvil
- ✅ **Hero**: Sección de bienvenida inspiradora
- ✅ **About**: Información sobre DARte y Fundación Miika
- ✅ **Exhibitions**: 4 exhibiciones principales
- ✅ **Education**: Programas educativos para diferentes audiencias
- ✅ **Contact**: Formulario de contacto y ubicación
- ✅ **Footer**: Enlaces y información adicional

### 3. **Configuración de Diseño**
- ✅ Paleta de colores exacta implementada:
  - Verde DARte: #3F8A4B (Vida, Esperanza)
  - Amarillo DARte: #EECA44 (Energía, CTAs)
  - Rojo/Naranja DARte: #CF423B (Énfasis, Corazón)
  - Azul DARte: #5F5FA2 (Textos, Confianza)
- ✅ Animaciones con Framer Motion en todos los componentes
- ✅ Diseño totalmente responsivo
- ✅ Botones personalizados (primary, secondary, outline)

### 4. **Optimización y Deployment**
- ✅ Build optimizado para producción
- ✅ Archivo `vercel.json` configurado
- ✅ `.gitignore` actualizado
- ✅ Documentación completa en README.md

## 🎯 Próximos Pasos Recomendados

### Fase 1: Personalización Básica (Corto Plazo)

#### 1. Agregar Logos Oficiales
```bash
# Copiar logos a la carpeta public/images
cp /ruta/a/logo-darte.svg public/images/
cp /ruta/a/logo-miika.svg public/images/
```

Luego actualizar el componente Header:
```jsx
// En src/components/Header.jsx
import logo from '/images/logo-darte.svg'

// Reemplazar el icono de corazón con:
<img src={logo} alt="DARte" className="w-10 h-10" />
```

#### 2. Actualizar Información de Contacto
Editar en `src/components/Contact.jsx`:
- Teléfono: Actualizar "+52 (662) 123-4567"
- Email: Cambiar "info@darte.mx"
- Horarios: Ajustar según horarios reales del museo

#### 3. Personalizar Exhibiciones
En `src/components/Exhibitions.jsx`:
```javascript
const exhibitions = [
  {
    id: 1,
    title: 'Titulo Real de Exhibición',
    description: 'Descripción detallada',
    // ... más detalles
  },
  // Agregar más exhibiciones según sea necesario
]
```

#### 4. Actualizar Programas Educativos
En `src/components/Education.jsx`:
- Modificar nombres de programas
- Actualizar descripciones
- Cambiar números de impacto con datos reales

### Fase 2: Integración de Backend (Mediano Plazo)

#### 1. Configurar Formulario de Contacto Funcional
Reemplazar el formulario en `src/components/Contact.jsx` con:
```jsx
// Opción 1: EmailJS
import emailjs from '@emailjs/browser'

// Opción 2: API personalizada
const handleSubmit = async (e) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
}
```

#### 2. Implementar Sistema de Reservas
- Crear página de reservas
- Integrar con base de datos de disponibilidad
- Enviar confirmaciones por email

#### 3. Backend Sugerido
- **Node.js + Express** para API
- **MongoDB** o **PostgreSQL** para base de datos
- **Nodemailer** para envío de emails

### Fase 3: Contenido Multimedia (Largo Plazo)

#### 1. Galería de Fotos
```jsx
// Crear src/components/Gallery.jsx
import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  // Implementar galería con lightbox
}
```

#### 2. Video Tour Virtual
- Integrar videos del museo
- YouTube embed o video.js

#### 3. Blog/Noticias
- Crear sistema de blog
- Artículos educativos sobre donación
- Historias inspiradoras

### Fase 4: SEO y Marketing (Continuo)

#### 1. Optimización SEO
```jsx
// En App.jsx o crear un componente Helmet
import { Helmet } from 'react-helmet-async'

<Helmet>
  <title>DARte - Museo de Donación de Órganos en Hermosillo</title>
  <meta name="description" content="..." />
  <meta name="keywords" content="donación, órganos, museo, Hermosillo" />
</Helmet>
```

#### 2. Analytics
```jsx
// Agregar Google Analytics
npm install react-ga4

import ReactGA from 'react-ga4'
ReactGA.initialize('GA_MEASUREMENT_ID')
```

#### 3. Redes Sociales
- Agregar iconos de redes sociales en Footer
- Meta tags para compartir en redes
- Feed de Instagram integrado

## 📦 Instalación de Dependencias Adicionales Recomendadas

### Para Futuras Características
```bash
# SEO y Meta tags
npm install react-helmet-async

# Analytics
npm install react-ga4

# Formularios avanzados
npm install react-hook-form zod

# Mapas
npm install leaflet react-leaflet

# Envío de emails
npm install @emailjs/browser

# Galería de fotos
npm install yet-another-react-lightbox
```

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Producción
npm run build            # Construye para producción
npm run preview          # Visualiza la versión producción

# Calidad de código
npm run lint             # Ejecuta linter

# Vercel
npm install -g vercel
vercel                   # Deploy directo a Vercel
vercel --prod           # Deploy a producción
```

## 🔗 Deploy en Vercel - Paso a Paso

1. **Crear repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DARte React project"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/DARte.git
   git push -u origin main
   ```

2. **Ir a vercel.com**
   - Hacer clic en "New Project"
   - Conectar GitHub
   - Seleccionar repositorio DARte
   - Vercel detectará automáticamente Vite
   - Hacer clic en "Deploy"

3. **Configurar dominio personalizado**
   - En Vercel: Settings → Domains
   - Agregar dominio personalizado
   - Seguir instrucciones de DNS

## 📊 Estructura de Carpetas Final

```
DARte/
├── public/
│   └── images/              # Logos y fotos
│       ├── logo-darte.svg
│       ├── logo-miika.svg
│       └── museo-*.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Exhibitions.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx       # [PRÓXIMO]
│   │   ├── Blog.jsx          # [PRÓXIMO]
│   │   └── Footer.jsx
│   ├── pages/                # [FUTURO]
│   │   ├── ReservationPage.jsx
│   │   └── BlogPage.jsx
│   ├── hooks/                # [FUTURO]
│   │   └── useContact.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── dist/                     # Build output
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── vite.config.js
├── package.json
├── README.md
└── SETUP.md (este archivo)
```

## 🎨 Referencia de Colores

Para usar en componentes nuevos, usar directamente los hex:
```jsx
// Verde: #3F8A4B
// Amarillo: #EECA44
// Rojo: #CF423B
// Azul: #5F5FA2

// O con Tailwind:
className="bg-[#3F8A4B] text-[#5F5FA2]"
```

## 📞 Información de Contacto del Museo

- **Nombre**: DARte - Espacio educativo para la donación y la cultura
- **Ubicación**: Angela Peralta 35, Col. Periodista, Hermosillo, Sonora
- **Email**: info@darte.mx
- **Teléfono**: +52 (662) 123-4567
- **Sitio Web Actual**: fundacionmiika.org (será reemplazado por este)

## ✨ Notas Finales

- Este proyecto está completamente funcional y listo para personalizar
- Todos los componentes usan las animaciones de Framer Motion
- El diseño es 100% responsivo (móvil, tablet, desktop)
- La paleta de colores exacta de DARte está implementada
- El código está optimizado para rendimiento
- Está listo para ser desplegado en Vercel

## 🤝 Soporte

Para preguntas o ayuda con la personalización:
- Revisar la documentación en README.md
- Consultar documentación oficial de las librerías utilizadas
- Contactar al equipo de desarrollo

**¡DARte está listo para transformar vidas! Donando Esperanzas 💚**
