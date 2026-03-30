---
title: "How Notion builds product"
subtitle: "Chief Product and Technology Officer Michael Manapat on Notion’s evolving internal processes, product reviews, planning cadences, and increasing shift to synchronous communication"
date: "2023-05-30"
type: "newsletter"
tags: ["leadership", "design", "organization", "product-management", "newsletter", "engineering"]
word_count: 4415
---

Last week I was working in my home office, and I heard my wife in the other room yell, “I love Notion!” I know what she means. With over 20 million people and hundreds of thousands of teams using Notion around the world to organize their work and get things done, she’s not alone. Notion is currently the [fourth fastest-growing app](https://www.okta.com/businesses-at-work/) in the world (it was [#1 last year)](https://www.okta.com/businesses-at-work/2022/) and, unsurprisingly, has also been the most requested team for me to chronicle in my ongoing series on how the best product teams build product.

I’m excited to finally deliver, and it’s been worth the wait. A huge thank-you to [Michael Manapat](https://www.linkedin.com/in/mlmanapat/), Notion’s Chief Product and Technology Officer, and the whole Notion team, for answering my many questions. Per usual, you’ll find tons of actionable lessons and frameworks, and more than any other edition, it’s jam-packed with plug-and-play templates.

**Here’s what stood out to me most about Notion’s approach to product:**

1. The amount of iteration they’re going through as they scale through hypergrowth
2. How few PMs (and designers) they have ([similar to Ramp](https://www.lennysnewsletter.com/i/122125031/how-many-pms-are-there-at-this-point)!)—and how long they waited to hire their first product manager
3. Their four-point product review process
4. How interconnected all of the products are, and how that impacts their org design
5. Their twice-yearly planning cycles, two-week sprints, and quarter-plus planning cadence ([similar to Coda](https://www.lennysnewsletter.com/p/how-coda-builds-product)!)
6. Their shift from primarily async product feedback to more of an emphasis on real-time conversations
7. The fact that data, design, research, eng, PM, UXR, and security all report up to Michael—and why that’s the case

Also, as you’ll see below, Notion is launching **Notion Projects** tomorrow, May 31. Notion Projects combines project management with your docs, knowledge base, and AI in one connected workspace. [Learn more about it here](https://ntn.so/lennysnewsletter).

*For more from Michael, follow him on [LinkedIn](https://www.linkedin.com/in/mlmanapat/) and [Twitter](https://twitter.com/mlmanapat). And for more stories of how the best product teams operate, don’t miss my other deep dives into [Figma](https://www.lennysnewsletter.com/p/how-figma-builds-product), [Coda](https://www.lennysnewsletter.com/p/how-coda-builds-product), [Duolingo](https://www.lennysnewsletter.com/p/how-duolingo-builds-product), [Miro](https://www.lennysnewsletter.com/p/how-miro-builds-product), and [Ramp](https://www.lennysnewsletter.com/p/how-ramp-builds-product).*

# How Notion builds product

![Image from How Notion builds product](https://substack-post-media.s3.amazonaws.com/public/images/3bed5169-37d1-4b5f-ab6e-0594fbe3fb9a_1500x1200.png)

### 1. How far out do you plan in detail, and how has that evolved over the years?

I make the joke that we change how we plan every planning cycle and that we need to plan for planning. Historically, we didn’t really look beyond what we wanted to do in a given half. And that’s actually something we have recognized is a bit of a problem, in that we’re always solving for what we can do in a few months and not thinking as holistically as we could be about the long term. We’re figuring out how we can both maintain the coordination rigor and discipline that regular planning provides while also making sure we have the room to think more broadly about the future.

All that said, we roughly plan for each half, with differing resolutions for the two quarters. As an example, at the beginning of this year, we said for Q1, list out all of your projects in detail with a prioritization of the roadmap, and for Q2, just give some high-level bullet points of what you think you’ll be working on. We then did planning for Q2 as the quarter started, taking those bullet points and making them concrete, with some added guidance for things that changed in the company strategy between Q1 and Q2.

![Image from How Notion builds product](https://substack-post-media.s3.amazonaws.com/public/images/60aeef65-06dd-4487-839b-9d6028d24550_3840x2160.png)

In terms of how teams operate within each quarter, one thing philosophically is that I don’t like mandating organization-wide process approaches—at least in terms of how teams run themselves. (We do have org-wide processes for product review; see below.) We generally leave it to individual groups or teams to figure out what type of cadence makes sense for them. These days, however, it is the case that all product teams operate on two-week sprint cycles, and those cycles are all aligned across the organization. This last sprint just started yesterday, actually, across the whole company.

What individual teams do for sprints varies a lot. Some are quite disciplined and precise—they actually write down all of the commitments they think will get done, and at the end of the sprint they will assess what exactly got done that sprint. For the teams that are, say, doing longer-term work on infrastructure, sprints are more just a unit of time and not an accountability mechanism. So the only thing that’s really shared is this two-week cycle, but there’s a lot of variation in what people do within their team.

![Image from How Notion builds product](https://substack-post-media.s3.amazonaws.com/public/images/6417bab0-a541-476a-bcde-2f896c22c9bb_1920x1080.gif)

I’m always wondering—we’re not that large a company, at 550 people—can we just be a bit more dynamic? We know what the strategy is and what our goals overall are, so can we do something a bit more continuous? The whole “we’re going to stop the whole world to figure out what to do for the next half”—it’s really important, especially for coordination with our go-to-market teams and other cross-functional ones, but *within* the product org it’s not clear to me that it suits our needs particularly well. But I also don’t have a better approach yet.

### 2. **How many PMs do you have?**

Under 15. Out of 550 people. Our product management team is tiny. As you probably know, we waited a long time to hire product managers. We didn’t have PMs until two years ago, at around 50 or 60 engineers. I’m not sure this was actually ideal. Both Notion and my former employer Stripe are both very engineering-driven to start, and both companies have a very product-minded engineering core, which I think is a great thing. That said, there is a difference between engineers who think about product, and product managers who are out there talking to users and bringing in user feedback constantly, coordinating closely with go-to-market teams, and thinking deeply about product strategy. And I think that was missing at Notion early on. So I’m glad we have PMs now and that we’re growing the product management team.

One thing that’s interesting about Notion is that no part of the product can really be isolated. At [Stripe](https://stripe.com/), there were a number of essentially completely independent product lines. In the group that I managed, the products were only linked by the competencies needed to build them (beyond general product work, there was a need for machine learning and AI depth). For example, there was [Radar](https://stripe.com/radar), the fraud product. And there was [Capital](https://stripe.com/capital), a lending product. And they were linked by being ML- and AI-powered products, but they were otherwise independent—very little that Radar did would affect Capital and vice versa. You can’t decompose Notion into individual products. So if you’re working on the Project Management offering at Notion and you change how databases work, or you change how pages work, that has implications for the use of Notion as a docs tool or a wiki tool. So there is a bit more of this central planning and product coordination problem here to make sure that things are considered holistically and that people aren’t stepping over each other in a way that makes the product worse.

### 3. Do you use OKRs in some form?

Yes, we use OKRs at the company level as part of planning. The output of each of these twice-yearly planning cycles is a set of company objectives and a set of key results.

![Image from How Notion builds product](https://substack-post-media.s3.amazonaws.com/public/images/4b0f8342-037a-40a8-b81a-04d23d945c79_3840x2160.png)

There’s more variation below the company-level OKRs. Some teams or groups do have OKRs; for example, teams working on product-led growth. In other areas, things are sufficiently nascent that a lot of our key results end up being like “ship this thing,” and it has frankly been a journey for us to figure out when so much of what we’re trying to do is zero-to-one work, and how we actually measure success. What does that look like? What is the right framework for it? I would say we’re certainly far from Google, where they have OKRs at the company, the group, the team, and the individual level.

### 4. How do your product/design review meetings work?

This is another area where we’ve been iterating a lot. We used to have something that we called “working sessions.” They would be between 30 and 45 minutes and relatively unstructured. When the team wanted to discuss something with product leadership or we had something we wanted to discuss with the team, we’d actually just ask to meet and the prompt would be something high-level. And these ended up being basically brainstorming or ideation sessions.

What we found was we needed a bit more structure to make sure things were moving along. We also wanted to make sure that feedback from [Notion co-founders Simon Last and Ivan Zhao] and me was coming at known moments, and not just, for example, two days before launch, seemingly out of nowhere.

So what’s happening now is that we have a process where at four points in the product development process, we have a “check-in.” The four points are:

1. The statement of the user problem
2. A discussion of possible directions—what are the three or so high-level possible approaches to solve the user problem, and what does the team recommend?
3. The full solution, with high-fidelity designs and everything scoped out
4. The ship candidate, ready for a final quality check

All of these are predominantly asynchronous. At each of these steps, an engineer, designer, PM, or EM will send an email describing where they are, and then we’ll review and give feedback asynchronously. We’ll talk about everything from “What exactly is the user problem?” to “How does this thing interact with this other thing?” to sometimes nitpicky details of the product.

We’ve discovered, though, that async check-ins don’t work for some types of discussions. What are all the options you explored, and how do you think about each of them? Why did you choose them? Putting that in a doc and explaining that in writing takes a lot of time. People were spending way too much time documenting this stuff, and then when you take into account the email exchanges and then the responses and all of that, the process would drag out for quite a while.

So we’re tweaking our approach right now. For the exploration-of-the-directions step, we’re going to start focusing on in-person discussions with the team. Come in and let’s stare at Figma together, discuss the pros and cons of each variant, ask questions, and align on reasoning. We normally schedule those types of synchronous check-ins for half an hour. Sometimes they’re faster and sometimes they take longer (we had one yesterday, and it went a little bit over, to 40 minutes).

We only began doing this four-stage check-in process in February. To start, we asked for essentially all product work to go through that. By “all,” I don’t mean every *single* change, of course. But any project with meaningful product impact goes through this. And it has been helpful for me, as I’ve ramped up relatively recently on working with our product team, to get a sense of everything that’s going on. But as part of our next iteration, we’re also going to introduce tiering so only P0 projects get reviewed by me.

### 5. Are product and design part of the same org? And who do PMs ultimately report to? Has this changed over the years?

We have a unified product and technology organization—engineering, product management, design, data, user research, and security all roll up to me. Our data lead, design lead, research lead, engineering and product management group leads, user research lead, plus the person working on our overall technical approach and our CISO—they’re all peers and my directs, and we frequently meet and plan together.

I personally really like this, because you get a lot of crosstalk and exposure to what’s going on with all of those people in the same room. If you go back a year, [Janna](https://www.linkedin.com/in/janna-bray-a4046a25/), who leads user research here [and who Lenny worked with at Airbnb for many years!], and [Daniel](https://www.linkedin.com/in/sternbergdaniel/), who leads Data, weren’t frequently in the same forums even though both of their functions involve our learning about our users, their needs, how they behave, etc.

But now everyone has visibility into what the organization overall is working on, and [Fatemeh](https://www.linkedin.com/in/fatemeh-alavizadeh/), who manages our Core Product engineering group here [who Lenny also worked with at Airbnb!]), can hear our Enterprise PM lead [Birkan](https://www.linkedin.com/in/birkanicacan/) talking about plans to work with users at a particular scale and figure out what’s needed on her end. I think more gets surfaced proactively when you have a mixed leadership group like this.

### **6. How do you structure your product teams?**

Right now there are essentially four layers of teams. There are teams working on user-facing use cases or stories or workflows—for example, the project management team, or the docs and wiki team. And they own making sure that the user problems around that use case are solved well by Notion through a combination of leveraging existing primitives in the product, extending them as needed, and developing custom functionality. And then below that, figuratively speaking, there are teams that own what you might call underlying primitives, things like databases in Notion. Databases actually power both the wiki and also project management, so the team that is thinking about wikis and the team that is thinking about project management are both “clients” of this databases team (which we call “Collections” internally).

![Image from How Notion builds product](https://substack-post-media.s3.amazonaws.com/public/images/e62c8def-2f7b-4db1-a22a-411ab010ba95_1920x1080.gif)

And then below that there are Notion-wide systems, like search, notifications, the sidebar, and so forth, with a PM lead—[Ekin](https://www.linkedin.com/in/eoflazer/)—who oversees all of these. And then below that is Infrastructure. That’s sort of how our grouping is right now. (To be clear, these layers are metaphorical and don’t correspond exactly to org structure.)

Sometimes things don’t always map cleanly onto any of these single teams. We have a product team that is thinking about the enterprise segment overall, though their day-to-day work is generally focused on what a particular persona (the enterprise buyer or admin) needs. But with that overall segment focus, they need to think about things like—okay, what do companies with 20,000 users need from a wiki product? Well, they need something like verification of pages. And then they’ll go and advocate for that even if another team builds it (which is what happened here). And also, what do they need from a data residency standpoint and data locality or security? That PM lead is also talking to Infrastructure. Large companies also need Notion to work well with other tools, which necessitates work on our API and integrations—part of the middle layers. So Birkan, that PM lead, is really just working all over Notion and doesn’t map cleanly to a single team.

### 7. What’s in your product-team tool stack?

We use Notion for almost everything—writing, project management, presentations, etc. And we hope at least for product teams that it really can be (almost) everything for them. The “almost” here is a reference to the fact that some important things you do in product—for example, design (we use [Figma](https://www.figma.com/)), experiment setup and analysis (we use [Statsig](https://statsig.com/)), or data analysis (we use [Hex](https://hex.tech/)) you can’t do in Notion, and these aren’t use cases that would make sense in Notion—at least for a while. You can embed your work from many of these tools in Notion, of course, which helps keep Notion the “hub” for all our work.

![Image from How Notion builds product](https://substack-post-media.s3.amazonaws.com/public/images/55285fb8-43cd-4321-9376-3df8387eb3dd_1920x1080.gif)

Unsurprisingly, project management is a big deal for us, both in terms of how we run projects internally and how Notion can enable users to run projects as part of a connected workspace with their other knowledge (their docs, wikis, meetings, etc.). Traditionally you needed to do a fair amount of setup to get the sort of project management framework (with projects, tasks, subtasks, etc.) in Notion that you might in another, project management-specific tool. It was possible given the generality of Notion’s primitives but not always easy. We have a big launch this week that we’re very excited about—it’ll be much easier to use Notion for project management, whether for general use or for issue-tracking for engineering and product teams, and there’ll be direct support for things like sprints. Starting on the 31st, you’ll be able to add [our new project management tools](https://ntn.so/lennynotionprojects) to any teamspace.

![Image from How Notion builds product](https://substack-post-media.s3.amazonaws.com/public/images/70825540-3411-4f4f-94ba-3c2c76497e19_3840x2160.png)

Notion AI is also getting extended so that it’ll automatically infer and complete information for you—by keeping project properties updated as other information changes automatically. We think this will be a big advance for how people use Notion for project management.

![Image from How Notion builds product](https://substack-post-media.s3.amazonaws.com/public/images/7b97dff0-6250-4f41-aa75-28918549fe16_1920x1080.gif)

### 8. You built one of the most beloved and successful products out there. What would you say is unique or central to your approach to product that leads to such a great and successful product?

One goal for Notion is to meet users where they are. If you are a power user and are really obsessed with your tools and customizing them, you’re going to love the flexibility and generality that Notion offers. And if you just want something that works for your particular use case, like a wiki for knowledge management, Notion should also meet you there. We’ve historically focused—and done better—with users in the former camp, but we’re emphasizing the latter more and more (as with tomorrow’s project management launch!). Lots of products are very opinionated and rigid—that makes it easy to onboard and use the product but also easy to outgrow it. And lots of products are very general, but that means they can be excessively complicated. We are aiming—though we’ll be the first to admit we have a long way to go—to strike a balance of both. We sometimes use this metaphor of “peeling an onion,” where users can go as deep into the core as they want.

In our development process, this means we’re often thinking, “How would you build support for this use case, in terms of generic, reusable building blocks?” and “What are things users might want to actually modify in how those blocks are assembled?” (versus “What type of flexibility just adds unneeded entropy to the system?”). This means our route to the final product is often a bit more circuitous than it would be if we were building a “point solution” directly, but capturing that balance of use-case specificity and underlying generality is important to us.

Speaking of people building off the flexibility of Notion, one of the most unique parts about Notion is the vibrant community we have. This started with a few power users hosting events in different cities around the world—they would geek out about their own Notion setups and templates. Today, this community has expanded to campus leaders in colleges, champions inside small-medium businesses, educators on YouTube/TikTok, and consultants who are onboarding large enterprises to Notion. At Notion, we create the building blocks—new capabilities that you can leverage to build things. And each time we build new functionality, the community takes that and builds some incredible things with it.

### 9. I assume much of your success has been a result of hiring well, and keeping a very high bar. In your product hires, what do you most look for (that maybe others don’t), and broadly, what does your interview process look like?

There are some commonalities to hiring for engineering, product, and design here, and we have interviews with the same spirit across all of these roles. One theme, for example, is that we love working with people who care about craft and attention to detail. When we interview engineering managers for product teams, we have an exercise where we give them a product spec and ask them to comment on it as if it were something their team was working on. And we’re interested in everything from what the person says about the problem statement, to how they comment on whether the work is worth doing relative to other things and the ROI to the business, to which pixels or UX elements look off.

Beyond that, we care about your view of your role and how expansive it is. “End-to-end ownership” is important. Let me give you an annoyingly long description of what this means to me. My PM director counterpart at Stripe had been at Microsoft and at Facebook before coming to Stripe. And I always loved his—admittedly reductive—description of product and engineering at those companies.

At Microsoft, the PMs would go into the mountains twice a year and come down with stone tablets and hand them to engineering for execution, almost no questions asked. It was very waterfall-y. At Facebook, if you built the wrong thing, Zuck would yell at the PM. If the thing was built badly, Zuck would yell at the EM. But even there, the spheres of EM and PM accountability were somewhat disjointed. I’m sure this is something of a caricature (I’ve interviewed plenty of EMs and PMs from both companies who decidedly don’t operate this way), but the anecdote is useful as a contrast to what we’re going for at Notion.

We want EMs and PMs to have joint responsibility for everything. Both should be staring at the team, figuring out what it needs to achieve their outcomes, and be willing to do whatever is necessary, without rigidity around role definition. Ideally, the EM and PM are joined at the hip or mind-melded. And yes, the PM will not necessarily be reviewing the full-on details of a tech spec, and an EM might not be working on the details of a launch video with product marketing. But they together own the product and business outcomes. If a PM needs to have one-on-ones with engineers every week, they’ll do that, and if an EM needs to work directly with Customer Success, they will.

### 10. What are some fun or unique traditions or rituals on your product team?

When we were just a few dozen people, Elad Gil published his book *[High Growth Handbook](https://www.google.com/search?q=High+Growth+Handbook&ie=UTF-8),* and there was a chapter on Claire Johnson (also a former colleague of mine from Stripe) and [her handbook](https://growth.eladgil.com/book/the-role-of-the-ceo/insights-working-with-claire/) on how to work with her. Internally, everybody wanted Ivan to publish his own version of that handbook; he is a product visionary but also sometimes intense, and people wanted to understand how to work with him. So anyway, he wrote his handbook—as a Notion doc, of course—but said, “Hey, before I share this doc, let me share my life story.”

![Image from How Notion builds product](https://substack-post-media.s3.amazonaws.com/public/images/9e99b021-6570-4d3d-8cd7-11d4e2e50e42_3840x2160.png)

And he ended up talking for 45 minutes about his life and how he got to where he is now—his family, his childhood interests and passions, Notion’s very early days, and more. When he ended, we were like, “You know what? That’s the perfect handbook. We don’t need to see the other doc; just seeing your life story actually gives me enough to know how to work with you.” And that description of the life story has become a ritual. Every Friday someone walks through their story over lunch, and everyone loves it.

*Thank you so much, Michael!*

*For more from Michael, follow him on [LinkedIn](https://www.linkedin.com/in/mlmanapat/) and [Twitter](https://twitter.com/mlmanapat). And if this post resonates, [Notion is hiring](https://www.notion.so/careers)! Have a fulfilling and productive week 🙏*

## 📣 Join Lenny’s Talent Collective 📣

If you’re hiring, [join Lenny’s Talent Collective](https://www.lennysjobs.com/talent/welcome) to start getting weekly drops of world-class product and growth people who are passively open to new opportunities. I hand-review every application, and accept less than 10% of candidates who apply.

![Image from How Notion builds product](https://substack-post-media.s3.amazonaws.com/public/images/8638d278-ac01-4f28-b2c9-39f1dd6e4724_1492x1194.png)

If you’re looking for a new gig, apply to join! You’ll get personalized opportunities from hand-selected companies. You can join anonymously, hide yourself from companies, and leave anytime.

[Apply to join](https://www.lennysjobs.com/talent)

### 🔥 Featured job opportunities

1. **Thoughtful:** [Technical Product Manager](https://www.lennysjobs.com/jobs/6062e014-eda9-4781-a3bc-3a1fe309fefc) (SF, Austin)
2. **Thoughtful:** [Head of Product](https://www.lennysjobs.com/jobs/b6c37021-7a1d-4201-8ff4-e35ee0085bc4) (NYC, SF, Austin)
3. **Splash Sports:** [Director of Growth](https://www.lennysjobs.com/jobs/473f331a-d082-445e-8c7f-69089828732a) (SF, Denver, Boston)
4. **Zinc:** [Senior Product Manager](https://www.lennysjobs.com/jobs/a5525e7d-cf8e-46b6-a602-772144ae12df) (London)
5. **Zinc:** [Product Designer](https://www.lennysjobs.com/jobs/f6c53038-8192-4e08-8576-15c4abbbdea1) (London)
6. **Wingspan:** [Product Design Lead](https://www.lennysjobs.com/jobs/6122b947-a5e1-44c9-a45e-30e305394589) (NYC)
7. **Mindbloom:** [Creative Producer](https://www.lennysjobs.com/jobs/389f9fcf-65bb-4852-836e-f3a732203212) (Canada, remote U.S.)
8. **Mindbloom:** [Acquisition Growth PM](https://www.lennysjobs.com/jobs/c74c7805-4b6c-42fa-a989-070e49a48898) (Canada, remote U.S.)

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. Check out [group discounts](https://www.lennysnewsletter.com/subscribe?group=true) and [gift options](https://www.lennysnewsletter.com/subscribe?gift=true).**

Sincerely,

Lenny 👋
