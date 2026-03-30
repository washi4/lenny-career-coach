---
title: "Building eval systems that improve your AI product"
subtitle: "A practical guide to moving beyond generic scores and measuring what matters"
date: "2025-09-09"
type: "newsletter"
tags: ["design", "ai", "analytics", "leadership", "newsletter", "engineering"]
word_count: 4662
---

*👋 Each week, I tackle reader questions about building product, driving growth, and accelerating your career. Annual subscribers get a free year of 15+ premium products: **[Lovable, Replit, Bolt, n8n, Wispr Flow, Descript, Linear, Gamma, Superhuman, Granola, Warp, Perplexity, Raycast, Magic Patterns, Mobbin, and ChatPRD](https://www.lennysnewsletter.com/p/productpass)** (while supplies last).*

*For more: **[Lennybot](https://www.lennybot.com/) | [Lenny’s Podcast](https://www.lennysnewsletter.com/podcast) |** **[How I AI](https://www.youtube.com/@howiaipodcast)** **| [Lenny’s Reads](https://www.lennysnewsletter.com/s/lennys-reads)** | **[Courses](https://maven.com/lenny)***

[Hamel Husain](https://www.linkedin.com/in/hamelhusain/) and [Shreya Shankar](https://www.linkedin.com/in/shrshnk/)’s online course, [AI Evals for Engineers & PMs](https://bit.ly/4myp27m), is the #1 highest-grossing course on Maven, and consistently brings in sizable student groups from all of the major AI labs. This is because they teach something crucial: how to build evaluations that actually *improve* your product, not just generate vanity dashboards.

Over the past two years, Hamel and Shreya have played a major role in shifting evals from being an obscure, confusing subject to one of the most necessary skills for AI product builders.

After training more than 2,000 PMs and engineers, and leaders at over 500 companies, they’re now sharing their complete playbook—the same methodology taught at OpenAI, Anthropic, and other leading labs. You’ll learn how to leverage error analysis to understand where your AI product breaks, build robust evals you can trust, and create a continuous improvement flywheel that catches regressions before they ship.

In honor of this post, Hamel and Shreya are also offering an exclusive discount on their course: 35% off. This is the largest discount they’ve ever offered. [Use this link](https://bit.ly/4myp27m) to register (or use code LENNYSLIST when checking out). You’ve got three days left to enroll.

Thank you for sharing this gold with us, Hamel and Shreya 🙏

*P.S. You can listen to this post in convenient podcast form: [Spotify](https://open.spotify.com/show/0IIunA06qMtrcQLfypTooj) / [Apple](https://podcasts.apple.com/us/podcast/lennys-reads/id1810314693) / [YouTube](https://www.youtube.com/@lennysreads).*

![Image from Building eval systems that improve your AI product](https://substack-post-media.s3.amazonaws.com/public/images/9aada4fd-935d-4a7b-a704-241eaa5d3618_1457x1130.png)

Aman Khan’s [post](https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete) on evals perfectly captured why evaluation is becoming a core, make-or-break skill for product managers. This article provides the next step: a playbook for building an evaluation system to drive real product improvements. Many teams build eval dashboards that look useful but are ultimately ignored and don’t lead to better products, because the metrics these evals report are disconnected from real user problems.

This guide provides a process to bridge that trust gap. We will cover three phases: discovering what to measure through rigorous error analysis, building a reliable evaluation suite, and operationalizing that suite to create a flywheel of continuous improvement.

## Phase 1: Ground your evals in reality, with error analysis

Before you can improve your AI product, you must understand how it fails. The surface area for what you *could* evaluate is infinite. The most common mistake is to start by measuring [ready-made](https://hamel.dev/blog/posts/evals-faq/should-i-use-ready-to-use-evaluation-metrics.html), fashionable metrics like “hallucination” or “toxicity.” This approach often leads to tracking scores that don’t correlate with the actual problems your users face with your product. You cannot know what to measure until you systematically find out how your product fails in specific contexts. The process that tells you where to focus is referred to as “error analysis” and should result in a clean and prioritized list of your product’s most common failure modes.

The process begins not with metrics but with data and a single human expert. For most small to medium-size companies, the most effective approach is to designate a single principal domain expert as the arbiter of quality. This person—a psychologist for a mental health chatbot, a lawyer for legal document analysis—becomes the definitive voice on quality. Appointing a single expert, sometimes called a “benevolent dictator,” provides a consistent and deeply informed signal, which eliminates annotation conflicts and prevents the paralysis that can come from having too many cooks in the kitchen. In many situations, the product manager is the principal domain expert. Larger organizations, or products that span multiple complex domains with different cultural contexts, may require multiple annotators. In those cases, you must implement a more structured process to ensure that judgments are consistent, which involves measuring their agreement.

Your next step is to arm this expert with a representative set of around 100 user interactions. As you get more sophisticated, you can sample interactions that are more likely to yield insights based on data analysis. Examples include traces that have negative user feedback, outliers in conversation length, number of tools, and high latency. However, start with random sampling to develop your intuition in the beginning.

With a dataset ready, the analysis begins with **open coding**. This is essentially like journaling, but with a bit of structuring. The domain expert reviews each user interaction and writes a free-form critique on anything that seems wrong or undesirable, as well as giving a pass/fail judgment on the AI performance.

- For **passes**, we explain why the AI succeeded in meeting the user’s primary need, even if there were critical aspects that could be improved. We highlight these areas for enhancement while justifying the overall passing judgment.

- For **fails**, we identify the critical elements that led to the failure, explaining why the AI did not meet the user’s main objective or compromised important factors, like user experience or security.

Here is a screenshot of open coding in action in response to an apartment leasing assistant. In the interface, we can see that the AI has hallucinated a virtual tour when that isn’t something that is offered:

![Image from Building eval systems that improve your AI product](https://substack-post-media.s3.amazonaws.com/public/images/eff70365-e3fb-43be-9889-f51973469875_1600x1402.png)

**As a heuristic, the critique should be detailed enough** for a brand-new employee at your company to understand it. Or, if this is more helpful, **so that you can use it in a few-shot prompt for an LLM judge**.Being too terse is a common mistake. Here are some good examples of open coding in action:

![Image from Building eval systems that improve your AI product](https://substack-post-media.s3.amazonaws.com/public/images/58c0d68c-8896-40fa-b8d9-0888f9209c50_1456x1610.png)

Note that the example user interactions with the AI are simplified for brevity—but you might need to give the domain expert more context to make a judgment. More on that later.

This lightly constrained process is crucial for discovering problems you didn’t know you had. It’s also where teams often discover what they *truly* want from their AI system. [Research shows](https://arxiv.org/abs/2404.12272) that people are not very good at specifying their complete requirements for an AI up front. It is through the process of reviewing outputs and articulating what feels “wrong” that the true criteria for success emerge.

After collecting notes on dozens of traces, the next step is **axial coding**, or pattern-finding. The expert reads through all the open-ended critiques and starts grouping them (examples below). This process transforms a chaotic list of observations into a clean, prioritized taxonomy of concrete failure modes. It is part art and part science: group errors in a way that is manageable and sensible for your domain. Here is how you might apply axial coding to the failures above:

![Image from Building eval systems that improve your AI product](https://substack-post-media.s3.amazonaws.com/public/images/c9ec8f51-5d10-42be-9de3-8dfb117bd43e_1456x954.png)

This grouping process often happens in a spreadsheet or a dedicated annotation tool where you can tag or label each critique. When I was working on this apartment leasing assistant in a [real-life scenario](https://hamel.dev/blog/posts/field-guide/), here are the categories that emerged:

- Conversation flow issues (missing context, awkward responses)
- Handoff failures (not recognizing when to transfer to humans)
- Rescheduling problems (struggling with date handling)

You can accelerate this process with an LLM. You can use an LLM to perform a first-pass categorization on the critiques. However, a common trap is to over-automate. Always have the human expert review and validate the LLM’s suggestions. An LLM might miss the nuance that distinguishes a conversation flow issue from a handoff failure. Another trap is creating too many categories; aim for a manageable set of under 10 primary failure modes that capture the most significant problems. The goal is to create a useful taxonomy that you can analyze, not an exhaustive list.

The final product of this phase is to simply count the categories so you can get a sense of how to invest your time. Here is how this count looks for the apartment leasing assistant, which I calculated with a pivot table in a spreadsheet:

![Image from Building eval systems that improve your AI product](https://substack-post-media.s3.amazonaws.com/public/images/d7a37d90-bcf5-406e-a484-86d4ad48d1c9_658x354.png)

As you can see, the most frequently occurring errors were conversation flow, handoff (to a human), and rescheduling appointments. This data gives us concrete problems specific to our product to focus on as we build evals.

### A warning about off-the-shelf metrics

While off-the-shelf metrics like hallucination and toxicity are not worth paying attention to directly, they can be used in creative ways. Instead of reporting a hallucination or toxicity score on a dashboard, calculate the scores on your traces and sort them by high/low score. Reviewing the highest *and* lowest scoring examples can reveal surprising failure modes or unexpected successes, which in turn helps you build custom evaluators for the patterns you discover. This is one of the only appropriate uses for off-the-shelf metrics. Note that this is an advanced technique and should be done only after you master the basic approach.

## Phase 2: Build out your evaluation suite

After error analysis, you will have a prioritized list of your product’s most common failures. The next step is to build a suite of automated evaluators to track them. The goal is to create a system that is reliable, cost-effective, and trusted by your team. This requires choosing the right tool for each failure mode.

Your choice of tools comes down to one question for each prioritized failure mode on your list: Is this failure **objective and rule-based** (for example: “Does the output contain a user ID?”), or is it **subjective and requiring judgment** (example: “Was the tone appropriate for the persona?”)?

For objective failures, use **code-based evaluators**. These are simple checks written as code, like assertions in a unit test. They are fast, cheap, and deterministic, making them perfect for verifying things like whether an output is valid JSON, contains a required keyword, or executes without error. Use them whenever a clear rule can define success or failure.

For subjective failures, you’ll need to build an **LLM-as-a-judge** to reliably assess qualities that code cannot easily handle, like tone, relevance, or reasoning quality. This can be a rigorous process—as is training any LLM—but it is the only way to scale nuanced and subjective evaluations and ultimately improve your product. The good news is that there is a scientific approach to making sure the judge is sufficiently aligned with your product vision and success criteria.

### The LLM-as-a-judge playbook

This is not about writing a clever prompt. It is about a systematic process of grounding an LLM’s judgment in your specific quality bar. The output is an LLM that gives you a binary pass/fail metric for specific error(s). More importantly, you need to trust the metric. The way to establish trust is by measuring the judge against a human-labeled dataset you create. There are two steps involved. The first is to create a dataset that establishes ground truth:

#### 1. Establish ground truth

Your evaluation system is only as good as its source of truth. For most teams, the most effective approach is to leverage the **principal domain expert** we mentioned earlier. While larger organizations operating across multiple domains may require multiple annotators and processes to measure inter-annotator agreement, starting with a single expert accelerates the process.

The expert’s task is to provide two things for every user interaction with your AI, grouped by session: a binary **pass/fail** judgment and a detailed **critique**. Many teams are tempted to use a 1-to-5 Likert scale, believing it captures more nuance. This is a trap. The distinction between a “3” and a “4” is subjective and inconsistent. Binary decisions force clarity. An output either meets the quality bar or it does not. The nuance is not lost; it is captured in the critique, which explains *why* a judgment was made. These critiques are the secret ingredient for building a high-fidelity judge. For example, consider this example from earlier:

![Image from Building eval systems that improve your AI product](https://substack-post-media.s3.amazonaws.com/public/images/b8baec27-cfcb-4d1b-9358-b7c98c0cadf1_1456x556.png)

Reasonable people may disagree on whether or not this is “good enough.” However, it is important that you strive toward making a judgment call on what is good and bad for your product. In this case, we decided that this interaction was a failure.

#### 2. Build and validate the judge

After you have collected the ground-truth data labeled by your domain expert, you are ready to build and validate the judge. Do not use your entire dataset to build and test your judge. This leads to overfitting, where you iterate toward performing well on examples you observe but fail on new, unseen data.

Instead, split the ground-truth data into three distinct sets:

- **Train set (10%–20%):** A small set of clear examples, including the expert’s critiques, to use in the judge’s prompt
- **Dev set (40%–45%):** A larger set used to iteratively test and refine the judge’s prompt
- **Test set (40%–45%):** A held-out set, untouched during development, for a final, unbiased measurement of the judge’s performance

This process of refining your judge’s prompt on the dev set is a meta-evaluation task. You are evaluating your evaluator. It is also where you will discover the nuances of your own quality bar. As [research](https://arxiv.org/abs/2404.12272) on “criteria drift” has shown, the process of reviewing LLM outputs and aligning a judge helps you articulate and refine your own standards.

Below is a visualization of this LLM-as-a-judge alignment process at a high level.

![Image from Building eval systems that improve your AI product](https://substack-post-media.s3.amazonaws.com/public/images/0aae88ca-fa18-437b-aaec-a4ea61f2ff28_1456x943.png)

#### 3. Measure what matters: TPR/TNR over accuracy

A common impulse is to measure a judge’s performance with a single accuracy score, but this can be dangerously misleading. Imagine an AI system that succeeds 99% of the time. A judge that always predicts “pass” will be 99% accurate, but it will never catch a single failure. This is a common issue with **imbalanced datasets**, where one outcome is far more frequent than the other.

Instead of accuracy, the **true positive rate (TPR)** and **true negative rate (TNR)** measuredtogetherwill tell you precisely how your judge is likely to make mistakes. In plain language:

- **TPR:** Of all the examples that *should* pass, what percentage did the judge correctly label as “pass”?
- **TNR:** Of all the examples that *should* fail, what percentage did the judge correctly label as “fail”?

A judge with a high TPR but low TNR is good at recognizing success but lets failures slip through. The acceptable tradeoff depends on your product. For an AI providing medical advice, a false negative (failing to catch a harmful suggestion) is far more costly than a false positive. For a creative writing assistant, a false positive (flagging a good response as bad) might be worse, as it could stifle creativity.

Once you know your judge’s TPR and TNR, you can even statistically correct its raw scores to get a more accurate estimate of your system’s true failure rate. For example, if your judge reports a 95% pass rate on 1,000 new examples but you know it has a 10% chance of mislabeling a failure as a pass, you can adjust that 95% score to reflect the judge’s known error rate. (The mathematical details for this correction will be in an appendix).

This rigorous, human-led validation process is the only way to build an evaluation system your team can rely on. When you present a dashboard showing a 5% failure rate for a critical feature, your stakeholders need to believe that number reflects reality. This process is how you build that trust.

#### **Considerations for specific architectures**

There are special considerations and strategies to keep in mind when designing evals for multi-turn conversations, RAG pipelines, and agentic workflows. We address each of them below.

**Multi-turn conversations**

Many AI products are conversational, which introduces the challenge of maintaining context over time. When evaluating conversations, start at the highest level: Did the entire session achieve the user’s goal? This session-level pass/fail judgment is the most important measure of success.

When a conversation fails, the next step is to isolate the root cause. A common mistake is to assume the failure is due to the complexities of dialogue. Before you dive into multi-turn analysis, try to reproduce the failure in a single turn. For example, if a shopping bot gives the wrong return policy on the fourth turn, first ask it directly: “What is the return policy for product X1000?” If it still fails, the problem is likely a simple knowledge or retrieval issue. If it succeeds, you have confirmed the failure is conversational—the bot is losing context or misinterpreting information from earlier in the dialogue. This diagnostic step saves significant time by distinguishing simple knowledge gaps from true conversational memory failures.

**Retrieval-augmented generation (RAG)**

A RAG system is a two-part machine: a retriever finds information, and a generator writes an answer using that information. These two parts can fail independently, and an end-to-end correctness score will not tell you which one is broken. You must evaluate them separately.

First, evaluate the **retriever**. Treat it as a search problem. To do this, you need a dataset of queries paired with their known correct documents. The most critical metric for RAG is often **recall@k**. This measures what percentage of all the truly relevant documents are captured within the top *k* results your system retrieves. Recall is paramount because if the correct information is not retrieved, the generator has no chance of producing a correct answer. Modern LLMs are surprisingly adept at ignoring irrelevant noise in their context, but they cannot invent facts from missing information.

The value of *k* is a critical tuning parameter that depends on your task. For a simple query requiring a single fact, like “What are the property taxes for 123 Main St.?,” a small *k* (e.g. 3 to 5) is often sufficient. The main goal is to ensure that the one correct document is retrieved. However, for a complex query that requires synthesizing information from multiple sources, such as “Summarize recent market trends for 3-bedroom houses in downtown,” you'll need a larger *k* (e.g. 10 to 20) to provide the generator with enough context to build a comprehensive answer. While recall is the priority for the initial retrieval stage, **precision@k** (the fraction of retrieved documents that are relevant) becomes important in systems with a second, re-ranking stage designed to select the best few documents to pass to the LLM.

Once your retriever is performing well on a diverse set of queries, you can evaluate the **generator**. Here you are primarily measuring two things. First is **faithfulness**: does the generated answer stick to the facts provided in the retrieved context, or is it hallucinating? Second is **answer relevance**: does the answer directly address the user’s original question? An answer can be perfectly faithful to the source documents but still fail to be relevant to the user’s intent.

Fix your retriever first. Only when you are confident that the right information is consistently being fed to your generator should you focus heavily on improving the generation step. It should be noted that RAG is a very nascent topic, and there is still much to be explored in terms of evaluating and optimizing it. [See this series](https://hamel.dev/notes/llm/rag/not_dead.html) for an exploration of advanced RAG topics.

**Agentic workflows**

Agents—which can execute a sequence of actions, like tool calls, to accomplish a goal—are the most complex systems to evaluate. A single pass/fail judgment on the final outcome is a good start, but it is not diagnostic. When an agent fails, you need to know *which* step in the chain of reasoning broke.

For this, a **transition failure matrix** is an invaluable tool. Think of an agent’s workflow as a series of states or steps, like an assembly line. The agent moves from one state (e.g. *generating\_sql*) to the next (e.g. *executing\_sql*). A transition failure matrix is a chart that shows you exactly where the assembly line breaks down most often.

![Image from Building eval systems that improve your AI product](https://substack-post-media.s3.amazonaws.com/public/images/ce7b525b-3a4b-456d-b8ee-673e3995398e_1457x1003.png)

The rows of the matrix represent the last successful step, and the columns represent the step where the failure occurred. By analyzing traces of failed agent interactions and mapping them onto this matrix, you can quickly spot hotspots. Instead of guessing, you can see with data that, for example, your agent fails most often when trying to execute the SQL it just generated, or when it misinterprets the output from a tool call. This transforms the overwhelming task of debugging a complex agent into a focused, data-driven investigation.

With these targeted evaluation strategies for complex systems, you are now ready to operationalize your full evaluation suite.

## Phase 3: Operationalizing evals for continuous improvement

Having a suite of trusted evaluators is a major milestone, but it is not the end goal. An evaluator is a tool; a system of evaluation is a process. The final phase is to build a process that creates a flywheel, using your evals to drive continuous product improvement. This system has two distinct components: a safety net to prevent backsliding and a discovery engine to find new problems.

### The safety net: Code-based evals in continuous integration (CI)

Your first goal is to prevent old bugs from reappearing. The best way to do this is by integrating your evaluators into a CI pipeline. The foundation of CI for AI is a **golden dataset**, a curated collection of examples that represent the most important scenarios for your product. This is not a random sample of production data; it is a purpose-built stress test. It should include examples covering your core features, challenging edge cases you discovered during error analysis, and, most importantly, a regression test for every significant bug you have fixed.

On every code or prompt change, your CI pipeline runs the system against this golden dataset and checks the outputs with your fast, deterministic, code-based evaluators. If any check fails, the build breaks, and the regressive change is blocked from going to production.

It is crucial to understand what this safety net does and does not guarantee. A passing CI build means you have not reintroduced known failures. It is a signal of *stability*, not overall production quality.

### The discovery engine: LLM-as-a-judge and guardrail evals in production

While CI protects you from “known unknowns,” production is where you find the “unknown unknowns.” Your production monitoring system is a discovery engine for new failure modes. The process begins with comprehensive logging. You should log the entire trace of the interaction: the user input, all intermediate steps and tool calls, and the final output.

You then run your validated evaluators on a sample of these traces. Since many of your most important evaluators—especially the LLM judges—may be too slow or expensive to run in real time, this is typically done **asynchronously**. The results feed into a monitoring dashboard, where you track your key quality metrics over time. By using the TPR and TNR you calculated for your judges, you can even statistically correct their raw outputs to get a more accurate estimate of your system’s true success rate.

For critical, high-impact failures, you can use a special type of synchronous evaluator called a **guardrail**. These run in the request path and can block, redact, or regenerate a response before the user ever sees it. Most guardrails are fast, deterministic checks—like regexes, keyword blocklists, or schema validators—because they must add minimal latency. Crucially, they must have a very low false-positive rate; blocking a valid response is a production bug. While less common, an LLM-as-a-judge *can* be used as a guardrail, but only if the application’s latency budget allows for it. The decision involves a direct tradeoff: in high-stakes domains like medical advice, the cost of a false negative (letting harmful advice through) may justify using a slower, more powerful judge inline; in creative applications, the cost of a false positive (blocking a valid response) might be too high.

### Closing the loop: The improvement flywheel

Your CI safety net and your production discovery engine work together to create a powerful improvement loop. When your production monitoring flags a new or drifting failure mode, it triggers a new round of error analysis. For example, you might notice a spike in location ambiguity failures after launching a new feature. A manual review of the flagged traces reveals the model is confusing “West Berkeley” with the (non-existent) “Berkeley West.”

This discovery feeds back into the development process in two ways. First, you improve the product itself, perhaps by refining a prompt to better handle directional qualifiers. Second, and just as important, you improve your evaluation artifacts. You add the West Berkeley example to your CI golden dataset. Now any future change that reintroduces this specific confusion will be automatically caught.

This flywheel—monitor, analyze, improve, deploy—is the engine of AI product quality. It ensures that every failure, once discovered, makes your system permanently smarter and more robust.

## Effective evaluation systems are a process, not a dashboard

Building an evaluation system that actually improves your AI product requires a shift in mindset: away from a focus on tools and generic scores, and toward a rigorous, human-centered process that identifies and addresses issues that actually matter.

This process begins with error analysis to find the real problems in your product, not by adopting generic metrics. It relies on a single domain expert and clear, binary labels to establish a consistent quality bar. The process demands the right tool for each job—a cheap, fast code-based check for objective rules and a carefully validated LLM-as-a-judge for subjective nuance. Finally, it operationalizes these evaluators within a CI/CD flywheel, creating a system that can help you spot bugs faster.

Prompting is just one small part of building a great AI product. The real competitive advantage comes from building a deep understanding of your system’s failures through a robust evaluation lifecycle. This is what gives your team the confidence to iterate quickly and ship an AI product that consistently delivers value.

## Questions

It is impossible to explain everything about evals in a single post. Hamel and Shreya have documented the most frequent questions that people have about evals [here](https://hamel.dev/blog/posts/evals-faq/) ([PDF version here](https://hamel.dev/blog/posts/evals-faq/evals-faq.pdf)).

*Thanks,* *[Hamel](https://www.linkedin.com/in/hamelhusain/) and [Shreya](https://www.linkedin.com/in/shrshnk/)! For more, check out [their course](https://bit.ly/4myp27m)—and get 35% off using code LENNYSLIST (the largest discount they’ve ever offered).*

*Have a fulfilling and productive week 🙏*

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
