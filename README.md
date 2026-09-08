# Portfolio — Thach (Peter) Dang

Personal portfolio site. Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**. Dark/light theme, fully responsive.

## Chạy local

```bash
npm install        # lần đầu (đã cài sẵn)
npm run dev        # http://localhost:3000
```

## Build & kiểm tra

```bash
npm run build      # build production, kiểm tra type + lint
npm start          # chạy bản production đã build
```

## Sửa nội dung

Tất cả nội dung nằm ở **một file duy nhất**:

```
src/lib/data.ts
```

Trong đó có: thông tin cá nhân, số liệu (stats), kinh nghiệm, impact, tech stack, giải thưởng, học vấn, chứng chỉ.
Sửa file này là toàn bộ trang tự cập nhật — không cần đụng vào code UI.

> ⚠️ Nhớ cập nhật `github` trong `src/lib/data.ts` nếu username GitHub khác `thachdh`.

## Cấu trúc

```
src/
├─ app/
│  ├─ layout.tsx      # metadata (SEO/OG) + font + chống nháy theme
│  ├─ page.tsx        # bố cục các section (hero, about, experience, …)
│  └─ globals.css     # design tokens + theme sáng/tối
├─ components/
│  ├─ site-nav.tsx    # thanh nav sticky + menu mobile + nút theme
│  └─ theme-toggle.tsx
└─ lib/
   └─ data.ts         # ← NỘI DUNG SỬA Ở ĐÂY
```

## Deploy lên Vercel (khuyến nghị)

1. Push repo này lên GitHub.
2. Vào https://vercel.com → **New Project** → import repo.
3. Vercel tự nhận Next.js, bấm **Deploy**. Xong — có domain `*.vercel.app` miễn phí.
4. (Tùy chọn) Gắn custom domain trong Settings → Domains.

Hoặc deploy bằng CLI:

```bash
npm i -g vercel
vercel           # preview
vercel --prod    # production
```
