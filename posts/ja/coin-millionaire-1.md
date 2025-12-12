---
title: CoinMillionaire (1)
subtitle: 自作初ゲーム、カクツキの沼にハマる
date: 2025-12-09
tags:
  - blog
  - FlameEngine
---

### 自作初ゲーム、カクツキの沼にハマる

こんにちは！ゲーム開発日誌を記録中の「MyGameDev」です。今日は私が初めて自分の手で作ったゲーム、**CoinMillionaire**の開発記をお話ししようと思います。野心的に始めましたが、結果は悲惨なフレームレート低下でした...

### 実際のゲームリンク

<BannerLink href='https://play.google.com/store/apps/details?id=com.mygame.CoinMillionaire' text='CoinMillionaire' imageSrc='/images/coin-millionaire/icon.png'/>

### ゲームコンセプト：シンプルだけど中毒性あり！

このゲームはUnityで作り始めた私の最初のプロジェクトです。コンセプトは非常にシンプルでした。

上から落ちてくるコインを同じ色の袋で受け止めてお金を集める方式です。違う色の袋で受け取るとお金がマイナスになり、床に落とすと体力が削られます。決められた目標金額を達成すると次のステージに進む無限ループカジュアルゲームです。

難易度はコインが落ちる速度が速くなり、スポーン間隔が短くなる方式で上がります。

### 3つの特別なアイテム

ゲームの面白さを増すために3つのアイテムも追加しました。

- **爆弾：** キャッチすると全体力の1/3が削られます。（注意！）
- **時計：** 5秒間すべてのオブジェクトの速度が遅くなります。（神アイテム！）
- **肉：** 全体力の1/10を回復させてくれます。（回復アイテム！）

### Unity開発、順調かと思ったが...

私はこのゲームを作るためにUnityで計5つのシーン（Scene）を構成しました。

<div className="grid grid-cols-3 gap-4">
  <div className="flex flex-col items-center">
    <p className="text-center font-bold !m-0">Main Menu Scene</p>
    <img src="/images/coin-millionaire/home-screen.png" style='margin:0;' alt="Main Menu Scene"/>
  </div>
  <div className="flex flex-col items-center">
    <p className="text-center font-bold !m-0">Tutorial Scene</p>
    <img src="/images/coin-millionaire/tutorial-screen.png" style='margin:0;' alt="Tutorial Scene"/>
  </div>
  <div className="flex flex-col items-center">
    <p className="text-center font-bold !m-0">Game Scene</p>
    <img src="/images/coin-millionaire/game-screen.png" style='margin:0;' alt="Game Scene"/>
  </div>
  <div className="flex flex-col items-center">
    <p className="text-center font-bold !m-0">Clear Scene</p>
    <img src="/images/coin-millionaire/clear-screen.png" style='margin:0;' alt="Clear Scene"/>
  </div>
  <div className="flex flex-col items-center">
    <p className="text-center font-bold !m-0">Game Over Scene</p>
    <img src="/images/coin-millionaire/gameover-screen.png" style='margin:0;' alt="Game Over Scene"/>
  </div>
</div>

ステージをクリアするたびに`ゲームシーン`から`クリアシーン`に移り、次のステージを始める時は**既存のゲームシーンのすべてのオブジェクトを消して（削除）新しいゲームシーンをロード**する方式で設計しました。この時まではこの方式が問題になるとは思いませんでした。

### フレームレート低下の沼：原因を探して...

ゲームを重ねるごとに深刻な**フレームドロップ（画面のカクツキ）**が発生しました。ゲームプレイが不可能なほどでした。

### ガベージコレクタ（GC）の問題？

オブジェクトがたくさん生成されては消えるので、おそらくガベージコレクタ（GC）が作動するタイミングでラグが発生するのだと思いました。そこで**オブジェクトプーリング（Object Pooling）**を導入してオブジェクトを再利用するようにコードを修正しました。

しかし問題は改善されませんでした。

### モニタリング総動員

Unityのプロファイラー機能を使用してメモリ使用量、CPU占有プロセス、ドローコール（Draw Call）などすべてを確認してみました。あれこれやってみましたが、結局問題の根本的な原因を見つけられませんでした。

実は今も何が問題だったのか確実にはわかりません...（ご存知の方、Xでコメントお願いします 😭）

### プロジェクト中断宣言、エンジン交代を決心する

このすべての過程がGoogle Playストアにゲームを登録して非公開テストを進める直前でした。このままテストを進めても意味がないと判断しました。

私は果敢にプロジェクトを中断し、**ゲームエンジンを乗り換えることに決定**しました。このゲーム一つのせいでUnityに裏切られたゲームオタクになったわけです。

Google Playストア登録手続きは別のポストで別途詳しく扱うようにします。

次のポストでは私がUnityを捨てて「Flame Engine」という救世主に出会い、どのように開発を進めたのかストーリーをお聞かせします！
