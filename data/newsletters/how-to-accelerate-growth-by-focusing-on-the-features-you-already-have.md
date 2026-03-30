---
title: "How to accelerate growth by focusing on the features you already have"
subtitle: "Introducing the ARIA framework"
date: "2024-04-16"
type: "newsletter"
tags: ["growth", "design", "analytics", "leadership", "b2b", "newsletter"]
word_count: 4370
---

*P.S. Check out my **[PM recruiting service](https://www.lennysjobs.com/)** (helping you hire Sr. PMs and VPs), **[Lennybot](https://www.lennybot.com/)** (an AI chatbot trained on my newsletter posts, podcast interviews, and more), and my **[swag store](https://lennyswag.com/)****(great gifts for your favorite PM, or yourself!).*

Everyone gets excited about launching new features, but in my experience, most of a company’s growth comes from the less glamorous stuff: incremental and consistent optimization of the core product. Of course, you need to add new features and business lines over time, but there’s a lot of hate for micro-optimization product work, and I’m here to tell you that this work is important—maybe the most important.

Every major tech company, including [Facebook](https://www.youtube.com/watch?v=URiIsrdplbo), [Amazon](https://arc.net/l/quote/exmunezx), [Netflix](https://netflixtechblog.com/its-all-a-bout-testing-the-netflix-experimentation-platform-4e1ca458c15), [Airbnb](https://medium.com/airbnb-engineering/experiments-at-airbnb-e2db3abf39e7), [LinkedIn](https://www.linkedin.com/blog/engineering/ab-testing-experimentation/fine-tuning-premium-products-through-a-b-testing), [Uber](https://www.uber.com/blog/supercharging-a-b-testing-at-uber/), [TikTok](https://www.theguardian.com/technology/2022/oct/23/tiktok-rise-algorithm-popularity), and—as we’ve seen in recent newsletter issues—[Duolingo,](https://www.lennysnewsletter.com/p/the-secret-to-duolingos-growth) has long prioritized optimizing every square inch of their product. But surprisingly, I’ve never seen a great framework for how to think about this work. Until now.

Below, guest author [Ken Rudin](https://www.linkedin.com/in/kenrudin/) shares his home-grown **ARIA framework**. Ken’s background is bonkers: He was the first SVP of Products and Engineering at **Salesforce**, led the Growth and Analytics team at **Zynga**, was one of the earliest senior execs on the legendary growth team at **Facebook**, and went on to lead growth at **Google** (including leading growth for Google search, ads, cloud, and even their behavioral science work). Most recently, at **ThoughtSpot** (an AI-enabled analytics vendor) he helped transition their growth motion from a traditional sales-led B2B SaaS model to product-led growth. For more from Ken, make sure to follow him on [LinkedIn](https://www.linkedin.com/in/kenrudin/).

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/369636fb-7e54-4f19-bb93-82edd11170b6_4000x2000.png)

Ask most product teams how they plan to drive more growth, and you’ll frequently hear the same answer: we need more features. More features will make the product more useful, which will lead to more engagement and retention, which will lead to more revenue. Or so the thinking goes.

But in my experience, **you can drive significantly more growth by focusing on getting users to engage more with your** ***existing*** **key features and user flows**. I realized just how effective it can be to focus on improving the engagement of existing key features when I joined Google in 2015 to lead their growth team. At that time, the average Google Search user in the U.S. did only 12 searches per month (which shocked me—I probably do 12 searches before getting out of bed every morning! 🤓). We wanted to encourage users to search more, because more searches = more opportunities to show ads = more revenue.

Our analysis showed that searches whose results changed frequently (e.g. sports scores, weather, or movie times) were the stickiest searches—users who did those searches would repeat them often. But only about 15% of users were aware of these types of searches. So rather than building new features, we focused on building ways to raise awareness and engagement with the searches we already had. We used several approaches (discussed in the sections below), which together nearly doubled the number of users who did these types of searches—and translated into millions of dollars of incremental ad revenue. 💰

Of course, you need new features to address changing user needs and compete in the market, but most product teams significantly over-index on building new features. Thus, my goal for this post is to provide a framework for (1) identifying key features to double down on and (2) increasing engagement with those features, which will drive overall product growth.

### Why increasing engagement with existing key features is more impactful than launching new features

The most important features for a product are usually the ones that were built first. Once you get past a certain level of functionality, a lot of the new functionality on the roadmap often targets just a subset of users (e.g. power users) or supports use cases that are adjacent to the core use cases. So it’s a safer bet that you’ll drive more business impact by increasing engagement with a feature that has already been launched than one that’s still on the roadmap because it wasn’t critical enough to be prioritized.

Another reason to focus on existing features is that you probably have not squeezed the most utility for users, and therefore engagement, out of them yet. When you first release a feature, you’ll usually find that about 80% of the feature’s design works well but the other 20% doesn’t. Some users may get stuck on a step that they find confusing or takes significant effort, and don’t complete the flow, which means they actually get 0% of the feature’s value. For others, it means they use the feature less than they otherwise would, and therefore get less value. By focusing on improving that last 20%, you unlock the full 100% of the value for users.

I’ve applied the approach of focusing on increasing engagement with existing key features many, many times—with several Google products (including Search, YouTube, Google Cloud, and Google Ads), at [ThoughtSpot](https://www.thoughtspot.com/) (an analytics vendor I worked at, whose product allows you to analyze data using natural language and AI), and with several other venture-backed companies that I have the honor to advise. I can confidently say that product teams frequently, or even usually, drive more growth by optimizing engagement with existing key features than by launching new ones. And in an economic environment where engineering budgets and projects are being cut, getting more impact from work that’s already been done is even more critical.

If increasing engagement with existing key features frequently has more impact than adding new features, the next question is: How do we increase engagement in a structured, repeatable way?

### The ARIA framework

Product teams have lots of frameworks leading up to launching new features, including identifying user needs, defining solutions, and prioritizing them on a roadmap. But what about a framework for increasing the adoption of features *after* they’ve launched? It’s one thing to know that you should focus on optimizing existing features but another to know which features to focus on, and what to do to make them more successful.

When I’ve looked for a framework for increasing engagement with existing features, I’ve always come up empty-handed. That’s what led me to create the ARIA framework.

ARIA has four key principles: **Analyze**, **Reduce**, **Introduce**, and **Assist**:

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/c9e605e5-738d-477c-abba-e19c16af824f_2274x1196.png)

This isn’t a one-and-done process, however. The intent is not to choose a feature, go through the four principles once, and then move on to the next feature. Instead, it’s meant to be an ongoing process—sort of like having an implicit Repeat principle as the last step of the framework (though changing the name to ARIAR just doesn’t sound as good. 😁)

ARIA is certainly not a complete list of everything you can do to increase feature adoption, and it would be a waste of time to create such a list anyway, because people are always innovating new ways to make features more engaging. Instead, use the framework as a cheat sheet to help guide you.

### Principle #1: Analyze

First, you need to figure out which features to focus on. That means you need to analyze your data to identify which of your features are *most correlated with growth*, and then analyze the engagement levels of those features to highlight which features aren’t getting the user love they deserve.

#### 1.1 Identify key features correlated with growth

As product people, our features are our creations. We’re proud of all of them, and we’d like to see them all thrive. (OK, I admit that I have a few that I’d like to forget about. 😬) But given that you always have limited resources, you need to **identify your “key features”—that is, those features that have the highest correlation with acquisition, monetization, retention, or expansion**. Increasing adoption of those features will have the biggest impact on growing your business. (You might be thinking, “But [correlation doesn’t imply causation](https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation)!” That’s true, but it’s still the best way to identify features with the highest likelihood of driving growth.)

A *correlation analysis* will tell you how strongly the use of a feature is related to the movement of your various growth metrics. There are many popular, easy-to-use tools (including some free ones) for quickly doing a correlation analysis, or you can even do it pretty easily in a spreadsheet. For a great primer on how to do correlation analysis, see this post in Lenny’s Newsletter by Olga Berezovsky: “[How to do linear regression and correlation analysis](https://www.lennysnewsletter.com/p/linear-regression-and-correlation-analysis).”

*Examples of key features:*

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/3d416cd8-6704-4ce7-bca1-5e4e021cc78d_1744x482.png)![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/0022a9f8-118f-43c0-9f27-dbe8175dc822_1744x1446.png)

#### 1.2 Calculate usage metrics for key features

Once you’ve identified your set of key features, the next step is to gather data about their existing level of user adoption and engagement. For example, what percentage of YouTube users have subscribed to a channel, or what percentage of Loom users use the Auto Message Composer?

When analyzing usage, it’s helpful to look at the different stages of feature adoption:

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/d3b3a628-b52b-448b-8283-bcf7927e449c_1570x578.png)

If using the feature requires multiple steps (which is true for most features), then you also want to measure completion rates. For example, of the Gmail users who start the process of adding another email account (like a Microsoft Outlook account) to their current Gmail account, what percentage complete that process?

One final important metric to measure is success rate. This doesn’t apply to every feature, but many features have a concept of a successful outcome for the user. For instance, what percentage of resumes submitted for a job opening on Indeed receive a call back from the employer? Or what percentage of apartment searches on Apartments.com return at least one result that meets the user’s search criteria?

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/473cabdb-e45c-4b90-aea5-841f09890062_1576x382.png)

When I was an advisor to Roblox in their early days, many of our growth wins came from focusing on success rates. For example, our analysis showed that making frequent changes to your avatar was strongly correlated with user retention, particularly for new users. But we saw that about 20% of visits to the Avatar Shop were “unsuccessful”—users would leave the shop without changing their avatar. By adding the ability to sort clothing and accessories to show newest or best-selling items first, and adding simple search capabilities, we were able to increase the success rate of these Avatar Shop visits significantly, increasing the frequency of avatar changes, and ultimately increasing new-user retention by a couple percent. 🎯

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/a71ed6e4-7ffc-407e-b21a-6e7170fae01e_3048x1406.png)

Final tip: When analyzing these metrics, segment your users by how long they’ve been using your product (such as 0-30 days, 31-90 days, and 91+ days). This helps you see which features are adopted early in a user’s journey and which take more time.

#### 1.3 Focus on features that drive growth and have low usage metrics

The final step in Analysis is simple: identify key features (i.e. features correlated with growth) that have low adoption, completion, or success rates. If something is already successfully used by a large percentage of users, then there’s not much room for improvement. Once you’ve identified which features to focus on, you then need to increase their engagement. Below, I cover the three most consistently effective ways that I’ve found for doing this.

### Principle #2: Reduce

The first consistently effective way to increase engagement with a feature is by *reducing the friction* associated with using it. This includes reducing the number of steps, reducing the effort to complete each step, and reducing how much we need to learn before we can really use it (i.e. reducing the “cognitive load”).

#### 2.1 Reduce steps in the process

Most features have multiple steps. Every time you ask a user to click, tap, or type, even if it all happens in one screen, that’s a step. And when you start counting all these steps, you’ll realize that you’re asking your users to do a lot more than you realize. You need to look at whether some of the steps can be removed.

*Examples of reducing steps in the process:*

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/d788fb59-f865-4e67-a0ce-c64c63ded165_1742x1600.png)![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/577f902c-263d-4c25-8068-f017d3667e7b_1744x1602.png)

#### 2.2 Reduce effort per step

Once you’ve minimized the steps needed to use a feature, look at the remaining steps and see if you can reduce the effort required for each step, i.e. make each step simpler. Product teams know they need to do this, but in my experience they rely on a limited number of approaches, such as optimizing the UI flow, mimicking how similar flows are built in other popular apps so the flow feels more familiar to users, and clarifying the verbiage in the app. But there are many other approaches. Below are three additional methods that I’ve found to be very effective and should be used much more often than they currently are.

##### a. Have users edit rather than create from scratch

You know how it’s usually easier to start with content that’s close to what you want and edit it than it is to create new content from scratch? That’s true for your users as well, which means that where possible, providing users with a good starting point for any kind of content creation can reduce friction and increase engagement. This “edit vs. create” idea applies to not just traditional text or image-based content but to anything the user needs to create or define.

*Examples of editing vs. creating from scratch:*

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/08f6a83a-fda3-48e8-bc41-9f24f589ed9b_1742x1100.png)![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/83d99db4-2157-42f8-9643-80fdf024ac54_1742x1156.png)![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/e9eb399d-3759-4dcb-853b-e98b6c3c73b8_1744x384.png)

##### b. Use smart defaults

Another way to reduce effort is to intelligently prefill default values.

*Examples of using smart defaults:*

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/c0471355-b25f-4af3-b495-e64cc4aa0e80_1742x912.png)![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/4578aaf7-f9c2-47d3-b391-0de5b212d712_1742x1050.png)

##### c. Enable users to click or tap rather than type

Asking the user to enter information by typing is an overlooked but very real source of friction. You need to know exactly what to type (for example, if you want to share a Figma file with someone, you need to know the correct email address to type), and you have to deal with typos. Also, this friction is magnified if the typing needs to be done on a small mobile screen. Instead, explore where you can have users select something from a list with a click/tap.

*Examples of clicking or tapping vs. typing:*

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/1daf12f3-339e-4d4b-8c73-ec30c6561444_1742x712.png)![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/8b1bb4a3-be9d-4d5c-886d-7a2a11d40599_1744x1320.png)

#### 2.3 Reduce cognitive load

We can’t have a discussion about removing friction in your product without at least mentioning reducing *cognitive* friction, also known as cognitive load—that is, reducing the mental effort required to understand and use a feature. To find out which of your features users struggle with, you need to grab a few new users and watch them try those features for the first time. These sessions are often painful to watch, but you’ll learn a ton.

You’ll uncover which concepts in your product are unfamiliar to your users. For example, I love Notion as an all-purpose note-taking and productivity tool, but I know several people who tried to switch from Evernote to Notion and had trouble getting their head around Notion’s central concepts of “blocks” and “databases.” A big part of Notion’s success (and that of other companies like Figma and Airtable) is due to their heavy investment in building templates that introduce users to core concepts by showing them in action, making them less conceptual and more tangible. (I discuss templates more in the Assist section below.) Notion created over 150 templates for different use cases, and users can also create and publicly share their own—see screenshot below. If it’s absolutely necessary to introduce your users to unfamiliar concepts, be prepared to spend a fair bit of time and resources finding ways to help people easily understand them.

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/37bf9900-2129-4097-a6a0-6680a4912c83_1600x1009.png)

### Principle #3: Introduce

Reducing the friction associated with features is critical, but it only solves part of the problem. It doesn’t matter much that you’ve been able to reduce the number of steps required, the effort per step, or the cognitive load *if no one knows about the feature*.

In this section, we’ll talk about how to increase users’ awareness of a feature and motivate them to use it. A key point here is that I’m not just talking about introducing newly launched features. I’m referring to all your key features. Many of your existing users don’t know about all of them, and for your new users, every feature is new to them.

#### 3.1 Increase feature awareness, *in context*

The first step to introducing a feature is to simply increase users’ awareness of the feature. We’ve all seen the common UI elements used for this: pop-up modals, tooltips, banners, pulsing hotspots, walk-throughs, checklists, etc. But the key question we should ask isn’t *how* we should raise awareness but *when*.

Product teams often rely on the new-user onboarding flow to introduce key features, but there’s a limit to how much functionality you can show a new user before you overwhelm them. Or they rely on What’s New pop-ups, but their effectiveness is questionable. (I’m sure I’m not the only one who reflexively closes these pop-ups without reading them. Particularly when they take over my entire screen, blocking me from my games! 🎮 )

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/73f7fd3a-a488-4203-a305-a94aaf01de1f_462x968.png)

Fortunately, there’s a better way. The right time to introduce a feature is to introduce it *in context*, which means at a point when the user is most likely to want to use it. Compared with a user who is simply told about a feature, a user who is told about a feature *when they need it* is much more likely to use that feature and remember it.

*Examples of increasing feature awareness in context:*

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/543e21e6-4346-4988-8a14-ee993bf8f5e8_1398x1680.png)![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/719cab8f-87bf-4efb-9c0e-684912a933ac_1744x468.png)

#### 3.2 Motivate the user to use the feature

Once you’ve raised awareness of a key feature, your next step is to motivate users to use it by explaining *why* they should use it.

##### a. Describe the benefits of using the feature

Don’t assume users understand the value of a feature. Instead, spell out what goals the feature can help them with.

*Example of describing benefits:*

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/eb7c09e2-c682-4c7a-8713-cc8a3696fc20_1746x1094.png)

##### b. Highlight different use cases

Another way to motivate users to engage more with a feature is to introduce them to different use cases for that feature.

*Examples of highlighting different use cases:*

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/4ce05acf-67e3-4be8-9e75-3c246fe2c21c_1746x1346.png)![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/17c2a335-1f59-4a28-849c-72b308d4057a_1748x1062.png)

### Principle #4: Assist

A designer friend of mine likes to say that if you need to explain how to use a feature, you’re in a “failure state,” i.e. it’s a sign of product design failure. I agree that the goal should be to design features that are completely intuitive, but sometimes we aren’t able to find a way to do that. So in those cases, users need a little assistance in order to understand the value of a feature and how to use it. Some examples of how to do this are below.

#### 4.1 Provide “empty state” guidance

We’ve all had the experience of navigating to a tab for the first time, only to be greeted by a mostly empty page because there’s nothing to show yet. This is the “empty state” for that page, and leaving it empty is a huge missed opportunity. All that space can be used to explain what the feature is, the benefits of using it, provide a clear call to action so users know where to start, and provide resources or links for them to learn more.

*Example of empty-state guidance:*

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/e0f70198-092c-4535-930e-7500bbf765fa_1748x1244.png)

#### 4.2 Offer templates

Templates assist users in successfully accomplishing their goals by incorporating a level of expertise that many users, particularly new users, don’t have.

*Examples of using templates:*

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/446e7dc9-371c-46d1-8947-48a32d3ee4f5_1746x1032.png)![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/006f6744-8630-40c0-87d5-2ee7ec4436f8_1742x1086.png)

#### 4.3 Create error messages that are actually helpful

When a user makes a mistake and sees an error message, use that as an opportunity to guide them to a successful outcome. In your error message, focus on what caused the error (without blaming the user) and, most importantly, tell them how to correct it.

*Example of a helpful error message:*

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/6613b43a-b605-4846-a3f5-a9ce0bc44c1b_1744x1092.png)

### Conclusion

Frequently, the best way to accelerate product growth is to increase engagement with existing features known to be correlated with moving growth metrics that aren’t performing to their potential—rather than over-indexing on building new features. I hope you’ll be able to use this framework as a simple, structured, and repeatable guide to increase the adoption of the features that really drive your product’s growth. I’ve included a handy checklist below to help you get started.

By **analyzing** data to identify the key features to focus on, **reducing** the friction of using those features, **introducing** those features to users at the right time, and **assisting** users in using those features successfully, you’ll be covering the main ways that I’ve seen product teams successfully increase overall product engagement and retention. Good luck!

![Image from How to accelerate growth by focusing on the features you already have](https://substack-post-media.s3.amazonaws.com/public/images/2f20c60d-7c0e-435b-acee-5172c363cb2c_647x628.png)

P.S. I love hearing about and sharing examples of the ARIA principles in action in successful products. If you have examples that you’d like to share, I’d be grateful if you’d give a quick summary in the comments below (and doubly grateful if you include a link to screenshots). It’s a great way to help others by sharing ideas of approaches they might be able to use in their own products.

*Thank you, Ken! For more from Ken, make sure to follow him on [LinkedIn](https://www.linkedin.com/in/kenrudin/).*

*Have a fulfilling and productive week 🙏*

## **🔥 Featured open role: Product Manager of Collaboration @ Notion**

We recently partnered with Notion to help them scale their PM team. [One role that’s particularly interesting to me](https://boards.greenhouse.io/notion/jobs/5926606003) is an opportunity to own the asynchronous collaboration experience within Notion. If you’d like to get referred directly for this role, follow this button:

[Apply to Notion](https://lennys-jobs.pallet.com/onboard/v3/0153c44c-b8c4-44b6-ba42-78fbcf220033/get-referred)

*If you’re hiring and want to work with us, [apply here](https://airtable.com/apprGaxWWPYU0068E/shr2WFo5UqJjA5dQ8). Our team will reach out if we think it’s a good fit. Note, we primarily work with fast-growing U.S.-based startups.*

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
