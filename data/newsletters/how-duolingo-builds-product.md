---
title: "How Duolingo builds product"
subtitle: "Cem Kansu on Duolingo’s unique team structure, steady planning cadence, design review process, OKR templates, team rituals, and more"
date: "2023-03-21"
type: "newsletter"
tags: ["leadership", "design", "growth", "organization", "product-management", "engineering"]
word_count: 4446
---

On the heels of what is now my second most popular post of all time ([How Duolingo reignited user growth](https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth) by [Jorge Mazal](https://www.linkedin.com/in/jorgemazal/) 🔥), I’m excited to share a deep dive into the day-to-day workings of how Duolingo builds product.

This post is part three of an ongoing series on how the best product teams build product (don’t miss [Figma](https://www.lennysnewsletter.com/p/how-figma-builds-product) and [Coda](https://www.lennysnewsletter.com/p/how-coda-builds-product)), and I’m especially excited to share this because, as you probably noticed in Jorge’s post, Duolingo has a unique approach to most things 😮

I sat down with [Cem Kansu](https://www.linkedin.com/in/cemkansu/), VP of Product at Duolingo, to learn about the company’s fascinating org structure, planning cadence, design review process, approach to OKRs, team rituals, goals, and much more. And per usual, you’ll find plenty of templates, real-life examples, and inspiration for your own team.

A big thank-you to Cem for answering all of my questions. For more, make sure to follow Cem on [LinkedIn](https://www.linkedin.com/in/cemkansu/) and [Twitter](https://twitter.com/cemkansu). Enjoy!

# How Duolingo builds product

*with Cem Kansu*

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/f664390a-4597-43a8-8b3e-70079149efab_2400x3600.jpeg)

### **1. How is your product org structured? And how has this evolved over time?**

Our product teams are cross-functional—people from multiple functions (e.g. design, engineering, learning science, marketing, PM) work on the same team. The team is managed by two or three “co-leads.” Typically, a PM lead and an Engineering lead head up the team, sometimes joined by a Learning and Curriculum lead (experts in learning science, curriculum design, and educational content creation), Biz Ops lead, or Marketing lead, depending on what the team is working on.

Team co-leads are ultimately responsible for their team’s success and deciding its roadmap. They also own the decisions in their domain. For example, the PM co-lead owns more of the product discovery and roadmap decisions, whereas the engineering lead owns more of the product delivery and implementation decisions.

When I joined Duolingo in 2016, the company had three PMs and only engineers as team leads. As we started building out the PM team, leadership saw value in having PMs as team leads. We piloted the co-lead structure with PMs and engineers and saw two main benefits:

- PM and engineering brought complementary skills to team leadership, bringing together business acumen with technical expertise. Together, they were more effective than one lead from either function.
- Division of leadership responsibilities made it easier to run a team. Having co-leads enabled them to split responsibilities and reduce the time invested to lead a high-performing team.

Today, almost all of our product teams have the co-lead structure.

Zooming out, all Product teams are part of “areas.” An area is a group of product teams that share common business goals. Similar to individual teams, areas also have cross-functional co-leads (Engineering, PM, and other roles, like Marketing).

Here is the current list of product areas and the teams within them:

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/cd97f5c8-c1e1-4807-bbb9-e06637480eb8_1600x900.png)

While all of our teams are metrics-driven, we tend to structure product teams as either (1) metric-based or (2) feature-based. Metric-based teams are structured around clear metrics that impact something the company wants to improve, like revenue or DAUs. For example:

- **The In-App Purchases team** owns the metric of in-app purchase (IAP) revenue. They are part of the Monetization area. The Monetization area owns the metric Duolingo app revenue, which is the sum of IAP, ads, and subscription revenue.
- **The Retention team** owns the metric [current user retention](https://blog.duolingo.com/growth-model-duolingo/) (CURR) and is part of the Growth area. The Growth area owns the metric of DAUs, which is heavily influenced by CURR.

Feature-based teams are defined by the product problem we want to solve, and in most cases there isn’t a good metric that can accurately quantify success. For example:

- **The Connections team** owns all social features within Duolingo. We know that in the long term having a more social experience within Duolingo is good for our growth because it makes language learning fun and accelerates word-of-mouth growth. So instead of focusing on driving a metric, the team is focused on “making Duolingo more social” and is part of the Growth area.
- **The Path team** aims to improve a learner’s navigation within Duolingo, and their mission is to create a “path” for learners that maximizes learning efficacy and makes Duolingo engaging. They help Duolingo teach better by creating more efficient and fun ways for learners to go through lessons. There’s no clear metric that captures this, so the Path team focuses on their mission to build their roadmap.

Obviously it’s harder to measure success with feature-based teams, but we’ve learned to work with that. We use a combination of qualitative and quantitative signals to see if we are tracking toward success, which looks different depending on the feature. For example, to measure how we are “making Duolingo more social,” we would use a few signals to decide if we are making progress:

- Usage of features by Duos (Duolingo employees) and buzz around the features we are building. In other words, we look for how much Duos care about our features.

- Most of us use Duolingo daily and have long streaks. It’s always a good sign if Duos are actively using and talking about a feature.
- User research studies on the features we are building.
- Signals from public forums like Reddit and Twitter to see how our users are reacting to our features.
- Results from long-term holdout experiments, where we launch the experiment condition to the majority of our users and hold a small percentage in the control condition for a long time (more than three months). Social features have long-term effects, since it takes time for learners to add friends and have meaningful interactions. We measure these effects with holdout experiments.

In terms of our reporting structure for product management, here’s a chart that displays what it looks like for PMs on the retention team, which is part of the growth area:

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/85175ce1-1cfb-4725-84f3-9d12409f405d_1600x901.png)

In our org structure, all of Product Management, Product Ops, and UX Research are part of Duolingo’s larger Product organization, and they report up to me. I report to our CEO.

All of Design reports into our VP of Design (Simmy). All of Engineering reports into either the Chief Technical Officer (Severin) or Chief Engineering Officer (Natalie), and they report to our CEO.

### **2. Do you use OKRs in some form?**

We use quarterly OKRs that have been tailored around what we’ve seen work at Duolingo. Today our quarterly OKR development process is a three-step process that takes about three weeks. Here’s an example of what the planning cycle for Q2 would look like:

#### **2 weeks before end of Q1: Teams grade their Q1 OKRs and draft Q2 OKRs**

- Team leads lead this process. They collaborate with area leads and other relevant leaders, and work with their team members to write their draft OKRs.
- In the course of a week, they collect feedback and iterate on their first draft to finalize team OKRs.

#### **1 week before end of Q1: Areas grade their Q1 OKRs and draft Q2 OKRs**

- Using team OKRs as their main input, area leads draft their Q2 OKRs for their area.
- In the course of a week, they collect and incorporate feedback from senior leadership as they iterate from first draft to final draft.

#### **First week of Q2: Companywide OKR reviews with senior leadership**

- Area leads present the final version of their OKRs to senior leadership.
- All OKR reviews are done in the first week of the quarter.
- Any feedback and proposed changes are incorporated ASAP after the review meetings, and final OKRs are published to the company by the end of the first week of Q2.

We follow this OKR timeline closely but not super-strictly. In reality, the team and area OKRs happen in parallel. For example, areas would start writing their first draft when they review the first version of team OKRs. The only part we are strict about is the companywide OKR reviews with senior leadership always being on the first week of the quarter, as that keeps us on schedule.

In writing OKRs, here is a summary of the best practices we follow:

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/91f91439-25d2-4812-9d5a-8c19f20faf0a_1600x900.png)

In the end, our OKRs will end up looking something like this for a product area—this would be an example of a revenue-based set of OKRs (numbers are made up):

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/678b59b6-cae3-4685-9b00-c304b3550494_1600x899.png)

We’ve had quarterly OKRs for as long as I can remember, but as the number of product teams grew, we evolved the process to match our needs. In the earlier days, when Duolingo had only a few product teams, OKRs were simply product teams writing their OKRs down on a spreadsheet and getting feedback from senior leaders to finalize. The whole process took a few days.

As we created many product teams, this became unmanageable because it wasn’t feasible for leadership to review and have valuable input on every team’s OKRs. Then we changed our process to what we have now, where teams finalize their OKRS within areas, and areas present OKRs to senior leadership. We believe in giving latitude to product teams to do what they think is right and empowering PMs to set their own strategy. Having this two-step OKR process with area and team OKRs helped us have clear alignment on team priorities while giving autonomy to teams.

We’ve kept the time invested in OKR planning to a reasonable minimum by keeping each step to one week. The reason for this being: time spent planning OKRs is time taken away from making progress on our OKRs, but good OKR planning is critical to making sure we work on the right things. So balancing these two goals has been core to how we’ve evolved OKRs.

### **3. How far out do you plan in detail?**

We have two main planning cycles: quarterly OKRs for all teams/areas (described above) and yearly OKRs for the whole company.

For the yearly OKR process, around October each year the senior leadership team comes together to set the company OKRs for the next calendar year. The yearly company OKRs define our biggest strategic bets and highest-priority investments for the next year. Here is an example screenshot of what our company OKRs looked like for 2022 for DAU growth (numbers are X’ed out):

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/a9a2dfae-ba81-49a5-8719-c964a4dd5848_1600x900.png)

Our Strategy and Biz Ops team leads the coordination for the yearly company OKR process. It takes us one to two months from the first draft to getting to finalized yearly company OKRs. During this process, we assign senior leaders to own the finalizing and reporting of these OKRs; we call them “key result facilitators.” For example, Manu (our Head of Marketing) and I are the designated key result facilitators for our User Growth OKRs. We are responsible for finalizing the Growth OKRs, tracking progress throughout the year, and helping solve roadblocks.

The yearly company OKRs provide a guide to quarterly team OKRs. Teams use the yearly company OKRs to determine their end-of-year goals and how they should work toward them every quarter.

### **4. How do your product/design review meetings work?**

We have a process that we internally call “product review” (PR) by which we review and approve larger changes to Duolingo products. Product review meetings happen every Tuesday and Thursday for a total of two hours. These two hours are divided into 20-minute slots that product teams sign up to present. The agenda of these meetings is product teams presenting their proposed product changes for the first 5 to 10 minutes and then reviewers asking questions and giving feedback for the rest of the time.

Product reviews typically have this core group attending the meetings:

- Luis, our CEO
- Simmy, our VP of Design, representing Design
- A rotational group of Product Area leads and me, representing Product Management

- Having rotational PM reviewers is a new process for us. Our goal is to have more PM leaders uplevel their product decision-making and in the future have them lead product reviews at the area level.
- Deanna, our Lead Product Ops Manager, who runs the meeting and coordinates the product review process

About a year ago, Product Ops stepped in to own the product review process, and that has been transformative. We’ve standardized a lot of best practices: simplified our spec templates, standardized how things are presented, improved how the meeting itself runs, and started analyzing the quality of the decisions made in product review.

Product review meetings are open to anyone who wants to observe, meaning anyone can watch these meetings. In fact, we encourage new PMs and product designers to watch at least 10 product reviews when they join Duolingo because we believe it’s a great way to understand how Duolingo makes product decisions. Here’s a photo of a product review meeting:

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/66e4d5b5-24b3-4d36-a372-860ca9cc1793_1600x657.png)

Product reviews can happen at different stages of the product life cycle, and we have different types of product review discussions depending on the stage of the project:

#### **One-pager: Get early feedback on a specific idea**

A one-pager describes a potential feature idea or product change at the concept level. It is a great way to gather feedback from key stakeholders early on. A good one-pager makes sure that the team starts on the right foot and helps them realize all the issues they’ll have to address on the path to a successful feature.

Here’s the template we use for one-pagers:

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/f6aceead-979d-453d-9392-b3b30eadd13a_1280x1600.png)

#### **1.5-pager: Choose a specific direction for a feature**

A 1.5-pager is, practically, a one-pager with wireframes or wireflows. It is an optional part of the process.

One-pagers and specs are usually enough to help drive alignment across multiple stakeholders. For some projects, the one-pager is simply a formality. The idea is generally agreed upon, but the spec is controversial because the devil is in the details.  For those projects, and for big features in general, 1.5-pagers can be very helpful because they generate the right level of feedback: not a 30,000-foot view, but also not pixel- or word-specific feedback.

#### **Spec: Get approval on fully fleshed-out proposed change**

A spec is the final product review document. In it, mocks need to be pixel-perfect and copy needs to be word-perfect. The spec should perfectly represent what users will see in the product. Here’s an example spec to show this in action:

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/35c56575-528c-4d34-8cd9-f1980ffb017f_877x1600.png)

#### **Prototype: Get feedback on product experience**

Prototype PRs are centered on a test build of the experience that allows the reviewers to see the flow for themselves and give the team specific feedback and the go-ahead signal if appropriate. Instead of a product doc, the team would show up with a prototype of the change they would like to show.

Most product changes don’t go to product review at every step—it’s up to product teams to decide how much input they’ll need from leadership. The most common reviews are one-pagers and spec reviews.

Another review process we have is “quality review.” It’s a complementary process to product review aimed at reviewing the implementation of a feature or product, ensuring that all of our features are excellent. In particular, the quality review looks at performance, visual polish, delightfulness, and adherence to the approved product spec. Feedback from quality review helps everyone align on the right balance between improving existing functionality and working on new projects. Teams are encouraged to go through quality review soon before or after rolling out significant new features.

### **5. How does your team estimate work items, track velocity, and know when something’s off track?**

Every team/PM does this differently depending on their needs, but our core planning and development cycle is based on a weekly cadence. The most common method is weekly sprint planning. There’s a culture of daily standups to bring the whole team together.

We release a new version of our mobile apps on a weekly basis, so teams generally use app release dates to plan their work. For example, when a product team is working on a feature and they estimate the work to take three weeks, they plan for that feature to go into the app release three weeks from today. As they do their weekly sprint planning, they track progress against their initial timeline and decide what they can do to speed things up or delay the release timeline.

We also have a strong dogfooding culture that lets us keep a pulse on how large feature projects are evolving. Every change, before it rolls out to our users, goes live to all Duos for them to dogfood. For large projects, teams push regular updates to our internal builds for dogfooding, which creates awareness of how a project is progressing and gives us an opportunity to experience the UX ourselves. We even have dogfooding nudges for Duos to make sure the app flows that don’t frequently get tested as much get dogfooded, like onboarding for new users or re-onboarding for resurrected users (learners who come back to Duolingo after having been away for more than 30 days).

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/4a54c71e-244a-484b-8f68-cc47ee649318_1600x1349.png)

### **6. What’s in your product team tool stack?**

We have a variety of tools in our product team tool stack:

- Task management and bugs: Jira for everything
- Internal communication: a combination of Slack and email for written communication and Zoom for meetings
- Collaboration: Google Docs for official documents like product specs, Figma for product designs, Confluence for storing companywide information
- Brainstorming: Figma, Google Docs, or old-school whiteboard! Even though our digital tools have improved so much, I still find in-person brainstorming and the old-school whiteboard very powerful.

A new tool that’s starting to become popular with product teams is GPT-4. We started using it for many different things: quickly generating draft content for feature ideas (like a new story type), summarizing long documents, or giving presentations that rhyme (ask GPT to write anything in rhyme, and the output is hilarious 🙂).

### **7. How do you, as a product leader and product team, balance resources between new product work vs. maintenance/bugs? Is there a general rule of thumb or system, or is it ad hoc and team-specific?**

Our general philosophy is treating balancing resources between new work vs. incremental work as an investment portfolio. Depending on the stage the product team is in and what they are working on, the diversification of this portfolio will look different.

For a mature team that’s working on established features that already have many users, this might look something like a 50/50 portfolio between building a big product feature vs. incremental smaller changes. This is because incremental changes compound over time and can drive a lot of growth for mature products (like improving the onboarding flow). But you also never want to get stuck at a local maximum, so you have to keep trying big bets, like building complete new features or redesigning existing ones, in order to keep reaching for step function improvements.

For a team that’s earlier in the R&D cycle and is working on products that don’t have an established product-market fit, their portfolio will look something like 90/10 between building new features vs. incremental improvements. For example, the Duolingo Math app team has a portfolio like this because we just launched the Math app a few months ago and we are still working on establishing product-market fit. Incremental changes won’t get us much return when we haven’t built strong adoption and a large user base. Instead we want to build new features until we have product-market fit.

For bugs, if it’s a P0 issue and affects the user experience significantly, we triage and address those immediately. For P1/P2 issues, product teams work through them at the pace they can as part of their portfolio. To help solve P1/P2 issues that pile up, teams also do a quarterly “grease week,” which is a dedicated week where a product team only works on bugs.

### **8. How many PMs do you have?**

We have an amazing group of 37 PMs, and [we’re hiring](https://careers.duolingo.com)! Here’s some of us pictured at our annual company trip in Mexico in February:

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/ede94056-bc0b-404a-932d-efc5e2636e20_1600x1200.jpeg)

### **9. What are some fun or unique traditions or rituals on your product team?**

The product team likes to have fun, and I would say we have a long list of traditions. Here’s a few:

- **The PM all-hands meeting, named Product Party.** Every other meeting name sounded too boring. At the start of every Product Party, we play a music video that someone on the team has picked and we try to guess who picked the song.
- **Monthly happy hour called Product Pub.** Old-school in-person happy hour with no work agenda. We do this in the first week of every month.
- **Kahoot trivia parties for celebrations.** [Kahoot](https://kahoot.com) is often used in classrooms for creating educational games or quizzes, but we use it for trivia parties. For example, when the Data Science function moved from the Product organization to Engineering, we did a farewell Kahoot where we had to guess fun facts about data scientists.
- **Annual product team ski trip offsite.** Two days of skiing and hanging out every year. Here’s the product team on the 2023 ski trip.

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/be1718d4-ce3e-4714-bf31-b71734379029_1600x1200.png)

- **Turning Slack into Instagram with #post-PTO-Mondays.** Every Monday, anyone who was on PTO the week before is encouraged to share a photo and update from their PTO. The goal is to remind ourselves to take time off and learn about what cool things the product team has been up to.

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/571694f6-b455-4051-a29f-ef31deed8e1b_979x1600.png)

### **10. What would you say is most unique or core to your product team’s philosophy for building product?**

Here are a few things that make the product team at Duolingo unique:

- **Our mission is at the heart of how we make product decisions.** We are here to develop the world’s best education and make it universally available. For example, we don’t charge for learning content so that Duolingo can remain accessible to learners worldwide.
- **We are experimentation-driven and data-obsessed.** [Every product change is first tested as an A/B experiment](https://blog.duolingo.com/improving-duolingo-one-experiment-at-a-time/). We have more than 200 A/B tests running at any given time, and our product teams are experts in experimentation and data analysis. PMs at Duolingo become experts in what makes a good A/B test, how to analyze massive amounts of data well, and how to blend quantitative data with qualitative data to make good product decisions.
- **Great UX design is key to building successful products.** Duolingo has a very specific design language: it’s simple, fun, and intuitive. For example, one of our product principles is “do more with less,” which means we put a minimal amount of elements on a screen to achieve the core functionality of that screen, and nothing more. The product team understands what makes a great user experience on Duolingo and applies it to the features they build.
- **We build features that are fun, not just features that get the job done.** Learning a language is hard, and reaching fluency takes thousands of hours of work. We have to build fun and gamified learning experiences in order for our products to be sticky, so learners will have fun spending time with our products and be more likely to reach their learning goals. This is why gamified features like Streak and Leaderboards are core to Duolingo. The product team studies a lot of game mechanics to see how they can be adapted to learning experiences.
- **We use Duolingo every day.** In order for us to understand what our learners experience when they use our features, we use our own products daily. It’s pretty cool to have long streaks on Duolingo on the product team. For example: I’m certainly not the longest streak on the team, but I’m currently on a 977-day streak that I’m pretty proud of.

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/c1eb05d0-7f5f-4222-b0c9-6788f9fe576b_738x1600.png)

Thanks, Cem! You can follow Cem on [LinkedIn](https://www.linkedin.com/in/cemkansu/) and [Twitter](https://twitter.com/cemkansu).

### 📚 Further study

1. [Duolingo’s growth model](https://blog.duolingo.com/growth-model-duolingo/)
2. [Duolingo’s experimentation methodology](https://blog.duolingo.com/improving-duolingo-one-experiment-at-a-time/)
3. [How Duolingo reignited user growth](https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth)

*Have a fulfilling and productive week 🙏*

## 📣 Join Lenny’s Talent Collective 📣

If you’re hiring, [join Lenny’s Talent Collective](https://www.lennysjobs.com/talent/welcome) to start getting weekly drops of world-class product and growth people who are passively open to new opportunities. I hand-review every application and accept less than 10% of candidates who apply.

![Image from How Duolingo builds product](https://substack-post-media.s3.amazonaws.com/public/images/659d3de8-6cbb-4b67-9ef3-093e320f65ac_1498x1234.png)

If you’re looking for a new gig, apply to join! You’ll get personalized opportunities from hand-selected companies. You can join anonymously, hide yourself from companies, and leave anytime.

[Apply to join](https://www.lennysjobs.com/talent)

### 🔥 Featured job opportunities

1. **Forem:** [Senior Platform Engineer](https://www.lennysjobs.com/jobs/d01563e6-1312-4af7-8dc5-c5070ac6e8e9) (Remote)
2. **Forem:** [Senior Product Manager](https://www.lennysjobs.com/jobs/13f493f2-0050-48e3-aa4c-8fbcb2b7c389)(Remote)
3. **Fitmate Coach:** [Growth Manager](https://lennys-jobs.pallet.com/jobs/eabfbfa5-ffdc-446d-84bb-9958bcaf1b34) (SF, remote)
4. **Fitmate Coach:** [Product Lead](https://lennys-jobs.pallet.com/jobs/c6c1e81a-b2ad-4a37-b9cb-b3327ccf7247) (SF, remote)
5. **Athena:** [Head of Growth](https://lennys-jobs.pallet.com/jobs/ecdd07bc-e3f0-4307-afd5-c55cbbf5ea47) (Remote)

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. Check out [group discounts](https://www.lennysnewsletter.com/subscribe?group=true) and [gift options](https://www.lennysnewsletter.com/subscribe?gift=true).**

Sincerely,

Lenny 👋
