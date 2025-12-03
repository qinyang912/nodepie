---
layout: Authcode
navbar: false
sidebar: false
pageClass: authcode-page
lang: zh-CN
title: 隐私政策
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
.content{padding:32px 0;border-top:1px solid var(--border)}
.content h2{font-size:22px;margin:0 0 12px}
.content h3{font-size:18px;margin:18px 0 8px}
.content p{margin:8px 0;color:#334155;line-height:1.7}
.content ul{margin:8px 0 16px;padding-left:18px;color:#334155}
.content li{margin:6px 0}
.site-footer{padding:24px 0;border-top:1px solid var(--border)}
.site-footer .container{display:flex;justify-content:space-between;align-items:center;gap:12px}
.site-footer a{color:inherit;text-decoration:none}
@media (max-width:640px){.hero h1{font-size:26px}.actions{gap:8px}.btn{height:36px;padding:0 14px}.site-header .container{height:52px}}
</style>

<header class="site-header">
  <div class="container">
    <div class="brand">
      <img class="app-icon" src="/assets/authcode/AppIcon-marketing.png" alt="App 图标" />
      <span>AuthCode</span>
    </div>
    <nav class="actions">
      <a class="btn primary" href="#download">下载</a>
      <a class="btn" href="/authcode.html#support">支持</a>
      <a class="btn" href="https://github.com/qinyang912" target="_blank" rel="noopener">GitHub</a>
    </nav>
  </div>
  </header>

<main>
  <section class="hero">
    <div class="container hero-inner">
      <h1>隐私政策</h1>
      <p>更新日期：2025-12-02</p>
    </div>
  </section>

  <section class="content">
    <div class="container">
<h2>总述</h2>
<p>AuthCode 是一款用于管理双重验证（2FA）的工具型应用，核心设计理念是本地优先、离线可用与最小化数据收集。除非为实现核心功能所必需，应用不会收集、上传或共享您的任何个人信息。</p>

<h2>我们收集与存储的数据</h2>
<p>AuthCode 不通过服务器收集您的数据。应用在本地设备上可能保存以下用于生成一次性验证码的必要信息：</p>
<ul>
  <li>账户名称、发行者信息与分组标签</li>
  <li>用于生成验证码的密钥（如 TOTP/HOTP 秘钥）及相关参数</li>
  <li>可选的图标或外观设置</li>
</ul>
<p>上述数据仅用于在您的设备上生成并显示一次性验证码，不会用于任何画像或广告目的。</p>

<h2>数据的使用方式</h2>
<p>应用仅在本地计算并显示验证码，数据不会被上传至任何第三方服务。</p>

<h2>数据存储与安全</h2>
<p>AuthCode 在设备本地存储您的 2FA 信息，并尽力采用系统提供的安全机制进行保护（例如系统安全区域/加密存储）。如您主动进行数据导出或备份，导出内容由您自行保存与管理。</p>

<h2>第三方服务</h2>
<p>AuthCode 不内置第三方广告或追踪 SDK。基于平台的通用分发渠道（如 App Store）可能提供匿名的下载与崩溃统计，这些信息由平台依据其隐私政策处理。</p>

<h2>权限使用说明</h2>
<ul>
  <li>相机：用于扫描二维码以快速添加 2FA 账户。</li>
  <li>照片/文件访问：用于从图片或文件中导入二维码或备份。</li>
  <li>网络：用于访问应用商店页面或下载更新信息，不用于上传您的账户数据。</li>
  <li>通知（如适用）：用于本地提醒，不涉及数据传输。</li>
</ul>

<h2>数据共享与转移</h2>
<p>我们不会向第三方出售、出租或以其他方式共享您的个人数据。除法律法规要求或履行法律义务的情形外，您的数据不会被转移到任何第三方。</p>

<h2>数据保留与删除</h2>
<p>所有 2FA 数据保留在您的设备本地，您可以随时在应用内删除账户信息。卸载应用将移除本地存储的数据（不含您自行导出的备份）。</p>

<h2>未成年人保护</h2>
<p>AuthCode 面向普通用户，不针对 13 岁以下未成年人。如果您是监护人并认为我们可能错误地保存了未成年人的信息，请通过下方联系方式与我们沟通以便处理。</p>

<h2>您的权利</h2>
<p>在适用法律允许的范围内，您有权在设备上访问、更正与删除本地保存的数据。鉴于应用不维护服务器数据，相关操作需在您的设备上进行。</p>

<h2>本政策的变更</h2>
<p>我们可能根据产品或法律要求更新本隐私政策。重大变更将通过应用内或本页面进行提示。继续使用应用即表示您接受更新后的政策。</p>

<h2>联系我们</h2>
<p>如对隐私或使用有疑问，或需要技术支持，您可以通过以下方式与我们联系：</p>
<ul>
  <li>电子邮箱：<a href="mailto:wannengxin@gmail.com">wannengxin@gmail.com</a></li>
  <li>问题反馈：<a href="https://github.com/qinyang912/authcode-support/issues" target="_blank" rel="noopener">GitHub Issues</a></li>
  <li>支持页面：<a href="/authcode.html#support">帮助与支持</a></li>
  <li>分发渠道：<a href="https://apps.apple.com/cn/app/id6755983035" target="_blank" rel="noopener">App Store 页面</a></li>
  </ul>
<p>响应时间：工作日 24 小时内；支持语言：中文、英文。</p>
    </div>
  </section>

  <section id="download" class="content">
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
    <div class="footer-right"><a href="/authcode.html#support">支持</a> · <a href="/authcode-privacy">隐私政策</a></div>
  </div>
</footer>
