---
title: "Introducing Core 4: The best way to measure and improve your product velocity"
subtitle: "A unified developer productivity framework from the creators of DORA, SPACE, and DevEx"
date: "2025-01-14"
type: "newsletter"
tags: ["engineering", "analytics", "leadership", "design", "newsletter", "career"]
word_count: 3819
---

I talk a lot on my podcast and in this newsletter about the correlation between successful companies and an obsession with velocity. So I’ve been on the hunt for a framework that actually helps you measure and increase your velocity. I’ve finally found it. From the creators of DORA, SPACE, and DevEx, and in collaboration with [Laura Tacho](https://www.linkedin.com/in/lauratacho/) and the team at [DX](https://getdx.com/), I’m excited to introduce you to **Core 4**.

Laura and her team spend every working hour researching, designing, and experimenting with ways to measure and improve team velocity (while avoiding burnout). Core 4 pulls everything they’ve learned from working with thousands of teams into a single unified developer productivity framework. Companies like Vercel, Intercom, and Dropbox have already put it in place and have seen great results.

Below you’ll find everything you need to start using this framework within your team, including plug-and-play templates, industry benchmarks, case studies, tips for linking efficiency improvements to business impact, and specific advice for helping your team move faster. Gogogo!

[Laura Tacho](https://www.linkedin.com/in/lauratacho/) *is the CTO at [DX](https://getdx.com/), has taught over 1,000 tech leaders through [her course on developer productivity metrics](https://lauratacho.com/developer-productivity-metrics-course), and on the side is an executive coach for engineering leaders. Her background is in developer tools and distributed systems. For more, check out her [LinkedIn](https://www.linkedin.com/in/lauratacho/) and her [blog](https://lauratacho.com/).*

![Image from Introducing Core 4: The best way to measure and improve your product velocity](https://substack-post-media.s3.amazonaws.com/public/images/f2e3ded9-41ac-4e1c-a51d-e82e00fd36ac_1456x1229.jpeg)

If you’re reading this, you’re probably looking for ways to work more efficiently, “do more with less,” and move faster. I’ve yet to come across a software leader who isn’t.

Unfortunately, if yours is like most companies, your product and engineering teams disagree about what “moving faster” means. Engineering leaders might zero in on development speed metrics like deployment frequency or application build times. Meanwhile, product leaders are focused on hitting deadlines and delivering value to customers.

But “going faster” is only part of the equation. Product velocity is about speed *and* direction. When teams get too focused on “moving fast” but don’t have alignment on what to work on, they end up working on competing priorities and pulling in different directions. In those cases, trying to move faster can actually slow you down.

![Image from Introducing Core 4: The best way to measure and improve your product velocity](https://substack-post-media.s3.amazonaws.com/public/images/a0926e59-22f8-4b8f-86f5-8bffe8fbab67_1798x720.png)

Executing quickly means getting these arrows all pointing in the same direction.

And executing quickly means getting to market faster and, as a result, learning what your customers need faster. “If we can learn faster than every other company, we’re going to win,” Mark Zuckerberg said in [a recent interview](https://www.acquired.fm/episodes/the-mark-zuckerberg-interview). That’s what product velocity enables.

### How to measure product velocity

To improve, you first need to know how you’re doing today. But how do you decide what to measure?

On the engineering side, developer productivity metrics have swelled in popularity, especially over the past several years, as companies try to figure out how to work more efficiently. In the past, most measurements focused on activity—like lines of code, number of commits, story points shipped—which don’t tell a complete story about performance.

Some popular frameworks help connect the dots between engineering performance and business outcomes, all based on a lot of research.

- **[DORA metrics](https://dora.dev/guides/dora-metrics-four-keys/)** are widely accepted “starter metrics” because of their popularity and focused scope. These metrics focus on software delivery capabilities (deployment frequency, lead time to change, change failure rate, and time to recover from a failed deployment), but they can often be misapplied.
- **[The SPACE framework of developer productivity](https://queue.acm.org/detail.cfm?id=3454124)** offers a robust definition of developer productivity covering five dimensions: satisfaction and well-being, performance, activity, communication and collaboration, and efficiency and flow. SPACE is very thorough, but it doesn’t come with a turnkey list of things to measure (by design).
- **[The DevEx framework](https://queue.acm.org/detail.cfm?id=3595878)** ties developer experience to three key dimensions: cognitive load, feedback loops, and flow. This framework is correlated with higher productivity but is somewhat disconnected from definitions of productivity used in other parts of the business.

Still, even with these useful frameworks, many organizations feel lost. There are a number of concepts and metrics to consider, without a clear path forward. The most common question I get is: how can we decide between DORA, SPACE, or DevEx, or use them in combination? My answer used to be “It depends.” **Now I have a shorter answer: Core 4.**

“Measuring developer productivity has been a notoriously tricky problem,” says Drew Houston, the co-founder and CEO of Dropbox. “Core 4 marries the state of the art in terms of research with a solution you can deploy in your company, and gives you a much more cohesive picture of what’s happening in your organization.”

Core 4 is a set of metrics that unifies the principles behind DORA, SPACE, and DevEx. The framework was co-authored by [Abi Noda](https://www.linkedin.com/in/abinoda/), a co-author of the DevEx framework, and me, in collaboration with [Nicole Forsgren](https://nicolefv.com/) (founder of DORA), [Margaret-Anne Storey](https://www.margaretstorey.com/) (co-author of the SPACE framework), [Michaela Greiler](https://www.michaelagreiler.com/) (co-author of the DevEx framework), and other researchers. Our recommendations were informed by current research but also field experience at over 300 companies, including a few that were very early adopters of Core 4 (like Dropbox).

“The SPACE framework was never meant to provide prescriptive metrics or tell you what exactly to measure. Core 4 gives you a list of things to start with that’s aligned to SPACE and DevEx, making it more practical for companies to use,” says Storey.

![Image from Introducing Core 4: The best way to measure and improve your product velocity](https://substack-post-media.s3.amazonaws.com/public/images/bbec3635-771c-441f-9a27-6e8a8b8b4946_2912x1828.jpeg)

The four dimensions of Core 4 are designed to hold each other in tension: we don’t want to increase speed at the expense of developer experience, or spend more time on new features while quality takes a nosedive. These metrics are designed to be used together as a system to provide a balanced look at overall team performance. This is not a recommendation of singular metrics to track, but rather a basket of metrics that must be used together to be meaningful.

A few design choices are important to mention. First is the inclusion of PR throughput, measured by pull/merge requests per engineer, which can be controversial. We have seen that companies like Meta, Microsoft, and Uber have [successfully used this metric](https://newsletter.getdx.com/i/152463751/ive-talked-to-many-well-known-organizations-that-use-prs-per-engineer-as-a-central-part-of-how-theyre-thinking-about-and-measuring-productivity-whats-your-opinion-on-that-practice) as a key input for understanding and improving productivity. It can be misused easily, for example looking at PR output on an individual level, or as a single measure. It’s important that this metric is used only as a system health metric, and always alongside other metrics in the framework.

“While this is an extremely hard metric to evaluate in isolation, it’s very easy to look at your organization’s diffs per engineer against peer companies’ diffs per engineer and make an informed judgment about whether things are going well for you,” says [Will Larson, the CTO of Carta](https://lethain.com/measuring-developer-experience-benchmarks-theory-of-improvement/).

The Impact dimension, with its key metric of percentage of time spent on new capabilities, is unique in that more does not always mean better. Too much reactive maintenance will stifle a company’s ability to innovate. But too little investment in proactive maintenance results in a poor-quality product with problems kicked down the road.

Another important design principle is that Core 4 balances qualitative and quantitative measurements. Quantitative measurements provide insight into what is happening, but qualitative insights tell us why. Ultimately, we need to understand the “why” of a team’s behavior in order to change it, which is the whole point of measuring in the first place.

### How to measure your Core 4 baseline today

To get faster, it’s important to start with where you’re at today. With Core 4, you can collect a baseline measurement via self-reported metrics. Alternatively, if you already have access to clean data from your workflow tools, you can use that data along with survey data.

Here’s a [template for a survey](https://docs.google.com/spreadsheets/d/1brKPLRJ9DDQAAFr1GM4hcFZg9zGUAGplQw2OkVx52Ls/edit?usp=sharing) you can send to your team to get a baseline on the key metrics in the Core 4 framework. You can use any surveying tool to do this—Google Forms, Microsoft Forms, Typeform, etc.—just make sure you can view the responses in a spreadsheet in order to calculate averages. Important: responses must be anonymous to preserve trust, and this survey is designed for people who write code as part of their job.

![Image from Introducing Core 4: The best way to measure and improve your product velocity](https://substack-post-media.s3.amazonaws.com/public/images/345ead3a-b966-490d-a994-bfe5d7f6cb59_2912x7483.jpeg)

Depending on your company’s size, you may want to collect certain demographic information, such as team identity and tenure, in order to analyze the results. There are some considerations to take into account, which I elaborate on in [this article](https://lauratacho.com/blog/a-deep-dive-into-developer-experience-surveys).

### Calculating your Core 4 metrics

Once you’ve collected survey responses, it’s time to calculate your results.

- For **Speed**, **Quality**, and **Impact**, find the average value for each question’s responses.
- For **Effectiveness**, calculate the percent of favorable responses (also called a [Top 2 Box score](https://www.surveymonkey.com/mp/top-2-box-scores/)) across all Effectiveness responses. See the example in the template.

To illustrate how to use these metrics, let’s look at a real organization’s results.

![Image from Introducing Core 4: The best way to measure and improve your product velocity](https://substack-post-media.s3.amazonaws.com/public/images/37424000-51cc-416a-acb8-71f9cfaaa10f_2912x1310.jpeg)

After looking into their data and using benchmarking data as a reference point (more on this later), they decided to focus on increasing Speed and Effectiveness to start with. Their hypothesis is that Impact will increase in the long term, after a short dip to focus on these internal improvements.

To make this decision about what to work on to improve product velocity, they needed to drill down to the data on a team level, and also look at qualitative data from the engineers themselves. We encourage teams to triage their own results like this.

From the qualitative results in the survey, many developers reported that release processes were hindering their velocity. Based on this, the company knew they needed to make investments in their continuous integration (CI) tooling and release workflows.

Here’s where alignment with product comes in: how can teams weigh the relative benefits of making these investments now versus later, or compare their impact with the new features the business is asking for?

### Linking efficiency improvements to core business impact metrics

Instead of presenting these CI and release improvement projects as “tech debt repayment” or “workflow improvements” without clear goals and outcomes, you can use Core 4 to directly link efficiency projects back to core business impact metrics.

[Ongoing research](https://getdx.com/research/the-one-number-you-need-to-increase-roi-per-engineer/) continues to show a correlation between developer experience and efficiency, looking at data from 40,000 developers across 800 organizations. Improving the Effectiveness score (DXI) by one point translates to saving 13 minutes per week per developer, equivalent to 10 hours annually. With this org’s 150 engineers, improving the score by one point results in about 33 hours saved per week.

This team also looked at supporting metrics to estimate the ROI of these projects:

- PR cycle time (the time from opening a PR to merging it) was about four hours. The time to first review was about 60 minutes. Reducing these times by 25% would eliminate over 1,000 hours of waiting time per week (150 devs \* 5.4 PRs \* 1.25 hours).

- Flaky tests are rated the #1 priority from developers, so a targeted focus here would improve developer experience.

Targeting a three-point improvement to developer experience would mean recovering around 100 hours each week, equivalent to more than two full-time developers.

There are two ways to frame these estimates.

1. Money: Weekly salary for two developers is $9,600 in this scenario, so each week, improving these aspects of developer experience is worth at least that much, or a half a million dollars annually. The 1,000 developer hours spent waiting to merge PRs come in around $120,000 each week.
2. Time: You now have capacity to bring revenue-generating features to market faster, investing those two full-time developers or 1,000 hours of saved waiting time into something else.

Depending on the size and stage of your business, one of these frames may be more interesting to your teams and leadership.

Are these calculations perfect? Absolutely not.

Understanding the impact of these investments in terms of both time and money makes the stakes easier to understand when comparing these kinds of projects with new features, even if the comparison can never be apples to apples.

The math makes it clearer to see that delaying this investment would have meant giving up on three full-time employees’ worth of time savings. That might make sense in certain situations. But this organization made the choice to invest immediately, even if it meant delaying some new feature work. The time savings alone meant a quick return on investment, and the project also supported the longer-term goal of improving the Impact score and spending more time on innovation and experimentation.

### Tracking velocity improvements with Core 4

Once you’ve got a baseline, you can start to regularly re-run this survey to track your progress. We recommend a quarterly cadence to begin with.

For this organization, the investment is already starting to pay off as predicted. Speed, Effectiveness, and Quality improved by making investments in their CI and release workflows. Impact took a temporary dip, as they expected, as work shifted away from new features to work on these improvements. In their next quarterly measurement, they hope to see the Impact score surpass previous levels.

![Image from Introducing Core 4: The best way to measure and improve your product velocity](https://substack-post-media.s3.amazonaws.com/public/images/d0063b6f-b87b-4834-a078-2fd2c4fae4b5_2912x1310.jpeg)

They did hit their target of reducing merge wait times by 25%, with the actual reduction of PR cycle time coming in around 40%. That surpasses their target of saving 1,000 hours of wait time, taking into account their improved Speed metric of 6.6 PRs per engineer per week.

![Image from Introducing Core 4: The best way to measure and improve your product velocity](https://substack-post-media.s3.amazonaws.com/public/images/fc2a41af-0095-42b5-a720-69a0c9aa9410_2912x1242.jpeg)

Right now, there are hundreds of companies just like this one using Core 4 to decide what to invest in when it comes to productivity improvements.

Increasing product velocity—or “moving faster”—is never done, but rather a horizon to chase. This habit of continuous improvement should repeat itself within your teams and across your organization and become part of the way that your company operates. With updated data, locate new areas of intervention, make new hypotheses, and repeat this process again.

Intercom was an early adopter of Core 4. Iain Breen, who heads up developer experience at the company, says, “We’ve never had as comprehensive of a view before, which was a big win for us. We now have top-level metrics that help us measure and manage our work.”

### Using benchmarks

Benchmarking data, both internal and external, will help contextualize your results. Remember, speed is only relative to your competition.

Here are external benchmarks for the key metrics in the Core 4 framework.

![Image from Introducing Core 4: The best way to measure and improve your product velocity](https://substack-post-media.s3.amazonaws.com/public/images/bd6f681e-e959-4d58-968f-23fdd70fef71_2922x2070.jpeg)

You can also [download full benchmarking data](https://getdx.com/research/benchmarks/), including segments on company size, sector, and even benchmarks for mobile engineers.

We recommend looking at 75th percentile values for comparison initially. Being a top-quartile performer is a solid goal for any development team.

### The most common friction points that are slowing your team down

Across hundreds of companies already using Core 4, here are the top points of friction in the developer experience, and some suggestions about what to do.

#### **1. Poor build and test processes**

Optimizing build and test processes helps reduce cognitive load on developers and accelerate feedback loops.

Success signals:

- Builds have predictable runtimes, allowing engineers to effectively manage their time around the pauses in their workflow.
- Builds are stable and rarely require manual intervention or fail due to factors outside of the contributor’s code changes.

What to do:

- Implement caching for dependencies or other common build environment setup steps. This can immediately make builds faster by eliminating unnecessary setup time.
- Parallelize steps when possible (i.e. frontend and backend tests running simultaneously).
- Improve test efficiency by adding retries, removing dependency order, and breaking larger tests into smaller ones where possible.

#### **2. Lack of time for deep work**

Developers should have significant time for deep, focused work each day.

Success signals:

- Developers consistently have blocks of focus time that are over an hour long.
- Developers have rapid feedback loops to avoid small but frequent disruptions.

What to do:

- Reassess recurring meetings and build a habit of regularly trimming meetings that accumulate over time.
- Prioritize. Plan for engineers to focus on one project or priority at a time. [“Never half-ass two things. Whole-ass one thing.”](https://www.goodreads.com/quotes/10149245-never-half-ass-two-things-whole-ass-one-thing)
- Limit the number of unplanned tasks or requests made to engineers. This might mean adjusting support rotations or creating workflows to avoid one-to-one pings.
- Adopt no-meeting days or blocks to give developers control over their schedule.

#### **3. Poor support for production debugging**

Developers can easily investigate customer-facing issues and application performance.

Success signals:

- Developers can rapidly examine a variety of system events and metrics, in order to diagnose and address issues quickly.
- Requests can be identified, isolated, and traced through systems effectively by engineers.

What to do:

- Adopt structured logging to keep log data organized, readable, and searchable.
- Block off dedicated time for the team to add new log statements to existing code. This can provide an immediate boost to the team’s ability to trace and diagnose issues.
- Develop a mechanism to track a user’s interactions in the UI. This assists in pinpointing potential bottlenecks or failures, making it easier to address problems.
- Establish shared dashboards for system health metrics. This improves transparency and makes sure efforts to improve the dashboards benefit everyone.

Many teams struggle with documentation, which impacts the developer experience globally. DORA’s research has [highlighted the importance of documentation](https://cloud.google.com/blog/products/devops-sre/deep-dive-into-2022-state-of-devops-report-on-documentation) for the past several years. Even small changes like standardizing documentation templates, deleting stale documentation, or using AI to transcribe and summarize recent product demo meetings can make a big difference in the discoverability of information.

### How to start using Core 4 to improve product velocity

Going faster is about more than just speed. There should always be a healthy tension between feature projects and efficiency projects, but this tension can become unhealthy when competing priorities create misalignment. When this happens, it’s even possible for individual projects to move faster, but that effort does not lead to the outcomes expected by the business. Product and engineering want the same thing—to get more value to customers, faster—and should be moving in the same direction. But teams might not have the tools or common language to talk about tradeoffs and get on the same page.

As Vercel CEO and founder Guillermo Rauch explains, “Engineering velocity is everything. Early-stage startups live or die based on product-market fit. With scale-ups, you live or die by velocity.”

Using a framework like Core 4 to measure team velocity can help product and engineering teams answer the question “What should we work on to get faster?” together.

If you want to use Core 4 to have data-informed conversations about what to prioritize, you should:

- Share this summary [slide deck about Core 4](https://docs.google.com/presentation/d/15RQzf8UtXjhdq9AA6dxRUk9940vQzfta7dfHs9cy9mM/edit?usp=sharing), why it was designed, and how it can be used with the rest of your leadership team.
- Get a baseline measurement. Use existing data if you can; otherwise use the templates in this article.
- Compare your results with benchmarks in order to set high standards and see where you have room for improvement.
- Dig into the data to see opportunities for improvement. Remember that your teams use these systems every day and know what needs to change. Involve them in the decision-making processes, and encourage teams to triage their own data.

Finally, I will end with a question. In your next leadership meeting, ask this: Are your teams moving as fast as they could be, and moving in the same direction?

*Thanks, Laura! For more, you can follow her on [LinkedIn](https://www.linkedin.com/in/lauratacho/) and her [blog](https://lauratacho.com).*

*Have a fulfilling and productive week 🙏*

## 🏅 Featured role of the week

[Delphi](https://www.delphi.ai/) is hiring for a [Lead Product Manager](https://delphi-ai.notion.site/Delphi-Product-Manager-13fa9fbe9ec880218413f1b4f73322c4) based out of SF. As their Lead PM, you'd get the opportunity to collaborate directly with their CEO to build and own an entire product category.

**Why I think the company is interesting:**

1. Delphi powers [Lennybot](https://www.lennybot.com/)! They allow anyone to upload their content to create a digital representation of not only their knowledge base, but also their way of thinking.
2. With zero marketing spend they’ve managed to go from 0 to nearly $2 million ARR in their first year.
3. They are backed by Sequoia, Founders Fund, and a host of tier-one investors.
4. They a are still a small scrappy pre-series-A team. This is an opportunity to *actually* join at the ground floor and make a huge impact.

If you’d like to get your profile sent directly to their team, just fill out this [quick form](https://airtable.com/apppne9fUg8CKw6s2/pag2vapuCgpIGh6WB/form). All submissions from my readers get priority (but no guarantees beyond that).

—

If you’re hiring, I run a white-glove recruiting service specializing in senior product roles (e.g. Directors, VPs, and Heads of Product), working with a few select companies to fill their open roles. Apply to work with us below.

[Start hiring](https://www.lennysjobs.com/)

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
