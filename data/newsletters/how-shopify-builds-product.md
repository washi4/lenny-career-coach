---
title: "How Shopify builds product"
subtitle: "VP of Product Glen Coates on how Shopify plans around yearly themes, organizes around jobs to be done, tracks using a homegrown tool, why they shifted away from a GM structure, and much more"
date: "2023-07-25"
type: "newsletter"
tags: ["design", "leadership", "newsletter", "organization", "engineering", "strategy"]
word_count: 4586
---

Shopify has always done things a bit differently. They’ve been remote-friendly long before Covid, recently [canceled all of their recurring meetings](https://www.fastcompany.com/90888605/shopify-exec-this-is-what-happened-when-we-canceled-all-meetings) (and now even [show how much each meeting is costing attendees](https://qz.com/if-you-want-fewer-meetings-measure-them-in-cash-1850632407)!), and famously are on a mission to “[arm the rebels](https://qz.com/1954108/shopify-is-arming-the-rebels-against-amazon).”

The business has been an unprecedented success story, too. Shopify now powers over 10% of all U.S. e-commerce, hosts a large swath of the world’s biggest e-commerce businesses, including Supreme, Glossier, Mattel, Vuori, Gymshark, and Allbirds, has processed over half a trillion dollars of GMV, and generates nearly $6B (!) of revenue per year. Shopify is also 17 years old, with almost 10,000 employees, but continues to execute like a startup and launch innovative products like [Sidekick](https://twitter.com/tobi/status/1679114154756669441) (an AI business partner), [immersive product description pages](https://twitter.com/kalenjordan/status/1682102256022192128?s=20), and the world’s highest-converting checkout platform, [Shop Pay](https://news.shopify.com/shop-pay-ccs).

To learn from Shopify’s experience scaling and optimizing their product org, I sat down with [Glen Coates](https://www.linkedin.com/in/glcoates/), VP of Product, responsible for the core Shopify product—the largest product team within the company.

**Here’s what stood out to me most about Shopify’s approach to product:**

1. Their CEO Tobi’s yearly themes, and how they inform every team’s planning
2. Their aversion to OKRs
3. Their homegrown task tracking system, called GSD—Get Shit Done
4. Their shift away from a GM structure, and their move from 10 business units down to two
5. Teams being structured around jobs to be done
6. Their AAA framework for handling stakeholders—Aiming, Assembling, and Achieving
7. Their recursive internal mantra that ends with “The third priority is never to reverse priorities one and two”

Glen is also going to be announcing a swath of product updates to the Shopify platform tomorrow morning as part of the [Shopify Editions Summer ’23 launch](https://www.shopify.com/editions). For more from Glen, follow him on [LinkedIn](https://www.linkedin.com/in/glcoates/) and [Twitter](https://twitter.com/glencoates?lang=en). For more stories of how the best product teams operate, don’t miss my interviews with [Figma](https://www.lennysnewsletter.com/p/how-figma-builds-product), [Coda](https://www.lennysnewsletter.com/p/how-coda-builds-product), [Duolingo](https://www.lennysnewsletter.com/p/how-duolingo-builds-product), [Miro](https://www.lennysnewsletter.com/p/how-miro-builds-product), [Ramp](https://www.lennysnewsletter.com/p/how-ramp-builds-product), [Notion](https://www.lennysnewsletter.com/p/how-notion-builds-product), and [Snowflake](https://www.lennysnewsletter.com/p/how-snowflake-builds-product).

# How Shopify builds product

![Image from How Shopify builds product](https://substack-post-media.s3.amazonaws.com/public/images/586ee879-d8a7-48e0-b926-e49cd1f2378b_1066x1600.jpeg)

### 1. How far out do you plan in detail, and how has that evolved over the years?

Until very recently, Shopify had an annual planning process where we’d present plans to the CEO and Finance in August or September. We’d write these long docs, but unsurprisingly, they’d usually get torn up by about March. So planning became this charade of *we’re going to do this insane planning thing, but we know it’s all just going to go sideways in three months*. We all know how crazy it’s been out there; things are changing so fast all the time. People who think they can see a year out are mostly kidding themselves.

Instead now, once a year, [Tobi](https://twitter.com/tobi) [Shopify’s founder and CEO] sets themes for the year. This year there were six that reflect top-level priorities. They’re always written from the point of view of the merchant. We try to imagine a Shopify merchant writing an email to a friend where they say, “Here’s why I love Shopify, and here’s why I’m going to keep using it for my business.”

One of the themes that Tobi added this year was “Shopify keeps me on the cutting edge.” Which is an amorphous thing, “the cutting edge”—what does that mean? Is it developer tooling? Is it AI? Is it evolving regulations like [ATT](https://developer.apple.com/documentation/apptrackingtransparency)? Is it how I optimize my checkout for conversion? It could be any of that, which is the idea. We want merchants to focus on their business. We want them to think, “Hey, I’m just a guy trying to sell candles. Do I really want to have to learn everything about checkout conversion optimization? Do I really want to have to read white papers coming out of OpenAI, or can I trust that Shopify’s got me and I can just focus on my candles?” This year, especially with AI, that theme was such a focusing lens for us. We have to be on the bleeding edge so merchants don’t have to be.

Once we have Tobi’s themes, one level lower within each top-level team (e.g. Core), we think about the ways we could measure our impact against those themes. We come up with what would end up being called an objective or something that smells a bit like an OKR (though we would never say that here).

That turns into a rough six-month roadmap. This aligns with our twice-yearly releases, [Shopify Editions](https://www.shopify.com/ca/editions/all), which are our big releases with hundreds of improvements, features, and products.

![Image](https://substack-post-media.s3.amazonaws.com/public/images/978d495a-c371-4e97-8901-37030c9de1d1_982x852.jpeg)

We want to have very high confidence in what’s going to be shipping in the next Edition, and some idea of what will go in the one after that, but we don’t try to think too much further than that. Then every six weeks, teams come together and do their sprint-level detailed planning of what they are doing right now.

So that’s kind of the lay of the land in terms of planning. Themes once a year, which gets translated into a six-month plan, and then there are four six-week cycles inside each half.

But again, things are changing so much right now. The world economy just went upside down last year, and that changed things. The world of AI appeared earlier this year, and that changed things. So I think we’ve learned the hard way that the world doesn’t seem to be slowing down, and being able to react and not being married to the plan is actually the most important thing.

### **2. You said you never use the word “OKR,” but let me ask you anyway—have you used OKRs in some form, and how has that changed over the years?**

I’m not aware of us ever using OKRs formally at Shopify, but people end up using things that smell like them all the time. If I had to say why there is an aversion to them, I think it’s really two things. One, it’s part of the culture—there’s a bit of an affinity for chaos and change that doesn’t embrace structured systems. In a sense, that’s just who Tobi is. Tobi is very truth-seeking in the sense of whatever the truth is, he just wants to go there, and systems and structures that stop him going to the truth are bad in and of themselves.

If you look at companies like Google, Facebook—things that are very aggregatory, very funnelly, very at-scale consumer products—they’re often very metrics-oriented. A team owns a number, and the goal is to do whatever they have to do to make that number go up. I think Tobi just does not agree with that philosophy of product development and thinks that you end up with a lot of micro-optimizations of local maxima that may say you drove that number up, but the product just doesn’t feel good anymore. The product doesn’t fit well together, and it feels like one part is pushing me in one direction and the other part in another. You can’t really explain why that is until you find out that there were two teams inside the company who had different metrics they were optimizing for. That’s when you realize why the product is so weird and incohesive.

On the other hand, there are some parts of Shopify where we do care a lot about metrics. A good example would be the Checkout team, who cares a lot about checkout conversion rate because there’s a one-to-one relationship between that and the money that our merchants make. We’re extremely focused on metrics when it comes to performance.

We care a lot about the speed and quality of the product itself, but we’re not the kind of company that would deem something a failure or not approve something to go ahead just because you can’t put a metric on it. As an example, right now we’re working to significantly change the look and feel of the Shopify Admin [the seller dashboard] for no reason other than it’ll look better and we think it’s the right thing to do. There’s zero metrics attached to it. The only thing that matters is that we come out the other side, look at it, and think: *That’s rad. I’m psyched. Merchants are psyched.* That’s it.

![Image from How Shopify builds product](https://substack-post-media.s3.amazonaws.com/public/images/7e7776f4-5947-44a4-ba22-fcd68db0bf16_1600x900.png)

### **3. How do product/design review meetings work?**

Shopify has an internal system called GSD, which is a bit like Jira or a task management app, except it’s not really a task management app. It’s a project stakeholder reviewing tool. It stands for “Get Shit Done.” Every project that any team does goes in GSD, which has five phases of review:

1. Proposal
2. Prototype
3. Build
4. Release
5. Results

Here’s what this looks like in an actual screenshot of GSD:

![Image from How Shopify builds product](https://substack-post-media.s3.amazonaws.com/public/images/9547ef9b-2db8-495e-bc95-2a839ba7fb55_1118x184.png)

We have a system called OK1 and OK2, and for any particular team there’s a front line of reviewers. On OK1s, it’s usually the directors from product, UX, engineering, and sometimes data who all have to sign off. And then it comes up to the senior leadership team (SLT), which we call OK2, which includes, again, product, UX, engineering, and data, who all have to sign off on it as well.

It’s actually been really good practice for the PM team, because most of these reviews come with a short video from the PM explaining what the product or project is. I think it’s great practice for PMs to have to say, very concisely, “What is this thing? Why is it valuable? How does it work?” So they get a lot of practice storytelling in tight videos.

Usually we do these reviews async and we trade comments. Sometimes, though, we set a meeting to talk synchronously when we know the topic will be super-controversial or it’s a big deal. We also have an office-hours rotation where if you need to get in for a 30-minute review for quick feedback on not very much notice, there’s a lever to pull.

In terms of who makes the calls in product reviews, I generally think of it like this: product makes the call on *should we do this at all*, Engineering and UX essentially has the veto power on *how* we do it, and then at the end of the day, the PM has to put their body on the line for *is this ready to ship*. If they say yes and the thing’s garbage, then the PM has to wear it. That’s generally how that works.

### **4. Are product and design part of the same org? And who do PMs ultimately report to? Has this changed over the years?**

Tobi is the head of R&D (and also CEO) at Shopify, and there are two people who report to him, who all the PMs report to. One of them is me and the other is [Kaz](https://www.linkedin.com/in/kasranejatian/?originalSubdomain=ca). About half the PMs report to each of us.

In my org, product, UX, marketing, ops, and partnerships all report up into me, and engineering and data have their own functional orgs separately. Under me, the reporting lines go functional. So the head of UX reports to me, and all of UX reports to her. I have a head of product marketing, and all of product marketing reports to her.

![Image from How Shopify builds product](https://substack-post-media.s3.amazonaws.com/public/images/e05b4b6b-dbf3-4343-ba71-f654233198b8_1600x1074.png)

In 2018 we had a GM structure, with about 10 GMs at Shopify, each of whom had all the functions for their business unit reporting to them. Then, about two and a half years ago, Tobi reorged the company from 10 divisions to two.

The two divisions are:

1. **Core:** What I run product for, which is what’s in the box when you buy Shopify—all the included features, the online store, checkout, and Admin.
2. **Merchant services:** Think of it as the optional add-ons for Shopify, the point of sale, the payment processing, and the shipping labels. This also includes **Shop**—the buyer-facing brand, the wallet, the package tracker, the shopping.

There were many reasons for our move away from the GM structure, but one of the biggest reasons was because as the company grew and our product became wider, with lots of capabilities, the advantage we have versus your competitors is the breadth of the feature set—the one-stop-shopness of your product. That value really starts to fall apart if the parts of the product don’t work well together and don’t seem like they were crafted from a single vision.

This is the challenge that all big tech companies need to overcome. Can you tell how our org structure works by looking at the product? Can you see where the breaks are in the product or not? The best companies figure out how to make sure you can’t see the org chart through the product.

This org structure that we’re in right now, it has downsides to it (e.g. very large teams that require a lot of centralized coordination), but the big upside is that the org chart and the actual product are very close to the same thing (e.g. we are respecting [Conway’s law](https://en.wikipedia.org/wiki/Conway%27s_law)). This helps us deliver on what our merchants want: products that work well together and are all aimed in a single, consistent direction.

### **5. Do you structure your teams around products, user types, user journey, outcomes, or something in between? Has this changed over the years?**

We’re structured essentially around jobs to be done. Within Core, we have 11 teams, and they are oriented around the main merchant jobs to be done. There are some that are obviously semi-standalone bits of the product, like the online store and the checkout. Once you get into the back end, we have a team called Merchandising, and the job to be done there is all about how to set up and sell products. There’s a team called Engage, which mainly focuses on marketing and customer engagement. There’s a team called Build, which manages the developer platform. There’s a team that manages the app ecosystem and all the dynamics around that.

Part of the reason we focus teams around jobs to be done is to honor a promise Shopify tries to make and keep to its merchants. We never want merchants to bump into the ceiling that says, *I love this product, but it’s not scaling to meet my needs. Now I have to go do the really painful thing of moving my entire business onto some other platform.*

We want teams to think about the whole spectrum. Everyone from my mom, if she wants to get started selling pottery tomorrow, all the way up to big brands like Supreme. We don’t want there to be any rough edges on that curve. As a merchant’s business gets bigger, we don’t want there to be a weird moment where Shopify flips into enterprise mode, where suddenly everything’s different. We want that to be a smooth curve all the way up, and we just need every team to care about that, so there is no “Enterprise Team” or “Small Business Team”; each team needs to think about “hello world through to IPO” for their features.

![Image from How Shopify builds product](https://substack-post-media.s3.amazonaws.com/public/images/a79c9d4d-bfa3-4531-95f9-889f58033e93_1600x900.png)

In terms of jobs to be done, we don’t use the hardcore, capital JTBD framework or anything like that. There are gray areas around the edges of some of these things. There’s also a very big variance in the maturity between different jobs to be done within the company. Shopify is a world leader in checkout, for example. I think the next company to us in the world, in the landscape of checkouts on the internet, isn’t even close. We’re world leaders by a big margin. But then you take our Engage team, which builds the marketing tools and customer segmentation—that’s really like a challenger, an upstart, versus a Salesforce Marketing Cloud or things that are much more steeped in those categories.

### **6. What’s in your product team’s tool stack?**

It’s super-basic. GSD is the big thing. Google Docs. GitHub for actual task tracking at the team level of sprints and tickets and stuff like that. Descript for sending videos around. We try to keep it pretty simple.

We don’t use Jira. I think we’ve hemmed and hawed about that for many years. When I got to Shopify, it was a bit of a Wild West tooling thing, where every team got to pick their own tooling. Everyone had to use GSD for registering that we are working on this project, but the day-to-day management of the tickets was all over the place.

When I got here, some people were using Jira, some people were using GitHub Issues, some people were using Asana. It was just chaos. I ran a 50-person startup when we were acquired by Shopify called [Handshake](https://www.linkedin.com/company/handshake-corp/about/), and Handshake was way more disciplined about tooling than Shopify was at that point. The first question I asked was, “Where’s the big Jira instance?” and people were like, “Oh, there isn’t one. People just do whatever they want.”And I was like, *What are you actually talking about? How the hell does this place even work? What is wrong with this place?* Eventually we cleaned it up, but it’s been a bit of a journey to streamline our tooling.

### **7. How many PMs are there at Shopify?**

We have a few hundred, half of whom report into Core.

### **8. What percentage of ideas come from the top down and what percentage come bottom-up, roughly?**

I would say if we drew the line at Director of where top-down starts, about three-quarters of the roadmap comes from the top down. The other quarter is teams saying, “We want to improve this thing about our area. It’s not some huge roadmap, but we just think this could be better.” There is a steady stream of that stuff. So it’s probably two-thirds or three-quarters top-down, mostly big rocks, and about a quarter bottom-up, polishing and small features.

I think most companies think of hierarchy and jobs basically as this sort of single line of leadership downward, based on how senior you are. But a few years ago we introduced something called the AAA framework, which is basically three parts:

1. **Aiming:** strategy and direction of what we are building
2. **Assembling:** operational stuff to bring the right people together and keep them on track
3. **Achieving:** the day-to-day work of getting shit done (GSD) like design, code, etc.

![Image from How Shopify builds product](https://substack-post-media.s3.amazonaws.com/public/images/a7bbd378-4e42-4fe3-b827-474992cc56fc_744x824.png)

I was honestly very skeptical of it, but I’ve found them to be very useful. I’m glad to have been proven wrong. It’s been useful to identify people who are actually passionate about one more than the other. You don’t want to take on a leadership job and suddenly be responsible for aiming when you’re really passionate about assembly, or the other way around. It’s helped us put people in the right roles and not just have one dimension of leadership that everyone has to conform to.

On projects, it’s really good to be able to know who’s the aimer, responsible for the strategy. It may not be the most senior person in the room; it may be the staff designer or the staff engineer. It’s sometimes good to know that the team’s manager actually isn’t the aimer, which is by design. Then there’s usually dedicated product ops and program management people who are responsible for the assembly. And of course the achievers, who actually do the work.

### **9. You build one of the most beloved and successful products out there. What would you say is unique or central to your approach that leads to such a great and successful product?**

It’s a little bit of a cliché, but I would say the fact that Shopify is still founder-led is a big deal. I don’t think anyone can or will ever care as much about Shopify the product and its merchants as much as Tobi does. I think everyone really believes and feels that. Tobi’s also really good at pushing out the values of being merchant-obsessed. This is also one of the things that I learned when I got to Shopify that was one of those nice luxuries. Shopify has been and still is such a successful company that Tobi was able to both establish and live by a set of very merchant-focused values for a very long time. That, just by osmosis, seeped into everyone’s brain. There’s such an insane culture here of doing the right thing for merchants, even at the expense of revenue or other users like buyers or developers. You can have that culture if you have a successful business where you can live that and the business still succeeds. That’s a cultural thing that runs through everything.

![Image from How Shopify builds product](https://substack-post-media.s3.amazonaws.com/public/images/e4b04981-3945-4d15-9abc-14892fe23685_1200x1600.jpeg)

The other thing we have is a super-high quality bar. We’re constantly asking, “Is this good enough? Are we proud of this?” Honestly, the main motto inside of Shopify is this kind of mantra. It goes:

1. The number-one priority is to make the best product in the world for our merchants.
2. Our second priority is to make some money so we can do more of number one.
3. The third priority is never to reverse priorities one and two.

![Image from How Shopify builds product](https://substack-post-media.s3.amazonaws.com/public/images/48976cc0-ddf8-4e8c-863f-572a515b29f9_720x405.png)

There’s a militant hard line about quality that has been really cool for me. I came from a startup, where you’re just constantly forced to cut corners and do shit that you don’t like to make the next round or to close the next deal. One of the things that I started feeling last year was that I just insist that Shopify is a great product at the level of something that Steve Jobs would have been willing to put his name on. I’m not here to do the version that’s kind of, sort of okay, or thinking that whatever makes money is good enough. This could very likely be the most widely distributed software product I ever work on in my career.

I often think of it as, is this iconic in the way that Apple products are iconic? Is it iconic in the way that Porsche is iconic? Is it iconic in the way that Rolex is iconic? I think that being at a company that values that and has the capacity to do that has actually been one of the most inspiring things for me. In the past couple of years, because Shopify is a market leader, in some ways I think we’re kind of on top. But then I turn and I look at the products and I see all these little things where I’m like, *That’s fucked-up. That could be better. Why are we doing that?* I believe that this could actually just be one of the truly great products and we can do it. We’ve got the resources. We should actually just go do that.

### **10. I imagine much of your success has been thanks to hiring well and keeping a very high bar. In your product hires, what do you most look for (that maybe others don’t), and, broadly, what does your interview process look like?**

I have a really simple interview process. Not to give too much of the game away, but I only ask four questions. The first question is “Tell me about a product that you were responsible for that went well, and tell me the story of that thing.” The second question is “Tell me about a product that you’re responsible for that didn’t go well, and tell me the story of that thing.” And then I do the same two questions for a product manager who worked for you.

I’m looking to understand how a person thinks about what good or bad looks like. How did they react when things went wrong? How insightful is their analysis of what they would do differently, especially in the product that went well or the PM who went well; how much reflection is there on what could have been done better? Even in the things that went well, is this person tortured by that thing that they didn’t do well even in that product that was ridiculously successful?

Honestly, I’m looking for sheer horsepower and grit. I don’t care that much about people who are super-frameworky, people who are super-processy. I just want people who are tenacious builders who are really smart and have done the work to be reflective about what they would actually do differently.

![Image from How Shopify builds product](https://substack-post-media.s3.amazonaws.com/public/images/8d7dca6d-2d27-48a0-9aac-0a2c78baa537_1600x1200.png)

*Thank you, Glen! For more from Glen, check him out on [LinkedIn](https://www.linkedin.com/in/glcoates/) and [Twitter](https://twitter.com/glencoates?lang=en), and don’t miss the [Shopify Editions Summer ’23 launch](https://www.shopify.com/editions), which Glen will be hosting.*

*For more stories of how the best product teams operate, don’t miss my interviews with [Figma](https://www.lennysnewsletter.com/p/how-figma-builds-product), [Coda](https://www.lennysnewsletter.com/p/how-coda-builds-product), [Duolingo](https://www.lennysnewsletter.com/p/how-duolingo-builds-product), [Miro](https://www.lennysnewsletter.com/p/how-miro-builds-product), [Ramp](https://www.lennysnewsletter.com/p/how-ramp-builds-product), [Notion](https://www.lennysnewsletter.com/p/how-notion-builds-product), and [Snowflake](https://www.lennysnewsletter.com/p/how-snowflake-builds-product). Have a fulfilling and productive week 🙏*

## 📣 Join Lenny’s Talent Collective 📣

If you’re hiring, [join Lenny’s Talent Collective](https://www.lennysjobs.com/talent/welcome) to start getting weekly drops of world-class product and growth people who are passively open to new opportunities. I hand-review every application, and accept less than 10% of candidates who apply.

![Image from How Shopify builds product](https://substack-post-media.s3.amazonaws.com/public/images/8638d278-ac01-4f28-b2c9-39f1dd6e4724_1492x1194.png)

If you’re looking for a new gig, apply to join! You’ll get personalized opportunities from hand-selected companies. You can join anonymously, hide yourself from companies, and leave anytime.

[Apply to join](https://www.lennysjobs.com/talent)

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true) and [gift options](https://www.lennysnewsletter.com/subscribe?gift=true).**

Sincerely,

Lenny 👋
