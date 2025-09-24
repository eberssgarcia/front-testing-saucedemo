# 🚀 Sauce Demo E2E con Playwright + Cucumber

Automatización end-to-end para la aplicación [Sauce Demo](https://www.saucedemo.com), cubriendo **login**, **manejo de carrito** y **checkout completo**, aplicando el patrón **Page Object Model (POM)** y ejecutando escenarios en **Cucumber y Gherkin**.

---

## 📋 Requisitos previos

- Node.js v22.19.0
- npm
- Git
- VS Code

---

## ⚙️ Instalación del proyecto

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/eberssgarcia/front-testing-saucedemo
   cd sauce-playwright-cucumber
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Instalar navegadores de Playwright (si no se descargaron automáticamente):

   ```bash
   npx playwright install
   ```

4. Configurar variables de entorno:
   ```bash
   cp .env.example .env
   ```

## ▶️ Ejecutar pruebas

- Ejecución por defecto (headless): `npm test`
- Ver el navegador (headed, no headless): `npm run test:headed`
  - Si no esta configurado, ejecutar comando: `npm i -D cross-env`
- Ejecutar escenarios por tag: `npm test -- --tags "@regresion"`

  | features                                 | TAG        |
  | ---------------------------------------- | ---------- |
  | Ejecución de todos los casos de pruebas. | @regresion |
  | Ejecutar casos de pruenas independientes | @tag\*     |

- Al finalizar se genera un reporte en: `reports/cucumber-report.html`

## 📂 Estructura del proyecto

    features/                # Features en Gherkin (español)
    ├── login.feature
    ├── cart.feature
    └── checkout.feature

    src/pages/               # Page Objects (POM)
    ├── LoginPage.ts
    ├── ProductsPage.ts
    ├── CartPage.ts
    ├── CheckoutInfoPage.ts
    ├── CheckoutOverviewPage.ts
    └── CheckoutCompletePage.ts

    src/steps/               # Step Definitions
    src/support/             # World y hooks de Cucumber

    playwright.config.ts     # Configuración de Playwright
    cucumber.js              # Configuración de Cucumber
    tsconfig.json            # Configuración de TypeScript
    .env.example             # Variables de entorno

## 🧩 Escenarios cubiertos

- Login
  - Usuario válido (standard_user).
  - Usuario bloqueado (locked_out_user).
  - Credenciales inválidas.
- Carrito
  - Agregar producto al carrito.
  - Validar que el producto se muestra en el carrito.
- Checkout
  - Completar flujo de compra hasta la confirmación de orden.

## 🏗️ Patrones y estrategia de automatización

- Page Object Model (POM):
  - Cada página (LoginPage, ProductsPage, etc.) encapsula sus selectores y acciones.
  - Facilita mantenimiento y reutilización.
- World + Hooks (Cucumber):
  - BeforeAll/AfterAll: lanza y cierra el navegador una sola vez.
  - Before/After: crea un nuevo contexto y página por escenario → escenarios aislados.
  - Captura screenshots en caso de fallo para depuración.
- Asserts con Playwright expect:
  - Validaciones robustas y consistentes (visibilidad, texto, contadores, etc.).
- Data-driven:
  - Credenciales parametrizadas en los steps.
  - Uso de .env para manejar BASE_URL y HEADLESS.
- Tagging y segmentación:
  - Escenarios etiquetados como @regresion, @tag\*.
  - Permite ejecutar subconjuntos de pruebas según necesidad.

## 📝 Notas

- Aplicación bajo prueba: https://www.saucedemo.com
- Credenciales oficiales para pruebas:
  - Usuario válido: standard_user / secret_sauce
  - Usuario bloqueado: locked_out_user / secret_sauce

## 📖 Informe breve sobre la estrategia

La estrategia de automatización se centra en cubrir el flujo crítico de negocio (login, agregar al carrito y finalizar compra) de manera robusta, mantenible y legible:

1. Legibilidad y colaboración: Cucumber con Gherkin → escenarios entendibles para QA, Devs y negocio.
2. Mantenibilidad: Page Object Model separa lógica de negocio de selectores, reduciendo duplicación.
3. Confiabilidad: aislamiento por contexto/página en cada escenario; evita interferencias.
4. Escalabilidad: soporte de tags, data-driven, reportes HTML y screenshots.
5. Ejecución flexible: soporta headless, headed y filtrado por tags.

Esta arquitectura permite extender fácilmente la suite a más escenarios (filtros, sorting, logout, etc.) y escalar a integración continua en pipelines (GitHub Actions, Jenkins, etc.).

<div>
  <a href="https://www.linkedin.com/in/eberssgarcia/">
    <img src="https://img.shields.io/badge/@eberssgarcia--lightgrey?logo=linkedin&amp;style=social">
  </a>
</div>
