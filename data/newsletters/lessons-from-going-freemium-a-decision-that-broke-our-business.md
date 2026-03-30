---
title: "Lessons from going freemium: a decision that broke our business"
subtitle: "How freemium and no-friction onboarding reversed our growth, and how we got back on track"
date: "2023-11-28"
type: "newsletter"
tags: ["design", "b2b", "growth", "startups", "pricing", "analytics"]
word_count: 3446
---

*P.S. Don’t miss [Lennybot](https://www.lennybot.com/), my AI chatbot that’s trained on every newsletter post and every podcast interview.*

I’m increasingly on the lookout for stories of failures, because failure can hold the most enduring lessons. So when [Bobby Pinero](https://www.linkedin.com/in/bobbypinero/) (CEO of [Equals](https://equals.com/)) [tweeted](https://x.com/bobbypinero/status/1711753079601684679?s=20) about how adding a freemium plan nearly destroyed his business, I asked if he’d go one layer deeper and share his experience more widely. Below, Bobby tells the in-depth story of why his team decided to add freemium, why it didn’t work, and the many lessons they learned along the way.

Every founder without a freemium plan grapples with the question of whether they should go freemium or not. My hope is that this post makes the decision easier for you.

*For more from Bobby Pinero, follow him on [X](https://twitter.com/bobbypinero) and [LinkedIn](https://www.linkedin.com/in/bobbypinero/), and check out [Equals](https://equals.com/). And a big thank you to [Elena Verna](https://www.linkedin.com/in/elenaverna/) and [Patrick Campbell](https://www.linkedin.com/in/patrickccampbell/) for important feedback on early drafts of this post.*

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/8a74f2b9-678b-41e1-a45d-2f10fb7a72a1_8000x4000.png)

It seems almost every SaaS founder wrestles with the question of freemium. Do we or don’t we?

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/8f8e2075-d338-4dac-a8bc-cd4c4ec1586c_1562x1151.png)

The temptation is real.

This is the story of what happened when we opened the floodgates by going freemium, and how it nearly destroyed our business.

Below, I’ll share our biggest lessons, including:

1. **The customer can be wrong.** Users may scream for freemium. Investors and advisors will agree. It might even start OK (we 4x’d users right out of the gate). But initial usage is different from long-term usage. For us, engagement, retention, and revenue tanked.
2. **“Freemium” and “friction” are tied at the hip.** The success (or failure) of freemium can be directly impacted by friction in onboarding. If you change one, you probably need to rethink the other.
3. **Adding onboarding friction can be good.** The prevailing sentiment is that friction in onboarding is bad. Not true. Friction can be critical to driving short-term adoption and long-term retention.
4. **The allure of seeing a new product is the strongest motivator new users have to complete setup.** If you make onboarding too easy, they’ll never come back to do the hard task you let them skip.
5. **When freemium can work.** It requires a specific set of things to come together. And time, which you might not have.

Ultimately, freemium didn’t work for us. That doesn’t mean it couldn’t work for you. My hope is that you’ll learn from our experience—and hopefully, we’ll learn from you too.

## How it all started

First, some context. What is Equals? It’s a [next-generation spreadsheet](https://equals.com/)—one that allows you to query, analyze, and report on live data. Think business intelligence, but in the familiar and flexible form of a spreadsheet.

We launched Equals in April 2022. We made a big splash.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/557bd7f8-355f-42b4-8253-a254e471bcaa_1600x1174.png)

Because expectations for how a spreadsheet should look and feel are insanely high, we gated initial access to the product. We onboarded every single customer manually. We wanted to understand their use case. We wanted to establish a close relationship so they’d give us the benefit of the doubt when they inevitably ran into issues.

From day one, you couldn’t get Equals without (1) jumping on a call with us *and* (2) paying up front. There was no trial. There was no self-serve version of Equals. It was about as high-friction an onboarding process as you can get in SaaS.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/ec5155af-2e5b-4680-98b0-3a8acda1239a_1600x879.png)

That strategy worked really well. In fact, it worked so well that revenue took off. In just five months, we were able to raise a $16 million Series A funding round from one of the best investors in the world, a16z.

And then we broke everything.

## Everyone wanted less friction

After being in the market for a handful of months, we started to hear a lot of complaints on how we onboarded folks. It all boiled down to some version of “Equals looks amazing, just let us into the product!”

They wanted a self-serve option.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/204ac9ff-6f0f-4749-9c82-13cfab97ccd6_1356x946.png)

They wanted a way to skip our data source requirement during onboarding.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/36b33f3b-436c-40cc-8102-2dca23ee64fe_1600x904.png)

And most of all, they wanted a free plan. Not a free trial. No time limit or credit card required.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/2fbd5ee3-a5ba-4ccf-8196-76d0021fa03e_1600x483.png)

It felt like we were missing a massive opportunity.

It was easy to imagine all of the customers and users we were turning away. It was easy to look at the darlings of SaaS—companies like Notion, Figma, Airtable, Canva—and think that what worked for them would work for us. Let’s get people into the product, we thought, and we’ll figure out how to monetize them later.

This began a six-month journey in which we tried giving folks what they wanted: a faster and frictionless way into Equals.

We started by introducing a free plan.

## Introducing freemium (and removing a lot of friction)

When we [announced our Series A](https://x.com/bobbypinero/status/1590374986836897792?s=20), we opened up Equals to the world:

- ✅ No more onboarding call required
- ✅ Prices slashed for current and future customers
- ✅ A generous new free plan. Stay under the limits, and Equals was free indefinitely for you.

🚧 However, we still did require people to connect a data source to get started.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/4e7b15fe-a8d9-406f-9ac3-d1c33857c5f4_1600x1077.png)

Let the masses sign up, we thought. And they did. For a little while, at least.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/c92e527b-f382-465e-9df8-7f3313cea96b_1430x1392.png)

We knew ARR would take a hit short-term, with the bet that we’d drive more companies to get stuck into Equals and drive ARR higher long-term. As a result, we reoriented the entire company, board, and investor base to focus on the metric of weekly active companies, not ARR. Our North Star was now to get as many companies using Equals as possible, with the belief that we’d later monetize them.

Almost immediately, we 4x’d the number of companies using Equals on a daily and weekly basis.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/a23231e1-1591-4610-bcc2-679264e913aa_1600x1005.png)

But then, over the course of the next few months, we stalled. And struggled to retain companies.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/d6de5cad-54fb-4689-91e2-ba3a9409e723_1600x1014.png)

The initial surge in new, active companies came from pent-up demand. Many were people who were on our waitlist who for some time had been looking to try Equals. Once we’d worked through that initial demand, we quickly got to a point where we couldn’t grow our active company base. For every new company we’d bring in, someone else would drop off—a precarious situation.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/ba090a8b-9d92-4b60-a537-db10bd93457e_1390x900.png)

For freemium to work, we knew we needed to quickly and aggressively grow the number of active companies using Equals. Knowing that only a small fraction of active companies would ever convert to paid over time, not growing our active company base was an early indicator that we’d struggle to grow revenue at the rate we needed to in the future.

## Giving people (more of) what they want

While Equals was now free to get started, we still had a decent amount of friction in onboarding. We still required users to connect a live data source—you couldn’t create a workbook and actually see “the next-generation spreadsheet” until you’d completed this critical step. And it wasn’t working. So we heeded the feedback we continued to get: “Just let us in!”

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/5fca0295-5da1-406a-9082-ab7a3c28715e_680x367.png)

This only made things worse.

As we embarked further down the path of less friction, our hypothesis and goal was to accelerate the number of new companies making it deep into Equals. We thought perhaps that the more they got into the product, perhaps the more motivation they’d have to ultimately get set up—by seeing Equals, they’d see the potential of what it could do! Perhaps some people would even use us without a data source.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/fc2bac6f-f8db-4266-8ddb-c411edb974c9_1600x995.png)

We ran two key experiments.

First, we allowed users to get started by using a CSV as a data source instead of requiring them to connect to a database or data warehouse. The thinking: everyone has access to and can upload a CSV file.

Nope. This only hurt engagement further.

Yes, more people made it to the step of using the product. But ultimately fewer of them became engaged, retained users. Not only were fewer people getting stuck in, but we were actually *losing* people who would have otherwise connected a live data source. It turned out that less friction *cost* us engaged users*.* Which in hindsight makes sense—a CSV is stale data. You’re missing most of the value of Equals when auto-updating analysis on live data.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/d01bef4c-63a1-45f9-ad69-cb681f1c1dc6_1600x528.png)

Next, we tried a more extreme experiment. We allowed everyone to bypass the data source setup step altogether. Just get them in, let them see the next-generation spreadsheet. We also created setup guides, in-product nudges, and follow-up messages all pushing folks to connect a data source thereafter.

And it worked! We blew up. Thousands and thousands of active companies using Equals.

Just kidding. It was awful.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/3baed9e8-c97e-4b58-9a2d-8750926a9ed0_1375x1600.png)

At this point, we were stuck in the mud.

## Undoing the damage

The original plan: raise our next round of funding by showing an exploding base of active companies, and from there generate revenue over time. Yet here we were, stalled, unable to grow incremental active companies despite having listened to and acted on what everyone told us they wanted or what we should do. It was quickly clear that we weren’t putting ourselves in the best position to raise a meaningful Series B.

As a venture-funded startup, we simply didn’t have the time to keep tweaking. To keep experimenting. To keep trying to make freemium work. Now we had the evidence we needed to act with conviction.

Both the results we were seeing in the data and our early traction selling Equals told us we needed to (1) kill free *and* (2) add friction back to onboarding. Quickly. And once we did, everything changed.

Although we didn’t bring back *all* the friction.

We still held the fundamental belief that Equals should be self-serve. The next-generation spreadsheet should be something anyone could sign up for and get started with, so we didn’t believe it was right to go back to selling only through sales calls. We felt a strong pull to make a self-serve option work.

Yet we intuitively knew that the data source requirement itself wasn’t enough for users to have “skin in the game”—to have that motivation to get to the aha moment and activate. So this time we decided to require every signup to start a 14-day free trial and input a credit card, a step between a free self-serve product and having to get on the phone with us. This worked.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/6edaa67f-0198-4408-870c-d2aeeb5897a4_1600x1168.png)

ARR (and customers) almost immediately bounced back. And it’s important to add that we didn’t change pricing for anyone who signed up during the free period; we didn’t force anyone who originally signed up for free to suddenly start paying. This growth was all new customers.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/7e5a6330-d75a-465b-8ece-229078c5ae68_1600x966.png)

But even more interestingly, the number of deeply engaged users went *up*.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/ec339f22-0c0b-4afe-9b23-74199447fbac_1600x1001.png)

With the same number of new companies signing up, we were once again growing the number of customers and ARR but *also* the number of companies active in Equals. We were once again activating and converting people *who in the previous world would have signed up and dropped off*.

Reintroducing the data source requirement certainly helped. But requiring the credit card up front—and getting rid of freemium—seemed to have the biggest positive impact in helping users activate.

This is not what users were asking for. Nor what advisors told us. Nor what you’d imagine when you look at the darlings of SaaS.

Which brings us to the most important lessons and reflections from this period.

### Onboarding is more sales than it is product

Onboarding is a game of convincing a new user to keep going. It’s about momentum.

We found two real ways to build and maintain momentum. First, the allure of seeing a new product is the strongest motivator a new user has to complete complex setup tasks. If you need your users to do something that you believe is fundamental to their seeing value from your product, don’t let them skip it. Their motivation to do it will only decrease.

In all of our pursuit of getting people into the product, the thing we forgot is that the goal of onboarding is not for people to complete onboarding. It’s not to just get people into the product. **The goal of onboarding is for people to get their first moments of value from your product.** To get “activated.” And *removing* friction is actually detached from this goal.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/756ba8b8-f9e2-477f-8d97-291c25670440_1600x900.png)

Second, we found that forcing users to invest upfront, in the form of a credit card and a limited-time window to make a decision, adds inertia and urgency to get set up. The act of putting in their credit card increases their level of commitment to go through the hard steps. A free plan does the opposite.

*Your users may tell you otherwise, but this is why adding friction to onboarding can outperform.*

### Maybe freemium isn’t for every product

Obviously for some companies it works. Notion, Figma, Airtable, Canva, Miro, Loom, to name a few.

Many [still](https://twitter.com/Patticus/status/1719819631953588298?s=20) [believe](https://www.youtube.com/watch?v=134z2mHgaLs) it’d work for Equals.

Having been through this at Equals, and drawing from our experience building Intercom, here are a few guiding questions to consider as you think about whether freemium could work for your business:

1. **Do you have a massive potential user base?** Can you viably drive tens of thousands of active users to your product, over and over? The funnel from visit to activated to paid is long, so you need a *very* largepotential user base. Remember, only a small fraction of free users become paid, and you’ll eventually need to build a real business.
2. **Do you have a really short time to value?** Minimal setup: minutes, not hours. The faster the time to value, the less inertia required to overcome to make it through onboarding and the more likely free is to work. This isn’t *always* the case, though, so…
3. **Is your product foundational for the end user?** Highly technical and longer-time-to-value products like AWS, MongoDB, and Sanity have successful free tiers, mostly because they serve users in the earliest stages of problem development, when the end user is just learning about the solution and needs a frictionless way to learn.
4. **Do you have a very low incremental cost to serve each customer?** Supporting a lot of free users who may never convert to paid can make your business model unviable.
5. **Do free users contribute to your growth model?** Are there viral loops that free users contribute to or accelerate? Are there network effects? Think of Loom and Miro. For every free user who shares a Loom (video), there’s likely at least one other person who might record a Loom in the future. It’s win-win.

For us, we fell down in areas 2, 3, and 4. Our time to value is long. We’re more useful once someone has a business and real data to work with. And we’re still in a phase where we do need to support and help early users, fairly frequently. It’s costly. And again, as a venture-backed startup in a precarious macroeconomic environment, we don’t have time on our side. Freemium takes time to pay off—time that we simply don’t have, at least right now.

### Filter the noise

Many users will kick and scream when you ask them to do the hard things to use your product.

![Image from Lessons from going freemium: a decision that broke our business](https://substack-post-media.s3.amazonaws.com/public/images/5dd3f75f-34d1-481c-b7a7-39cccb58cf5b_1518x390.png)

I can now confidently read a message like that and know that this person doesn’t feel enough of the pain Equals solves. Not in any near-term window were they going to be a paying Equals customer.

Since removing free, we’ve also brought back a very clear level of focus across the company. We know which users to pay attention to. We know who to support, who to build for, and who should inform our messaging and positioning. We’re clearly focused on building a *business*.

### Trust the process

I’m glad we tried freemium, despite all the challenges and existential dread. It was a lesson we had to learn for ourselves. It’s an itch that, had we not scratched it, would have been something we’d have debated year after year to come.

Startups are about experimenting. Every startup has a finite window of opportunity, and the winners are usually the ones that try the most things along the way. We tried, but I’m also proud of the fact that we tried, failed, and quickly reverted back to something that was working.

So if you take only one thing away from this, I hope it’s that you must ship, learn, iterate, and ship again. As fast as you possibly can.

*Thank you, Bobby! For more from Bobby Pinero, follow him on [X](https://twitter.com/bobbypinero) and [LinkedIn](https://www.linkedin.com/in/bobbypinero/), and check out [Equals](https://equals.com/).*

*For more on this topic, check out Bobby’s related posts on [Every](https://every.to/p/how-freemium-almost-killed-my-business), and [the Equals blog](https://wraptext.equals.com/the-fallacy-of-freemium-in-saas/).*

*Have a fulfilling and productive week 🙏*

## 👀 Hiring? Or looking for a new job?

I’m piloting a white-glove recruiting service for product roles, working with a few select companies at a time. If you’re hiring for senior product roles, apply below.

[Apply to join](https://www.lennysjobs.com/talent/)

If you’re exploring new opportunities yourself, use the same button above to sign up. We’ll send over personalized opportunities from hand-selected companies if we think there’s a fit. Nobody gets your info until you allow them to, and you can leave anytime.

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
