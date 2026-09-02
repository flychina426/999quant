# 999Quant Website

`999Quant` 是 `999AI.ONE` 旗下的开源轻量量化研究项目品牌。本目录是一套可直接部署的中英文静态官网，无数据库、无构建依赖。

## 项目品牌

- 域名品牌：**999AI.ONE**
- 项目名称：**999Quant**
- 中文名称：**九九九量化**
- 定位：开源轻量量化研究基础设施
- 口号：**Database-less. Local-first. Research-first.**

“999”只用于品牌识别，不代表 99.9% 准确率、收益率、胜率或任何投资承诺。

## 本地预览

Python：

```bash
cd 999quant-site
python -m http.server 8080
```

浏览器访问：`http://localhost:8080`

也可以直接打开 `index.html`，但 Service Worker 与部分浏览器 API 需要通过 HTTP/HTTPS 访问。

## 上线前修改

编辑 `site-config.js`：

```js
window.NINE_QUANT_CONFIG = {
  domain: "999ai.one",
  githubUrl: "https://github.com/你的账号/999quant.git",
  contactEmail: "hello@999ai.one",
  defaultLanguage: "zh"
};
```

配置 `githubUrl` 后，页头 GitHub 链接和部署命令会自动替换为真实仓库地址。留空时，页头 GitHub 项会跳到本站的开源说明区。

## 单文件版本

`999quant-onefile.html` 已内嵌 CSS、JavaScript 与 SVG 标志，适合直接上传、发给他人预览或放入现有服务器目录。生产环境仍推荐使用完整目录版本，以获得 PWA、缓存、SEO 图片和独立配置文件。

## 部署方式

### Cloudflare Pages

1. 新建 Pages 项目并连接 Git 仓库。
2. Framework preset 选择 `None`。
3. Build command 留空。
4. Build output directory 填 `/` 或仓库中的网站目录。
5. 绑定自定义域名 `999ai.one`。

### GitHub Pages

1. 将本目录提交到 GitHub 仓库。
2. Settings → Pages → Deploy from a branch。
3. 选择 `main` 和 `/root`。
4. 文件 `CNAME` 已包含 `999ai.one`。
5. 在域名 DNS 中按 GitHub Pages 提示添加记录。

### Vercel / Netlify

直接导入仓库，不需要构建命令。项目中已包含 `vercel.json` 与 `netlify.toml`。

### Nginx

把全部文件复制到站点根目录，例如：

```bash
sudo rsync -av ./ /var/www/999ai.one/
```

Nginx 示例：

```nginx
server {
    listen 80;
    server_name 999ai.one www.999ai.one;
    root /var/www/999ai.one;
    index index.html;

    location / {
        try_files $uri $uri/ /404.html;
    }

    location ~* \.(css|js|svg|png|webmanifest)$ {
        expires 7d;
        add_header Cache-Control "public, max-age=604800";
    }
}
```

## 文件结构

```text
999quant-site/
├── index.html
├── 999quant-onefile.html  # 单文件部署版
├── styles.css
├── script.js
├── site-config.js
├── manifest.webmanifest
├── sw.js
├── 404.html
├── robots.txt
├── sitemap.xml
├── CNAME
├── netlify.toml
├── vercel.json
├── LICENSE
├── Dockerfile
├── nginx.conf
├── .dockerignore
├── .nojekyll
└── assets/
    ├── logo.svg
    ├── favicon.svg
    ├── apple-touch-icon.png
    └── og-cover.png
```

## 功能

- 苹果 iOS 风格的玻璃拟态界面
- 中英文一键切换并记忆语言设置
- 桌面、平板、手机响应式布局
- 可交互的量化终端演示组件
- 架构、功能、国内研究模式边界、路线图、FAQ
- SEO、Open Graph、站点地图、PWA 基础文件
- GitHub Pages、Cloudflare Pages、Vercel、Netlify、Nginx 部署配置
- 无第三方前端库、无 CDN、无追踪脚本

## 商业与合规说明

本网站已将产品文案设计为“量化研究工具”方向，并明确：

- 不接入证券账户
- 不托管用户资金
- 不自动下单
- 不承诺收益
- 国内研究模式不输出直接买卖指令、目标价或建议仓位

这些属于产品设计边界，不代表已经获得监管许可，也不替代正式法律、牌照、数据授权、网络安全和隐私合规审查。

### Docker / Nginx 容器

项目已包含 `Dockerfile` 与安全响应头配置：

```bash
docker build -t 999quant-site .
docker run --rm -p 8080:80 999quant-site
```

浏览器访问 `http://localhost:8080`。生产环境可在容器前使用 Cloudflare、Caddy 或其他反向代理配置 HTTPS。
