module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const now = new Date();
  const serverTime = now.toLocaleString('zh-CN');

  const html = `
    <html>
      <head>
        <meta charset="utf-8">
        <title>Hello World</title>
        <style>
          body{font-family:"Microsoft Yahei", sans-serif; font-size:22px; text-align:center; margin-top:100px;}
        </style>
      </head>
      <body>
        <div>Hel1o World！我是【sjr】，我的第一个AI开发的网站</div>
        <div style="margin-top:20px;">当前服务器时间：${serverTime}</div>
      </body>
    </html>
  `;
  res.status(200).end(html);
};
