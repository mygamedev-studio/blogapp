---
title: Where to Deploy the Blog?
subtitle: "Blog Deployment War: From GitHub Pages to Vercel (feat. Bill Shock Prevention Measures)"
date: 2025-11-20
tags:
  - blog
  - nextjs
---

### "Blog Deployment War: From GitHub Pages to Vercel (feat. Bill Shock Prevention Measures)"

Hello! I'm a developer who has completed the skeleton of a blog with Next.js and is now facing the final step, 'Deploy'. In fact, I went through a lot of worries and trial and error alone in this process. I share with you the conclusions I reached after almost having a debate battle with my AI friend next door.

### Hosting Service Decision? It Was More Complicated Than I Thought!

At first, I thought I could just upload the code to GitHub and use GitHub Pages without much thought. But my blog is a game development log, and I had to prepare for the case where game traffic would surge. The journey to find the optimal hosting service that can be operated stably without worrying about costs began.

There are four services I considered.

1. **GitHub Pages:** The most basic.
2. **Netlify:** The powerhouse of automated deployment.
3. **Cloudflare Pages:** The emerging powerhouse of unlimited bandwidth.
4. **Vercel:** Next.js official hosting service.

### Comparison of Pros and Cons by Service (feat. Conversation with AI Friend)

I compared the pros and cons and deployment methods based on the free plan of each service. (I bothered my AI friend quite a bit to make this table.)

| Item | GitHub Pages | Netlify | Cloudflare Pages | Vercel |
| --- | --- | --- | --- | --- |
| **Price** | $0 | $0 | $0 | $0 |
| **Build Time** | No limit | 300 mins/month | 500 times/month (Unlimited time) | 100 hours/month |
| **Bandwidth** | 100GB/month | 100GB/month | **Unlimited** | 100GB/month |
| **DDoS Protection** | Basic provided | Built-in auto protection | **Powerful Cloudflare protection** | Built-in auto protection |
| **Deployment Method (Automation)** | **GitHub Actions required** | **Auto build on Git push** | **Auto build on Git push** | **Auto build on Git push** |
| **Bill Shock Risk** | Low (Service restricted when limit exceeded) | **Exists** | **None (Unlimited)** | **Exists** |
| **Optimization** | General static site | General | Cloudflare infrastructure | **Optimized for Next.js** |

### The Core of the Worry: How to Avoid Bill Shock

Netlify and Vercel offer powerful features and convenience, but there was a risk of bill shock if traffic exceeding the limit (especially malicious traffic like DDoS attacks) occurred.

So I asked my AI friend. "Is there a way to run a blog without worrying about fees?"

The answer was **Cloudflare**. Unlimited bandwidth! What an attractive word!

But my blog was made with Next.js, and the fact that Vercel is most optimized for Next.js kept bothering me. I had to consider performance, development experience, and SEO. GitHub Pages also had the hassle of setting up GitHub Actions separately for automatic deployment.

### Conclusion: A Hybrid Strategy to Catch Two Birds with One Stone!

After much thought, I found the optimal combination.

1. **Blog (Next.js):** Deploy to **Vercel**. Since performance and SEO are important for a blog, I make the most of Vercel's performance optimized for Next.js. It is very convenient as it automatically builds on Git push. Vercel's free limit is sufficient for general blog traffic.
2. **Flutter Game:** Since games have large file sizes and traffic is likely to surge, deploy to **Cloudflare Pages** as a separate project. Thanks to unlimited bandwidth, there is no worry about fees even if the game becomes a hit (?). This also automatically builds on Git push.

This way, the blog performs at its best, and the game can be serviced stably.

Finally, my own game development log blog is ready to come out to the world!
I have linked the GitHub repository of this blog below.
Those who are interested, please refer to it.

<div className="flex justify-center">
  <a href='https://github.com/mygamedev-studio/blogapp/' target='_blank' className="no-underline">
    <button className="bg-slate-800 hover:bg-slate-600 text-white px-8 rounded-md text-lg transition duration-300 shadow-inner shadow-slate-700 flex items-center justify-center gap-3 cursor-pointer">
      <img src='/images/logo.png' className="h-8 w-8" />
      <p>GitHub Repository🔗</p>
    </button>
  </a>
</div>
