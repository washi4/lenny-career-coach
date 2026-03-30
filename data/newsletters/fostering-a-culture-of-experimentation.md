---
title: "Fostering a culture of experimentation"
subtitle: "Each week I tackle reader questions about product, growth, working with humans, and anything else that’s stressing you out at the office"
date: "2020-09-22"
type: "newsletter"
tags: ["leadership", "analytics", "design", "growth", "engineering", "strategy"]
word_count: 2472
---

*👋 Hello, I’m [Lenny](https://twitter.com/lennysan), and welcome to a**🔒 subscriber-only edition 🔒**of my newsletter. Each week I tackle reader questions about product, growth, working with humans, and anything else that’s stressing you out at the office. Send me your questions and in return, I’ll humbly offer actionable real-talk advice 🤜🤛*

## **Q: My team is placing a much larger focus on experimentation and testing, and I was curious – how did Airbnb build such a strong culture of experimentation and data? Any resources you recommend as we instill this in our team?**

From the outside, Airbnb may look like a design-driven company but much of its success is actually rooted in the strength of its data science team. Airbnb’s tenth employee was a data scientist and today there are nearly 200 data scientists and data engineers informing day-to-day strategy, prioritization, and decision-making.

One of my favorite examples of this in action is the continued lack of a “sort by price” filter (vs. a price range):

[![Image from Fostering a culture of experimentation](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/9245bf98-133a-464f-8c7a-1a213e114cd2_1668x1030.png)](https://substackcdn.com/image/fetch/$s_!Ue6M!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9245bf98-133a-464f-8c7a-1a213e114cd2_1668x1030.png)

It feels like an obvious user-experience win: let people sort any way they want! Well, it turns out every time a team attempted to add this feature, conversion plummeted. Why? Because travelers unknowingly end up focusing on listings that are unlikely to work out – homes that are lower-rated and hosts who are less responsive and reject more often. Thus travelers have a bad time and leave forever. Without having data to tell us this was happening, over the years, hundreds of thousands of guests would not have found a place to stay.

Whether your company is just starting out, or you’re attempting to shift the culture of your existing organization, below are the five biggest things Airbnb got right in fostering a culture of experimentation:

1. 🤓 **Hiring** data-minded people early — and often
2. 🔭 **Aligning** around a measurable north-star metric
3. 🔗 **Embedding** data scientists into your teams
4. 💞 **Humanizing** the data
5. 🛠 **Building** tooling that makes it easy to run experiments that you trust

Let’s dive in.

### 1. 🤓 Hire data-minded people early — and often

Everything you’ll read below in large-part trickled down from a decision to hire a data scientist ([Riley Newman](https://www.linkedin.com/in/rileynewman/)) as Airbnb’s 10th employee:

> *“**As an early employee, I was able to build relationships with the people that would go on to lead all sides of Airbnb**. Most days would begin with an analysis of the business as a whole and then I would bounce around Brian and Joe's apartment to share what I was seeing with the rest of the team.*
>
> *This had long term implications for the culture of data at Airbnb. It fostered trust in data as a strategic asset, shaped the way I thought about how data could be used to support all sides of the organization, and how the data science team would need to be built as a result.
>
> You could say that the culture of experimentation - and becoming data-driven more generally - began in that apartment.”*
>
> *ー Riley Newman*

These early relationships showed the rest of the company the value of data and made it easier to increasingly invest in data over time (e.g. hiring, tooling, strategy).

**Takeaway**: If you’re just starting out, consider hiring someone early-on who is full-time focused on data. If you’re at a larger company, get a senior DS into your org’s leadership team.

### 2. 🔭 Align around a measurable north-star metric

The second most impactful shift in Airbnb’s experimentation culture came from aligning around a single quantitative north-star metric: nights booked. Before this, there was no shared understanding of what teams should optimize for and how exeperiments could inform those decisions:

> *“As the company grew, hunger for analysis overwhelmed my team. At the time I chose what we worked on based on what would be most impactful to the business. But how do you compare growth in China against machine learning improvements for our search ranking algorithm?*
>
> ***The CFO was experiencing a similar version of this problem, so we came up with the idea of establishing a north star metric: nights booked. We would use this as a common denominator for projects so we could align on where to prioritize investment.***
>
> *An added (and unexpected) benefit of doing this was it propelled the company's use of experiments. Leaders were suddenly held accountable to measurable results that weren't as obvious for how to hit relative to simply completing tasks. They needed to know why some things worked and others didn't, so they began embracing experiments and analysis. It changed the whole dynamic of our interaction.”*
>
> *— Riley Newman*

Before this alignment, teams were in fact using OKRs and *attempting* to be data-informed, but most of the key results were “Launch X” or “Ship Y.” Not conducive to experimentation and learning.

After this alignment, the leadership teams were able to finally identify the components that impacted this north-star (e.g. supply growth, activation, etc.), map those levers to a hierarchy of team-level KRs, and create clear accountability and direction for every leader.

**Takeaway**: Aligning around a quantifiable north-star metric gives you a foundation from which to build a data-informed, experiment-driven culture. As you start to build this operating muscle, you’ll later want to layer on additional metrics to make sure you are growing in a healthy and sustainable way (e.g. trip quality, second-order effects).

### 3. 🔗 Embed data scientists into your teams

Initially, the Airbnb DS team was centralized and supported ad-hoc initiatives that needed data support. This worked well for a while, but once the DS team got big enough (~25 people), the model transitioned — data scientist began being embedded within product teams. This was transformative:

> *“Experimentation needs to be embraced and evangelized throughout the org. One thing that made this quite easy at Airbnb was the fact that **data scientists were embedded in product teams. Data scientists were not just 'consulted' on product, but data itself became critical to decision-making.***
>
> *Data scientists sat next to PMs and along with the engineers and designers were a critical voice in roadmap planning. I find the strongest teams operate with data at the outset – they don't just call over the data scientist when it's time to do a post-facto analysis of how XYZ experiment went. Some of the best product ideas we came up with on Airbnb's early growth team came from data scientists.*
>
> *At one point the Growth team started bi-weekly experiment reviews where product team members would present on experiments they ran, with a focus on lessons learned, mistakes and next steps. Knowledge sharing was off the charts.”*
>
> *— Lindsay Pettingill, early DS*

This model continues to this day. Most product teams have at least one full-time DS dedicated to their initiative, and there’s a DS at every level of leadership team.

Note, decentralize the DS team is not all upside and not something you should do immediately. While other team members loved this change because they got direct access to a data scientist, it was also painful. There were more errors and less trust across DS sub-teams as they were split up, and teams started to have less trust in analysis coming from outside of their domain. The solution was to bring together data people from around an organization to centralize processes, tooling, and learnings (e.g. a central knowledge repo, metrics repo, and data portal). These efforts went a long way in establishing trust across teams and making the DS team much more productive in a distributed fashion.

**Takeaway**: As you scale, embed dedicated data scientists into your cross-functional product teams, while keeping everyone working from the same playbook.

### 4. 💞 Humanize the data

Some see data as dehumanizing, too narrowly focused, or even dangerous. And it certainly can be. Data doesn't always have the answers and is sometimes unhelpful or imperfect. The most data-savvy people deeply understand this. But you can still be data-informed (using data as an input) without being data-driven (blindly doing whatever the data tells you):

> *“**We made a real effort to characterize data in a human light. I liked to frame data as the voice of our customers**. Early on the founders would meet with guests and hosts to hear what was and wasn't working well. But as the community of guests and hosts scaled alongside our team of employees, it became impossible to maintain that feedback loop. Data is what allows you to hear from your community at scale.”*
>
> *ー Riley Newman*

I find that when you explain experiments and data in this way and demonstrate the practical value of having these facts, every other function becomes obsessed with data (e.g. designers, sales, user researchers). This then allows you to shift conversations and decisions from opinion-based to fact-based.

**Takeaway**: If you find that your team is resistant to data and experiments, help them understand what this data is telling you about your users, and how you plan to use (and not-use) it in your decision making.

### 5. 🛠 Build tooling that made it easy to run experiments that you trust

Even if you get all of the above right but running experiments is hard to do, or teams don’t fully trust the results, it’ll continue to be an uphill battle. At Airbnb, the search experience team (who was running most of the early experiments) became increasingly frustrated with the amount of time it took to run experiments. So they decided to build their own experimentation tooling ([which you can read about here](https://medium.com/airbnb-engineering/experiments-at-airbnb-e2db3abf39e7)). This eventually became the foundation for all experimentation at Airbnb, and now a full-time team is devoted to building, supporting, and growing data-tooling within the org.

If you choose to go down this route, be careful not overbuilding too early though:

> *“When systems are still in flux, you don't want to overinvest in tooling that will become outdated immediately when your data schema gets updated or some other piece of infrastructure changes. However, **it is essential to have a way to rapidly iterate, and that means quick access to experiment results data. So if you need to in the early days, build something simple and scrappy at first, and over time evolve it to support the team's needs.***
>
> *The growth team had one tradition where we did a roundup of experiment results across the team. Someone would get up and explain the experiment setup (e.g., "We showed 50% of users this banner, and 50% saw nothing...") and the audience would vote on which variant won. It shocked everyone that so often, the intuitive variant was not the winner. (Turns out that the banner we showed distracted people from booking, so while banner clicks went up but bookings--our North Star--went down.) Part of a data-driven culture is the humility about not knowing the right answer.”*
>
> *— Rebecca Rosenfelt, early PM and DS*

[![image.png](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/d28fa7c7-727c-482e-bfa0-d92ebaf07147_1024x424.png "image.png")](https://substackcdn.com/image/fetch/$s_!AeVc!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd28fa7c7-727c-482e-bfa0-d92ebaf07147_1024x424.png)

An important element of this work is making sure that your data foundations are solid — investing time and resources in infrastructure and tooling that establishes a single source of truth for metrics that you can trust. It’s better to operate with intuition than with incorrect data. [James Mayfield](https://www.linkedin.com/in/james-mayfield-15b71354), Director of Product for the Airbnb infra team, wrote [an excellent piece about this topic](https://towardsdatascience.com/an-island-of-truth-practical-data-advice-from-facebook-and-airbnb-a0d9c355e5a0).

**Takeaway:** Make it effortless to run and analyze experiments, and make certain your team trusts the results.

### 🧠 Further study

1. [4 Principles for Making Experimentation Count](https://medium.com/airbnb-engineering/4-principles-for-making-experimentation-count-7a5f1a5268a) by Lindsay Pettingill
2. [At Airbnb, Data Science Belongs Everywhere — Insights from Five Years of Hypergrowth](https://medium.com/airbnb-engineering/at-airbnb-data-science-belongs-everywhere-917250c6beba) by Riley Newman
3. [An island of truth: practical data advice from Facebook and Airbnb](https://towardsdatascience.com/an-island-of-truth-practical-data-advice-from-facebook-and-airbnb-a0d9c355e5a0) by James Mayfield
4. [Experiments at Airbnb](https://medium.com/airbnb-engineering/experiments-at-airbnb-e2db3abf39e7) by Jan Overgoor
5. [Experiment Reporting Framework](https://medium.com/airbnb-engineering/experiment-reporting-framework-4e3fcd29e6c0) by Will Moss
6. [Scaling Airbnb’s Experimentation Platform](https://medium.com/airbnb-engineering/https-medium-com-jonathan-parks-scaling-erf-23fd17c91166) by Jonathan Parks
7. [Data Infrastructure at Airbnb](https://medium.com/airbnb-engineering/data-infrastructure-at-airbnb-8adfb34f169c) by James Mayfield
8. [Growth tech talk](https://airbnb.design/videos/growth-tech-talk/) by Nick Handel

See you next week!

*Thank you [Lindsay Pettingill](https://www.linkedin.com/in/lpettingill/), [Bar Ifrach](https://www.linkedin.com/in/bar-ifrach-71507657), [Rebecca Rosenfelt](https://www.linkedin.com/in/rebeccarosenfelt/), and [Nick Handel](https://www.linkedin.com/in/nicholashandel) for contributing to this post, and a special thank you to [Riley Newman](https://www.linkedin.com/in/rileynewman/) for sharing these stories from the early years (plus for spearheading most of this work at Airbnb early on) 🙏*

## **🔥 Job opportunities**

**Sponsored job of the week**: ✨ [0→1 Product Leader at ClassDojo](https://boards.greenhouse.io/classdojo/jobs/2075731) ✨

- **Product**: [ClassDojo](https://boards.greenhouse.io/classdojo/jobs/2075731), [Hipcamp](https://jobs.lever.co/hipcamp/d04821c3-fb9a-4d3f-9a7a-1b75deacc09f), [KUDO](https://angel.co/company/kudo-meeting/jobs/913705-product-manager), [Product Hunt](https://www.notion.so/Head-of-Product-Product-Hunt-9d11d30d491a475c970accdb94eadc71)
- **Growth**: [Instrumentl](https://angel.co/company/instrumentl/jobs/975735-head-of-growth), [Levels](https://levels.link/growth), [Shef](https://angel.co/company/shef-1/jobs/883288-head-of-marketplace-expansion)
- **Design**: [Huddle](https://dribbble.com/jobs/49411-Sr-Product-Designer), [Pachama](https://jobs.lever.co/pachama/f4f49853-9d59-4dcc-9d0b-143ca63a53d2), [Office Hours](https://docs.google.com/document/d/1_aHEl08ahc6NjOhwmi9GQlNv8CvlOwf8hL-FyCrmAes/edit), [Runway](https://www.notion.so/A-Product-Designer-baa24543701f472bb291d4429812064a), [Stytch](https://jobs.lever.co/stytch/675e6a11-5a33-41bc-9315-5a3ca141d444), [Watershed](https://www.notion.so/Designer-Watershed-7cb7bf8bd750432399d36e83e4e32391)
- **Engineering lead**: [Cerebral](https://boards.greenhouse.io/cerebral/jobs/4076598003), [Snackpass](https://jobs.lever.co/snackpass/00505223-bc85-4c28-8e4b-31217d05c2de)
- **Frontend engineer**: [Cascade](https://www.cascade.io/jobs/front-end-product-engineer), [Levels](https://www.notion.so/levelshealth/Join-Levels-Remote-Developer-58454f0db7e3466692f7b75db6237ddf), [Runway](https://www.notion.so/A-Product-first-Frontend-Engineer-beae09e5ae034664a38cb26573e8d403), [Transform](https://transformdata.io/careers/)
- **Backend engineer**: [Sourcetable](https://sourcetable.com/jobs#backend-engineer)
- **Fullstack engineer**: [Centered](https://www.notion.so/Software-Developer-e7cad269968e4d5aaeb1f6da9e282626), [Icebreaker](https://icebreaker.video/product-engineer), [Iggy](https://www.notion.so/askiggy/Full-Stack-Engineer-IggyAPI-5a8c1825028e421b9587538718f370b4), [Runway](https://www.notion.so/A-Product-first-Full-stack-Engineer-5e056689b68048aeb1ccfea6ac73eb9e), [Snackpass](https://jobs.lever.co/snackpass/7c3bb72b-70d3-45ca-9dea-eea57ed5333d)
- **iOS engineer**: [Pairplay](https://www.notion.so/Lead-iOS-Developer-ba18577b6ba44ad68e45b8e7a957353c), [Vori](https://www.notion.so/Mobile-Engineer-Vori-c5ceccd966a04c8aa9e970f0355ca13c)

## **🧠 Inspiration for the week ahead**

1. **Remember**: RBG

2. **Dance**: [iLe - Tu Rumba](https://www.youtube.com/watch?v=RTzL-G2kIA8) (via Tim Ferriss)

[Watch on YouTube](https://www.youtube.com/watch?v=RTzL-G2kIA8)
3. **Get feedback**: [Discovery Assist](https://discoveryassist.firstround.com/) — a new offering by [First Round Capital](https://firstround.com/) that gives founders free access to companies to do customer discovery and feedback

These paid editions are intended for a single recipient, but occasional sharing is totally fine. If you would like to order multiple subscriptions for your team with a group discount (min 5) just reply to this email.

Sincerely,

Lenny 👋
