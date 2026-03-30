---
title: "Introducing DRICE: a modern prioritization framework"
subtitle: "Boost your experiment win rate and help your team drive more impact"
date: "2023-11-07"
type: "newsletter"
tags: ["leadership", "engineering", "design", "product-management", "growth", "pricing"]
word_count: 3063
---

If you boil down a product manager’s job to just one task, it’s making sure everyone on your team knows what to do next—and that it’s the most impactful work they can be doing.

In other words, prioritizing.

If you can get better at prioritizing,you can grow your leverage as a product leader, and increase the impact you and your team drive. And while you can’t double the speed that engineers build at or designers design at, by picking better projects even a little bit better, you can double your team’s impact.

Below, [Darius Contractor](https://www.darius.com) and [Alexey Komissarouk](https://alexeymk.com) share a brand-new framework that will make you significantly better at prioritizing. They also include plug-and-play templates, real-life case studies, and great memes. I wish I had this years ago.

*[Darius Contractor](https://www.darius.com) is the former head of growth at Dropbox, Facebook, Airtable, and Vendr and is currently Chief Growth Officer at [Otter.ai](https://otter.ai/). You can find him on [X](https://twitter.com/dariusmc), [LinkedIn](https://www.linkedin.com/in/dariusmc/), and [Darius.com](https://Darius.com/). [Alexey Komissarouk](https://www.linkedin.com/in/alexeymk/), a former growth engineering lead at MasterClass and Opendoor, is currently writing a book and [advising teams on growth engineering](https://alexeymk.com/growth-eng). You can find him on [X](https://twitter.com/alexeymk), [LinkedIn](https://www.linkedin.com/in/alexeymk/), and [alexeymk.com](https://alexeymk.com/). Alexey will be [speaking about growth engineering at Reforge this Thursday](https://www.linkedin.com/events/7122963652738985985/comments/).*

With limited time and resources, what is the highest-value thing a product manager can do for their team?

**Prioritization. Ruthless, rigorous prioritization.**

The guide below contains everything you need to run a reliable prioritization process. It’s based on a distillation of techniques from the authors’ combined 35-plus years of experience driving growth at Dropbox, Facebook, Airtable, Opendoor, and MasterClass that, in our experience, doubled our impact rate.

The frameworks are primarily intended for growth teams, but the practices apply to any team focused on moving a business metric. This prioritization process should be run every planning cycle.

**Below, we’ll walk you through:**

1. The industry-standard prioritization process **RICE** (Reach, Impact, Confidence, Effort)
2. Then we’ll refine the top ideas using “DRICE” (**Detailed RICE**)
3. Finally, we’ll talk through how to make the most of these two frameworks

Throughout this guide, we’ll assume you’ve already collected tons of potential ideas—through brainstorming, sifting through data, looking at sales/CX calls, your past backlogs, etc. As a rule of thumb, you’ll want to have at least 5x as many ideas as you could reasonably build in the next time period (typically a quarter) before starting to prioritize.

## Part 1: RICE

### Definition

In short, [RICE](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)-ing is the process of T-shirt scoring (i.e. S/M/L) your ideas according to their:

- **Reach:** How many of your customers would experience the new idea
- **Impact:** If the idea pans out, how much it would affect conversion
- **Confidence:** How likely it is to work
- **Effort:** How much time it would take to validate (from the engineering team)

The process is best illustrated by example.

### Example: “Checkout with PayPal” vs. “free-trial promo codes”

Say your team is choosing between two potential ideas:

1. **Checkout with PayPal.** Several potential customers have emailed complaining that they will only buy with PayPal.
2. **Free-trial promo code.** Your podcast marketing manager wants to be able to give away promo codes for an “X-day free trial.”

We can compare the ideas based on their qualities:

**Checkout with PayPal:**

- **Reach**: **all.** Potential customers must go through checkout and are exposed to the option.
- **Impact**: **small.** Most customers are comfortable with credit cards.

- **Confidence: likely**. Competitors offer PayPal; customers have asked for it before.

- **Effort: medium.** Will need to integrate PayPal through the [Braintree API](https://developer.paypal.com/braintree/docs/guides/drop-in/overview/javascript/v3/).

On the other hand, a **free-trial promo code** is:

- **Low-reaching:** Only about 15% of your customers come in through podcasts.
- **Medium-level confidence:** Free-trial promos are common but not ubiquitous.
- **High impact:** The company has had free trials convert well in past tests.
- **High effort:** The free-trial code is messy; the team will need a month to clean it up.

In visual terms:

Eyeballing would suggest we’re better off with **Checkout with PayPal**.Even though the potential impact isn’t as high, the change is likelier to work, faster to implement, and will affect more potential customers.

### Processes

The process above works well with two ideas, but what if we have tens of ideas to score and rank? A spreadsheet keeps things organized. Here’s a [minimalistic template](https://docs.google.com/spreadsheets/d/1trzJaf37kh6C5Cprcnmj20LX0RKxeZ1CVuuwNCZCAYE/edit?usp=sharing) from Alexey, and a [batteries-included Airtable template (called EVELYN)](https://www.airtable.com/universe/expZpCNVlkaoLGNAr/evelyn-experiment-velocity-engine-lifting-your-numbers) from Darius.

### Sizing heuristics

It’s not always obvious exactly what “high impact” versus “medium impact” means.

At this stage, these estimates are meant to be low-fidelity and directional [SWAGs](https://en.wikipedia.org/wiki/Scientific_wild-ass_guess) anyway. Rather than nailing the categories, compare between items—do all the M’s truly feel smaller than the L’s?

That said, here are some heuristics for evaluating an idea at this stage.

**Reach** is relatively straightforward to estimate: either your users will experience the change or they won’t. **Effort** estimates come with experience on the engineering side. Always strive to run the laziest test possible[,](https://paper.dropbox.com/doc/The-Laziest-Price-Test-I-Ever-Ran--B~Bpmr4lVuBhttC0Z_cn_60wAg-V7SYN64MVFFXq0ibFClLH) asking “What is the least amount of engineering work required to test this idea?” **Impact** and **Confidence** have more subtlety, however.

**Impact**

An idea should be higher-impact if:

- It addresses a sensitive-to-change portion of the customer journey: above the fold on the landing page, pricing, etc.
- The change is particularly significant—a “big swing”

**Confidence**

An idea should be higher-confidence if:

- You’ve already had the same concept work elsewhere: “Emphasizing the money-back guarantee was a winner on the homepage; let’s try it during checkout.”
- One or more of your competitors already employ this tactic (they’ve likely tested into it): “Our competitors offer a monthly pricing plan; we should try the same.”
- Your customers are explicitly and repeatedly complaining about it: “Why do I have to create a new account? I wish I could log in with Google.”

The product manager should have the context to fill in **Impact**, **Confidence**, and **Reach**. The **Effort** column can sometimes be filled by an experienced product manager, but more commonly a tech lead.

Once a T-shirt-size prioritization is complete, you can sort the list based on the implied score (with T-shirt sizes translated to numeric values to make the math work):

*Score = (Reach % \* Impact % \* Confidence likelihood %) / Weeks of effort*

Sort all of the available ideas using their scores. Take about twice as many ideas as you’d have time for during the period you’re planning for (typically a quarter). This is your preliminary shortlist.

### Validating your shortlist

Some shortlisted ideas will surprise you. RICE isn’t gospel; double-check and adjust the suspicious scores until you feel comfortable. Next, loop in your team, who will appreciate a chance to weigh in and offer helpful adjustments.

Even after the refinements, some ideas you had thought of as clunkers will end up above your favorites. This is the process working as intended. By establishing objective evaluation criteria, you have separated the wheat from the chaff.

## Part 2: DRICE

Once your RICEd shortlist is ready, it’s time to invest in a higher-fidelity evaluation of your ideas. This assessment method is known as **DRICE**, a “**Detailed RICE**” estimate.

During DRICE, we will go from:

- A 30-second estimate to a 30-minute estimate
- A relative scoring (S/M/L) to a $X of expected annualized revenue
- “Wouldn’t it be cool if” to “We are shovel-ready”

“Wait, 30 minutes per idea?” says the growth PM reading this guide. “We don’t have time for this. Our list is solid. Let’s be biased toward actionand get started!”

Not so fast.

Teams that adopt DRICE notice a difference in the projects they end up prioritizing. Many “promising” projects turn out to be defeated by a half-hour investigation, while “nice to have” features that would have been left on the cutting-room floor end up becoming high-ROI winners.

#### **Dropbox case study**

A particularly clear example of this comes from Darius’s time at Dropbox, focused on activating new Dropbox Business users. One proposed idea was a migration tool for Basic users, streamlining the process of getting started with a Business account. Initially we didn’t think this would be a huge win, since target users were only a subset of all sign-ups.

However, the DRICE investigation showed:

- A large percentage of Business team creators were previously Basic users

- A good chunk of teams had multiple users

- Many teams had private files but not team files

- A “choose folders to share with your team” modal could boost sharing significantly

The DRICE investigation significantly bumped the idea’s expected ROI. We built it. The Dropbox Business Migration Tool became **the biggest activation win of the quarter**. Without DRICE, we were unlikely to have prioritized it at all.

Overall, we found that Dropbox teams that adopted DRICE were able to move their key metric by **twice** as much as teams that stuck to a simpler prioritization process.

To see how the DRICE process works, it’s also best illustrated by example.

### Example DRICE: Adding PayPal

We’ve already RICEd the PayPal project:

- **Reach**: **all.** Potential customers must go through checkout and are exposed to the option.

- **Impact**: **small.** Most customers are comfortable with credit cards.

- **Confidence: likely**. Competitors offer PayPal; customers have asked for it before.

- **Effort: medium.** Will need to integrate PayPal through the Braintree API.

Not bad. Here’s what a DRICE would look like:

#### **Hypothesis**

A potential customer segment prefers to pay with PayPal instead of credit cards and has been emailing to let us know. By adding PayPal as an option in the checkout flow, **we will improve conversion by 2.7%, or an incremental $540k/year**.

#### **Impact estimate**

#### **Engineering estimate**

***Effort:** 7 days*

*We originally thought we’d have to integrate the Braintree API, but these days, you [can integrate PayPal directly from Stripe](https://stripe.com/docs/payments/paypal). This eliminates the bulk of the expected back-end work, leaving us:*

- *[1 day] Integrate PayPal button on front end according to designs*

- *[1 day] Update receipt emails to support PayPal*

- *[1 day] Migrate e-commerce back end to support a new payment type from Stripe*

- *[2 days] Integration tests for key flows (purchase, refund, cancellation, chargeback)*

- *[2 days] Buffer time*

#### **Return on eng investment**

- $540k in annual revenue
- Eng cost of 7 days (~1.5 weeks), yielding an ROI of
- **$360k/eng week**

Through a DRICE estimate, we reduced the engineering estimate and increased the success likelihood for our “Checkout with PayPal” idea. With 30 minutes from PM and engineering, we’ve taken the idea from being marginal to a “let’s definitely do it this quarter” type of idea. Note that we didn’t *eliminate* guesswork as part of this process; our guesses simply became *educated*.

Here’s a [DRICE template](https://docs.google.com/document/d/1J5j2g6ACKxDFjALPR1DgQIn7tABAycOFQDW8beQIfh0/copy) to use when making your own estimates.

### Components of a DRICE estimate

Now that we’ve walked through an example, let’s talk about what a DRICE involves and how to perform one. You’ll want:

**Hypothesis**

A clear, brief explanation of the idea that anybody without context will be able to understand, and a short justification for why you believe the idea will be effective.

**Impact estimate**

Typically from the product manager, a clear, bottom-up financial model estimating the impact of the idea. This is the time to do a bit more research, speak with peers, and see if any existing analytics data is available that would allow for a precise estimate.

**Engineering estimate**

Not every idea being DRICEd requires its own proper engineering spec. However, this is the place for a growth engineer to kick the tires of the assumptions behind the original T-shirt-size estimate. Projects could end up being much simpler (like the PayPal example) or much harder (due to complexity that wasn’t apparent until digging in). An experienced growth engineer will develop an intuition for how to de-risk and spike the more complicated parts of any particular project.

**Non-engineering efforts**

Many projects will have non-engineering effort required for this roll-out as well. Designs need to be finalized, legal may need to sign off, the support team will need to be notified and trained, FAQs will need to be updated, etc. However, for the purposes of DRICE, it is common for engineering availability to be a bottleneck. So unless one of the other roles will need to bear an usually large lift, we use engineering effort as a proxy for effort required.

Where appropriate, it may also make sense to include some initial design-level wireframes.

### When should we start DRICE-ing?

If you find a $100 bill on the ground while walking to work, you don’t need to run a prioritization process to pick it up. If you are seeing an over 70% win rate, you are still enjoying the early days and can postpone investing in your prioritization muscle for a little while longer.

If you’re doing a good job of growth, however, you’ll pick off the obvious ideas within a quarter or two and the sky-high win rate shouldn’t last. Then it’s time for proper prioritization—not just RICE, but DRICE as well.

The work required to properly DRICE any idea will encourage productive activities. Impact modeling, effort estimating, and the like are work you will want to be doing for your projects, DRICE or otherwise.

Once you have done the work to get a real dollar estimate for every idea, you can begin to reap the full benefits of prioritization.

## Benefits of proper prioritization

If you’ve gotten this far, the primary benefits of prioritization will be clear: you have a high degree of confidence that the bets you are going to execute on are the highest-value bets available to you, setting your team up to hit its goals.

There are, however, several additional benefits.

### 1. Higher experiment hit rate and impact

Most growth teams have more than 50% of experiments fail. Some teams have as much as 80% of experiments fail or deliver far below the hoped-for impact. This means only 20% are true winners, or one-fifth. If you can lower the failure rate from 80% to 60%, you’ve doubled impactful experiments from 20% to 40%. This happened at Dropbox, where we saw that teams using DRICE had twice the impact rate (hit rate \* impact per hit) of other teams using classic RICE scoring or simply picking ideas.

### 2. Simplify managing up

When staffing across departments, one question executives will ask is “What is the ROI on this?” Teams that have the most trustworthy and direct answer—“give us X people and we’ll make you $Y dollars”—are likeliest to get the resources they ask for. This is the reason salespeople often speak about their “sales pipeline revenue.”

With DRICE, growth teams can use the same approach. “With X engineers, we will execute on $Y of opportunities next quarter. With X+A engineers, this goes up to $Y+B. Here’s the spreadsheet you can use to check our work anytime.” By following DRICE, making commitments and meeting expectations become easier, simplifying the work required to manage up.

### 3. DRICE builds team culture

Growth PMs often wish their engineers contributed more ideas during planning. “Why bother,” think engineers. “The PM is just going to pick their own ideas anyway.”

[HIPPO](https://jeffgothelf.com/blog/highest-paid-persons-opinion/), the Highest-Paid Person’s Opinion, is the default mode of planning for many teams. It’s better than random—there’s a reason the PM is in their position—but it’s far from optimal. By running (and prominently communicating) a transparent prioritization framework, engineers feel that the planning game has rules.

Most folks on a team tend to have a pet idea they’ve been hoping they’d get done someday. With DRICE, it’s clear what they must do: find evidence for why it is a high-confidence idea, cut engineering scope to reduce effort, etc. They feel they’re gaming the system, but in fact they’ve started to learn to think more like a growth PM.

## Takeaways

Going through the motions of growth prioritization can feel like busywork. It’s so easy to fall back on “I’m the PM, I have this job for a reason, I should make the call on what we work on. All this process is really just a waste of everybody’s time.”

This is the HIPPO mindset; don’t fall for it. Implement proper prioritization and see how a fair, rigorous playing field results in a higher win rate, a happier team, and a more successful business.

*Thank you, Darius and Alexey! For more, find Darius on [X](https://twitter.com/dariusmc) and [Darius.com](https://Darius.com/), and Alexey is a [growth engineering advisor](https://alexeymk.com/growth-eng) in the process of writing [a book about growth engineering](https://alexeymk.com/), and you can find him on [X](https://twitter.com/alexeymk) and [LinkedIn](https://www.linkedin.com/in/alexeymk/).*

*Have a fulfilling and productive week 🙏*

## 📣 Join Lenny’s Talent Collective 📣

If you’re hiring, I can help. [Lenny’s Talent Collective](https://www.lennysjobs.com/talent/welcome) works with a select group of companies every month to help them make key growth and product hires.

You tell us what you’re looking for, we scan through our entire community to find the best fits and introduce you directly to the candidates you most want to talk to. I hand-review every potential intro to ensure a great experience for all parties.

If you’re looking for a new gig, join [here!](https://www.lennysjobs.com/talent/welcome?application=true&pallet=&step=privacy) We’ll send over personalized opportunities from hand-selected companies if we think there’s a fit. Nobody gets your info until you allow them to, and you can leave anytime.

[Apply to join](https://www.lennysjobs.com/talent/welcome?application=true&pallet=&step=privacy)

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
