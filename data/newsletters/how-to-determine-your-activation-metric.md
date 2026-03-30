---
title: "How to determine your activation metric"
subtitle: "Including a deep dive into multi-player B2B SaaS products featuring Figma, Linear, Snyk, Airtable, Slack, Asana, and Sprig"
date: "2022-11-08"
type: "newsletter"
tags: ["growth", "leadership", "b2b", "analytics", "design", "newsletter"]
word_count: 3813
---

> ## Q: Learned a lot from your post on [what is a good activation rate](https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate). But can you dive deeper into how to quantitatively determine your activation milestone? I’m building a multi-player B2B SaaS product.

In our [post on activation rate](https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate) (which is currently the [fourth most popular post of all time](https://www.lennysnewsletter.com/archive?sort=top) 😮), [Yuriy](https://www.linkedin.com/in/yuriytimen/) and I shared examples of activation milestones across hundreds of companies. But we didn’t get very concrete about how to go about nailing down your actual activation metrics. So I thought I’d do a follow-up post on this.

Below, I’ll share a three-step process for finding your activation metric, with real-life examples from a dozen companies. As a bonus, I’ll expand on activation milestones for multi-player SaaS products with help from [Merci Grace](https://www.linkedin.com/in/merci/) (former Head of Growth at Slack), [Lauryn Isford](https://www.linkedin.com/in/laurynisford/) (Head of Growth at Airtable), [Karri Saarinen](https://www.linkedin.com/in/karrisaarinen/) (CEO of Linear), [Ben Williams](https://www.linkedin.com/in/ben96/?originalSubdomain=uk) (VP of Product at Snyk), [Badrul Farooqi](https://www.linkedin.com/in/farooqib/) (first PM at Figma), [Jackie Bavaro](https://www.linkedin.com/in/jackiebavaro) (first PM at Asana), and [Rachel Wang](https://www.linkedin.com/in/wangrachelr/) (Product Lead at Sprig). As always, if you have any feedback, additional suggestions, or questions, just leave a comment 👇

[Leave a comment](https://www.lennysnewsletter.com/p/how-to-determine-your-activation/comments)

*Thank you to [Yuriy](https://www.linkedin.com/in/yuriytimen/) for reviewing this post, and to everyone who shared their stories 🙏*

## How to determine your activation metric

Follow this three-step process:

1. Brainstorm, and explore your product usage data, for some potential “aha” moments in the user journey.
2. Run a [regression analysis](https://hbr.org/2015/11/a-refresher-on-regression-analysis) to see if there’s an inflection in retention when someone hits any of those moments, to establish a correlative relationship between some potential activation milestones and product retention.
3. Run some experiments to see if increasing the percentage of users hitting that moment increases their retention rate, to see if any of those correlative relationships translate into true causality. A good activation metric is causal for your retention, not just correlative.

Here are six real stories from readers putting this process into action:

> “For our new products with little or no usage data:
>
> 1. **We conducted in-depth interviews with our target segment and asked them, ‘What are the signals that this product is solving your problem?’**
> 2. **We brainstormed a list of actions that reflect those signals.**
> 3. **We ran a quantitative survey targeting the target segment, showing the list of actions and asking respondents, ‘Which of the following is the first moment that you feel that this product solves your problem?’**
>
> We then picked the milestone that had been selected by the majority.
>
> For existing products with a lot of historical data, we started with steps one and two above, but after that, we ran regression analyses to find which action completion correlated with long-term retention (30 days in our case).”

> “We have a lot of qualitative data from our users because we do interviews on a weekly basis with them. So when we asked this question, we already knew about some candidates for the activation milestone.
>
> **We focused on when the users were getting value from our product. Then, once we had some candidates, we used data to see which of them were correlated with long-term retention. [Mark Roberge has a really good process on how to do this](https://f.hubspotusercontent10.net/hubfs/6575667/Stage%202s%20Science%20of%20Scaling.pdf).**
>
> After we saw some results, we just went with the one that ‘felt’ the best. That’s because we don’t have too much data. Around 300 customers. So we know there could be a lot of errors in the numbers, so we thought we shouldn’t do a decision based solely on data if the results were similar.”

> “Building [a top-five e-commerce site’s] self-checkout product, we looked at retention rates across customer segments that completed various tasks successfully, for example:
>
> - Scanning an item
> - Completing a checkout
> - Placing 1, 2, 3, *n* orders per month
>
> **We noticed that completing a transaction was the best indicator of long-term retention. Particularly, customers who placed at least two orders retained at a 2x higher rate than with one order. So that became our activation milestone.”**

> “I work in B2B enterprise SaaS with a multi-use-case complex product. We don’t have enough data to conduct a causal analysis with conversion. **Therefore, we broke down our product into three main JTBDs that prospects come to us for, as well as required behaviors that need to be set up in order to use the workspace successfully (e.g. import your data). For each of these areas, we conducted an analysis to see what events correlated most with trial retention (two weeks)**. We evaluated what the strongest correlations were and chose activation metrics for each area.”

> “We initially focused mostly on qualitative insights to determine this milestone for our customer survey product—interviewing participants, doing guided onboardings and product demos, reviewing Hotjar recordings.
>
> **We learned that our ‘aha!’ moment occurs when they discover the analysis and automations that are possible with their results—and they can only find that once they’ve got at least one survey participant. So that became our activation milestone: getting you first survey responses.** This gave us an easy-to-measure metric that allows us to focus on building and optimizing rather than tweaking our data forever.”

> “**First we selected a few candidates from the early stages of the user journey. Then we tried to validate each by looking at how they could have affected retention in Amplitude.** We came up with the final decision and are still examining if we are right about this metric.”

#### How readers tactically correlate a milestone to retention:

> “**We ran the correlation analysis between the key events we brainstormed and the four-week retention rate (where we saw the retention curve hit a plateau). We then checked if the frequency of hitting that event (i.e. hitting that milestone multiple times) changes the retention rate. Turned out the answer was no. Then we just tried different thresholds for the number of days by which a user needs to get to that point, and found an interesting threshold.**
>
> Broadly, we took all the events from after the sign-up step that a user can perform and ran the regression analysis. To get a proxy and not bother the BI team too much, I did it myself through Amplitude to see if there’s a better action that, once performed, gives a higher retention rate.”

> “Our B2C free/ads-based app uses the concept of daily streaks. We found that the retention curve flattens most after the seventh-day streak, which also ties into the reward we give on the seventh day.
>
> **This was as simple as looking at an onboarding funnel on Mixpanel with application installed as step 1, and the day-1 streak through day-30 streak as the rest of the funnel. We then plot out the percentage drop-off until it started to flatten.**”

> “**We looked at the steps in a user’s journey after they go past our marketing site, place an order, and book an appointment. For each step, we calculated the percentage of users who completed that step who went on to book at least two more appointments in the following four months (i.e. percentage of users who retained).**
>
> We then ordered the steps and looked for the point where that percentage jumped by at least 2-3x. It ended up being at the first appointment completion (not booking).”

### Deep dive on multi-player B2B SaaS

In our previous post on the subject, we encouraged you to make your activation milestone highly actionable—something that your growth team can impact. That typically means making it a user action (e.g. “sharing your first document”), instead of a workspace- or account-level action (e.g. “workspace has 10 items and 2+ active editors by W4”).

However, we’re not against also having a workspace-level activation metric alongside a user-level action. In practice, teams typically work on moving the user-level metric while monitoring the workspace-level metric.

For instance, a hypothetical collaboration product may define the following activation metrics (intentionally oversimplified here):

- User-level: Create 10 items and invite 2 team members
- Workspace-level: 50 items created and 5 active team members

In order to move the needle, your experiments will have to focus on users and their journeys, e.g. getting them to create in the product and share it with or invite others. As you do this work, you’re keeping an eye on your active workspaces, to see if the user-level effort is moving the needle on the workspace/account level.

To get even more tactical, we roped in a few of the smartest folks we know to get their perspectives on setting your activation milestone for a multi-player SaaS product.

#### [Ben Williams](https://www.linkedin.com/in/ben96/?originalSubdomain=uk) (VP of Product at Snyk)

> “My opinion is that, yes, activation is often referred to as the ‘aha moment,’ but focusing on just that can be a trap. It’s important to look beyond that, though, and find the moment that signifies the user or team forming a habit around your product such that (as you’ve continued to call out in your post) they will be significantly more likely to continue to realize value from your product in the long term. I mention that as it’s important to disambiguate the (1) aha and (2) habit moments, as I elaborate on below.
>
> Most of my experience is in B2B PLG SaaS, where the core value prop is most commonly centered around a team. Unless the team realizes value, the product won’t see sufficient adoption and monetization will be unlikely. In these contexts, it should be expected that the definition of activation is team- or workspace-centric.
>
> **At Snyk, where the core value is teams fixing security vulnerabilities, the activation metric is team-based, and is abbreviated as ‘F30D,’ which stands for ‘fix in 30 days.’**
>
> Teams that fix a vulnerability using Snyk within the first 30 days have a very strong likelihood of being retained and still fixing using Snyk three months later, along with a higher propensity to purchase. Interestingly, it takes just a single fix to establish this habit. Teams fixing more than once in the first 30 days are not significantly more likely to retain.
>
> And there’s a user-centric element to this, of course—team- or workspace-level metrics are definitionally aggregations of what individual users are doing. So identifying the user behaviors and actions that are necessary along the way is a critical part of building effective onboarding and post-onboarding activation strategies.
>
> Ask yourselves: What are the user-level actions that are absolutely necessary as part of the activation process? And then consider what the user-level actions are that may not be strictly necessary but increase the likelihood of reaching the activation milestone, or serve to accelerate a team getting there.
>
> All of this implies an important nuance in B2B PLG SaaS, in that the different actions that need to happen as part of the activation process might be performed by different people. Often, but not always, you’ll be able to cleanly separate concerns—for example, segmenting the new-user experience for a workspace creator vs. that of a team joining the workspace.
>
> Visualizing all of this in an org-state model coupled with a narrative supported by data can greatly help with wider communication and evangelism around these metrics.”

#### [Lauryn Isford](https://www.linkedin.com/in/laurynisford) (Head of Growth at Airtable)

> “Our overall philosophy is to use a few different metrics that assess activation on different vectors, to help diagnose which precise component of activation (aha, habit forming, etc.) you’re driving. At Airtable, we look at both user- and workspace/team-level metrics.
>
> I’ve also found that it’s better to be precise and see a low activation rate percentage among users with a high likelihood of long-term value than to go broad and see a high hit rate among users with varied long-term retention.
>
> For Airtable, our overall activation milestone is W4MUA (week 4 multi-user active). It’s our most important activation metric, though we goal on and track/monitor four metrics:
>
> User level:
>
> - Activity: **W2A** (week 2 active) rate and **W4A** rate, split by builder and collaborator (our two key personas)
>
> Workspace level:
>
> - Activity: **W4MUA** (week 4 multi-user active)—at least 2 users working together in week 4
> - Sophistication: **Build rate**—percentage of workspaces that reach a degree of sophistication (intermediate use and setup) that indicates they’ve built something substantial
>
> I find this multi-metric approach sets the team free to work on a broader swath of onboarding or ‘getting started’ improvements. Why? We run experiments to test meaningful changes to onboarding, and we learn from those experiments precisely which metric benefits or suffers as a result, which gives us insight into how users responded to the change, e.g. did this tactic improve sophistication at the cost of collaboration?”

#### [Merci Grace](https://www.linkedin.com/in/merci/) (former Head of Growth at Slack, CEO of [Panobi](https://panobi.com/))

> “To pick an activation metric, start by exploring your data for good candidates. Partner with the data team and have a strong opinion about what real, human behavior your metric quantifies. Having the product intuition to understand the value your product provides should guide the process of elimination.
>
> **For Slack early on, our metric was a team with more than two users having ‘a conversation worth’ of 50+ messages within the first seven days. That metric feels pretty obvious once you know it because it describes real behavior. Email between two people isn’t broken like email is for three or more people. And because it’s a team-based product, we were focused on making teams successful.**
>
> Once you have a candidate for your activation metric, you need to test whether it works for your business. To do that, check that these things are true:
>
> 1. You can ship experiments. You can build good in-product tests with enough power to make them useful.
> 2. You can post wins. You are able to increase the rate of activation over months or quarters.
> 3. Increasing the rate of activation does not destroy the relationship between that activation metric and longer-term retention.
>
> If these are true, you have a foundation to experiment with adjacent funnel levels, like investing more in demand gen or monetization.”

#### [Badrul Farooqi](https://www.linkedin.com/in/farooqib/) (first PM at Figma)

> “When Figma launched, designers were using a variety of products to design, build design systems, create prototypes, organize files, and, finally, work with stakeholders. Our product solved many of these problems; however, it takes time for someone to really take advantage of the full set of features and appreciate the impact this has on their company.
>
> As a result, we focused on having designers experience something they didn’t experience before: a single source of truth to design and work with others. This initial experience is differentiated, delightful, and helps inspire customers to continue using the product.
>
> **Figma’s core activation metric is collaboration in the same file with someone else within 24 hours—specifically, editing or commenting in a file after another user edits or comments in a file. Once this happens, we consider both users activated.**
>
> This allowed us to focus on the customers we really wanted to win: designers who worked on teams. We also found that those who experienced this aha moment were much more likely to continue using Figma and become paying customers.”

#### [Jackie Bavaro](https://www.linkedin.com/in/jackiebavaro) (first PM at Asana)

> “There are two ways I like to think about activation milestones:
>
> 1. A way to reduce the noisiness of the sign-up rate
> 2. A way to detect ‘good’ users
>
> In Asana’s early days, we got a lot of press for being Dustin Moskovitz’s new startup. Each time a new article came out, we’d see a huge bump in sign-ups from people who were just curious. These people would have an awful retention rate because they never intended to use the tool.
>
> To filter them out from subsequent graphs, we sometimes used the simple milestone ‘visited twice in a week.’ This reduced noise without excluding many people who were actually using the product.
>
> **Of course, Asana is a*****collaborative*****work management tool. So to detect ‘good’ users, we wanted to filter to users who were collaborating on Asana. As a proxy, we counted any action that sent a notification to another user**, and we did analysis to see how many days of collaborating gave us the best balance of predictive power vs. quantity of our active user base that counted as activated.
>
> If I remember correctly, we used ‘collaborated 3 times in a week’ as our activation milestone. For activation, we always split the graphs by people who signed up (usually project managers) and people who were invited (usually their teammates). In addition, we’d also drill down in various ways such as people who joined on mobile vs. web.”

#### **[Rachel Wang](https://www.linkedin.com/in/wangrachelr/) (Product Lead at Sprig)**

> “**At Sprig, we have two activation moments. The first is for single player mode (when a free plan user creates a link survey or concept test and gets a response). Once a user expresses interest in multiplayer mode, they move into a second activation flow where PM and engineering integrates Sprig into their product experience, and receives their first response from an in-product survey.**
>
> Early on, we discussed whether our activation moment should be when a response is received or  when a study is launched. Based on data gathered over time from activation events against customer engagement and retention, we found that launching a research study doesn’t represent that ‘aha moment’ if no responses follow.
>
> For free plan users, activation (or users receiving at least one response) can happen within a few minutes of creating their account and launching a link survey or concept test.
>
> For our paying teams, activation looks different even though we use the same metric to measure it. Paid customers integrate Sprig into their product, which enables responses to be collected even more quickly than single player mode. Additionally, targeting specific users based on actions they take within the product creates an even bigger ‘aha’ moment. We’ve found that teams who activate in-product are 21X more likely to stay active and monetize, one to even two years later. With this understanding, we’ve prioritized projects that simplify and drive technical activation, given the valuable downstream effects.
>
> **This activation metric (first response received within 7, 30 days) is inherently team-based. The key personas doing the analysis (PM, UXR, Design), will typically involve a developer to conduct the technical installation. Having one activation metric that captures individual and team-based activity, as well as the value our customers get from the product, has helped our team prioritize our roadmap to drive the long-term stickiness of the product.**”

#### And finally, a contrarian take from [Karri Saarinen](https://www.linkedin.com/in/karrisaarinen/) (CEO of Linear)

> “At Linear, we don’t measure activation. Our thinking has been that if we don’t believe a metric is making us build a better product or a company in the long run, we shouldn’t focus or worry about it.
>
> Many of our prospect customers come to us because they are unhappy with their current tools or they are just curious. Depending on where they are in their interest spectrum, what size of company and type of company culture they have, they will want to know different kinds of things. The tool eventually replaces their other solution, which means there isn’t a real activation until that happens. It’s all kicking the tires until it becomes the tool for the company.
>
> **The leading indicators to the real activation look like constant and consistent usage over the weeks, with increasing user amounts. Some of our best customers took months or years before fully committing.**
>
> **Usually how it goes is that there is a champion or a team who wants to use the product. Eventually a team or two might start using it, and then eventually the whole product team or company will adopt it as their main tool. By this time, we might have started some level of relationship with the customer.**
>
> A lot of this activation happens outside of our product, so our thinking is more how we can design a better overall experience that helps these companies to adopt Linear. Forcing some kind of artificial activation metric can make our team miss the forest for the trees and not lead to a better product or overall experience, which is our main focus.”

### 📚 Further study

1. [What is a good activation rate](https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate)
2. [Reforge: Retention and Engagement](https://www.reforge.com/retention-engagement-series)
3. [How to pick your activation metric](https://rows.com/blog/post/how-to-pick-your-activation-metric) by Henrique Cruz

*Have a fulfilling and productive week 🙏*

## 📣 Join Lenny’s Talent Collective 📣

If you’re hiring, [join Lenny’s Talent Collective](https://www.lennysjobs.com/talent/welcome) to start getting bi-monthly drops of world-class hand-curated product and growth people who are open to new opportunities.

![Image from How to determine your activation metric](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/fd2a86a0-dc08-4cf2-9095-e88dd7f2e5cf_1476x856.png)

If you’re looking for a new gig, join to get personalized opportunities from hand-selected companies. You can join publicly or anonymously, and leave anytime.

[Apply Now](https://www.lennysjobs.com/talent/welcome)

#### **🔥 Featured job openings**

1. **Noom:** [Head of Product Design](https://www.lennysjobs.com/jobs/8dffb755-160d-416e-947a-0f09ccc7d11e) (Remote)
2. **Equi:** [Director, Product Management](https://www.lennysjobs.com/jobs/fb351a31-203b-47f4-8675-c9be18438c6b) (NYC)
3. **Equi:** [Senior Product Manager](https://www.lennysjobs.com/jobs/873a7791-0545-4fc5-a07c-4fa8a75da3fd) (NYC)
4. **Equi:** [Senior Product Designer](https://www.lennysjobs.com/jobs/f2f82806-0fdf-461f-beb7-bdc2771d50f9) (NYC)
5. **Playbook:** [Senior Product Manager](https://www.lennysjobs.com/jobs/608b4297-c97d-45fc-a521-70b74f6d7d65) (NYC, Remote)
6. **Zendoor:** [Head of Product](https://www.lennysjobs.com/jobs/a060efa9-8aaf-43dd-be39-60447a4bb567) (Phoenix, Remote)

## **🧠 Inspiration for the week ahead**

1. **Read:** [A 2023 planner for anyone in your life who overthinks their plans](https://www.amazon.com/Overthinking-This-2023-Engagement-Calendar/dp/1797216708/ref=sr_1_2) (My wife’s latest release with Chronicle Books)
2. **Vote:** [Here’s a handy voting guide if you’re in the Bay Area](https://sig.gy/sfendorsements/) and [a polling place locator if you’re anywhere in the U.S.](https://www.vote.org/polling-place-locator/)
3. **Listen:** [Lex Fridman and Andrej Karpathy: Tesla AI, Self-Driving, Optimus, Aliens, and AGI](https://www.youtube.com/watch?v=cdiD-9MMpb0)

[Watch on YouTube](https://www.youtube.com/watch?v=cdiD-9MMpb0)

**If you’re finding this newsletter valuable, feel free to share it with friends, and consider subscribing if you haven’t already.**

Sincerely,

Lenny 👋
