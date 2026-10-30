/* ==========================================================================
   CAL CAL — Calibración y Calidad | Lógica Interactiva & Cotizador de Equipos
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Modales
  const modalAssistant = document.getElementById('modal-assistant');
  const modalQuote = document.getElementById('modal-quote');

  const btnOpenAssistant = document.getElementById('btn-open-assistant');
  const btnOpenQuote = document.getElementById('btn-open-quote');
  const quoteItemSelected = document.getElementById('quote-item-selected');

  const btnCloseAssistant = document.getElementById('close-modal-assistant');
  const btnCloseQuote = document.getElementById('close-modal-quote');

  function openModal(modal) {
    if (modal) modal.classList.add('active');
  }

  function closeModal(modal) {
    if (modal) modal.classList.remove('active');
  }

  if (btnOpenAssistant) btnOpenAssistant.addEventListener('click', () => openModal(modalAssistant));
  if (btnOpenQuote) {
    btnOpenQuote.addEventListener('click', () => {
      if (quoteItemSelected) quoteItemSelected.value = 'Consulta General de Equipos / Servicios';
      openModal(modalQuote);
    });
  }

  if (btnCloseAssistant) btnCloseAssistant.addEventListener('click', () => closeModal(modalAssistant));
  if (btnCloseQuote) btnCloseQuote.addEventListener('click', () => closeModal(modalQuote));

  // Listeners para los botones de Cotizar Equipo en el Catálogo
  const quoteItemButtons = document.querySelectorAll('.btn-quote-item');
  quoteItemButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const itemTitle = btn.getAttribute('data-item');
      if (quoteItemSelected) {
        quoteItemSelected.value = itemTitle || 'Equipo de Medición';
      }
      openModal(modalQuote);
    });
  });

  // Cerrar modal al hacer clic fuera del contenedor
  [modalAssistant, modalQuote].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    }
  });

  // Botón Hero "Verificador"
  const heroBtnCert = document.getElementById('hero-btn-cert');
  if (heroBtnCert) {
    heroBtnCert.addEventListener('click', () => {
      document.getElementById('verificador')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 2. Verificador de Certificados (Simulación Metrológica)
  const formValidator = document.getElementById('form-validator');
  const inputCertCode = document.getElementById('input-cert-code');
  const validatorResult = document.getElementById('validator-result');

  if (formValidator) {
    formValidator.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = inputCertCode.value.trim().toUpperCase();

      if (!code) return;

      validatorResult.innerHTML = `<p style="color: var(--text-muted);">Consultando trazabilidad metrológica en la base de datos CAL CAL...</p>`;
      validatorResult.classList.add('active');

      setTimeout(() => {
        if (code === 'CAL-2026-TERM-001' || code.includes('TERM') || code.includes('CAL')) {
          validatorResult.style.background = 'rgba(16, 185, 129, 0.1)';
          validatorResult.style.borderColor = 'rgba(16, 185, 129, 0.4)';
          validatorResult.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <strong style="color: #10B981; font-size:1.1rem;">✅ CERTIFICADO VÁLIDO & AUTÉNTICO</strong>
              <span style="font-size:0.8rem; background:rgba(16, 185, 129, 0.2); padding:2px 10px; border-radius:12px; color:#10B981;">Trazable al SI</span>
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:0.9rem; color:var(--text-main);">
              <div><strong>Código:</strong> ${code}</div>
              <div><strong>Cliente:</strong> Laboratorio Farmacéutico BioCalid</div>
              <div><strong>Item Medido:</strong> Sensor Termopar Tipo K + Datalogger</div>
              <div><strong>Rango Calibrado:</strong> -20 °C a 150 °C</div>
              <div><strong>Incertidumbre (k=2):</strong> U = ±0.04 °C</div>
              <div><strong>Fecha Emisión:</strong> 2026-07-20</div>
            </div>
            <div style="margin-top:14px; font-size:0.8rem; color:var(--text-muted); border-top:1px solid rgba(255,255,255,0.1); padding-top:8px;">
              Directores de Signatura: JuanFer Vélez (Director Técnico) & Nicolle (IA Auditora).
            </div>
          `;
        } else {
          validatorResult.style.background = 'rgba(255, 107, 107, 0.1)';
          validatorResult.style.borderColor = 'rgba(255, 107, 107, 0.4)';
          validatorResult.innerHTML = `
            <div style="color: var(--accent-thermal); font-weight:bold; margin-bottom:6px;">⚠️ Certificado No Encontrado</div>
            <p style="font-size:0.85rem; color:var(--text-muted);">
              El código <code>${code}</code> no coincide con un certificado registrado en el servidor de CAL CAL. Por favor verifique el número e intente de nuevo.
            </p>
          `;
        }
      }, 600);
    });
  }

  // 3. Chat Bot Asistente IA (Gemini Simulation)
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userText = chatInput.value.trim();
      if (!userText) return;

      appendChatMessage(userText, 'user');
      chatInput.value = '';

      setTimeout(() => {
        const botReply = generateAIReply(userText);
        appendChatMessage(botReply, 'bot');
      }, 700);
    });
  }

  function appendChatMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-msg', sender === 'user' ? 'chat-msg-user' : 'chat-msg-bot');
    msgDiv.innerHTML = text.replace(/\n/g, '<br>');
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function generateAIReply(query) {
    const q = query.toLowerCase();

    if (q.includes('pack') || q.includes('calidad total') || q.includes('equipo')) {
      return "En <strong>CAL CAL</strong> todos nuestros equipos se comercializan bajo el <strong>Pack Calidad Total</strong>: incluyen el instrumento de medición de alta exactitud más el <strong>Certificado de Calibración Trazable al SI</strong> listo para auditorías ISO 9001, BPM e ISO 17025.";
    } else if (q.includes('incertidumbre') || q.includes('gum')) {
      return "Estimamos la incertidumbre aplicando la guía <strong>GUM (JCGM 100:2008)</strong> y simulación de <strong>Monte Carlo (JCGM 101)</strong>. Consideramos repetibilidad, estabilidad térmica, incertidumbre del patrón y deriva instrumental.";
    } else if (q.includes('termómetro') || q.includes('termometria') || q.includes('temperatura')) {
      return "Nuestro laboratorio cubre calibraciones térmicas por comparación de <strong>-80 °C a 300 °C</strong>. Además comercializamos el <strong>Paquete Llave en Mano Termometría 17025 (PKG-TERM-17025)</strong> para laboratorios que deseen acreditarse.";
    } else if (q.includes('17025') || q.includes('iso')) {
      return "La norma <strong>ISO/IEC 17025:2017</strong> exige competencia técnica y trazabilidad. En <strong>CAL CAL</strong> asesoramos la estructura documental completa y comercializamos soluciones metodológicas validadas.";
    } else {
      return `Con gusto te asesoro sobre "${query}". Puedes cotizar cualquier equipo de nuestro catálogo con certificado incluido haciendo clic en "Cotizar Equipos".`;
    }
  }

  // 4. Formulario de Cotización
  const formQuote = document.getElementById('form-quote');
  if (formQuote) {
    formQuote.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Excelente! Tu solicitud de cotización para CAL CAL ha sido enviada con éxito. Te contactaremos con la propuesta comercial ejecutiva.');
      closeModal(modalQuote);
      formQuote.reset();
    });
  }
});
