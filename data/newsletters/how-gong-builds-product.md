---
title: "How Gong builds product"
subtitle: "Co-founder and chief product officer Eilon Reshef on autonomy, OKRs, design partners, prioritizing, interviewing, and more"
date: "2024-01-23"
type: "newsletter"
tags: ["design", "leadership", "b2b", "organization", "newsletter", "analytics"]
word_count: 4691
---

*P.S. Don’t miss **[Lennybot](https://www.lennybot.com/)** ✨ (an AI chatbot trained on my newsletter posts, podcast interviews, and more) and my new **[swag store](https://lennyswag.com/)** (great gifts for your favorite PM, or yourself!).*

I was speaking with one of my favorite B2B founders and asked her what company she’d most love to learn from. Her immediate answer:

> **“Gong! I want to know everything about that company.”**

[Gong](https://www.gong.io/) is one of the fastest SaaS companies in history to reach $100 million in ARR, has over 4,000 customers—including companies like Snowflake, Shopify, HubSpot, and LinkedIn—and has raised more than $500 million from Tier 1 investors like Sequoia Capital, Coatue, and Thrive Capital.

To get an inside look at how Gong builds product, I sat down with [Eilon Reshef](https://www.linkedin.com/in/eilonreshef/), the co-founder and chief product officer. **Here’s what stood out to me most about Gong’s approach to product:**

1. The incredibly high amount of autonomy teams have
2. Teams being organized around outcomes (aka “problem areas”), not features
3. The “W”-framework yearly planning process, the quarterly “M” process
4. Their dislike for OKRs and Scrum
5. Engineers, not PMs, owning prioritization of bugs
6. How closely teams work with design partners when developing new product lines, and their “slice” strategy for new products
7. The almost-real-life assignment principle for interviewing

To learn more about Gong, check out their [website](https://www.gong.io/), [demo page](https://www.gong.io/demo/), and new [AI platform](https://www.gong.io/product/ai/).

*For more stories of how the best product teams operate, don’t miss my deep dives into [Linear](https://www.lennysnewsletter.com/p/how-linear-builds-product), [Shopify](https://www.lennysnewsletter.com/p/how-shopify-builds-product), [Figma](https://www.lennysnewsletter.com/p/how-figma-builds-product), [Notion](https://www.lennysnewsletter.com/p/how-notion-builds-product), [Duolingo](https://www.lennysnewsletter.com/p/how-duolingo-builds-product), [Ramp](https://www.lennysnewsletter.com/p/how-ramp-builds-product), [Miro](https://www.lennysnewsletter.com/p/how-miro-builds-product), [Coda](https://www.lennysnewsletter.com/p/how-coda-builds-product), and [Snowflake](https://www.lennysnewsletter.com/p/how-snowflake-builds-product).*

# How Gong builds product

![Image from How Gong builds product](https://substack-post-media.s3.amazonaws.com/public/images/166b5927-a571-48f5-b014-33fa2562ca8f_6000x4000.jpeg)

### **1. How far out do you plan in detail, and how has that evolved over the years?**

We have two main planning cycles: annual and quarterly.

The annual process works along a “W” shape, similar to the framework Lenny suggested [here](https://review.firstround.com/the-secret-to-a-great-planning-process-lessons-from-airbnb-and-eventbrite).

It starts at the top, with the Gong management team setting up top company priorities—usually three or four. Based on these priorities, product and engineering determine the capacity for the different products and product areas. So for example, if we’ve decided to enter a new category, we will assign several pods that would be focused on this new category. When we decided to build our sales engagement product, for example, we reallocated some existing pods toward that goal.

Initially, a straw-man plan is built (bottom-up), with the “big rocks” that are planned for the year. It is presented to the leadership team for high-level feedback. Then a more detailed plan is put together. That plan includes more specific feature descriptions and more concrete timelines.

The output of this process is guidance for the plan one year ahead, at a decreasing level of certainty: good certainty for the upcoming quarter, lower certainty the following quarter, and a very rough sketch of the second half.

Once the plan is prepared, it is communicated broadly throughout the company. We found out that it’s helpful to have a single person on the product team (within the product operations team) assigned to handle the collection and communication of these plans.

Of course, we also involve teams other than management in the process. Over time, we’ve built various workshops with different teams (e.g. sales, customer success) to reduce the chances of having blind spots. For example, as part of our 2024 planning, we ran a workshop with the revenue leadership team, which brought up certain opportunities for addressing the needs of revenue leaders within our customer base; not all those needs were identified within the planning process.

Each quarter, we run a trimmed-down version of this process. Oftentimes, there isn’t new top-down guidance, so the process looks more like an “M,” starting from the product pods. We then create a pretty substantial document—north of 20 pages—that details the plan and what is expected to be built during the upcoming quarter.

Here’s the first page of our FY2024 Q3 plan (8-10/2023):

![Image from How Gong builds product](https://substack-post-media.s3.amazonaws.com/public/images/344853f9-6385-4566-965e-3ec272ab71bc_597x791.png)

We also provide an abridged version of the high-level rocks, for executive consumption:

![Image from How Gong builds product](https://substack-post-media.s3.amazonaws.com/public/images/39fb50b2-f12b-4555-824a-fb329101fc0d_924x519.png)

Also during this process, we provide (relatively light) updates to the annual plan. In principle, we aim to provide a rolling 12-month window of the plan, with a decreasing level of clarity.

We do not plan monthly or biweekly. Both the engineering leader and I dislike the Scrum methodology. We feel it’s trying to drive urgency via artificial deadlines versus via value to the customer. And by forcing “commitment” to deliverables within a time window, it essentially inhibits on-the-fly trade-offs between content, quality, and timelines. Yet we have internal reviews with the different groups on a monthly basis.

What’s interesting is that the process hasn’t changed materially over the years. That is, we had annual and quarterly planning almost from day one. But the process has become more structured over time: distribution across teams, deeper documentation and information dissemination, and so on.

### **2. How do you structure your product teams? Has this changed over the years?**

When we started Gong, I built what we now call a pod: a product manager (which was initially me), a product designer, and a handful of engineers (front-end, back-end, and generalists).

Later on, as we started to scale, we debated how to structure the pods. In my prior life, I’ve seen org structures built around engineering specialization (back-end vs. front-end or platform vs. applications). Even back in 2017, we realized that we wanted to optimize for customer-centricity and velocity instead of optimizing for specialization.

So we’ve continued to build autonomous multi-skill teams (pods) around product areas—what is now known as “empowered product teams.”

Each pod is focused on a problem area (for example, “sales forecasting”), which roughly aligns with a set of “jobs” that are carried out either by a given persona (e.g. a sales coach) or by multiple people doing a business process (e.g. a pipeline review).

Now that we’re bigger, pods are assembled into “groups,” and each group roughly aligns with a product. For better or worse, products are usually aligned with an industry definition of a category (e.g. “conversation intelligence” or “sales engagement”). And in most cases, those products span multiple user types across a set of strongly connected workflows. For example, our “Engage” product is a sales engagement product, which serves account executives (working with new or existing customers), sales development managers (prospecting to new accounts), managers (driving the teams), and revenue operations (who set up the playbooks).

The structure is along the lines below:

![Image from How Gong builds product](https://substack-post-media.s3.amazonaws.com/public/images/b20d1ef8-4a09-41d8-a1a6-16b267008d07_1600x580.png)

While this works in theory, we do have exceptions.

Most notably, we have a data platform group, which is responsible for all data capture, data export, and data integrations. These tend to span multiple products, and we found out that it makes more sense to centralize those.

Another cross-functional group is a user journey group, which also spans all products and drives the user journey (home page, targeting, recommendations, and so on). That team also drives the (naturally cross-functional) mobile application.

The product group nowadays also includes non-“build” functions. I have leaders who drive new products’ go-to-market, field product management, product partnerships, and, most recently, product marketing.

### **3. How do your product/design review meetings work?**

We are relatively extreme in letting the teams autonomously drive their own agendas. That is, once a pod has been assigned an area of responsibility, a great outcome is that they come up with the respective product design. So the leadership team is hardly involved in the detailed design or the iterations with customers along the way.

For example, one of our core technologies is a studio that lets business users calibrate what they care to know about in sales conversations. In technical terms, they build a machine-learning model unique to them that mines key elements from conversations. This involves underlying data science work and a very particular user experience, simplifying the workflow. This capability was built end-to-end by the team, while iterating with customers. While as a CPO I was involved in the process, the involvement was loose and the planning, design, and launch were all led by the teams.

This, however, is a two-edged sword. It lets the teams run much faster: a pod may pre-launch a feature, get feedback, and iterate without waiting for approvals. However, the challenge is to avoid duplicate work and build consistently across groups.

When the groups observe that what they’re working on may overlap with other groups, or perhaps there are knowledge or skill gaps within the group, they flag this for attention.

We operationalize this via a quarterly meeting of all the product group leaders, in which each group leader highlights the areas that either require platform-wide support or areas that are applicable to additional teams. We then translate this into a more concrete plan that determines which group leads the capability and when other groups get involved.

In such cases, the decision-making process is more subtle, and decisions would sometimes bubble up to me or to the head of UX. For example, one group is building general-purpose analytics capabilities. Another group needs such capabilities, but perhaps in a different time frame. Or one group is building some AI capabilities and needs them to show up across the system. But other groups have tight plans. We don’t have a recipe for resolving such conflicts, so we found out that the most practical approach is to review those as a team ahead of each quarterly plan and ensure alignment.

### **4. Do you use OKRs in some form?**

We don’t use OKRs on the product team.

We tried using OKRs at Gong at some stage across the company, but we found out that the process of updating OKRs to align with reality was time-consuming and the framework did not provide us with enough benefits to justify the effort. However, we review this decision annually. We may decide to give OKRs another shot at a company level in the coming year or two, since we haven’t found a better mechanism to drive cross-functional goal alignment.

Individual groups within the product team set up KPIs or metrics to track product progress. These are usually not managed top-down but serve as a vehicle for tracking and optimization rather than a true objective.

During periods preceding new product launches, we’ve set up more structured KPIs to ensure we launch with confidence. That ensures that both internal metrics (e.g. stability) and external metrics (e.g. number of successful customers) would drive a successful launch.

For example, when we recently launched our sales engagement product, we initially looked at metrics such as connect rates for our web dialer (a stability metric). As we became convinced that the product is stable, we focused our attention more on outcome metrics. For example, since the product helps sellers book meetings, we looked at the number of meetings booked by a typical seller to ensure that we deliver the intended value. As we became convinced that the product delivers value, we focused our attention on more operational metrics, for example, how long it takes a new customer to launch. And naturally, business metrics such as attach rates to existing customers, ARPU [average revenue per user], and similar.

### **5. Are product and design part of the same org? And who do PMs ultimately report to?**

Product and product design both report to me, i.e. the CPO. Other functions (analytics, operations) also report to me directly.

Very intentionally, all people report up through a professional chain. That is, all product designers report to the head of product design (who reports to me), all analysts report to the head of analytics (who reports to me), and so on.

The reason we’ve followed this model is that I strongly believe that most knowledge professionals prefer reporting to someone with the same career path. That is, if I’m a product analyst, I’d much rather report to a product analyst, who understands my profession, than to a product manager, who will naturally be more interested in delivery per se.

I also believe that the tension between product managers and other functions is a healthy one. Product managers are often focused on getting a product out on time. Other functions—like designers—may also be worried about quality or other aspects. So the tension is healthy, and I believe that if we aligned the reporting structure to each domain (i.e. designers reporting to PMs), it would steer the ship too close to delivery per se.

We decided to put the writing function within the UX team. We felt that there was a strong connection between writing and the product’s UX. At the end of the day, it’s all about ensuring that end users understand what they need to do on a page, be it via self-explanatory UI or with more explanations.

### **6. How many PMs are there at Gong?**

We have 24 PMs, organized into six groups.

### **7. What’s your primary tool for task management, and bug tracking?**

The engineering team uses Jira for the development lifecycle, which includes bug tracking. Using a true workflow system is crucial to formalize the CI/CD process, aligning with best practices around the software development lifecycle.

Here’s a typical Jira case:

![Image from How Gong builds product](https://substack-post-media.s3.amazonaws.com/public/images/a90ab930-9795-4485-9f16-bb3b03ff9a37_1260x399.png)

However, the product team does not “live” in Jira. In fact, some product managers create Jira cases for features. Some don’t even do this.

We bifurcate very clearly between new product capabilities and bugs.

For new product capabilities, the PM and UX teams use Productboard to collect inbound customer requests. We have multiple entry points into Productboard: customer requests, customer requests in calls, requests in online reviews, and more. Then product managers collect those as an input to the planning process.

Here’s a typical view of our Productboard instance:

![Image from How Gong builds product](https://substack-post-media.s3.amazonaws.com/public/images/baeb5573-a970-4480-9a06-eddd2bfaaefe_1441x394.png)

As we’ve scaled, we found out that having a dedicated person to filter and route the Productboard features is helpful, since this way the PMs can focus on the substance versus the mechanics of that tool.

We use Airtable quite heavily to organize our high-level feature release plan. At the beginning of each quarterly cycle, the product managers input all of the planned features into the table. That table tracks the full lifecycle of a feature, soup to nuts, and provides more information to the non-product teams: short business rationale, links to longer documents, status, impact, and more. If anyone at Gong ever wants to know where a feature is in terms of its lifecycle, this would be the place to look.

Here’s a partial view of our release tracker:

![Image from How Gong builds product](https://substack-post-media.s3.amazonaws.com/public/images/a0837971-54e9-4655-b9f4-020bc054bce0_1600x350.png)

In terms of bugs, we’ve taken a pretty aggressive approach (some may say controversial) and decided that bugs would be handled by engineering, versus product. Our assumption is that engineers have enough business context to assess the severity and priority of each bug. And that most bugs take less time to fix than to prioritize. This way, the engineering teams (and oftentimes the engineering team manager) prioritize and fix the bugs. If a bug requires a disproportionate amount of time, they’d flag it to the product manager and they’d make a joint decision.

### **8. What percentage of ideas come top-down and what percentage come bottom-up, roughly?**

New directions vary by type.

For new products (we’ve launched two products since our original product), the decision, and even the initiation, is mostly top-down. As an executive team, we identify adjacent use cases or markets and work with the teams to ensure that we have the resources to support them.

For new capabilities within current products, this is usually a collaborative effort between the PMs, Group PMs, and leadership. Rarely would leadership come up with a need (e.g. “we need customizable dashboards”) in a vacuum. In most cases, customers bring it up as a need. The PMs and Group PMs understand it’s a need and initiate a discussion around it. It then gets prioritized as part of the annual or quarterly process. Then the specifics are usually led by the product teams. As a CPO, I sometimes get involved in the “how” as well, mostly in new capabilities that the team is not yet well-versed in. So to follow the example above, the team may not have experience building customizable dashboards, so in case I do, I would get more involved than in other cases.

### **9. You build one of the most beloved, and successful, products out there. What would you say is unique or central to your approach to product that leads to such a great and successful product?**

The ingredient that positively impacts the product quality from a customer standpoint is our continuous work with customers.

Literally every feature we develop is being designed with a set of design partners—companies and users—with whom we jointly develop the feature.

This is particularly important in our domain, which is built on data AI. We can present mocks all day long, but only once a customer sees their data in context can they make a true determination if a certain recommendation or action is valuable.

Once we identify a feature as worthy (also based on discussions with customers), we develop a first “slice,” and make it available in what we call “limited availability.” This is essentially what other companies might call an alpha or beta (depending on maturity). We continue to iterate and may leave a feature in limited availability for months, until we feel it provides the expected impact. We are less concerned about this long beta process, because customers who express a need can be put in “limited availability” for any given feature, so even though a feature is not officially “generally available,” customers can still achieve the value. We’ve had many cases where we had hundreds of customers in a limited availability status until we were happy with the result and released it.

We have very little—if any—work that is done completely inspirationally without involving customers at an earlier stage. And even when we do incubate a capability, it would go through this cycle.

For example, when we decided to build our Forecast product (a revenue analytics solution), we knew the problem we wanted to solve for customers (increase predictability and improve the operational rhythm) but we didn’t know what was top-of-mind for them.

Rather than spec out a product, we reached out to half a dozen design partners who had this need. Over the course of a few months, we gave them access to early versions of the software in an embarrassing state (that is, very far from being a “product”). We asked them initially for high-level feedback, and then for feedback based on use. I recall chatting with the PM who drove this product, and he told me he gave a design partner access to a feature that I knew wasn’t slated until a month later. When I asked him about it, he confirmed that the “Save” button didn’t work yet but he was eager to see what type of error message would pop up. I later spoke with one of the design partners, who said he truly enjoyed the process. When I asked him to elaborate, he said he met with the product manager on our end on a weekly basis, gave him ideas and suggestions, and then a week later the product manager would show up with different approaches to solve the problem, which the PM had assembled from multiple design partners. He said that being a design partner helped him better nail down his internal needs and processes, seeing how his peers were essentially guiding Gong through building our product.

When we developed our sales engagement product a year later, the approach was similar. In this case, though, the product team was bigger, so we were able to work with some 20 to 30 design partners in parallel, split out between three or four PMs.

### **10. I assume much of your success has been thanks to hiring well and keeping a very high bar. In your product hires, what do you most look for (that maybe others don’t), and, broadly, what does your interview process look like?**

We perfected the hiring process over the years, and the anchor is an almost-real-life assignment, which all new candidates go through. This is a process that I’ve instilled across the product organization and has made its way into additional organizations at Gong.

Conceptually, the idea is to give the candidate an assignment that, as much as possible, reflects their real-life work. This means that the assignment would by nature be ambiguous (like our day-to-day life) and it would not have a right or wrong answer.

Very typically, we would present a true customer pain that is or was in our product, and ask the candidate to show us their thought process around how they’d approach it. For example, when we were going to tackle adding collaboration as part of the pipeline management process (supported by Gong), we basically posed this need to candidates.

A couple of years ago, I documented the principles behind the assignment:

- We would like to evaluate the candidate in a situation that is as real-life as possible, meaning: the more the assignment simulates working at Gong, the better.
- The assignment and the process around it are meant (almost) as much to let the candidate experience what it is to work at Gong as for us to experience how the candidate works. If Gong is not a great fit for the candidate, it’s great if they know that during the process.
- We want to respect candidates’ time, and limit the work required. Ideally the assignment can be completed in hours, not days, and the feedback we’ve received is that people spend up to 10 hours. While some candidates may drill even deeper, we should minimize the body of work required.
- We feel it’s our obligation to spend our own time to prepare the right assignment, so that the candidate’s time would be well spent.
- We want the assignment to be interesting for the candidate.

Here’s an example of a business background we gave candidates a while back.

![Image from How Gong builds product](https://substack-post-media.s3.amazonaws.com/public/images/27537e88-1c29-4c0d-94ae-8becfb2cade1_1238x696.png)

And the customer needs:

![Image from How Gong builds product](https://substack-post-media.s3.amazonaws.com/public/images/e0e4906d-5ba9-44ba-b762-24b87fb03b2a_1238x696.png)

Given that Gong’s solution includes a conversation intelligence product, and given that all our customer meetings are recorded, we always give candidates snippets of related conversations with customers, so they can sense the real need.

We give candidates as much time as needed to prepare for the discussion. Once ready, the assignment is then discussed with a panel in the same way any proposal would be discussed or brainstormed internally. We do realize, of course, that the candidate doesn’t have the full context, so we don’t expect a “correct” answer. In fact, we’ve hired candidates who we felt had a pretty poor solution but who we felt were going through the right steps but making inaccurate assumptions. And vice versa—people who came up with great product solutions but who we weren’t certain could replicate it consistently or couldn’t collaborate well with others.

What we found out over time is that this process lets us understand the candidate’s thought process and assess their interpersonal style. We expect candidates to approach the problem with a healthy and balanced approach (i.e. how much to spend on “discovery” versus solutioning, how much to assume up-front and how much to leave out, and so on). And because of our customer-centric approach, we pay special attention to candidates who enjoy working directly with customers (versus, say, the project management aspect).

One area that we pay attention to is to ensure that we don’t ask candidates for a lengthy investment: we ask candidates about the time investment, and we refine the assignment to fit, in most cases, less than 10 hours.

### **11. Your processes, org structure, people, and most everything else will change over time—what do you think will stay the same?**

The main thing that we’ll attempt to keep is the autonomous nature of the teams, so that each pod drives their agenda and the “how” behind it. This becomes harder over time, since it (by definition) limits our ability as a business to obtain visibility into timelines and even content.

We’ve recently started to put in more mechanisms to balance autonomy with top-down thinking that ensures global direction. For example, each quarter we’re now aligning on cross-product needs, and those needs are determined to be “top-down” and the various teams have less control over them. We’re also continuously adding more checkpoints with the different groups (sales, customer success, and so on), with the goal of ensuring that priorities aren’t missed by the pods.

I’m still bullish on the autonomous model, since I believe it has a profound impact on the quality of the output and on team morale (e.g. on the product team, we have one of the lowest attrition rates in the industry). But this is an area that we’ll need to calibrate to make sure there is alignment between pods and company strategy.

### **12. What are some fun/unique rituals or traditions you have on the product team, or at the company broadly?**

When we were smaller, when newly onboarded people completed their first real task (for product managers, feature launched; for engineers, first code to production), we brought a bottle of alcohol of choice for the whole team or group.

Now that the company is bigger, this is hard to maintain. But several team members still follow this tradition, and it’s always fun to watch a midday toast by a team for a newcomer.

Here’s a photo I was able to dig up from one of the toasts. You’ll see the alcohol and, this time, also some cakes.

![Image from How Gong builds product](https://substack-post-media.s3.amazonaws.com/public/images/eac6c978-3c4f-4a95-8835-e61e9ef75ef9_1600x1200.jpeg)

*Thank you, Eilon! Follow him on [LinkedIn](https://www.linkedin.com/in/eilonreshef/) and [X](https://twitter.com/eilonreshef), and to learn more about Gong, check out their [website](https://www.gong.io/), [demo page](https://www.gong.io/demo/), and new [AI platform](https://www.gong.io/product/ai/).*

*Have a fulfilling and productive week 🙏*

## 👀 Hiring? Or looking for a new job?

I’m piloting a white-glove recruiting service for product roles, working with a few select companies at a time. If you’re hiring for senior product roles, apply below.

[Apply to join](https://www.lennysjobs.com/talent/)

If you’re exploring new opportunities yourself, use the same button above to sign up. We’ll send over personalized opportunities from hand-selected companies if we think there’s a fit. Nobody gets your info until you allow them to, and you can leave anytime.

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
