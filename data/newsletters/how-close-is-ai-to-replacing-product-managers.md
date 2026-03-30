---
title: "How close is AI to replacing product managers?"
subtitle: "Closer than you think"
date: "2024-07-09"
type: "newsletter"
tags: ["ai", "strategy", "product-management", "newsletter", "design", "career"]
word_count: 7120
---

*👋 Hey, [Lenny](https://twitter.com/lennysan) here! Welcome to this month’s ✨ **free edition**✨ of Lenny’s Newsletter. Each week I tackle reader questions about building product, driving growth, and accelerating your career. If you’re not a subscriber, here’s what you missed this month:*

1. *[Counterintuitive advice for building AI products](https://www.lennysnewsletter.com/p/counterintuitive-advice-for-building)*
2. *[General management, functional, and hybrid models: Which org design works best for top companies?](https://www.lennysnewsletter.com/p/general-management-functional-and)*
3. *[When and how to run a billboard campaign](https://www.lennysnewsletter.com/p/when-and-how-to-run-a-billboard-campaign)*

*Subscribe to get access to these posts, and every post. For more: **[Best of Lenny’s Newsletter](https://www.lennysnewsletter.com/p/the-best-of-lennys-newsletter-2023)** | **[Hire your next product leader](https://www.lennysjobs.com/)** | **[Podcast](https://www.lennysnewsletter.com/podcast) | [Lennybot](https://www.lennybot.com/) | [Swag](https://lennyswag.com/)***

In my quest to develop a comprehensive benchmark to measure progress toward AI replacing PMs, I teamed up with full-time prompt engineer (and past collaborator) [Mike Taylor](https://www.linkedin.com/in/mjt145/) on a piece that will surely blow your mind. I’d love to hear your reactions in the comments.

[Leave a comment](https://www.lennysnewsletter.com/p/how-close-is-ai-to-replacing-product/comments)

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/80761805-aa31-4255-ae20-8a66abd3de16_8000x4000.png)

The AI industry moves fast, which leads to lots of confusion about what AI is actually good at. OpenAI, Anthropic, and all the other AI companies are constantly testing their latest models’ math, language, and coding abilities. However, these abstract benchmarks don’t tell us how much of *your* job AI is able to potentially replace, now or in the near future—which is really what we care about.

To make matters more challenging, expert prompting is necessary to make responses from a model any good. **As a result, most people underestimate how close ChatGPT and other tools are to replacing the work of a human. Whenever you see the headline of an article or scientific paper that says “ChatGPT can’t do x,” it’s usually because they didn’t use the latest model and didn’t make use of prompt engineering.** For example, the authors of the paper “[ChatGPT is fun, but it is not funny](https://arxiv.org/abs/2306.04563)” used only basic prompts like “Tell me a joke, please!” and were testing GPT-3, not GPT-4. When I tried this same task myself, applying some prompting principles, I found that [you can very much get the newer models of ChatGPT to tell a funny joke](https://www.saxifrage.xyz/post/chatgpt-joke). “[Language Models are Few-Shot Learners](https://arxiv.org/pdf/2005.14165.pdf)” showed that prompting techniques could drive around a 30% improvement in accuracy on some tasks, and if you add multiple examples of the task being done correctly, you can get an overall 50% to 60% accuracy boost.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/b51d1aab-fe4e-474e-b86d-f7770b798575_1198x630.png)

Thus, to realistically measure how close AI models are to replacing the work of a human—in our case, a product manager—we need to collect real-world examples of difficult PM tasks that AI tools seem to struggle with, use the best current model, and apply *prompt engineering* principles to give the models the best chance possible. (This is [the same approach Google recently used](https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf) to test Gemini 1.5’s capabilities.)

I work as a professional prompt engineer and recently published a book with O’Reilly, *[Prompt Engineering for Generative AI](https://www.amazon.com/Prompt-Engineering-Generative-Ai-Future-proof/dp/109815343X)*, so I’ll use my prompting skills to see if I can get an AI tool to beat humans at a set of PM tasks. We’ll evaluate who “wins” at each task with blind Twitter/X polls, where voters don’t know which response is AI or human. From this exercise, our goal is to understand how close AI is to automating the PM role, and what task areas are most likely to be delegated first.

### Sourcing hard tasks

To establish a baseline of what tasks are hard for AI, [Lenny put out a call for tasks](https://x.com/lennysan/status/1785055728903897209) that PMs have tried and failed at getting ChatGPT to do:

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/9b981867-2dc2-459d-aa73-162a06cb58e4_876x720.png)

Our plan was to take three of these tasks and see if I could prompt the AI to do a better job than a human. Whether one answer to a task is “better” than another is subjective, even among humans. With AI in the mix, some people dislike its overly formal tone, verbosity, or lack of personality, while others appreciate AI’s comprehensiveness, objectivity, and well-structured formatting. For the purposes of this experiment, we're interested in both how people rate the answers and their comments about why.

**In order to run a fair test, we got people to rate which answer to the task was better, without revealing which was AI. The results were shocking:**

- **The AI answer beat the human answer in two out of three tasks!**
- **70% to 80% of people guessed which answer was AI, but many still preferred it**
- **There is room for improvement—small changes to the prompt yielded better results**

This was only a small test, and AI is still a long way from working independently as a product manager. But it’s important to remember that right now is the worst AI will ever be at any task—these models may continue to get twice as good every six months.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/0996b5d4-1ba8-43a6-93a0-7570912983a9_1600x900.png)

### Our method for testing AI performance

From the initial shortlist of hard PM tasks we got in response to Lenny’s social posts, we selected three that we thought would be most impactful to day-to-day work:

1. **Developing a product strategy**
2. **Defining KPIs**
3. **Estimating the ROI of a feature idea**

My method was to look at what a typical human response to each task might be and then write a prompt to solicit a similar response quality and structure from AI. We then asked people on X which of the two answers they thought was better.

Prompts were run in the OpenAI Playground (which is available to anyone with a developer account). This let us set our own [system prompt](https://docs.anthropic.com/en/docs/system-prompts) (the instructions for how the model should behave) rather than using the [ChatGPT system prompt](https://www.reddit.com/r/OpenAI/comments/1akye4v/chatgpt_system_prompt_is_1700_tokens_if_you_were/), which has a lot of extra words that might throw off our test.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/38a67f2a-e478-4991-9dc8-3430524914c6_1600x841.png)

The actual evaluation poll was run by Lenny tweeting screenshots of two solutions, without saying which one was AI. People were encouraged to vote on which they thought was the better answer, and also tell us which one they thought was made by AI:

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/3fe35ba3-5cc6-4cd8-9a0e-d3912a762a0c_1208x1296.png)

We ran this as a blind test because that’s the only fair way to evaluate performance. Think of it like the [Coke vs. Pepsi challenge](https://en.wikipedia.org/wiki/Pepsi_Challenge): when Pepsi is in unmarked containers, people prefer the taste, but when people see the Coca-Cola brand on the can, they prefer that instead. Given that people have so many opinions on AI, both positive and negative, revealing which response was AI could have skewed the test. (Perhaps it’s self-preservation, but when I compare AI output with my own work, I think it’s bad, yet when I run blind tests, people often prefer the AI.)

### Finding training and evaluation data

The hardest part of doing a blind evaluation was finding real examples and results from a human doing the task. When we googled these PM tasks, we mostly got blog posts with advice on how to approach the task, but with no tangible real-world examples.

One rare exception was the fantastic PM interview questions database curated by [Exponent](https://www.tryexponent.com/questions) (no affiliation; I just like their content), a website that helps people prepare for job interviews at top-tier tech companies like Google, DoorDash, Amazon, Airbnb, Spotify, and Meta and is the official interview prep partner for schools like Stanford, Yale, Cornell, and Columbia. We used PM answers from Exponent as the human responses for all three selected tasks. I’ll add that there could certainly be better human answers, but thousands of PMs are using these answers in their interview prep monthly, so it’s a strong benchmark to use.

### Test results

Now let’s get to the test results. We’ll first present the task and the two solutions (one AI, one human). Then we’ll reveal how they did when we tested them with X polls and discuss what that means for product managers today. After sharing the results, I’ll also share my prompts for you to use and explain what techniques I deployed to get above-average results.

## Task **#**1: Developing a product strategy

### What AI struggles with:

One of the most common complaints about AI is that it can’t think creatively, and therefore makes for a poor sparring partner when developing a strategy. This is so pervasive that I’ve even seen people claim they use ChatGPT to decide what *not* to do, to avoid any strategy or action that was too obvious.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/e6fbb40e-77ad-4ce3-89c0-aa6e72ffe80b_1196x538.png)

This is a clever use of AI, but I feel that it sells the technology’s capabilities short. LLMs are trained on all the text available on the internet (and beyond), so the default answer you get is going to be approximately the average of the internet. But with better prompting, you can do much better than average, by steering it toward less obvious answers. Developing a strategy is the skill Lenny thinks will become [most dominated by AI](https://www.lennysnewsletter.com/p/how-ai-will-impact-product-management#%C2%A7developing-a-product-strategy-and-vision-significantly-impacted), so let’s see where it’s at today.

### The real-world scenario we tested:

**Imagine you’re the PM for YouTube Music. What is your strategy for the next year?**

#### [Solution A](https://docs.google.com/document/d/1-KCePp5C1TWAS6zj1RyVYw3r7-qJtMjAGBKSvoxZqU0/edit?usp=sharing):

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/bc3e1f6c-9ede-45b2-a6c5-5090ff845687_1124x1222.png)

#### [Solution B](https://docs.google.com/document/d/17jPWOESqaWHHMuSjJ2CMmt2Qs3O1mEcT5Gfspg-TVhY/edit?usp=sharing):

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/bc76128b-3922-49c8-b0cb-7bc8dceb4e3a_1172x1402.png)

### Which was the winner?

The preferred solution was B, which was the AI version, with 55% of the votes (when you include tied votes)! This was a close contest, but a tie is still a win for AI, because it’s so much cheaper and quicker to have AI develop your strategy versus a human. Shockingly, solution B won despite 77% of people correctly guessing it was the AI answer. The human answer comes from [Harshit G’s answer](https://www.tryexponent.com/questions/2930/pick-a-product-that-you-have-been-using-over-the-past-6-months-you-are-the-new-pm-for-it-the-cpo-ask) to a job interview question on Exponent.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/2975710d-1fb6-4b80-9139-883ac3c37200_2100x1526.png)

Given that product strategy is so, well … strategic, I’d suspected AI would be further behind on this task. The overriding criticism of the AI version, B, was that it felt like a list of features, rather than a true strategy. I expect this is fixable over time: reasoning ability is an active research area and will likely be the next major leap forward with GPT-5. Humans win on actually being strategic (versus tactical), for now.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/52558cdd-8a67-4139-878d-d651569ddfd4_1100x370.png)

I put a lot of work into the prompts to make it harder to guess which was AI, because I assumed people would reject the AI work if they knew it wasn’t human. Not so, as the majority of people who voted for B knew it was AI but still chose it as the better answer. This was unprecedented for me, and it says a lot about the growing familiarity with and acceptance of AI tools.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/e90fb2ad-c961-4c1a-a478-134a4dd5ac09_1178x268.png)

Sometimes it’s small details that humanize our work, as in solution A, which mentions a famous cricket player. AI by default produces average answers based on the highest-probability answer, whereas humans can surprise and delight with unexpected connections between concepts. To make your work more noticeably human and less replaceable by AI, incorporating your niche interests and passions into your work seems like it would be a good strategy.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/0870f5d2-ae7a-4eb9-acf9-cc7f51fd03e2_1178x328.png)

One thing to note is that we changed up the prompt slightly between [X](https://x.com/lennysan/status/1798412435394904447) and what we posted on [LinkedIn](https://www.linkedin.com/posts/lennyrachitsky_help-me-with-one-more-ai-experiment-which-activity-7210797636138725376-h9px/). There were a couple of dead giveaways in the first version of solution B posted on X that I wanted to see if I could correct for by adjusting the prompt. For example, the human solution, A, had grammatical errors and a niche reference to a famous cricketer, so I added instructions to my prompt to “add obscure references” and “make some minor grammatical mistakes due to being busy.” As a result, the score did differ between the social networks, giving AI an advantage on LinkedIn: 59% versus 38%. If we had run v2 of solution B on both social platforms, AI would have had an even more dominant win.

## Task #2: Defining performance metrics

### What AI struggles with:

Many of the comments we got on social media mentioned that ChatGPT had a lack of creativity in coming up with performance metrics, and, to be fair, this is a tricky topic that most humans also get wrong. I worked for over 200 startups as a growth-marketing-agency owner, and I would say that less than 10% were confident they were measuring the right performance metrics. But when you do, you can unite an entire organization around a single goal, and magic happens—as was the case with [Duolingo and CURR](https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth) (current users retention rate), a key metric they focused on.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/d0171ec0-d4be-41d7-a5af-5098dcb9a78f_1410x556.png)

While ChatGPT does perhaps tend to go with the obvious metrics (I haven’t seen it come up with anything as creative as CURR), I was confident we could get it thinking a little deeper about how different metrics stack together. The key was breaking things down by department before bringing everything together in a North Star goal, which is an approach I saw often in human-written responses to this type of task.

### The real-world scenario we tested:

**What are the most important metrics for DoorDash?**

#### [Solution A](https://docs.google.com/document/d/1n8fC1RJE--r7Rn7oVAXByPw84JCqdrreB5UtGlIppZw/edit?usp=sharing):

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/b828e11a-683b-409b-b879-3479e781cd6f_1476x1012.png)

#### [Solution B](https://docs.google.com/document/d/1JBUwbRMiisomvIljTVBjpbBkR5TZPH7BD3BnZeHmSno/edit?usp=sharing):

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/341011ce-32d7-4bf5-aa0f-6b9a2663326a_1476x888.png)

### Which was the winner?

The preferred solution was A, with **68%** of the votes. This was the **AI** **version**, which 70% of people guessed correctly. If you credit any tied votes to AI, it scored 86%! The human answer comes from [Anonymous Muskox’s answer](https://www.tryexponent.com/questions/3852/what-metrics-will-you-measure-for-doordash) to a job interview question on Exponent.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/c636b65e-9c0c-47e6-8c43-b4ac666f2a8f_2100x1526.png)

This was a big win for the AI, with a majority of people admitting it was the better answer despite suspecting it was done by the AI. Again the primary way of identifying AI was that it gave a more comprehensive answer. I actually took steps to decrease the verbosity considerably with this prompt, but it was still enough to get noticed. However, for short tasks like this I have found that being more verbose than a human can sometimes lead to a better answer overall.

Many people were fairly certain that A was AI, and they cited how comprehensive or long-winded the answer was as the obvious tell. If you’re trying to hide whether your answer was AI-generated, finding ways to get it to [quit yapping](https://www.reddit.com/r/ChatGPTPromptGenius/comments/1ahu86n/stopping_chat_gpt_from_yapping/) seems to be the key.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/2438ba1b-d845-4770-831e-74645bf6a42e_1178x160.png)

Sometimes people were wrong about whether an answer was AI but were right in their criticisms. I think if we can get AI to be considered on the same level as a human, that in itself is a win, because AI costs pennies and takes seconds to answer, so can be scaled significantly, leaving human product managers to do higher-value work, or do the research necessary to get us past intern level.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/6110a902-288f-4827-b78f-f156844ceb97_1178x286.png)

We saw many ties across the tests we ran, sometimes because respondents thought both were equally good and other times because they were equally bad. Whether equally good or bad, equal is a win for AI! Especially when you consider it will continue to get better from here, with every possibility that in 6 to 12 months AI could be edging out the average human across multiple PM tasks. We do have to remember that this is a very hard test for AI, given that Lenny’s audience is full of experienced product managers who likely have their own opinions on how to do the task.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/537bfdc9-53fc-49bb-80a8-758426f05918_1192x1042.png)

## Task #3: Estimate ROI

### What AI struggles with:

Another task many PMs were frustrated with getting AI to do well was prioritizing product features. The difficulty with this type of task is that ChatGPT doesn’t have all of the context that you have about your organization and the various tradeoffs that need to be made. AI chatbots that “talk to your data” still don’t solve the problem that most of the important things in your organization are tacit, not explicit, knowledge, and not written down anywhere.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/42ae58c6-35e9-4834-8421-1153547f1e1e_850x610.png)

In the future, when AI tools have been a fly-on-the-wall participant in every conversation across your business, can access all of your documents, and can fit all of that in its context window (the amount of information it can take into the prompt), they will likely become superhuman at estimating ROI in particular. However, even without these advantages, I’d suspected that AI could be better with just a little bit of advanced prompting.

### The real-world scenario we tested:

**Imagine you’re a PM for Meta about to release a new Jobs feature. The launch will happen in 2 weeks. How do you measure the success of this product in the short and long term?**

#### [Solution A](https://docs.google.com/document/d/1Fj6Ja0bbWtaZsXSHiObSrTjEGf5bH-iZF5-OHVUd5tI/edit?usp=sharing):

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/4d07fd90-89c1-4d4b-81e0-9d13ac6909ff_1159x1600.png)

#### [Solution B](https://docs.google.com/document/d/1i4johrJ9FqW39aGbfjfCPYIgxUQ0y3WcTjz_qXchEFo/edit?usp=sharing):

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/5b63ae71-ddf9-4bf4-a9e1-9789142db371_1057x1600.png)

### Which was the winner?

The preferred solution was A, with **58%** of the votes, which was the **human version**. This was a very close race, with many people saying they only picked A for marginal reasons. And only 65% of people guessed correctly which was AI. The human answer comes from [Avi G’s answer](https://www.tryexponent.com/questions/3811/if-you-were-a-pm-at-meta-and-you-are-about-the-release-jobs-feature-and-this-is-a-new-feature-launch) to a job interview question on Exponent. I actually modified it by adding the numbers, as the original human answer didn’t supply any estimates and I wanted it to be a fair fight. I suspect the AI would have won if it was the only one with numbers.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/2ba73a49-3e44-49a1-bb92-9b2313e30835_2100x1526.png)

We got far fewer people voting on this one; I guess I scared people away with the math! So we posted it on LinkedIn as well to get more votes. This time we kept both versions the same as what we tested on X. One of the common misconceptions is that LLMs are bad at math (an early weakness of LLMs that is now largely solved with [chain-of-thought](https://arxiv.org/pdf/2201.11903) prompting), so I think I would have fooled more people with this. If you give LLMs plenty of thinking time so they can work things out step-by-step, they are actually fairly good at providing reasonable estimates. Nevertheless, we got a very tight race for the AI and saw a lot of the same patterns we saw in other tests.

When I’m evaluating AI performance for my clients, it frequently becomes clear that we aren’t putting enough effort into measuring human performance. There were disagreements on whether the human answer was good or not, as it did not focus on monetization metrics. Given that this theoretical task was for Meta, which is famously willing to forgo profits for decades before switching on monetization for a feature/platform, I think it’s fair to say that the human-given answer “$ made” wouldn’t be the main metric for launching a new feature. Plenty of PMs disagree, however, and that’s particularly valid now that the era of zero-percent interest rates is over and VC funding is less frothy. How you measure impact is a function of how you measure strategy, which is why these tasks are always going to be somewhat subjective.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/47674042-5d36-485e-b466-cf113187479e_1192x536.png)

In their comments on X and LinkedIn, many people guessed which option other people would vote for, separate from their own rating. This adds another interesting dimension to evaluations where the responses are public: there’s a risk of groupthink once the vote sways in one direction, and bias if our mental models of what other people think about AI are out of date. I’m finding that attitudes to AI are changing rapidly over time, and clients that were previously skeptical of AI are suddenly all-in months later. It’s best to run private blind tests periodically to see what people really think about AI results.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/3320e619-d22b-43f6-b528-c12c8199dd7f_1192x978.png)

Another type of answer I saw a lot was “neither was good.” This may be a function of conducting the test publicly in Lenny’s social media feed, where many ambitious PMs are hoping to prove themselves and stir up a discussion. The next time I do this test, I would give people a way to vote privately, and I suspect that would lead to more interesting results—and perhaps even more favorability toward AI results.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/b5346689-0299-4678-ab16-fc129cd1d705_1192x316.png)

## What comes next?

Testing head-to-head on three tasks isn’t a comprehensive evaluation, so we want to extend these benchmarks across more types of difficult PM tasks. This section describes our suggested approach to doing so. We’d love to hear from you in the comments here on Substack or on [social media](https://x.com/hammer_mt) about which may be good ideas, and what we may have missed that would make the results more trustworthy and believable to you.

Lenny [once defined](https://www.lennysnewsletter.com/p/what-is-product-management#%C2%A7the-job-of-a-product-manager) the job of a product manager as to “**deliver business impact by marshaling the resources of your team to identify and solve the most impactful customer problems**.” He also defined a comprehensive framework for categorizing PM skills (below). Aligning the hard PM task benchmarks with this framework will help us track what percentage of the overall PM role is currently automatable.

1. **Shape the product**

1. Developing a product strategy and vision
   2. Setting goals
   3. Creating specs
   4. Discovery
   5. Building a roadmap
   6. Giving product/design feedback
2. **Ship the product**

1. Quality assurance
   2. Fighting for budget/resources
   3. Unblocking blockers
   4. GTM
   5. Adjusting resources/priorities when things come up
3. **Sync the people**

1. Running meetings
   2. Communicating important information up and down the ladder
   3. Aligning stakeholders
   4. Aligning your team
   5. Maintaining team morale

To go even deeper, we would explore multiple questions per category to get more diverse and robust results, and run the tests with more models (and potentially different prompting techniques). In particular, I would love to explore whether [Claude 3.5](https://www.anthropic.com/news/claude-3-5-sonnet) or [Google Gemini 1.5](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/) can beat GPT-4o, and how giving a model access to the internet, like [Perplexity](https://www.lennysnewsletter.com/p/how-to-use-perplexity-in-your-pm) has, may change which tasks it can compete at.

One big problem is [data contamination](https://ehudreiter.com/2024/03/12/data-contamination-worries/), where the LLMs learn which answers are “correct” when they are trained on fresh data from the internet, which includes posts like this one that document common LLM failures and reveal what the correct answers are. With an updated post, we would avoid data contamination of the evaluation benchmark by not revealing which solution was AI and just tallying the aggregated results. This would make the evaluation benchmark less accessible (people wouldn’t be able to run the evaluation themselves if we don’t reveal the correct answers), but hopefully there are researchers out there with good suggestions on this front.

The voting mechanism we used wasn’t ideal. Posting on X and LinkedIn and then tallying the votes manually was too open to interpretation, and took too long to be able to run tests more frequently. We would need to change the methodology to support an expanded list of tasks. For inspiration, we’re thinking about how [LMSYS](https://chat.lmsys.org/) handles their chatbot arena, but we’re open to suggestions. The major difference is that we’d also need to collect real human answers to questions like Exponent does and compare them against the LLM responses.

![Image from How close is AI to replacing product managers?](https://substack-post-media.s3.amazonaws.com/public/images/7f764777-4562-49ad-a7f5-70921537bcd8_1600x910.png)

## Bonus: How I created the prompts for these tasks

There are plenty of prompt engineering techniques and tactics to employ to get better performance from AI, but for this exercise I wanted to develop something more formulaic. Here is the process I settled on:

1. Find a real-world example of a human doing the task (for example, on [Exponent](https://www.tryexponent.com/questions/2930/pick-a-product-that-you-have-been-using-over-the-past-6-months-you-are-the-new-pm-for-it-the-cpo-ask))
2. Copy and paste the task into ChatGPT (it helps to convert to [markdown](https://word2md.com/) first)
3. Prompting ChatGPT:

1. *“Make up a version of this but for a fake product, using the exact same structure.”*
   2. *“Make it sound more authentic,” to avoid AI speak.*
   3. *“Write brief instructions for someone who hasn’t seen this example to replicate its structure and style. Do not number your instructions. Only return the instructions.”*
4. Add the instructions and the example plus a role (“As a product manager…”) to create the prompt template
5. Generate the results and match the formatting to the human answer (I save the markdown in VSCode and then copy and paste the preview)

The prompt template structure ends up as follows:

`As a {role} you are tasked with {task} for the provided product.`

`Start by listing assumptions and planning out your answer in a separate bullet point section labeled "Thinking". Then follow the instructions.`

`## Instructions`

`{instructions}`

`Follow the structure in the example exactly:`

`## Example`

`{example}`

**Role**

Many of these tasks are a kind of cultural and political game, where the type of answer that would seem “obvious” to a Silicon Valley executive might feel completely alien to the boss of a consumer packaged goods company. The important part of this prompt is asking the AI to role-play as “As a product manager for a major tech company…,” which helps it get the right cultural references and acronyms that a product manager would use. Without role-playing, you get an average response, which might not match your subjective tastes.

**Instructions**

One of the mechanisms that makes this prompt work is the instruction to “Start by listing assumptions...” AI models (and humans) tend to give better answers when they spend some time planning the answer first, which OpenAI calls “[Giving the model time to think](https://platform.openai.com/docs/guides/prompt-engineering/give-the-model-time-to-think),” also called “[chain of thought](https://arxiv.org/abs/2201.11903)” prompting. In the example I added to the prompt, I made sure to add that assumptions and clarifying questions section so that the model could follow my lead and arrive at a more robust answer. There were also smaller optimizations to the instructions for specific tasks, like in task #1 where I specifically asked it to make obscure references and make minor grammatical mistakes.

**Example**

The most impactful thing in the prompt template is the example we provided. It’s hard to describe exactly how a task should be done, and providing an example allows the AI to pick up on nuances we might not be sufficiently able to describe. Adding at least one example massively improved the reliability of the results, and adding additional examples from a diverse range of scenarios helped further. Although too many examples ran the risk of constraining the AI’s output creativity, as it might follow the examples too strictly. In addition, collecting good examples comes with a cost of your time, so I would try to add a single example first to see if that does a good enough job.

Here are the final prompts I used:

### [Task #1](https://platform.openai.com/playground/p/K00oiCDRAhNkL3c0HWwvHNCs):

`As a product manager for a major tech company similar to Google, Amazon, Microsoft, or Facebook, you are tasked with developing a product strategy.`

`Start by listing assumptions and planning out your answer in a separate bullet point section labeled "Thinking". Then follow the instructions:`

`## Instructions`

`Define the overarching goal of the strategy or product in the first bullet point to set the context for the upcoming points.`

`List each strategic initiative separately as bullet points, giving each a distinct heading that conveys the core action or goal, like "Expanding into Exclusive Original Content."`

`For each initiative, provide a brief explanation of the current state and the rationale for the change or enhancement. Compare with industry benchmarks or competitors to justify the strategy's relevance.`

`Outline the specific benefits or outcomes expected from each initiative, using bullet points for clarity. Make sure these benefits directly relate to the overarching goals mentioned initially.`

`Use a tone that is professional yet engaging, focusing on concise language that clearly communicates the purpose and expected outcomes of each strategy.`

`Incorporate industry-specific terminology to make the strategy sound knowledgeable and well-informed.`

`Conclude each bullet point section with a summary of how the initiative will impact the business or product, emphasizing improvements in user engagement, revenue, or market position.`

`Ensure the entire list maintains a cohesive flow, with each section naturally leading into the next, reinforcing the strategic narrative you are building.`

`Use arrows throughout -> to show how one assumption leads to another.`

`Be brief and authentic.`

`Think deeply about what would actually work for the strategy, based on historical precedents in the tech industry. Cite examples where possible.`

`Have something resembling a real user flow, some explanations behind why.`

`Make something that sounds actually tangible. Don't just provide a templated <words related to improvement> -> <words related to the domain somehow>. The words matter.`

`Don't label each bullet point with "Rationale", "Expected Benefits" etc, just let the text stand for itself.`

`Don't include a summary at the end of the strategy.`

`Keep it concise.`

`Make it more of an actual strategy, and less of a laundry list of tactics.`

`Be colloquial like a real human would, make some minor grammatical mistakes due to being busy and intensely thinking, but maintain professionalism like you would in a job interview.`

`Add obscure references that shows you have a breadth of diverse ideas.`

`## Example`

`**Strategy for the next year**`

`## Thinking`

`- Goal: Increase user engagement and revenue through diversified content offerings and enhanced user experience.`

`- Assumptions:`

`- Users are seeking more original content and personalized experiences.`

`- There is an opportunity to leverage existing technology to improve content discovery.`

`- Cross-platform integration can enhance user loyalty and increase overall satisfaction.`

`- Competitors are focusing heavily on algorithm-driven recommendations, leaving room for more humanized approaches.`

`**Strategy for the next year**`

`-## Thinking`

`- Goal: To enhance user engagement, increase revenue, and solidify market position through unique and innovative strategies.`

`- Assumptions:`

`- Users value exclusive content and personalized experiences.`

`- There is a need for better content discovery tools.`

`- Cross-platform integration enhances user loyalty.`

`- Initiatives must be distinct, innovative, and provide clear benefits.`

`## Strategy for the next year`

`- **Expanding into Exclusive Original Content**`

`- Leverage existing relationships with studios to create "StreamSync Originals," focusing on underserved genres like international dramas, niche documentaries, indie films. Similar to other originals plays by competitors.`

`- Launch series or films that connect with current viewing trends or untapped audiences, i.e. as eco-thrillers / historical fiction → This can attract a broader user base → hook niche audiences, increasing subscription retention.`

`- Offer a mix of premium (subscription-only) and ad-supported viewing options for originals → Catering to different user preferences encourages both subscription upgrades and increased ad revenue, similar to Hulu's dual revenue model.`

`- **Enhancing Content Discovery Through Innovative Features**`

`- Many users feel overwhelmed by choices → Simplify the discovery process with "Highlight Previews." → intelligently selected based on user behavior and current trends → boosts interest in lesser-known titles like TikTok's algo.`

`- Combine algo recommendations with real user reviews and highlight in previews → Building trust and curiosity → more exploration on the platform, i.e. Spotify's Discover Weekly.`

`- Introduce celebrity-curated collections as a regular engagement tool i.e. see LeBron's downtime bing watching playlist. Feature guest curators from various fields like authors, chefs, or athletes to add freshness and a sense of ceremony to content discovery, similar to what Tidal does with artist-curated playlists.`

`- **Cross-Platform Personalization Integration**`

`- Personalization not only helps retain users but also makes them feel at home across all platforms. When I play Fortnite on any platform it's the same. Preferences should sync intuitively across services like StreamSync and SmartFrame.`

`- If a user likes action movies on StreamSync, this data should subtly enhance their experience on SmartFrame with action-themed backgrounds or soundtracks, always allowing customization or opt-out They must feel their preferences are respected without being intrusive.`

`- Cross-utilization of user data can inform content creation → tailoring our originals to better match the preferences seen across our platforms → can lead to more hits, similar to  use of data for original programming. Like how Zynga used in-game data to predict the next hit.`

`LIMIT TO THE TOP FIVE GOOD ANSWERS`

`DON'T USE JARGON OR CORPORATE SPEAK UNLESS IT'S SOMETHING PREVALENT IN SILICON VALLEY CULTURE.`

`DON'T LABEL BULLET POINTS WITH A WORD THEN A COLON, JUST PROVIDE THE BULLET POINT`

### [Task #2](https://platform.openai.com/playground/p/GEmHeIqHCCX2jISAOCGcvEIy):

`As a product manager for a major tech company similar to Google, Amazon, Microsoft, or Facebook, you are tasked with defining performance metrics for the provided product.`

`Start by listing assumptions and planning out your answer in a separate bullet point section labeled "Thinking". Then follow the instructions:`

`## Instructions`

`Start by identifying the core service or product of your hypothetical business, and determine the most crucial metric that aligns with the overarching goals of all stakeholders involved. This is your NorthStar metric. It should reflect the primary measure of success that impacts revenue, user satisfaction, and operational efficiency.`

`Next, define the primary metrics that feed into the NorthStar metric. Break these down into categories based on different user groups or aspects of your business. For each category, list specific, measurable metrics that provide insight into performance and effectiveness. These metrics should be actionable and clearly related to enhancing the NorthStar metric.`

`Use clear, professional language to describe both the NorthStar metric and the primary metrics. Make sure the metrics are logically connected, showing how improvements in the primary metrics directly influence the NorthStar metric. This structured approach ensures that each part of your business contributes to the overall success and objectives of the company.`

`Follow the structure in the example exactly:`

`## Example`

`**What should be the NorthStar metric for StreamLine?**`

`The ideal NorthStar metric for StreamLine would be the "Number of active streamers per day," as this metric is pivotal to the ecosystem's vitality. A greater number of active streamers suggests more content generation and user engagement, which in turn leads to increased advertising and subscription revenues. This also ensures that viewers have a rich variety of content, keeping the platform dynamic and appealing.`

`**To strategically drive our North Star metric, we should rigorously track these primary metrics:**`

`- **Streamers** - Metrics such as Daily Active Streamers, Number of Streaming Sessions per Streamer, and Conversion Rate (from log-in to stream start), along with Average Stream Length, are crucial.`

`- **Viewers** - Key indicators include Daily Active Viewers, Average Viewing Duration per Session, and Viewer Engagement Rate (interactions such as likes, shares, and comments per session).`

`- **Advertisers** - Metrics like Number of Active Campaigns, Average Impressions per Stream, and Ad Click-Through Rates are essential to monitor advertising engagement and effectiveness.`

### [Task #3](https://platform.openai.com/playground/p/AcZv0zJJBqYBkiK4rURuBMO4):

`As a product manager for a major tech company similar to Google, Amazon, Microsoft, or Facebook, you are tasked with estimating business impact/value of a new feature.`

`Start by listing assumptions and planning out your answer in a separate bullet point section labeled "Thinking". Then follow the instructions:`

`## Instructions`

`Begin by identifying the key metrics to assess the success of a new feature, focusing on short-term and long-term impacts. Break these down by the different types of users who will interact with the feature.`

`For the short-term, select metrics that reflect initial user awareness and adoption. These should be straightforward, measurable statistics like the number of users who engage with the feature in specific ways.`

`Include a guardrail metric to monitor any potential negative effects or user feedback that could indicate problems with the feature's implementation or reception.`

`For the long-term, choose metrics that evaluate sustained engagement, user referrals, and the direct outcomes related to your feature’s objectives. These should track deeper usage patterns and more significant impacts.`

`Additionally, set another long-term guardrail to monitor critical undesirable outcomes, focusing on why users might stop using the feature or express dissatisfaction.`

`Organize these elements into a clear, easy-to-read format, distinguishing between different user types and specifying the nature of each metric. This will help in effectively communicating the goals and monitoring the success of the feature.`

`Use Fermi estimations throughout to calculate the potential impact.`

`Follow the structure in the example exactly:`

`## Example`

`Success Metrics: As we introduce this new feature, our immediate goals will center on Visibility and Engagement:`

`_Educators:_`

`- Total number of educators who incorporated the feature into their lessons – 10%`

`- Total number of educators who utilized the progress tracking – 25%`

`10 million educators on the platform x 10% (incorporated into lessons) x 25% (utilized progress tracking) = 0.25 million (250,000) educators utilizing progress tracking.`

`_Guardrail Metric:_`

`- User Complaints – Number of grievances regarding functionality or content quality – 5%`

`## Long-term Focus: We will shift our attention to Sustained Use, Advocacy, and Educational Outcomes:`

`_Students:_`

`- Average number of sessions completed per student – 10`

`- Average number of feature interactions per student – 15`

`300 million students on the platform x 10% (students whose educators use the feature) = 30 million students`

`30 million students x 10 sessions completed per student = 300 million sessions`

`30 million students x 15 interactions per student = 450 million interactions`

`_Educators:_`

`- Average frequency of feature usage among educators – 15 times per month`

`- Number of positive educational impacts reported by educators – 60%`

`1 million educators using the feature x 60% (reporting positive impacts) = 600,000 positive educational impact reports`

`_Guardrail:_`

`- Attrition Rate – Percentage of users discontinuing use due to dissatisfaction or non-engagement – 20%`

### Footnotes

Some further details on the tests we ran:

- X doesn’t let you run polls on images, so we had to ask people to comment and then tally up the votes manually.
- Some people only voted on whether it was AI or not; others only chose their preference. That’s why the numbers don’t fully add up.
- Wherever there is a tie in preference, I treat that as a win for the AI, given that a human worker is orders of magnitude more expensive.

This isn’t intended as a scientific test, but the results should make you think about whether you have been judging AI unfairly, and perhaps it’s further along than you may realize!

*Thanks, Mike! Mike Taylor co-authored the O’Reilly book* Prompt Engineering for Generative AI *and builds AI products at [Brightpool](https://brightpool.dev/). Previously, he built a 50-person marketing agency, working with clients like Booking.com, Time Out, and Monzo. Follow him on [LinkedIn](https://www.linkedin.com/in/mjt145/) and [X](https://x.com/hammer_mt).*

*Have a fulfilling and productive week 🙏*

## 👀 Hiring? Or looking for a new job?

I’m piloting a white-glove recruiting service for product roles, working with a few select companies at a time. If you’re hiring for senior product roles, apply below.

[Apply to join](https://www.lennysjobs.com/talent/)

If you’re exploring new opportunities yourself, use the same button above to sign up. We’ll send over personalized opportunities from hand-selected companies if we think there’s a fit. Nobody gets your info until you allow them to, and you can leave anytime.

**If you’re finding this newsletter valuable, share it with a friend, and consider subscribing if you haven’t already. There are [group discounts](https://www.lennysnewsletter.com/subscribe?group=true), [gift options](https://www.lennysnewsletter.com/subscribe?gift=true), and [referral bonuses](https://www.lennysnewsletter.com/leaderboard) available.**

Sincerely,

Lenny 👋
