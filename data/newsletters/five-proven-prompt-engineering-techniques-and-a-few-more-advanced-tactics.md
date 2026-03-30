---
title: "Five proven prompt engineering techniques (and a few more-advanced tactics)"
subtitle: "How to get exactly what you want when working with AI"
date: "2024-10-29"
type: "newsletter"
tags: ["ai", "engineering", "design", "leadership", "product-management", "career"]
word_count: 3428
---

### ❤️‍🔥 A quick note on the Lenny and Friends Summit

1. The inaugural Lenny and Friends Summit was a smashing success. I shared some reflections on [LinkedIn](https://www.linkedin.com/posts/lennyrachitsky_some-reflections-on-the-lenny-and-friends-activity-7256770312699076609-zxJQ) and [X](https://x.com/lennysan/status/1851004994901999989).
2. If you couldn’t make it, videos of the talks from the Summit will be going up on [my YouTube channel](https://www.youtube.com/user/lennyrach?sub_confirmation=1) over the next couple of weeks. Subscribe to catch them as they come out.
3. My live podcast recording with [Shreyas Doshi](https://shreyasdoshi.com/) will be coming out this Thursday as an episode in your regular podcast feed.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/89e0f5c4-017a-41f3-abe5-09c81420ddb8_4032x3024.jpeg)

I’m constantly hearing about people doing mind-blowing things with AI, like building entire products, offloading big parts of their job, and saving hundreds of hours doing research. But most of the time when I try using ChatGPT/Claude/Gemini, I get very meh results. Maybe you’re having the same luck.

The difference, I’m learning, is in crafting your prompts. The nuance and skill needed to get good results became clear to me when [Mike Taylor](https://www.linkedin.com/in/mjt145/) published his guest post “[How close is AI to replacing product managers?](https://www.lennysnewsletter.com/p/how-close-is-ai-to-replacing-product)” and included prompts that did unexpectedly well in a blind test vs. human performance. I wanted to learn more—and so did many readers who emailed me after that post came out. I asked Mike to write a deeper dive just on prompt engineering.

Mike is a full-time professional prompt engineer. He [wrote a book for O’Reilly](https://www.amazon.com/Prompt-Engineering-Generative-AI-Future-Proof/dp/109815343X) on prompt engineering and created a [course on AI](https://www.udemy.com/course/prompt-engineering-for-ai/) taken by 100,000 people, and over the past few years he’s built up a collection of techniques that have proven useful again and again. Below, Mike shares the five prompting techniques he’s found to have the most impact when prompting LLMs, plus three advanced bonus techniques if you want to go further down the rabbit hole.

*For more from Mike, check out his book,* [Prompt Engineering for Generative AI](https://www.amazon.com/Prompt-Engineering-Generative-AI-Future-Proof/dp/109815343X)*, and his AI engineering studio, [Brightpool](https://brightpool.dev/). Follow him on [LinkedIn](https://www.linkedin.com/in/mjt145/) and [X](https://x.com/hammer_mt).*

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/b22fec3b-2cd7-4a43-a20f-1ec1b9a681e8_8000x4000.png)

Much like how becoming a better communicator leads to better results from the people you work with, writing better prompts improves the responses you can get from AI. We already know that people can’t read our minds. But neither can AI, so you have to tell it what you want, as specifically as possible.

Say you’re asking ChatGPT to write an announcement for a new feature. You want to make sure the phrasing is attention-grabbing and factual but that the message is also authentic to your product and customer base. Naively asking ChatGPT to do the task without giving it any real direction will likely result in a generic response that leans too heavily on emojis and over-enthusiastic corporate speak.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/5f7a958e-f1a3-4bf1-b5c2-17df7efd2c0a_1484x742.png)

With no stylistic direction, you’ll get one of these fake, corporate-sounding responses, because that’s the average of what’s out there. The same thing might happen if you delegated this task to a member of your team without being clear about what you actually want. One quick trick: ChatGPT is capable of emulating any famous style or format—you just need to specify that in your prompt so it knows what you’re looking for. Something as simple as appending the words “in the style of [insert famous person]” can make a huge difference to the results you get.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/4dd75738-ecd8-4189-a3e9-39cbb787200e_2364x1454.png)

Specifying a style is just one tactic, though, and there are hundreds of [prompt engineering techniques](https://arxiv.org/pdf/2406.06608), many of them proven effective in scientific studies. The good news is that you don’t have to read through all those papers on ArXiv. Every week, I spend a full day researching and experimenting with the latest techniques, and in this post, I’ll walk you through the five easy-to-use prompt engineering tactics that I actually use day-to-day, plus three more that are a bit more advanced and tailored to certain circumstances. What’s more, I’ll give you plug-and-play templates you can start using today to improve your own prompts.

### My five favorite prompt engineering tactics

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/85b96d8b-3b29-4906-a7fb-d257134cd6c4_2364x1582.png)

These techniques work across any large language model, so whether you use ChatGPT, Claude, Gemini, or Perplexity, you can get better results. I’ve included examples of how these techniques work, what problems they solve for, and when to use them. Most are backed by scientific evidence, so I’ve also linked to those papers for further reading.

With today’s latest models, there’s a lot less need for prompting tricks than there was back in 2020 with GPT-3. However, no matter how smart AI gets, it’ll always need guidance from you, and the more guidance you give it, the better results you’ll get. The types of tactics I’ve focused on in this list are ones that I anticipate will continue to be useful far into the future.

### Tactic 1: Role-playing

Role-playing is the technique we already demonstrated, where you instruct the AI to assume the persona of an expert, celebrity, or character. This approach leverages the AI’s broad knowledge base to mimic the style, expertise, and perspective of the chosen role. By doing so, you can obtain responses that are more tailored to the specific domain or viewpoint you’re interested in. For example, asking the AI to respond as a renowned scientist might yield more technical and research-oriented answers, while role-playing as a creative writer could result in more imaginative and narrative-driven responses.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/c784a7de-3455-44b8-887d-9a01812cffa0_2364x1616.png)

- **Prompt template:** “You are an expert in [field] known for [key adjective]. Help me [task].”
- **Example:**

- **Situation:** You’re preparing for a crucial meeting with the engineering team to discuss a new feature’s technical feasibility.
  - **Problem:** You’re not confident in your ability to articulate the technical requirements clearly and persuasively.
  - **Prompt:** “You are an *expert software architect* known for bridging the gap between product vision and technical implementation. Help me prepare talking points for a meeting with our engineering team about the technical feasibility of our new AI-powered recommendation engine.”
- **Try it with ChatGPT:** <https://chatgpt.com/share/67070632-89d8-800d-b153-83c8a743b819>
- **Source**: <https://arxiv.org/abs/2305.16367>

### Tactic 2: Style unbundling

Style unbundling involves breaking down the key elements of a particular expert’s style or skill set into discrete components. Instead of simply asking the AI to imitate someone, you prompt it to analyze and list the specific characteristics that make up that person’s unique approach. Then you can use those characteristics to prompt the AI to create new content. This technique allows for a more nuanced understanding and application of the desired style. It’s particularly useful when you want to incorporate certain aspects of an expert’s method without fully adopting their persona, giving you more control over which elements to emphasize in the AI’s output.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/9e564b44-53c4-4b53-8352-79b23a32d9f2_2364x1690.png)

- **Prompt templates:**

- “Describe the key elements of [expert]’s style/skill in bullet points.”
  - “Do [task] in the following style: [style].” *Note: The key-element bullet points we get in response to the first prompt go into the second prompt as the style guide.*
- **Example:**

- **Situation:** You admire how a competitor’s product manager communicates product updates, but you don’t want to copy their style directly.
  - **Problem:** You’re struggling to pinpoint what makes their communication effective.
  - **Prompts:**

- “Describe the key elements of Apple’s product announcement style in bullet points. Focus on how they communicate new features and benefits to users.” *Note: the output of this prompt becomes the bullet points in the second prompt below.*
    - “Write a product announcement for our new project management software feature in the following style:
      *- Simplicity: Clear messaging without technical jargon
      - Storytelling: Narratives highlighting user benefits
      - Visuals: High-quality demos and graphics
      - Live demos: Showcasing features in real time
      - Customer focus: Emphasizing personal benefits
      - Key features: Highlighting important advancements
      - User testimonials: Reinforcing value through experiences
      - Comparative context: Showing improvements over past models
      - Emotional appeal: Connecting technology to lifestyle
      - Call to action: Encouraging audience engagement*”
- **Try it with ChatGPT:** <https://chatgpt.com/share/67070931-6780-800d-a8d0-c6a198de3479>
- **Source**: <https://bakztfuture.substack.com/p/dall-e-2-unbundling>

### Tactic 3: Emotion prompting

Emotion prompting is a technique that involves adding emotional context or stakes to your request. By framing the task as personally important or impactful, you can potentially elicit more careful and thoughtful responses from the AI. This method taps into the AI’s programming to be helpful and considerate, potentially leading to more thorough or empathetic outputs. However, it’s important to use this technique judiciously, as it can sometimes have the opposite intention and lead to worse results.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/3224788f-296b-4a1f-a0ed-85aba177a016_2364x1702.png)

- **Prompt template:** “Help me [task]. Please make sure [attribute]. This task is very important for my career.”
- **Example:**

- **Situation:** You need to write a compelling product roadmap presentation for the executive team.
  - **Problem:** You’re concerned that your presentation might not convey the urgency and importance of your proposed initiatives.
  - **Prompt:** “Help me draft a product roadmap presentation that will resonate with our executive team. Please make sure it conveys a sense of urgency and highlights the strategic importance of each initiative. *This task is very important for my career.*”
- **Try it with ChatGPT:** <https://chatgpt.com/share/6707074a-c83c-800d-9654-0aca023fc523>
- **Source**: <https://arxiv.org/abs/2307.11760>

### Tactic 4: Few-shot learning

Few-shot learning, also known as in-context learning, is a technique where you provide the AI with a few examples of the task you want it to perform before asking it to complete a similar task. This method helps to guide the AI’s understanding of the specific format, style, or approach you’re looking for. By demonstrating the desired output through examples, you can often achieve more accurate and relevant results, especially for tasks that might be ambiguous or require a particular structure.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/a72de3e1-5d1b-43aa-b4db-d3e3d4391543_2364x1666.png)

- **Prompt template:** “Here are some examples of [task]. Generate a [task] for [new context].”
- **Example:**

- **Situation:** You need to write user stories for a new feature, but you’re new to the team and unsure of their preferred format.
  - **Problem:** You want to ensure that your user stories align with the team’s existing style and structure.
  - **Prompt:** “Here are some examples of user stories from our backlog:
    *- As a user, I want to reset my password so that I can regain access to my account if I forget it.
    - As an admin, I want to view user activity logs so that I can monitor for suspicious behavior.*
    Generate a user story for adding a new ‘dark mode’ feature to our mobile app.”
- **Try it with ChatGPT:** <https://chatgpt.com/share/67070778-8ce8-800d-a45a-0405480a9600>
- **Source**: <https://arxiv.org/abs/2005.14165>

### Tactic 5: Synthetic bootstrap

Synthetic bootstrap is a practical technique where you use the AI to generate multiple examples based on given inputs. These AI-generated examples can then be used as a form of in-context learning for subsequent prompts or as test cases you can use as inputs for your existing prompt template. This method is particularly useful when you don’t have a lot of real-world examples readily available or when you need a large number of diverse input examples quickly. It allows you to bootstrap the learning process, potentially improving the AI’s performance on the target task even without the help of a domain expert.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/a8bc604b-312a-479e-912e-7590271fc9ac_2364x2554.png)

- **Prompt templates:**

- “Generate ten examples of [examples] for [context]. Here are the inputs: [inputs].”
  - “Generate [task] using [examples].”
- **Example:**

- **Situation:** You’re creating personas for a new target market, but you lack real user data.
  - **Problem:** You need diverse, realistic personas to guide product development, but you don’t have the resources for extensive user research.
  - **Prompts:**

- “*Generate ten examples* of user personas for our new fitness tracking app. Here are the inputs:
      - Name and age
      - Occupation
      - Fitness goal
      - Current fitness routine
      - Technology comfort level
      - Key pain points in their fitness journey”
    - “Generate potential customer feedback on our idea to track calories burned during work meetings, *using our user personas*.”
- **Try it with ChatGPT:** <https://chatgpt.com/share/67070802-0564-800d-b96b-020fa30d8382>
- **Source**: <https://arxiv.org/abs/2310.03714>

## BONUS: Three more advanced tactics

If you got this far and still want to push your prompting skills further, the next level up is learning ways to split up the task into multiple steps. Rather than trying to do it all in one prompt, most professionals in the AI space build a system that corrects for the errors AI models commonly make. These tactics can take more time or be harder to implement—particularly if you can’t code—but they can make all the difference when AI is failing at a task. With better structuring interactions with AI, you can leverage its strengths, mitigate weaknesses, and create more robust and reliable outcomes.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/631f1db4-f177-4a12-a7b6-ae9c03e90376_2422x2594.png)

### Tactic 6: Chain-of-thought

The chain-of-thought technique encourages the AI to break down complex problems into smaller, more manageable steps. By prompting the AI to “think through” a problem step-by-step, you can often obtain more logical, transparent, and accurate results. This method is particularly effective for tasks that require reasoning, problem-solving, or multistep processes. It not only improves the quality of the final answer but also provides insight into the AI’s reasoning process, making it easier to identify and correct any errors in logic. Many AI tools have baked this into their system already (OpenAI’s [o1-preview](https://openai.com/index/learning-to-reason-with-llms/) has it trained directly into the model), but I often like to separate planning as its own step, so I can vet the plan before I decide how to proceed.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/011d1b83-fb2a-40ff-9686-f5db8c965663_2364x1710.png)

- **Prompt template:** “Think this through step-by-step: [describe problem].”
- **Example:**

- **Situation:** You’re trying to decide whether to prioritize feature A or feature B for the next sprint.
  - **Problem:** The decision is complex, involving multiple factors such as development time, user impact, and strategic alignment.
  - **Prompt:** “*Think this through step-by-step*: We need to decide whether to prioritize feature A (advanced reporting) or feature B (integration with a popular third-party tool) for our next sprint. Consider development time, potential user impact, strategic alignment with our product roadmap, and revenue potential for each feature.”
- **Try it with ChatGPT:** <https://chatgpt.com/share/6707083b-0b40-800d-8fc0-b2e1f0d4188f>
- **Source**: <https://arxiv.org/abs/2201.11903>

### Tactic 7: Retrieval-augmented generation (RAG)

RAG is a technique that involves providing the AI with relevant contextual information before asking it to perform a task. This method combines the AI’s general knowledge with the data contained in your files and documents and with externally sourced information, allowing for more informed and accurate responses. First, you search for relevant documents (or parts of documents) and then add them to the prompt. RAG is particularly useful when dealing with specialized topics, niche events, or specific datasets that might not be fully covered in the AI’s training data. By augmenting the AI’s knowledge with relevant context, you can obtain more precise and up-to-date outputs.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/7dc6d9b5-2ac3-452f-8060-286f341fcc43_2364x1750.png)

- **Prompt template:** “Based on [relevant document(s)], answer this question: [question].”
- **Example:**

- **Situation:** You’re drafting a competitive-analysis report, but you’re not sure you have the most up-to-date information on the market.
  - **Problem:** You need to ensure that your analysis is based on current market conditions and competitor offerings.
  - **Prompt:** “Based on Seeking Alpha’s Tesla report, answer this question: How does Tesla’s performance compare with competitors like BYD?” ([source](https://seekingalpha.com/article/4666977-tesla-stock-q4-earnings-results-still-long-term-buy))
- **Try it with ChatGPT:** <https://chatgpt.com/share/6707087a-32c8-800d-89d4-ac3fd691adb1>
- **Source**: <https://arxiv.org/abs/2005.11401>

*Note: In this example, the full PDF is inserted into the prompt, but in many systems (including OpenAI’s custom GPTs), only the most relevant parts of the report will be retrieved to insert into the prompt. This is done via a vector search (searching by similarity to the user question being asked).*

### Tactic 8: LLM-as-a-judge

Human feedback is expensive and slow, so it’s common practice among AI practitioners to use an AI model to evaluate and rate the quality of outputs, either from itself or from other sources. This method leverages the AI’s analytical capabilities to provide a more objective assessment of content quality. It can be particularly useful for tasks like content moderation, quality control, or comparing multiple AI-generated outputs to select the best one. However, it’s important to remember that the AI’s judgments are based on its training and may not always align perfectly with human assessments.

![Image from Five proven prompt engineering techniques (and a few more-advanced tactics)](https://substack-post-media.s3.amazonaws.com/public/images/2bb867f5-9a4b-4a44-966d-aa8a5f714aab_2364x2848.png)

- **Prompt templates:**

- “Generate [task].”
  - “Please rate the output on a scale of 1 to 5 based on [criteria]: [output of task]. For each rating, provide a brief explanation of the score.”
- **Example:**

- **Situation:** You’ve written several versions of a product description for your landing page.
  - **Problem:** You’re not sure which version will be most effective in conveying the product’s value to potential customers.
  - **Prompts:**

- “Generate five diverse product descriptions for a pair of shoes that fits any foot size.”
    - “Please rate each of the product descriptions on a scale of 1 to 5 based on clarity, persuasiveness, and how well it conveys the product’s unique value proposition. For each rating, provide a brief explanation of the score.”
- **Try it with ChatGPT:** <https://chatgpt.com/share/670708d3-1c54-800d-b638-8e9a1c3e89ae>
- **Source**: <https://arxiv.org/abs/2306.05685>

## Conclusion

Mastering these prompt engineering techniques will significantly enhance your ability to leverage AI. By writing good instructions, providing more context, and designing better systems, you can overcome many of the common challenges people face when using (and struggling with) AI tools.

These methods allow you to tap into the full potential of AI, whether you’re drafting user stories, conducting competitive analysis, or making complex product decisions. Remember, the key is to experiment with these techniques and adapt them to your specific needs and contexts. As AI continues to evolve, staying updated with these and other strategies will help you maintain a competitive edge.

While AI won’t replace you directly, those who use AI effectively will have an advantage when going for that next promotion or applying for that next job. So bookmark this guide, practice these techniques, and don’t hesitate to iterate on your approaches as you discover what works best for you and your team.

*Thanks, Mike!*

*For more from Mike, check out his book,* [Prompt Engineering for Generative AI](https://www.amazon.com/Prompt-Engineering-Generative-AI-Future-Proof/dp/109815343X)*, and his AI engineering studio, [Brightpool](https://brightpool.dev/), and follow him on [LinkedIn](https://www.linkedin.com/in/mjt145/) and [X](https://x.com/hammer_mt).*

*Have a fulfilling and productive week 🙏*

## Hiring? 👀

I’ve got a white-glove recruiting service specializing in senior product roles (e.g. Directors, VPs, and Heads of Product), where I work with a few select companies to fill their open roles. If you’re hiring, apply to work with us below.

[Start hiring](https://www.lennysjobs.com/)

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
