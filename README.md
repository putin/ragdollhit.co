# Ragdoll Hit Games - 布娃娃物理游戏平台

## 项目简介

Ragdoll Hit Games 是一个基于 React + TypeScript + Vite 构建的现代化布娃娃物理游戏展示平台。该平台汇集了各种有趣的布娃娃物理游戏，为用户提供沉浸式的游戏体验。

### 主要特性

- 🎮 **丰富的游戏库** - 包含多种类型的布娃娃物理游戏
- 🔍 **智能搜索** - 支持游戏名称和描述的模糊搜索
- 🏷️ **分类筛选** - 按游戏类型进行快速筛选
- ⚡ **响应式设计** - 完美适配桌面端和移动端
- 🎨 **现代UI** - 基于 Tailwind CSS 的美观界面
- 🚀 **快速加载** - 使用 Vite 构建，启动速度极快

## 技术栈

- **前端框架**: React 18.3.1
- **开发语言**: TypeScript 5.5.3
- **构建工具**: Vite 5.4.2
- **样式框架**: Tailwind CSS 3.4.1
- **路由管理**: React Router DOM 6.22.0
- **图标库**: Lucide React 0.344.0
- **代码规范**: ESLint 9.9.1

## 项目结构

```
ragdollAggre/
├── src/                    # 源代码目录
│   ├── components/         # React 组件
│   │   ├── CategoryFilter.tsx    # 分类筛选组件
│   │   ├── Footer.tsx            # 页脚组件
│   │   ├── GameCard.tsx          # 游戏卡片组件
│   │   ├── GameDetail.tsx        # 游戏详情页面
│   │   ├── Header.tsx            # 页头组件
│   │   ├── Home.tsx              # 首页组件
│   │   └── SearchBar.tsx         # 搜索栏组件
│   ├── data/              # 数据文件
│   │   └── games.ts       # 游戏数据定义
│   ├── App.tsx            # 主应用组件
│   ├── main.tsx           # 应用入口
│   └── index.css          # 全局样式
├── public/                # 静态资源
├── index.html             # HTML 模板
├── package.json           # 项目配置
├── vite.config.ts         # Vite 配置
├── tailwind.config.js     # Tailwind 配置
└── tsconfig.json          # TypeScript 配置
```

## 核心模块介绍

### 1. 首页模块 (Home.tsx)
- **功能**: 展示游戏列表、搜索筛选、特色游戏推荐
- **特性**: 
  - 响应式网格布局
  - 实时搜索过滤
  - 分类筛选功能
  - 特色游戏展示

### 2. 游戏详情模块 (GameDetail.tsx)
- **功能**: 展示单个游戏的详细信息
- **特性**:
  - 游戏描述和玩法说明
  - 嵌入式游戏界面
  - 相关游戏推荐

### 3. 搜索和筛选模块
- **SearchBar.tsx**: 提供游戏名称和描述的搜索功能
- **CategoryFilter.tsx**: 按游戏类型进行分类筛选

### 4. 游戏卡片模块 (GameCard.tsx)
- **功能**: 展示游戏的基本信息和缩略图
- **特性**: 悬停效果、游戏分类标签、特色游戏标识

### 5. 导航模块
- **Header.tsx**: 网站导航栏，包含 logo 和导航链接
- **Footer.tsx**: 页脚信息，包含版权和链接

## 游戏分类

平台包含以下游戏分类：
- **Classic** - 经典布娃娃游戏
- **Action** - 动作类游戏
- **Sandbox** - 沙盒类游戏
- **Fighting** - 格斗类游戏
- **Sports** - 体育类游戏

## 快速开始

### 环境要求

- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 启动开发服务器

```bash
# 启动开发服务器
npm run dev

# 或使用 yarn
yarn dev
```

启动后，在浏览器中访问 `http://localhost:5173` 即可查看项目。

### 构建生产版本

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

### 代码检查

```bash
# 运行 ESLint 检查
npm run lint
```

## 开发指南

### 添加新游戏

1. 在 `src/data/games.ts` 文件中添加新的游戏数据
2. 确保包含所有必需的字段：id、name、description、gameplay、iframeUrl、thumbnail、category、featured
3. 如果需要新的分类，请在 categories 数组中添加

### 自定义样式

项目使用 Tailwind CSS 进行样式管理，可以通过以下方式自定义：

1. 修改 `tailwind.config.js` 配置文件
2. 在 `src/index.css` 中添加自定义样式
3. 在组件中使用 Tailwind 类名

### 路由配置

项目使用 React Router 进行路由管理，主要路由包括：
- `/` - 首页
- `/game/:id` - 游戏详情页

## 部署说明

### 静态部署

项目构建后可以部署到任何静态文件服务器：

1. 运行 `npm run build` 生成生产文件
2. 将 `dist` 目录中的文件上传到服务器
3. 配置服务器支持 SPA 路由（所有路由都指向 index.html）

### 推荐部署平台

- **Vercel**: 支持自动部署和预览
- **Netlify**: 提供免费托管和自动构建
- **GitHub Pages**: 适合开源项目
- **阿里云 OSS**: 国内访问速度快

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 Issue
- 发送邮件
- 创建 Pull Request

---

**享受布娃娃物理游戏的乐趣！** 🎮 