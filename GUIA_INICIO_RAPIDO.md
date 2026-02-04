# 🚀 DARte - Guía de Inicio Rápido

## Comienza a Usar la Landing Page

### 1️⃣ Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Abre tu navegador en: **http://localhost:5174**

### 2️⃣ Ver la Landing Page en Acción

La página está lista para explorar con:
- Navegación sticky con logo real
- 10 secciones completas
- Smooth scroll interactivo
- Botón WhatsApp flotante
- Animaciones suaves en scroll

### 3️⃣ Estructuras Principales

#### Header
- Logo de DARte (imagen real)
- Navegación a 7 secciones
- Menú móvil responsive
- Sticky en la parte superior

#### Las 10 Secciones

1. **Hero** - Impactante mensaje principal
2. **Sobre DARte** - Explicación de la misión
3. **Fundación Miika** - Información del apoyo
4. **Estadísticas** - Datos de impacto en México
5. **¿Por Qué Visitar?** - Beneficios del museo
6. **¿Por Qué Donar?** - Mitos vs Realidades
7. **Testimonios** - 6 historias inspiradoras
8. **¿Cómo Ayudar?** - 4 formas de contribuir
9. **FAQ** - Preguntas frecuentes
10. **Contacto** - Formulario y ubicación

### 4️⃣ Personalización Rápida

#### Cambiar Teléfono/Email
```
Header.jsx (línea ~17)
Footer.jsx (línea ~56-57)
ContactAndMap.jsx (línea ~73-74)
```

#### Cambiar Horarios
```
ContactAndMap.jsx (línea ~38-40)
```

#### Actualizar Textos
Todos los textos están en los componentes, busca y reemplaza directamente.

### 5️⃣ Build para Producción

```bash
npm run build
```

Genera carpeta `dist/` lista para Vercel o cualquier hosting.

### 6️⃣ Características Destacadas

- ✅ **Tipografía Distintiva**: Playfair Display + Poppins
- ✅ **Colores Exactos**: Verde, Amarillo, Rojo, Azul (conforme a marca)
- ✅ **Animaciones**: Scroll, entrada, hover - todas suaves
- ✅ **Responsive**: Mobile-first, funciona en todos los dispositivos
- ✅ **WhatsApp**: Botón flotante con mensaje pre-llenado
- ✅ **Logos Reales**: DARte y Fundación Miika incorporados
- ✅ **SEO**: Meta tags optimizados

### 7️⃣ Archivos Importantes

- `src/App.jsx` - Estructura principal
- `src/components/` - Todos los componentes
- `public/images/` - Logos (DARte.jpg, fundacion Miika.png)
- `tailwind.config.js` - Configuración de colores
- `index.html` - Meta tags y Google Fonts

### 8️⃣ Próximos Pasos

1. **Conectar Backend**
   - API para formulario de contacto
   - Sistema de registro de donantes
   - Sistema de donaciones

2. **Integración WhatsApp**
   - Automatizar respuestas
   - Chatbot para preguntas frecuentes

3. **Analytics**
   - Google Analytics
   - Tracking de conversiones

4. **SEO Avanzado**
   - Sitemap
   - Robots.txt
   - Schema markup

### 9️⃣ Comandos Disponibles

```bash
npm run dev          # Desarrollo local
npm run build        # Build de producción
npm run preview      # Ver build antes de publicar
npm run lint         # Verificar código
```

### 🔟 Deploying a Vercel (Recomendado)

1. Crear repositorio en GitHub
2. Conectar a Vercel
3. Vercel detecta automáticamente Vite
4. Cada push a main = deploy automático

```bash
# Setup inicial
git init
git add .
git commit -m "DARte Landing Page"
git remote add origin https://github.com/tu-usuario/DARte.git
git push -u origin main
```

Luego en Vercel:
1. Conectar GitHub
2. Seleccionar repo DARte
3. Click "Deploy"
4. ¡Listo!

---

## 💡 Tips Útiles

- **Smooth Scroll**: Automático entre secciones con #ids
- **Mobile**: Prueba en DevTools (F12) modo móvil
- **Rendimiento**: Build es muy ligero (111KB JS gzip)
- **Textos**: Todos en español, listos para producción
- **Colores**: Código hex exacto en componentes para fácil edición

---

## 📞 Información del Museo

- **Ubicación**: Angela Peralta 35, Col. Periodista, Hermosillo, Sonora
- **Email**: info@darte.mx (actualizar en componentes)
- **Teléfono**: +52 (662) 123-4567 (actualizar en componentes)
- **Horarios**: Lun-Vie 9am-6pm, Sábados 10am-4pm

---

## 🎨 Paleta de Colores (para referencia)

```
Verde Principal:   #3F8A4B
Amarillo Acento:   #EECA44
Rojo Énfasis:      #CF423B
Azul Texto:        #5F5FA2
```

---

**¡Tu landing page DARte está lista! Inspira, educa y transforma vidas.** 💚

**Donando Esperanzas**
