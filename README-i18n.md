# UmiJS 项目国际化配置说明

本项目已成功配置了国际化功能，支持中文和英文两种语言。

## 功能特性

- 🌍 支持中文（zh-CN）和英文（en-US）两种语言
- 🔄 实时语言切换，无需刷新页面
- 📱 响应式设计，支持移动端
- 🎨 使用 Tailwind CSS 和 daisyUI 组件库

## 项目结构

```
src/
├── contexts/
│   └── LocaleContext.tsx      # 国际化上下文
├── components/
│   └── LanguageSwitcher.tsx   # 语言切换器组件
├── locales/
│   ├── zh-CN.ts              # 中文语言包
│   └── en-US.ts              # 英文语言包
├── layouts/
│   └── index.tsx             # 主布局（已集成国际化）
├── pages/
│   └── index.tsx             # 首页（已集成国际化）
└── app.tsx                   # 应用根组件
```

## 按页面组织与命名规范（推荐）

当页面较多时，建议使用“页面命名空间 + 目录拆分”的组合策略，保证可读性与可维护性。

- **命名约定（Key 前缀）**
  - 页面级：`page.<routeName>.*`，如：`page.home.title`、`page.docs.search.placeholder`
  - 组件级：`comp.<ComponentName>.*`，如：`comp.UserTable.empty`
  - 布局/通用：`common.*` 或 `layout.*`，如：`common.save`、`layout.nav.home`
  - 表单/校验：`form.<scope>.*`，如：`form.login.username`、`form.login.password.required`


## 使用方法

### 1. 在组件中使用国际化

```tsx
import { useIntl } from 'react-intl';

export default function MyComponent() {
  const intl = useIntl();
  
  return (
    <div>
      <h1>{intl.formatMessage({ id: 'my.title' })}</h1>
      <p>{intl.formatMessage({ id: 'my.description' })}</p>
    </div>
  );
}
```

### 2. 添加新的语言包条目

在 `src/locales/zh-CN.ts` 和 `src/locales/en-US.ts` 中添加新的键值对：

```tsx
// zh-CN.ts
export default {
  'my.title': '我的标题',
  'my.description': '我的描述',
  // ... 其他条目
};

// en-US.ts
export default {
  'my.title': 'My Title',
  'my.description': 'My Description',
  // ... 其他条目
};
```

### 3. 语言切换

用户可以通过页面右上角的语言切换器在中文和英文之间切换。切换是即时的，无需刷新页面。

## 技术实现

- **react-intl**: 提供国际化核心功能
- **React Context**: 管理语言状态
- **TypeScript**: 提供类型安全
- **Tailwind CSS**: 样式设计

## 扩展支持

### 添加新语言

1. 在 `src/locales/` 目录下创建新的语言文件（如 `ja-JP.ts`）
2. 在 `src/contexts/LocaleContext.tsx` 中添加新语言支持
3. 在 `LanguageSwitcher` 组件中添加新语言选项

### 数字和日期格式化

```tsx
import { useIntl } from 'react-intl';

const intl = useIntl();

// 数字格式化
const formattedNumber = intl.formatNumber(1234.56);

// 日期格式化
const formattedDate = intl.formatDate(new Date(), {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
```

## 注意事项

1. 所有用户可见的文本都应该使用国际化函数包装
2. 语言包键名应该具有描述性，便于维护
3. 切换语言后，状态会保存在内存中，刷新页面后会重置为默认语言（中文）
