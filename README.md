# ScienceOnChain - Ciencia Descentralizada

Este proyecto es un sitio web multilingüe para ScienceOnChain, una organización que busca proporcionar información sobre ciencia descentralizada a científicos.

## Características

- Sitio web multilingüe (español e inglés)
- Diseño moderno con tonos ecológicos
- Elementos de UI tipo Bento
- Efectos de glassmorphism
- Construido con Astro y Tailwind CSS

## Estructura

```
scienceonchain/
├── public/              # Recursos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── i18n/            # Configuración multilingüe
│   ├── layouts/         # Plantillas de diseño
│   ├── pages/           # Rutas y páginas
│   │   ├── en/          # Contenido en inglés
│   │   └── es/          # Contenido en español
│   └── styles/          # Estilos CSS globales
└── package.json         # Dependencias y scripts
```

## Empezando

1. Instalar dependencias:
```
pnpm install
```

2. Ejecutar en modo desarrollo:
```
pnpm dev
```

3. Construir para producción:
```
pnpm build
```

## Idiomas disponibles

- Inglés (predeterminado)
- Español

## Tecnologías utilizadas

- [Astro](https://astro.build/) - Framework de sitios web
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [astro-i18n-aut](https://github.com/jlarmstrongiv/astro-i18n-aut) - Internacionalización para Astro
