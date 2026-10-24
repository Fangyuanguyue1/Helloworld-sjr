module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello World · sjr</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    min-height: 100vh;
    font-family: "Microsoft Yahei", "PingFang SC", sans-serif;
    background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  /* 漂浮光斑 */
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.55;
    animation: float 12s ease-in-out infinite;
  }
  .orb-1 { width: 420px; height: 420px; background: #7f5af0; top: -120px; left: -100px; }
  .orb-2 { width: 360px; height: 360px; background: #2cb67d; bottom: -100px; right: -80px; animation-delay: -4s; }
  .orb-3 { width: 300px; height: 300px; background: #ef4565; top: 40%; right: 15%; animation-delay: -8s; }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50%      { transform: translate(40px, -40px) scale(1.1); }
  }

  /* 玻璃卡片 */
  .card {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 64px 56px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
    max-width: 560px;
    width: calc(100% - 48px);
    animation: rise 0.9s ease both;
  }

  @keyframes rise {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .wave { font-size: 56px; display: inline-block; animation: wave 2.4s ease-in-out infinite; transform-origin: 70% 70%; }
  @keyframes wave {
    0%, 60%, 100% { transform: rotate(0deg); }
    10%, 30% { transform: rotate(16deg); }
    20%, 40% { transform: rotate(-8deg); }
  }

  h1 {
    margin-top: 18px;
    font-size: 44px;
    letter-spacing: 1px;
    background: linear-gradient(90deg, #f5d0fe, #a78bfa, #67e8f9);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 4s linear infinite;
  }
  @keyframes shine { to { background-position: 200% center; } }

  .name {
    margin-top: 14px;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.92);
  }
  .name b { color: #67e8f9; }

  .tagline {
    margin-top: 10px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.55);
    letter-spacing: 2px;
  }

  .clock {
    margin-top: 32px;
    padding: 20px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  #date { font-size: 14px; color: rgba(255, 255, 255, 0.6); letter-spacing: 3px; }
  #time {
    margin-top: 6px;
    font-size: 40px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    color: #fff;
    text-shadow: 0 0 24px rgba(103, 232, 249, 0.45);
  }

  .badge {
    margin-top: 28px;
    display: inline-block;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.55);
    padding: 8px 18px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 480px) {
    .card { padding: 44px 24px; }
    h1 { font-size: 32px; }
    #time { font-size: 32px; }
  }
</style>
</head>
<body>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>

  <main class="card">
    <span class="wave">👋</span>
    <h1>Hello World！</h1>
    <p class="name">我是 <b>sjr</b>，我的第一个 AI 开发的网站</p>
    <p class="tagline">— HELLO · WORLD · 2026 —</p>
    <div class="clock">
      <div id="date">加载中…</div>
      <div id="time">--:--:--</div>
    </div>
    <span class="badge">🚀 Powered by Vercel</span>
  </main>

<script>
  function tick() {
    var now = new Date();
    var d = now.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
    var t = now.toLocaleTimeString('zh-CN', { hour12: false });
    document.getElementById('date').textContent = d;
    document.getElementById('time').textContent = t;
  }
  tick();
  setInterval(tick, 1000);
</script>
</body>
</html>`;
  res.status(200).end(html);
};
