---
title: "How should you monetize your AI features?"
subtitle: "What we can learn from the monetization strategies of leading tech companies, including GitHub, Zapier, Adobe, Loom, and Microsoft"
date: "2024-07-30"
type: "newsletter"
tags: ["ai", "pricing", "strategy", "design", "newsletter", "b2b"]
word_count: 3547
---

> ## Q: What trends are you seeing in how incumbents are pricing AI features and products? Have you seen any innovation in how companies charge?

Pricing and AI: individually, two of the most mysterious topics for product builders. Put them together, and things get dizzying.

To answer your questions in the most comprehensive way possible, I teamed up with [Palle Broe](https://www.linkedin.com/in/pallebroe/) to analyze how leading tech companies are approaching AI pricing and, from that, create a framework to help you make decisions about how to price your own AI products and features.

Palle Broe was part of the early team building Uber in San Francisco and the U.K. and then spent five years across various operational, strategy, and product roles at the company. He led pricing strategy while at Uber (B2C) and then at Templafy (B2B SaaS), and has advised more than 20 fast-growing tech startups (seed to Series D) on monetization strategy, creating better packaging, cutting back on discounts, and building stronger ROI and business cases. I’m excited to offer you his insights on pricing for AI features and products, which looks very different than it does for other technologies.

*For more from Palle, make sure to subscribe to his newsletter, [Rule of Thumb](https://palle.substack.com/), where he provides tangible pricing advice to operators, and follow him on [LinkedIn](https://www.linkedin.com/in/pallebroe/).*

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/cf23a101-2296-41c9-ac12-566a9cd564c7_8000x4000.png)

AI features and products present brand-new pricing challenges for companies. I’ve spent the past decade working on monetization strategies for places like Uber and Templafy, as well as advising more than 20 tech companies on their approaches, and what I’m seeing around AI products is very different from older technologies. Unlike with traditional SaaS products, companies looking to integrate AI products and features need to consider the real, underlying costs of generative AI compute and the intense competitive pressure in the AI market now, while also focusing on adoption and new business models. To ensure long-term ROI, companies have always needed to think carefully about how and when to monetize, but AI requires even deeper analysis.

During Alphabet’s 2024 Q2 earnings call, many questions from investors addressed the ROI of the company’s $12 billion AI investments—a real shift from the previous quarter’s call. It’s clear that investor focus is changing from pure adoption to how big tech is going to be monetizing their innovations.

This left me wondering: ***How do tech companies monetize their new AI features today? And what can we learn from that data?***

To answer, I investigated the pricing and bundling strategies of 44 leading tech incumbents. I focused on the “application layer”—companies that are building end-user products (e.g. Figma)—rather than base models (OpenAI’s LLM) or infrastructure (e.g. Azure). We reviewed public data forpricing models, value metrics, bundling, and free versions to identify current trends. Based on that data and my own experience in pricing, I’ve put together a framework for you to help make strategic decisions for your own AI products and features.

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/e7453e5f-4e24-4073-bbee-ea4a6e581992_647x432.png)![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/974e9bab-f915-41be-8f3d-4654858733e4_976x625.png)

## 1. Direct and indirect monetization strategies

Broadly speaking, there are two methods that companies can use to monetize AI features: direct and indirect monetization. Direct monetization involves charging for the AI feature directly, or increasing the price of your product after adding the new AI feature. Conversely, indirect monetization integrates the AI feature into an existing bundle without altering the price, or offers the feature on its own at no additional cost.

Below is an overview of the five high-level monetization strategies we are seeing right now for tech companies launching AI features and products.

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/0529a242-9c1d-4214-8014-9d3ab5c28a54_1335x1221.png)

#### **What companies are doing now**

The predominant strategy we saw in the data was to bundle the AI features into *existing* packages (59% of companies chose this path). This approach allows users with current subscriptions to benefit from AI capabilities. In some instances, this integration is accompanied by a price increase or usage-based pricing for the AI feature—making it a direct strategy. In others, it is added without altering the existing pricing structure—an indirect approach. Adding AI features to an existing bundle can be used as an interim strategy to launch quickly and before thinking more carefully about monetization as more data is gathered around usage of the AI feature.

The second most common approach is a direct strategy: offering AI features as an add-on with a distinct price tag (23% of companies chose this path). The add-on strategy is the “purest” form of direct monetization and will provide you with the cleanest data in terms of adoption and monetization. Also, the ability to track the direct impact of your AI feature will enable you to understand willingness to pay and can provide important feedback to the roadmap and product development.

Additionally, some companies (18% of those reviewed), particularly those with large language models (LLMs), have developed standalone AI products available for separate purchase, independent of any existing subscriptions.

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/2fd9ceeb-9d5c-45ea-9da3-6fd1ae8fbaf5_1333x853.png)

#### **How you can choose between direct and indirect monetization**

There’s a reason the majority of the companies we looked at used a direct monetization strategy. As a rule of thumb, I believe direct is best, either offering the new AI feature/product as an add-on or bundling it in the existing plan *with* a price increase (or usage-based component). And this seems to be the path many of the largest tech companies took. It’s critical to understand willingness to pay and the underlying cost structures associated with gen AI, and employing this strategy will enable you to understand both. One of the core issues in applying indirect monetization is that it can be very hard to track and accurately attribute the value from increased retention and upsell.

Direct monetization is likely the right choice if your company has:

1. **High variable costs:** The variable costs associated with gen AI are significant and cannot be absorbed by indirect revenue gains—for example, the cost associated with compute, bandwidth, data storage and labeling, security and compliance, as well as maintenance and upgrades. LLMs such as ChatGPT, Gemini, and Claude incur very high computing costs, while companies leveraging LLMs such as Airtable pay every time a user uses their AI feature.
2. **Clear customer value:** Customers clearly recognize the added value that gen AI features bring them and are thus happy to pay for it—for example, GitHub’s coding Copilot or Intercom’s AI bot, Fin.

An **indirect** monetization strategy (e.g. including it in a plan *without* a price increase, or giving it away for free) can be successful when generative AI features significantly boost usage, conversion, or retention of your core product. This results in indirect revenue gains that outweigh the costs for these features—particularly when you have usage-based pricing or when the AI feature greatly increases overall customer conversion or retention. Zoom and Shopify are two examples of companies that have pursued this strategy. Sometimes this is an interim strategy to get user feedback before integrating a price increase once the value to the user is better understood. Making price increases with a large customer base is not an easy task and needs to be handled extremely thoughtfully. In my experience—and in the data—indirect monetization is usually the less attractive choice, particularly long-term.

In reality, very few companies get to choose their monetization strategy in isolation. If a competing company is launching a similar AI feature but choosing an indirect monetization strategy, you will have to take that into account alongside all the other variables above. It might be the right decision to follow suit to ensure competitiveness, but ultimately this will depend on multiple factors not discussed in detail in this article.

## 2. Direct monetization deep dive

Next, let’s dig deeper into the three core strategies for direct monetization (add-on, standalone, and included in plan with a price increase) and break down which path might be the best for your company. Typically, the factors to consider are the value your AI feature delivers for the user and your business, the best bundling approach, and the optimal distribution of the AI features across different package tiers.

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/f27b68ea-5634-4f52-b1ba-3474f4ff0d24_1334x809.png)

### Step 1: Defining the role AI will play in your product portfolio

Consider the following questions:

1. **Will this feature be widely used by a broad audience? Or does it cater to specific personas [y-axis below]?** In most companies I have worked with, the benchmark for whether or not to include a feature in a bundle or as an add-on is: If over 70% of users are likely to utilize the feature, it is advisable to bundle it in a standard package. If usage is expected to be below 70%, you need to think carefully if it will make more business sense to include it as an add-on instead—particularly if the feature has high value for a small group of users.
2. **Will a critical mass of people want to pay for this feature [x-axis below]? You want to understand if your feature is a nice-to-have versus a need-to-have. The best way to get this insight is to talk with your users. You can do this via a beta program to get usage data, as well as asking potential customers about their willingness to pay for the feature.**

Once you’ve gotten answers to the above, you can place the feature on the map below to identify the best path for bundling your AI feature. As an example, if your AI feature is one that is widely used by users (more than 70%) and adds a lot of value to their work, it’s a “leader” feature in your bundle and could likely result in a price increase. On the other hand, if your AI feature is used by relatively few users in a company (say, 20%) but those users love the feature, it should be an “add-on” to your bundle:

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/b454c085-bcee-4291-bb16-3fac5898d3ab_1600x869.jpeg)

### Step 2: Evaluate the three direct strategy options

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/e531cf4e-3835-4803-8789-0b008fb9a2e7_622x399.png)

#### Option 1: Standalone product

The maturity and functionality of AI products significantly influence how a company decides to commercialize its AI capabilities. Some companies, like OpenAI, have developed AI products such as ChatGPT that are advanced enough to function as a standalone offering, independent of existing subscriptions. These rare products can address specific use cases and attract buyers willing to pay for the solution.

The great advantage of a standalone AI product is the flexibility to set the optimal pricing without being constrained by legacy pricing or bundling structures.

So far, the only standalone offerings on the market have been products like ChatGPT and Gemini, which are built on top of proprietary LLMs. GitHub Copilot is one of the only examples of a tech incumbent not in the LLM space that is offering AI features as a standalone product.

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/832f8b97-c0e2-4882-972e-bbf8a250bbd6_1017x571.png)

**Offering a standalone product is best when:** The AI product is solving a different problem than what your existing product is solving. There is little to no overlap between your new product and your existing solutions. In those cases you want to be able to segment the product toward a new buyer, industry, and ideal customer profile.

#### Option 2: Add-on to an existing product

The add-on strategy is similar to the standalone strategy in that it also necessitates a product that provides sufficient value to have a price tag of its own, but differs in that it is in connection with the existing bundle and the buyer might be the same. AI add-ons should closely align with the existing product portfolio and address related problems, allowing for seamless integration.

Companies such as Notion, Microsoft, and Airtable have implemented this approach by creating AI products as add-ons. Notion, for example, charges $10 to enable their Notion AI feature.

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/e8057c12-5847-4474-9acb-291defafa326_1418x421.png)

**The add-on approach is best when:**

- The AI feature provides value to some of your customers but would not be something that all buyers would want to use, or pay for
- It adds value to existing bundles and is an enhancement of the solution that enables customers to better solve their problems

#### Option 3: Bundle in existing plan

Of the companies I looked at, 59% opted to incorporate new AI features into their existing plans (although I wasn’t able to discern from the data how many of those came with price increases). The decision whether or not to implement a price increase alongside the addition of new AI features depends on the extent of the value these features provide to the customer. If the features significantly enhance value for the majority of customers, it may be justifiable to raise the package price or add a usage-based pricing component. One thing to consider is that price increases for large customer bases is no easy feat and has to be thought through carefully before making any changes. Thorough testing with users and understanding of willingness to pay is crucial before executing the price increase.

Examples of companies that have integrated AI features into existing packages with a price increase in the shape of usage-based pricing include Canva, Box, and Grammarly.

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/f7f0e371-ffe4-41bd-8705-0a1ac3871662_842x598.png)

**This approach is best when:**

- The feature aligns with the core value proposition of that package and about 70% of customers consider it a crucial feature
- Customers are unlikely to buy it separately
- Offering it separately might be seen as overly transactional or nickel-and-diming the customer

### Step 3: Distribute AI features across product tiers

If you choose to incorporate AI features into existing packages, it is crucial to thoughtfully consider their distribution across the packages. Rather than adding all functionalities to a single one, evaluate the various use cases and the different levels of customer willingness to pay in order to sprinkle the features across various packages with different price points. This strategic approach ensures that the features are effectively aligned with customer needs and maximizes revenue potential.

Canva is a great example of this:

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/55607512-6486-4031-9624-77d198616af8_710x626.png)

This approach helps create an upsell path and saves costs on entry-level subscriptions.

## 3. Price points for AI features

Finally, let’s talk about actual price points. We looked at the companies offering AI products as add-ons or standalone products to understand how they priced their AI feature compared with their standard SaaS offerings. (We left out the companies offering AI features in an existing plan, as we can’t accurately allocate the price to the AI feature.) This can provide you with a benchmark of roughly where to price your own AI products relative to how you are pricing your core products today. While direct comparisons can be challenging across different value propositions, this analysis provides valuable insights into pricing trends.

#### **What companies are doing**

The pricing for AI add-ons varies significantly, ranging from 25% of the base package price (Adobe) to as much as 4.75 times the cost of the standard SaaS product (GitHub). In absolute terms, the monthly price per user for these AI products spans from $4 to $30. Generally, AI products are priced lower than their non-AI add-on counterparts.

The price point for AI seems to be somewhat correlated with the value the feature or product provides to the user. A key takeaway from our analysis is that features should be priced accordingly to capture their worth. For example, Microsoft Copilot for Microsoft 365 charges the highest per-user price, at $30, exceeding the subscription cost for Microsoft 365. Similarly, GitHub Copilot charges $19 per user, which is more than 4.75 times the cost of their standard SaaS subscription. Those prices are high, but reports indicate that Microsoft Copilot increases productivity by up to 70% and coders reported that they complete tasks 55% faster with GitHub Copilot. These examples illustrate the importance of aligning your pricing strategy with the perceived value of your AI features.

![Image from How should you monetize your AI features?](https://substack-post-media.s3.amazonaws.com/public/images/c1e2103a-69ac-47a8-b1e1-44c35867f56f_1000x1450.jpeg)

#### **How to pick the right price point and structure**

For almost all of the 44 companies we reviewed, a per-user monthly fee was the preferred way to charge. While the underlying cost structures are generally based on usage, the companies have chosen a per-user-based pricing structure rather than translating the internal costs to customer-facing prices. Charging a per-user fee is still the simplest way to sell a product and the simplest way for users to buy one. Right now, all the companies we looked at seem to be prioritizing making adoption as easy as possible while ensuring competitiveness.

Picking the right per-user price point for your AI product requires consideration of several key factors:

1. **Consumer insights:** The closer you can tie the price to the value you are creating for the customer, the easier it will be to charge a premium. Understand how much ROI you are creating by analyzing the core metric the AI offering impacts, such as productivity gains, time savings, etc. Copilot and GitHub are examples of this.
2. **Competitor pricing:** Review your five closest competitors to see how much they are charging relative to the value they provide versus your own product. Customers will review multiple products, and although all products are unique early on, I would encourage you to stay in the same ballpark as close competitors.
3. **Costs:** Understand how much cost you incur on average per user (if you are charging on a per-user basis). Early on when you have little usage, this does not matter, but as you scale you need to ensure that each user is profitably priced. That means taking into account items such as compute, bandwidth, data storage and labeling, and security and compliance, as well as maintenance and upgrades.

## **Final words**

In the rush to bring AI features to market, monetization has taken a backseat for most companies. That is changing now. The focus is shifting from mere adoption to strategic monetization, signaling a new era where the true value of AI is recognized and harnessed.

Companies now need to think carefully about how they monetize, and given how new the market and tech are, very few companies are likely to get it right the first time around. In the coming years, we expect to see a lot of changes to both how AI is integrated into products and what their price points are.

So far, pricing model innovation has been scarce from the big tech companies, with Fin from Intercom being one of the only examples of pricing model innovation. They’ve implemented a pay-per-resolution model, which means that the customer pays only when Fin achieves the outcome the customers care about most—resolved conversations. Aligning the price closer to end-user value like this is attractive for many reasons and something we are likely to see become more apparent as gen AI matures in the application layer.

In the generative AI market, we are all navigating uncharted territory. What companies are doing now may not be what they’re doing next year. The same might be true for your business. But as has been the case for a long time with other types of products, rapid testing and iteration of monetization strategies with users is likely the best path toward successful long-term results.

*Thank you, Palle. For more from Palle, make sure to subscribe to his newsletter, [Rule of Thumb](https://palle.substack.com/), where he provides tangible pricing advice to operators, and follow him on [LinkedIn](https://www.linkedin.com/in/pallebroe/).*

*Have a fulfilling and productive week 🙏*

## 👀 Hiring? Or looking for a new job?

I’ve got a white-glove recruiting service for senior product roles, working with a few select companies at a time. If you’re hiring, apply below.

[Apply to join](https://www.lennysjobs.com/talent/)

If you’re exploring new opportunities yourself, use the same button above to sign up. We’ll send over personalized opportunities from hand-selected companies if we think there’s a fit.

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
