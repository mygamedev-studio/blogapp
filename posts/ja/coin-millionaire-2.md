---
title: CoinMillionaire (2)
subtitle: "Unity裏切り者の孤軍奮闘：Flame Engineを学ぶ"
date: 2025-12-12
tags:
  - blog
  - FlameEngine
---
### Unity裏切り者の孤軍奮闘：Flame Engineを学ぶ

こんにちは！Unityの苦い味を見て新しいエンジンを探して旅立った「MyGameDev」です。今日は私の救世主となってくれた**Flame Engine（フレームエンジン）**をどのように勉強し始めたのか、そして開発過程でどんな点が良くて難しかったのかを正直に共有します。

---

### Flame Engine勉強開始：資料はないけど、光はある！

Flame EngineはUnityほど大衆的ではないため、チュートリアルや資料が圧倒的に不足していました。泣きっ面に蜂で、ある資料も時間がかなり経過したものが多く、最新バージョンと合わない場合が多々ありました。

そんな中、私の目に入ってきた一筋の光のようなYouTube再生リストがありました！

- **参考にしたYouTubeチュートリアル（英語）：**  
    https://www.youtube.com/playlist?list=PL_D-RntzgLvYIxI_Kuwy1f7HedxTF2GPK

このチュートリアルは当時基準（約1年前）でそれなりに最新資料であり、Flame Engineだけを扱うのではなく、FlutterとFlameがお互いにデータをやり取りする方式（go_router、riverpodのようなパッケージ使用）まで含んでいて非常に有用でした。

しかし、私は今回のゲームでは「勉強も兼ねてFlame Engineだけですべてを作ってみよう！」という覇気を振るい、純粋なFlameコードだけでゲームを作ることにしました。

### [良かった点] Unity開発者なら相性抜群！

Flame Engineを使用しながら驚いた点は、Unityのスクリプト構造と非常に似ていて適応がものすごく簡単だったということです。

- **類似したライフサイクル：**
    - Unityの`Start()`とほぼ同じ機能をするFlameの**`onLoad()`**
    - Unityの`Update()`はFlameでも同様に**`update()`**
- **コンポーネントベース：** `addComponent()`メソッドでオブジェクト（コンポーネント）を配置する方式は、UnityのGameObjectにComponentを追加するのと類似していました。`PositionComponent`を継承して位置を持つゲーム要素を定義する方式が非常に直感的でした。
- **Flutterとの幻想的な相性：** Flame Engineは結局Flutterウィジェットの一種です。おかげでゲーム画面を他のFlutterウィジェットで包んで使用することが可能でした。（例：広告バナーをゲームの上に乗せる＋ウィジェットの中にゲームを入れる）
```dart
    Widget build(BuildContext context) {
        return Scaffold(
            body: SafeArea(
                bottom: false,
                child: Column(
                    children: [
                        AdController(key: _adControllerKey, game: game), // 広告ウィジェット
                        Expanded(
                            child: Center(
                                child: FittedBox(
                                    child: SizedBox(
                                        width: gameWidth,
                                        height: gameHeight,
                                        child: GameWidget(game: game), // ゲームウィジェット
                                    ),
                                ),
                            ),
                        ),
                    ],
                ),
            ),
        );
    }
    ```
    
    コードを使用する際は注意が必要です。
    
- **簡単なアニメーション：** スプライトシート（複数の画像を合わせた一枚の画像）でアニメーションを作る過程もUnityよりはるかに簡単でした。

### [難しかった点] ルーターとサウンドの沼

もちろん長所ばかりあったわけではありません。二つの大きな難関にぶつかりました。

#### 1. ルーターコンポーネントの裏切り

Unityシーン（Scene）のようにゲームシーン、クリアシーンを行き来しながらステージごとに初期化された新しいコンポーネントをロードしたかったです。しかしFlameの`RouterComponent`は一度ロードされたコンポーネントをメモリから消さずに持っていて再度呼び出す方式でした。ステージクリア前のオブジェクトが次のステージにそのまま残っている大惨事が起きました。この方式はRPGゲームでメニューを呼び出したり、ワールドマップを確認して再びゲームに戻る方式と同じ活用法だと感じられました。

- **解決：** 結局ルーターコンポーネントの使用を諦め、コンポーネントを手動で消して再生成する方式で実装しました。（やっぱり手動が最高...）

#### 2. Androidでのサウンド遅延問題

`flame-audio`パッケージを使用して背景音楽と効果音を入れましたが、iOSやデスクトップバージョンでは何の問題もありませんでしたが、**Androidでビルドするとサウンドがものすごく遅くなり、ゲーム全体のフレームレートまで落ちる問題**が発生しました。

- **解決：** このイシューはFlame自体の問題と見られ、結局**`flutter_soloud`**という別のオーディオパッケージに変更して解決しました。（少し複雑でしたが動作はしました！）

**次の物語...**

困難もありましたが、Flame Engineでゲームを作る過程はUnityの時よりはるかに楽しかったです。コードですべてを制御する方式が私の開発傾向とよく合っていたようです。

次のポストでは私がFlame Engineで作ったCoinMillionaireから皆さんと共有したい部分を選んでお話ししますね。お楽しみに！
