---
title: "Five steps to starting your product-led growth motion, part 2"
subtitle: "A guide to setting up your PLG infrastructure, tool stack, and team"
date: "2023-01-17"
type: "newsletter"
tags: ["growth", "leadership", "b2b", "design", "engineering", "analytics"]
word_count: 2726
---

![Image from Five steps to starting your product-led growth motion, part 2](https://substack-post-media.s3.amazonaws.com/public/images/9a771aa5-d4c1-410b-a496-6cdcf340ff69_4000x2000.png)

If you’re just joining us, make sure to read [part one of this series](https://www.lennysnewsletter.com/p/five-steps-to-starting-your-plg-motion), where I cover the first three steps of starting your PLG motion:

- **[Step 1: Map your funnel](https://www.lennysnewsletter.com/i/89869825/step-map-your-funnel)**
- **[Step 2: Pick a starting point](https://www.lennysnewsletter.com/i/89869825/step-pick-a-starting-point)**
- **[Step 3: Anticipate the most common pitfalls](https://www.lennysnewsletter.com/i/89869825/step-anticipate-the-most-common-pitfalls)**

![Image from Five steps to starting your product-led growth motion, part 2](https://substack-post-media.s3.amazonaws.com/public/images/d84b759b-51d4-4190-902d-1e6b8a6938f7_4000x2000.png)

Now let’s continue with step 4.

*You can find*  *on [LinkedIn](https://www.linkedin.com/in/hilaqu/), [Twitter](https://twitter.com/HilaQu), and [Substack](https://hilaqu.substack.com/). Make sure to check out the Reforge courses she teaches, [Advanced Growth Strategy](https://www.reforge.com/programs/advanced-growth-strategy) and [Experimentation & Testing](https://www.reforge.com/programs/experimentation-testing), and sign up [here](https://www.reforge.com/programs/product-led-growth) to get updates on Reforge’s new PLG program, which launches in fall 2023.*

## Step 4. Set up the infrastructure

PLG tooling is a fast-evolving space. At a high level, there are two categories to consider:

1. **PLG infrastructure**
2. **PLG tool stack**

The infrastructure tools are must-haves for running a PLG motion, while the tool stack includes other optional solutions that make PLG easier.

### 1. PLG infrastructure

All PLG companies need three important pieces of infrastructure to enable the motion:

**a. Data infrastructure**

In a way, product-led growth is data-led growth. You give away your free product in exchange for distribution to a large group of users, plus the insights into how they use your product. Without data, you are flying blind. You may be getting free users, but you have no idea how they are using your product and how to activate and convert them.

![Image from Five steps to starting your product-led growth motion, part 2](https://substack-post-media.s3.amazonaws.com/public/images/8df73d3e-2bd4-43ab-aafe-e6464280b042_3894x952.png)

The first component of your data infrastructure is **product analytics tools and data instrumentation**.Tools such as Amplitude and Mixpanel are commonly used here, but, as the saying goes, “garbage in, garbage out.” Companies need to dedicate engineering resources to instrument tracking properly. Many B2B companies are significantly lacking in product analytics—watching product usage closely is less important when you sell via human touch—but without a strong foundation of product analytics, PLG will never work.

At GitLab, to address this gap, we set up a telemetry team with a dedicated PM and engineers, responsible for creating data collection frameworks and policies and coordinating all product teams to implement tracking, as well as navigating customer and community communication.

The second component is a **customer 360 database**.You want to connect various data sources, such as product usage, marketing campaigns (e.g. Marketo, HubSpot), sales activities (e.g. Salesforce), and third-party firmographic data (e.g. ZoomInfo, Clearbit) into a central database so that you can answer complex questions like “Which features do users A and B from company X use, how many emails did we send them, and is our sales team engaging with them?”

Then you can also ingest relevant data back into the tools above to empower smart actions—for example, sending feature usage data to Salesforce so that your sales rep can talk about the features the prospect used in a sales call, or to HubSpot to trigger targeted emails based on feature usage.

To achieve this, you need a centralized database and a two-way data pipeline to and from your marketing/sales/product analytics tools. Companies usually achieve this through a combination of homegrown systems and third-party tools (e.g. data warehouse, CDP, ETL, reverse ETL). Follow these links for three examples of PLG data infra built by teams at [Netlify](https://www.netlify.com/blog/2021/04/08/how-the-netlify-data-team-uses-census-for-operational-analytics/), [Mixpanel](https://mixpanel.com/blog/data-analytics-product-led-growth/), and [Unity](https://openviewpartners.com/blog/building-a-plg-data-product-analytics-stack-at-unity/).

![Netlify Data Team's data pipeline](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/e295b179-c021-47f3-89d9-227ffbd01915_960x720.png)

An emerging category of product-led sales/PQL tools—such as [Pocus](https://www.pocus.com/), [Endgame](https://www.endgame.io/), [Toplyne](https://www.toplyne.io/), and [Pace](https://www.paceapp.com/)—can also help connect multiple data sources, identify PQLs, and send them to CRM platforms like Salesforce.

**b. Experimentation platform**

Once you havedata infra in place, the next important piece of PLG infrastructure is a product experimentation platform. Many companies go through a journey like this:

![Image from Five steps to starting your product-led growth motion, part 2](https://substack-post-media.s3.amazonaws.com/public/images/2a6c43cf-1b03-4acf-9598-261c71cdfe0f_4000x860.png)

The most common mistake I see is that companies skip buying and jump right into building. In other words, they bypass the option of using a third-party experimentation tool, often because the engineering and product teams feel like they can build anything.

But building an experimentation platform requires not only engineering resources but also data science and statistical expertise. The time and labor it takes to build and maintain a homegrown platform properly is not a small commitment, so I strongly suggest that smaller teams try not to reinvent the wheel, and rather look into tools such as [Optimizely](https://www.optimizely.com/), [VWO](https://vwo.com/), and [Eppo](https://www.geteppo.com/).

**c. Lifecycle marketing tools**

Many SaaS products that originated from sales-led motions use Marketo or HubSpot as their email marketing tools. In this context, emails are primarily leveraged as a channel to nurture leads and generate MQLs.

For a PLG product, however, you’ll leverage channels like email, in-app messages, push notifications, and SMS to drive product usage and user engagement—so lifecycle marketing tools such as Customer.io and Braze are commonly used to trigger the right message to the right user at the right time.

![Image from Five steps to starting your product-led growth motion, part 2](https://substack-post-media.s3.amazonaws.com/public/images/262fb461-cd60-48f0-9eb8-099af3545e1f_2358x1474.png)

### 2. PLG tool stack

Once you have the critical PLG infrastructure in place, you’ll find that there are also many specialized tools you can leverage in specific focus areas.

Below are some commonly used PLG tool categories. As a disclaimer: I haven’t used all of them personally, and I stumbled upon many tools through extensive reading and research with other PLG experts. My intention is not to recommend specific tools but rather to highlight some tool categories and examples that can help you solve specific PLG problems.

![Image from Five steps to starting your product-led growth motion, part 2](https://substack-post-media.s3.amazonaws.com/public/images/92ca20f6-5348-47e3-a5f4-65b1dbfc7c10_2642x2000.png)

**🔑 Takeaway:** If you want to launch a PLG motion, data infrastructure is an absolute must. You need to be willing to make the investment to build it out. Once you have it in place, implement an experimentation platform and lifecycle marketing tools to test things out and move the needle. From there, adopt pieces from the PLG tool stack as needed to solve your most pressing problems more efficiently.

## Step 5. Build your team

If you are serious about your PLG motion, you will need to have a dedicated team working on it. But, importantly, there is no “standard” PLG team setup that works for all companies. And even within a company, the ideal structure will change over time too.

### **1. Beginning phase**

When you start, your main goal is to prove that a growth team and a PLG motion is a good fit for the business. There are two common setups:

- **A dedicated growth team:** You assemble a small PLG team by hiring a growth PM, or reassigning an existing PM to growth, and adding supporting roles such as analyst, designer, and engineers. You can assign the team a KPI, and this team can get started with many in-product PLG experiments in signup/trial, activation and onboarding, and self-service purchase and pricing pages, as well as building data and experimentation foundations. Many companies, including GitLab, start this way.
- **A cross-functional tiger team:** You can also start by pulling together existing team members from product, marketing, sales, and data (with support resources in design and engineering). These types of tiger teams are best if you need to tackle larger PLG initiatives that require cross-functional collaboration, for example, launching a freemium product, opening a free trial to everyone, or setting up PQL from scratch (which requires not only product changes but also workflow changes and cross-functional collaboration). For example, MongoDB’s PLG exploration started this way and eventually evolved into a new SaaS freemium offering CloudAtlas.

### **2. Growing phase**

If the initial investment and experiment prove to be successful, it will be time to grow the PLG team into a more formal team in the org chart.

A typical PLG organization includes a dedicated product growth team, plus dedicated PLG counterparts in the sales and marketing orgs. Most PLG-native companies, such as Airtable and Synk, use this structure. This setup is most common because the growth team will operate similarly to other product teams. It makes sense for the head of growth to report to a CPO. But the growth team also needs to work closely with sales and marketing, with KPIs aligned with the broader GTM organization.

I’d also like to point out that the “Head of Product-Led Sales” is the least developed role in the PLG org. This [job posting](https://www.linkedin.com/jobs/view/head-of-product-led-sales-at-canva-3066885612/) from Canva is probably the most specific version of it. But in reality, it is common that the head of SMB/self-service/online sales, or a sales manager, is assigned to collaborate with growth product and marketing teams.

![Image from Five steps to starting your product-led growth motion, part 2](https://substack-post-media.s3.amazonaws.com/public/images/b54374d5-67a7-41bb-90cc-45989457278d_4000x1318.png)

Sometimes you may see a head of growth reporting to a CRO, or head of GTM. In this setup, the head of growth acts more like a general manager (GM) for the self-service product line. They usually own self-service ARR as a KPI, which adds up to the overall ARR the sales org is responsible for. They need to be able to drive both marketing and growth product teams so they can control the entire PLG self-service funnel.

The benefit of this model is that it minimizes the potential conflict between the growth team and the sales org, because the growth team is not taking away revenue/quotas/commissions from the sales team, and the CRO is incentivized to drive the highest ARR at the lowest cost. This model is more common among B2B companies with established sales and GTM orgs, such as GitHub and Cloudflare.

![Image from Five steps to starting your product-led growth motion, part 2](https://substack-post-media.s3.amazonaws.com/public/images/ee8a0950-5e41-4079-9a9b-c9add9367672_4000x1490.png)

### **3. Scaling phase**

Over time, the growth team will become bigger and more established. Under a head of growth, there might be subteams focused on different parts of the funnel, such as acquisition, activation, conversion, and retention, and on infrastructure needed such as platform and telemetry.

Again, there is no standard setup, as the subteams should be centered around the biggest levers and gaps in your growth model.

![Image from Five steps to starting your product-led growth motion, part 2](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/0823fb1c-5733-44ce-8201-b7d7da177116_4000x2000.png)

Within each subteam, there will be a PM, plus an analyst, engineer, and designer—the essential roles of a growth squad. But for B2B growth teams, I have also seen companies add relevant team members from marketing and sales/customer success to specific squads, to make the team more effective.

![Image from Five steps to starting your product-led growth motion, part 2](https://substack-post-media.s3.amazonaws.com/public/images/4e6ef4a9-05f2-47e9-8122-d51e448034fb_4000x1092.png)

**🔑 Takeaway:** You need a dedicated team to work on PLG. But instead of building out a full organization, start small with a growth product team or a cross-functional tiger team. Then, once PLG is proven to be a good fit, invest more. Heads of growth most commonly report to product leaders, but sometimes they may roll up into sales/GTM organizations to better align incentives and KPIs.

## **In summary**

If you are considering adding a PLG motion for your B2B product, follow these 5 steps to guide you by answering these critical questions:

1. **Map your funnel:** How should you construct your PLG funnel differently from your sales-led funnel?
2. **Pick a starting point:**Among acquisition, activation, and conversion, where should you focus first to drive the highest ROI for your PLG effort?
3. **Anticipate the common pitfalls:** What are the possible reasons PLG might fail at your company, and what can you do now to avoid them?
4. **Set up the infrastructure:**What are the infrastructure and tools you’ll need to enable and accelerate PLG within your organization?
5. **Build your team:** Who specifically should be working on PLG, and where should they sit in the org chart to best align incentives and workflow?

And finally, don’t miss [part one of this series](https://www.lennysnewsletter.com/p/five-steps-to-starting-your-plg-motion), if you haven’t yet read that.

### 📚 Further study

1. [Top 12 books on SaaS product-led growth](https://hilaqu.substack.com/p/top-12-books-on-saas-product-led) by Hila Qu
2. [Growth Loops Are the New Funnels](https://www.reforge.com/blog/growth-loops) from Reforge
3. [The Product-Led-Growth (PLG) Playbook for B2B Startups](https://www.stage2.capital/blog/the-product-led-growth-plg-playbook-for-b2b-startups) by [Mark Roberge](https://www.stage2.capital/blog/author/mark-roberge)
4. [2022 PLG benchmarks report](https://openviewpartners.com/2022-product-benchmarks/) by OpenView
5. [Software powering the PLG era](https://www.bvp.com/atlas/roadmap-software-powering-the-plg-era) by Bessemer Venture Partners
6. Hila’s favorite PLG podcast episodes: [HubSpot](https://podcast.openviewpartners.com/public/32/OV-%7C-BUILD-21cbd466/653b1fae), [GitLab](https://podcast.openviewpartners.com/public/32/OV-%7C-BUILD-21cbd466/a38d2e0d), [Canva](https://podcast.openviewpartners.com/public/32/OV-%7C-BUILD-21cbd466/fde0dcdd), [From PLG to SLG](https://growthpodcast.drift.com/public/13/Growth-13028/22fd3e02), [Product-led sales](https://www.lennyspodcast.com/elena-verna-on-how-b2b-growth-is-changing-product-led-growth-product-led-sales-why-you-should-go-freemium-not-trial-what-features-to-make-free-and-much-more/)

*Thank you* so *much, Hila. You can find*  *on [LinkedIn](https://www.linkedin.com/in/hilaqu/), [Twitter](https://twitter.com/HilaQu), and [Substack](https://hilaqu.substack.com/). Make sure to check out the Reforge courses she teaches, [Advanced Growth Strategy](https://www.reforge.com/programs/advanced-growth-strategy) and [Experimentation & Testing](https://www.reforge.com/programs/experimentation-testing), and sign up [here](https://www.reforge.com/programs/product-led-growth) to get updates on Reforge’s new PLG program, which launches in fall 2023.*

*Have a fulfilling and productive week 🙏*

## 📣 Join Lenny’s Talent Collective 📣

If you’re hiring, [join Lenny’s Talent Collective](https://www.lennysjobs.com/talent/welcome) to start getting weekly drops of world-class product and growth people, who are passively open to new opportunities. I hand-review every application, and accept less than 10% of candidates who apply.

![Image from Five steps to starting your product-led growth motion, part 2](https://substack-post-media.s3.amazonaws.com/public/images/e77cdc85-4a67-491a-9ae6-ee0fee2add2b_1498x1234.png)

If you’re looking for a new gig, apply to join! You’ll get personalized opportunities from hand-selected companies. You can join anonymously, hide yourself from companies, and leave anytime.

[Apply Now](https://www.lennysjobs.com/talent/welcome)

#### **🔥 Featured job openings**

1. **Surfer:** [Senior Product Manager](https://www.lennysjobs.com/jobs/f6ebf2d0-c425-4690-95de-01b9c6568092) (Remote)
2. **Zendoor:** [Product Designer](https://www.lennysjobs.com/jobs/192a2c6c-e46c-4190-9d81-9a527273c89d)(Remote)
3. **TryHackMe:** [Senior Growth Product Manager](https://www.lennysjobs.com/jobs/4ff08da3-df3e-4952-95bb-b4a032dba623) (Remote)
4. **TryHackMe:** [Head of Marketing](https://www.lennysjobs.com/jobs/f0b0d2d4-f721-4903-a1ef-9125b28b1755) (Remote)

## **🧠 Inspiration for the week ahead**

1. **Watch:** [Basic needs—extreme happiness](https://youtu.be/vC8gJ0_9o4M)

“This is day 86 on my full return South Pole Expedition. I’m quite hungry and about to pick up my last cache, which I left on the way in. As a part of my motivational plan, I have on purpose not made notes on what goodies I have left behind in the cache. And on this last one, I didn’t expect very much.” (via Nels)

[Watch on YouTube](https://www.youtube.com/watch?v=vC8gJ0_9o4M)

2. **Listen:** [MrBeast: Future of YouTube, Twitter, TikTok, and Instagram on Lex Fridman Podcast](https://youtu.be/Z3_PwvvfxIU)

[Watch on YouTube](https://www.youtube.com/watch?v=Z3_PwvvfxIU)

3. **Read:** [2023 is the Year of \_\_\_\_\_\_\_\_\_](https://tomtunguz.com/2023-the-year-of/) by Tomasz Tunguz

**If you’re finding this newsletter valuable, feel free to share it with friends, and consider subscribing if you haven’t already.**

Sincerely,

Lenny 👋
