---
title: "How Coda builds product"
subtitle: "Lane Shackleton, CPO at Coda, shares his team’s templates, day-to-day processes, and hard-earned lessons"
date: "2023-01-31"
type: "newsletter"
tags: ["leadership", "design", "organization", "strategy", "analytics", "newsletter"]
word_count: 4935
---

I’m often asked how to best set up a product development process, and since I’ve only had first-hand experience with a few approaches, I’ve embarked on an ongoing series to learn how the best product teams build product. Part one was on [Figma](https://www.lennysnewsletter.com/p/how-figma-builds-product) (which quickly became my fourth-most-read post of all time), and today I’m excited to bring you a deep dive into [Coda](https://coda.io/)’s unique approach to product.

Having spoken with many PMs from Coda over the years, plus having [Coda’s CEO, Shishir Mehrotra, on my podcast](https://www.lennysnewsletter.com/p/the-rituals-of-great-teams-shishir#details), I’ve always seen Coda as an incredibly thoughtful, deliberate, first-principled product culture. After digging into their approach, this proved to be absolutely true. I’ve never seen a product development process this well-thought-out and executed.

A big thank-you to [Lane Shackleton](https://www.linkedin.com/in/laneshackleton/), the CPO at Coda, for sitting down with me and answering all of my (very detailed) questions—and also for sharing a dozen plug-and-play templates 🤯

Enjoy!

# How Coda builds product

![Image from How Coda builds product](https://substack-post-media.s3.amazonaws.com/public/images/c5669255-2846-40ac-8703-7a61be9e9205_4001x4021.jpeg)

### **1. How far out do you plan in detail, and how has that evolved over the years?**

The planning motion you need to build a nascent product with few customers is quite different from that of a more developed product with lots of established customers. As we progressed along that journey over the past seven years, the way we plan evolved a lot.

As a general rule, though, our view is that planning should take up no more than 10% of the execution time period. So if you’re planning for a quarter, your planning period should be slightly less than nine days.

In the early days, we started with two-week sprints. We’d get small teams together, and they’d run a daily standup to figure out what to accomplish that day. The two-week sprints felt fast and like the team was on the hook to deliver a lot of product and learning in a short span. Then, every three sprints (or six weeks), we’d pop our heads up and do a check-in. The six-week check-ins provided a good moment to reflect on what we learned, improve our team’s rituals, and quickly plan for the next two weeks. The team was composed of two or three PMs and 10 to 15 engineers during this period.

Later, the company grew to roughly 30 engineers and four or five PMs. By this time, we had beta customers that the team was working closely with, and the shape of the product was more known. The two-week sprints started to feel a little frantic, and we felt the need to create space to strategize on the longer arc of what we wanted to accomplish. At that time, we moved to six-week sprints, along with H1 and H2 planning. During H1 (first half of the year) and H2 (second half of the year) planning, we made the space we needed to do more long-term strategy work for the company. At the same time, six-week sprints felt like the right window for running fast against specific commitments where we had confidence or something specific we wanted to learn.

![Coda Planning.png](https://substack-post-media.s3.amazonaws.com/public/images/abe75d02-1842-4472-8c14-dc00937113f4_5133x2766.png)

For the past two years or so, with a PM team of 12 to 15, we do what I call “Quarterly Plus” planning. We couple that with our annual Big Bets. We start with Big Bets, and those ladder into Quarterly Plus planning (more on this below).

To arrive at Big Bets, we use a strategy process that is inspired by one of my favorite strategy books, called *Good Strategy Bad Strategy*. One of the core ideas behind the book is that good strategy is an answer to a specific challenge. So we start our annual planning by reviewing our best insights from our Customers team and Data and Insights team with the goal of determining the most important challenges to address. As a group, we enumerate and rank the key challenges facing the business. Then smaller groups of leaders develop strategies against those key challenges, and the group reviews them together. We run a few [$100 voting exercises](https://coda.io/@lshackleton/100-dollar-voting-exercise) to get a pulse on where we may have some alignment versus not, then we debate further and ultimately decide. By the end of the process, we have a small set of Big Bets.

Our Big Bets serve as the foundation for team-level quarterly planning. We ask teams to plan concrete commitments for what they will get done, then provide a look ahead to what’s coming the next quarter—hence, Quarterly Plus. The observation is that it’s very hard to plan six months out in a scenario where you’re learning week to week. But you often have a sense of where you’re headed, what the probable decision points are, and what risks lie ahead. So while it’s not a committed plan, it gives the team and the broader company a look at the longer arc and helps them contextualize your current quarter’s OKRs.

![Screen Shot 2023-01-19 at 11.44.30 AM.png](https://substack-post-media.s3.amazonaws.com/public/images/68fe2ab2-192a-4acb-8574-ce62316dc956_1954x1096.png)

I love the creativity our teams bring to this exercise. We commonly see fun patterns of [reactions](https://help.coda.io/en/articles/4919307-adding-reactions-to-your-docs-and-tables) where the teams will intersperse things like heart, question, clap, question reactions in the text of their writeup to get the reader engaged and provide lightweight feedback. Oh, and one team is notorious for including catchy songs about their goals. Last year, this team rewrote the lyrics of [“Hooked on a Feeling”](https://www.youtube.com/watch?v=NrI-UBIB8Jk) to turn their OKR presentation into a memorable music video. Sometimes we’ll even replay it during meetings just for fun. :)

The artifact that gets produced is a two-pager, in [two-way writeup](https://coda.io/@lshackleton/two-way-writeups-coda-s-secret-to-shipping-fast) style, with two classic Coda rituals: a pulse for gathering sentiment and Dory for asking questions (named after the fish in *[Finding Nemo](https://en.wikipedia.org/wiki/Finding_Nemo)* who asks all the questions). You can see how it looks below, and [here’s a real example from a product discussion](https://coda.io/@lshackleton/two-way-writeups-coda-s-secret-to-shipping-fast/example-inline-toolbar-3). Here’s also [a template](https://coda.io/@codatemplates/dory-and-pulse), or just type */dory and pulse* in any Coda doc.

![Dory.png](https://substack-post-media.s3.amazonaws.com/public/images/2af9e9ec-62ce-4510-bf3a-987a21a68db3_2154x1200.png)

Stepping back, the main drivers of increasing the cycle times, and thus forcing us to plan further out, were:

1. **Customers**—As we spent more time with more customers, we developed a better understanding and more certainty that we were solving the right customer problems. In turn, this understanding enabled us to think further ahead.
2. **Product**—As the product matured and PDE challenges became better-known to our teams.
3. **Strategy cadence**—As the company grew, the feeling of when and how to have deeper strategy conversations changed. When we were small and in the same office, we’d have deep strategy conversations over lunch. As we started to have larger groups across offices, teams needed to be grounded in longer-term plans and naturally accepted less ambiguity.
4. **Decentralization**—As teams got bigger, it made less sense to plan in a centralized way. Initially, the Product, Design, and Engineering leads centralized prioritization stack ranking. As it became more bottom-up and decentralized, we needed to plan further out. Overall, I’m a big believer in decentralized leadership and giving teams autonomy to solve problems.
5. **Dependencies**—An increasing number of dependencies across teams, though we always try to minimize the need for these.

### **2. Do you use OKRs (e.g. objectives, key results, 70% goals, etc.) in some form?**

Yes, though we’re always tweaking and evolving [our approach](https://coda.io/@lshackleton/quarterly-plus-okrs) to them.

Importantly, we make it clear that OKRs are not a strategy. Strategy planning happens independent of OKR planning. I think it’s very easy to fall into the trap where OKRs seem like a reasonable replacement for a strategy doc or presentation that describes the broader challenges you’re addressing with a clear why and how.

When it comes to OKRs, we throw out the piece about 70% of hitting your goal being considered success. I believe this is a luxury you have when there is a money-printing machine in your basement (like Google, where I worked for nine years). Instead, we goal around getting to 100% of our commitments. Obviously we don’t always hit 100% of our OKRs in practice, but the expectation is that you’ve set the OKR because you believe you can deliver on it. Of course, we let people defer or carry over an OKR to the next quarter, or explain why we’ve learned something new that caused us to rewrite or remove it.

On the metrics side of OKRs, we try to ensure that teams are distinguishing between “input” and “output” metrics. I find these often get confused. For example, someone might say, “It’s so hard to move activation in OKRs.” But that’s because it’s a lagging output metric, influenced by lots of different inputs, which rarely changes in a single quarter. So we want teams to goal themselves around metrics they have control over. If the team has control over the metric, the question becomes more tractable: Do we believe the input metric will move the output metric?

At the end of the planning process, teams present an [OKR writeup](https://coda.io/@lshackleton/quarterly-plus-okrs/template-team-okrs-writeup-13) that describes where they are headed and why it matters to our Big Bets, and include a brief look ahead at the next quarter. Then we embed their OKRs as a table within that writeup. I find this makes it much easier to understand the why behind the detailed rows of OKRs you’re seeing. We also put a Dory at the bottom of these writeups so that anyone can ask any question. For years, we’d review these in a central OKR review meeting, but these days we have people ask and answer questions asynchronously.

Here’s a sanitized example of what that feels like for one of our teams, the “Ecosystem Team.”

![Image from How Coda builds product](https://substack-post-media.s3.amazonaws.com/public/images/8ab9e4c2-3504-4db7-b0da-85c92590273b_3798x2970.png)

### **3. How do your product/design review meetings work?**

We strongly believe in autonomy for each team, and so our approach to product and design review meetings trickles down from that. There are two main review forums where product and design work is reviewed: Catalyst and Design Huddle.

The forum we call [Catalyst](https://coda.io/@david/catalyst-meeting) starts from a few hard-earned lessons from years of running review forums. Most review forums have common problems like not having the right people, or not starting with the right context, or being bulldozed by a senior leader. So we designed Catalyst to solve for some of the problems we’ve observed in past companies.

It’s an hour block on the calendar, three times per week at 1 p.m. PT. The foundation is having three hours per week where you can get anyone in the company to review and provide feedback on any type of plans, including product. Anyone can sign up for a Catalyst slot, but we’ve evolved some very clear roles:

- **Driver:** runs the meeting and facilitates the decision-making process; often the PM
- **Makers:** the “doers” who will be executing on the results of the meeting
- **Braintrust:** pulled in to guide and provide context for the Makers; often other leaders
- **Interested:** people who want to follow along on the topic

Below is our Catalyst schedule, with the option to join as “Interested.” If you’re a Driver, Maker, or Braintrust, it gets auto-added to your calendar by the doc.

![Coda catalyst add buttons.png](https://substack-post-media.s3.amazonaws.com/public/images/f7a4dc1f-856d-48d0-b844-f3ab6fea3e7a_4833x1602.png)

One little detail I love is the automated reminder that the doc sends the day before reviews. It’s a Slack message that tells you the topic and the links you need to review and reminds you of the expectations of your role in the meeting. The descriptions include some of my favorite reminders for people in review forums, like “Add lift, not drag,” with a clear description of what that means.

![Catalyst slack.png](https://substack-post-media.s3.amazonaws.com/public/images/b07f1aeb-6a4f-4cc5-9986-37bbfa79fd99_3057x3045.png)

The other review meeting is called Design Huddle. It’s a once-per-week forum where designers can bring work at any stage for feedback. A Slack notification goes out from the doc the day before, reminding people to sign up. Designers specify the topics, the project phase, the time they need, and the type of feedback they are looking for. We usually get to two to four topics from various designers per meeting, in a round-robin style. We also encourage designers to invite their PM partners so that they get to hear the feedback directly too.

In the meeting, the group usually jumps into Figma and follows the designer around the file, adding comments, riffing, and reflecting on the work.

In addition, as we’ve grown, individual teams will have their own Design Huddles or Design Jams. For example, our Core Product team is our largest Design and Product team, so they have a Design Huddle specific to their area. Designers choose which audiences are most appropriate given the topic.

![Design huddle.png](https://substack-post-media.s3.amazonaws.com/public/images/bb90cdc7-43d2-43af-99a5-6e3834274402_3180x2736.png)

In addition to the meetings listed above, a lot of our product and design work is done asynchronously through docs. It gives teams a way to clearly document their ideas and get fast feedback. One core example is our product brief. We list out a few high-level stages that most projects go through (below).

1. **Problem**—articulating the problem and how it’s experienced by customers.
2. **Press release**—articulating how we’ll describe the value to customers and aligning on this early.
3. **Approach**—describing the high-level approach we may take and gathering early feedback.
4. **Details**—describing detailed decisions, tradeoffs, and open questions.
5. **Journey**—walking through the customer experience and how our decisions feel in practice.
6. **Retrospective**—reflecting on the effort, what we learned, and what we’ll do next.

Teams may use parts of the brief or the whole thing depending on the size of the effort involved. The asynchronous reviews or meetings tend to focus on one of these stages at a time. So for example, we may have a Catalyst meeting that is focused on aligning on the overall approach.

Most efforts start with a problem brief. Here’s the intro to the Product Brief template that sets context:

![Product brief - about.png](https://substack-post-media.s3.amazonaws.com/public/images/9d57e77d-8986-4772-83a1-4ccc82e64f0a_2894x1766.png)

Here’s our problem page of the brief as an example of how each page is structured:

![Image from How Coda builds product](https://substack-post-media.s3.amazonaws.com/public/images/63b8881f-fa68-440e-b7a8-151eb52da051_3573x3521.png)

We sometimes also write a [press release](https://coda.io/@lshackleton/gathering-feedback-on-product-directions-using-press-release-opt). I find that teams can quickly explore broad directions simply by writing two or three versions of a press release. It forces us all to do two things. First, we can read the problem statement and the press release and make sure these things align. Second, as a group, we can get clear on the value we think we’re delivering to customers early in the process.

![Product brief - Press release.png](https://substack-post-media.s3.amazonaws.com/public/images/bd13a569-ff4c-4b49-b533-e0d66c83827c_2894x1892.png)

And finally, if you want to look across all upcoming launches, we have a centralized [launch calendar](https://coda.io/@codatemplates/launch-calendar-with-slack-summary). One thing we noticed early in Coda’s history is that we should have a central source of truth for anything that is going out to customers. So it includes a mix of new features, improvements, partner launches, and even email campaigns and blog posts. It’s a highly customized version of tools we’ve seen in other companies, like Google’s LaunchCal. The doc has lots of automations that send reminders to individuals so that they keep the details of their launches up to date. It’s one doc that is always open in my browser. :)

Below is a look at our real launch calendar with the actual launches blurred out. We make lots of different views of this table, customized to the needs of different teams. My favorite email every week is a summary that gets sent from this doc of past and upcoming launches.

![Coda launch cal.png](https://substack-post-media.s3.amazonaws.com/public/images/04e71137-ab5a-49b7-bb73-56abff99642d_4593x2775.png)

### **4. Who do PMs report to, ultimately? And are product and design part of the same org? Has this changed over the years?**

We have a joint Product and Design team. PMs report to PM leads, and PM and Design leads report to me. I report to [Shishir](https://www.lennysnewsletter.com/p/the-rituals-of-great-teams-shishir#details), the CEO.

The joint team is based on an observation from Google and YouTube.

There, PMs were often the de facto decision makers on most decisions. Designers were often secondary in the team and decision-making process. I was always frustrated by this dynamic and worked to change it. There were many strong designers who were capable decision makers, and personally I’ve always had a deep interest in the interplay between brand, design, and product. (Early in my career I built a wine business to channel this interest.)

My reflection was that the orientation of PMs as decision makers wasn’t due to bad intent on anyone’s part. Instead, PMs were just the people with the most context. They spoke with customers, partners, executives, designers, engineers, and more, so they built up a body of context that no one else had.

So that’s part of the principle in deciding to build a joint product and design team. The idea is to enable better product decisions by having PMs and designers share the same context and information. We’re building an incredibly interconnected product, so it’s critical that our internal approach is one where everyone on our team understands how the parts fit together.

We’re a few years into the experiment, and I think it works pretty well. The roles of designers and PMs are fluid and focused around high-quality work and enabling their teammates, instead of arbitrary definitions of what makes a PM or a designer. Sometimes, designers write specs. Sometimes, PMs draw in Figma. Our aim is to keep teams focused and moving quickly, with a default-open mentality so that their peers can see and provide engaged feedback on each other’s work in real time.

In a related aside, and as a Rick Rubin fan, this made me laugh recently :)

### **5. How do you balance resources between new product work vs. maintenance/bugs?**

We let our teams decide based on their unique situations and cultures. The only real rule of thumb is how we handle P0 bugs, which get addressed immediately. The most important cultural element is that Eng teams own their part of the codebase and feel a sense of pride about keeping it in good shape.

Beyond that, teams have developed various creative ways of handling maintenance and bugs. Some examples include: regular quality weeks where teams focus only on burning down their list of P2 and P3 bugs, reserving a small number of engineers to always be burning down debt and bugs, or a team intentionally placing themselves in “bug jail,” where once they hit a threshold, they can only work on bugs until the number dips below a certain threshold.

From my side, I spend time understanding a team’s portfolio of efforts and helping them think through the tradeoffs of how to invest in normal product improvements versus ongoing maintenance or quality work.

### **6. Broadly, do you structure your teams around products, user types, user journey, outcomes, or something else? Has this changed over the years?**

Teams are structured around outcomes. For example, we have a team focused on driving revenue that is a mix of PDE and Customer roles. Within broader teams, we have investment areas (IAs) that can be focused on specific customer journeys like onboarding, or specific long-term outcomes like creating a thriving ecosystem via [Packs](https://coda.io/product/packs).

We tend to do some iteration on our structure about once per year, but the core elements have remained consistent for several years now.

Regardless of broader team structures, we’ve learned that small teams with autonomy tend to work best. By a small team, I mean roughly one PM, one designer, and two to four engineers. Depending on the effort, they may also have help from our Data and Insights team.

### **7. What’s your primary tool for task management, and bug tracking?**

Coda for basically everything.

One of the observations behind Coda the product plays out in the way we work. The observation is that despite teams buying lots of packaged software, people usually end up back in the most flexible surface: docs and sheets. Unfortunately, that creates silos and out-of-date copies of all types of important information.

One of my favorite things about using Coda for everything, and a reason I’d never want to go back to that world, is that a team can have it all in one place. So the PM is no longer sending lots of different links to docs for specs, bug-tracking links, dashboard links, etc. Our teams usually start by creating a [team hub](https://coda.io/@codatemplates/product-team-hub). Then something cool happens—it organically grows with the needs of the team.

So they may start with a brief writeup or some meeting notes. And then an engineer goes in and creates a page with a tasks table. And the group starts working off that. Then the designer may embed a Figma prototype into the original spec. And a researcher might write a research plan in a new page. Then an embed of a dashboard may get added as soon as the project has customers. And finally, the team will continue to do things like write meeting notes, create more specs, and do retrospectives in the same doc.

![Image from How Coda builds product](https://substack-post-media.s3.amazonaws.com/public/images/d294f0db-c627-495b-9348-f7f9b6281d0a_1920x1080.jpeg)

There are two awesome things about this as a PM. First, there is never confusion about where to go if you’re on the team; it’s always in your team’s hub. Second, if you want to get your team’s eyes on something, you can add a page in that team hub. Then the team is naturally going to encounter it while they do their work.

One unexpected outcome of using team hubs for years is that it also creates a nice historical record as new people join the company. So a new person joins and says, “Why did we make that decision?” and in a world of lots of tools, you have to go try to reconstruct history across a bunch of tools. And in our case, you just go find the team hub from that effort, and often it will have good meeting notes or a [decision log](https://coda.io/@lshackleton/decision-log).

In a meeting, I may ask a team about a metric or upcoming plans or OKRs, and instead of searching frantically for the link (like they would in a world of lots of tools), the PM will casually shift one page over in the same doc, and we’ll get right to the discussion.

It’s interesting to see the contrast between this decentralized style and some other companies. The team can evolve their workspace as the project or team evolves, versus having to fit into the constructs of several different systems. When you live in the world where your notes, goals, and specs are disconnected from your task management system, you may have a problem that you don’t know exists.

### **8. How many PMs do you have at this point?**

About 15.

### **9. Is there a philosophy to how your product team builds product that’s unique or core to how you think about product development?**

Three things come to mind.

First, my view is that it’s the job of our PMs and designers to turn ambiguity into clarity. Shishir, our CEO, who I’ve worked with for a long time, instilled this in me. In building product, ambiguity is everywhere. It’s in the little things like leaving a meeting without clear next steps. It’s in big things like understanding whether a thing we’re building is actually solving a customer problem. Great PMs and designers, and great teams, relentlessly take ambiguous things, prioritize them, and make them clear—first clear to themselves, then clear to their teams, and ultimately clearer to customers.

The second is that Coda is a very “first principles” culture. We have a value called “Right vs. Familiar,” where the basic idea is that the world tends toward the familiar. Our job is to understand whether the familiar thing makes sense, or whether to tear something down and build up our view of what’s “right” from first principles. That sounds pretty philosophical, but in practice it’s a very real tradeoff we experience every day. We’ve taken a first-principles approach in everything from how company equity is structured, to the building blocks in our product, to tiny interaction details in the product.

Lastly, practice and preparation. As someone who grew up playing team sports, the value of constant practice and preparation seems obvious. One of the things I’m constantly re-enforcing with our product team, and especially our managers, is the value of excellent preparation. It’s always surprising to me when PMs think they can become great without lots of reps. People are familiar with practicing a presentation, but preparation extends to nearly everything we do. Have a hard conversation with an engineering manager coming up? Practice it 20 times with a peer or your manager. Want to become great at influencing your cross-functional peers? Practice your pitch 10 times until it’s convincing. Or you might write and do four or five iterations of edits to your written communications. The point is, if you want to be great at your craft of building product, your preparation should look more like a pro athlete’s than like someone who’s winging it. Overall, I’ve found that people who take pride in their work often lean heavily into this and prepare 10 times better than the rest.

### **10. What are some fun or unique traditions or rituals on your product team?**

We’re a company that loves improving our rituals. We talk a lot about [Bing Gordon](https://www.kleinerperkins.com/people/bing-gordon/)’s definition of a company’s golden rituals. The three criteria he has for rituals are: they are named, every employee knows them by their first Friday at the company, and they are templated. For us, as a company, that’s probably Dory and Pulse. We’ve been collecting and publishing lots of other team rituals in the past year and are [writing a book on the topic](https://coda.io/@shishir/join-the-rituals-of-great-teams-braintrust).

Some rituals specific to our product teams are things like:

- [Fun remote kickoffs](https://coda.io/@helena/remote-team-kickoff-template), since we’re a hybrid-work culture.
- [Decision logs](https://coda.io/@lshackleton/decision-log) to capture key questions and decisions as we build.
- A set of specific methodologies around research that we put into [a research kit](https://coda.io/@alissa-doose/coda-for-research-medium-study-kit).
- We also alternate who drives our team meeting every week, so that everyone gets a chance to lead.

And of course, it’s a maker-y bunch, so when we gather in person, we tend to make stuff together. At our last get-together, the team made dozens of their own pizzas at my house. And at work, we have a regular session we call MakerClass where we host internal and external guests who help us improve our craft.

![Image from How Coda builds product](https://substack-post-media.s3.amazonaws.com/public/images/357d18c7-d820-4aca-b8eb-18fbc5a0deeb_1200x723.gif)

Thank you, Lane!

Have a fulfilling and productive week 🙏

*P.S. Who else should I cover in this series? What companies have the best or most unique product development processes, and what questions would you like me to ask them? Leave a comment with your thoughts 👇*

[Leave a comment](https://www.lennysnewsletter.com/p/how-coda-builds-product/comments)

## 📣 Join Lenny’s Talent Collective 📣

If you’re hiring, [join Lenny’s Talent Collective](https://www.lennysjobs.com/talent/welcome) to start getting weekly drops of world-class product and growth people who are passively open to new opportunities. I hand-review every application and accept less than 10% of candidates who apply.

![Image from How Coda builds product](https://substack-post-media.s3.amazonaws.com/public/images/e77cdc85-4a67-491a-9ae6-ee0fee2add2b_1498x1234.png)

If you’re looking for a new gig, apply to join! You’ll get personalized opportunities from hand-selected companies. You can join anonymously, hide yourself from companies, and leave anytime.

[Apply to join](https://www.lennysjobs.com/talent)

### 🔥 Featured job opportunities

1. **DX:** [Content Lead](https://www.lennysjobs.com/jobs/d88460d1-d9e0-4f13-b939-968d22d5a85e) (Park City, UT; Remote)
2. **Surfer:** [Senior Product Manager](https://www.lennysjobs.com/jobs/f6ebf2d0-c425-4690-95de-01b9c6568092) (Remote)
3. **Zendoor:** [Product Designer](https://www.lennysjobs.com/jobs/192a2c6c-e46c-4190-9d81-9a527273c89d)(Remote)

## **🧠 Inspiration for the week ahead**

1. **Watch:** [Hania Rani live at Invalides](https://youtu.be/J5oZ80Daduc)

[Watch on YouTube](https://www.youtube.com/watch?v=J5oZ80Daduc)

2. **Read:** [“Today you ... tomorrow me”](https://www.reddit.com/r/AskReddit/comments/elal2/comment/c18z0z2/?context=3) via [Trung Phan](https://trungphan.substack.com/p/today-youtomorrow-me)
3. **Read**: [12 Assumptions for Extraterrestrial Life](https://kk.org/thetechnium/12-assumptions-for-extraterrestrial-life/) by Kevin Kelly

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already.**

Sincerely,

Lenny 👋
