---
title: "How to get your entire team prototyping with AI"
subtitle: "A guide to creating AI prototypes that match your brand and are integrated into every step of your development lifecycle"
date: "2025-06-10"
type: "newsletter"
tags: ["design", "ai", "leadership", "engineering", "newsletter", "organization"]
word_count: 4619
---

[Colin Matthews](https://www.linkedin.com/in/colinmatthews-pm/) holds the distinct honor of having not one but *two* posts in my top 10 [most popular posts of all time](https://www.lennysnewsletter.com/?sort=top). Today he’s back with a post that I suspect will make it three.

I love Colin’s stuff because it’s always rooted in the real-life problems that product builders actually run into with AI tools—and he articulates the solutions so simply and practically. I’m excited to keep collaborating with him to help us all learn how to go from hype to reality. Let’s get into it.

*For more from Colin, check out his [free 45-minute live online class](https://maven.com/p/becb6f/product-development-lifecycle-with-ai-prototyping) coming up on July 8th, and his course [AI Prototyping for Product Managers](https://maven.com/tech-for-product/ai-prototyping-for-product-managers?promoCode=LENNYSLIST) (which kicks off on June 30th; use code LENNYSLIST to get $100 off). You can also [book Colin for one-day team workshops](https://teams.techforproduct.com/) with your team.*

*P.S. If you prefer, you can listen to this post in convenient podcast form: [Spotify](https://open.spotify.com/show/0IIunA06qMtrcQLfypTooj) / [Apple](https://podcasts.apple.com/us/podcast/lennys-reads/id1810314693) / [YouTube](https://www.youtube.com/@lennysreads).*

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/2e8ff549-677d-4cce-b38c-8176c8c461dc_1456x1098.png)

Since I first shared a [guide to AI prototyping for product managers](https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product) in January, AI prototyping tools have become immensely popular. It’s now more common than not for product teams to use v0, Bolt, Replit, or Lovable to build a quick prototype to share their ideas and get feedback.

After having taught more than 500 PMs over the past five months how to get the best out of these tools (along with another 10,000 in numerous free online lightning lessons), I’ve seen two questions come up most often when people try to use these tools in real life:

1. How do you make your prototypes look good enough to show customers or senior stakeholders?
2. How do you successfully adopt these tools as a team, instead of a lot of individuals working in silos?

These common questions are the reasons product, design, and engineering teams are struggling to figure out team workflows for AI tools. Without handoff guidance or high-quality prototypes, AI prototyping is left to explorations and experiments, which are hard to operationalize and scale.

In this post, I’ll walk you through three ways to create component libraries that consistently create great mocks; team workflows to reduce rework; and a step-by-step guide on how prototypes should be used. I’ll also give you plenty of time-, token-, and headache-saving tricks for most popular AI prototyping tools. I’ll be including [v0](https://v0.dev), [Bolt](https://bolt.new), [Cursor](https://www.cursor.com/), and [Magic Patterns](https://www.magicpatterns.com/?via=tfpl1) in this post, but these techniques work with any AI prototyping tool.

To give you a quick example of what’s possible, here’s an Airbnb prototype I built with a single prompt: “*Build a homepage and a listing details page.”*

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/83eb4332-a6d7-430c-a570-c8b023ac0681_810x453.gif)

Let’s get started!

## **Component libraries**

Component libraries are the first big improvement you can bring to your team. They allow you to maintain branding and consistent styling without having to manually clean up each prototype to look like your product. Building a component library will take some up-front effort, but you’re also building reusable assets that will greatly improve the quality of your prototypes going forward and save you time after the initial investment.

There are three different approaches to building component libraries with AI prototyping tools, with different advantages and tradeoffs in effort and output:

1. Screenshots
2. Chrome extensions
3. Code

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/34d32270-55dc-4a08-8b81-9fbf7c058613_2912x2140.png)

Let’s go through each and discuss their tradeoffs.

### **Method 1: Screenshots**

Screenshots are the easiest way to start building a component library. You don’t need any technical expertise, and this approach works with any tool.

Start by prompting your favorite AI prototyping tool with the following:

`You are tasked with creating a component library based on a screenshot using React, and Tailwind CSS.`

`All components should be custom-made to match the screenshot as closely as possible.`

`Follow these instructions carefully:`

`1. Analyze the provided screenshot.`

`2. Identify distinct UI components in the screenshot. These may include, but are not limited to, ◦ Buttons ◦ Input fields ◦ Navigation bars ◦ Cards ◦ Modals ◦ Typography elements`

`3. For each identified component:`

`a. Create a React functional component.`

`b. Use Tailwind CSS classes to style the component, matching the visual design in the screenshot.`

`c. Ensure the component is responsive and accessible.`

`d. Add any necessary props for customization.`

`e. Include a brief comment describing the component’s purpose.`

`4. After creating all individual components, create an index page that imports and displays each component with example usage.`

`Remember to use only custom-made components and Tailwind CSS classes. Do not use any external libraries or pre-built components.`

`Strive to match the visual design in the screenshot as closely as possible while maintaining good coding practices and component reusability.`

Let’s give this a try with v0, re-creating a Google Calendar UI. Remember to include a screenshot!

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/f6b3e2f9-7e1c-4d0f-868c-8a78df59e155_796x613.jpeg)

Here’s our initial result:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/883135d3-0c4a-4dda-9fc0-de2d932f25d9_1334x748.gif)

One quick note: You may end up with a reproduction of the screenshot instead of a list of components. These AI tools are very tuned to reproduce screenshots, so you may need to push it with one more prompt, like *“Instead of showing me a page that re-creates the UI, the index page should be a list of components in the component library.”*
From here, you can continue adding more components by pasting in additional screenshots with the prompt *“Add these components as well.”* If you want to refine the components, I recommend starting with this prompt:

`“List the differences between the screenshot and your implementation. How can you match the design more exactly? Don’t code.”`

This technique (called reflection) makes it easy to leverage the AI to quickly make UX improvements.

Once you have your component library complete, pause! You’ll want to create a fork of the project and start to use your components in a new project. Your forked project will automatically reuse your components to assemble your design like Legos. Again, this technique works in any of your favorite AI prototyping tools. (Here’s how to create a fork in each AI prototyping tool: [Bolt](https://support.bolt.new/building/using-bolt/projects-files#duplicate-projects), [v0](https://www.perplexity.ai/search/how-to-create-a-fork-in-v0-m6V2aWHwQZqx8UCQZWzEgg), [Lovable](https://docs.lovable.dev/user-guides/quickstart#remix-an-existing-project), [Replit](https://docs.replit.com/getting-started/quickstarts/remix-an-app), [Magic Patterns](https://www.perplexity.ai/search/how-to-create-a-fork-in-magic-tGrNnh7RRWOZvNSDMrNeyg).)

For example, we can prototype an AI agent in Google Calendar that blocks deep-work slots with a simple prompt like *“Create a Google Calendar main page view that has an AI scheduling assistant to recommend deep-work blocks.”*

Here’s the result:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/2e5aab6f-96f0-4f41-8056-5b3d6e9404ae_1456x695.gif)

Spending time to improve your components is worth it. Every prototype made using them has better visual quality, is less distracting to stakeholders, and allows conversations to focus on the specific elements that are being tested.

### **Method 2: Chrome extensions**

The next option for creating component libraries is to use Chrome extensions. As of today, [Magic Patterns](https://www.magicpatterns.com/) is the only tool that supports extracting components from a webpage directly.

Using the extension is simple: Select a UI element, extract its styling, and turn it into a reusable component.

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/b9eb6753-fee8-49a7-8701-43708be6b3a0_810x444.gif)

I like to fire off multiple of these extracts at the same time to create as many components as I can in a short period of time. Once they land in Magic Patterns, you can continue to prompt your way through refinements.

The real magic comes in using these components. Let’s try the prompt *“Build me a channel view of YouTube.*”

Here’s the result from a single prompt:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/b4479d89-0d28-4082-aeb6-8bc7c6233495_810x405.gif)

### **Method 3: Code**

The last way to build a component library is with code, using your real components. This approach requires the most effort but will provide you with prototypes that are indistinguishable from your real product. You’ll need assistance from engineering, and the overall effort and complexity will depend on your codebase and company size. This option is most realistic in smaller companies or those with more technical designers and PMs.

To start, your engineering team will need to set up the repository so you can run the front-end application locally without having to connect to any back-end services or databases. This can be accomplished by creating a new entry point for the client-side app that mocks up the API responses. Once you have your local environment running, you can use an AI code editor like Cursor or Windsurf to prototype.

Here’s an example of an app I’m working on. All of the information you see is mocked up client-side, with no servers or databases connected.

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/4f3d0de7-2dac-4017-a94f-3074ae6f16ec_1600x876.gif)

This approach works best if you’re comfortable with GitHub, branches, and running basic terminal commands.

Another way to leverage code to get more accurate components is with the new [Figma MCP server](https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/) (which just launched last week!). In case you’re unfamiliar, MCP is a protocol that allows AI agents to retrieve information or take actions in another application. In this case, we can use the Cursor agent to make calls to Figma’s MCP server to retrieve detailed styling information, and then transform that into components.

Figma currently supports four MCP actions:

1. Get Code
2. Get Variable Definitions
3. Get Image
4. Get Code Connect

This effectively gives Cursor the ability to autonomously take screenshots, extract design tokens, and get CSS from Figma’s Dev Mode.

Here’s a quick side-by-side of a Figma [design library](https://www.figma.com/community/file/1267195373409722424/design-system) and the same components reproduced in code.

Figma:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/69d956a0-c7af-400f-bd7f-250504bb946f_1128x922.png)

Code:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/e59bc1bb-ef87-42d9-8064-532dcc3c6d21_810x468.gif)

Here are the steps to build your components using Figma MCP:

1. Enable the Figma MCP server for the design you want to work with (Preferences, then Enable Dev Mode Server). This will provide you with a URL to connect to.
2. In Cursor, go to Settings, MCP Tools, and “Add a new MCP server.” Paste in the URL provided by Figma.
3. Copy a component URL from Figma by right-clicking and selecting “Copy as URL.”
4. Ask Cursor to generate this as a component, and to make your index page a list of components.

So far, I’ve found this works best if you have *existing* components Cursor can mimic, or provide clear instructions for how the code should be formatted.

This option is very new but also very exciting for design teams who want to leverage their existing component libraries with AI prototyping tools.

To summarize, component libraries give your team a set of shared artifacts that make it easy for anyone to create realistic prototypes with AI. Your component library can be shared across your entire team, making it easy to onboard new team members and maintain high-quality visuals for testing directly with customers or in meetings with senior stakeholders.

## **Team workflows**

Now that you have components to help you create realistic prototypes in a flash, let’s talk about team workflows. There are two workflows I want to cover:

1. Baselines and forks
2. Product development lifecycle

### **Workflow 1: Baselines and forks**

Baselines and forks are an extension of the component libraries strategy. With components, you’re giving team members a head start by providing building blocks they can easily assemble into good-looking prototypes. “Baselines” go one step further, giving you a high-quality reproduction of your current product experience, allowing your team members to more easily experiment with new ideas using simple prompts. Forks build on this further, allowing you to duplicate a project and all of its contents without using any tokens, and keep you from screwing up your baseline.

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/353ed3d8-4f36-492d-92fa-24131b3855ad_2912x2140.png)

This is best explained with an example.

Let’s say I’m the PM at Airbnb working on the new Experiences product. This is a product that features the most unique and interesting experiences around the world. Using baselines and forks, I’ll start by reproducing the current page and then explore a few new ideas.

Creating the initial page with my component library took me about 20 minutes, mostly ironing out all the little details to make the prototype really look like Airbnb (see my [previous guide](https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product) for advice on fine-tuning your prototypes). Here’s how it looks:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/e57b11d4-19a4-4279-9f3b-597c3abe7583_1456x722.jpeg)

By the way, here’s the real site:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/036f085e-5a93-4a30-bf79-b3b85de845cb_1456x742.jpeg)

Now that I have this page, I’ll treat it as my “baseline.” I won’t make any more changes and instead create a fork.

On the fork, I’ll enter a single prompt: “*Modify this page so that it runs through a questionnaire to determine experiences that I would like before showing me experiences. Maintain the Airbnb branding.*”

Here’s the result:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/3c86b02d-4bcd-49c4-a5bc-0098e3a5721f_1456x725.gif)

Now let’s test another idea: using the customer’s past travel history to suggest relevant experiences.

Again, I create a fork from the baseline. On the new copy, I prompt, *“Modify this page so it shows me experiences I would like based on my past travel history with Airbnb. For each recommendation, add a UI element that says ‘based on your trip to. . .”*

Here’s the result:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/05a81208-a8fd-4be6-bdf0-6046efb2afdc_1456x797.jpeg)

Baselines and forks are best used when you want to explore multiple different ideas without having to rebuild the starting page each time. They provide your team with another leg up in getting high-quality results quickly when using AI prototyping tools.

### **Workflow 2: Product development lifecycle**

If you implement everything we’ve covered so far, you’ll be dramatically ahead of the average AI prototyping noob. But it’s very possible that your PMs or designers will still prototype in isolation. Creating a shared understanding for your team for when to use AI prototypes is just as important as knowing how to get good results.

Before we get into the product development lifecycle, I want to briefly touch on fidelity. For a long time, we’ve had low-fidelity scratch-pad versions of UIs, and high-fidelity mocks for the polished finished product. AI prototyping introduces medium fidelity—better than a napkin drawing but still not as good as your finalized Figma mocks.

Here’s an example of a mid-fi mock of Reddit. At first glance, it seems correct, but you’ll notice lots of imperfections, like two buttons for upvoting, too much padding on the left navigation, and the top right navigation items being pushed in too far from the right edge.

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/2d3b5e7c-0dfe-4bd4-8143-9965e00dce24_1338x834.png)

You can also definitely create high-fi mocks with AI prototyping tools—the key is how much time and effort you put into them.

It’s critically important to choose the appropriate fidelity for your prototype based on the context, and then set clear expectations with team members around that level of fidelity. For example, if you’re explaining an interaction to an engineer, mid-fi is totally fine, and it’s a waste of time to push past that. Whereas if you’re pitching your CEO on funding a new team that will require millions in new investment, a functional high-fi mock is probably worth the time.

Below, I’ve outlined the six main steps in the product development lifecycle and how prototypes can be leveraged, as well as what fidelity they should be and who is responsible for the prototype. I encourage you to take this as general guidance and apply what makes sense in your own company.

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/afb538be-9085-4b2e-a14c-0466b0ffc881_2912x1654.png)

Let’s walk through an example of the full development lifecycle for a new feature at Reddit called Reddit Answers. This will be a gen AI feature that allows users to ask questions and get quick answers based on past Reddit posts and comments.

#### Step 1: Discovery

Starting in Discovery, you may choose to use an AI prototyping tool to quickly express an idea in medium fidelity. This is typically used only internally, and may just be between product, design, and your engineering lead. We might start out with something like this, which should take only about 20 minutes:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/47b20c8f-ec09-4662-9eeb-6cf36716690b_810x514.gif)

This is a great asset for internal communication, but we probably wouldn’t want to show this off to any executives or customers.

By the way, here’s the prompt that generated this prototype:

`# Reddit Answers PRD`

`## Overview`

`Reddit Answers is a new Q&A feature that leverages Reddit’s vast community knowledge to provide generated, fact-based answers to user questions, with references to specific posts and comments. It prioritizes highly upvoted, less controversial content and supplements Reddit information with external sources to enhance credibility.`

`## User Stories`

`As a user, I want to ask questions and receive comprehensive answers based on Reddit’s collective knowledge.`

`As a user, I want to see which specific Reddit posts and comments contributed to the answer.`

`As a user, I want to understand how reliable the Reddit-sourced information is compared with external sources.`

`As a user, I want to access additional external links that provide more context to the answer.`

`As a user, I want to navigate easily to the Reddit discussions referenced in the answer.`

`As a developer, I want to access Reddit Answers data via API to enhance AI applications with Reddit’s knowledge.`

`## Implementation Phases`

`### Phase 1: Core Q&A Experience`

`Question input interface in left nav`

`Answer generation from Reddit content`

`Basic reference linking to source posts/comments`

`Simple reliability scoring`

`Local answer history`

`### Phase 2: Enhanced Credibility & Context`

`Sophisticated reliability-scoring algorithm`

`External source integration`

`Content moderation systems`

`Improved reference highlighting`

`Personalized answer recommendations`

`### Phase 3: Ecosystem Integration`

`API access for AI companies`

`Analytics dashboard for Reddit team`

`Community feedback mechanisms`

`Mobile optimization`

`Enhanced search integration`

`## Design System`

`Colors:`

`Primary: Reddit Orange (#FF4500)`

`Secondary: Periwinkle Blue (#9494FF)`

`Background: Light Gray (#F8F9FA)`

`Text: Dark Gray (#1A1A1B)`

`Typography:`

`Reddit’s IBM Plex font family`

`Spacing:`

`Consistent 8px grid system`

`##Components:`

`Question Input`

`Answer Card`

`Reference List`

`Reliability Score Badge`

`External Link Cards`

`Source Attribution Tag`

`## Data Model`

`### Question`

`id: unique identifier`

`text: the user’s question`

`timestamp: when question was asked`

`user_id: who asked the question`

`category: auto-categorized topic area`

`### Answer`

`id: unique identifier`

`question_id: reference to question`

`text: generated answer content`

`reliability_score: 0-100 score comparing Reddit info with external sources`

`timestamp: when answer was generated`

`### Reference`

`id: unique identifier`

`answer_id: reference to answer`

`post_id: Reddit post referenced`

`comment_id: specific comment referenced (optional)`

`relevance_score: how relevant this reference is to the answer`

`controversy_score: measure of how controversial the content is`

`upvote_count: number of upvotes on referenced content`

`### ExternalSource`

`id: unique identifier`

`answer_id: reference to answer`

`url: link to external source`

`title: title of the external content`

`relevance_score: how relevant this source is to the answer`

`domain_authority: credibility rating of the source domain`

#### Step 2: Roadmap and alignment

Once we’ve firmed up the idea and want to build more buy-in internally, we likely want to put something together in high fidelity that we can show stakeholders and customers.

We’ll refine our initial prototype, use our component library, and come out with a much more polished prototype. This can take anywhere from 20 to 60 minutes, depending on the complexity of your prototype.

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/f9e3a0d9-a2ab-456f-a53c-39e59900633c_810x533.gif)

#### Step 3: PRD and mocks

Now that we have buy-in to build this new feature, we need to figure out exactly how it will work. We can include the prior high-fidelity prototype inside the PRD and demo it live to the team to start generating questions and working out edge cases.

We might hear things like:

- What does the accuracy score mean?
- What external sources should be used?
- Is there any content within Reddit that should be excluded from answers?
- How should answers be vetted before being included in the AI response?

Using the prototype for communication is a much faster and easier way to drive these important conversations than hoping an engineer reads your whole PRD and adds a comment or two. This conversation with engineering will likely take two hours or more across a few discussions.

#### Step 4: User interviews

As we’re continuing to iterate on the idea, we can bring our high-fidelity prototype with us to user interviews. We can get feedback on the exact user flows very early in the development cycle instead of waiting for the feature to be ready in production. User interviews will likely take you three to five days to collect enough feedback.

Although direct user interviews are likely the best way to gather feedback, we can also scale our feedback collection with surveys. You can embed your favorite survey tools directly into the prototype to collect structured feedback by sharing it with actual users.

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/9af48762-269f-460d-a67d-ed188fefc7ff_810x533.gif)

#### Step 5: Engineering scoping and delivery

It’s important to remember that the code generated by AI prototyping tools is mostly useless to your engineering team (unless your components are built using your existing code). It doesn’t follow any of the existing patterns, use any of the same libraries, or may not even be written in the same programming language.

Some ways the prototype can be useful are for documenting very specific interactions, like animations. If you want the loading animation to be exactly what you created in the prototype, your engineering team can likely use that as a head start during implementation.

Throughout the building process, the high-fidelity prototype can still continue to be a useful communication tool any time there are questions about aspects of the product or feature. Prototyping doesn’t really impact development timelines, so expect two to six weeks, depending on the complexity of the feature.

## **Bonus tip: Using your actual logo in prototypes**

This section is quick but super-important, because I see a lot of people run into this challenge. Most AI prototyping tools would rather draw an uncanny-valley version of your logo than use the real thing. With all the other small UI mistakes they make, this often makes the prototype feel unusable when presenting to customers or senior stakeholders.

The simple solution to this is to paste in a link to the exact image you want to use. There are two ways to find that logo URL:

1. Right-click on the image, inspect element, and grab the URL or SVG for the image.
2. Use a logo repository, like Brandfetch, that hosts most company logos. Find yours and grab the embed link.

Starting by grabbing the image directly, we can inspect the site and click on the logo. This image is an SVG, meaning there is no link to copy. We can instead copy the SVG content and paste that into our preferred AI tool.

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/cde8d4c6-75bc-4f5a-ad49-c1daf45d6da5_264x249.png)

Here’s the result in Bolt with a simple request to build a homepage:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/6ddc2bd3-9228-461d-96e9-436995afce5d_1263x237.png)

To include your logo, simply paste the link or SVG text with a prompt like *“Add my logo to the header using this link.”*

The second option is to look up the logo on a site like Brandfetch and copy the embed link. Paste that directly into your AI prototyping tool and you’ll get a clean logo instantly.

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/bfc51610-0712-447a-a4b9-f4bc6adc8d80_1373x623.png)

As you’d expect, this looks identical:

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/2790a01c-717a-4e7a-9234-3ce32216b2d7_1271x257.png)

You can use these approaches for any images you want to include—just make sure you’re linking to the image itself, not a webpage. The URL will typically end in PNG or SVG.

One last tip: If you need some realistic images for your prototype, just ask the AI tool to grab them from [Unsplash](https://unsplash.com/), which does a reasonably good job at picking relevant images. Here’s the Airbnb example once more, where the AI decided on these images based on the prompt *“Add images from Unsplash that make sense given the context.”*

![Image from How to get your entire team prototyping with AI](https://substack-post-media.s3.amazonaws.com/public/images/46318531-4992-4093-b086-ab4d69afc502_1456x797.jpeg)

# **Where to go from here**

If you want to drive adoption on your team, start with component libraries to establish visual consistency, implement baselines and forks to accelerate iteration, and align your team on when and how to use different fidelity levels throughout your product development lifecycle. These aren’t merely nice-to-haves—this is what separates teams just poking at the surface of what AI can do for them from those fully integrating AI tools into their best practices and daily workflows to supercharge their products.

Give these workflows a try, and feel free to reach out with your progress. I’m excited to see you and your team level up with AI prototyping!

*Thanks, Colin!*

*For more from Colin, check out his [free 45-minute live online class](https://maven.com/p/becb6f/product-development-lifecycle-with-ai-prototyping) coming up on July 8th, and his course [AI Prototyping for Product Managers](https://maven.com/tech-for-product/ai-prototyping-for-product-managers?promoCode=LENNYSLIST) (which kicks off on June 30th; use code LENNYSLIST to get $100 off). You can also [book Colin for one-day team workshops](https://teams.techforproduct.com/) with your team.*

*Have a fulfilling and productive week 🙏*

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
