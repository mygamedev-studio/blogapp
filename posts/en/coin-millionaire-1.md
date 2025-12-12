---
title: CoinMillionaire (1)
subtitle: My First Game, Falling into the Swamp of Lag
date: 2025-12-09
tags:
  - blog
  - FlameEngine
---

### My First Game, Falling into the Swamp of Lag

Hello! I'm 'MyGameDev', recording my game development journal. Today, I'd like to tell you the story of developing **CoinMillionaire**, the first game I made with my own hands. I started ambitiously, but the result was disastrous frame drops...

### Game Link

<BannerLink href='https://play.google.com/store/apps/details?id=com.mygame.CoinMillionaire' text='CoinMillionaire' imageSrc='/images/coin-millionaire/icon.png'/>

### Game Concept: Simple but Addictive!

This game is my first project started with Unity. The concept was very simple.

It's a way to collect money by catching falling coins with a bag of the same color. If you catch it with a different color bag, money is deducted, and if you drop it on the floor, health is reduced. It's an infinite loop casual game where you move on to the next stage when you reach a set target amount.

The difficulty increases as the speed of falling coins increases and the spawn interval shortens.

### Three Special Items

I also added three items to add fun to the game.

- **Bomb:** If you catch it, 1/3 of your total health is cut. (Watch out!)
- **Clock:** All objects slow down for 5 seconds. (Great item!)
- **Meat:** Recovers 1/10 of your total health. (Recovery item!)

### Unity Development, Thought It Was Smooth but...

I organized a total of 5 scenes in Unity to make this game.

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

Whenever a stage was cleared, it went from the `Game Scene` to the `Clear Scene`, and when starting the next stage, I designed it to **delete all objects in the existing game scene and load a new game scene**. Until then, I didn't know this method would be a problem.

### The Swamp of Frame Drops: In Search of the Cause...

As the game progressed, serious **frame drops (screen stuttering)** occurred. It was to the point where gameplay was impossible.

### Garbage Collector (GC) Problem?

Since many objects are created and disappear, I thought lag was occurring at the timing when the garbage collector (GC) runs. So, I modified the code to reuse objects by introducing **Object Pooling**.

But the problem did not improve.

### Mobilizing Monitoring

I used Unity's Profiler feature to check everything including memory usage, CPU occupied processes, Draw Calls, etc. I tried this and that, but in the end, I couldn't find the fundamental cause of the problem.

Actually, I still don't know for sure what the problem was... (If you know, please leave a comment on X 😭)

### Declaring Project Suspension, Deciding to Change Engines

All this process was right before registering the game on the Google Play Store and proceeding with a closed test. I judged that it would be meaningless to proceed with the test as is.

I boldly decided to stop the project and **overhaul the game engine**. Because of this one game, I became a game geek betrayed by Unity.

The Google Play Store registration process will be covered in detail in another post.

In the next post, I will tell you the story of how I abandoned Unity and met a savior called 'Flame Engine' and proceeded with development!
