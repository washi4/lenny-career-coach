---
title: "How Snowflake builds product"
subtitle: "An interview with Jeff Hollan, Director of Product for Snowflake’s Developer Platform and Ecosystem"
date: "2023-07-11"
type: "newsletter"
tags: ["leadership", "design", "engineering", "organization", "strategy", "newsletter"]
word_count: 3842
---

Snowflake is the type of business every founder dreams of building. Nine years in, they’re generating $2B in revenue/year, with a net revenue retention of 150%, a market cap of $50B, growing 70% YoY (and 100% YoY the year before), and an NPS of 72. When they went public 2.5 years ago, they were in the upper percentiles of essentially every important business metric.

![Image from How Snowflake builds product](https://substack-post-media.s3.amazonaws.com/public/images/856a6db5-54cc-4005-9bc2-f0b780a662ca_1654x999.jpeg)

This type of success doesn’t just happen, so I’ve been hankering to get an inside peek at how Snowflake builds product. They’re by far the biggest company I’ve chronicled in this series, so I approached this interview a bit differently. Instead of going to the CPO, I interviewed someone closer to the day-to-day work of the product team: [Jeff Hollan](https://www.linkedin.com/in/jeffhollan/), Director of Product for Snowflake’s Developer Platform and Ecosystem. A huge thank-you to Jeff for spending time with me and sharing so much about what it’s really like to build product at Snowflake.

**Here’s what stood out to me most about Snowflake’s approach to product:**

1. How they align the entire company around 6 to 10 “big boulders” each year
2. How involved their leadership team is in product reviews
3. Their zero tolerance for organizational politics
4. Their hiring team’s focus on finding “drivers” instead of “passengers”
5. How the data science organization is embedded in the product org
6. Their “Snowvation” hackathon weeks ☃️ and [Snowflake Summit](https://www.snowflake.com/summit/)’s—one just wrapped up last week with over 12,000 attendees 🤯

*For more from Jeff, follow him on [LinkedIn](https://www.linkedin.com/in/jeffhollan/) and [Twitter](https://twitter.com/jeffhollan), and for more on Snowflake, check out <https://www.snowflake.com/>. And for more on how the best product teams build product, don’t miss [Figma](https://www.lennysnewsletter.com/p/how-figma-builds-product), [Notion](https://www.lennysnewsletter.com/p/how-notion-builds-product), [Miro](https://www.lennysnewsletter.com/p/how-miro-builds-product), [Ramp](https://www.lennysnewsletter.com/p/how-ramp-builds-product), [Coda](https://www.lennysnewsletter.com/p/how-coda-builds-product), and [Duolingo](https://www.lennysnewsletter.com/p/how-duolingo-builds-product).*

# How Snowflake builds product

![Image from How Snowflake builds product](https://substack-post-media.s3.amazonaws.com/public/images/7c0bbcd0-1829-4996-b949-d2a19aa4fd14_1008x780.jpeg)

### **1. How far out do you plan in detail, and how has that evolved over the years?**

We spend a good bit of time on planning, and planning frequently, with both quarterly and annual planning cycles. I sometimes joke that if it’s been more than six weeks without some planning exercise, my email must not be working. 😉 Planning for us is all about making sure we’re aligned on our goals and priorities—especially as our teams continue to grow.

At the start of every year, Snowflake’s leadership team identifies 6 to 10 “big boulders” for us to focus on as a company. For example, in FY ’24, two of our boulders are “[Snowflake application development](https://www.snowflake.com/en/data-cloud/workloads/applications/)” and “[workload and cost optimizations](https://www.snowflake.com/blog/commitment-to-improving-economics-for-customers/).” From there, each product area (e.g. data engineering, storage, etc.) creates an annual plan that maps to these boulders. The annual plans are generally structured as a six-pager that captures the overall state of the product, goals, measurable success indicators over the coming fiscal year, and a set of customer scenarios that we focus on in relation to the big boulders. Each of the individual product area plans is reviewed by the area product leader, area engineering leader, and area architects. Snowflake’s founders, alongside our product and engineering VPs, also read and review each document and add comments and feedback within. It’s a huge undertaking, but it helps us capture potential scenario gaps and progress our product vision as one unified team. As for timing, we generally start our annual planning around October, with Snowflake’s fiscal year kicking off in February.

Why plan so far in advance? Aside from building in buffer time to prepare and review, this also helps us make sure that all areas of the business are aligned on a single message and vision before the fiscal year kicks off in full force. Product directors like me have reviews with sales and marketing counterparts to align on product plans, and from there, we jointly create our sales and marketing plays in time for the new year.

In addition to annual plans, we do quarterly planning to get more specific about the customer deliverables and work we need to prioritize over three-month periods. The month before each quarter, we outline what customer scenarios we plan to focus on and map them back to those same big boulders discussed earlier. While we use metrics and data to validate adoption and business impact, our quarterly plans are very focused on customer scenarios to help ensure that product investments are providing clear impact around jobs-to-be-done, and avoid each product focusing only on area-specific features or metrics.

If a prioritization decision ever has to be made, we consider customer value, i.e. how we can make our customer experience better. I know this may sound like the “classic PM answer,” but it’s really ingrained in all of us at Snowflake. We have [eight core values](https://www.snowflake.com/company/), and the first value is “Put Customers First.” Snowflake’s chairman and CEO, Frank Slootman, shared in a recent company all-hands that this is the first value for a reason.

I will say, one of the harder challenges in product isn’t having ideas of what we *could* do for our customers, it’s being clear on what we *won’t*be focusing on right now. We want to avoid being “an inch deep and a mile wide,” as Frank loves to caution. Instead, we really home in on customer value, and prioritize putting our customers’ needs first to determine what products and features are most important.

![Image from How Snowflake builds product](https://substack-post-media.s3.amazonaws.com/public/images/bfd39a56-3ada-42c7-b2f1-e1ca6b1c1068_1600x1140.png)![Image from How Snowflake builds product](https://substack-post-media.s3.amazonaws.com/public/images/6933920e-d2d7-4422-8558-ef4613ed8140_676x402.png)

As one can imagine, a big part of quarterly planning is coordinating work across different teams. If there’s ever a question about competing priorities, we flag them and review them in our quarterly planning roundtable the last week of every planning cycle. Anyone is welcome to add an item to the agenda for this roundtable, the purpose of which is to make sure we’re aligned on the relative priority of investments. It’s led by “BTCG,” the common acronym you’ll hear in the Snowflake halls for **B**enoit Dageville and **T**hierry Cruanes (Snowflake co-founders), **C**hristian Kleinerman (SVP of Product), and **G**reg Czajkowski (SVP of Engineering). This is where any questions around competing priorities can be adequately addressed at the right levels across the company. Teams and BTCG have an open discussion and help resolve priority mismatch, and these meetings are typically very open and conversational. One reason this process works so well is that by the time we get to the roundtable, teams are already roughly aligned on company priorities based on the big boulders and annual plans, and are genuinely looking to find the right areas to focus on in order to bring customer experiences to the fore.

### **2. Do you use OKRs in some form?**

Every team is accountable for providing the best experiences for our users, identifying what success looks like, and determining what metrics are needed to get there. There isn’t a prescribed framework, but having metrics for success is a must. Each product area will take part in a QBR (quarterly business review), where they report key indicators and metrics around their area to leaders across product, marketing, sales, and support.

One unique element of Snowflake is that we have a data science organization embedded into our product organization, so every product area has a dedicated data scientist integrated with their team to help surface insights from the data—using Snowflake, of course! Data is in our DNA, and we take a data-driven approach to how we build products and track progress along the way. Everyone is encouraged to dig into the data at Snowflake, and we use this as our primary measure for our progress against strategy.

While I can’t share the data itself, here’s just a feel for the recent [Snowflake worksheets](https://docs.snowflake.com/en/user-guide/ui-snowsight-worksheets-gs) (worksheets provide a powerful and versatile method for running SQL queries or Python code, as well as performing other Snowflake data loading, definition, and manipulation tasks) that I personally have been using within the past months where I explore and understand the data for my product areas.

![Image from How Snowflake builds product](https://substack-post-media.s3.amazonaws.com/public/images/9f4a021f-4ec2-4dc9-9fb3-b492246ab14d_1140x1340.png)

The focus on and attention to data is something we see led from the top down as well. One of the products I help lead right now is called [Snowpark](https://www.snowflake.com/en/data-cloud/snowpark/), which enables developers to build in their language of choice and run code in Snowflake. I quickly got accustomed to Slack messages from Christian Kleinerman asking me questions on changes or trends on the dashboards. I don’t mean monthly changes; I’m talking about things that happened 24 to 48 hours ago—showing just how ingrained everyone is in looking at the data and our dashboards. Data plays a huge role in how we stay connected with our products and how we ensure the best possible outcomes for customers.

To measure success, we also look at various metrics like product revenue, net revenue retention rate, impressions, active usage, engagement, customer satisfaction/Net Promoter Score (NPS), and more. Snowflake even [publishes its annual NPS report](https://www.snowflake.com/blog/customer-experience-report-2022/) externally every year.

### **3. How do your product/design review meetings work?**

We use product, engineering, and design reviews to ensure consistency across products and that we’re sharing information, getting feedback, and making timely decisions. A few product reviews happen each week, and anyone in the product organization is welcome to attend any topic they are interested in. Any product manager can add a review to the schedule backlog, which will be queued up for the next available slot. Generally each product area has about one product review a month around some aspect of the product, like a new feature proposal, business update, strategy update, etc.

A week before a product review, Snowflake product managers share a six-page document for the topic with meeting attendees that outlines the customer problem, proposed solution, risks, and other key data points around a specific product investment. There is no template for the product review document, but they all typically include an executive summary, goals and non-goals, background information, a problem statement, key tenets (underlying product principles), use cases, key requirements, risks, a timeline, and lastly an FAQ section.

The goal of a product review isn’t to “sell” the leadership team on a new investment but to detail customer requirements, align on relative business priorities, and provide a clear direction of how to address these challenges. Attendees of these meetings (including product and engineering leadership, architects, directors, and relevant stakeholders) all review and comment on the document prior to the meetings. There are some amazing discussions and conversations that happen in the comments section of review documents. Understandably, most of these comments I can’t share publicly, but here’s just one example of a small interaction I had shortly after sharing a product review document with the two founders of Snowflake. They are engaged and eager to contribute toward the product goals. 🙂

![Image from How Snowflake builds product](https://substack-post-media.s3.amazonaws.com/public/images/5593824b-48b8-442a-96f4-7b57b3d49d7a_852x522.png)

One of the things that impressed me the most when joining Snowflake was how involved the leadership team is in these reviews. Snowflake’s co-founders Benoit Dageville and Thierry Cruanes attend each review, alongside Christian and Greg. They each actively comment and join discussions on each document. Every product manager at Snowflake can relate to the excited feeling you get when you see your co-founders commenting and engaging on a document you’ve worked on. And while they are invested and involved, unless there is a fundamental misalignment, decisions are generally left to the combination of the product, engineering, and architect leaders for their respective areas of expertise.

![Image from How Snowflake builds product](https://substack-post-media.s3.amazonaws.com/public/images/a0095d15-66fe-46f3-b7b5-e5368c40ed0e_650x433.png)

### **4. How are your teams organized? Has this changed over the years?**

Teams at Snowflake are organized more around customer workloads (various programs or applications running in the Data Cloud), rather than specific features or feature areas. To date, Snowflake operates in eight different workloads: applications, collaboration, cybersecurity, data engineering, data lake, data science and ML, data warehouse, and Unistore.

Whenever people ask me what it’s like working in the product organization at Snowflake, I often mention that no team can operate in a silo. Every team needs to collaborate and work with other teams to help build delightful and intuitive customer experiences. Over the years, Snowflake has experienced rapid growth—we now have teams that span more than 30 offices worldwide—and many folks have only been at Snowflake for one or two years. Having the teams structured around critical customer workloads has scaled with the company, and enables us to continually grow and evolve to meet the global needs of our users.

### **5. What’s your tool stack for your product teams?**

We use a lot of tools across our product teams, but Google Docs is the tool I spend the most time in. Having discussions, learnings, and designs captured in documents makes them more shareable and discoverable as we work to stay in sync as a global company. When the [Streamlit team](https://streamlit.io/) ([acquired](https://www.snowflake.com/blog/snowflake-to-acquire-streamlit/) by Snowflake in March 2022) joined Snowflake, they were heavy users of Notion, which they have now effectively spread across many product teams. I’ve found Notion is a nice complementary tool for other notes, and it helps our team capture customer conversations, hypotheses and research, and product updates with a very organized hierarchy. The other tool you’ll see used broadly across teams is Figma, for commenting and helping design UI and user journeys. And of course, for data and data analysis, we do everything with Snowflake.

Most team communications happen in Slack, with public channels for each feature and workload where stakeholders across marketing, sales, support, and product can all collaborate. As for brainstorming, a good portion of this still happens on good old-fashioned whiteboards in conference rooms.

### 6. What percentage of ideas come top-down, and what percentage come bottom-up, roughly?

From my experience, I’d say 85% of ideas are bottom-up, and 15% top-down. Some examples of specific top-down ideas include those around compliance, security, and customer promises that are company-wide. Most items originate from a product manager recognizing a customer pain point or opportunity, and then taking that item forward to drive customer impact.

A big source of the bottom-up ideas are the big boulder themes I mentioned above. But the big boulders are intentionally high level—often it’s just a paragraph or two intended to ensure we’re focusing our efforts on a few themes, and are all aligned for mutual success. For example, collectively focusing efforts on cost optimizations as one of the boulders I referenced. I like to think of these big boulders as our lighthouse. They help provide perspective and general direction, but at the end of the day there’s a lot of judgment and different ways to navigate the actual ship. The ship steering is left to the product manager.

### **7. What are some fun or unique traditions or rituals on your product team?**

My personal favorite is “Cheesy Thursdays.” I work out of Snowflake’s Bellevue office near Seattle, and it is a tradition that every Thursday we have “cheesy,” which means that the office offers cheese, wine, and snacks from 4 to 6 p.m. while we all have a chance to catch up and socialize. This tradition also takes place at various Snowflake locations across the globe. It’s simple, but a great way to chat with and get to know other employees on a more personal level. Not to mention, the food is amazing!

![Image from How Snowflake builds product](https://substack-post-media.s3.amazonaws.com/public/images/a1d7627c-27a7-4758-b339-75d35e6d5abe_1116x618.png)

Another favorite tradition for Snowflake’s product teams is the “Snowvation” hackathon week—we love our snow puns ❄️. This is a huge weeklong event at Snowflake across all of product and engineering.

![Image from How Snowflake builds product](https://substack-post-media.s3.amazonaws.com/public/images/125b9808-fd02-4a64-ac33-62e88951e9a4_1600x905.png)

Teams form to go solve and build something interesting around anything they are passionate about, all using Snowflake. Have a great idea for a new Snowflake feature that could delight our users? Want to try out some new Snowflake features combined with your other favorite tools and technologies? Whatever it is, you can build it with your team. It doesn’t have to be fully fleshed out or complete, but it’s a great chance to test, experiment, and explore. The week culminates in presentations to all participants and our “esteemed judges,” including our co-founders. It’s always amazing to see what innovative solutions teams come up with over the course of a week, and the demos and presentations get everyone excited. A good amount of the features we announce at events like our annual [Snowflake Summit](https://www.snowflake.com/summit/) originated as a Snowvation project idea.

![Image from How Snowflake builds product](https://substack-post-media.s3.amazonaws.com/public/images/b5f28ae2-ce5e-4182-af92-e535fcf9f213_1600x1200.png)

### **8. What would you say is unique or core to your product team’s philosophy for building product?**

When building products or thinking about new capabilities, it’s important for everyone in the product organization to remember that Snowflake is one single, unified platform. This is our core philosophy and guide when it comes to development—even as we continue to evolve in terms of Snowflake’s capabilities and use cases, Snowflake’s core platform is the underlying foundation.

When we release a new product function, instead of passing the integration problem on to our thousands of customers to solve in thousands of different ways, we take time on the front end to solve it for *all* customers, so they don’t have to. As our product offerings continue to evolve and become more complex, we prioritize end user simplicity and make sure that we maintain an “it just works!” sentiment. We know how much our customers value quality and the performance of every feature as a component of Snowflake’s single product, so we have *no* tolerance when it comes to compromising on any aspect. This also ties back to our customer-first mentality, and ensures that we maintain a simple, unified global experience across clouds.

While this is easy to say, it’s important to note that it takes significant time, effort, and energy. But we settle for nothing less. This tenet even permeates the culture of the product organization: there’s no tolerance for organizational politics. There is no “what’s best for my team” or “what’s best for your team.” It’s all about “what’s best for Snowflake and our customers.” Every product manager is treated as and expected to be a leader and owner, regardless of their title or team. We’ve had many individuals be surprised to find themselves in product reviews and leading discussions with our senior leadership when they’re just one or two years into their career. It’s incredible what an organization of talented people can achieve when they have a clear north star of Snowflake’s products and customers at the forefront, and we’re only getting started. That’s a big part of what gets me excited to go to work every day.

### 9. **You build one of the most beloved and successful products out there. What would you say is unique or central to your approach to product that leads to such a great product?**

There are two core elements to our approach that on the surface may feel obvious, but are imperative to providing our customers the best possible product with the Snowflake platform: performance and simplicity.

Performance is a non-negotiable in everything we build, and we continue to invest and optimize to ensure we remain the most performant Data Cloud on the planet. We have and will hold products back from shipping until they can meet our high expectations around performance.

Simplicity and providing more functionality that doesn’t break our “single product and platform” vision is the other critical core approach. Christian recently shared a truth of this principle: “simplicity makes our lives harder” as product managers. However, it is rewarding and a large part of why our customers love Snowflake. We take the extra cycles, pain, and iterations to make sure that every new capability is simple for users, and ultimately helps them on their missions of mobilizing their data.

### **10. Similar to the above, I assume much of your success has been thanks to hiring well and keeping a very high bar. In your product hires, what do you most look for (that maybe others don’t), and broadly, what does your interview process look like?**

We strive to keep a high bar and are tenacious about finding “drivers” instead of “passengers,” as Frank puts it. We look for people who get satisfaction from making things happen and feel a strong sense of ownership. I’ve found that many of the best candidates are already driving impact and being successful in their current roles, and we look for opportunities for them to bring those skills and apply them to Snowflake’s mission and vision.

For the interview process, there are a couple of things that Snowflake does that are unique. Almost every product interview starts with a presentation from the candidate to the interview team and leaders of that area. The topic can be anything the candidate wants to share—often it’s about a product they have delivered—and provides insight into how they communicate, as well as what they are passionate about and proud of. Throughout the interview process, we evaluate candidates across each of Snowflake’s values. Finally, before moving ahead with an offer, we typically tap into our networks to get a few references on the candidate to better understand from others what their impact and strengths are. I’m incredibly impressed with the caliber of people I get to work with every day, and believe that Snowflake’s thorough process of evaluating candidates based on the company’s values, alongside their adaptability, humbleness, and desire to learn has proven successful in driving Snowflake’s culture as we continue to scale.

*Thanks, Jeff! For more, follow Jeff on [LinkedIn](https://www.linkedin.com/in/jeffhollan/) and [Twitter](https://twitter.com/jeffhollan).*

*Have a fulfilling and productive week 🙏*

**If you find this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. Check out [group discounts](https://www.lennysnewsletter.com/subscribe?group=true) and [gift options](https://www.lennysnewsletter.com/subscribe?gift=true).**

Sincerely,

Lenny 👋
