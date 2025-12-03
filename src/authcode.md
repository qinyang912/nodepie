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
.support{padding:32px 0;border-top:1px solid var(--border)}
.support h2{font-size:22px;margin:0 0 12px}
.support p{margin:8px 0;color:#334155;line-height:1.7}
.support ul{margin:8px 0 16px;padding-left:18px;color:#334155}
.support li{margin:6px 0}
.faq{padding:32px 0;border-top:1px solid var(--border)}
.faq h2{font-size:22px;margin:0 0 12px}
.faq h3{font-size:18px;margin:18px 0 8px;font-weight:700}
.faq p{margin:8px 0;color:#334155;line-height:1.7}
.faq ul{margin:8px 0 16px;padding-left:18px;color:#334155}
.faq li{margin:6px 0}
.site-footer{padding:24px 0;border-top:1px solid var(--border)}
.site-footer .container{display:flex;justify-content:space-between;align-items:center;gap:12px}
.site-footer a{color:inherit;text-decoration:none}
/* More menu */
.actions .more{display:none}
.more{position:relative}
.more summary{list-style:none}
summary::-webkit-details-marker{display:none}
.more .menu{position:absolute;top:calc(100% + 6px);right:0;background:#fff;border:1px solid var(--border);border-radius:12px;min-width:160px;padding:8px;box-shadow:0 16px 24px rgba(15,23,42,.08);display:flex;flex-direction:column;gap:8px;z-index:20}
.more .menu a{display:block;height:auto;padding:10px 12px;border:1px solid var(--border);border-radius:8px;color:var(--text);text-decoration:none}
.more .menu a:hover{background:#f8fafc}
@media (max-width:1024px){.grid{grid-template-columns:repeat(3,1fr)}.feature-list{grid-template-columns:repeat(2,1fr)}}
@media (max-width:640px){.hero h1{font-size:26px}.feature-list{grid-template-columns:1fr}.grid{grid-template-columns:1fr}.actions{gap:8px}.btn{height:36px;padding:0 14px}.site-header .container{height:52px}.actions .btn[data-collapse]{display:none}.actions .more{display:inline-flex}}
</style>

<header class="site-header">
  <div class="container">
    <div class="brand">
      <img class="app-icon" src="/assets/authcode/AppIcon-marketing.png" alt="App 图标">
      <span>AuthCode</span>
    </div>
    <nav class="actions">
      <a class="btn primary" href="#download">下载</a>
      <a class="btn" data-collapse href="#support">支持</a>
      <a class="btn" data-collapse href="https://github.com/qinyang912" target="_blank" rel="noopener">GitHub</a>
      <details class="more">
        <summary class="btn">更多</summary>
        <div class="menu" role="menu">
          <a href="#support">支持</a>
          <a href="https://github.com/qinyang912" target="_blank" rel="noopener">GitHub</a>
        </div>
      </details>
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

  <section id="support" class="support">
    <div class="container">
      <h2>帮助与支持</h2>
      <p>遇到问题或需要帮助？您可以通过以下方式联系我们：</p>
      <ul>
        <li>电子邮箱：<a href="mailto:wannengxin@gmail.com">wannengxin@gmail.com</a></li>
        <li>问题反馈：<a href="https://github.com/qinyang912/authcode-support/issues" target="_blank" rel="noopener">GitHub Issues</a></li>
        <li>使用指南：请参阅下方常见问题</li>
      </ul>
      <p>响应时间：工作日 24 小时内；支持语言：中文、英文。</p>
    </div>
  </section>

  <section id="faq" class="faq">
    <div class="container">
      <h2>常见问题</h2>
      <h3>如何添加 2FA 账户？</h3>
      <p>在应用内点击“添加”，使用相机扫描二维码或手动输入密钥与参数即可。</p>
      <h3>如何在新设备上迁移数据？</h3>
      <p>在旧设备中使用导出/备份功能生成文件，并在新设备中导入该文件完成迁移。</p>
      <h3>我的数据是否会上传到服务器？</h3>
      <p>不会。应用本地生成验证码，不会上传您的 2FA 信息。详见<a href="/authcode-privacy">隐私政策</a>。</p>
      <h3>忘记密钥或丢失设备怎么办？</h3>
      <p>请联系对应服务提供商的账户支持流程。我们无法恢复第三方服务的 2FA 密钥。</p>
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
    <div class="footer-right"><a href="#support">支持</a> · <a href="/authcode-privacy">隐私政策</a></div>
  </div>
</footer>
