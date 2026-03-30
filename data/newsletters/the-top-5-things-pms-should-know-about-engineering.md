---
title: "The top 5 things PMs should know about engineering"
subtitle: "Guest post by Justin Gage, writer of Technically and growth at Retool"
date: "2021-12-16"
type: "newsletter"
tags: ["engineering", "design", "leadership", "newsletter", "product-management", "analytics"]
word_count: 2385
---

*👋 Hey, [Lenny](https://twitter.com/lennysan) here! Welcome to the ✨ **bonus free edition**✨ of my weekly newsletter. Each week I tackle reader questions about building product, driving growth, working with humans, and anything else that’s stressing you out about work. If you’re not a subscriber, here’s what you missed this month:*

1. [What is a good payback period](https://www.lennysnewsletter.com/p/payback-period)
2. [What is product management](https://www.lennysnewsletter.com/p/what-is-product-management)
3. [The most common pitfalls of new product managers](https://www.lennysnewsletter.com/p/product-manager-pitfalls)
4. [The most important consumer metrics to track](https://www.lennysnewsletter.com/p/the-most-important-consumer-metrics)

> ## Q: How do I become a more technical PM?

As you may know, [I took a crack at this question](https://www.lennysnewsletter.com/p/getting-more-technical) a few months ago, and that post that turned out to be one of my all-time most popular posts. But considering how often I still get this question—clearly, questions remain. Also, with the rise of Web3, fintech, data infrastructure companies, and other deeply technical products, it’s only becoming more important for PMs to build their technical chops.

To help you develop those chops, I’ve pulled in [Justin Gage](https://randomshit.dev/), author of the fantastic [Technically](https://technically.dev/) newsletter (fittingly described as “a place for not software engineers to learn about software engineering”), to share his highly actionable tips on becoming a more technical PM. In my previous post on the subject, I linked to Justin’s newsletter numerous times, and that’s because he’s especially talented at explaining deeply technical subjects clearly and directly. We’re super-lucky to have Justin share his wisdom with us. And if you want to go deeper, definitely subscribe to [Technically](https://technically.dev/).

## The top 5 things PMs should know about engineering

*by [Justin Gage](https://randomshit.dev/)*

There’s an old debate about how technically minded product managers should be. On the one hand, understanding your developers, their process, and their work is part and parcel of shipping products effectively. On the other hand, you don’t want to step on your engineers’ toes, and getting too deep into the codebase isn’t a great use of your time. One point we can all agree on, though: a strong technical knowledge foundation means a more effective PM. So in that spirit, this post will cover the top five technical things PMs should know.

If you don’t understand some of the ideas here, that’s fine! The more you work with engineers, the more comfortable you’ll get. And of course, every company is different; some companies hire only super-technical PMs, while others prefer generalists, or even design-focused ones. But no matter what, the more you understand, the better you’ll do.

## **Learn #1: Your company’s tech stack**

**What to know:** What technologies your company’s app, site, and infrastructure use. For example, [Technically.dev](https://technically.dev/) is built with React and Next.js, deployed on Vercel, and written in HTML, CSS, and JavaScript.

![Image from The top 5 things PMs should know about engineering](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/d37cfdbc-e3d1-4cab-86c5-e76da0bc3557_3836x4000.png)

**Why it matters:** Choices of programming languages, frameworks, and infrastructure all come with important trade-offs that impact what might make a project something that could take a few hours, or a few weeks. If you’re using a NoSQL database, you can skip migrations when adding new features, but you might run into data quality issues. If parts of the stack are legacy, you may want to avoid projects that touch them. But perhaps more qualitatively, speaking the language of your engineers helps build trust and improves communication.

**How to learn about it:** Do as much snooping as you can, and then just ask your team.

First, look at your company’s GitHub repositories. You should be able to see what kinds of programming languages are in there, as well as any files or notes specific to what frameworks the app relies on. Here’s a screenshot of [Supabase’s main repo](https://github.com/supabase/supabase), an open source Firebase competitor. Note how GitHub tells you what languages the code is in (on the bottom right):

![Image from The top 5 things PMs should know about engineering](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/a561381a-c242-4e06-b701-8776399361ee_1600x715.png)

Beyond languages, the structure of your team’s project might indicate what frameworks they’re using. If you see some files prepended with .next, your team is probably using NextJS. If you see “import { useState } from ‘React’ ” in any files, your team is probably using React. Reading through code files isn’t too fun and is not the best use of your time, but peeping at a few can at least give you some grounding.

After you’ve done your snooping work to impress them, just ask one of your developers.

## **Learn #2: Sensitive points in the codebase**

**What to know:** Which pieces of the codebase—logical or procedural—are tangled, sensitive, or otherwise intransigent.

**Why it matters:** Knowing the hardest parts of the app to work on can help you plan more effectively and avoid project delays. If updating the marketing site copy takes a few days because [Gatsby](https://www.gatsbyjs.com/) (a popular JS framework) requires a re-deploy to change content, you might de-prioritize that work in favor of something that you can move on quicker. There might not be much you can *do* about this as a PM, but it’s useful knowledge to have and can help you allocate resources more effectively.

**How to learn about it:** Talk to fellow PMs about projects that went surprisingly quickly or surprisingly slowly. A personal example: after doing some work on improving the onboarding experience, I was frustrated with how long things were taking. I eventually learned that the section of our codebase that dealt with onboarding was poorly organized and very difficult to test locally. That explained it! And of course, ask your engineers; they’ll know better than anyone.

## **Learn #3: Your build and deploy process**

**What to know:** How your app gets built and deployed to your users, what’s manual and what’s automated, and how long it usually takes.

**Why it matters:** Writing code is only half the battle—you need to get it to your users by deploying the changes to production. Larger teams and more complex apps can have multi-day deployment processes that may delay projects and add to lead time. Knowing these pressure points can also help you more effectively batch features and understand what’s worth doing when.

A good example is how your company distributes cloud builds vs. on-premise builds. If it takes a while to get newer versions of your software to your on-premise customers, as a PM, you might try to batch a few features on a tighter timeline so that your team can bundle them together for a single release. For small updates like copy changes, you might feel comfortable doing them yourself if the release process is easy, but may time them along with another PM’s release if deploys take longer.

**How to learn about it:** Ask your developers, but you can also do some legwork before then by looking at pull requests (PRs) that have been merged and what the GitHub checks (or whatever else your version control system is) run for builds. Here’s an example from Supabase; it looks like the team is using [Vercel](https://vercel.com/) to deploy the app, since the Vercel bot commented on the PR with links to deploy previews.

![Image from The top 5 things PMs should know about engineering](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/ca385698-5dea-43df-9e40-d9a103dc339f_1600x812.png)

This is good to know—after doing some digging on Vercel, you might navigate to its site and learn that its product makes deploys quick and easy, usually sub-5 minutes. That information may come in handy later on when you’re wondering if you can get that copy change in before the deadline, or if asking your engineer for a quick change is going to be too bothersome. To find open PRs on your team’s repositories in GitHub, just navigate to the repository, click on the “Pull Requests” tab, and click on any one.

If your app also has customers that deploy it on-premise, you’ll want to get information on how upgrades work (do customers get them automatically? how often does the team recommend updating?), how far behind cloud they are, and how difficult one-off builds are.

## **Learn #4: How to contribute code**

**What to know:** How to make code changes and open a PR, specifically for small, self-contained changes like updating copy or changing colors.

**Why it matters:** Great products have great copy, and you shouldn’t have to rely on your engineers to fix typos. Being able to make small changes yourself, be it copy or fixing an errant border radius (generally frontend stuff), will result in more polished products shipped faster. Don’t bite off more than you can chew, though; keeping the code you contribute to smaller copy- or design-related tweaks will win you points.

**How to learn about it:** As you get started, sit down with your favorite engineer on your team and ask them to walk you through how to contribute code. It’s going to look *something* like cloning your app’s repository locally, running it locally, making a fix and committing your changes, and then opening a PR in GitHub. You can even cheat and edit some code directly in GitHub, as long as it’s low-risk (like this markdown file):

![Image from The top 5 things PMs should know about engineering](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/2b3c1d8a-cbda-4bc0-94e9-5569e63799d6_1600x1089.png)

Learning how to code is obviously beyond the scope of this post. Personally, I got my start by studying some slides from a Python class in college (that I *wasn’t* taking), brushed up with [Codecademy](https://www.codecademy.com/), and then ended up building full-stack apps in my free time over the course of my career. If your goal is to be dangerous, focus on your team’s primary programming language and set a reasonable goal with a developer. Maybe it’s updating the copy on the website or something simple. The hardest part tends to not be the code itself but rather the process around the code, like handling version control and CI (continuous integration).

## **Learn #5: Technical basics 101**

**What to know:** Outside of your company’s codebase, you need a basic understanding of how apps, data, and infrastructure work. Beyond being able to code, a conceptual understanding of what pieces come together to build applications is table stakes.

**Why it matters:** A lot of what your developers tell you will sound like complete nonsense without the right technical foundation. And whether you know how to code or not, you’ll want to know what your developer means when they say they can keep this feature to a “frontend change only.”

**How to learn about it:** There’s no teacher as valuable as experience. The reality is that knowing how to code—specifically, how to build apps that relate to your company’s stack—is the best way to be more technically literate. But that takes a long time, and simply isn’t for everyone! Thankfully, there are some shortcuts you can take in the meantime. A few that have worked for me:

#### **1. Read engineering blogs**

They’re sometimes surprisingly easy to understand, and can get you used to the terms engineers use daily. I like reading [Segment’s](https://segment.com/blog/engineering/), [Slack’s](https://slack.engineering/), [Netflix’s](https://netflixtechblog.com/), and [Stitch Fix’s](https://multithreaded.stitchfix.com/). Teams usually write these for recruiting purposes—look at all the cool stuff we’ve built!—but they can still contain useful base knowledge. Much of being technically literate is understanding how software is used *in practice*, and these blogs are great for that.

#### **2. Look up everything you don’t know**

Technical writing and speak is built on layers and layers of concepts; you need to start from the bottom to understand the top. Search for terms you don’t understand rather than just glossing over them. There aren’t very many good central resources online for going from 0 to 1 in being technically literate, but many individual concepts have useful explainers. A nice example is [Duo Security’s guide to SAML](https://duo.com/blog/the-beer-drinkers-guide-to-saml). Search enough and, with a discerning eye, you’ll find writing styles you like.

#### **3. Find a developer friend on the outside**

Chances are you’re friends with a developer outside your company; buy them a coffee! Come with some questions prepared. It’s usually unproductive to have them dump their knowledge on you, but a series of pointed questions around a particular topic can lead to a fruitful conversation. For example, when I’m writing newsletter issues, sometimes I’ll grab 30 minutes with an engineer friend to make sure I fully understand a topic I’m writing about. Doing your research beforehand to make sure you have good questions is the key.

Aside from these, though, [subscribe to Technically](https://technically.substack.com/subscribe)—it’s made for exactly you :)

*Thanks, Justin!*

## **🔥 Featured job openings**

1. **Mynd:** [Product Manager, Buying Services](https://www.lennysjobs.com/jobs/5acd93b4-3e73-45f6-894f-a701509a81ea) (Remote-US)
2. **OpenPhone:** [Senior Product Manager](https://lennys-jobs.pallet.xyz/jobs/a4e59b3d-06a3-4f89-a340-b8bd5f8aee97) (Remote-US)
3. **TaxBit:** [Product Lead](https://lennys-jobs.pallet.xyz/jobs/4a453e47-d6c8-4241-becc-763fe8097d97) (Seattle)
4. **Orbiit:** [Director of Product Management](https://lennys-jobs.pallet.xyz/jobs/be8a2c08-274c-4ebf-b20e-79439dc7b70e) (NYC)
5. **Relish Works:** [Associate Product Manager](https://lennys-jobs.pallet.xyz/jobs/e6008616-d0ba-4765-ab3a-8eec826cd044) (Remote-US)
6. **OnFrontiers:** [UI/UX Designer](https://lennys-jobs.pallet.xyz/jobs/c5c630a8-eef4-4ee2-b5c0-f454921f70ff) (Remote-US)
7. **OnFrontiers:** [Product Manager](https://lennys-jobs.pallet.xyz/jobs/08ad9dfd-0a57-4679-8e59-5fb49545eedf) (Remote-US)
8. **Panther:** [Product Manager (Core)](https://lennys-jobs.pallet.xyz/jobs/e5d8025a-078b-48f5-b083-67978ff06b89) (Remote-Global)
9. **The.com:** [Software Engineer](https://lennys-jobs.pallet.xyz/jobs/e3ea6743-db26-4796-bdfd-3a6885b7b3c3) (SF)
10. **Relive:** [Product Manager](https://lennys-jobs.pallet.xyz/jobs/7a4300f0-d46e-43a4-a8db-dfec28c4e511) (Remote-EU)
11. **GetSetUp:** [Product Lead, Discovery](https://lennys-jobs.pallet.xyz/jobs/522f84e1-0499-4ddd-975a-f996f648fa0a) (Remote-Global)

*Browse more open roles, or add your own, at [Lenny’s Job Board](https://lennysnewsletter.com/jobs).*

#### **How would you rate this week's newsletter? 🤔**

[Legend](https://a.sprig.com/672d7967625042535f477e7369643a3434363132?r=5) • [Great](https://a.sprig.com/672d7967625042535f477e7369643a3434363132?r=4) • [Good](https://a.sprig.com/672d7967625042535f477e7369643a3434363132?r=3) • [OK](https://a.sprig.com/672d7967625042535f477e7369643a3434363132?r=2) • [Meh](https://a.sprig.com/672d7967625042535f477e7369643a3434363132?r=1)

**If you’re finding this newsletter valuable, consider sharing it with friends, or subscribing if you haven’t already.**

Sincerely,

Lenny 👋
