---
title: "The secret to Duolingo’s exponential growth"
subtitle: "Don’t kill the golden goose, maintain a sense of urgency to drive compounding growth, copy first, and more of their biggest growth lessons"
date: "2024-04-02"
type: "newsletter"
tags: ["analytics", "growth", "go-to-market", "strategy", "design", "leadership"]
word_count: 5274
---

*P.S. Check out my **[recruiting service](https://www.lennysjobs.com/)** (helping you hire Sr. PMs and VPs of Product), **[Lennybot](https://www.lennybot.com/)** (an AI chatbot trained on my newsletter posts, podcast interviews, and more), and my **[swag store](https://lennyswag.com/)****(great gifts for your favorite PM, or yourself!)*

[“How Duolingo reignited user growth,” by Jorge Mazal](https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth), is my [#1 most popular post](https://www.lennysnewsletter.com/archive?sort=top) of all time. But the story didn’t end there. Growth at Duolingo has continued to go exponential, and VP of Engineering [Sean Colombo](https://www.linkedin.com/in/seancolombo/) has been there through it all.

In the past five years, Sean’s team has grown Duolingo’s daily active users from 5 million to nearly 30 million today (over 6x!), and [the stock](https://www.google.com/finance/quote/DUOL:NASDAQ?sa=X&ved=2ahUKEwidxfKMz6GFAxW0ADQIHa85DvsQ3ecFegQILxAf&window=5Y) has nearly 3x’d in the past two years, largely thanks to methodical product iteration and experimentation. This re-acceleration is something you almost never see at a company that’s over a decade old, especially after a multi-year deceleration.

![Image from The secret to Duolingo’s exponential growth](https://substack-post-media.s3.amazonaws.com/public/images/6a5d0692-48c4-4814-9231-a623d7053633_1171x726.png)

In this post, Sean shares five of his biggest growth lessons over these five years at Duolingo. If you’re looking for ideas and strategies to drive your own product’s growth, this post is for you.

*For more from Sean, follow him on [LinkedIn](https://www.linkedin.com/in/seancolombo/).*

![Image from The secret to Duolingo’s exponential growth](https://substack-post-media.s3.amazonaws.com/public/images/a9cf144d-e69c-4666-b020-1611445799a7_4000x2000.png)

When we were bringing all our Growth teams under one org, I made an internal doc called “Colombo’s Musings on Growth” with some opinions on what I felt was driving our massive re-accelerated growth over the past few years and how we could keep up the momentum. The doc seemed to resonate well with my fellow Duos, and so this post is an attempt to share several of these musings with a larger audience—a continuation of Jorge’s post, in a way. It covers both strategic and tactical things that we learned during the growth we’ve sustained for over five years.

![Image from The secret to Duolingo’s exponential growth](https://substack-post-media.s3.amazonaws.com/public/images/867cd52c-82af-4bd6-8cf9-31f414381cf6_1600x774.png)

### 1. 📈 Maintain a sense of urgency to drive compound growth

One of the core things we’ve learned is that a **sense of urgency leads to compounding growth**.

To get the best long-term gains, you should always have a sense of urgency. The quicker you launch winning experiments, the quicker those changes impact your growth. Not only that, but these improvements compound!

At Duolingo, we are very fortunate to have strong word of mouth. Even with our extremely successful marketing (and partially *because* of it), about 90% of our DAU growth comes when new learners hear about us from friends, family, teachers, coworkers, and others. Because of this, DAUs benefit from some compound growth automatically. An even more pronounced compound growth effect is seen in retention metrics.

#### An example

Say you have 100,000 DAUs and a retention rate of 80%, and for every five users, one of them tells a friend each day to download your app (and they do it). You get 20k new users per day just from word of mouth. In this equation, Xn is the number of DAUs today and Xn+1 is the number of DAUs tomorrow:

> **Xn+1 = (Xn \* 80%) + (Xn \* (⅕))**

If you start with Xn = 100,000 DAUs, you’ll notice that the next day’s value (Xn+1) remains 100,000 DAUs—an equal number of users join and churn each day.

However, if we find an experiment that can improve retention by 1%, something interesting happens:

> `Day 0 (Sun.): 100,000 = X0
> Day 1 (Mon.): (X0 * 81%) + (X0 * (⅕)) = 101,000 (which we will now call X1)
> Day 2 (Tue.): (X1 * 81%) + (X1 * (⅕)) = 102,010 (this is X2, etc.)
> Day 3 (Wed.): (X2 * 81%) + (X2 * (⅕)) = 103,030
> Day 4 (Thu.): (X3 * 81%) + (X3 * (⅕)) = 104,060
> Day 5 (Fri.): (X4 * 81%) + (X4 * (⅕)) = 105,100
> Day 6 (Sat.): (X5 * 81%) + (X5 * (⅕)) = 106,151
> Day 7 (Sun.): (X6 * 81%) + (X6 * (⅕)) = 107,213
> Day 8 (Mon.): (X7 * 81%) + (X7 * (⅕)) = 108,285`

You’ll notice that between Sunday and Monday the first week, we added 1,000 DAUs. One week later we added 1,072 DAUs that day because there were more users to spread the word.

Whatever experiment it was that resulted in this 1% gain to retention is already adding 72 *more* people each day just because it was launched one week prior. After two or three weeks, the effect continues to grow compared to that first day. At Duolingo we launch hundreds of experiments per quarter, so this type of impact can really add up.

OK, so compound growth is great, but how does this tie in with a sense of urgency at Duolingo? We run experiments on almost everything we do, and launching these experiments quickly has a meaningful impact on our long-term success.

> #### ***Compound interest in action—in the ~~real~~ totally hypothetical world***
>
> *Let’s take a completely hypothetical example from an app called Luodingo that had two major feature launches.*
>
> *Feature A they ported from iOS to Android quickly, immediately after they launched the win on iOS. Including development time, experiment rollout, and running the experiment for two weeks to get data, they ended up launching the port of Feature A 82 days later.*
>
> *Feature B had a similar impact in its initial experiment, but the team did two small iterations to polish it before they ported it to Android. The iterations were roughly neutral, but they made Feature B into something that the Luodingans were more proud of (and of course they hoped the results might also be positive). The Android port of Feature B was launched 184 days after the launch of Feature B on iOS.*
>
> *Let’s see the impact here from waiting to port:*
>
> - *184 days to launch vs. 82 days, so 102 extra days that didn’t have the port live.*
> - *The port showed a gain of roughly 21k DAUs per day over a two-week period.*
> - *There were about 7.3 of these two-week periods in the 102-day gap between the two potential approaches.*
> - *This means that roughly 7.3 \* 21k, or 153.3k DAUs, were lost on an average day during the period. (Note that this is just roughly or directionally accurate; you can’t actually multiply experiment results by time completely linearly like this. Please forgive me, Data Platform and Data Science & Analytics teams! 🙏)*
> - *At this totally hypothetical company, they tend to get one new user each day from word of mouth for every 50 DAUs, on average.*
> - *During this period, that means they were missing out on an average of (153,000/50), or 3,000 new users, per day from word of mouth! This is on top of the average of 153.3k DAUs that they lost from not having Feature B live on Android during that time.*
> - *The moral of the story is that the team probably worked really, really hard coming up with other experiments, writing specs, implementing, etc. to try to get gains equal to the amount of DAUs they could have gotten by just porting this win in a different order.*
> - *I would clearly never have made this mistake and it’s obviously not a completely real-world example from a team I was responsible for. 0:-)*

To ensure that we’re moving quickly and striving for growth without sacrificing quality, we use these guidelines that you can also apply at your org:

1. **Make a decision** ***as soon as*** **you’re confident you have the data to do so.** At any given point, teams often have several experiments running at once while also working to ship upcoming features. Teams might let experiments sit on the back burner to “collect more data” and check in on them every now and then. Having the discipline to carefully and regularly examine experiments to know when you have sufficient data to launch them means that you’ll get the maximum impact as soon as possible.
2. **Roll out experiments to as many learners (aka users) as you can, as quickly as you can.** In order to have sufficient confidence in experiment results, we need a ton of users treated into experiments. Many experiments start with a very small number of people who are allowed to see the new experiment at the start, and, as I noted above, there is often no pressure to ramp this up while the team is working on the next big thing. But it’s important to increase the rollout as soon as you’re confident that a change is safe. The sooner you get the data that you need to make a decision about the experiment, the sooner you’ll launch it and start compounding the gains.
3. **Don’t pull your punches.** If you have a good new feature but there are some things you want to change about it, don’t just shut it down, make a tweak, and then run another experiment. If the imperfect version is strictly an improvement over the prior experience, launch it to new users (which starts the compound gains) and then make the improvements through iterative experiments after that. The amount of re-work saved by only launching afterward is likely very low, compared with the benefit of having the feature released. It also means that users on the various platforms will have a more consistent experience, which is valuable.
4. **Consider return on investment when determining the order of experiments.** There are many factors that team leads consider when prioritizing projects, but I’d argue that doing the most efficient, high-ROI projects *first* is the right path, because they will have a longer period of paying compound interest. When teams do quarterly planning, they often overlook order and focus on the list of things they want to accomplish in a three-month period. Order matters!
5. **Launch on your biggest platforms first.** If you have significantly more users on Android, launching experiments on Android first and then porting to iOS will give you more gains in the long run than if you launch on iOS first and then port to Android. If you launch to the bigger pool of users first, you have bigger compound gains than if you do it in the other order.
6. **Port the wins.** If your company doesn’t have to run experiments on all platforms at once, it’s probably faster to try things on one platform and then port to others—and this is the most common approach. Porting wins *quickly* is a huge opportunity to reap the benefits of compound growth. At Duolingo we launch around 50% of experiments. Experiments that are ports, however, are much closer to 100% launched. Nearly everything that wins on one platform wins on the other. Users aren’t *that* different between platforms.

Of course, many reasonable people (and companies) gather as much data as possible, wait to launch until things are perfect, and expose experiments to only a small number of users for a long time. And these companies can also succeed. However, our experience at Duolingo has shown me that our approach works very well over the long term. Keeping a sense of urgency leads to fantastic compound growth.

If the concept of urgency resonates with you and you want to take it to an entirely new level, it’s worth reading Frank Slootman’s book *[Amp It Up](https://www.amazon.com/Amp-Unlocking-Hypergrowth-Expectations-Intensity/dp/1119836115)* or [his LinkedIn article](https://www.linkedin.com/pulse/amp-up-frank-slootman/) to get a shorter version of his ideas.

### 2. ♟️ Identify your strategic advantage

Finding your strategic advantage can be really helpful in guiding your product strategy. At Duolingo, our strategic advantage is that our users *want* to build a habit.

Our CEO, [Luis von Ahn](https://en.wikipedia.org/wiki/Luis_von_Ahn), has said many times that our competition might actually be Instagram, TikTok, and other ways for people to just pass the time on their phones. While social networking and games have their own advantages, we have one that those other apps don’t: our learners want to build a habit on Duolingo. Nobody downloads Royal Match thinking, “I hope I keep up playing this game for hours each day.” But our users have a conscious desire to learn another language, so they’re a partner in our goal to retain them.

This strategic advantage plays out well in a number of ways. One especially important thing I’ve learned is that if we give users *useful* notifications (with an easy way to turn them off for those who don’t find them valuable), those tend to be well-received.

![Image from The secret to Duolingo’s exponential growth](https://substack-post-media.s3.amazonaws.com/public/images/b99adec4-7d94-400a-be53-dd6e0dc3ec4e_1179x372.png)

Please note that this doesn’t mean we should spam users. (See the section below on notifications and the golden goose.)

The best book I’ve read about strategy is *[Good Strategy/Bad Strategy](https://www.goodreads.com/book/show/11721966-good-strategy-bad-strategy)* by Richard Rumelt. Conveniently, the author was also [on Lenny’s Podcast](https://www.lennysnewsletter.com/p/good-strategy-bad-strategy-richard) recently discussing strategy. Check it out!

While it’s definitely worth reading the whole book, a very short explanation of how to find your strategic advantage would be:

> **Identify a unique strength that your company/product has that aligns well with the current opportunities in your environment. Then leverage that strength in a way that others cannot easily replicate. Focus on what sets you apart and use it to create a sustainable competitive advantage.**

Our learners wanting to build a habit gives us an advantage over other ways they could spend their time. We built on that advantage, and now we have a sustainable lead over language learning apps and other learning apps, too.

For us, identifying our strategic advantage pointed us toward iterating on notifications and the [streak](https://support.duolingo.com/hc/en-us/articles/204980880-What-is-a-streak) system (which helps build the habit that our users want to build). When you find your strategic advantage, it will point you in the direction of product changes that should have outsize results for your business. First, read the Rumelt book mentioned above, figure out your strategic advantage, and then use it to home in on actionable product changes.

### 3. Copy first, then innovate

#### 🚲 Don’t reinvent the wheel when it comes to app mechanics

There are literally millions of mobile apps, and the biggest of them have billions of users. The larger ones have run A/B tests with a combined total of billions of treatments. Furthermore, the app marketplace itself could be seen as a [genetic algorithm](https://en.wikipedia.org/wiki/Genetic_algorithm) where winning concepts end up with more users, which means they inspire the next set of app developers, and so on.

This means that if you would like to use a concept that’s already widespread in the industry, your first approach should be to start with a system that closely resembles an existing successful one, but adapted to your app. A great example for Duolingo was our [leaderboards](https://www.lennysnewsletter.com/i/104096876/leaderboards-vector). Many apps, especially casual mobile games, have excellent leaderboards. They’ve spent tons of time refining them, so we rightly assumed we could find a version of these that was effective for us, too. Our current leaderboard system was our fourth iteration, but it blew away our prior attempts.

![Image from The secret to Duolingo’s exponential growth](https://substack-post-media.s3.amazonaws.com/public/images/e71358a6-f2ce-4fc2-997e-10d901dbfe72_1600x858.png)

We based it heavily on successful leaderboards in other games such as Gardenscapes, Golf Clash, Toon Blast, and more. The winning leaderboard for us (our fourth iteration) was an opt-out experience that put people in a new group of 30 each week, where a number of people get promoted or demoted to higher or lower leagues each week. The leagues automatically tuned people to be with others of a similar difficulty. Along with rewards for the top three places, this created several different interesting boundaries in the group of 30, where many users are always close to either gaining or losing something based on their position.

It took a ton of great product and design work to adapt these ideas to fit in Duolingo. Our leaderboard system was the most complicated feature we’d added to Duolingo, but we had to make sure that people could figure it out without pop-up explainers. But it was worth the effort: D1 retention went up 1%, D7 retention went up 2%, and D14 retention went up 3%. Additionally, the time people spent learning increased by around 17%, which was an absolutely amazing result for us—typically if our experiments can move a major metric by 1%, that’s a really good outcome.

These sorts of lessons can be applied to many other very common game mechanics that work well in some apps and platforms and poorly in others. For example: achievements, quests, badges, cosmetics. I even think Duolingo could often do better at following our own advice.

**Your first minimum viable product (MVP) version of an existing, widespread mechanic is not the time to get clever and innovative.**

#### 💡 When should we innovate?

There are two scenarios where I think you *should* try to be clever and start to push the envelope:

1. **When you’re already at the cutting edge.** Duolingo’s notifications are a good example of this scenario. We became well-known as leaders in notifications early on, and since then we’ve pushed boundaries by using a bandit algorithm, making UIs to let non-engineers run copy experiments, and creating a way to [send millions of notifications within seconds](https://blog.duolingo.com/super-bowl-commercial-2024/) of a button push, which have all been important wins. While there are still opportunities to pull in new things from the industry over time (like we did with adding emoji to notifications when others found it to be effective), it is important to continue pushing our advantage rather than waiting for others to do the innovation that we can copy. We’re on the cutting edge with our experimentation tooling, and our Experiments team is constantly trying things in our tooling where there isn’t a lot of prior art.

One analogous example I like to keep in mind here is early Netflix. Netflix put Blockbuster out of business with their mail-in DVD system, but then Netflix became a pioneer in an even more advanced delivery system (streaming) and successfully put their own mail-in market out of business. By making sure they were the continued innovators on delivery of home movies and TV series, they maintained the dominant position even through a massive pivot in the industry.

> #### **The bandit algorithm**
>
> Our quirky notifications are a hugely important lever for us, and one of our most successful iterations has been to add a bandit algorithm, which automatically scores various notifications to see how effective they are at bringing people back to Duolingo to do a lesson shortly after they are received.
>
> See this [blog post](https://blog.duolingo.com/hi-its-duo-the-ai-behind-the-meme/) and this [academic paper](https://research.duolingo.com/papers/yancey.kdd20.pdf) to geek out on more details.

2. **After launching a solid MVP based on best-in-class industry standards.** An MVP of our leaderboard system still took us months to design and implement—largely because our app is clean and simple, and leaderboards were complex. After that, we still tried out other aspects of popular leaderboards that were too advanced to make it into the MVP. Once we got to a point where we had either implemented—or at least experimented with and rejected—the major features of other leaderboards, it made sense to start exploring our own independent ideas. (One of our more impactful innovations there has been how we group people into batches, but the technical details are a good topic for a completely different type of post.)

### 4. 🦢 Notifications are [the goose](https://en.wikipedia.org/wiki/The_Goose_that_Laid_the_Golden_Eggs#Story_and_moral) that lays the golden eggs—don’t kill the goose

This won’t apply to all apps, but at Duolingo, notifications have been a source of continued small-to-medium wins year after year, with no obvious signs of slowing down.

1. **Modifying existing notifications and even (*****rarely*** **and** ***carefully*****) adding new, useful notifications has been a nearly infinite source of gains.** We’ve been improving notifications for years, and they still deliver consistent wins that affect a huge slice of the pie (see the next section for more on this). These experiments are golden eggs!
2. **The notification channel itself is the goose.** If we send notifications that users do not find interesting, that they don’t think are worth reading, or that cause them to unsubscribe, we will destroy the channel and kill the goose. There’s a story that we’ve heard from talking to people from Groupon: When they ran experiments that sent additional emails, every experiment showed positive metrics. So they sent more and more emails. Eventually, though, the channel started to rot and they had all sorts of problems—users would unsubscribe, emails would go to the spam folder and delivery rates dropped, and people just generally didn’t bother to read the emails anymore.

Some things we do at Duolingo to avoid killing the goose:

1. **We set a very high bar for how successful an** ***additional*** **notification has to be.** We’ve killed some notifications that were huge wins but weren’t big enough to justify the additional level of spamminess. Here are two concrete examples of when this happened and what we did instead:

1. We had an “XP Happy Hour” notification that told people to come and get five experience points for the next hour on Saturday. It was great for DAUs, but the efficiency per notification sent was much lower than we typically see for great notifications. So we iterated on the feature in a way that got similar DAU results without sending more notifications: if you show up on Saturday—at *any* point in the day—that begins your XP Happy Hour, and we show a screen that lets the user know this.
   2. There is a famous notification we send that says, “These notifications don’t seem to be working.” We send that seven days after your last session, and we legitimately stop sending practice reminders until you come back later. We ran a test to figure out how many days to send these before stopping. The more we sent, the more people came back, but this would spam users, which would likely reduce their long-term likelihood to respond to our notifications (and might cause them to uninstall, or disable notifications, in the very long term). We ended up charting the point where sending one additional notification was less incrementally effective than sending the previous day—this makes an “elbow” in the retention chart. It was right after seven days, so we cut the eighth day onward despite what shows up on the experiment report as lots of DAUs in the short term.
2. **When running an experiment for notifications, we look at leading indicators** we’ve identified as important. For Duolingo, those are the rate at which people disable notifications, or the efficiency of how many messages are sent per DAU gained. Even if the experiment is positive, if the rate of unsubscribing is higher than control or if the efficiency is low, then that’s something that should be looked into and likely could prevent launching.

To make this concrete, an experiment that added a Streak Saver notification for the night after you used a Streak Freeze resulted in one DAU for every 3.6 notifications, which is a *great* ratio. We consider one DAU for about 30 notifications to be quite good. The XP Happy Hour notification mentioned above, which we eventually removed due to its inefficiency, was only giving one DAU for about 130 notifications.
3. **We use [notification channels](https://developer.android.com/training/notify-user/channels) on Android for any new notification type.** This lets our learners disable a specific type of notification they don’t like without removing their access to notifications they find valuable.
4. **We create a setting in the app to disable a new notification type.** Notification channels are a distinction in the phone’s OS if someone long-presses on your notification or looks at the notification settings for your app, but it is *also* important for customization to be easy inside your app itself. We do this early, even in the initial experiment to try out the notification type, if possible.
5. **We make it easier to make new settings for notifications.** For the previous point to work well, the engineering lift of adding a new channel and notification setting should be trivial.
6. **We aim for a general frequency cap across all notifications.** This is important if you have an extremely mature app and can get to this point. At Duolingo we even dream about creating a way to prioritize among competing notifications, and we regularly take baby steps toward making it a reality, but we aren’t there yet.

### 5. 🍕 Consider the whole pie (total impact) when prioritizing work

When calculating the potential ROI of an experiment, keep an eye on the size of the “pie”: how much of the user base can actually benefit from the change if it’s successful and is ported everywhere that it can be ported. The total size of your impact will be affected not just by the percentage improvement from your experiment but also by what percentage of users actually get to see the improvement. This is basically the product version of [Amdahl’s law](https://en.wikipedia.org/wiki/Amdahl%27s_law).

For example, some features may be encountered by every user of the app (e.g. the loading screen) and others may be buried deep in several menus and rarely seen (e.g. the “search for friends” screen). Similarly, there may be features that are prominent in the app but only affect certain types of users (paid users, users in certain UI languages, etc.).

Here are two more examples—improving the Streak Session End screen vs. the Streak Drawer:

![Image from The secret to Duolingo’s exponential growth](https://substack-post-media.s3.amazonaws.com/public/images/d70d0a2e-dc62-4d8c-8277-4a3ab11f9ba4_1530x1048.png)

At Duolingo, if we changed the icon that gets sent with all our notifications and increased DAUs by 0.1% on that experiment, that’s likely to be more impactful than increasing the DAUs by 30% only for users of Korean [stories](https://support.duolingo.com/hc/en-us/articles/360035934072-What-are-Duolingo-Stories) (0.007% of DAUs use stories in Korean on a given day). About 50 times as impactful, if I did the math right—and that’s assuming you ported the Korean stories experiment to all three clients (web, Android, and iOS).

So it’s worth running a calculation anytime you notice yourself making an experiment that is only relevant for some clients, some language directions, or in a feature (e.g. stories, audio lessons, etc.) that isn’t applicable to all users of your app. Related: If something is highly successful (e.g. stories are fantastic for retention and time-spent-learning) and there are actions we can take to smooth the ability to roll it out more widely, that’s great for a growth team to work on—but still run the numbers to see how much of the pie you can affect with that work.

> #### **Corollary: Opt-in vs. opt-out**
>
> Experiences that are opt-in will automatically have a much smaller slice of the pie. For example, if you could convince 33% of users to opt in to a feature, now you need to have that feature result in a 9% gain just to be as effective as an opt-out feature that gives a 3% gain. If you had to choose to show up in Duolingo’s leaderboards, for example, a huge percentage of people would never even find the feature. Many more might feel reluctant to try it (without having ever experienced it to know what it’s like), and the feature likely would be way less impactful.
>
> When designing new features, it is often worth the time to make sure that the experience can be good for nearly all users (so that it can be opt-out) rather than making a potentially more complicated feature that might seem better or more advanced for those who use it but that would only be appropriate to be opt-in.

To recap this “whole pie” point: **When you’re comparing the expected impact of potential feature changes, remember to factor in how often those features will be seen.** This can maximize your impact so that instead of focusing on 1% improvement on 1% of users, you can focus on 1% improvement on 100% of users.

## Conclusion

The principles above are some of the lessons we’ve learned from thousands of experiments in growth at Duolingo over the past several years. If you think of how to apply them in your own organization, hopefully they can help you to accelerate and maintain strong user growth as well!

Duolingo still has plenty to learn and many interesting challenges ahead. We are going to be focusing on growing more in the English-learner market. English learners make up about 80% of language learners globally but only about 45% of Duolingo learners. Another exciting change is that the day before this post goes live, I’ll be shifting from being a co-lead of the Growth Area to taking on a new role at Duolingo as the head of Product Engineering. I’ll be overseeing five areas (one of which is still Growth) and am really excited to see all the new things that the Growth Area can accomplish.

### ***Acknowledgments***

A huge thank-you to everyone who worked on growth with me for the past five-plus years, especially the co-leads of the Growth Area, Liz Nagler (Product) and Achim Spelten (Marketing), as well as their predecessors, Albert Cheng and Manu Orssaud, who created the Growth Area with me.

Thank you to all of the team leads and members of the Growth Area since it was created. Your results have been world-class.

Thanks to Jorge Mazal, who was not only a [Lenny’s Newsletter trailblazer](https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth) but who also brought us the idea of the growth model, and to [Erin Gustafson, who built it](https://blog.duolingo.com/growth-model-duolingo/).

And finally, thanks to [CoPilot](https://mycopilot.com/) and [WeWard](https://wewardapp.com/) for letting me be an advisor while you both tackle things in a very Duolingo-style approach of making something that’s good for you be fun and engaging.

*Thank you, Sean! For more from Sean, follow him on [LinkedIn](https://www.linkedin.com/in/seancolombo/).*

*Have a fulfilling and productive week 🙏*

## **🔥 Featured open role: Product Manager of Collaboration @ Notion**

We recently partnered with Notion to help them scale their PM team. [One role that’s particularly interesting to me](https://boards.greenhouse.io/notion/jobs/5926606003) is an opportunity to own the asynchronous collaboration experience within Notion. If you’d like to get referred directly for this role, follow this button:

[Apply to Notion](https://lennys-jobs.pallet.com/onboard/v3/0153c44c-b8c4-44b6-ba42-78fbcf220033/get-referred)

*If you’re hiring and want to work with us, [apply here](https://airtable.com/apprGaxWWPYU0068E/shr2WFo5UqJjA5dQ8). Our team will reach out if we think it’s a good fit. Note, we primarily work with fast-growing U.S.-based startups.*

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
