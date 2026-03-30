---
title: "When NOT to run an experiment – Issue 54"
subtitle: "> ## Q: Should I always run an experiment when I make a change to my product?"
date: "2020-12-01"
type: "newsletter"
tags: ["analytics", "design", "growth", "leadership", "newsletter", "engineering"]
word_count: 1647
---

> ## Q: Should I always run an experiment when I make a change to my product? If not, when should I not?

If you work at a large company, every change you make is likely run as an experiment – partly because you need to demonstrate your impact, and partly because even small changes can have large unintended consequences.

If you work at a small startup, nothing is run as an experiment because there just isn’t enough data.

So this question is really for people who work at companies in that in-between phase. Which happens to be most companies.

Let’s first talk about why experiments are valuable, the downside of running experiments, and finally when to NOT run an experiment.

### Why run an experiment at all?

It’s easy to take this for granted, but the fact that you can know the precise impact of your changes is…incredible. Who outside of the software space is able to tell if a change they made in language, color, or user experience is definitively helping or hurting their business? It’s amazing.

More broadly, the benefits of running your changes as an experiment are many:

1. **Learning**: Experiments help you learn about your users
2. **Deciding**: Experiments tell you if your change had the intended consequence
3. **Avoiding**: Experiments catch unintended consequences
4. **Quantifying**: Experiments precisely quantify the impact of your changes (and your team)
5. **Aligning**: Experiment settle subjective debates

### What are the downsides of running an experiment?

Experiments also certainly have downsides:

1. **Time**: Experiments take time to set up and run
2. **False confidence**: Experiments can create false confidence based on misinterpreted results
3. **Short-term thinking**: Experiments can push you to think short-term
4. **Narrow-thinking**: Experiments disincentivize taking bets that are hard to measure
5. **Bad product**: Experiments can introduce awkward user-experiences or legal risk

### When should you NOT run an experiment?

In spite of the downsides, I’m a big fan of experiments and generally default to running every change through an experiment. But, there are three cases where you should probably skip the experiment and just ship the change:

#### **1. It’ll take too long to get actionable results**

This is by far the main reason to skip running an experiment, and in my experience still far too underappreciated. Until you are at significant scale, experiments probably aren’t even worth thinking about. Particularly on features buried within your product.

Let’s take an example: Say you wanted to measure the conversion impact of a copy change on the last step of your sign-up flow, which is currently converting at 10%.

> **Question:** How many users would need to go through this step in order for you to notice a 5% change in conversion?

It turns out you’d need *over 60,000 unique users* (per variation!) before you could draw a confident conclusion. That’s 120,000 users going through the flow before you can move on. For most startups, that ends up being far too long.

You can run this math yourself using this excellent [sample size calculator from Optimizely](https://www.optimizely.com/sample-size-calculator/), or [this one from Evan Williams](https://www.evanmiller.org/ab-testing/sample-size.html).

![Image from When NOT to run an experiment – Issue 54](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/763227f6-e383-464e-b2a4-8ddad794414b_1678x1144.png)

Furthermore, if you are looking to see the impact on your brand, network effects, long-term retention, or anything else that takes months/years to notice, you also shouldn’t wait for an experiment to run its course before making a call. Consider just launching it and keeping a small holdout to measure the long-term impact.

One lever you *can* play with to reduce the experiment time is the level of confidence required in the final result. When you’re moving fast and are feel OK about shipping slightly negative experiments occasionally, lowering your confidence interval to something like 85% (h/t [Yair Livne](https://www.linkedin.com/in/yairlivne/) for the advice) isn’t a terrible idea. Then, as you scale up and the stakes increase, you can increase the confidence interval.

***Question to ask yourself**: How long do you expect your experiment to take before you have conclusive results? Is waiting that long for this change worth it?*

#### **2. The downside risk of the change is low (and the effort is high)**

The second most common reason to skip running an experiment is a low risk/reward ratio. Before running an experiment, answer these questions:

1. Is your change a best practice and already worked well for others? (e.g. moving buttons above the fold, fewer steps in a flow, making your pitch clearer, etc.)
2. Will you be able to detect significant negative impact in other ways? (e.g. before/after data, CX)
3. What’s the most negative impact you’ve ever seen from an experiment like this?
4. What will you concretely do with experiment results once you have them?
5. What’s been the typical time for your team to set-up and analyze experiments?

Now you need to make a decision:

> **What’s the bigger risk:** Making this change without an experiment, or taking your team’s time from higher-impact work?

If you can run experiments quickly and easily (e.g. a few hours), this decision is generally easy: run the experiment. If running experiments is a pain in the butt, and the changes are relatively benign, you can probably skip the experiment. If it’s somewhere in between, it’s a judgment call, but I personally default to running an experiment.

You may notice that the key variable in this formula is the time it takes to run and analyze experiments. The easier that process is, the more often you’ll end up running experiments, and the more you’ll learn. So if anything, spend time making that process easier.

***Question to ask yourself**: What if you skipped running an experiment or two and instead invested that time into a better experimentation framework?*

#### **3. You’re launching something completely new**

This bucket almost goes without saying, but to run an experiment you need a control to compare your change against. If you’re launching a brand new independent product, or pivoting the product, you likely have nothing to compare this new product against (other than it *not* existing). In this case, you’re better off just setting independent success criteria (e.g. a specific retention rate, or a new user signup threshold), vs. coming up with an awkward experiment. This is especially true if going back to the previous product is out of the question and your own path forward is through.

As your company grows, and your individual impact is judged based on quantifiable results from experiments, skipping experiments becomes tougher. That’s normal. Still, no matter what stage your company is at, I hope these examples give your team some direction the next time you face this question.

If you’ve found other good reasons to skip running an experiment, share your thoughts in the comments 👇

[Leave a comment](https://www.lennysnewsletter.com/p/not-running-an-experiment/comments)

## 🧠 Further study

1. [Please, please don’t A/B test that](https://medium.com/@talraviv/please-please-dont-a-b-test-that-980a9630e4fb) (written by our very own community member [Tal Raviv](https://www.linkedin.com/in/talsraviv/?originalSubdomain=il)!)
2. [The hypothesis prioritization canvas](https://jeffgothelf.com/blog/the-hypothesis-prioritization-canvas/)
3. [Optimizely's sample size calculator](https://www.optimizely.com/sample-size-calculator/)
4. [Evan’s sample side calulator](https://www.evanmiller.org/ab-testing/sample-size.html)
5. [Fostering a culture of experimentation](https://www.lennyrachitsky.com/p/fostering-a-culture-of-experimentation)
6. [A/B Testing — The Advanced Guide](https://www.julian.com/guide/growth/ab-testing)

See you next week!

## **🧠 Inspiration for the week ahead**

1. **Read**: [How to think for yourself](https://www.paulgraham.com/think.html), by Paul Graham
2. **Watch**: [Super Practical Guide to Color Theory, Color Models and Perfect Color Palettes](https://www.youtube.com/watch?v=GyVMoejbGFg)

[Watch on YouTube](https://www.youtube.com/watch?v=GyVMoejbGFg)

3. **Behold**: 🤯

## **🔥 Job opportunities**

1. **Product**: [Descript](https://jobs.lever.co/descript-2/08f9b563-c3e6-49a4-be07-82fafc1868af), [KUDO](https://angel.co/company/kudo-meeting/jobs/913705-product-manager), [Hipcamp](https://jobs.lever.co/hipcamp/d04821c3-fb9a-4d3f-9a7a-1b75deacc09f), [Prenda](https://apply.workable.com/prenda/j/63270A44BB/)
2. **Growth**: [BasisOne](https://www.basisone.com/careers/growth-strategy-lead), [Coda](https://boards.greenhouse.io/coda/jobs/4794809002), [Instrumentl](https://angel.co/company/instrumentl/jobs/975735-head-of-growth), [Levels](https://levels.link/growth), [Prenda](https://apply.workable.com/prenda/j/AC98C5FDFB/)
3. **Design**: [Ashby](https://jobs.ashbyhq.com/ashby/145ff46b-1441-4773-bcd3-c8c90baa598a), [Cascade](https://www.cascade.io/jobs/analytical-product-designer), [Office Hours](https://docs.google.com/document/d/1_aHEl08ahc6NjOhwmi9GQlNv8CvlOwf8hL-FyCrmAes/edit), [Runway](https://www.notion.so/A-Product-Designer-baa24543701f472bb291d4429812064a), [Stytch](https://jobs.lever.co/stytch/675e6a11-5a33-41bc-9315-5a3ca141d444), [Watershed](https://www.notion.so/Designer-Watershed-7cb7bf8bd750432399d36e83e4e32391)
4. **Engineering manager**: [Cerebral](https://boards.greenhouse.io/cerebral/jobs/4076598003)
5. **Frontend engineer**: [Levels](https://www.notion.so/levelshealth/Join-Levels-Remote-Developer-58454f0db7e3466692f7b75db6237ddf), [Practice](https://www.notion.so/Front-end-Developer-929e1933b9b4432a851043adbb7bff04)
6. **Backend engineer**: [Coda](https://boards.greenhouse.io/coda/jobs/4489268002), [Sourcetable](https://sourcetable.com/jobs#backend-engineer), [Transform](https://transformdata.io/careers/)
7. **Fullstack engineer**: [Cascade](https://www.cascade.io/jobs/full-stack-product-engineer), [Centered](https://www.notion.so/Software-Developer-e7cad269968e4d5aaeb1f6da9e282626), [Cerebral](https://boards.greenhouse.io/cerebral/jobs/4188468003), [Icebreaker](https://icebreaker.video/product-engineer), [Iggy](https://www.notion.so/askiggy/Full-Stack-Engineer-IggyAPI-5a8c1825028e421b9587538718f370b4), [Primer](https://www.notion.so/Senior-Software-Engineer-Full-stack-web-San-Francisco-CA-3a0af35008104def82836a5b9a5a88e1), [Runway](https://www.notion.so/A-Product-first-Full-stack-Engineer-5e056689b68048aeb1ccfea6ac73eb9e), [Snackpass](https://jobs.lever.co/snackpass/7c3bb72b-70d3-45ca-9dea-eea57ed5333d)
8. **iOS engineer**: [Pairplay](https://www.notion.so/Lead-iOS-Developer-ba18577b6ba44ad68e45b8e7a957353c), [Primer](https://www.notion.so/Senior-Software-Engineer-iOS-San-Francisco-CA-87f0fd3ee3dc4c3f8d0419c07fcdd434), [Stytch](https://jobs.lever.co/stytch/d3bf3860-4aaa-4a23-8e28-dad20957be44), [Vori](https://www.notion.so/Mobile-Engineer-Vori-c5ceccd966a04c8aa9e970f0355ca13c)

#### How would you rate this week's newsletter? 🤔

[Great](https://t.sidekickopen82.com/s1t/c/5/f18dQhb0S7kF8cV_VXW1CdjwB59hl3kW7_k2847sD3qkVNxJHk1CX2ZcW2bzNJl8lkfc1101?te=W3R5hFj4cm2zwW4cQKtC3KcLnYW4hLZp03ZVbTxW1JB0ML1--tKxW20ZTw51-YpBFW1W_jBk1ZmvHBW21j9tt1-_j_TW1Vnkcj1V3fMvw1V21pC4Hp2&si=7000000001348012&pi=6174bab6-7009-4402-a497-3d6f867fbea1) • [Good](https://t.sidekickopen82.com/s1t/c/5/f18dQhb0S7kF8cV_VXW1CdjwB59hl3kW7_k2847sD3qkVNxJHk1CX2ZcW2bzNJl8lkfc1101?te=W3R5hFj4cm2zwW4cQKtC3KcLnYW4hLZp03ZVbTxW1JB0ML1--tKxW20ZTw51-YpBFW1W_jBk1ZmvHBW21j9tt1-_j_TW1Vnkcj1V3fMvw1V21pC4vX2&si=7000000001348012&pi=6174bab6-7009-4402-a497-3d6f867fbea1) • [Meh](https://t.sidekickopen82.com/s1t/c/5/f18dQhb0S7kF8cV_VXW1CdjwB59hl3kW7_k2847sD3qkVNxJHk1CX2ZcW2bzNJl8lkfc1101?te=W3R5hFj4cm2zwW4cQKtC3KcLnYW4hLZp03ZVbTxW1JB0ML1--tKxW20ZTw51-YpBFW1W_jBk1ZmvHBW21j9tt1-_j_TW1Vnkcj1V3fMvw1V21pC4kr2&si=7000000001348012&pi=6174bab6-7009-4402-a497-3d6f867fbea1)

*Have someone in your life who would benefit from this newsletter? Refer them and you both get a free month of the paid newsletter.*

[Give a free month, get a free month](https://www.lennyrachitsky.com/account/referrals)

Sincerely,

Lenny 👋
