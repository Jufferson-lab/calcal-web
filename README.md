# 🌐 Portal Web Oficial B2B — CAL CAL (Calibración y Calidad)

Repositorio público oficial del sitio web corporativo de **CAL CAL — Laboratorio de Calibración & Metrología Industrial**.

🔗 **Sitio Web en Vivo (GitHub Pages):** [https://jufferson-lab.github.io/calcal-web/](https://jufferson-lab.github.io/calcal-web/)

---

## 🚀 Módulos Públicos Incluidos

1. **[Portal Principal (`index.html`)](https://jufferson-lab.github.io/calcal-web/)**:
   - Catálogo comercial de instrumentación bajo el modelo **Pack Calidad Total** (Equipo + Certificado Trazable al SI incluido).
   - Servicios de calibración térmica (-80 °C a 300 °C), calificación de equipos (DQ/IQ/OQ/PQ) y consultoría ISO/IEC 17025:2017.
   - **Verificador Online de Certificados** (`CAL-2026-TERM-001`) y asistente técnico interactivo (**Nicolle**).
2. **[Simulador Interactivo GUM & Monte Carlo (`simulador/index.html`)](https://jufferson-lab.github.io/calcal-web/simulador/index.html)**:
   - Calculadora web en tiempo real de presupuestos de incertidumbre GUM (JCGM 100:2008), simulación de Monte Carlo (JCGM 101), derivadas parciales ($c_i$) y curvas Callendar-Van Dusen / ITS-90.
3. **[Brochure & Manual de Identidad (`brochure.html`)](https://jufferson-lab.github.io/calcal-web/brochure.html)**:
   - Presentación ejecutiva de identidad visual **Precision Lime (`#B2D235`)** & **Laser Fuchsia (`#E01A59`)**.
4. **[Informe Ejecutivo & Arquitectura v2.0 (`informe_ejecutivo.html`)](https://jufferson-lab.github.io/calcal-web/informe_ejecutivo.html)**:
   - Dossier técnico integral del ecosistema metrológico **CAL CAL**.
5. **[Presentación Gerencial (`presentacion.html`)](https://jufferson-lab.github.io/calcal-web/presentacion.html)**:
   - Estructura organizacional y modelo de negocio en 3 anillos.

---

## 🌍 Configuración Posterior de Dominio Propio (Custom Domain)

Este repositorio está preparado para vincular un dominio propio (por ejemplo, `www.calcal.co` o `www.calcal.com.co`) sin cambiar la infraestructura:

1. En el proveedor de dominio (Cloudflare, Namecheap, GoDaddy, Google Domains), crear los registros DNS:
   - **Registros `A`** para el dominio raíz (`@`) apuntando a las IPs de GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **Registro `CNAME`** para `www` apuntando a `jufferson-lab.github.io`.
2. Agregar un archivo llamado `CNAME` en la raíz de este repositorio con el dominio elegido (ej. `www.calcal.co`) o ingresarlo en **Settings → Pages → Custom domain** y activar **Enforce HTTPS**.

---
© 2026 **CAL CAL** — Laboratorio de Calibración & Metrología Industrial. Dirección Técnica: Juan Fernando Vélez Granda.
