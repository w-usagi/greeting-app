<!-- 
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-->

# さいならっきょうゲーム

## コメント
#### 松田好花さんに届け！    
ということでクソゲー好きの松田さんのためにゲームを作ってみました。  
(自己満足で作成しています)    
(B案の画像は勝手に使用しています。怒られたら差し替えます。ラジオでお知らせくださいm(_ _)m)    
https://w-usagi.github.io/greeting-app/

## 概要
「さいな…」なららっきょうボタン、
「こんにち…」ならわんこそばボタンを押すゲーム。

## ランキングについて

ランキングはブラウザの localStorage を利用して保存しています。    
そのため、ランキングデータはプレイしている端末・ブラウザごとに管理されます。

他のユーザーとランキングは共有されません。

## 更新履歴
※ version管理はかなりふんわりです(いくつかコミットないです)

### v2.0.0
- スマホ表示対応
- 横向きプレイ対応
- レスポンシブUI調整 ?

### v1.2.0
- ゲーム開始前カウントダウン追加
- ゲーム中UI整理
- 戻るボタン追加

### v1.1.0
- UI改善
- 吹き出しデザイン調整
- キャラクター画像追加
- ランキング表示改善

### v1.0.0
- 60秒ゲーム実装
- ランダム出題実装
- スコア機能実装
- localStorageランキング実装
- GitHub Pages公開

## 使用技術
- React
- Vite

## 起動方法

```bash
npm install
npm run dev