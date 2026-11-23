/* ==========================================================
   1. CONFIGURAÇÃO DE TELAS SEM BARRA DE NAVEGAÇÃO INFERIOR
   As telas de autenticação e splash não exibem o menu inferior.
   ========================================================== */
const noNav = ['splash', 'login', 'cadastro', 'verificacao'];

/* ==========================================================
   2. FUNÇÃO PRINCIPAL DE NAVEGAÇÃO ENTRE TELAS (CLIQUE)
   ========================================================== */
function go(id) {
  // 1. Remove a classe 'active' de todas as telas (esconde todas)
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });

  // 2. Adiciona a classe 'active' apenas na tela correspondente ao ID chamado
  document.getElementById(id).classList.add('active');

  // 3. Controla a exibição da barra de navegação inferior (some nas telas iniciais)
  const nav = document.getElementById('bottomnav');
  nav.style.display = noNav.includes(id) ? 'none' : 'flex';

  // 4. Atualiza visualmente qual ícone do menu inferior está selecionado
  document.querySelectorAll('.navitem').forEach(n => n.classList.remove('active'));
  
  const map = { home: 'home', rotas: 'rotas', 'rota-detalhe': 'rotas', perfil: 'perfil' };
  const target = map[id];
  
  if (target) {
    const el = document.querySelector('.navitem[data-target="' + target + '"]');
    if (el) el.classList.add('active');
  }

  // 5. Reseta a rolagem da tela para o topo sempre que trocar de página
  document.getElementById('phone').querySelector('.screens').scrollTop = 0;
}

/* ==========================================================
   3. INICIALIZAÇÃO DO APLICATIVO
   Carrega inicialmente a tela de Splash assim que o site é aberto.
   ========================================================== */
go('splash');
