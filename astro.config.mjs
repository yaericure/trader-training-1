// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/trader-training-1',
  integrations: [
    starlight({
      title: '頂尖操盤手的養成計畫 1',
      description: '建立你的獲利模型:交易金字塔逐層拆解,從心智地基到策略工具箱。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css', './src/styles/sidebar-num.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        { label: '交易金字塔：寫給讀者的話', slug: 'unit00' },
        {
          label: '交易哲學與心智基礎',
          items: [
            { label: '交易金字塔模型導論', slug: 'unit01' },
            { label: '交易者的三階段與成長步驟', slug: 'unit02' },
            { label: '認識大腦如何影響你的交易', slug: 'unit03' },
          ],
        },
        {
          label: '交易金字塔逐層拆解',
          items: [
            { label: '你自己與自我承諾：金字塔的地基', slug: 'unit04' },
            { label: '交易紀律與資金管理', slug: 'unit05' },
            { label: '風險控管與三項簡單規則', slug: 'unit06' },
            { label: '系統參數：建立你的方法體系', slug: 'unit07' },
            { label: '形成自己的交易系統', slug: 'unit08' },
            { label: '實戰操作與獲利虧損心理', slug: 'unit09' },
          ],
        },
        {
          label: '停損紀律與交易教練',
          items: [
            { label: '執行停損的思考', slug: 'unit10' },
            { label: '你需要一個交易教練', slug: 'unit11' },
          ],
        },
        {
          label: '進場方法與市場型態',
          items: [
            { label: '進場交易的基本原則', slug: 'unit12' },
            { label: '市場輪廓理論與價格未延續型態', slug: 'unit13' },
            { label: '期貨、選擇權與瞬間急漲急跌走勢', slug: 'unit14' },
          ],
        },
        {
          label: '策略工具箱',
          items: [
            { label: '選擇權策略', slug: 'unit15' },
            { label: '10 種期貨策略', slug: 'unit16' },
            { label: '我的交易系統', slug: 'unit17' },
            { label: '交易系統與運用時機', slug: 'unit18' },
          ],
        },
        {
          label: '迷思突破與實戰案例',
          items: [
            { label: '破除市場迷思與成功交易 10 步驟', slug: 'unit19' },
            { label: '美英市場中的低風險交易機會', slug: 'unit20' },
            { label: '一場選擇權交易競賽實戰複盤', slug: 'unit21' },
          ],
        },
        { label: '結語:理解市場如何運作', slug: 'unit22' },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
