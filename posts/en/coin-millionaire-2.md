---
title: CoinMillionaire (2)
subtitle: "Unity Traitor's Struggle: Learning Flame Engine"
date: 2025-12-12
tags:
  - blog
  - FlameEngine
---

### Unity Traitor's Struggle: Learning Flame Engine

Hello! I'm 'MyGameDev', who left to find a new engine after tasting the bitterness of Unity. Today, I will honestly share how I started studying **Flame Engine**, which became my savior, and what was good and difficult during the development process.

---

### Starting Flame Engine Study: No Materials, But There is Light!

Since Flame Engine is not as popular as Unity, tutorials and materials were ridiculously scarce. To make matters worse, many of the existing materials were quite old and often did not match the latest version.

In the meantime, there was a YouTube playlist like a ray of light that caught my eye!

**Referenced YouTube Tutorial (English):**  
  <BannerLink href='https://www.youtube.com/playlist?list=PL_D-RntzgLvYIxI_Kuwy1f7HedxTF2GPK' text='2D Flutter Game With Flame' imageSrc='https://i.ytimg.com/vi/nKDPT47unDo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCnAynqpToZPS9o-Vq64NPdhqN77g'/>

This tutorial was relatively up-to-date at the time (about a year ago), and it was very useful because it not only covered the Flame Engine but also included how Flutter and Flame exchange data (using packages like go_router, riverpod).

However, for this game, I decided to make the game only with pure Flame code, with the ambition of 'Making everything with only Flame Engine for study purposes!'.

### [Pros] Perfect Adaptation for Unity Developers!

What surprised me while using the Flame Engine was that the script structure was very similar to Unity, so adaptation was incredibly easy.

- **Similar Lifecycle:**
  - Flame's **`onLoad()`** functions almost the same as Unity's `Start()`
  - Unity's `Update()` is the same as **`update()`** in Flame
- **Component Based:** The method of placing objects (components) with the `addComponent()` method was similar to adding Components to GameObject in Unity. The method of defining game elements with positions by inheriting `PositionComponent` was very intuitive.
- **Easy Animation:** The process of making animations from sprite sheets (a single image combining multiple images) was also much simpler than Unity.
- **Fantastic Compatibility with Flutter:** The Flame Engine is ultimately a type of Flutter widget. Thanks to this, it was possible to use the game screen by wrapping it with other Flutter widgets. (e.g., Placing an ad banner on top of the game + Putting the game inside a widget)


``` dart
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            AdController(key: _adControllerKey, game: game),//광고위젯
            Expanded(
              child: Center(
                child: FittedBox(
                  child: SizedBox(
                    width: gameWidth,
                    height: gameHeight,
                    child: GameWidget(game: game),//게임위젯
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







### [Cons] The Swamp of Router and Sound

Of course, there were not only advantages. I ran into two big obstacles.

#### 1. Betrayal of Router Component

Like a Unity Scene, I wanted to load new initialized components for each stage while going back and forth between the game scene and the clear scene. However, Flame's `RouterComponent` had a method of keeping loaded components without deleting them from memory and calling them again. A catastrophe occurred where objects from before the stage clear remained in the next stage. This method felt like a usage similar to calling up a menu in an RPG game or returning to the game after checking the world map. This issue was not unique to me.

Issue Link: <a href='https://github.com/flame-engine/flame/issues/3367' target='_blank'>Flame issue 3367</a>

- **Solution:** Eventually, I gave up using the Router component and implemented it by manually deleting and recreating components. (Manual is the best after all...)

#### 2. Sound Delay Problem on Android

I used the `flame-audio` package to put background music and sound effects, but there was no problem on iOS or desktop versions, but **when building for Android, the sound became incredibly slow and even the entire game frame dropped**.

- **Solution:** This issue seemed to be a problem with Flame itself, and eventually, I solved it by changing to another audio package called **`flutter_soloud`**. (It was a bit complicated, but it worked!)

**Next Story...**

There were difficulties, but the process of making a game with Flame Engine was much more enjoyable than when using Unity. The method of controlling everything with code seemed to fit my development style well.

In the next post, I will select and talk about the parts I want to share with you from Coin Millionaire made with Flame Engine. Stay tuned!
````
