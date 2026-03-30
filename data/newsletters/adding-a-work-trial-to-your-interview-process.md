---
title: "Adding a work trial to your interview process"
subtitle: "Lessons from Linear, Automattic, 37signals, Gumroad, Auth0, and PostHog"
date: "2024-01-30"
type: "newsletter"
tags: ["career", "design", "leadership", "engineering", "startups", "newsletter"]
word_count: 7321
---

*P.S. Don’t miss [Lennybot](https://www.lennybot.com/) ✨ (an AI chatbot trained on my newsletter posts, podcast interviews, and more) and my new [swag store](https://lennyswag.com/)(makes great gifts!).*

> ## Q: I’ve noticed “work trials” have come up a few times on your podcast. I’m sold on the benefits and want to explore this at my company. What advice do you have for setting up a successful work trial process?

Indeed they have. [Karri Saarinen](https://www.linkedin.com/in/karrisaarinen/) (CEO of [Linear](https://linear.app/)) [mentioned](https://www.lennysnewsletter.com/i/137200502/i-assume-much-of-your-success-has-been-thanks-to-hiring-well-in-your-product-hires-what-do-you-most-look-for-that-maybe-others-dont-and-broadly-what-does-your-interview-process-look-like) they run candidates through work trials, as did [Jason Fried](https://www.lennyspodcast.com/jason-fried-challenges-your-thinking-on-fundraising-goals-growth-and-more/) (co-founder and CEO of [37signals](https://37signals.com/)). When I [asked folks on Twitter](https://x.com/lennysan/status/1742326000254632094?s=20) who else they’ve seen do a great job with work trials, I learned that trials have also been a longtime practice at [Automattic](https://automattic.com/), [Gumroad](https://gumroad.com/), [Auth0](https://auth0.com/) (now part of [Okta](https://okta.com)), [PostHog](https://posthog.com/), and a number of other companies. Work trials aren’t a new concept, but they do seem to be trending.

![Image from Adding a work trial to your interview process](https://substack-post-media.s3.amazonaws.com/public/images/6cc3bbd4-3db3-43f2-92c4-c2de500fab67_2134x1934.png)

To get you an answer, I interviewed the founders of the six companies most known for work trials, and from their collective wisdom put together a guide for building your own work trial process:

1. **What exactly is a “work trial”?**
2. **Why do work trials?**
3. **What are examples of good trial projects?**
4. **How do they fit into the overall interview process?**
5. **Should you pay candidates, and, if so, how much?**
6. **How do you evaluate a candidate’s performance?**
7. **How do you convince people to invest this much time in an interview?**
8. **Lessons for implementing your work trial**

*A big thank-you to [Matt Mullenweg](https://ma.tt/) ([Automattic](https://automattic.com/)), [Jason Fried](https://www.linkedin.com/in/jason-fried/) ([37signals](https://37signals.com/)), [Karri Saarinen](https://karrisaarinen.com/) and [Cristina Cordova](https://www.linkedin.com/in/cristinajcordova/) ([Linear](https://linear.app/)), [Sahil Lavingia](https://www.linkedin.com/in/sahillavingia/) ([Gumroad](https://gumroad.com/)), [James Hawkins](https://www.linkedin.com/in/j-hawkins/) ([PostHog](https://posthog.com/)), and [Matias Woloski](https://www.linkedin.com/in/matiaswoloski/?originalSubdomain=ar) ([Auth0/Okta](https://auth0.com/)) for their insights and advice 🙏*

### What exactly is a “work trial”?

A work trial refers to a step in the interview process where **candidates are asked to complete a project that’s representative of the work they’ll be doing in the role**. The “representativeness” falls on a spectrum, from doing an in-depth project at home (e.g. 37signals) to co-working with existing employees in the real codebase building something the company will ship (e.g. Linear).

Where you fall on the spectrum of how close to reality your work trial should be is directly correlated with the size of your company. The fewer people you’re hiring (and thus the more important each hire is), the more time you should be investing in a work trial. As you grow, you can streamline the process.

### Why do a work trial?

Simple: it gives you significantly more signal on the candidate.

As [James Hawkins](https://www.linkedin.com/in/j-hawkins/) (co-founder and CEO of PostHog) shared, “**It makes it obvious who to hire.** **It is** ***frequently*** **surprising how someone performs relative to what we thought in the interviews about their skills.**”

**Linear** found that the only way they could know if the candidate was a fit for their unique culture was by co-working with them:

> “The majority of companies don’t work in the way we do, which leads to fewer people with these kinds of skills. A conventional interview process, often modeled by large companies, doesn’t account for this. **It’s challenging to assess in interviews if someone is truly a builder, has good taste and judgment, can take initiative, and approaches problems productively.**” **—**[Karri Saarinen](https://karrisaarinen.com/), Linear

This is the same conclusion **Automattic** eventually came to:

> “**The more we thought about why some hires succeeded and some didn’t, the more we recognized that there is no substitute for working alongside someone in the trenches.**
>
> We recognized we were being influenced by aspects of an interview—such as someone’s manner of speaking or behavior in a restaurant—that have no bearing on how a candidate will actually perform. Some people are amazing interviewees and charm everyone they talk to. But if the job isn’t going to involve charming others, their interview skills don’t predict how well they’ll do as employees. Just like work, interviews can be ‘performed’ without real productivity. So we gradually changed our approach.” —[Matt Mullenweg](https://www.linkedin.com/in/mattm/), founder and CEO

Work trials not only help you better gauge the candidate’s skill set, they also help you understand how much the candidate *wants* to work at your company, as Matias, Sahil, and Matt pointed out:

> “It did mean that we might miss out on some people who couldn’t make the time for it, but because at a startup, commitment—and wanting it—is very important, **it** **was a good filter**.” —[Matias Woloski](https://www.linkedin.com/in/matiaswoloski/?originalSubdomain=ar), co-founder and CTO of Auth0

> “The trial is about their work. But it’s **also about them seeing all the internals of the company**, culture, finances, my attitude, etc.” —[Sahil Lavingia](https://www.linkedin.com/in/sahillavingia/), founder and CEO of Gumroad

> “**It’s a two-way street**. It allows us to be as confident as possible in making a decision and enables the person interviewing to do the same thing.” —[Matt Mullenweg](https://www.linkedin.com/in/mattm/), founder and CEO of Automattic

### What are examples of good trial projects?

[Karri Saarinen](https://www.lennysnewsletter.com/publish/post/140748471?back=%2Fpublish%2Fposts%2Fscheduled) best summarized the recurring lesson across my interviews:

> **“The goal with the work trial is to simulate a normal working environment as much as possible.”**

**Gumroad** wins for taking this idea furthest by hiring the candidates as contractors for 4 to 6 weeks. As [Sahil Lavingia](https://www.linkedin.com/in/sahillavingia/) put it, “**It’s so very hard a priori to know if someone can do the job. So we just pay them to do it!**”

Throughout the year, the Gumroad team marks certain tasks on their roadmap as “good for trialers” and then they assign these tasks to interview candidates. “Generally,” Sahil said, **“they ship a lot of small bug fixes and stuff. For example, we have a current trialer working on adding wishlists to Gumroad, which is a pretty big feature.** Shan recently passed with flying colors, and here’s an update to give a sense of the work trialers do”:

![Image from Adding a work trial to your interview process](https://substack-post-media.s3.amazonaws.com/public/images/d3eba309-f1b8-4124-97e3-6c0adea77405_1179x2556.jpeg)

As part of this trial, Gumroad gives candidates access to their internal tools, including their local GitHub, Figma, Notion, Slack, etc.

> “**Another way to look at work trials is, you’re hired by default** but will likely be fired in 30 to 60 days if you don’t perform like the rest of the team by the end of that time limit.” —[Sahil Lavingia](https://www.linkedin.com/in/sahillavingia/)

**Linear** comes in a close second in terms of realism by having candidates co-work with their future team for 3 to 5 days, in the actual codebase, also with access to the company’s GitHub, Figma, Slack, and Notion accounts.

> “**We assemble a supporting project team, including a recruiter, the hiring manager, and 3 to 5 teammates who would closely intersect with this role once they’re hired.**
>
> Our recruiter and people operations coordinator handle necessary logistics pre-trial, like securing a non-disclosure agreement, granting temporary tool access, scheduling meetings, and prepping docs conveying context on goals and expectations.
>
> Work trial projects sometimes end up being the first project for the new hire when they get started.” —[Karri Saarinen](https://karrisaarinen.com/)

Examples of projects Linear gives candidates:

- For an **engineer**, [building a feature allowing teams to effectively triage incoming feature requests](https://linearapp.notion.site/Kenneth-Skovhus-Work-Trial-7ef0fb71e7ab408d87169c0982726f64)
- For a **content marketer**, [writing a blog post based on a feature release](https://docs.google.com/document/d/1eTRmCpkpIGHQlDHniC_R5I1rTJigCzMq7b3BjRjS4vE/edit#heading=h.fo83nqhhnonf) *(which they [shipped part 2 of to production](https://linear.app/blog/using-ai-to-detect-similar-issues) recently after the candidate was hired)*
- For a **designer**, designing a way to resolve comments:

![Image from Adding a work trial to your interview process](https://substack-post-media.s3.amazonaws.com/public/images/22430f5c-a9fa-4c27-9c83-abc5d3f9bf18_1556x976.png)

**Automattic**, **Auth0**,and **PostHog** used to operate like Linear and Gumroad, bringing the candidate on part-time to work alongside existing employees for some number of days, but as they’ve grown, they’ve tweaked their trial process to be more time-efficient and standardized.

> “**Our work trial task will be representative of the day-to-day work someone in the role at PostHog does, but it isn’t actual work we’d use or ship. It used to be actual work.** **We changed it to representative work because:**
>
> 1. Actual work comes with tricky implications around things like IP ownership, needing to hire them as contractors, etc.
> 2. The codebase is now way too big and complex for this to be practical.
>
> Tasks are generally designed to be too much work for one person to complete in a day, in order to get a sense of the candidate’s ability to prioritize, and they’re open-ended as per above.”
>
> —[James Hawkins](https://www.linkedin.com/in/j-hawkins/), CEO

Here’s an example project **PostHog** assigned a recent PM candidate, which they complete at home and then present to the hiring team:

![Image from Adding a work trial to your interview process](https://substack-post-media.s3.amazonaws.com/public/images/262cb28e-6902-42fb-9e83-005bd053963f_1420x1140.png)

At **Automattic**,they also used to give candidates access to the actual codebase, but as [Matt Mullenweg](https://www.linkedin.com/in/mattm/) told me, “it lacked consistency and was hard to scale. These days, for more generic engineering roles, we set up a separate repository with an already forked, smaller project, which is better controlled in terms of candidate experience, code, tasks, and access.

> **The project scope also varies, but it will be as close to the actual work as possible. If you’re an engineer, you’ll be writing real code. If you’re a designer, you’ll design.**
>
> **In some cases, there’s a real-world project they’ll work on. However, in many cases, folks will work on a ‘synthetic’ project that simulates the work they’ll do very closely without waiting for a suitable project to come up.**
>
> Several people are usually involved in the process. There’s always a Lead who is the main point of contact for the candidate. The others involved are the folks the candidate would interact with most. This could be anywhere from two to six people (or more), depending on the role. For more interactive roles, such as Sales or positions where folks will be presenting internally, the trial project may include a final presentation. Mostly, however, the work is done asynchronously.
>
> Folks are also set up on Slack and [P2](https://wordpress.com/p2/) (our internal communication tool) so they can get used to the tools we use, communicate how they need to, and have access to all the information they need.”

Here’s a blog post snippet from [an engineering candidate who went through the Automattic work trial](https://jerryjones.dev/2020/04/16/getting-hired-at-automattic/):

![Image from Adding a work trial to your interview process](https://substack-post-media.s3.amazonaws.com/public/images/2dbe0473-4e8f-4c5a-994a-42a965a802e4_1406x1300.png)

**Auth0** used to do an in-depth take-home exercise, as [Matias Woloski](https://www.linkedin.com/in/matiaswoloski/?originalSubdomain=ar) (co-founder and CTO) shared:

> “**The project was typically from a real-world situation we faced and solved in the past. This allowed us to know the ins and outs of the problem, which is useful when assessing and guiding candidates.**
>
> We’d reuse the same exercise across all levels and adjust expectations. For positions we didn’t hire for often (e.g. Director of Infrastructure), we’d make up the exercise when a few candidates reached that stage in the pipeline.”

Here’s an example project prompt for an engineering role at Auth0 ([high-res copy here](https://docs.google.com/document/d/1w_BQisyyiUyhh7302NzaB9gTB9SqYqEMcUDNZkJfouc/edit)):

![Image from Adding a work trial to your interview process](https://substack-post-media.s3.amazonaws.com/public/images/255a3925-3610-4f61-a260-658c32673e70_4125x4205.png)

However, a couple of years ago, after being acquired by Okta, **Auth0** moved away from these projects in favor of shorter exercises, fully knowing they would get less signal on candidates:

> “For engineering roles specifically, we now have a take-home code test that takes about 90 minutes, which replaced part of the tech interview pipeline and is fairly different from the previous process.
>
> **We decided to move to a shorter challenge supported by a platform ([CodeSignal](https://codesignal.com/?gad_source=1)) for two main reasons:**
>
> 1. **Have a larger candidate pipeline:** After gathering feedback from candidates, engineering leadership considered that the original exercise took longer than many folks would have wanted, which resulted in them self-selecting out/never applying. Thus, we could be missing out on some great folks.
> 2. **Reduce time spent by the hiring team on each exercise:** Shorter tests means less time spent on them by hiring managers during the Slack phase. CodeSignal automates some of the evaluation (not all, but many manual parts).
>
> **There’s an understanding that there’s less ‘signal’ from the shorter exercise, but as of today this is a trade-off the org has decided to go ahead with, and we often look at the process and metrics to see where we can make future improvements.”**
>
> **—**[Matias Woloski](https://www.linkedin.com/in/matiaswoloski/?originalSubdomain=ar), Auth0

**37signals** also does take-home assignments, but, unlike other companies, candidates *aren’t* allowed to ask the team any questions. [Jason Fried](https://www.linkedin.com/in/jason-fried/) noted they also keep the prompt strategically vague.

> “We’ll give someone, say, here’s a screen in Basecamp, and what would you do with it to make it better? We might give you a little bit more direction. ‘It would be nice if you could organize this stuff better than just a flat list. What would you do?’
>
> **We don’t want to be super-specific because I don’t want to tell anyone what to do. This is all about choice. One of the reasons why I want it to be sort of ambiguous is because I want to see how people choose to spend their time and what they think is important to focus on and what they think is important to show.”**

Here’s a real project 37signals gave design candidates ([high-res copy here](https://docs.google.com/document/d/1WTFOR_xP7xU17qUFKpL7xydAgq7-zz9SPJg1YRPq0vw/edit))**:**

![Image from Adding a work trial to your interview process](https://substack-post-media.s3.amazonaws.com/public/images/08e46f0a-9b58-4442-a752-5881beafaace_4106x5574.png)

At 37signals, they expect designers to build the thing, not just design.

> “**We’re not making pictures here.** This is not screenshot work. This is not Figma work. We don’t ship Figma to customers. We ship HTML and CSS. You have to make the real thing. That’s what we’re hiring you to do.
>
> You’ve got to make the whole thing work. Now, when I say work, we know you have five days. You don’t have access to our codebase. You’ve got to re-create something and make something. And what you choose to focus on is up to you. And what you choose to make work is up to you. This is all about choice.” —[Jason Fried](https://www.linkedin.com/in/jason-fried/), 37signals

### How much time should you give people, and how would this fit into the overall interview process?

**Here’s how long each company gives candidates:**

- PostHog: 1-3 days
- Linear: 3-5 days
- 37signals: 7 days
- Auth0: 7 days
- Automattic: 40 hours
- Gumroad: 4-6 weeks

**PostHog** makes a whole day (or week) of the interview experience, combining interviews and work trials into something they call SuperDays (or SuperWeeks):

> “The process for most roles is:
>
> 1. Culture interview/screening with our internal recruiter: 30 minutes
> 2. Technical interview with the team leader + 1 or 2 team members: 60 minutes
> 3. Bar-raiser with me or [Tim Glaser](https://www.linkedin.com/in/timgl/) (my co-founder and CTO): 30 minutes
> 4. **SuperDay work trial: typically 1 day, sometimes 3 days, and used to be a week or more when we had less experience hiring and our codebase was simpler to contribute to.**
>
> We’ll split these SuperDays across multiple days (e.g. two half-days) if that’s easier for the candidate so we don’t heavily favor people with more flexibility. We can get the whole lot done in a couple of days from start to finish if needed.
>
> Most of the day is spent on a task, but we also include a short ‘coffee chat’ with two or three selected staff. The chats are an additional culture screen and an opportunity for candidates to get to know the team, ask questions about the company, etc.” —[James Hawkins](https://www.linkedin.com/in/j-hawkins/)

![Image from Adding a work trial to your interview process](https://substack-post-media.s3.amazonaws.com/public/images/351ee644-a54b-419e-ab79-7a0ca336f32c_1600x1396.png)

**Linear**’sinterview process starts with an introductory call with a recruiter, a hiring manager interview, and role-relevant skills assessments with team members. Once a candidate makes it through those, they run them through a 3-to-5-day work trial:

> “Three or four days is typical, but leadership hires often do take a full five days. We’re pretty accommodating (e.g. if you have an important work meeting at your current employer or a personal appointment, you can take time for that) during the work trial itself, and we’ll also accommodate folks who might want to do a work trial over a weekend (e.g. Friday to Monday) if they don’t have much paid vacation they can otherwise take. We sometimes schedule work trials the same week if the candidate already has offers or has time pressure.
>
> The work trial itself has a few standard meetings:
>
> - **Kickoff:** Candidatemeets with the team to go over the prompt, get additional context, ask clarifying questions, and discuss an initial approach.
> - **Check-in:** Candidate leads status update to share progress, ask questions, and get feedback. Check-ins are candidate-led because we want to see their ownership and readiness to course-correct.
> - **Final presentation:** Candidate presents final deliverable to the work trial team and answers questions. These presentations tend to be discussion-based.
>
> Apart from these meetings, the candidate focuses on carrying out the project, and can reach out to the team through a dedicated Slack channel or ad hoc calls if they have questions or need information.”
>
> —[Cristina Cordova](https://www.linkedin.com/in/cristinajcordova/), COO of Linear

For at-home projects, both **37signals** and **Auth0** give candidates 7 days. Typically, they end up spending 6 to 12 hours on the project, but can spend as much or as little time as they’d like.

> “**The idea here is put your best work forward with the amount of hours you have. If you were only able to spend six hours, tell us that and explain it. Let’s talk about those six hours.**
>
> Someone might spend 12, and someone else might stay up all night four nights in a row to get this done. And I don’t really think that’s better. I’m pretty sure it’s not better, actually. If someone’s working six hours and the product is pretty good, while someone’s working 16 hours and it’s slightly better, I’d rather have the six-hour person.
>
> ‘Here’s your time. Tell us how much time you spent. We recognize that you probably don’t have as much time as you’d like. We totally understand that.’ ”
>
> —[Jason Fried](https://www.linkedin.com/in/jason-fried/), 37signals

Here’s **Auth0**’s process:

> “Our interview process looks like this:
>
> 1. Email screener
> 2. Two interviews (with tech lead and engineering manager, or director and engineering manager, depending on the position); typically we’d go over:
>
>    1. Past work experience (tell me about a complex problem you solved; dig in deep)
>    2. Communication, teamwork, etc.
>    3. Solving high-level/design tech problems we picked (no algorithms/coding, just general design)
> 3. **Take-home exercise**
> 4. Demo.”
>
> **—**[Matias Woloski](https://www.linkedin.com/in/matiaswoloski/?originalSubdomain=ar)

At **Automattic**, they allot tech work trials 40 hours, and specifically measure in hours vs. days:

> “**We measure in hours rather than days or weeks, as we firmly believe in giving people the flexibility to bring their authentic selves to the project.** Someone could spend two weeks on a 40-hour project; others could take three months—we don’t judge on timelines as long as the communication matches up. For some roles, the project can take a few hours, up to 10 hours.” —[Matt Mullenweg](https://www.linkedin.com/in/mattm/)

In terms of how it fits into the overall process, Matt shared that the process can vary. “For some roles, we may only need one interview before a trial project begins; however, several rounds may be required for more strategic roles. The focus of these interviews is also tailored to the role. There may also be a smaller practical element or test for some roles before the trial stage begins. For example, in engineering, we used to have an interview with an engineer, a take-home code test, and then the trial stage. We experimented with removing the initial interview, but given changes in our objectives for the role and the overall market, we are now considering reintroducing the interview. The process is ever-changing.”

**Gumroad** offers by far the longest work trial, giving candidates 4 to 6 weeks, with 10 to 20 hours expected a week.

> “If people can do more hours each week, they’re welcome to. But the cool thing about our model is people don’t have to quit their job or take time off work to interview.
>
> Prior to the work trial, I do one 30-minute ‘culture fit’ interview, basically sussing out why they want to work for a weird company like Gumroad and a weirdo like me.” —[Sahil Lavingia](https://www.linkedin.com/in/sahillavingia/), founder and CEO

### Should you pay candidates, and, if so, how much?

Here’s an overview of how everyone handles compensation:

- **Gumroad:** “We pay them the same hourly rate they’d get when they join. For engineers, that is $150 to $200 an hour. We have a contract they sign as part of onboarding via [Flexile](https://flexile.com/) (our homegrown product).”
- **Linear:** “Today we pay $600/day regardless of seniority, role, or location.”
- **37signals:** “We pay them $1,500 for the work for the week. I don’t believe in asking people to do free projects or free work.”
- **PostHog:** “If the candidate has an existing day rate, we pay that. If they don’t, we use this formula: (Your annual basic salary + 30%) / 220 days.”
- **Automattic:** “We pay $25/hour for all trial projects. This is irrespective of location (in or outside the U.S.) or role.”

### How do you evaluate a candidate’s performance?

The process is pretty similar across most companies—it’s a group discussion, generally with one decider.

At **Linear**,they make sure everyone submits their feedback before seeing what others think:

> “After the work trial, each member of the project team submits feedback separately—and without reviewing comments from other evaluators—before debriefing together live.
>
> In evaluations, anything other than a strong yes is a no. All debriefs begin with a blind thumbs-up or -down vote and proceed with an open discussion on feedback anchored in specific examples and anecdotes. The hiring manager makes a final decision on whether to extend an offer to the candidate, though we strongly prefer unanimous decisions.
>
> The recruiter documents highlights and key takeaways to later share back with the candidate, offering detailed transparency regardless of outcome, as closing the feedback loop can provide significant value to the candidate.
>
> When we decide not to move forward with a candidate, we stick to our transparent approach and let them know why, despite the hard situation.” —[Karri Saarinen](https://karrisaarinen.com/)

At **Automattic**, the evaluation is asynchronous and highly structured:

> “The evaluation is well-structured. We have scorecards that assess several areas, from the core skills needed for the role to more nuanced areas such as communication (how well someone communicates in a distributed environment) and how well they take on constructive feedback throughout the duration of the project.” —[Matt Mullenweg](https://www.linkedin.com/in/mattm/)

At **PostHog**,they try to make a decision quickly, and put a lot of emphasis on culture fit:

> “We aim to make a decision within 48 hours. Decision makers are the team lead/hiring manager plus me and my co-founder, Tim, but we collect feedback at each stage from everyone, including from people who joined the coffee chat or collaborated on the SuperDay task. Both of us as co-founders are very heavily involved in this and put a ton of thought into each candidate.
>
> We score people out of 4 (4 = strong yes; 3 = soft yes) and share feedback and mild concerns.
>
> Culture fit is a *huge* deal for us.
>
> A rule of thumb for us is that a majority of ‘soft yeses’ is actually a no (unless there’s a passionate advocate), because hiring the wrong person is more expensive than passing on someone who *might* have been good.”

At **Gumroad**, Sahil always makes the final call:

> “Everyone gets to participate, but I get to decide. Generally it’s a ‘hell yes’ or ‘no’ kind of decision, though. If there’s any doubt, there’s no doubt. Unfortunately, it’s hard to compromise with remote work.
>
> Roughly 20% to 30% pass, FWIW, so I think the framing is important, but ultimately all jobs are at-will, so it’s really a marketing/narrative thing.” —[Sahil Lavingia](https://www.linkedin.com/in/sahillavingia/)

At **37signals**, the evaluation happens during the call with the candidate, when they present their project and have a discussion about the work:

> “We have a call. It’s usually me and one other designer, and the whole point of the call is to show us what you did. Tell us what you did and why you did what you did. Then we’ll sort of poke holes. Even if we like the work, we’ll poke some holes. ‘What about this and what about that? What would happen if this and what would happen if that? Did you think about this, and what if this happened or that happened?’
>
> We want to see if they’re able to think. We want to have them explain why they made the decisions they made, and want to see if they’re able to adapt on the fly. We’ve had some people who deliver really good design and then it’s like deer-in-the-headlights when you ask them a question; they don’t know what to do. That will not fly here. Everyone here has to be able to adjust quickly and make moves and figure out how to riff. What we’re trying to find is, we want to get people on a riffing flow. Like, oh, we can talk with this person. This would be fun. It’d be fun to work with this person. Oh, that’s a clever idea. That’s a good idea. Or they take an idea we have and they go, well, how about this? And you’re like, okay, this is good. This is what we’re looking for.
>
> One thing I’ll typically ask at the end is, if you had an extra three days, what would you do differently? Or how would you make this better if you had three more days? Can you describe something that maybe you wanted to get to that you couldn’t or an idea that you had that you didn’t really have before, but now you have after talking? Again, I want to see what people think about. This is really about how you think and approach the work. How do you present the work? How do you riff with the work? How do you flow with the work? How do you take criticism and critique and feedback and all the things that really matter that really go into design work?
>
> **What’s very clear after this process in interviewing five people, there’s usually one person or two who really stand out. Some surprise us on the upside, some surprise us on the downside, but there’s always two—one or two. And in some cases we’ll hire both, but typically we’ll just hire one.**
>
> That’s why I think it’s so important to look at real work. Everything else is an abstraction. Your history is an abstraction. I have no idea if you did it or not, how much of it you did, what percentage of it you did, how many times it was redone by someone else. Don’t show me a picture of an old website. I mean you can, that’s part of your history, but I’m not going to judge you on that work pretty much at all. I’m only going to judge you on this project, for the most part, because this is what an actual work assignment would look like here. And that’s it.” —[Jason Fried](https://www.lennyspodcast.com/jason-fried-challenges-your-thinking-on-fundraising-goals-growth-and-more/)

### How do you convince people to invest this much time in an interview?

It turns out this isn’t very hard, as [Cristina Cordova](https://www.linkedin.com/in/cristinajcordova/) (COO of Linear) shared:

> “**Many people generally don’t need much convincing. That is one of the myths that people think is a much bigger issue than it is. Many recruiter candidates I talked to completely dismissed the idea because they couldn’t believe people would do this.**
>
> Many thoughtful applicants see this as a positive, as they can evaluate the team and company better. Anyone who has worked in startups knows that in some startups the internal reality can be much more of a shitshow than you would imagine.”
>
> I would say our process generally selects for people who are very interested in Linear (you likely wouldn’t do a work trial if you were interviewing at 10 other companies), which is also why we have a strong rate of offer acceptance after a work trial ends. That being said, we do convey that it’s just as much of an opportunity for candidates to try Linear out as it is for us to try them out. Without a work trial, they’d make a decision like where to spend the next several years of their life with just a handful of interviews. Again, I think it selects for people who are thoughtful about their careers, which is often aligned with who we want to be working with anyway.”

Also, you’re paying them:

> “**It has been** ***very*** **easy to get people to do this. First, paying them makes it feel very reasonable.**
>
> Similarly to how this gives us a much better sense of what it’s like doing actual work with someone, it enables the candidate to get a better flavor of what it’s like working with us.
>
> If a candidate is choosing between multiple offers, offering a ‘Well, try out PostHog this way anyway’ means they can de-risk picking us, *and* it means since we’ll be working with them during the trial that we’ll build a better relationship with more trust.
>
> If people don’t want to somehow figure out how to fit a trial in, then they likely aren’t motivated, have too much ego, or aren’t scrappy enough to be a great culture fit for us—of course, if we’ve made an effort to understand how to fit it around their schedule.” —[James Hawkins](https://www.linkedin.com/in/j-hawkins/), PostHog

> “**We pay $200/hour and are location-agnostic and don’t have meetings and people can set their own hours and choose what percentage of that $200/hour becomes equity.**” —[Sahil Lavingia](https://www.linkedin.com/in/sahillavingia/), Gumroad

It’s important to set expectations early, and make the benefits to *them* clear:

> “To manage expectations, we published posts about our process and shared that early in the process. **On top of that, during the interviews, of course, candidates interview you (the company), and we showed we were a great place to work at.** And finally, we were as available as they were, which I think helped. Take-home exercises meant that candidates might have to have spent a couple of hours at night going over things. We aimed to be available at those times as well (late our nights, weekends) to provide answers, unblock them. This showed our commitment to this as well.”
>
> —[Matias Woloski](https://www.linkedin.com/in/matiaswoloski/?originalSubdomain=ar), Auth0

[Matt](https://www.linkedin.com/in/mattm/) at **Automattic** shared an in-depth answer on how to make this process something candidates are excited about, touching on many of the points others made above:

> “Two common reasons convince candidates to make the time commitment of doing a trial with us:
>
> 1. **It’s a chance to get to know the company and their work better than a typical interview.** Since many candidates have yet to work in a distributed company and in a more asynchronous environment, the trial process often fulfills the promise of getting a glimpse into what their day-to-day might be like. Coupled with access to the same tools and communication methods they would use if they were hired, it’s a great way to get a feel for the company.
> 2. **The format allows many to showcase their skills better than a typical interview**—some people are better at doing the work than interviewing. We give them a chance to shine without being put on a spot and without the pressure of a sub-hour time limit while explaining every step of the thought process to an interviewer.
>
> We do our best to enable people for the process. Most of this is already in line with our way of working (distributed work) but includes:
>
> 1. **Tailored trial projects.** While projects are tailored for the roles and the person, we also ensure that we’re not giving folks a live project. The intention isn’t to generate work that we’ll use in our products but to evaluate their abilities and ways of working. Sometimes this means a ‘synthetic’ project, which is very close to the work itself; in other cases, we set projects that simulate a challenge we’ve tackled in the past.
> 2. **Flexibility.** We don’t expect them to take time off, and we understand folks could already be in a full- or part-time role, have a family, and generally have a life to live outside work! For this reason, when and how much time they are committing and when they can start is a conversation instead of a strict mandate. In some cases, we’ve had folks have life events happen where we’ve paused their trial and picked it back up after things quieted down.
> 3. **Continuous feedback.** Trial projects aren’t the same as a take-home exercise. We continuously deliver feedback to ensure people can adapt their approach, learn, and show their best work.
> 4. **Set clear expectations.** We set folks up for success right from the start. From the first interview, we’ll have explained the process, including the trial project, what that’ll entail, and the time commitments required.
> 5. **Have dedicated Trial Leads.** Ensuring there is a dedicated point of contact is super-important. This is sometimes someone from the team the person will be working with, but in some cases, such as Engineering and Happiness, there’s a more centralized hiring experience. They’ll still be interacting with someone who is specialized in the work they’ll be doing and knows the teams well.”
>
> —[Matt Mullenweg](https://www.linkedin.com/in/mattm/)

### Bonus lessons and tips on setting up your work trial

To leave you with even more concrete advice for setting up your work trial, I asked everyone to share their best tips and lessons:

**[Matt](https://ma.tt/) / Automattic:**

> “For companies that are thinking about implementing a trial stage to their hiring process, think about why you want to do it. Does it fit into your company culture and your way of working? What will you gain or potentially lose by adding a trial stage? If you are convinced that you want to begin, think hard about what you want to evaluate and rework your interview and assessment practices to take this into account. Some other things to consider:
>
> - **Set clear expectations with your teams.** The trial stage isn’t a solo effort and usually requires several people to be involved. This is a time commitment and will lengthen your hiring process. Ensure your hiring teams are behind the decision and know what is expected of them.
> - **Communication is key!** This process works for us, as we believe that communication is oxygen ([see the Automattic creed](https://automattic.com/creed/)), and that forms a strong baseline for how we communicate expectations with folks interested in working with us, how we communicate with candidates, and, ultimately, the experience folks have.
> - **Accept that your time to hire will be longer.** The average time from first contact to offer is over 70 days at Automattic. You may need to reevaluate your benchmarks for hiring metrics, and that’s OK.
> - **Keep it relevant.** Don’t add a trial stage or paid project for the sake of doing it. Reengineer your assessment criteria to consider the additional skills being assessed.
> - **Have dedicated Trial Leads or Buddies.** The process can be intense; having a dedicated Lead or Buddy there to support you, provide continuous feedback, and generally introduce someone to the ways of working at your company is a must-have. This links back to expectations, as it takes time from the Trial Leads’ day-to-day work.”

**[Sahil](https://www.linkedin.com/in/sahillavingia/) / Gumroad:**

> 1. “Use [Flexile](https://flexile.com/)! Ha. But seriously, I think it doesn’t have to be binary. I think the important thing is that candidates can really learn more about what the work actually entails.
> 2. The trial is about their work. But it’s also about them seeing all the internals of the company, culture, finances, my attitude, etc. Some don’t like it!”

**[Matias](https://www.linkedin.com/in/matiaswoloski/?originalSubdomain=ar) / Auth0:**

> 1. “Our criteria was that the exercise stage should only be reached if up to that point we thought we’d hire the person. Don’t use the exercise as a way to decide, if you are not sure about a person; instead only use it to discover potential shortcomings you might have missed before.
> 2. Invest in having exercises for each position and making it clear what is expected from each role. It was a challenge for us to keep hiring managers trained, as we grew the team fast.
> 3. Keep interactions written down, and avoid Zoom (and if you must do one, record it). In our case, this pushed for remote and async collaboration (our default), but it also allowed us to track all work so it was easy for anyone inside the company to review the exercise and provide their feedback, even if they weren’t there from the beginning.
> 4. Know that this is a two-pronged filter: you get to see committed people do it, but many people might not even apply if they know that level of time commitment is required.”

**[James](https://www.linkedin.com/in/j-hawkins/) / PostHog:**

> 1. “If you do a week or two trial, people may obviously not be strong enough after the first few days. Set expectations that you may cut the trial short so you don’t waste each other’s time in this case. It’s better for both sides.
> 2. Set clear expectations over how much you expect from people. Don’t have some of your interviewers say, ‘Work a normal 8-hour day’ and others say, ‘This doesn’t reflect the day-to-day balance, but for the purpose of a one-off trial, we recommend you push as hard as you can.’ Figure out which stance you are taking.
> 3. Some people can’t take payment. Offer a charity donation instead.
> 4. Make the task open-ended. If you make the task too precise, then candidates can’t stretch themselves, and you’ll wind up, for example, hiring engineers who have the neatest code as opposed to those who can ship products people want. For example, we’ll often get candidates to build a new product from scratch instead of, say, a bunch of coding challenges with specific answers. This helps us assess product skill *and* engineering skill.
> 5. Focus on themes throughout. Ours are things like scrappiness, low ego, ambition, and optimism. Prescriptive interview questions yield shallow answers. Have the scrappiest person in the company assessing scrappiness, and so on. If you have any doubts, write these up ahead of the next person so they can dig into them. If a candidate isn’t given a perfect score, we force our team to give a reason why not—to see if multiple people all have the same (what seemed, at first, minor) concern.
> 6. 80% work and 20% meeting people is a good balance for a single day of work in the SuperDay. Don’t cram all the interviews into the same day, as then the candidate can’t get anything done.
> 7. Be super-transparent about the whole process from the start. We do this through our public handbook and by summarizing the process on all job adverts.
> 8. Create a dedicated Slack group for the trial a few days beforehand and invite everyone relevant to it. It’s a nice chance to say hello and do introductions beforehand.”

**[Jason](https://www.lennyspodcast.com/jason-fried-challenges-your-thinking-on-fundraising-goals-growth-and-more/) / 37signals:**

> “The first thing is attracting the right people. The work trial can fizzle out if you don’t have the right five finalists to begin with. We are very careful about how we write job ads, and very specific. We talk about: what would you have done here last week if you had this job? Not like, bullet: how many years’ experience do you have, or what tools do you use? We don’t care about your tools, don’t really care about years of experience. I want to know, here’s what you would’ve done last week. Does this resonate with you? Is this something you feel like you could do? We’re very, very clear about that.”

![Image from Adding a work trial to your interview process](https://substack-post-media.s3.amazonaws.com/public/images/0fcc9958-9b3a-4fb0-a90f-c76e1ad9f9a4_2400x1254.png)

I hope this gives you enough advice to build your own work trial experience. If you end up implementing one, or tweaking your interview process as a result, I’d love to know! Leave a comment below.

[Leave a comment](https://www.lennysnewsletter.com/p/adding-a-work-trial-to-your-interview/comments)

### 📚 Further study

1. [Why and how we do work trials at Linear](https://linear.app/blog/why-and-how-we-do-work-trials-at-linear)
2. [The CEO of Automattic on Holding “Auditions” to Build a Strong Team](https://hbr.org/2014/04/the-ceo-of-automattic-on-holding-auditions-to-build-a-strong-team)
3. [What to Expect During a Trial—Automattic](https://automattic.com/what-to-expect-during-a-trial/https://automattic.com/what-to-expect-during-a-trial/)
4. [How We Hire—Automattic](https://automattic.com/how-we-hire/)
5. [How We Hire Engineers – Volume 2—Auth0](https://auth0.com/blog/how-we-hire-engineers-volume-2/)
6. [Everything we’ve learned about hiring for startups (so far)—PostHog](https://newsletter.posthog.com/p/everything-weve-learned-about-hiring)

*Have a fulfilling and productive week 🙏*

## 👀 Hiring? Or looking for a new job?

I’m piloting a white-glove recruiting service for product roles, working with a few select companies at a time. If you’re hiring for senior product roles, apply below.

[Apply to join](https://www.lennysjobs.com/talent/)

If you’re exploring new opportunities yourself, use the same button above to sign up. We’ll send over personalized opportunities from hand-selected companies if we think there’s a fit. Nobody gets your info until you allow them to, and you can leave anytime.

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
