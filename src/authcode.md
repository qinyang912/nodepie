---
layout: Authcode
navbar: false
sidebar: false
pageClass: authcode-page
lang: zh-CN
title: AuthCode
---

<style>
*{box-sizing:border-box}
html,body{padding:0;margin:0}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Microsoft Yahei","Noto Sans CJK SC",sans-serif;color:#0f172a;background:#ffffff}
:root{--bg:#ffffff;--text:#0f172a;--muted:#475569;--primary:#2563eb;--primary-ink:#fbfbff;--border:#e2e8f0}
.container{max-width:1120px;margin:0 auto;padding:0 20px}
.site-header{position:sticky;top:0;background:rgba(255,255,255,.9);backdrop-filter:saturate(180%) blur(12px);border-bottom:1px solid var(--border);z-index:10}
.site-header .container{display:flex;align-items:center;justify-content:space-between;height:60px}
.brand{display:flex;align-items:center;gap:8px;font-weight:700;font-size:18px}
.app-icon{width:28px;height:28px;border-radius:6px;border:1px solid var(--border);background:#fff}
.actions{display:flex;gap:12px}
.btn{display:inline-flex;align-items:center;justify-content:center;height:40px;padding:0 16px;border-radius:10px;border:1px solid var(--border);text-decoration:none;color:var(--text);transition:all .2s ease}
.btn:hover{transform:translateY(-1px)}
.btn.primary{background:var(--primary);color:var(--primary-ink);border-color:var(--primary)}
.hero{padding:72px 0 40px;background:linear-gradient(180deg,#f8fafc 0%,#ffffff 100%)}
.hero-inner{display:grid;grid-template-columns:1fr;gap:16px;text-align:center}
.hero h1{font-size:32px;line-height:1.2;margin:0}
.hero p{font-size:16px;color:var(--muted);margin:0}
.cta{display:flex;gap:12px;justify-content:center;margin-top:16px}
.features{padding:32px 0;border-top:1px solid var(--border)}
.features h2{font-size:22px;margin:0 0 12px}
.feature-list{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:0;margin:0;list-style:none}
.feature-list li{padding:14px 16px;border:1px solid var(--border);border-radius:12px}
.gallery{padding:32px 0;border-top:1px solid var(--border)}
.gallery h2{font-size:22px;margin:0 0 16px}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.grid a{display:block;border:1px solid var(--border);border-radius:14px;overflow:hidden;background:#fff}
.grid img{display:block;width:100%;height:auto}
.grid .note{grid-column:1/-1;text-align:center;color:var(--muted);font-size:14px}
.download{padding:32px 0;border-top:1px solid var(--border)}
.download h2{font-size:22px;margin:0 0 12px}
.site-footer{padding:24px 0;border-top:1px solid var(--border)}
.site-footer .container{display:flex;justify-content:space-between;align-items:center;gap:12px}
.site-footer a{color:inherit;text-decoration:none}
@media (max-width:1024px){.grid{grid-template-columns:repeat(3,1fr)}.feature-list{grid-template-columns:repeat(2,1fr)}}
@media (max-width:640px){.hero h1{font-size:26px}.feature-list{grid-template-columns:1fr}.grid{grid-template-columns:1fr}.actions{gap:8px}.btn{height:36px;padding:0 14px}.site-header .container{height:52px}}
</style>

<header class="site-header">
  <div class="container">
    <div class="brand">
      <img class="app-icon" src="/assets/authcode/AppIcon-marketing.png" alt="App 图标">
      <span>AuthCode</span>
    </div>
    <nav class="actions">
      <a class="btn primary" href="#download">下载</a>
      <a class="btn" href="https://github.com/qinyang912" target="_blank" rel="noopener">GitHub</a>
    </nav>
  </div>
  </header>

<main>
  <section class="hero">
    <div class="container hero-inner">
      <h1>轻量、可靠的双重验证管理</h1>
      <p>专注隐私与易用性</p>
      <div class="cta">
        <a class="btn primary" href="#download">立即下载</a>
        <a class="btn" href="#gallery">查看截图</a>
      </div>
    </div>
  </section>

  <section id="features" class="features">
    <div class="container">
      <h2>主要特性</h2>
      <ul class="feature-list">
        <li>快速添加与管理 2FA 账号</li>
        <li>本地优先与数据安全</li>
        <li>简洁界面与明确信息层级</li>
        <li>支持 iPad 与 Apple Watch</li>
      </ul>
    </div>
  </section>

  <section id="gallery" class="gallery">
    <div class="container">
      <h2>应用截图</h2>
      <div class="grid">
        <a href="/assets/authcode/appstore-iphone65-portrait-1242x2688-2025-12-01T13-53-40-862Z.jpg" target="_blank" rel="noopener">
          <img src="/assets/authcode/appstore-iphone65-portrait-1242x2688-2025-12-01T13-53-40-862Z.jpg" alt="应用截图 1">
        </a>
        <a href="/assets/authcode/appstore-iphone65-portrait-1242x2688-2025-12-01T13-55-04-021Z.jpg" target="_blank" rel="noopener">
          <img src="/assets/authcode/appstore-iphone65-portrait-1242x2688-2025-12-01T13-55-04-021Z.jpg" alt="应用截图 2">
        </a>
        <a href="/assets/authcode/appstore-iphone65-portrait-1242x2688-2025-12-01T13-56-24-314Z.jpg" target="_blank" rel="noopener">
          <img src="/assets/authcode/appstore-iphone65-portrait-1242x2688-2025-12-01T13-56-24-314Z.jpg" alt="应用截图 3">
        </a>
        <a href="/assets/authcode/appstore-iphone65-portrait-1242x2688-2025-12-01T13-58-01-090Z.jpg" target="_blank" rel="noopener">
          <img src="/assets/authcode/appstore-iphone65-portrait-1242x2688-2025-12-01T13-58-01-090Z.jpg" alt="应用截图 4">
        </a>
        <div class="note">点击任意图片可查看原图</div>
      </div>
    </div>
  </section>

  <section id="download" class="download">
    <div class="container">
      <h2>下载</h2>
      <p>从 App Store 获取 AuthCode</p>
      <a class="btn primary" href="https://apps.apple.com/cn/app/id6755983035" target="_blank" rel="noopener">在 App Store 下载</a>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="container">
    <div class="footer-left">© 2025 AuthCode</div>
    <div class="footer-right"><a href="/authcode-privacy">隐私政策</a></div>
  </div>
</footer>
