---
title: Blog Creation? Flutter? No, NextJS? Yes!!
subtitle: "Why I swerved from Flutter to Next.js"
date: 2025-11-19
tags:
  - blog
  - nextjs
---

### Why I Swerved from Flutter to Next.js

Hello! I'm a developer building this blog as my own hideout for game promotion. As I mentioned in my first post, I decided to build this website myself. It was a matter of pride.

At first, I intended to build the blog using **Flutter**, the technology I am most confident in and love. Flutter supports web builds, after all! However, I immediately ran into a huge, unexpected problem.

### The Shock and Horror of 30MB

I built a very simple one-page website with Flutter, but the resulting file size was nearly **30MB**.

"Is this... right?"

I doubted my eyes. It's not a game, just a simple blog page, and it's 30MB! Imagine if my blog became a hit and 100,000 visitors came in a day. The thought of all that capacity being consumed as traffic sent shivers down my spine. I felt like my wallet would be empty in an instant.

Content is the core of a blog, but I wondered if it should be this heavy. There was only one conclusion. **"I need to make the lightest web page possible!"**

### Static Websites, the Golden Rule of Blogs

The answer to creating a lightweight web page was a **'Static Website'**. A static website is a method where HTML files with fixed content are created in advance, and the files are shown as is when a user requests them.

The advantages of a static website were clear.

- **Insane Speed:** Loading speed is instantaneous because files are transferred directly from the server without complex calculations.
- **Perfect SEO:** Search engine crawlers can read HTML files perfectly, which is very advantageous for exposure in search results. (This is the lifeblood of a blog!)
- **High Security:** There is almost no threat of hacking because there is no database or server-side logic.

### Markdown and Automation, A Developer's Dream Come True

Also, I didn't want to access a complicated admin page for blog posting. The way I wanted was to write posts in **Markdown** files and just 'Push' these files to GitHub to automatically upload new posts to the blog. There is no more comfortable workflow for a developer!

### React and Next.js, The Tech Stack of Salvation

As a full-stack developer, I had experience with **React**. I turned my eyes to React with the thought, 'There's no reason not to use the technology I know!'

However, I knew that if I built a blog with pure React, it would become a dynamic website (CSR), which would be disadvantageous in terms of initial loading speed or search engine optimization (SEO). Search engine exposure is vital for a blog.

When I looked for ways to create a static website (SSG), I learned that using **Next.js** makes it very simple to create static pages based on React.

### Next.js vs. Pure React: A Full Comparison

I compared the main differences between building a blog with Next.js and pure React.

| Item | Next.js (Framework) | Pure React (Library) |
| --- | --- | --- |
| **Rendering Method** | SSG (Static), SSR (Server) | CSR (Client) |
| **SEO** | **Excellent** | Relatively Disadvantageous |
| **Initial Loading Speed** | **Very Fast** | Can be slow |
| **Routing** | File-based automatic configuration | Manual configuration after library installation |
| **Suitable Use** | Blogs, Shopping Malls, Websites | Web Applications, Dashboards |

The conclusion tipped towards Next.js. Although I had no experience using Next.js directly, I felt I could do it if it was at the level of making a blog. It was time to protect my pride as a web developer!

### Savior YouTube Channels I Referred To

I immediately jumped into the sea of YouTube tutorials. Among the countless videos, these two channels were a huge help to me. (Thank you!)

- pixegami https://www.youtube.com/watch?v=Hiabp1GY8fA
- smoljames https://www.youtube.com/watch?v=QIIc5EYSZpw&t=640s

Following these tutorials, I started building the skeleton of this blog. In the next post, I will share where I deployed this blog and why I chose that hosting service.
