---
title: "What 5 years at Reddit taught us about building for a highly opinionated user base"
subtitle: "A framework, from the front lines of Reddit, for turning a sometimes combative relationship with users into a strong, productive partnership"
date: "2023-06-27"
type: "newsletter"
tags: ["leadership", "design", "b2c", "go-to-market", "newsletter", "product-management"]
word_count: 4727
---

For this week’s guest series, I’m excited to bring you an incredible post by [Evan Hamilton](https://www.linkedin.com/in/evanhamilton/) and [Tyler Swartz](https://twitter.com/tylerswartz), on a topic that is both timely and near and dear to my heart. While leading the Airbnb host team, I had to learn to deal with a highly vocal Airbnb host community while making constant changes to the product. Although Airbnb hosts aren’t as opinionated as Reddit users, their homes and livelihoods are on the line, so the stakes are high for them. I truly wish I’d had this guide then. Thank you, Evan and Tyler, for sharing your story.

*[Evan Hamilton](https://www.linkedin.com/in/evanhamilton/) has been building community and customer experience teams for over 15 years at both consumer and B2B companies like HubSpot, UserVoice, and Reddit, where he was head of community. His happy place is creating win-win situations that lift up community members and drive business goals. Evan curates a newsletter, [Community Manager Breakfast](https://eepurl.com/c7sjOv), which includes three links about community building, delivered hot and fresh to your inbox every Monday.*

*[Tyler Swartz](https://swartz.cc/) has a decade of product management experience, leading teams to create software loved by customers. His strength lies in connecting product and community, honed at Reddit, where he led a variety of teams over five years, including the safety team and content creation team. He is now building his own businesses, offering his community-building expertise to companies, and writing a weekly AI newsletter, [The AI Product Report](https://www.productreport.ai/), where he tests AI-powered products and curates the most interesting and innovative products launching each week. Be sure to subscribe to his newsletter.*

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/95450eae-c585-47b3-826a-b557392162be_8000x4000.png)

It was 2015, and nearly 200 million people were visiting Reddit.com each month. Nothing seemed to slow Reddit down—not even revenues so low that Reddit had to solicit users to purchase “Reddit Gold.” Then one day, everyone who landed on Reddit.com found hundreds of their favorite pages shut down:

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/5eb75ca6-a528-498d-a236-fd266c0d1446_981x774.png)

The moderators had gone on strike. Reddit had no idea what to do. In under a week, the CEO was ousted.

Passionate customers are a double-edged sword. Founders and product leaders pray for product-market fit, strong word-of-mouth growth, and a supportive community. But founders often struggle when the community feels—and displays—intense, vocal ownership of the product.

We both spent more than five years at Reddit, and through blood, sweat, and tears, we developed a framework that helped turn a sometimes combative relationship with users into a strong, productive partnership most of the time. At its best, when Reddit gets it right, it hits monthly visitor milestones. As we are seeing in the [recent news](https://www.platformer.news/p/reddit-goes-dark), maintaining the right balance with a highly opinionated user base takes continuous work.

In this post, we’ll take you through four steps for building product with a highly opinionated user base:

1. Identify and measure your Trust Vault
2. Find the *right* customer voices to listen to
3. Take actual discussion *out* of the public square
4. Listen intently, act responsibly

## **1. Identify and measure your Trust Vault**

At Reddit, we often heard alarmed product managers compare our angry users to petulant children. “Stop yelling,” they’d say. “Just act like adults!” In fact, they *were* acting like adults—specifically, parents whose fervent unconditional love can turn to burning rage when their children are threatened. Your team sees a product. The users see their baby.

This mismatch between the parental and the professional means you are starting from a place of mistrust. Many of your most passionate customers suspect you’ll never care about the product as much as they do.

This led us to the concept we call the Trust Vault—a metaphor for how much trust the customer base has in you.

Your Trust Vault can be filled and it can be depleted. At Reddit we had multiple Trust Vaults: a company-level Trust Vault as well as Trust Vaults for individual teams or product managers.

Just as you can’t ask parents not to love their kids, **you can’t ask passionate users not to love your product. Don’t try to destroy their passion. Instead, fill the Trust Vault and harness their passion productively.**

One way to measure your Trust Vault is using the [Edelman Trust Barometer](https://www.edelman.com/trust/2023/trust-barometer), a survey that measures people’s trust in governments and major corporations. The two key questions in your survey should be:

1. “On a scale of 0 to 6, how much do you trust [your company] staff to do the right thing?”
2. “Why?”

(Note: Plan your cadence of surveys carefully. While it’s useful to have a live view of how your trust is trending, oversending the survey can itself deplete trust! Once or twice a quarter is generally fine unless you’re dealing with rapid swings in trust.)

The answers you get can help you plan and execute new product launches. If the trust score with a target audience is too low, you might decide to adjust your launch plans—perhaps even delay launching a potentially controversial product.

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/2f355a7d-ae44-4a97-b441-409d923e339d_811x500.png)

For example, at Reddit, if a product threatened to increase the day-to-day effort of moderators (e.g. introducing a new content type such as livestreaming) and the trust score for moderators had been trending downward, we might adjust our launch schedule, and even delay the launch until we had gotten a few Mod Experience Oriented Wins (MEOWs) . . . [yes, that’s a real acronym](https://www.reddit.com/r/modnews/comments/tt5rjw/april_mod_experience_product_update/). We knew that a few MEOWs would boost moderator trust and make it much easier to release a more controversial feature.

## **2. Find the** ***right*** **customer voices to listen to**

Just because someone is loud doesn’t mean you should act on their complaints. You need to get good at identifying whom you should pay attention to. That starts with examining *who* is being loud. Often the loudest people don’t represent your general user base or your ideal customer profile.

When Tyler first got to Reddit, he made the mistake of responding to the loudest voices, versus determining whether their complaints truly represented the majority of users. In one of his first roles, he was a product manager on Reddit’s big redesign—an overhaul of its desktop site, the first redesign of the Reddit UI in 13 years. To collect feedback from redditors on the new design, Tyler and his team used a special private subreddit for beta users. The plan was to use feedback from the beta community to iterate on the new design and then slowly roll out the design to all users once we felt it was in a good place.

A couple months into beta testing, the team released some updates to the “hamburger” menu, which is how you opened a sidebar menu. Within days, some redditors complained that the sidebar was hard to navigate. Tyler and team decided to make changes based on the negative feedback and created a new dropdown navigation paradigm to replace the sidebar.

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/1f96dabc-d71d-43c3-986b-02b8ffb36f74_1600x728.png)

We felt stoked! We were iterating, moving fast, listening to our users. But our smiles faded as soon as we released the new design. Beta users posted negative comments far exceeding the original complaints about the sidebar. They demanded we bring the sidebar back. Where were all these people a few weeks earlier?!

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/8231c695-46d7-4897-90a1-dc8427251949_748x263.png)

This experience taught us a few important lessons.

First, customers typically won’t go out of their way to tell you if a feature is useful or helps them do a task. They treat useful features like table stakes: they expect them, so they don’t think those features are worthy of comment. As a result, it can be hard to tell whether negative feedback represents the attitudes of most users.

Second, when assessing user feedback, it’s important to consider two key factors: (1) whether the feedback represents a significant portion (10% or more) of your user base and (2) whether the users who are giving feedback can influence the opinions of other users. Examples of influential users at Reddit would include moderators of smaller women-focused communities, as the company aimed to expand its user base beyond the core demographic of young male gamers and programmers.

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/0a782ffb-6f05-4214-9172-3b92b0af19c7_2000x2000.png)

Third, if you decide to deprioritize a group’s feedback, make sure you help them understand why. For example, you might have a small but [passionate group of bakers](https://www.reddit.com/r/Breadit/) streaming on your livestream platform; helping them understand that you are primarily serving gamers will feel hard at first but avoid a lot of pain later. Often these groups don’t realize that their ideas don’t represent the whole user base. They may assume that most users feel more or less the same way they do.

In brief, feedback comes in many forms and is not always vocalized. It’s crucial to analyze the representation and influence of those giving the feedback, and provide clear reasoning behind the decisions you make to ensure you don’t deplete your user’s trust.

## **3. Take actual discussion out of the public square**

Perhaps the biggest thing we learned at Reddit is that the public square is not the place to have a nuanced product discussion.

The trick is to form an advisory council—a group of passionate community representatives with whom you can discuss and ideate in a safe, private space. A private advisory council enables you to make the right product decisions and to set yourself up for success when you communicate with the larger audience. When the council is well chosen, its members become your early warning system, your shepherds, and your evangelists. And notably, they shouldn’t be yelling.

An incident with a large sports subreddit made us realize we needed to form an advisory council.

We were making changes to how “post” and “user flair” functioned (think: little icons on your username and next to your post title). Moderators of multiple sports subreddits posted public complaints about what we were doing.

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/ad3c65d2-2827-4e4d-8170-b5377dc61548_734x325.png)

The public back-and-forths didn’t promote any clarity or alignment, largely because the incentive in the public subreddit comment thread was to *win* the conversation. We took the discussion to a phone call. Both sides could then start seeing each other as human beings and focus on relevant details of the flair design without as much grandstanding. Yet the conversation was still derailed by a single moderator who dominated the call and spent most of the time berating the product manager and demanding that we roll back the entire project.

Thankfully, another moderator from the call DM’d us later with constructive feedback and paths forward. That’s when it clicked: we needed to create a space that disincentivized winning and incentivized nuanced conversation, compromise, and collaboration. Shortly thereafter, we hosted the first Moderator Advisory Council call.

Here are four essential components for creating a successful advisory council:

#### **1. Assemble a representative group**

This group should represent a broad cross-section of your user base: casual users, more serious users, minority groups, etc. Look for critical thinkers and strong communicators who won’t simply agree with you and who won’t be immovably stubborn. Including influential users within your customer base can be immensely helpful when pitching changes to a larger group. You can find these people on social media, in comments sections, and on idea forums. When you send out customer surveys, include a follow-up question—for example, “Can we contact you again if we have follow-ups?” Recruit thoughtful respondents from these results. You should aim to have a group large enough to have at least 10 people show up to your monthly council calls, but not so many that members are fighting to get a word in. At Reddit, this meant a group of roughly 80 people on a rolling basis.

#### **2. Create a space and culture for reasonable discussion**

Just because you have assembled a good group of people doesn’t mean they’re automatically going to behave. You need to build a culture in your council that rewards candid feedback and thoughtfulness. Create a code of conduct and enforce it consistently. Remind everyone why they’re there at the beginning of meetings and praise the desired behavior. Be sure to lead by example. [Evan has a more in-depth post on the topic here.](https://www.evanhamilton.com/building-a-strong-community-culture/)

Where you host these conversations will probably have more to do with your bandwidth. Live conversations tend to have the most clarity, but depending on the volume of items you’re launching, you may want to consider a forum or chat room in addition. Whatever space you choose, set expectations about your engagement in the space, and hold up your end of the bargain. At Reddit we had a private subreddit for async conversations *and* hosted regular calls with council members.

#### **3. Build process and cadence for connecting**

The earlier and more often you can consult this group, the better. Not only will this ensure that you have relevant feedback, it’ll also fill the Trust Vault and signal that you are taking them seriously. Ideally you are meeting with your council at least once a month; be sure to accommodate multiple time zones if you have a global audience. Ultimately, the cadence will depend on how involved they want to be and how frequently you are shipping. At times, we were doing more than one call a week!

![r/modnews - The Reddit Mod Council Year End Review | 2022](https://substack-post-media.s3.amazonaws.com/public/images/ef1f3dc4-dd35-434e-9284-84ec12b532dc_1015x733.png)

When conducting meetings, make sure to be clear about where you are in the development process so that they know what type of feedback will be most helpful to you and the team. For example:

- At conception: Does the idea resonate with them?
- At design: Does this raise any alarm bells?
- At beta: What gaps do they find once they try it?
- At launch prep: Make sure they know that it’s coming and how you’ve acted on their feedback

#### **4. Cycle them out**

To keep your group fresh, avoid having an advisory council with a fixed membership. A fixed membership can invest too few people with too much power; it can also leave you vulnerable to decision-making blind spots, since the people on the council might not adequately reflect the viewpoints of the larger group they represent. Finally, it can create a culture that disincentivizes candid feedback because members of the council are comfortable with your staff. To overcome these problems, we suggest setting a 12-month tenure for most members and cycling them out at the end (with the option of one extension). Thank them for their service and maintain the relationship.

## **4. Listen, but act**

The number one trap we see most companies fall into when they start an advisory program like this is that they fail to act on the feedback they receive. They see it as a checkbox to placate the crowd.

Here’s the problem: if you ask someone to give you their precious time and feedback and then *don’t* act on it, you’re actually burning more trust than if you had never asked at all. So the golden rule of feedback is this: **Ask for feedback only if you’ll consider it.**

#### **Have a system**

Deciding what feedback to act on would be a whole post in and of itself, but at a high level, the best thing you can do is create a framework for filtering what you hear. Some feedback is well-intentioned rubbish. But even if the feedback has some great ideas, you’ll never have the bandwidth to build on all of them, nor will all of them be mission-critical.

You have to think about the number of people that something affects. But at a big company like Reddit, you can’t think only about that, because even 10% of the user base is a huge number of people. Instead, you have to think about the depth of an effect in addition to its breadth. The following 2x2 matrix can help you think through some of the options here. Intuitively, things in the upper-right quadrant—ones that have a deep effect on a massive group—are top priorities: you should almost certainly do them. The home feed at Reddit is obviously a crucial space frequented by a massive number of people: upper right. By contrast, things in the lower-left quadrant—ones that have a shallow effect on a small group—are probably a no. We got frequent requests from the most hardcore of power users for folders to better manage their bookmarks—a feature that hardly anybody used in the first place: bottom left.

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/71320aff-7989-4320-be38-774c6b190738_2000x2000.png)

Then there are things in the upper-left and lower-right quadrants—ones that have a shallow effect on a large group, and ones that have a deep effect on a small group. The flair example earlier in this post was the quintessential Reddit tool that some subreddits, like r/stopdrinking, completely relied on and most never even used: bottom right. When it comes to these things, you should keep three considerations in mind.

First, think of your Trust Vault. While they may not be mission-critical features or fixes, they will affect how the community overall feels about you, how much goodwill you have stored in your Trust Vault, and how much people are willing to contribute to your advisory council.

Second, think of any larger organizational goals you have. You want to delight your existing customers, so maintaining your Trust Vault is essential. But you should also consider future potential customers—new audiences you want to attract.

Third, your advisory council should play an important role in your decision-making—not a solo role, but an important one. Balance is key.

#### **Say no**

It may seem scary, but part of building up the Trust Vault is being transparent with your audience, even when you have tough news to share. Explaining that you’re not acting on a piece of feedback—and, crucially, *why* you’re not—may be painful in the moment, but it will build long-term trust.

Here’s an example of us saying no. In 2020, Tyler and the team launched [multi-image gallery posts](https://www.reddit.com/r/announcements/comments/hrrh23/now_you_can_make_posts_with_multiple_images/), a much-requested feature that opened up a lot of creativity on Reddit. However, building a new post type was a massive undertaking. We had to change many platforms and APIs to support gallery creation and consumption in feeds, as well as moderator tooling and internal safety systems. The team frequently met with the advisory council throughout the multi-quarter development process to get feedback at each stage.

Many moderators expressed concern about whether or not we would support “Old Reddit”—a web platform that many moderators fell in love with during Reddit’s early days. Old Reddit’s usage is low compared with mobile apps and the desktop site, but the people who use it are some of Reddit’s most vocal users. Moderators insisted that having galleries on Old Reddit was imperative. The advisory council calls helped us understand the underlying reasons for their concerns.

We broke those concerns into three categories:

- **Creation:** Creating galleries was unlikely to be conducted by many Old Reddit users, who preferred text posts.
- **Consumption:** Despite there being few Old Reddit users, an inability to view a gallery post on Old Reddit would essentially break their browsing experience.
- **Moderation:** Removing problematic gallery posts is important for a sense of safety, and requiring our volunteer moderators to use two platforms to moderate would be a big ask and deeply affect them.

Plotted on the 2x2 matrix, they looked like this:

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/67af5dc9-89b2-4a47-aa52-286b08e05169_2000x2000.png)

Based on where these asks landed on this grid, we decided to provide only limited support for Old Reddit, offering a basic consumption experience so that the gallery could be viewed by users browsing a feed. Additionally, we gave moderators on Old Reddit basic moderation tools so they could view and moderate gallery posts that were reported. But we didn’t add any further functionality to this legacy platform. We followed up with the advisory council to explain our decision-making, as it was relatively easy for a user on Old Reddit to switch over to New Reddit to post a gallery if they so desired.

All in all, the image gallery post feature has been successful and a net benefit to Reddit. Moderators appreciated the basic enhancements we made to Old Reddit to ensure their mod workflows remained usable.

#### **Throw a bone**

When we redesigned Reddit, we got many complaints about the “white space” from old-school users. They didn’t love the spacious, modern design of the new cards:

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/50205dde-54cb-4b15-8826-eb3ebef4aa53_1298x1314.png)

But there was no way we were going to subject new users to this old design:

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/2561bc33-a4b2-405c-8754-73adf1765553_1600x437.png)

So instead, we offered an additional content density option, called “classic,” that was similar to the original Reddit design, and we decided to default new users to the more spacious, updated design and existing users to the classic density:

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/63f770a5-1cd4-4e1b-bdd8-3f4608525ec0_1600x545.png)

And just to delight a small number of power users without causing any issues for new users, we threw in an ultra-condensed view. Not most people’s cup of tea, but it went a long way toward showing that we weren’t leaving them behind:

![Image from What 5 years at Reddit taught us about building for a highly opinionated user](https://substack-post-media.s3.amazonaws.com/public/images/1873b457-d0de-4d50-a6e9-2debfe31e73e_1600x364.png)

You shouldn’t do this constantly—you don’t want to reward the vocal minority for complaining—but it can be highly effective in situations like this where the change will be staring your vocal minority in the face all day long, and the work to throw them a bone is relatively light. The proof is in the pudding: after we added these two additional options, most complaints about the modern card were deflected by other users pointing out the classic and condensed options.

## **Putting it all together, what does this look like in practice?**

Here’s how we’d put all of the above ideas into a playbook. You can adjust our approach to fit your own needs depending on the features you have in mind, and how early and often you want to engage your advisory council:

#### **1. One-pager and Community Manager review**

After the PM’s 1-pager is complete, the PM meets the Community Managers, reviews the 1-pager, and gets their feedback on potential issues or risks that the community might raise. (Shoutout to Lenny for his [1-pager template](https://docs.google.com/document/d/1541V32QgSwyCFWxtiMIThn-6n-2s7fVWztEWVa970uo/edit)—Tyler used it all the time.)

#### **2. Product spec writing and design process initiation**

Write product spec, incorporating the feedback from the Community Managers, and start the design process.

#### **3. Advisory council call**

Once early low-fidelity wireframes or sketches are complete, conduct a call with the advisory council. During this call, which is facilitated by the Community Team, walk the council through your understanding of the user problem, the proposed solution, and designs. Then listen to feedback from the group and answer questions—usually lots and lots of questions.

#### **4. Design iteration**

Iterate on designs based on their feedback.

#### **5. Pilot phase**

Once engineering on the initial version is complete, introduce the feature as a pilot to a small number of individuals. Ideally, the pilot testers cover a broad range of personas or customer profiles (i.e. have some power users and some casual users) and also include members from your advisory council. Throughout the pilot, reach out to testers and ask them for feedback. Consider hooking up a feedback form directly to the team’s Slack channel so that it alerts everyone on the team when feedback arrives.

#### **6. Feature iteration**

Iterate on the feature based on feedback. Iterating on feedback is happening throughout the pilot phase.

#### **7. Advisory council call**

Meet with the advisory council to share pilot results, a summary of the feedback you received, and what you’ve changed. This is a crucial step for showing their importance and making sure they are primed to support the launch.

#### **8. Beta phase**

If you feel good about the feature, announce it in a more public setting and increase access to it. It’s important to highlight what you learned during the pilot phase and what you changed during that period. Encourage the advisory council to join the discussion in the comments, provide trustworthy context and—ideally—advocate on your behalf. Continue to provide a communication channel for beta users to give the team feedback.

#### **9. General availability**

If the feature is driving value, make it generally available to all users.

—

This community-driven go-to-market strategy helped us build features and product lines that added real value to our communities. Although it took longer than a traditional consumer go-to-market strategy, working closely with moderators or community leaders allowed us to ship features that they were excited to use and that they, in turn, would promote in their communities—something that likely saved us a lot of pain, energy, and angry video calls.

## **Summary**

We won’t claim any of the above is easy, and even if you pull off all the steps, it can take time to build up trust with a passionate user base (especially if previous leaders may have depleted some of it).

But consider this: during the five-ish years we were executing on this playbook, moderator protests on Reddit were rare and small, the majority of product launches were civil, product announcements were full of community council members advocating on Reddit’s behalf, and Reddit continued to hit new milestones for monthly visitors with over 100k active communities.

Once you’ve built the infrastructure and muscle memory, this becomes a play you can repeat over and over, and each time it gets a little easier and your audience is a little more willing to listen.

The yelling will always be there, and even in Evan’s fifth year at Reddit he had to remind himself frequently that it was the sound of love. But when you harness that loud love to successfully launch something that makes your audience happy . . . well, there’s no other feeling like it.

*Thanks, Tyler and Evan! For more, Evan curates a newsletter, [Community Manager Breakfast](https://eepurl.com/c7sjOv), that includes weekly links about community building, and Tyler writes [The AI Product Report](https://www.productreport.ai/), where he tests AI-powered products and curates the most interesting and innovative products launching each week.*

*Have a fulfilling and productive week 🙏*

**If you find this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. Check out [group discounts](https://www.lennysnewsletter.com/subscribe?group=true) and [gift options](https://www.lennysnewsletter.com/subscribe?gift=true).**

Sincerely,

Lenny 👋
