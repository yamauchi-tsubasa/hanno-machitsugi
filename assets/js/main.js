(() => {
  const data = window.MACHITSUGI_DATA;
  const pages = [
    ["index.html","トップ"],["about.html","プロジェクトについて"],["history.html","活動の歩み"],
    ["objects.html","景観オブジェ"],["events.html","イベント報告"],["team.html","メンバー・連携団体"],["contact.html","お問い合わせ"]
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  const header = document.querySelector('[data-site-header]');
  const footer = document.querySelector('[data-site-footer]');
  if(header){
    header.innerHTML = `<a class="skip-link" href="#main">本文へ移動</a><header class="site-header"><div class="container header-inner"><a class="brand" href="index.html"><img src="assets/images/logo-mark.svg" alt=""><span class="brand-text"><span class="brand-title">${data.project.name}</span><span class="brand-sub">埼玉大学 深堀研究室 × 地域連携</span></span></a><button class="nav-toggle" aria-label="メニューを開く" aria-expanded="false"><span></span><span></span><span></span></button><nav class="site-nav" aria-label="メインナビゲーション">${pages.map(([url,label])=>`<a href="${url}" ${current===url?'aria-current="page"':''}>${label}</a>`).join('')}</nav></div></header>`;
    const btn=header.querySelector('.nav-toggle'); const nav=header.querySelector('.site-nav');
    btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
  }
  if(footer){
    footer.innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-grid"><div><div class="footer-brand"><img src="assets/images/logo-mark.svg" alt=""><div><strong>${data.project.name}</strong><div style="color:#aebdb1;font-size:.82rem">${data.project.organization}</div></div></div><p style="max-width:540px;color:#aebdb1">地域の素材・記憶・人の想いをまちなかの景観に表現し、飯能らしいまちなみを未来へ継いでいく地域連携プロジェクトです。</p></div><div><strong>ページ</strong><div class="footer-links">${pages.slice(1).map(([u,l])=>`<a href="${u}">${l}</a>`).join('')}</div></div><div><strong>公式SNS</strong><div class="footer-links"><a href="${data.project.instagramUrl}" target="_blank" rel="noopener">Instagram ${data.project.instagram}</a><a href="contact.html">お問い合わせ</a></div></div></div><div class="footer-meta">試作版ウェブサイト｜写真・一部文章・問い合わせ先は公開前に差し替え予定です。</div></div></footer>`;
  }
  document.querySelectorAll('[data-year-tab]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-year-tab]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active'); renderObjects(btn.dataset.yearTab);
  }));
  window.renderObjects = (year='2025') => {
    const target=document.querySelector('[data-object-grid]'); if(!target)return;
    target.innerHTML=data.objects.filter(x=>x.year===year).map(o=>`<article class="object-card"><img src="${o.image}" alt="${o.shop}の仮画像"><div class="card-body"><span class="tag">${o.year}</span><h3>${o.shop}</h3><strong>${o.theme}</strong><p>${o.description}</p></div></article>`).join('');
  };
  if(document.querySelector('[data-object-grid]')) renderObjects('2025');
})();
