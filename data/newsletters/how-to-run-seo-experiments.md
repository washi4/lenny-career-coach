---
title: "How to run SEO experiments"
subtitle: "And it makes sense — SEO is one of the few remaining “free” growth channels, and still somewhat mysterious"
date: "2020-12-15"
type: "newsletter"
tags: ["analytics", "design", "b2c", "growth", "go-to-market", "newsletter"]
word_count: 3711
---

> ## **Q: How do I run experiments with SEO?**

Experimentation and SEO have been a hot topic with readers lately, so let’s spend one more week on it. If you look [into how companies grow](https://firstround.com/review/drive-growth-by-picking-the-right-lane-a-customer-acquisition-playbook-for-consumer-startups/), SEO is the primary growth engine for a large percentage of today’s biggest and fastest-growing companies (e.g. Pinterest, Thumbtack, Expedia, Wayfair, Canva, Glassdoor, etc):

![Image from How to run SEO experiments](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/47014f97-f468-4f85-907a-03c0160a3a78_1003x572.png)

And it makes sense — SEO is one of the few remaining “free” growth channels, and still somewhat mysterious. If you can make it work, it’s a superpower.

Unfortunately, relying on SEO has a major downside: it’s challenging to run experiments. How does one A/B test the impact of your changes on Google’s crawling of your site? Tough.

But good news! Returning guest author [Brian Ta](https://twitter.com/fanfavorite_bta) generously offered to tackle this question for us this week. Brian led SEO efforts at five different companies, including Airbnb, Strava, and now AngelList, and [his previous post about Winning at SEO](https://www.lennyrachitsky.com/p/crafting-an-seo-strategy-issue-34) was one of my most popular posts. As always with these guest posts, I learned a ton from Brian and I’m excited to share this knowledge-bomb with you.

Below, Brian teaches us about:

1. **Setting up** an SEO experimentation framework
2. **Knowing** what to measure with SEO experiments
3. **Running** an SEO experiment
4. **Limitations** with SEO experiments
5. **A walk-through of a real-life** SEO experiment
6. **His most impactful** SEO experiments
7. **Recommended reading** for further study

Let’s dive in!

## Running SEO Experiments

*by Brian Ta*

![Image from How to run SEO experiments](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/b0f2d437-89d3-44c7-bd04-e6e7d2ea224b_2400x1350.png)

I get asked about SEO experimentation **a lot.** It’s probably the second-most asked question I get right after “how do I rank number 1 for my company name?” Surprisingly, there aren’t many resources that actually explain how to run experiments with SEO. In this post, I’m going to share how I’ve run SEO experiments at Airbnb, AngelList, and Strava.

First, I’ll make a couple of assumptions about your business:

1. **You’re familiar with SEO:** I’ll be talking about how to set up your experiments, and so assume some foundational knowledge of SEO.
2. **Organic traffic is already one of the main drivers of your business:** SEO experimentation is not intended to help you learn whether you *should* pursue SEO.
3. **You have thousands of pages:** This advice will be targeted at companies that are already doing SEO at scale, and have thousands of programmatically generated pages. This is not meant to help you experiment on your blog posts. You could*,* but I’ve never used this approach for that.

### **1. How do I set up an SEO experimentation framework?**

SEO experiments are fundamentally different from typical A/B experiments. The majority of experiments at most tech companies are tested on the user-level – control and treatment groups are bucketed at the *user*. For example, if you’re running an experiment that changes the color of the purchase button from green to blue, a user will always get a consistent experience of either a green or blue button each time they visit the site.

When you’re running an SEO experiment **you’re testing on the page level**. Thus, you need to have an experimentation system that can do your bucketing on the page level. Why is that? Because every time Google visits the site, it’ll count as a different user and get re-assigned to treatment or control. So if you're running an experiment that adds a piece of content on the page, Google may get a different experience every single time it crawls the page, and won’t be able to get a good read on your site. As a result, you won’t know what effect your change has on Google. The only user that you’re designing for is Google, so it’s essential that you give Google a consistent experience when it crawls your site.

### **2. Do I have to build an experimentation framework myself?**

I’d highly recommend doing so. Why?

1. As far as I’m aware, **bucketing by the page-level isn’t possible** on any of the major experimentation platforms, such as Optimizely. So you can’t really hack this together with existing solutions.
2. I’ve asked around my SEO network, and **there were very few people who run SEO experiments**, and those who do, all roll out their own frameworks. There was no one in my network that had any experience with a 3rd party out-of-the-box SEO experimentation framework.

I’ll go over how to build it yourself, plus I’ve linked to a couple of blogs at the end of the post that go into more detail. It’s worth noting that building out an SEO experimentation framework isn’t a trivial task and that in 95% of cases, I recommend most startups avoid doing so. I go over this later on in this post.

### **3. What kind of SEO experiments can I run?**

Anything your heart desires, as long as it’s an *on-page* change and the effects are limited to only one page. If you want to test your title tags, meta descriptions, or image alt tags – run wild. However, if you want to measure the effectiveness of internal linking, that’s an entirely different beast.

It’s different because your framework will be measuring *changes to individual pages* in the treatment group, and not the pages being linked to. The pages in treatment (the ones that include the new links) will not get more traffic because the new links are there — other pages outside the experiment will.

How do you measure the effects of internal linking? Our solution at Airbnb was to get the best data scientist in the entire company to do a manual analysis for us. We could have built something to do this, but it was pretty expensive (engineering-wise) for us to do, and has limited uses.

tl;dr this is likely not something you’ll build for a while, so start with on-page testing.

### **4. What should I measure with SEO experiments?**

Organic traffic. Nothing else.

You’ll likely want to measure other things experimentally, but unfortunately, it will not work:

- **Keyword rankings**: Rankings change daily. You also don’t have visibility into all of the keywords that you’re ranking for. In addition, rankings also change based on your location. Whatever tool you’re using to get your ranking for a keyword isn’t going to be accurate enough for you to conclude your experiment.
- **Average ranking**: I assume you’re getting this from Google Search Console. That data is heavily sampled, and not something that I’d even consider to determine the success of an experiment. You also have the added complication of this number being heavily skewed the more pages that you have. More pages equate to more potential (low-quality) keywords that you can rank for (probably terribly). That’s just the nature of the beast. You don’t have control over the exact keywords that you’re driving.
- **Search Engine Result Page Clicks**: I assume that you’re also getting this data from Google Search Console. This data is *heavily* sampled, and while it’s useful for directionality, it is not data that you can base the success of an experiment on.
- **Conversions**: Why? You’re testing SEO changes, not user experience changes. You shouldset this up as a counter metric to make sure you’re not tanking your conversion rate, but this is not a success criteria.

![Image from How to run SEO experiments](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/d4472d90-d162-4758-a8a9-8c64f3ec8d8a_930x634.png)

Your single source of truth is incoming organic traffic. Anything else is unreliable. **If more people are coming into your site through organic traffic, then your experiment was a success.** All of the other metrics mentioned above (except for conversions) lead to increased organic traffic anyway, so why wouldn’t you just focus on organic traffic?

### **5. How do I run an SEO experiment?**

Disclaimer: This is a way to get you pointed in generally the right direction and will probably work best for smaller startups. If you have an analyst or a data scientist, I'd encourage you to work with them to figure out what’ll work best in your specific situation. At the end of this post, I’ve also included a few additional reads that go even deeper.

#### 1. You’ll first need the ability to do a couple of things

- **The ability to bucket your treatment and control on the page level:** You can bucket treatment/control by taking a hash of the canonical URL, or if your site is small enough manually bucketing it yourself by picking the URLs you want in control/treatment. As far as I’m aware, there are no out-of-the-box solutions that will allow you to do this. You will need to build this out yourself.
- **The ability to track incoming organic traffic to your website**: This is more than just looking at Google Analytics. You’ll need this data to be as accurate as possible since this will be what you look at to measure the success of the experiment. At Airbnb and Strava, we had a visitors table that logged every incoming visit and what their referral was. This was the data used to determine the success of SEO experiments. **Platforms like Google Analytics are sampled, and will not be an effective method of tracking organic visitors.**

#### 2. Second, design and roll out your experiment to the pages in the treatment group

- Bucket treatment/control pages
- Run one experiment at a time (unless you have tons of traffic)
- Roll out your experiment to your entire website. Do not roll out the experiment only for mobile web or desktop. While Google primarily crawls the web with their mobile crawler, you’ll want a consistent experience for all versions of Googlebot. This assures that any possible version of Googlebot that crawls your page sees the experiment and makes the necessary adjustments.

#### 3. Let the experiment run for 2-4 weeks

- You’ll want to let the experiment run for a while so that Google can discover the changes, and make the necessary adjustments
- SEO experiments take more time than A/B tests to show impact

#### 4. Run an analysis on the expected difference in organic traffic

- Compare the expected change in traffic if you hadn’t run the experiment against the difference that you see now that you’ve made the change
- Since you bucketed your control and treatment randomly, you could end up with one bucket receiving more traffic than the other (e.g. in Airbnb’s case, one bucket might have more large cities than the other). By measuring the difference in difference, you’re accounting for the imbalance in traffic and measuring the impact independent of the raw traffic count.
- Remember to pull out bot traffic from your data source. You can do this by excluding traffic with user agents of well-known bots (e.g. Googlebot, Bingbot, Duckduckgo, etc).

#### 5. You can conclude the experiment after it has run for more than two weeks and the results are statistically significant.

![Image from How to run SEO experiments](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/16435111-5378-4c97-9501-fd66d0bf5ff0_1358x758.png)

### **6. Let’s design and run an SEO experiment!**

For this exercise, let’s pretend that we’re a Growth Product Manager at Figma on the Community team, and we want to grow the organic traffic coming into the [Community pages](https://www.figma.com/community).

![Image from How to run SEO experiments](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/d1144248-21ca-4a18-981d-ac8f34cc59eb_1017x727.png)

From looking at their [Community File page](https://www.figma.com/community/file/858143367356468985), I can see that they constructed their title tags with the following structure:

> {name of file | description of file that gets truncated}

This isn’t a bad way to be constructing it, but maybe we could do something better.

*Note: There are quite a few things wrong with their pages on the SEO-side, but we’ll pretend they aren’t there for the sake of this example.*

#### **1. Design the experiment**

**Current title tag:** `{name of file | description of file that gets truncated with HTML(?!)}`

> *<title>Figma - iOS & iPadOS 14 UI Kit for Figma | <p>Excited to share the latest iOS &amp; iPadOS 14 UI Kit for Figma!</p><p><br></p><p>---</p><p><...</title>*

**Desired title tag:** `{name of file | tags}`

> *<title>Figma - iOS & iPadOS 14 UI Kit for Figma | 14, alert, apple, dark, emoji, ios, iphone, kit, light</title>*

**Reasoning**: The way that Figma constructs title tags is actually a bit funny. Since the title tag is truncated, there's a good chance you cut off keywords and content before they even appear there. The current implementation isn't bad, but since files do have tags associated with them, using the tags is probably a better solution. What is bad about the title tags is that some of them have HTML injected into them.

#### 2. Roll out your experiment to the pages in the treatment group

We’ll do a straight A/B test with 50/50 treatment versus control to ALL Community File pages.

#### 3. Wait patiently

Title tag experiments are usually pretty impactful. I’d probably wait two weeks before running an analysis.

#### 4. Run your analysis

We’ll look at the expected difference in traffic if you hadn’t run the experiment (control group) and compare it against the difference that you see now that you’ve made the change (treatment). I’ll work with a data scientist to make sure that we’re pulling data from our visitors table.

#### 5. Launch

If results are positive and are statistically significant, I’d launch to 100%. If it’s neutral, or inconclusive after a month, you can use your own judgment on whether or not you want to launch it.

#### 6. Iterate

Document your learnings, and start thinking about other experiments you can do.

Would it make a difference if we only added the most popular tags to the title tag? What about if we put both the tags and description in there?

### **7. What are the limitations of SEO experiments?**

Two things: The amount of traffic you have, and the number of pages you have.

- **Traffic:** If you don’t have a consistently high amount of traffic to your website, running SEO experiments will be quite tough. You’ll have a hard time trying to figure out what’s working, and what’s spiky traffic. As a general rule, **you’ll want at least 5,000 organic visitors a day** to the page type that you want to run the experiment on.
- **Number of pages:** The number of pages that you have will limit the number of experiments you could run at a time. At Airbnb, we were able to run *maybe* 5 experiments at a time, while at Strava, we were limited to only one at a time.

It’s important to note that you’ll need to be careful about the types of pages you test on and the amount of traffic they get. We ran an SEO test at Strava on our user-profiles and had to dump out a bunch of bad data because we had profile pages that got marginally more traffic, which ended up skewing traffic numbers.

### **8. Should I build an experimentation framework?**

This is the million-dollar question. My recommendation to 95% of startups is that it’s not worth your time to create. These experimentation frameworks are generally useful in two scenarios:

1. When you’re actually in the optimization part of your SEO strategy. Most companies/websites aren’t even close to this part yet. The large majority of companies are still in the “build” phase of their strategy.
2. If leadership wants to account for every single feature you build/implement and the success of your team is tied to being able to incrementally prove out these changes/wins.

Most of the startups I talk to are just starting to spin up their SEO strategy. They don’t know what type of pages they’re going to create, they don’t know if their current pages are built correctly, they lack internal linking, they don’t have half-decent title tags….the list goes on. Experimentation frameworks are meant to be used for you to learn and optimize, and if your SEO product isn’t in a space to optimize, you’re just slowing yourself down. Don’t waste precious time trying to validate foundational SEO features.

Once you know that SEO is a core part of your strategy, and you have a set of pages that are performing really well, then you can put in time and effort to create an experimentation framework and try to perfect your pages.

### **9. What were the most impactful SEO experiments I’ve run?**

**In aggregate, title tag experiments led to a 15-20% increase in traffic at Airbnb**. Being able to continuously run title tag experiments is one of the top reasons to invest in creating an SEO framework. A minor title tag change resulted in the most impactful SEO experiment ever run at Airbnb.

Here are some tips and things to keep in mind when trying to come up with title tag experiments:

1. Can you leverage structured content to provide more consistent title tags?
2. How do you provide more context to Google?
3. What information are people looking for when they’re searching for your high-performance keywords?
4. People really like clicking on numbers

In the Figma example above, we ran a title tag experiment that provides more context to Google about what the page is, and uses high-quality structured content to do so.

**Content always drives more traffic.** There’s a good reason why SEO landing pages always have a ton of content and text on them, that’s because there’s a very strong correlation between the amount of unique, high-quality content on your page, and the amount of incoming organic traffic. Every time we added more content to our Airbnb landing pages, it always led to more incoming traffic. The most impactful *single* experiment we ever ran at Strava increased the amount of traffic to our pages by 20%, and the only thing that we did was add more routes to our “Where to run in {city} pages.”

Things to keep in mind when you’re experimenting with content:

- How do I leverage existing content that I already have, and repackage it to be useful on my landing page?
- Can I remove low-quality pieces of content on your page, and replace them with something that’s of higher quality. For example, remove low word count reviews from your page, and replace them with keyword-dense, lengthy, high-quality reviews

**In aggregate, meta description experimentation led to a 6% increase in traffic at Airbnb.** While meta descriptions don’t have a direct impact on your ranking, it does have an effect on your CTR on the search engine result pages. Being able to optimize and tweak your meta descriptions to make it more attractive to click on, will lead to a higher CTR, which leads to more traffic, which leads to higher rankings.

### 🧠 **Further study**

1. [Jeff Chang’s Growth Blog](https://www.growthengblog.com/blog/2018/4/15/scaling-new-growth-opportunities-series-seo-basics): Jeff is one of the original growth engineers at Pinterest and was the Growth Tech Lead there. Airbnb’s experimentation framework is heavily borrowed from Pinterest. This is an extremely simple version of an SEO experimentation framework and may be your best option to roll something out quickly.
2. [Airbnb SEO Data Scientist Blog](https://medium.com/airbnb-engineering/experimentation-measurement-for-search-engine-optimization-b64136629760): This is written by our data scientist on the SEO team, Brian de Luna, who was absolutely amazing.
3. [Pinterest Engineering Blog](https://medium.com/pinterest-engineering/demystifying-seo-with-experiments-a183b325cf4c): An original blog post from Pinterest about their SEO experimentation framework. Airbnb’s experimentation framework is heavily borrowed from this, with our data scientists and engineers walking over to the Pinterest office for knowledge sharing.

*You can follow Brian on [Twitter](https://twitter.com/fanfavorite_bta) and [LinkedIn](https://www.linkedin.com/in/brianta626/).*

That’s it for this week! Have anything to add? Leave a comment 👇

[Leave a comment](https://www.lennyrachitsky.com/p/managing-up/comments)

## **🔥 Job opportunities**

**✨ Group Product Managers at Quora**: [Subscriptions](https://grnh.se/7c4200392us) and [Moderation](https://grnh.se/35dbcae12us) **(**sponsored**) ✨**

1. **Product**: [Cerebral](https://boards.greenhouse.io/cerebral/jobs/4124465003), [Descript](https://jobs.lever.co/descript-2/08f9b563-c3e6-49a4-be07-82fafc1868af), [KUDO](https://angel.co/company/kudo-meeting/jobs/913705-product-manager), [Hipcamp](https://jobs.lever.co/hipcamp/d04821c3-fb9a-4d3f-9a7a-1b75deacc09f), [Prenda](https://apply.workable.com/prenda/j/63270A44BB/)
2. **Growth**: [BasisOne](https://www.basisone.com/careers/growth-strategy-lead), [Coda](https://boards.greenhouse.io/coda/jobs/4794809002), [Levels](https://levels.link/growth), [Prenda](https://apply.workable.com/prenda/j/AC98C5FDFB/)
3. **Design**: [Ashby](https://jobs.ashbyhq.com/ashby/145ff46b-1441-4773-bcd3-c8c90baa598a), [Cascade](https://www.cascade.io/jobs/analytical-product-designer), [Office Hours](https://docs.google.com/document/d/1_aHEl08ahc6NjOhwmi9GQlNv8CvlOwf8hL-FyCrmAes/edit), [Runway](https://www.notion.so/A-Product-Designer-baa24543701f472bb291d4429812064a), [Stytch](https://jobs.lever.co/stytch/675e6a11-5a33-41bc-9315-5a3ca141d444), [Watershed](https://www.notion.so/Designer-Watershed-7cb7bf8bd750432399d36e83e4e32391)
4. **Engineering manager**: [Cerebral](https://boards.greenhouse.io/cerebral/jobs/4076598003)
5. **Frontend engineer**: [Levels](https://www.notion.so/levelshealth/Join-Levels-Remote-Developer-58454f0db7e3466692f7b75db6237ddf), [Practice](https://www.notion.so/Front-end-Developer-929e1933b9b4432a851043adbb7bff04)
6. **Backend engineer**: [Coda](https://boards.greenhouse.io/coda/jobs/4489268002), [Sourcetable](https://sourcetable.com/jobs#backend-engineer), [Transform](https://transformdata.io/careers/)
7. **Fullstack engineer**: [Cascade](https://www.cascade.io/jobs/full-stack-product-engineer), [Centered](https://www.notion.so/Software-Developer-e7cad269968e4d5aaeb1f6da9e282626), [Cerebral](https://boards.greenhouse.io/cerebral/jobs/4188468003), [Icebreaker](https://icebreaker.video/product-engineer), [Iggy](https://www.notion.so/askiggy/Full-Stack-Engineer-IggyAPI-5a8c1825028e421b9587538718f370b4), [Primer](https://www.notion.so/Senior-Software-Engineer-Full-stack-web-San-Francisco-CA-3a0af35008104def82836a5b9a5a88e1), [Runway](https://www.notion.so/A-Product-first-Full-stack-Engineer-5e056689b68048aeb1ccfea6ac73eb9e), [Snackpass](https://jobs.lever.co/snackpass/7c3bb72b-70d3-45ca-9dea-eea57ed5333d)
8. **iOS engineer**: [Pairplay](https://www.notion.so/Lead-iOS-Developer-ba18577b6ba44ad68e45b8e7a957353c), [Primer](https://www.notion.so/Senior-Software-Engineer-iOS-San-Francisco-CA-87f0fd3ee3dc4c3f8d0419c07fcdd434), [Stytch](https://jobs.lever.co/stytch/d3bf3860-4aaa-4a23-8e28-dad20957be44), [Vori](https://www.notion.so/Mobile-Engineer-Vori-c5ceccd966a04c8aa9e970f0355ca13c)

## **🧠 Inspiration for the week ahead**

1. **Listen**: [Does Advertising Actually Work?](https://freakonomics.com/podcast/advertising-part-1/), by Freakonomics podcast
2. **Read**: [The Unusual Signs of a Billion Dollar Company](https://www.nfx.com/post/unusual-signs-billion-dollar-companies/), by Elad Gil
3. **Learn**: How to give product feedback

#### **How would you rate this week's newsletter? 🤔**

[Great](https://t.sidekickopen82.com/s1t/c/5/f18dQhb0S7kF8cV_VXW1CdjwB59hl3kW7_k2847sD3qkVNxJHk1CX2ZcW2bzNJl8lkfc1101?te=W3R5hFj4cm2zwW4cQKtC3KcLnYW4hLZp03ZVbTxW1JB0ML1--tKxW20ZTw51-YpBFW1W_jBk1ZmvHBW21j9tt1-_j_TW1Vnkcj1V3fMvw1V21pC4Hp2&si=7000000001348012&pi=6174bab6-7009-4402-a497-3d6f867fbea1) • [Good](https://t.sidekickopen82.com/s1t/c/5/f18dQhb0S7kF8cV_VXW1CdjwB59hl3kW7_k2847sD3qkVNxJHk1CX2ZcW2bzNJl8lkfc1101?te=W3R5hFj4cm2zwW4cQKtC3KcLnYW4hLZp03ZVbTxW1JB0ML1--tKxW20ZTw51-YpBFW1W_jBk1ZmvHBW21j9tt1-_j_TW1Vnkcj1V3fMvw1V21pC4vX2&si=7000000001348012&pi=6174bab6-7009-4402-a497-3d6f867fbea1) • [Meh](https://t.sidekickopen82.com/s1t/c/5/f18dQhb0S7kF8cV_VXW1CdjwB59hl3kW7_k2847sD3qkVNxJHk1CX2ZcW2bzNJl8lkfc1101?te=W3R5hFj4cm2zwW4cQKtC3KcLnYW4hLZp03ZVbTxW1JB0ML1--tKxW20ZTw51-YpBFW1W_jBk1ZmvHBW21j9tt1-_j_TW1Vnkcj1V3fMvw1V21pC4kr2&si=7000000001348012&pi=6174bab6-7009-4402-a497-3d6f867fbea1)

*Have someone in your life who would benefit from this newsletter? Feel free to forward this to them, or better yet, give them a gift subscription* 💖

Sincerely,

Lenny 👋
