/* ============================================
   BARRA DE PROGRESSO DE LEITURA
   ============================================ */
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  });
}

/* ============================================
   BOTÃO VOLTAR AO TOPO
   ============================================ */
function initBtnTopo() {
  const btn = document.getElementById('btn-topo');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btn.classList.add('visivel');
    } else {
      btn.classList.remove('visivel');
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================
   BUSCA SIMULADA
   ============================================ */
function initBusca() {
  const form = document.getElementById('form-busca');
  const resultado = document.getElementById('resultado-busca');
  if (!form || !resultado) return;

  const artigos = [
    { titulo: 'Marte', url: 'marte.html' },
    { titulo: 'Júpiter', url: 'jupiter.html' },
    { titulo: 'Terra', url: 'terra.html' },
    { titulo: 'Vênus', url: 'venus.html' },
    { titulo: 'Saturno', url: 'saturno.html' },
    { titulo: 'Mercúrio', url: 'mercurio.html' },
    { titulo: 'Urano', url: 'urano.html' },
    { titulo: 'Netuno', url: 'netuno.html' },
    { titulo: 'Glossário', url: 'glossario.html' },
  ];

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const termo = document.getElementById('campo-busca').value.trim().toLowerCase();
    if (!termo) return;

    const encontrados = artigos.filter(function (a) {
      return a.titulo.toLowerCase().includes(termo);
    });

    resultado.style.display = 'block';

    if (encontrados.length === 0) {
      resultado.innerHTML = '<p>Nenhum artigo encontrado para <strong>"' + termo + '"</strong>.</p>';
    } else {
      let html = '<p>Resultados para <strong>"' + termo + '"</strong>:</p><ul style="margin-top:0.5rem;padding-left:1.2rem;">';
      encontrados.forEach(function (a) {
        html += '<li><a href="' + a.url + '">' + a.titulo + '</a></li>';
      });
      html += '</ul>';
      resultado.innerHTML = html;
    }
  });
}

/* ============================================
   INICIALIZAÇÃO
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
  initProgressBar();
  initBtnTopo();
  initBusca();
});