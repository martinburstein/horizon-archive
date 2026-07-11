# AI-901 Microsoft Learn Study Materials

Generated from official Microsoft Learn pages for personal study.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI concepts

#### Unit: Introduction to AI

Source: https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/1-introduction/

Welcome!

You're presumably here because you want to learn more about artificial intelligence (AI). Maybe you've heard about AI in the media and want to know more; or maybe you're going to be adopting AI at work or in school, and want to know more about what to expect.

This training module is designed to provide a high-level overview of some core capabilities of artificial intelligence (AI) and give you an *intuition* of how they work. It's not a deeply technical module, and we won't be writing any code or getting into the mathematical details of the machine learning models on which AI is built. Instead, we'll focus on understanding the kinds of things that AI can do, and the basic principles on which it's based.

So, let's go! Move on to the next unit and we'll start our exploration of AI.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

Tip

![Anton avatar.](assets/image_001.png)

**[Ask Anton](https://aka.ms/choose-anton?azure-portal=true)**

*Ask Anton* is an example AI application that you can use to ask questions about the topics covered in this training.

Choose your preferred experience:

- **[Azure-based](https://aka.ms/azk-anton?azure-portal=true)**: A comprehensive AI assistant that uses a large language model deployed in Azure and tools to extract information from Azure documentation. You must have an Azure subscription in which you can create a Microsoft Foundry project and deploy a model.
- **[Browser-based](https://aka.ms/ask-anton?azure-portal=true)**: A basic AI assistant that can answer questions about AI concepts and Microsoft Foundry, and search for relevant documentation using models that run locally in your browser.

*Ask Anton is not a supported Microsoft product or a component of Microsoft Learn or AI Skills Navigator. Just an example of an AI agent for you to explore as you learn about what's possible with AI.*

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI concepts

#### Unit: Generative AI and agents

Source: https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/2-generative-ai/

*Generative AI* is a branch of AI that enables software applications to generate new content; often natural language dialogs, but also images, video, code, and other formats.

For example, a computing history web site could provide a generative AI chat interface into which users can enter questions about key figures, technologies, and events in the history of computing.

![Screenshot of a computing history chat interface.](assets/image_001.png)

The ability to chat with the site and have it generate original responses to questions creates a compelling interactive experience for users.

## How does generative AI work?

The ability to generate content is based on a *language model*, which has been trained with huge volumes of data - often documents from the Internet or other public sources of information.

![Diagram of a generative AI application in which a user chats with a language model.](assets/image_002.png)

Users interact with generative AI language models through *prompts* - natural language statements or questions. The language model in a generative AI solution uses the prompt to initiate the generation of a meaningful response.

Generative AI models encapsulate *semantic* relationships between language elements (that's a fancy way of saying that the models "know" how words relate to one another), and that's what enables them to generate a meaningful sequence of text.

There are *large language models* (LLMs) and *small language models* (SLMs) - the difference is based on the volume of data and the number of variables in the model. LLMs are powerful and generalize well, but can be more costly to train and use. SLMs tend to work well in scenarios that are more focused on specific topic areas or that require easily deployed small models for local applications and agents on devices.

## What are agents?

Agents are software applications built on generative AI that can reason over and generate natural language, automate tasks by using tools, and respond to contextual conditions to take appropriate action.

![Diagram of an agent with a model, instructions, and tools.](assets/image_003.png)

AI agents have three key elements:

- **A large language model**: This is the agent's brain; using generative AI for language understanding and reasoning.
- **Instructions**: A system prompt that defines the agent’s role and behavior. Think of it as the agent’s job description.
- **Tools**: These are what the agent uses to interact with the world. Tools can include:
  - *Knowledge* tools that provide access to information, like search engines or databases.
  - *Action* tools that enable the agent to perform tasks, such as sending emails, updating calendars, or controlling devices.

With these capabilities, AI agents can take on the role of digital assistants that intelligently automate tasks and collaborate with you to work smarter and more efficiently.

## Generative and agentic AI scenarios

Common uses of generative AI and agents include:

- Creating *chat bots* that answer user questions or engage in conversation.
- Implementing AI assistants that assist human users by automating tasks.
- Creating new documents or other content (often as a starting point for further iterative development)
- Automated translation of text between languages.
- Summarizing or explaining complex documents.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI concepts

#### Unit: Text and natural language

Source: https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/5-natural-language-processing/

Natural language processing (NLP) is a broad term that covers AI models and techniques for making sense of language. NLP is the foundation on which generative AI large language models (LLMs) are built.

The techniques NLP is built on enable *text analysis* solutions that can analyze and summarize natural language text. For example, the computing history site could enable users to summarize articles about key historical events and extract specific names, places, and dates from them.

![Screenshot of a computing history site performing text analysis.](assets/image_001.png)

## Text analysis techniques

While many natural language processing scenarios are handled by generative AI models today, there are common text analysis use cases where specialist NLP tools are used to produce predictable results or apply custom rules.

![Diagram of text being analyzed for sentiment, keywords, and summarization.](assets/image_002.png)

- *Language detection* - determining which language (or languages) a document is written in. Language detection is often the first step in a multi-stage text processing workflow.
- *Text classification* - assigning document to a specific category; including *sentiment analysis* to determine whether a body of text is positive, negative, or neutral.
- *Key-term extraction* and *entity detection* - identifying key words or phrases in a document, and finding mentions of entities like people, places, and organizations. A particularly specialized form of entity detection is to detect and redact *personally identifiable information (PII)*; such as names, addresses, telephone numbers, and other private details.
- *Summarization* - Reducing the volume of text while still encapsulating the main points.

## Text analysis scenarios

Common uses of NLP technologies for text analysis include:

- Analyzing document or transcripts of calls and meetings to determine key subjects and identify specific mentions of people, places, organizations, products, or other entities.
- Analyzing social media posts, product reviews, or articles to evaluate sentiment and opinion.
- Implementing chatbots that can answer frequently asked questions or orchestrate predictable conversational dialogs that don't require the complexity of generative AI.
- Redacting PII before sharing or analyzing data to comply with privacy policies and legislation.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI concepts

#### Unit: Speech

Source: https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/4-speech/

*Speech* capabilities in AI applications and agents enable users to interact with them through spoken language.

For example, our computing history site could include a microphone button that allows users to ask questions verbally, and respond by synthesizing spoken answers.

![Screenshot of a computing history site performing speech recognition.](assets/image_001.png)

## Speech recognition

![Diagram of a user's spoken input being converted to text.](assets/image_002.png)

*Speech recognition* is the ability of AI to "hear" and interpret speech. Usually this capability takes the form of *speech-to-text* (where the audio signal for the speech is transcribed into text).

## Speech synthesis

![Diagram of text being converted to audible speech.](assets/image_003.png)

*Speech synthesis* is the ability of AI to vocalize words as spoken language. Usually this capability takes the form of *text-to-speech* in which information in text format is converted into an audible signal.

AI speech technology is evolving rapidly to handle challenges like ignoring background noise, detecting interruptions, and generating increasingly expressive and human-like voices.

## AI speech scenarios

Common uses of AI speech technologies include:

- AI agents that understand spoken input, perform tasks, and respond with spoken results.
- Automated transcription of calls or meetings.
- Automating audio descriptions of video or text.
- Automated speech translation between languages.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI concepts

#### Unit: Computer vision

Source: https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/3-computer-vision/

*Computer vision* is the area of artificial intelligence that deals with the analysis of visual input; such as photographs, videos, and live camera feeds.

For example, we could extend the computing history site to enable users to upload images of vintage computers, which can be analyzed, identified, and described.

![Screenshot of a computing history site performing image analysis.](assets/image_001.png)

## How does computer vision work?

Computer vision is accomplished by using large numbers of images to train a model.

![Diagram of a computer vision model being trained with a large volume of images.](assets/image_002.png)

There are multiple types of computer vision model.

- *Image classification* is a form of computer vision in which a model is trained with images that are labeled with the main subject of the image (in other words, what it's an image *of*) so that it can analyze unlabeled images and predict the most appropriate label - identifying the subject of the image.
- *Object detection* is a form of computer vision in which the model is trained to identify the location of specific objects in an image.
- *Semantic segmentation* is an advanced form of object detection where, rather than indicate an object's location by drawing a box around it, the model can identify the individual pixels in the image that belong to a particular object.
- *Multi-modal* models combine visual features and associated text descriptions, enabling them to generate comprehensive descriptions of images.

## Computer vision scenarios

Common uses of computer vision include:

- Ai agents that can interpret visual input.
- Auto-captioning or tag-generation for photographs.
- Visual search.
- Monitoring stock levels or identifying items for checkout in retail scenarios.
- Security video monitoring.
- Authentication through facial recognition.
- Robotics and self-driving vehicles.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI concepts

#### Unit: Information extraction

Source: https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/6-extract-insights/

AI is commonly used to automate *information extraction* solutions that find information and unlock insights in unstructured data sources, such as scanned documents and forms, images, and audio or video recordings.

For example, we could extend the computer vision capabilities of the computing history application to extract serial numbers and other text from images of computer components and use the information to identify the source computer.

![Screenshot of a computing history site extracting text from an image.](assets/image_001.png)

## How does information extraction work?

The basis for most document analysis solutions is a computer vision technology called *optical character recognition* (OCR), which can identify the location of text in an image. OCR is often combined with an analytical model that can *interpret* individual values in the document, and so extract specific fields. For example, to match text extracted from a receipt to fields in an expense claim submission.

![Diagram of information being extracted from a receipt.](assets/image_002.png)

While most data extraction models have historically focused on extracting fields from text-based forms, more advanced models that can extract information from audio recording, images, and videos are becoming more readily available.

## Data and insight extraction scenarios

Common uses of AI to extract data and insights include:

- Automated processing of forms and other documents in a business process - for example, processing an expense claim.
- Large-scale digitization of data from paper forms. For example, scanning and archiving census records.
- Indexing documents for search.
- Identifying key points and follow-up actions from meeting transcripts or recordings.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI concepts

#### Unit: Responsible AI

Source: https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/7-responsible-ai/

*Responsible AI* is a term used to describe considerations for building AI systems that include guardrails to mitigate the risk of harmful, illegal, or offensive content generation or automated actions.

For example, our computing history solution should avoid providing information to users that would help or encourage illegal or harmful activity.

![Screenshot of a computing history site applying content filters to mitigate risk of harmful content generation.](assets/image_001.png)

*Content filters* are one way that AI systems mitigate the risk of harmful content generation; but a responsible AI solution requires consideration of key principles from its conception, through its design and implementation, and into its operation.

## Principles of responsible AI

Principles for responsible AI include:

| Principle | Description |
| --- | --- |
| Diagram representing fairness. **Fairness** | AI models are trained using data, which is generally sourced and selected by humans. There's substantial risk that the data selection criteria, or the data itself reflects unconscious *bias* that may cause a model to produce discriminatory outputs. AI developers need to take care to minimize bias in training data and test AI systems for fairness. |
| Diagram representing reliability and safety. **Reliability and safety** | AI is based on probabilistic models, it is not infallible. AI-powered applications need to take this into account and mitigate risks accordingly. |
| Diagram representing privacy and security. **Privacy and security** | Models are trained using data, which may include personal information. AI developers have a responsibility to ensure that the training data is kept secure, and that the trained models themselves can't be used to reveal private personal or organizational details. |
| Diagram representing inclusiveness. **Inclusiveness** | The potential of AI to improve lives and drive success should be open to everyone. AI developers should strive to ensure that their solutions don't exclude some users. |
| Diagram representing transparency. **Transparency** | AI can sometimes seem like "magic", but it's important to make users aware of how the system works and any potential limitations it may have. |
| Diagram representing accountability. **Accountability** | Ultimately, the people and organizations that develop and distribute AI solutions are accountable for their actions. It's important for organizations developing AI models and applications to define and apply a framework of governance to help ensure that they apply responsible AI principles to their work. |

## Responsible AI examples

Some example of scenarios where responsible AI practices should be applied include:

- An AI-powered college admissions system should be tested to ensure it evaluates all applications fairly, taking into account relevant academic criteria but avoiding unfounded discrimination based on irrelevant demographic factors.
- An AI-powered robotic solution that uses computer vision to detect objects should avoid unintentional harm or damage. One way to accomplish this goal is to use probability values to determine "confidence" in object identification before interacting with physical objects, and avoid any action if the confidence level is below a specific threshold.
- A facial identification system used in an airport or other secure area should delete personal images that are used for temporary access as soon as they're no longer required. Additionally, safeguards should prevent the images being made accessible to operators or users who have no need to view them.
- An AI agent that offers speech-based interaction should also generate text captions to avoid making the system unusable for users with a hearing impairment.
- A bank that uses an AI-based loan-approval application should disclose the use of AI, and describe features of the data on which it was trained (without revealing confidential information).

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI concepts

#### Unit: Exercise - Explore AI workloads

Source: https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/7b-exercise/

You've learned a lot about AI, and the kinds of things it can do. Now it's your turn! In this exercise, you explore the computing history application we've discussed in this module, and experience the AI workloads it supports for yourself.

![Screenshot of the computing history site used in the lab.](assets/image_001.png)

Launch the exercise and follow the instructions.

[![Button to launch exercise.](assets/image_002.png)](https://go.microsoft.com/fwlink/?linkid=2361944)

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI concepts

#### Unit: Module assessment

Source: https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/8-knowledge-check/

1.

Which is the most accurate description of generative AI?

Generative AI uses a language model to create original content in response to a prompt.

Generative AI is an older form of AI that's superseded by machine learning.

Generative AI is a complex form of AI that can only be used by specialists such as data scientists.

2.

What is an AI agent?

A technology professional who builds AI applications.

Anyone who uses AI applications.

An AI application that can perform tasks on behalf of a user.

3.

An AI application reads email aloud to a user. Which AI speech capability is being used?

Speech recognition

Speech synthesis

Sentiment analysis

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI concepts

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/9-summary/

Hopefully, this module gave you an insight into some of the core capabilities of AI, and an intuition into how they work. We explored many areas of AI, including:

- Generative AI and agents
- Natural language processing (NLP) and text analytics
- Speech
- Computer vision
- Information extraction
- Responsible AI

Now that you have foundational understanding of AI, consider reviewing the following resources.

- To learn more about Microsoft AI solutions, see the [Microsoft AI page](https://www.microsoft.com/ai).
- To learn more about Microsoft's approach to responsible AI, see the [Microsoft responsible AI page](https://www.microsoft.com/ai/responsible-ai).

Tip

![Anton avatar.](assets/image_001.png)

Don't forget, you can **[Ask Anton](https://aka.ms/choose-anton?azure-portal=true)** to learn more!

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to generative AI and agents

#### Unit: Introduction

Source: https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/1-introduction/

Generative AI, and technologies that implement it are increasingly in the public consciousness – even among people who don't work in technology roles or have a background in computer science or machine learning. The futurist and novelist Arthur C. Clarke is quoted as observing that "any sufficiently advanced technology is indistinguishable from magic". In the case of generative AI, it does seem to have an almost miraculous ability to produce human-like original content, including poetry, prose, and even computer code.

However, there's no wizardry involved in generative AI – just the application of mathematical techniques incrementally discovered and refined over many years of research into statistics, data science, and machine learning. You can gain a high-level understanding of how the magic trick is done by learning the core concepts and principles explored in this module. As you learn more about the generative AI technologies we have today, and how it powers a new generation of AI agents; you can help society imagine new possibilities for AI tomorrow.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to generative AI and agents

#### Unit: Large language models (LLMs)

Source: https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/3-language-models/

At the core of generative AI, large language models (LLMs) - and their more compact relations, small language models (SLMs) - encapsulate the linguistic and semantic relationships between the words and phrases in a vocabulary. The model can use these relationships to reason over natural language input and generate meaningful and relevant responses.

Fundamentally, LLMs are trained to generate *completions* based on *prompts*. Think of them as being super-powerful examples of the predictive text feature on many cellphones. A prompt starts a sequence of text predictions that results in a semantically correct completion. The trick is that the model understands the relationships between words and it can identify which words in the sequence so far are most likely to influence the next one; and use that to predict the most probable continuation of the sequence.

For example, consider the following sentence:

> *I heard a dog bark loudly at a cat*

Now, suppose you only heard the first few words: *"I heard a dog ..."*. You know that some of these words are more helpful clues as to what the next word might be than others. You know that "heard" and "dog" are strong indicators of what comes next, and that helps you narrow down the probabilities. You know that there's a good chance the sentence will continue as *"I heard a dog **bark**"*.

You're able to guess the next word because:

- You have a large vocabulary of words to draw from.
- You've learned common linguistic structures, so you know how words relate to one another in meaningful sentences.
- You have an understanding of semantic concepts associated with words - you know that something you *heard* must be a sound of some kind, and you know that there are specific sounds that are made by a *dog*.

So how do we train a model to have these same abilities?

## Tokenization

The first step is to provide the model with a large vocabulary of words and phrases; and we do mean *large*. The latest generation of LLMs have vocabularies that consist of hundreds of thousands of tokens, based on large volumes of training data from across the Internet and other sources.

Wait a minute. *Tokens*?

While we tend to think of language in terms of *words*, LLMs break down their vocabulary into *tokens*. Tokens include words, but also *sub*-words (like the "un" in "unbelievable" and "unlikely"), punctuation, and other commonly used sequences of characters. The first step in training a large language model therefore is to break down the training text into its distinct tokens, and assign a unique integer identifier to each one, like this:

- I (1)
- heard (2)
- a (3)
- dog (4)
- bark (5)
- loudly (6)
- at (7)
- a (3) *already assigned*
- cat (8)

and so on.

As you add more training data, more tokens will be added to the vocabulary and assigned identifiers; so you might end up with tokens for words like *puppy*, *skateboard*, *car*, and others.

Note

In this simple example, we've tokenized the example text based on *words*. In reality there would also be sub-words, punctuation, and other tokens.

## Transforming tokens with a *transformer*

Now that we have a set of tokens with unique IDs, we need to find a way to relate them to one another. To do this, we assign each token a *vector* (an array of multiple numeric values, like [1, 23, 45]). Each vector has multiple numeric *elements* or *dimensions*, and we can use these to encode linguistic and semantic attributes of the token to help provide a great deal of information about what the token *means* and how it relates to other tokens, in an efficient format.

We need to transform the initial vector representations of the tokens into new vectors with linguistic and semantic characteristics embedded in them, based on the contexts in which they appear in the training data. Because the new vectors have semantic values embedded in them, we call them *embeddings*.

To accomplish this task, we use a *transformer* model. This kind of model consists of two "blocks":

- An *encoder* block that creates the embeddings by applying a technique called *attention*. The attention layer examines each token in turn, and determines how it's influenced by the tokens around it. To make the encoding process more efficient, *multi-head* attention is used to evaluate multiple elements of the token in parallel and assign weights that can be used to calculate the new vector element values. The results of the attention layer are fed into a fully connected neural network to find the best vector representation of the embedding.
- A *decoder* layer that uses the embeddings calculated by the encoder to determine the next most probable token in a sequence started by a prompt. The decoder also uses attention and a feed-forward neural network to make its predictions.

![Diagram of the Transformer architecture with the encoding and decoding layers.](assets/image_001.png)

Note

We've greatly simplified the transformer architecture and process in the description and diagram. Don't worry too much about the specific details of how attention works - the key point is that it helps capture linguistic and semantic characteristics of each token based on the contexts in which it's used. If you want a deeper dive into the transformer architecture and how it uses attention, you can read the original *[Attention is all you need](https://arxiv.org/abs/1706.03762)* paper.

### Initial vectors and positional encoding

Initially, the token vector values are assigned randomly, before being fed through the transformer to create embedding vectors. The token vectors are fed into the transformer along with a *positional encoding* that indicates where the token appears in the sequence of training text (we need to do this because the order in which tokens appear in the sequence is relevant to how they relate to one another). For example, our tokens might start off looking like this:

| Token | Token ID | Position | Vector |
| --- | --- | --- | --- |
| I | 1 | 1 | [3, 7, 10] |
| heard | 2 | 2 | [2, 15, 1] |
| a | 3 | 3 | [9, 11, 1] |
| dog | 4 | 4 | [2, 7, 11] |
| bark | 5 | 5 | [9, 12, 0] |
| loudly | 6 | 6 | [3, 8, 13] |
| at | 7 | 7 | [5, 7, 10] |
| a | 3 | 8 | [9, 11, 1] |
| cat | 8 | 9 | [8, -6, 9 ] |
| ... | ... | ... | ... |
| puppy | 127 | 45 | [7, 7, -2 ] |
| car | 128 | 56 | [5, -5, 1 ] |
| skateboard | 129 | 67 | [4, 7, 14] |

Note

We've kept things simple by using vectors with only three elements (which will help us visualize them in three-dimensions later). In reality, the vectors have thousands of elements.

### Attention and embeddings

To determine the vector representations of tokens that include embedded contextual information, the transformer uses *attention* layers. An attention layer considers each token in turn, within the context of the sequence of tokens in which it appears. The tokens around the current one are weighted to reflect their influence and the weights are used to calculate the element values for the current token's embedding vector. For example, when considering the token "bark" in the context of "I heard a dog bark", the tokens for "heard" and "dog" will be assigned more weight than "I" or "a", since they're stronger indicators for "bark".

Initially, the model doesn't "know" which tokens influence others; but as it's exposed to larger volumes of text, it can iteratively learn which tokens commonly appear together, and start to find patterns that help assign values to the vector elements that reflect the linguistic and semantic characteristics of the tokens, based on their proximity and frequency of use together. The process is made more efficient by using *multi-head* attention to consider different elements of the vectors in parallel.

The result of the encoding process is a set of embeddings; vectors that include contextual information about how the tokens in the vocabulary relate to one another. A real transformer produces embeddings that include thousands of elements, but to keep things simple, let's stick to vectors with only three vectors in our example. The result of the encoding process for our vocabulary might look something like this:

| Token | Token ID | Embedding |
| --- | --- | --- |
| I | 1 | [2, 0, -1 ] |
| heard | 2 | [-2, 2, 4 ] |
| a | 3 | [-3, 5, 5 ] |
| dog | 4 | [10, 3, 2 ] |
| bark | 5 | [9, 2, 10 ] |
| loudly | 6 | [-3, 8, 3 ] |
| at | 7 | [-5, -1, 1] |
| cat | 8 | [10, 3, 1] |
| puppy | 127 | [5, 3, 2 ] |
| car | 128 | [-2, -2, 1 ] |
| skateboard | 129 | [-3, -2, 2 ] |

We can think of the elements of the embeddings as dimensions in a multi-dimensional vector-space. In our simple example, our embeddings only have three elements, so we can visualize them as vectors in three-dimensional space, like this:

![Diagram of embedding vectors for tokens in three-dimensions.](assets/image_002.png)

Because the dimensions are calculated based on how the tokens relate linguistically to one another, tokens that are used in similar contexts (and therefore have similar meanings) result in vectors with similar directions. For example, the embeddings for "dog" and "puppy" point in more or less the same direction, which isn't too different from the embedding for "cat"; but very different from the embedding for "skateboard" or "car". We can measure how close tokens are to one another semantically by calculating the *cosine similarity* of their vectors.

## Predicting completions from prompts

Now that we have a set of embeddings that encapsulate the contextual relationship between tokens, we can use the *decoder* block of a transformer to iteratively predict the next word in a sequence based on a starting *prompt*.

Once again, *attention* is used to consider each token in context; but this time the context to be considered can only include the tokens that *precede* the token we're trying to predict. The decoder model is trained, using data for which we already have the full sequence, by applying a technique called *masked attention*; in which the tokens after the current token are ignored. Since we already know the next token during training, the transformer can compare it to the predicted token and adjust the learned weights in later training iterations to reduce the error in the model.

When predicting a new completion, for which the next tokens are unknown, the attention layers calculate possible vectors for the next token and the feed-forward network is used to help determine the most probable candidate. The predicted value is then added to the sequence, and the whole process repeats to predict the *next* token; and so on, until the decoder predicts that the sequence has ended.

For example, given the sequence "*When my dog was a ...*", the model will evaluate the tokens in the sequence so far, use *attention* to assign weights, and predict that the next most probable token is "*puppy*" rather than, say, "*cat*" or "*skateboard*".

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to generative AI and agents

#### Unit: Prompts

Source: https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/6-writing-prompts/

A *prompt* is simply the input you give to an LLM to get a response. It might be a question or a command, or just a casual comment to start a conversation. The model responds to a prompt with a *completion*.

## Types of prompt

There are two main types of prompts:

- **System prompts** that set the behavior and tone of the model, and any constraints it should adhere to. For example, "*You're a helpful assistant that responds in a cheerful, friendly manner.*". System prompts determine constraints and styles for the model's responses.
- **User prompts** that elicit a response to a specific question or instruction. For example, "*Summarize the key considerations for adopting generative AI described in GenAI\_Considerations.docx for a corporate executive. Format the summary as no more than six bullet points with a professional tone.*".

![Diagram of a system and user prompt.](assets/image_001.png)

Usually, the system prompt is set by the application that uses the model. User prompts can be entered by a human user in a chat application; or in some cases generated by the application on the user’s behalf. The model responds to user prompts while obeying the overall guidance in the system prompt.

## Conversation history

To keep a conversation consistent and relevant, generative AI apps often keep track of the conversation history; and include summarized versions of it in subsequent prompts. This ensures there’s an ongoing context for the conversation that the model can build on.

![Diagram of a conversation with multiple prompts and completions.](assets/image_002.png)

For example, suppose the model responds to the system and user prompts described previously with the following completion:

> *Key considerations for adopting Generative AI include:*
>
> - *Establish Clear Governance and Responsible AI Policies*
> - *Prioritize High-Value Use Cases Across Corporate Functions*
> - *Mitigate Risks Around Privacy, Security, and Compliance*
> - *Foster Organizational Readiness and Cultural Adaptation*
> - *Measure Impact and Build Accountability*
> - *Stay Ahead of Strategic and Competitive Shifts*

You could respond with a follow-up question, such as "*What are common privacy-related risks?*. The prompt would include the new question, but also the previous prompts and responses; providing context to the model so that it understands the question in relation to Generative AI adoption.

## Retrieval augmented generation (RAG)

To add even more context, generative AI applications can use a technique called *retrieval augmented generation (RAG)*. This approach involves retrieving information, like documents or emails, and using it to augment the prompt with relevant data. The response generated by the model is then *grounded* in the information that was provided.

For example, suppose you submit a prompt like "*What's the maximum I can claim for travel expenses on a business trip?*". With no other information, a model will respond with a generic answer - probably telling you to consult your organization's expenses policy documentation. A better solution would be to build an expenses assistant app that initially queries the organization's expenses policy documentation, retrieving sections related to "travel expenses"; and then includes the retrieved information in the prompt that is sent to the model, along with your original question. Now the model can use the expenses policy information in the prompt to provide context, and respond with a more relevant answer.

![Diagram of a retrieval augmented generation being used to provide context in a prompt.](assets/image_003.png)

## Tips for better prompts

The quality of responses from generative AI assistants not only depends on the language model used, but on the prompts you submit to it.

![Diagram of a clear and specific prompt with context, examples, and a request for structure.](assets/image_004.png)

To get better results from your prompts:

- Be **clear** and **specific** – prompts with explicit instructions or questions work better than vague language.
- Add **context** - mention the topic, audience, or format you want.
- Use **examples**, If you want a certain style, provide an example of what you mean.
- Ask for **structure**, Like bullet points, tables, or numbered lists.

Using well-designed prompts can make a huge difference to the results you’ll get from your generative AI model.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to generative AI and agents

#### Unit: AI agents

Source: https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/7-agents/

Imagine having a digital assistant that doesn’t just answer questions, but actually gets things done! Welcome to the world of AI agents.

Agents are software applications built on generative AI that can reason over and generate natural language, automate tasks by using tools, and respond to contextual conditions to take appropriate action.

## Components of an AI agent

![Diagram of an agent with a model, instructions, and tools.](assets/image_001.png)

AI agents have three key elements:

- **A large language model**: This is the agent's brain; using generative AI for language understanding and reasoning.
- **Instructions**: A system prompt that defines the agent’s role and behavior. Think of it as the agent’s job description.
- **Tools**: These are what the agent uses to interact with the world. Tools can include:
  - *Knowledge* tools that provide access to information, like search engines or databases.
  - *Action* tools that enable the agent to perform tasks, such as sending emails, updating calendars, or controlling devices.

With these capabilities, AI agents can take on the role of digital assistants that intelligently automate tasks and collaborate with you to work smarter and more efficiently.

## Multi-agent systems

Agents can also work with one another, in multi-agent systems. Instead of one agent doing everything, multiple agents can collaborate—each with its own specialty. One might gather data, another might analyze it, and a third might take action. Together, they form an AI-powered workforce that can handle complex workflows, just like a human team.

![Diagram of a multi-agent system.](assets/image_002.png)

Agents communicate with each other through prompts, using generative AI to determine what tasks are required and which agents are responsible for completing them.

Agentic AI is set to be the next advance in how we use technology to find information and get work done.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to generative AI and agents

#### Unit: Exercise - Explore generative AI

Source: https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/7a-exercise/

Now it's your chance to explore generative AI!

In this exercise, you'll use a chat playground to interact with a generative AI model, and observe the effect of system prompts, model parameters, and grounding the model with data.

Launch the exercise and follow the instructions.

[![Button to launch exercise.](assets/image_001.png)](https://go.microsoft.com/fwlink/?linkid=2339547)

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to generative AI and agents

#### Unit: Module assessment

Source: https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/8-knowledge-check/

1.

What is a *large language model* (LLM)?

A type of AI model designed to generate human-like text.

A model that only processes images, not text.

A small, efficient model for mobile devices.

2.

What is the purpose of *tokenization*?

To sort the words in a sentence alphabetically

To break down text into smaller units.

To convert text into binary code for processing by computers.

3.

What are *embeddings*?

Extra words added by a transformer model to enhance text generation.

Small language models used for specific tasks.

Vector-based representations of tokens that capture their semantic meaning.

4.

What does an *attention* layer do in a transformer model?

Removes irrelevant words from the input text.

Examines the relationships between each token and the tokens around it.

Flags inappropriate content in the generated text.

5.

What is the purpose of a *system prompt*?

To provide context and instructions to the AI model.

To configure a generative AI model to run on a particular operating system.

To store user preferences for future interactions.

6.

What is an *agent* in the context of AI?

An AI system that can perform tasks on behalf of a user.

A generative AI model that operates in secret.

A human operator to whom generative AI models escalate requests they can't handle.

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to generative AI and agents

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/9-summary/

Generative AI is a rapidly developing field of AI that supports new language generation, code development, image creation, and more. In this module, you've explored how generative AI uses large language models to make sense of language, and how you can interact with these models using prompts. You've also learned how AI agents, built on generative AI, can act as digital assistants that collaborate with you to find information and accomplish tasks.

Tip

For more information about some of the concepts discussed in this module, take a look at the following links:

- [What are large language models (LLMs)?](https://azure.microsoft.com/resources/cloud-computing-dictionary/what-are-large-language-models-llms?azure-portal=true)
- [What is retrieval-augmented generation (RAG)?](https://azure.microsoft.com/resources/cloud-computing-dictionary/what-is-retrieval-augmented-generation-rag?azure-portal=true)
- [Agent Factory: The new era of agentic AI—common use cases and design patterns](https://azure.microsoft.com/blog/agent-factory-the-new-era-of-agentic-ai-common-use-cases-and-design-patterns?azure-portal=true)

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to natural language processing concepts

#### Unit: Introduction

Source: https://learn.microsoft.com/en-us/training/modules/introduction-language/1-introduction/

Within artificial intelligence (AI), text analysis is a subset of natural language processing (NLP) that enables machines to extract meaning, structure, and insights from unstructured text. Organizations use text analysis to transform customer feedback, support tickets, contracts, and social media posts into actionable intelligence.

Techniques to process and analyze text evolved over many years, from simple statistical calculations based on term-frequency to vector-based language models that encapsulate semantic meaning. Some common use cases for text analysis include:

- **Language detection**: Determining the language (or languages) in which text is written - often as the first step in a multi-step text processing workflow.
- **Key term extraction**: Identifying important words and phrases in text, to help determine the topics and themes it discusses.
- **Entity detection**: Identifying named entities mentioned in text; for example, places, people, dates, and organizations.
- **Personally identifiable information (PII) detection**: Identifying and redacting personal details in text, such as names, addresses, telephone numbers, financial account details, and other sensitive information.
- **Text classification**: Categorizing text documents based on their contents. For example, filtering email as *spam* or *not spam*.
- **Sentiment analysis**: A particular form of text classification that predicts the *sentiment* of text - for example, categorizing social media posts as *positive*, *neutral*, or *negative*.
- **Text summarization**: Reducing the volume of text while retaining its salient points. For example, generating a short one-paragraph summary from a multi-page document.

Text analysis is challenging because language is complex, and computers find it hard to understand. Ultimately, all text analysis techniques are based on the requirement to extract *meaning* from natural language text.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to natural language processing concepts

#### Unit: Tokenization

Source: https://learn.microsoft.com/en-us/training/modules/introduction-language/2-how-it-works/

The first step in analyzing a body of text (referred to as a *corpus*) is to break it down into *tokens*. For the sake of simplicity, you can think of each distinct word in the text as a token. In reality, tokens can be generated for partial words or combinations of words and punctuation.

For example, consider this phrase from a famous US presidential speech: `"We choose to go to the moon"`. The phrase can be broken down into the following tokens, with numeric identifiers:

1. `We`
2. `choose`
3. `to`
4. `go`
5. `to`
6. `the`
7. `moon`

Notice that `"to"` (token number 3) is used twice in the corpus. The phrase `"We choose to go to the moon"` can be represented by the tokens.

With each token assigned a discrete value, we can easily count their frequency in the text and use that to determine the most commonly used terms; which might help identify the main subject of the text.

We've used a simple example in which tokens are identified for each distinct word in the text. However, consider the following pre-processing techniques that might apply to tokenization depending on the specific text analysis problem you're trying to solve:

| **Technique** | **Description** |
| --- | --- |
| **Text normalization** | Before generating tokens, you might choose to *normalize* the text by removing punctuation and changing all words to lower case. For analysis that relies purely on word frequency, this approach improves overall performance. However, some semantic meaning could be lost - for example, consider the sentence `"Mr Banks has worked in many banks."`. You may want your analysis to differentiate between the person `"Mr Banks"` and the `"banks"` in which he's worked. You might also want to consider `"banks."` as a separate token to `"banks"` because the inclusion of a period provides the information that the word comes at the end of a sentence |
| **Stop word removal** | Stop words are words that should be excluded from the analysis. For example, `"the"`, `"a"`, or `"it"` make text easier for people to read but add little semantic meaning. By excluding these words, a text analysis solution might be better able to identify the important words. |
| **N-gram extraction** | Finding multi-term phrases such as `"artificial intelligence"` or `"natural language processing"`. A single word phrase is a *unigram*, a two-word phrase is a *bigram*, a three-word phrase is a *trigram*, and so on. In many cases, by considering frequently appearing sequences of words as groups, a text analysis algorithm can make better sense of the text. |
| **Stemming** | A technique used to consolidate words by stripping endings like "s", "ing", "ed", and so on, before counting them; so that words with the same etymological root, like `"powering"`, `"powered"`, and `"powerful"`, are interpreted as being the same token (`"power"`). |
| **Lemmatization** | Another approach to reducing words to their base or dictionary form (called a *lemma*). Unlike stemming, which simply chops off word endings, lemmatization uses linguistic rules and vocabulary to ensure the resulting form is a valid word (for example, `"running"`: → `"run"`, `"global"` → `"globe"`). |
| **Parts of speech (POS) tagging** | Labeling each token with its grammatical category, such as noun, verb, adjective, or adverb. This technique uses linguistic rules and often statistical models to determine the correct tag based on both the token itself and its context within the sentence. |

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to natural language processing concepts

#### Unit: Statistical text analysis.

Source: https://learn.microsoft.com/en-us/training/modules/introduction-language/3-statistical-techniques/

Having broken down a text corpus into its constituent tokens, and prepared them for analysis; there are some common statistical analysis techniques you can use to infer meaning from the text.

## Frequency Analysis

Perhaps the most obvious way to ascertain the topics discussed in a document is to simply count the number of times each normalized token appears. The assumption is that terms that are used more frequently in the document can help identify the subjects or themes discussed. Put simply, if you can determine the most commonly used words in a given document, you can often get a good idea of what the document is about.

For example, consider the following text:

> *`AI in modern business delivers transformative benefits by enhancing efficiency, decision-making, and customer experiences. Businesses can leverage AI to automate repetitive tasks, freeing employees to focus on strategic work, while predictive analytics and machine learning models enable data-driven decisions that improve accuracy and speed. AI-powered tools like Copilot streamline workflows across marketing, finance, and operations, reducing costs and boosting productivity. Additionally, intelligent applications personalize customer interactions, driving engagement and loyalty. By embedding AI into core processes, businesses benefit from the ability to innovate faster, adapt to market changes, and maintain a competitive edge in an increasingly digital economy.`*

After tokenizing, normalizing, and applying lemmatization to the text, the frequency of each term can be counted and tabulated; producing the following partial results:

| Term | Frequency |
| --- | --- |
| `ai` | 4 |
| `business` | 3 |
| `benefit` | 2 |
| `customer` | 2 |
| `decision` | 2 |
| `market` | 2 |
| `ability` | 1 |
| `accuracy` | 1 |
| ... | ... |

From these results, the most frequently occurring terms indicate that the text discusses AI and its business benefits.

## Term Frequency - Inverse Document Frequency (TF-IDF)

Simple frequency analysis in which you count the number of occurrences of each token can be an effective way to analyze a single document, but when you need to differentiate across multiple documents within the same corpus, you need a way to determine which tokens are most relevant in each individual document.

For example, consider the following two text samples:

> **Sample A:**
>
> *`Microsoft Copilot Studio enables declarative AI agent creation using natural language, prompts, and templates. With this declarative approach, an AI agent is configured rather than programmed: makers define intents, actions, and data connections, then publish the agent to channels. Microsoft Copilot Studio simplifies agent orchestration, governance, and lifecycles so an AI agent can be iterated quickly. Using Microsoft Copilot Studio helps modern businesses deploy Microsoft AI agent solutions fast.`*

> **Sample B:**
>
> *`Microsoft Foundry enables code‑based AI agent development with SDKs and APIs. Developers write code to implement agent conversations, tool calling, state management, and custom pipelines. In Microsoft Foundry, engineers can use Python or Microsoft C#, integrate Microsoft AI services, and manage CI/CD to deploy the AI agent. This code-first development model supports extensibility and performance while building Microsoft Foundry AI agent applications.`*

The top three most frequent terms in these samples are shown in the following tables:

**Sample A**:

| Term | Frequency |
| --- | --- |
| `agent` | 6 |
| `ai` | 4 |
| `microsoft` | 4 |

**Sample B**:

| Term | Frequency |
| --- | --- |
| `microsoft` | 5 |
| `agent` | 4 |
| `ai` | 4 |

As you can see from the results, the most common words in both samples are the same (`"agent"`, `"Microsoft"`, and `"AI"`). This tells us that both documents cover a similar overall theme, but doesn't help us discriminate between the individual documents. Examining the counts of less frequently used terms might help, but you can easily imagine an analysis of a corpus based on Microsoft's AI documentation, which would result in a large number of terms that are common across all documents; making it hard to determine the specific topics covered in each document.

To address this problem, *Term Frequency - Inverse Document Frequency* (TF-IDF) is a technique that calculates scores based on how often a word or term appears in one document compared to its more general frequency across the entire collection of documents. Using this technique, a high degree of relevance is assumed for words that appear frequently in a particular document, but relatively infrequently across a wide range of other documents. To calculate TF-IDF for terms in an individual document, you can use the following three-step process:

1. **Calculate Term Frequency (TF)**: This is simply how many times a word appears in a document. For example, if the word `"agent"` appears 6 times in a document, then `tf(agent) = 6`.
2. **Calculate Inverse Document Frequency (IDF)**: This checks how common or rare a word is across all documents. If a word appears in every document, it’s not special. The formula used to calculate IDF is `idf(t) = log(N / df(t))` (where `N` is total number of documents and `df(t)` is the number of documents that contain the word `t`)
3. **Combine them to calculate TF-IDF**: Multiply TF and IDF to get the score: `tfidf(t, d) = tf(t, d) * log(N / df(t))`

A high TF-IDF score indicates that a word appears often in one document but rarely in others. A low score indicates that word is common in many documents. In two samples about AI agents, because `"AI"`, `"Microsoft"`, and `"agent"` appear in both samples (`N = 2, df(t) = 2`), their IDF is `log(2/2) = 0`, so they carry no discriminative weight in TF‑IDF. The top three TF-IDF results for the samples are:

**Sample A:**

| Term | TF-IDF |
| --- | --- |
| `copilot` | 2.0794 |
| `studio` | 2.0794 |
| `declarative` | 1.3863 |

**Sample B:**

| Term | TF-IDF |
| --- | --- |
| `code` | 2.0794 |
| `develop` | 2.0794 |
| `foundry` | 2.0794 |

From these results, it's clearer that sample A is about declarative agent creation with Copilot Studio, while sample B is about code-based agent development with Microsoft Foundry.

## "Bag-of-words" machine learning techniques

*Bag-of-words* is the name given to a feature extraction technique that represents text tokens as a vector of word frequencies or occurrences, ignoring grammar and word order. This representation becomes the input for machine learning algorithms like Naive Bayes, a probabilistic classifier that applies Bayes’ theorem to predict the probable class of a document based on word frequency.

For example, you might use this technique to train a machine learning model that performs email spam filtering. The words `"miracle cure"`, `"lose weight fast"`, and `"anti-aging`` may appear more frequently in spam emails about dubious health products than your regular emails, and a trained model might flag messages containing these words as potential spam.

You can implement *sentiment analysis* by using the same method to classify text by emotional tone. The bag-of-words provides the features, and model uses those features to estimate probabilities and assign sentiment labels like "positive" or "negative".

## TextRank

TextRank is an unsupervised graph-based algorithm that models text as a network of connected *nodes*. For example, each sentence in a document could be considered a node, and the connections (*edges*) between them are scored based on the similarity of the words they contain. TextRank is commonly used to summarize text based on identifying a subset of sentences within a document that best represent its overall subject.

The TextRank algorithm applies the same principle as Google's PageRank algorithm (which ranks web pages based on links between them) to text. The key idea is that a sentence is important if it's similar to many other important sentences. The algorithm works through the following steps:

1. **Build a graph**: Each sentence becomes a node, and edges that connect them are weighted by similarity (often measured using word overlap or cosine similarity between sentence vectors).
2. **Calculate ranks iteratively**: Each node's score is calculated based on the scores of the nodes connected to it. The formula is: `TextRank(Sᵢ) = (1-d) + d * Σ(wⱼᵢ / Σwⱼₖ) * TextRank(Sⱼ)` (where `d` is a damping factor, typically 0.85, `wⱼᵢ` is the weight of the edge from sentence `j` to sentence `i`, and the sum iterates over all sentences connected to `i`).
3. **Extract top-ranked sentences**: After convergence, the sentences with the highest scores are selected as the summary.

For example, consider the following document about cloud computing:

> *`Cloud computing provides on-demand access to computing resources. Computing resources include servers, storage, and networking. Azure is Microsoft's cloud computing platform. Organizations use cloud platforms to reduce infrastructure costs. Cloud computing enables scalability and flexibility.`*

To generate a summary of this document, the TextRank process begins by splitting this document into sentences:

1. *`Cloud computing provides on-demand access to computing resources.`*
2. *`Computing resources include servers, storage, and networking.`*
3. *`Azure is Microsoft's cloud computing platform.`*
4. *`Organizations use cloud platforms to reduce infrastructure costs.`*
5. *`Cloud computing enables scalability and flexibility.`*

Next, edges are created between sentences with weights based on similarity (word overlap). For this example, the edge weights might be:

- Sentence 1 <-> Sentence 2: 0.5 (shares `"computing resources"`)
- Sentence 1 <-> Sentence 3: 0.6 (shares `"cloud computing"`)
- Sentence 1 <-> Sentence 4: 0.2 (shares `"cloud"`)
- Sentence 1 <-> Sentence 5: 0.7 (shares `"cloud computing"`)
- Sentence 2 <-> Sentence 3: 0.2 (limited overlap)
- Sentence 2 <-> Sentence 4: 0.1 (limited overlap)
- Sentence 2 <-> Sentence 5: 0.1 (shares `"computing"`)
- Sentence 3 <-> Sentence 4: 0.5 (shares `"cloud platforms"`)
- Sentence 3 <-> Sentence 5: 0.4 (shares `"cloud computing"`)
- Sentence 4 <-> Sentence 5: 0.3 (limited overlap)

![Diagram of connected sentence nodes.](assets/image_001.png)

After calculating TextRank scores iteratively using these weights, sentences 1, 3, and 5 might receive the highest scores because they connect well to other sentences through shared terminology and concepts. These sentences would be selected to form a concise summary: *`"Cloud computing provides on-demand access to computing resources. Azure is Microsoft's cloud computing platform. Cloud computing enables scalability and flexibility."`*

Note

Generating a document summary by selecting the most relevant sentences is a form of *extractive* summarization. In this approach, no new text is generated - the summary consists of a subset of the original text. More recent developments in semantic modeling also enable *abstractive* summarization, in which new language that summarizes the key themes of the source document is generated.

TextRank can also be applied at the word level for *keyword extraction*, where words (rather than sentences) become nodes, and edges represent co-occurrence within a fixed window. The highest-ranked words are extracted as key terms representing the document's main topics.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to natural language processing concepts

#### Unit: Semantic language models

Source: https://learn.microsoft.com/en-us/training/modules/introduction-language/4-semantic-models/

As the state of the art for NLP has advanced, the ability to train models that encapsulate the semantic relationship between tokens has led to the emergence of powerful deep learning language models. At the heart of these models is the encoding of language tokens as vectors (multi-valued arrays of numbers) known as *embeddings*.

This vector-based approach to modeling text became common with techniques like *Word2Vec* and *GloVe*, in which text tokens are represented as dense vectors with multiple dimensions. During model training, the dimension values are assigned to reflect semantic characteristics of each token based on their usage in the training text. The mathematical relationships between the vectors can then be exploited to perform common text analysis tasks more efficiently than older purely statistical techniques. A more recent advancement in this approach is to use a technique called *attention* to consider each token in context, and calculate the influence of the tokens around it. The resulting *contextualized* embeddings, such as those found in the GPT family of models, provide the basis of modern generative AI.

## Representing text as vectors

Vectors represent points in multidimensional space, defined by coordinates along multiple axes. Each vector describes a direction and distance from the origin. Semantically similar tokens should result in vectors that have a similar orientation – in other words they point in similar directions.

For example, consider the following three-dimensional embeddings for some common words:

| Word | Vector |
| --- | --- |
| `dog` | [0.8, 0.6, 0.1] |
| `puppy` | [0.9, 0.7, 0.4] |
| `cat` | [0.7, 0.5, 0.2] |
| `kitten` | [0.8, 0.6, 0.5] |
| `young` | [0.1, 0.1, 0.3] |
| `ball` | [0.3, 0.9, 0.1] |
| `tree` | [0.2, 0.1, 0.9] |

We can visualize these vectors in three-dimensional space as shown here:

![Diagram of a 3D visualization of word vectors.](assets/image_001.png)

The vectors for `"dog"` and `"cat"` are similar (both domestic animals), as are `"puppy"` and `"kitten"` (both young animals). The words `"tree"`, `"young"`, and `ball"` have distinctly different vector orientations, reflecting their different semantic meanings.

The semantic characteristic encoded in the vectors makes it possible to use vector-based operations that compare words and enable analytical comparisons.

### Finding related terms

Since the orientation of vectors is determined by their dimension values, words with similar semantic meanings tend to have similar orientations. This means you can use calculations such as the *cosine similarity* between vectors to make meaningful comparisons.

For example, to determine the "odd one out" between `"dog"`, `"cat"`, and `"tree"`, you can calculate the cosine similarity between pairs of vectors. The cosine similarity is calculated as:

`cosine_similarity(A, B) = (A · B) / (||A|| * ||B||)`

Where `A · B` is the dot product and `||A||` is the magnitude of vector A.

Calculating similarities between the three words:

- **`dog`** [0.8, 0.6, 0.1] and **`cat`** [0.7, 0.5, 0.2]:

  - Dot product: (0.8 × 0.7) + (0.6 × 0.5) + (0.1 × 0.2) = 0.56 + 0.30 + 0.02 = 0.88
  - Magnitude of `dog`: √(0.8² + 0.6² + 0.1²) = √(0.64 + 0.36 + 0.01) = √1.01 ≈ 1.005
  - Magnitude of `cat`: √(0.7² + 0.5² + 0.2²) = √(0.49 + 0.25 + 0.04) = √0.78 ≈ 0.883
  - Cosine similarity: 0.88 / (1.005 × 0.883) ≈ **0.992** (high similarity)
- **`dog`** [0.8, 0.6, 0.1] and **`tree`** [0.2, 0.1, 0.9]:

  - Dot product: (0.8 × 0.2) + (0.6 × 0.1) + (0.1 × 0.9) = 0.16 + 0.06 + 0.09 = 0.31
  - Magnitude of `tree`: √(0.2² + 0.1² + 0.9²) = √(0.04 + 0.01 + 0.81) = √0.86 ≈ 0.927
  - Cosine similarity: 0.31 / (1.005 × 0.927) ≈ **0.333** (low similarity)
- **`cat`** [0.7, 0.5, 0.2] and **`tree`** [0.2, 0.1, 0.9]:

  - Dot product: (0.7 × 0.2) + (0.5 × 0.1) + (0.2 × 0.9) = 0.14 + 0.05 + 0.18 = 0.37
  - Cosine similarity: 0.37 / (0.883 × 0.927) ≈ **0.452** (low similarity)

![Diagram of cosine similarity visualization showing dog, cat, and tree vectors.](assets/image_002.png)

The results show that `"dog"` and `"cat"` are highly similar (0.992), while `"tree"` has lower similarity to both `"dog"` (0.333) and `"cat"` (0.452). Therefore, **`tree`** is clearly the odd one out.

### Vector translation through addition and subtraction

You can add or subtract vectors to produce new vector-based results; which can then be used to find tokens with matching vectors. This technique enables intuitive arithmetic-based logic to determine appropriate terms based on linguistic relationships.

For example, using the vectors from earlier:

- **`dog`** + **`young`** = [0.8, 0.6, 0.1] + [0.1, 0.1, 0.3] = [0.9, 0.7, 0.4] = **`puppy`**
- **`cat`** + **`young`** = [0.7, 0.5, 0.2] + [0.1, 0.1, 0.3] = [0.8, 0.6, 0.5] = **`kitten`**

![Diagram of vector addition showing dog + young = puppy and cat + young = kitten.](assets/image_003.png)

These operations work because the vector for `"young"` encodes the semantic transformation from an adult animal to its young counterpart.

Note

In practice, vector arithmetic rarely produces exact matches; instead, you would search for the word whose vector is *closest* (most similar) to the result.

The arithmetic works in reverse as well:

- **`puppy`** - **`young`** = [0.9, 0.7, 0.4] - [0.1, 0.1, 0.3] = [0.8, 0.6, 0.1] = **`dog`**
- **`kitten`** - **`young`** = [0.8, 0.6, 0.5] - [0.1, 0.1, 0.3] = [0.7, 0.5, 0.2] = **`cat`**

### Analogical reasoning

Vector arithmetic can also answer analogy questions like "*`puppy`* is to *`dog`* as *`kitten`* is to *?*"

To solve this, calculate: **`kitten`** - **`puppy`** + **`dog`**

- [0.8, 0.6, 0.5] - [0.9, 0.7, 0.4] + [0.8, 0.6, 0.1]
- = [-0.1, -0.1, 0.1] + [0.8, 0.6, 0.1]
- = [0.7, 0.5, 0.2]
- = **`cat`**

![Diagram of vector arithmetic showing kitten - puppy + dog = cat.](assets/image_004.png)

These examples demonstrate how vector operations can capture linguistic relationships and enable reasoning about semantic patterns.

## Using semantic models for text analysis

Vector-based semantic models provide powerful capabilities for many common text analysis tasks.

### Text summarization

Semantic embeddings enable *extractive* summarization by identifying sentences with vectors that are most representative of the overall document. By encoding each sentence as a vector (often by averaging or pooling the embeddings of its constituent words), you can calculate which sentences are most central to the document's meaning. These central sentences can be extracted to form a summary that captures the key themes.

### Keyword extraction

Vector similarity can identify the most important terms in a document by comparing each word's embedding to the document's overall semantic representation. Words whose vectors are most similar to the document vector, or most central when considering all word vectors in the document, are likely to be key terms that represent the main topics.

### Named entity recognition

Semantic models can be fine-tuned to recognize named entities (people, organizations, locations, etc.) by learning vector representations that cluster similar entity types together. During inference, the model examines each token's embedding and its context to determine whether it represents a named entity and, if so, what type.

### Text classification

For tasks like sentiment analysis or topic categorization, documents can be represented as aggregate vectors (such as the mean of all word embeddings in the document). These document vectors can then be used as features for machine learning classifiers, or compared directly to class prototype vectors to assign categories. Because semantically similar documents have similar vector orientations, this approach effectively groups related content and distinguishes different categories.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to natural language processing concepts

#### Unit: Exercise - Explore text analytics

Source: https://learn.microsoft.com/en-us/training/modules/introduction-language/4b-exercise/

Now it's your chance to explore text analytics, and see for yourself the kinds of language-related tasks you can use AI to accomplish.

Launch the exercise and follow the instructions.

[![Button to launch exercise.](assets/image_001.png)](https://go.microsoft.com/fwlink/?linkid=2339548)

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to natural language processing concepts

#### Unit: Module assessment

Source: https://learn.microsoft.com/en-us/training/modules/introduction-language/5-knowledge-check/

## Check your knowledge

1.

What is the purpose of tokenization?

To translate text into another language.

To summarize large documents.

To break down text into smaller units for analysis.

2.

Which of the following techniques is used to determine the importance of words in a specific document within the context of a larger collection of documents?

Naïve Bayes

TF-IDF (Term Frequency-Inverse Document Frequency)

Word2Vec

3.

Which of the following best describes the role of embedding vectors in natural language processing (NLP)?

They duplicate tokens in multiple languages.

They define stopwords that should be ignored.

They capture semantic token relationships in multiple dimensions.

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to natural language processing concepts

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/introduction-language/6-summary/

In this module, you learned about text analytics and concepts such as tokenization, frequency analysis, and text classification. You've also been introduced to semantic language models that encode language tokens as vectors for grouping related words.

Tip

To learn more about natural language processing and text analytics, see these articles:

- **[What is natural language processing (NLP)?](https://azure.microsoft.com/resources/cloud-computing-dictionary/what-is-natural-language-processing-nlp?azure-portal=true)**.
- **[Azure Language in Foundry Tools](https://azure.microsoft.com/products/ai-foundry/tools/language)**.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI speech concepts

#### Unit: Introduction

Source: https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/1-introduction/

Speech is one of the most natural ways humans communicate, and bringing speech capabilities to AI applications creates more intuitive, accessible, and engaging user experiences. Whether you're building a voice assistant, creating accessible applications, or developing conversational AI agents, understanding speech technologies is essential for modern AI solutions.

In this module, you'll explore the two fundamental speech capabilities that power voice-enabled applications: **speech recognition** (converting spoken words to text) and **speech synthesis** (converting text to natural-sounding speech). You'll discover how these technologies work together to create seamless voice interactions and learn about the real-world scenarios where speech can transform user experiences.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI speech concepts

#### Unit: Speech-enabled solutions

Source: https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/2-speech-solutions/

Speech capabilities transform how users interact with AI applications and agents. Speech recognition converts spoken words into text, while speech synthesis generates natural-sounding audio from text. Together, these technologies enable hands-free operation, improve accessibility, and create more natural conversational experiences.

Integrating speech into your AI solutions helps you:

- **Expand accessibility**: Serve users with visual impairments or mobility challenges.
- **Increase productivity**: Enable multitasking by removing the need for keyboards and screens.
- **Enhance user experience**: Create natural conversations that feel more human and engaging.
- **Reach global audiences**: Support multiple languages and regional dialects.

## Common speech recognition scenarios

Speech recognition, also called speech-to-text, listens to audio input and transcribes it into written text. This capability powers a wide range of business and consumer applications.

### Customer service and support

Service centers use speech recognition to:

- Transcribe customer calls in real time for agent reference and quality assurance.
- Route callers to the right department based on what they say.
- Analyze call sentiment and identify common customer issues.
- Generate searchable call records for compliance and training.

**Business value**: Reduces manual note-taking, improves response accuracy, and captures insights that improve service quality.

### Voice-activated assistants and agents

Virtual assistants and AI agents rely on speech recognition to:

- Accept voice commands for hands-free control of devices and applications.
- Answer questions using natural language understanding.
- Complete tasks like setting reminders, sending messages, or searching information.
- Control smart home devices, automotive systems, and wearable technology.

**Business value**: Increases user engagement, simplifies complex workflows, and enables operation in situations where screens aren't practical.

### Meeting and interview transcription

Organizations transcribe conversations to:

- Create searchable meeting notes and action item lists.
- Provide real-time captions for participants who are deaf or hard of hearing.
- Generate summaries of interviews, focus groups, and research sessions.
- Extract key discussion points for documentation and follow-up.

**Business value**: Saves hours of manual transcription work, ensures accurate records, and makes spoken content accessible to everyone.

### Healthcare documentation

Clinical professionals use speech recognition to:

- Dictate patient notes directly into electronic health records.
- Update treatment plans without interrupting patient care.
- Reduce administrative burden and prevent physician burnout.
- Improve documentation accuracy by capturing details in the moment.

**Business value**: Increases time available for patient care, improves record completeness, and reduces documentation errors.

## Common speech synthesis scenarios

Speech synthesis, also called text-to-speech, converts written text into spoken audio. This technology creates voices for applications that need to communicate information audibly.

### Conversational AI and chatbots

AI agents use speech synthesis to:

- Respond to users with natural-sounding voices instead of requiring them to read text.
- Create personalized interactions by adjusting tone, pace, and speaking style.
- Handle customer inquiries through voice channels like phone systems.
- Provide consistent brand experiences across voice and text interfaces.

**Business value**: Makes AI agents more approachable, reduces customer effort, and extends service availability to voice-only channels.

### Accessibility and content consumption

Applications generate audio to:

- Read web content, articles, and documents aloud for users with visual impairments.
- Support users with reading disabilities like dyslexia.
- Enable content consumption while driving, exercising, or performing other tasks.
- Provide audio alternatives for text-heavy interfaces.

**Business value**: Expands your audience reach, demonstrates commitment to inclusion, and improves user satisfaction.

### Notifications and alerts

Systems use speech synthesis to:

- Announce important alerts, reminders, and status updates.
- Provide navigation instructions in mapping and GPS applications.
- Deliver time-sensitive information without requiring users to look at screens.
- Communicate system status in industrial and operational environments.

**Business value**: Ensures critical information reaches users even when visual attention isn't available, improving safety and responsiveness.

### E-learning and training

Educational platforms use speech synthesis to:

- Create narrated lessons and course content without recording studios.
- Provide pronunciation examples for language learning.
- Generate audio versions of written materials for different learning preferences.
- Scale content production across multiple languages.

**Business value**: Reduces content creation costs, supports diverse learning styles, and accelerates course development timelines.

### Entertainment and media

Content creators use speech synthesis to:

- Generate character voices for games and interactive experiences.
- Produce podcast drafts and audiobook prototypes.
- Create voiceovers for videos and presentations.
- Personalize audio content based on user preferences.

**Business value**: Lowers production costs, enables rapid prototyping, and creates customized experiences at scale.

## Combining speech recognition and synthesis

The most powerful speech-enabled applications combine both capabilities to create conversational experiences:

- **Voice-driven customer service**: Agents listen to customer questions (recognition), process the request, and respond with helpful answers (synthesis).
- **Interactive voice response (IVR) systems**: Callers speak their needs, and the system guides them through options using natural dialogue.
- **Language learning applications**: Students speak practice phrases (recognition), and the system provides feedback and corrections (synthesis).
- **Voice-controlled vehicles**: Drivers give commands hands-free (recognition), and the system confirms actions and provides updates (synthesis).

These combined scenarios create fluid, two-way conversations that feel natural and reduce the friction users experience with traditional interfaces.

Tip

Start with a single speech capability focused on your highest-value scenario. Prove the concept works before expanding to more complex conversational flows.

## Key considerations before implementing speech

Before you add speech capabilities to your application, evaluate these factors:

- **Audio quality requirements**: Background noise, microphone quality, and network bandwidth affect speech recognition accuracy.
- **Language and dialect support**: Verify that your target languages and regional variations are supported.
- **Privacy and compliance**: Understand how audio data is processed, stored, and protected to meet regulatory requirements.
- **Latency expectations**: Real-time conversations require low-latency processing, while batch transcription can tolerate delays.
- **Accessibility standards**: Ensure your speech implementation meets WCAG guidelines and doesn't create barriers for some users.

Important

Always provide alternative input and output methods. Some users may prefer or require text-based interfaces even when speech is available.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI speech concepts

#### Unit: Speech recognition

Source: https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/3-speech-recognition/

Speech recognition, also called speech-to-text, enables applications to convert spoken language into written text. The journey from sound wave to text involves six coordinated stages: capturing audio, preparing features, modeling acoustic patterns, applying language rules, decoding the most likely words, and refining the final output.

## Audio capture: Convert analog audio to digital

Speech recognition begins when a microphone converts sound waves into a digital signal. The system samples the analog audio thousands of times per second—typically 16,000 samples per second (16 kHz) for speech applications—and stores each measurement as a numeric value.

![Diagram of an audio waveform.](assets/image_001.png)

Note

Why sampling rate matters:

- Higher rates (like 44.1 kHz for music) capture more detail but require more processing.
- Speech recognition balances clarity and efficiency at 8 kHz to 16 kHz.
- Background noise, microphone quality, and distance from the speaker directly impact downstream accuracy.

Before moving to the next stage, the system often applies basic filters to remove hums, clicks, or other background noise that could confuse the model.

## Pre-processing: Extract meaningful features

Raw audio samples contain too much information for efficient pattern recognition. Pre-processing transforms the waveform into a compact representation that highlights speech characteristics while discarding irrelevant details like absolute volume.

### Mel-Frequency Cepstral Coefficients (MFCCs)

MFCC is the most common feature extraction technique in speech recognition. It mimics how the human ear perceives sound by emphasizing frequencies where speech energy concentrates and compressing less important ranges.

#### How MFCC works

1. **Divide audio into frames:** Split the signal into overlapping 20–30 millisecond windows.
2. **Apply Fourier transform:** Convert each frame from time domain to frequency domain, revealing which pitches are present.
3. **Map to Mel scale:** Adjust frequency bins to match human hearing sensitivity—we distinguish low pitches better than high ones.
4. **Extract coefficients:** Compute a small set of numbers (often 13 coefficients) that summarize the spectral shape of each frame.

![Diagram of an MFCC feature map.](assets/image_002.png)

The result is a sequence of feature vectors—one per frame—that captures what the audio sounds like without storing every sample. These vectors become the input for acoustic modeling.

The vectors are extracted column-wise, with each vector representing the 13 MFCC feature coefficient values for each time-frame:

```
Frame 1: [ -113.2,  45.3,  12.1,  -3.4,  7.8,  ... ]  # 13 coefficients
Frame 2: [ -112.8,  44.7,  11.8,  -3.1,  7.5,  ... ]
Frame 3: [ -110.5,  43.9,  11.5,  -2.9,  7.3,  ... ]
```

## Acoustic modeling: Recognize phonemes

Acoustic models learn the relationship between audio features and **phonemes**—the smallest units of sound that distinguish words. English uses about 44 phonemes; for example, the word "cat" comprises three phonemes: /k/, /æ/, and /t/.

### From features to phonemes

Modern acoustic models use **transformer architectures**, a type of deep learning network that excels at sequence tasks. The transformer processes the MFCC feature vectors and predicts which phoneme is most likely at each moment in time.

Transformer models achieve effective phoneme prediction through:

- **Attention mechanism:** The model examines surrounding frames to resolve ambiguity. For example, the phoneme /t/ sounds different at the start of "top" versus the end of "bat."
- **Parallel processing:** Unlike older recurrent models, transformers analyze multiple frames simultaneously, improving speed and accuracy.
- **Contextualized predictions:** The network learns that certain phoneme sequences occur frequently in natural speech.

The output of acoustic modeling is a probability distribution over phonemes for each audio frame. For instance, frame 42 might show 80% confidence for /æ/, 15% for /ɛ/, and 5% for other phonemes.

Note

Phonemes are language-specific. A model trained on English phonemes can't recognize Mandarin tones without retraining.

## Language modeling: Predict word sequences

Phoneme predictions alone don't guarantee accurate transcription. The acoustic model might confuse "their" and "there" because they share identical phonemes. Language models resolve ambiguity by applying knowledge of vocabulary, grammar, and common word patterns. Some ways in which the model guides word sequence prediction include:

- **Statistical patterns:** The model knows "The weather is nice" appears more often in training data than "The whether is nice."
- **Context awareness:** After hearing "I need to," the model expects verbs like "go" or "finish," not nouns like "table."
- **Domain adaptation:** Custom language models trained on medical or legal terminology improve accuracy for specialized scenarios.

## Decoding: Select the best text hypothesis

Decoding algorithms search through millions of possible word sequences to find the transcription that best matches both acoustic and language model predictions. This stage balances two competing goals: staying faithful to the audio signal while producing readable, grammatically correct text.

### Beam search decoding

The most common technique, *beam search*, maintains a shortlist (the "beam") of top-scoring partial transcriptions as it processes each audio frame. At every step, it extends each hypothesis with the next most likely word, prunes low-scoring paths, and keeps only the best candidates.

For a three-second utterance, the decoder might evaluate thousands of hypotheses before selecting "Please send the report by Friday" over alternatives like "Please sent the report buy Friday."

Caution

Decoding is computationally intensive. Real-time applications balance accuracy and latency by limiting beam width and hypothesis depth.

## Post-processing: Refine the output

The decoder produces raw text that often requires cleanup before presentation. Post-processing applies formatting rules and corrections to improve readability and accuracy.

### Common post-processing tasks

- **Capitalization:** Convert "hello my name is sam" to "Hello my name is Sam."
- **Punctuation restoration:** Add periods, commas, and question marks based on prosody and grammar.
- **Number formatting:** Change "one thousand twenty three" to "1,023."
- **Profanity filtering:** Mask or remove inappropriate words when required by policy.
- **Inverse text normalization:** Convert spoken forms like "three p m" to "3 PM."
- **Confidence scoring:** Flag low-confidence words for human review in critical applications like medical transcription.

Azure Speech returns the final transcription along with metadata like word-level timestamps and confidence scores, enabling your application to highlight uncertain segments or trigger fallback behaviors.

## How the pipeline works together

Each stage builds on the previous one:

1. **Audio capture** provides the raw signal.
2. **Pre-processing** extracts MFCC features that highlight speech patterns.
3. **Acoustic modeling** predicts phoneme probabilities using transformer networks.
4. **Language modeling** applies vocabulary and grammar knowledge.
5. **Decoding** searches for the best word sequence.
6. **Post-processing** formats the text for human readers.

By separating concerns, modern speech recognition systems achieve high accuracy across languages, accents, and acoustic conditions. When transcription quality falls short, you can often trace the issue to one stage—poor audio capture, insufficient language model training, or overly aggressive post-processing—and adjust accordingly.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI speech concepts

#### Unit: Speech synthesis

Source: https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/4-speech-synthesis/

Speech synthesis—also called text-to-speech (TTS)—converts written text into spoken audio. You encounter speech synthesis when virtual assistants read notifications, navigation apps announce directions, or accessibility tools help users consume written content audibly.

Speech synthesis systems process text through four distinct stages. Each stage transforms the input incrementally, building toward a final audio waveform that sounds natural and intelligible.

## Text normalization: Standardize the text

Text normalization prepares raw text for pronunciation by expanding abbreviations, numbers, and symbols into spoken forms.

Consider the sentence: "*Dr. Smith ordered 3 items for $25.50 on 12/15/2023.*"

A normalization system converts it to: "Doctor Smith ordered three items for twenty-five dollars and fifty cents on December fifteenth, two thousand twenty-three."

Common normalization tasks include:

- Expanding abbreviations ("Dr." becomes "Doctor", "Inc." becomes "Incorporated")
- Converting numbers to words ("3" becomes "three", "25.50" becomes "twenty-five point five zero")
- Handling dates and times ("12/15/2023" becomes "December fifteenth, two thousand twenty-three")
- Processing symbols and special characters ("$" becomes "dollars", "@" becomes "at")
- Resolving homographs based on context ("read" as present tense versus past tense)

Text normalization prevents the system from attempting to pronounce raw symbols or digits, which would produce unnatural or incomprehensible output.

Tip

Different domains require specialized normalization rules. Medical text handles drug names and dosages differently than financial text handles currency and percentages.

## Linguistic analysis: Map text to phonemes

Linguistic analysis breaks normalized text into *phonemes* (the smallest units of sound) and determines how to pronounce each word. The linguistic analysis stage:

1. Segments text into words and syllables.
2. Looks up word pronunciations in lexicons (pronunciation dictionaries).
3. Applies G2P rules or neural models to handle unknown words.
4. Marks syllable boundaries and identifies stressed syllables.
5. Determines phonetic context for adjacent sounds.

### Grapheme-to-phoneme conversion

Grapheme-to-phoneme (G2P) conversion maps written letters (*graphemes*) to pronunciation sounds (*phonemes*). English spelling doesn't reliably indicate pronunciation, so G2P systems use both rules and learned patterns.

For example:

- The word "though" converts to /θoʊ/
- The word "through" converts to /θruː/
- The word "cough" converts to /kɔːf/

Each word contains the letters "ough", but the pronunciation differs dramatically.

Modern G2P systems use neural networks trained on pronunciation dictionaries. These models learn patterns between spelling and sound, handling uncommon words, proper names, and regional variations more gracefully than rule-based systems.

When determining phonemes, linguistic analysis often uses a *transformer* model to help consider *context*. For example, the word "*read*" is pronounced differently in "I *read* books" (present tense: /riːd/) versus "I *read* that book yesterday" (past tense: /rɛd/).

## Prosody generation: Determine pronunciation

Prosody refers to the rhythm, stress, and intonation patterns that make speech sound natural. Prosody generation determines **how** to say words, not just **which sounds** to produce.

### Elements of prosody

Prosody encompasses several vocal characteristics:

- **Pitch contours**: Rising or falling pitch patterns that signal questions versus statements
- **Duration**: How long to hold each sound, creating emphasis or natural rhythm
- **Intensity**: Volume variations that highlight important words
- **Pauses**: Breaks between phrases or sentences that aid comprehension
- **Stress patterns**: Which syllables receive emphasis within words and sentences

Prosody has a significant effect on how spoken text is interpreted. For example, consider how the following sentence changes meaning depending on which syllable or word is emphasized:

- "*I* never said he ate the cake."
- "I never said *he* ate the cake."
- "I never said he *ate* the cake."
- "I never said he ate the *cake*."

### Transformer-based prosody prediction

Modern speech synthesis systems use transformer neural networks to predict prosody. Transformers excel at understanding context across entire sentences, not just adjacent words.

#### The prosody generation process

1. **Input encoding**: The transformer receives the phoneme sequence with linguistic features (punctuation, part of speech, sentence structure)
2. **Contextual analysis**: Self-attention mechanisms identify relationships between words (for example, which noun a pronoun references, where sentence boundaries fall)
3. **Prosody prediction**: The model outputs predicted values for pitch, duration, and energy at each phoneme
4. **Style factors**: The system considers speaking style (neutral, expressive, conversational) and speaker characteristics

Transformers predict prosody by learning from thousands of hours of recorded speech paired with transcripts. The model discovers patterns: questions rise in pitch at the end, commas signal brief pauses, emphasized words lengthen slightly, and sentence-final words often drop in pitch.

#### Factors influencing prosody choices

- **Syntax**: Clause boundaries indicate where to pause
- **Semantics**: Important concepts receive emphasis
- **Discourse context**: Contrasting information or answers to questions may carry extra stress
- **Speaker identity**: Each voice has characteristic pitch range and speaking rate
- **Emotional tone**: Excitement, concern, or neutrality shape prosodic patterns

The prosody predictions create a target specification: "Produce the phoneme /æ/ at 180 Hz for 80 milliseconds with moderate intensity, then pause for 200 milliseconds."

Important

Prosody dramatically affects naturalness. Robotic-sounding speech often results from flat, monotone prosody—not from imperfect phoneme pronunciation.

## Speech synthesis: Generate audio

Speech synthesis generates the final audio waveform based on the phoneme sequence and prosody specifications.

### Waveform generation approaches

Modern systems use neural vocoders—deep learning models that generate audio samples directly. Popular vocoder architectures include WaveNet, WaveGlow, and HiFi-GAN.

#### The synthesis process

1. **Acoustic feature generation**: An acoustic model (often a transformer) converts phonemes and prosody targets into mel-spectrograms—visual representations of sound frequencies over time
2. **Vocoding**: The neural vocoder converts mel-spectrograms into raw audio waveforms (sequences of amplitude values at 16,000-48,000 samples per second)
3. **Post-processing**: The system applies filtering, normalization, or audio effects to match target output specifications

Note

What makes neural vocoders effective:

- **High fidelity**: Generate audio quality approaching studio recordings
- **Naturalness**: Capture subtle vocal characteristics like breathiness and voice quality
- **Efficiency**: Real-time generation on modern hardware (important for interactive applications)
- **Flexibility**: Adapt to different speakers, languages, and speaking styles

The vocoder essentially performs the inverse of what automatic speech recognition does—while speech recognition converts audio into text, the vocoder converts linguistic representations into audio.

## The complete pipeline in action

When you request speech synthesis for "Dr. Chen's appointment is at 3:00 PM":

1. **Text normalization** expands it to "Doctor Chen's appointment is at three o'clock P M"
2. **Linguistic analysis** converts it to phonemes: /ˈdɑktər ˈtʃɛnz əˈpɔɪntmənt ɪz æt θri əˈklɑk pi ɛm/
3. **Prosody generation** predicts pitch rising slightly on "appointment", a pause after "is", and emphasis on "three"
4. **Speech synthesis** generates an audio waveform matching those specifications

The entire process typically completes in under one second on modern hardware.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI speech concepts

#### Unit: Exercise - Explore AI speech

Source: https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/5-exercise-speech/

Now it's your chance to explore speech in an AI application! In this exercise, you'll use speech to text and text to speech with an AI chatbot.

[![Button to launch exercise.](assets/image_001.png)](https://go.microsoft.com/fwlink/?linkid=2339573)

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI speech concepts

#### Unit: Module assessment

Source: https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/6-knowledge-check/

## Check your knowledge

1.

What activity happens during the pre-processing stage of speech recognition?

The audio is converted to .wmv format.

Background noise is added to the audio signal.

Feature vectors are extracted from the audio waveform for modeling.

2.

What are *phonemes*?

Artifacts that are removed from the signal as part of the clean-up process.

The smallest unit of sound in speech.

AI models that generate audio.

3.

Why is it important to generate prosody in speech synthesis?

Prosody maximizes the volume of the audio output.

Prosody translates the speech to the language of the listener.

Prosody ensures natural pronunciation and speech cadence.

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI speech concepts

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/7-summary/

In this module, you explored the fundamental speech technologies that enable natural voice interactions in AI applications. You learned how speech recognition converts spoken words into text and how speech synthesis generates human-like audio from written content.

Throughout this module, you discovered:

- **Speech scenarios and applications**: Speech technologies transform user experiences across customer service, accessibility, conversational AI, healthcare documentation, and e-learning. You explored how combining speech recognition and synthesis creates fluid two-way conversations that feel natural and reduce user friction.
- **Speech recognition fundamentals**: You examined the six-stage pipeline that converts audio to text—from capturing sound waves to producing formatted transcriptions. You learned how MFCC features extract meaningful patterns from audio, how transformer-based acoustic models predict phonemes, and how language models resolve ambiguity by applying vocabulary and grammar knowledge.
- **Speech synthesis fundamentals**: You discovered the four-stage process that transforms text into natural speech—text normalization, linguistic analysis, prosody generation, and audio synthesis. You explored how grapheme-to-phoneme conversion handles spelling variations, how transformer models predict natural rhythm and emphasis, and how neural vocoders generate high-fidelity audio waveforms.

Tip

For more information, see **[Get started with speech in Azure](https://learn.microsoft.com/en-us/training/modules/recognize-synthesize-speech?azure-portal=true)**.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to computer vision concepts

#### Unit: Introduction

Source: https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/1-introduction/

**Computer vision** is one of the core areas of artificial intelligence (AI), and focuses on creating solutions that enable AI applications to process visual information.

Consider these scenarios:

- An autonomous vehicle needs to detect and respond to traffic and pedestrians.
- A store uses smart checkouts with cameras to determine the products in a customer's basket.
- A doorbell camera is used to detect people at your front door.

These use cases, and many others, rely on computer vision.

Of course, computers don't have biological eyes that work the way ours do, but they're capable of processing images; either from a live camera feed or from digital photographs or videos. This ability to process images is the key to creating software that can emulate human visual perception. In this module, we'll examine the building blocks that underlie modern computer vision solutions.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to computer vision concepts

#### Unit: Computer vision tasks and techniques

Source: https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/2-overview/

The term "computer vision" refers to a range of tasks and techniques in which AI software processes visual input; typically from images, videos, or live camera streams. Computer vision is a well-established field of AI, and the techniques used to extract information from visual input have evolved significantly over the years.

## Image classification

One of the oldest computer vision solutions is a technique called *image classification*, in which a model that has been trained with a large number of images is used to predict a text label based on an image's contents.

For example, suppose a grocery store wants to implement smart checkout system that identifies produce automatically. For example, the customer could place fruits or vegetables on a scale at the checkout, and an AI application connected to a camera could automatically identify the types of produce (apple, orange, banana, and so on) and charge the appropriate amount based on its weight. For this solution to work, a model would need to be trained with a large volume of images, each labeled with the correct name. The result is a model that can use the visual features of an image to predict its main subject.

![Photographs of an orange, and apple, and a banana.](assets/image_001.png)

## Object detection

Suppose the grocery store wants a more sophisticated system, in which the checkout can scan multiple items on the checkout and identify each of them. A common approach to this type of problem is called "object detection". Object detection models examine multiple regions in an image to find individual objects and their locations. The resulting prediction from the model includes which objects were detected, and the specific regions of the image in which they appear - indicated by the coordinates of the rectangular bounding box.

![Photograph of an orange, apple, and banana with bounding boxes.](assets/image_002.png)

## Semantic segmentation

Another, more sophisticated way to detect objects in an image, is called "semantic segmentation". In this approach, a model is trained to find objects, and classify individual pixels in the image based on the object to which they belong. The result of this process is a much more precise prediction of the location of objects in the image.

![Photograph of an orange, apple, and banana with overlaid masks.](assets/image_003.png)

## Contextual image analysis

The latest *multimodal* computer vision models are trained to find contextual relationships between objects in images and the text that describes them. The result is an ability to semantically interpret an image to determine what objects and activities it depicts; and generate appropriate descriptions or suggest relevant tags.

![Photograph of a person eating an apple.](assets/image_004.png)

***A person eating an apple.***

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to computer vision concepts

#### Unit: Images and image processing

Source: https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/3-understand-image-processing/

To a computer, an image is an array of numeric *pixel* values. For example, consider the following array:

```
 0   0   0   0   0   0   0
 0   0   0   0   0   0   0
 0   0  255 255 255  0   0
 0   0  255 255 255  0   0
 0   0  255 255 255  0   0
 0   0   0   0   0   0   0
 0   0   0   0   0   0   0
```

The array consists of seven rows and seven columns, representing the pixel values for a 7x7 pixel image (which is known as the image's *resolution*). Each pixel has a value between 0 (black) and 255 (white); with values between these bounds representing shades of gray. The image represented by this array looks similar to the following (magnified) image:

![Diagram of a grayscale image.](assets/image_001.png)

The array of pixel values for this image is two-dimensional (representing rows and columns, or *x* and *y* coordinates) and defines a single rectangle of pixel values. A single layer of pixel values like this represents a grayscale image. In reality, most digital images are multidimensional and consist of three layers (known as *channels*) that represent red, green, and blue (RGB) color hues. For example, we could represent a color image by defining three channels of pixel values that create the same square shape as the previous grayscale example:

```
Red:
 150  150  150  150  150  150  150
 150  150  150  150  150  150  150
 150  150  255  255  255  150  150
 150  150  255  255  255  150  150
 150  150  255  255  255  150  150
 150  150  150  150  150  150  150
 150  150  150  150  150  150  150

Green:
 0    0    0    0    0    0    0
 0    0    0    0    0    0    0
 0    0   255  255  255   0    0
 0    0   255  255  255   0    0
 0    0   255  255  255   0    0
 0    0    0    0    0    0    0
 0    0    0    0    0    0    0

Blue:
 255  255  255  255  255  255  255
 255  255  255  255  255  255  255
 255  255   0    0    0   255  255
 255  255   0    0    0   255  255
 255  255   0    0    0   255  255
 255  255  255  255  255  255  255
 255  255  255  255  255  255  255
```

Here's the resulting image:

![Diagram of a color image.](assets/image_002.png)

The purple squares are represented by the combination:

```
Red: 150
Green: 0
Blue: 255
```

The yellow squares in the center are represented by the combination:

```
Red: 255
Green: 255
Blue: 0
```

## Filters

A common way to perform image processing tasks is to apply *filters* that modify the pixel values of the image to create a visual effect. A filter is defined by one or more arrays of pixel values, called filter *kernels*. For example, you could define filter with a 3x3 kernel as shown in this example:

```
-1 -1 -1
-1  8 -1
-1 -1 -1
```

The kernel is then *convolved* across the image, calculating a weighted sum for each 3x3 patch of pixels and assigning the result to a new image. It's easier to understand how the filtering works by exploring a step-by-step example.

Let's start with the grayscale image we explored previously:

```
 0   0   0   0   0   0   0
 0   0   0   0   0   0   0
 0   0  255 255 255  0   0
 0   0  255 255 255  0   0
 0   0  255 255 255  0   0
 0   0   0   0   0   0   0
 0   0   0   0   0   0   0
```

First, we apply the filter kernel to the top left patch of the image, multiplying each pixel value by the corresponding weight value in the kernel and adding the results:

```
(0 x -1) + (0 x -1) + (0 x -1) +
(0 x -1) + (0 x 8) + (0 x -1) +
(0 x -1) + (0 x -1) + (255 x -1) = -255
```

The result (-255) becomes the first value in a new array. Then we move the filter kernel along one pixel to the right and repeat the operation:

```
(0 x -1) + (0 x -1) + (0 x -1) +
(0 x -1) + (0 x 8) + (0 x -1) +
(0 x -1) + (255 x -1) + (255 x -1) = -510
```

Again, the result is added to the new array, which now contains two values:

```
-255  -510
```

The process is repeated until the filter has been convolved across the entire image, as shown in this animation:

![Diagram of a filter.](assets/image_003.gif)

The filter is convolved across the image, calculating a new array of values. Some of the values might be outside of the 0 to 255 pixel value range, so the values are adjusted to fit into that range. Because of the shape of the filter, the outside edge of pixels isn't calculated, so a padding value (usually 0) is applied. The resulting array represents a new image in which the filter has transformed the original image. In this case, the filter has had the effect of highlighting the *edges* of shapes in the image.

To see the effect of the filter more clearly, here's an example of the same filter applied to a real image:

| Original Image | Filtered Image |
| --- | --- |
| Photograph of a dog. | Photograph of a dog with a Laplace filter applied. |

Because the filter is convolved across the image, this kind of image manipulation is often referred to as *convolutional filtering*. The filter used in this example is a particular type of filter (called a *Laplace* filter) that highlights the edges on objects in an image. There are many other kinds of filter that you can use to create blurring, sharpening, color inversion, and other effects.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to computer vision concepts

#### Unit: Convolutional neural networks

Source: https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/4-computer-vision-models/

The ability to use filters to apply effects to images is useful in image processing tasks, such as you might perform with image editing software. However, the goal of computer vision is often to extract meaning, or at least actionable insights, from images; which requires the creation of machine learning models that are trained to recognize features based on large volumes of existing images.

Tip

This unit assumes you are familiar with the fundamental principles of machine learning, and that you have conceptual knowledge of deep learning with neural networks. If you are new to machine learning, consider completing the **[Introduction to machine learning concepts](https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/)** module on Microsoft Learn.

One of the most common machine learning model architectures for computer vision is a *convolutional neural network* (CNN), a type of deep learning architecture. CNNs use filters to extract numeric feature maps from images, and then feed the feature values into a deep learning model to generate a label prediction. For example, in an *image classification* scenario, the label represents the main subject of the image (in other words, what is this an image of?). You might train a CNN model with images of different kinds of fruit (such as apple, banana, and orange) so that the label that is predicted is the type of fruit in a given image.

During the *training* process for a CNN, filter kernels are initially defined using randomly generated weight values. Then, as the training process progresses, the models predictions are evaluated against known label values, and the filter weights are adjusted to improve accuracy. Eventually, the trained fruit image classification model uses the filter weights that best extract features that help identify different kinds of fruit.

The following diagram illustrates how a CNN for an image classification model works:

![Diagram of a convolutional neural network.](assets/image_001.png)

1. Images with known labels (for example, 0: apple, 1: banana, or 2: orange) are fed into the network to train the model.
2. One or more layers of filters is used to extract features from each image as it is fed through the network. The filter kernels start with randomly assigned weights and generate arrays of numeric values called *feature maps*. Additional layers may "pool" or "downsize" the feature maps to create smaller arrays that emphasize the key visual features extracted by the filters.
3. The feature maps are flattened into a single dimensional array of feature values.
4. The feature values are fed into a fully connected neural network.
5. The output layer of the neural network uses a *softmax* or similar function to produce a result that contains a probability value for each possible class, for example [0.2, 0.5, 0.3].

During training the output probabilities are compared to the actual class label - for example, an image of a banana (class 1) should have the value [0.0, 1.0, 0.0]. The difference between the predicted and actual class scores is used to calculate the *loss* in the model, and the weights in the fully connected neural network and the filter kernels in the feature extraction layers are modified to reduce the loss.

The training process repeats over multiple *epochs* until an optimal set of weights has been learned. Then, the weights are saved and the model can be used to predict labels for new images for which the label is unknown.

Note

CNN architectures usually include multiple convolutional filter layers and additional layers to reduce the size of feature maps, constrain the extracted values, and otherwise manipulate the feature values. These layers have been omitted in this simplified example to focus on the key concept, which is that filters are used to extract numeric features from images, which are then used in a neural network to predict image labels.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to computer vision concepts

#### Unit: Vision transformers and multimodal models

Source: https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/5-modern-vision-models/

CNNs have been at the core of computer vision solutions for many years. While they're commonly used to solve image classification problems as described previously, they're also the basis for more complex computer vision models. For example, *object detection* models combine CNN feature extraction layers with the identification of *regions of interest* in images to locate multiple classes of object in the same image. Many advances in computer vision over the decades have been driven by improvements in CNN-based models.

However, in another AI discipline - *natural language processing* (NLP), another type of neural network architecture, called a *transformer* has enabled the development of sophisticated models for language.

## Semantic modeling for language - Transformers

Transformers work by processing huge volumes of data, and encoding language *tokens* (representing individual words or phrases) as vector-based *embeddings* (arrays of numeric values). A technique called *attention* is used to assign embedding values that reflect different aspects of how each token is used in the context of other tokens. You can think of the embeddings as vectors in multidimensional space, in which each dimension embeds a linguistic attribute of a token based on its context in the training text, creating semantic relationships between tokens. Tokens that are commonly used in similar contexts define vectors that are more closely aligned than unrelated words.

![Diagram of token vectors in a 3D space.](assets/image_001.png)

Tokens that are semantically similar are encoded in similar directions, creating a semantic language model that makes it possible to build sophisticated NLP solutions for text analysis, translation, language generation, and other tasks.

Note

In reality, encoders in transformer networks create vectors with many more dimensions, defining complex semantic relationships between tokens based on linear algebraic calculations. The math involved is complex, as is the architecture of a transformer model. Our goal here is just to provide a *conceptual* understanding of how encoding creates a model that encapsulates relationships between entities.

## Semantic model for images - Vision transformers

The success of transformers as a way to build language models has led AI researchers to consider whether the same approach would be effective for image data. The result is the development of *vision transformer* (ViT) models, in which a model is trained using a large volume of images. Instead of encoding text-based tokens, the transformer extracts *patches* of pixel values from the image, and generates a linear vector from the pixel values.

![Diagram of a photo with patches assigned to vectors.](assets/image_002.png)

The same *attention* technique that's used in language models to embed contextual relationships between tokens, is used to determine contextual relationships between the patches. The key difference is that instead of encoding linguistic characteristics into the embedding vectors, the embedded values are based on visual features, like color, shape, contrast, texture, and so on. The result is a set of embedding vectors that creates a multidimensional "map" of visual features based on how they are commonly seen in the training images.

![Diagram of vision embeddings.](assets/image_003.png)

As with language models, the embeddings result in visual features that are used in similar context being assigned similar vector directions. For example, the visual features common in a *hat* may be contextually related to the visual features that are common in a *head*; because the two things are often seen together. The model has no understanding of what a "hat" or a "head" *is*; but it can infer a semantic relationship between the visual characteristics.

## Bringing it all together - Multimodal models

A language transformer creates embeddings that define a linguistic vocabulary that encode semantic relationships between words. A vision transformer creates a visual vocabulary that does the same for visual features. When the training data includes images with associated text descriptions, we can combine the encoders from both of these transformers in a *multimodal* model; and use a technique called *cross-model attention* to define a unified spatial representation of the embeddings, like this.

![Diagram of a multi-modal model that combines language and vision embeddings.](assets/image_004.png)

This combination of language and vision embeddings enables the model to discern semantic relationships between language and visual features. This capability in turn enables the model to predict complex descriptions for images it hasn't previously seen, by recognizing visual features and searching the shared vector space for associated language.

![Photograph of a person in a park with a hat and a backpack.](assets/image_005.png)

***A person in a park with a hat and a backpack***

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to computer vision concepts

#### Unit: Image generation

Source: https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/5a-generate-images/

The same multimodal model architecture that enables AI to create natural language responses to visual input, can also be used to enable it to create images in response to natural language prompts. By identifying the visual features associated with language, an image synthesis model can take a description of a desired image or video and generate it.

Most modern image-generation models use a technique called *diffusion*, in which a prompt is used to identify a set of related visual features that can be combined to create an image. The image is then created iteratively, starting with a random set of pixel values and removing "noise" to create structure. After each iteration, the model evaluates the image so far to compare it to the prompt, until a final image that depicts the desired scene is produced.

For example, the prompt *"A dog carrying a stick in its mouth"* might result in a diffusion process with the following iterations:

![Diagram of a series of images of a dog with increasing visual structure.](assets/image_001.png)

Some models can apply a similar process to generating video. The video generation process uses the same technique to identify visual features that are associated with language tokens, but also takes into account factors like the physical behavior of objects in the real world (such as ensuring that a dog walks with its feet on the ground) and the temporal progression (so that the video depicts a logical sequence of activity).

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to computer vision concepts

#### Unit: Exercise - Explore computer vision

Source: https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/5b-exercise/

Now it's your chance to explore computer vision! In this exercise, you'll use a computer vision model to identify the contents of images.

[![Button to launch exercise.](assets/image_001.png)](https://go.microsoft.com/fwlink/?linkid=2339549)

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to computer vision concepts

#### Unit: Module assessment

Source: https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/6-knowledge-check/

## Check your knowledge

1.

Computer vision is based on the manipulation and analysis of what kinds of values in an image?

Timestamps in photograph metadata

Pixels

Image file names

2.

What is the primary role of filters in a convolutional neural network (CNN) used for image classification?

To apply visual effects to enhance image appearance.

To extract numeric features from images for use in a neural network.

To compress image size for faster processing.

3.

Which description best matches a Vision Transformer (ViT?

A tool that applies filters to images, changing their visual appearance.

An AI agent that converts a large language model to a vision model.

A model that uses attention to process image patches and create contextual embeddings.

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to computer vision concepts

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/7-summary/

Computer vision is built on the analysis and manipulation of numeric pixel values in images. Machine learning models are trained using a large volume of images to enable common computer vision scenarios, such as image classification, object detection, semantic segmentation, caption generation, and others.

The models used for computer vision tasks have evolved from statistics-based image classifiers through convolutional neural networks to today's transformer-based multimodal models. Cutting-edge models can not only interpret visual *input*, but also generate visual *output*.

Tip

For more information, see **[What is Azure Vision?](https://azure.microsoft.com/resources/cloud-computing-dictionary/what-is-computer-vision?azure-portal=true)**.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI-powered information extraction concepts

#### Unit: Introduction

Source: https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/1-introduction/

AI information extraction solutions are commonly used extract structured data fields from unstructured media such as documents, images, and even videos and audio recordings.

Note

While we'll focus on information extraction from documents and images in this module, AI solutions are emerging that use speech recognition and other advanced techniques to extract information from different media formats, such as videos and audio recordings.

Scenarios for information extraction range from simple apps that can read contact information from a photograph of a business card, to highly complex business workflow automation systems that analyze and process financial and legal documents.

![Diagram of a business card with extracted fields.](assets/image_001.png)

Some common examples of information extraction scenarios include:

### Financial document processing

**Invoice processing** solutions can analyze invoices to extract:

- **Vendor information**: Company names, addresses, and contact details.
- **Transaction details**: Invoice numbers, dates, and payment terms.
- **Line items**: Product descriptions, quantities, unit prices, and totals.
- **Tax information**: Tax rates, amounts, and exempt items.

**Receipt processing** solutions might need to read receipts to extract:

- **Merchant details**: Store names, locations, and transaction IDs.
- **Purchase information**: Items purchased, prices, and discounts.
- **Payment details**: Payment methods, change amounts, and loyalty points.

**Financial statements** can be processed to extract:

- **Account information**: Account numbers, balances, and transaction histories.
- **Performance metrics**: Revenue, expenses, and profit margins.
- **Compliance data**: Regulatory reporting fields, and audit trail information.

### Legal and compliance documents

**Contract processing** solutions can be used to extract:

- **Party information**: Contracting parties, signatories, and witnesses.
- **Terms and conditions**: Effective dates, renewal terms, and termination clauses.
- **Financial terms**: Payment schedules, penalties, and insurance requirements.

**Regulatory forms** that might need to be processed include:

- **Tax documents**: W-2s, 1099s, and other tax forms.
- **Insurance forms**: Policy numbers, claim amounts, and incident details.
- **Government forms**: Application data and certification requirements.

### Healthcare documentation

**Medical records** can be processed to retrieve:

- **Patient information**: Demographics, medical record numbers, and insurance details.
- **Clinical data**: Diagnoses, treatments, medication lists, and vital signs.
- **Administrative data**: Appointment schedules, billing codes, and provider information.

### Supply chain and logistics

**Shipping documents** often contain vital details such as:

- **Shipment details**: Tracking numbers, weights, and dimensions.
- **Address information**: Sender and recipient details, and delivery instructions.
- **Customs documentation**: Commodity codes, values, and geographical origin.

**Purchase Orders** are commonly processed to extract:

- **Vendor information**: Supplier details and contact information.
- **Product specifications**: Item codes, descriptions, and quantities.
- **Delivery requirements**: Schedules, locations, and special instructions.

Using AI to extract information can be the foundation of workload automation systems for these scenarios, and many more.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI-powered information extraction concepts

#### Unit: Overview of information extraction

Source: https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/2-overview/

Information extraction is a workload that combines multiple AI techniques to extract data from content - often digital documents. A comprehensive information extraction solution involves elements of computer vision to detect text in image-based data; and machine learning, or increasingly generative AI, to semantically map the extracted text to specific data fields.

![Diagram of the information extraction process.](assets/image_001.png)

1. Text detection and extraction from images using optical character recognition (OCR).
2. Value identification and mapping from the OCR results to data fields.

For example, an AI-powered expense claim processing solution might automatically extract the relevant fields from receipts to process claims more efficiently.

| Scanned receipt | Extracted data |
| --- | --- |
| Diagram of a receipt. | - **Vendor**: Fourth Coffee - **Date**: 2024-08-15 - **Subtotal**: $6.48 - **Tax**: $0.49 - **Total Claim**: $6.97 |

## Choosing the right approach

When planning an information extraction solution, it's important to consider the requirements and constraints that the system must address. Some key considerations include:

- **Document characteristics**. The documents from which you need to extract data are the basis of the whole solution. Consider factors like:

  - **Layout consistency**: Standardized forms favor template-based approaches, while a need to process multiple formats and layouts might require a more complex machine learning based solution.
  - **Volume requirements**: High-volume processing benefits from automated machine learning models that run on optimized system hardware.
  - **Accuracy requirements**: Critical applications might need human-in-the-loop validation.
- **Technical infrastructure requirements and constraints**. Your solution will require hardware and software infrastructure to run. Consider factors like:

  - **Security and privacy**: The documents you're processing might contain sensitive or confidential data. Your solution must include adequate measures to secure access to the data and compliance with any industry requirements for storing and processing protected data.
  - **Processing power**: Deep learning and generative AI models commonly used in information extraction solutions require significant computational resources.
  - **Latency requirements**: Real-time processing might limit model complexity.
  - **Scalability needs**: Cloud-based solutions offer better scalability for variable workloads.
  - **Integration complexity**: Consider API compatibility and data format requirements.

Tip

In many cases, information extraction solutions can be built using software services, such as Azure Document Intelligence in Microsoft Foundry Tools and Azure Content Understanding in Microsoft Foundry Tools. Using services such as these as the foundation for your solution can greatly reduce the development effort required while providing highly scalable, industry-proven performance, accuracy, and integration capabilities.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI-powered information extraction concepts

#### Unit: Optical character recognition (OCR)

Source: https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/3-vision-extraction/

Optical Character Recognition (OCR) is a technology that automatically converts visual text in images - whether from scanned documents, photographs, or digital files—into editable, searchable text data. Rather than manually transcribing information, OCR enables automated data extraction from:

- Scanned invoices and receipts
- Digital photographs of documents
- PDF files containing images of text
- Screenshots and captured content
- Forms and handwritten notes

## The OCR pipeline: A step-by-step process

The OCR pipeline consists of five essential stages that work together to transform visual information into text data.

![Diagram of the OCR pipeline.](assets/image_001.png)

The stages in the OCR process are:

1. Image acquisition and input.
2. Preprocessing and image enhancement.
3. Text region detection.
4. Character recognition and classification.
5. Output generation and post-processing.

Let's examine each stage in more depth.

### Stage 1: Image acquisition and input

The pipeline begins when an image containing text enters the system. This could be:

- A photograph taken with a smartphone camera.
- A scanned document from a flatbed or document scanner.
- A frame extracted from a video stream.
- A PDF page rendered as an image.

Tip

Image quality at this stage significantly impacts the final accuracy of text extraction.

### Stage 2: Preprocessing and image enhancement

Before text detection begins, the following techniques are used to optimize the image for better recognition accuracy:

- **Noise reduction** removes visual artifacts, dust spots, and scanning imperfections that could interfere with text detection. The specific techniques used to perform noise reduction include:

  - **Filtering and image processing algorithms**: Gaussian filters, median filters, and morphological operations.
  - **Machine learning models**: Denoising autoencoders and convolutional neural networks (CNNs) trained specifically for document image cleanup.
- **Contrast adjustment** enhances the difference between text and background to make characters more distinct. Again, there are multiple possible approaches:

  - **Classical methods**: Histogram equalization, adaptive thresholding, and gamma correction.
  - **Machine learning**: Deep learning models that learn optimal enhancement parameters for different document types.
- **Skew correction** detects and corrects document rotation, ensuring text lines are properly aligned horizontally. Techniques for skew correction include:

  - **Mathematical techniques**: Hough transform for line detection, projection profiles, and connected component analysis.
  - **Neural network models**: Regression CNNs that predict rotation angles directly from image features.
- **Resolution optimization** adjusts image resolution to the optimal level for character recognition algorithms. You can optimize image resolution with:

  - **Interpolation methods**: Bicubic, bilinear, and Lanczos resampling algorithms.
  - **Super-resolution models**: Generative adversarial networks (GANs) and residual networks that intelligently upscale low-resolution text images.

### Stage 3: Text region detection

The system analyzes the preprocessed image to identify areas that contain text by using the following techniques:

- **Layout analysis** distinguishes between text regions, images, graphics, and white space areas. Techniques for layout analysis include:

  - **Traditional approaches**: Connected component analysis, run-length encoding, and projection-based segmentation.
  - **Deep learning models**: Semantic segmentation networks like U-Net, Mask R-CNN, and specialized document layout analysis models (for example, LayoutLM, or PubLayNet-trained models).
- **Text block identification** groups individual characters into words, lines, and paragraphs based on spatial relationships. Common approaches include:

  - **Classical methods**: Distance-based clustering, white space analysis, and morphological operations
  - **Neural networks**: Graph neural networks and transformer models that understand spatial document structure
- **Reading order determination** establishes the sequence in which text should be read (left-to-right, top-to-bottom for English). The correct order can be determined by:

  - **Rule-based systems**: Geometric algorithms using bounding box coordinates and spatial heuristics.
  - **Machine learning models**: Sequence prediction models and graph-based approaches that learn reading patterns from training data.
- **Region classification** identifies different types of text regions (headers, body text, captions, tables).

  - **Feature-based classifiers**: Support vector machines (SVMs) using handcrafted features like font size, position, and formatting
  - **Deep learning models**: Convolutional neural networks and vision transformers trained on labeled document datasets

### Stage 4: Character recognition and classification

This is the core of the OCR process where individual characters are identified:

- **Feature extraction**: Analyzes the shape, size, and distinctive characteristics of each character or symbol.

  - **Traditional methods**: Statistical features like moments, Fourier descriptors, and structural features (loops, endpoints, intersections)
  - **Deep learning approaches**: Convolutional neural networks that automatically learn discriminative features from raw pixel data
- **Pattern matching**: Compares extracted features against trained models that recognize different fonts, sizes, and writing styles.

  - **Template matching**: Direct comparison with stored character templates using correlation techniques
  - **Statistical classifiers**: Hidden Markov Models (HMMs), Support Vector Machines, and k-nearest neighbors using feature vectors
  - **Neural networks**: Multi-layer perceptrons, CNNs, and specialized architectures like LeNet for digit recognition
  - **Advanced deep learning**: Residual networks (ResNet), DenseNet, and EfficientNet architectures for robust character classification
- **Context analysis**: Uses surrounding characters and words to improve recognition accuracy through dictionary lookups and language models.

  - **N-gram models**: Statistical language models that predict character sequences based on probability distributions.
  - **Dictionary-based correction**: Lexicon lookup with edit distance algorithms (such as *Levenshtein distance*) for spelling correction.
  - **Neural language models**: LSTM and transformer-based models (like BERT variants) that understand contextual relationships.
  - **Attention mechanisms**: Transformer models that focus on relevant parts of the input when making character predictions.
- **Confidence scoring**: Assigns probability scores to each recognized character based on how certain the system is about its identification.

  - **Bayesian approaches**: Probabilistic models that quantify uncertainty in character predictions.
  - **Softmax outputs**: Neural network final layer activations converted to probability distributions.
  - **Ensemble methods**: Combining predictions from multiple models to improve confidence estimates.

### Stage 5: Output generation and post-processing

The final stage converts recognition results into usable text data:

- **Text compilation**: Assembles individual character recognitions into complete words and sentences.

  - **Rule-based assembly**: Deterministic algorithms that combine character predictions using spatial proximity and confidence thresholds.
  - **Sequence models**: Recurrent neural networks (RNNs) and Long Short-Term Memory (LSTM) networks that model text as sequential data.
  - **Attention-based models**: Transformer architectures that can handle variable-length sequences and complex text layouts.
- **Format preservation**: Maintains document structure including paragraphs, line breaks, and spacing.

  - **Geometric algorithms**: Rule-based systems using bounding box coordinates and white space analysis.
  - **Layout understanding models**: Graph neural networks and document AI models that learn structural relationships.
  - **Multi-modal transformers**: Models like LayoutLM that combine text and layout information for structure preservation.
- **Coordinate mapping**: Records the exact position of each text element within the original image.

  - **Coordinate transformation**: Mathematical mapping between image pixels and document coordinates.
  - **Spatial indexing**: Data structures like R-trees and quad-trees for efficient spatial queries.
  - **Regression models**: Neural networks trained to predict precise text positioning coordinates.
- **Quality validation**: Applies spelling and grammar checks to identify potential recognition errors.

  - **Dictionary-based validation**: Lookup against comprehensive word lists and specialized domain vocabularies.
  - **Statistical language models**: N-gram models and probabilistic parsers for grammar and context validation.
  - **Neural language models**: Pre-trained models like GPT or BERT fine-tuned for OCR error detection and correction.
  - **Ensemble validation**: Combining multiple validation approaches to improve error detection accuracy.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI-powered information extraction concepts

#### Unit: Field extraction and mapping

Source: https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/4-form-extraction/

Field extraction is the process of taking text output from OCR and mapping individual text values it to specific, labeled data fields that correspond to meaningful business information. While OCR tells you *what* text exists in a document, field extraction tells you *what that text means* and *where it belongs* in your business systems.

## The field extraction pipeline

Field extraction follows a systematic pipeline that transforms OCR output into structured data.

![Diagram of the field extraction pipeline.](assets/image_001.png)

The stages in the field extraction process are:

1. OCR output ingestion.
2. Field detection and candidate identification.
3. Field mapping and association.
4. Data normalization and standardization.
5. Integration with business processes and systems.

Let's explore these stages in more detail.

### Stage 1: OCR output ingestion

The process begins with the structured output from the OCR pipeline, which can include:

- **Raw text content**: The actual characters and words extracted from the document
- **Positional metadata**: Bounding box coordinates, page locations, and reading order information
- **Confidence scores**: OCR engine confidence levels for each text element
- **Layout information**: Document structure, line breaks, paragraph boundaries

Note

Unlike simple text processing, field extraction heavily relies on *where* text appears in the document, not just what it says. The position of "12345" might help determine whether it's an invoice number, customer ID, or phone number.

### Stage 2: Field detection and candidate identification

This stage identifies potential field value in the OCR output. There are multiple approaches that can be used, independently or in combination, to determine the likely fields in the OCR results.

#### Template-based detection

Templates for field detection rely on rule-based pattern matching. Field identification can be accomplished using techniques such as:

- Predefined document layouts with known field positions and anchor keywords.
- Searches for label-value pairs like "Invoice Number:", "Date:", "Total:".
- Regular expressions and string matching algorithms.

**Advantages** of a template-based approach include high accuracy for known document types, fast processing, and explainable results.

**Limitations** of the approach include the requirement for manual template creation, and complexity caused by layout variations or field naming inconsistencies.

#### Machine learning-based detection

Instead of hard-coded logic to extract fields based on known names and locations, you can use a corpus of example documents to train a machine learning model that extracts the fields based on learned relationships. *Transformer*-based models in particular are good at applying contextual cues to identify patterns, and so are often the basis of a field detection solution.

Training approaches for field detection machine learning models include:

- **Supervised learning**: Trained on labeled datasets with known field locations.
- **Self-supervised learning**: Pre-trained on large document corpora to understand layout patterns.
- **Multi-modal learning**: Combines text, visual, and positional features.
- **Advanced model architectures**, such as:
  - **Graph Neural Networks (GNNs)** that model spatial relationships between text elements as graph connections.
  - **Attention mechanisms** that focus on relevant document regions when predicting field values.
  - **Sequence-to-sequence models** that transform unstructured text sequences into structured field assignments.

#### Generative AI for schema-based extraction

Recent advances in large language models (LLMs) have led to the emergence of generative AI-based field detection techniques, which enable more efficient and effective field detection through:

- **Prompt-based extraction** in which you provide the LLM with document text and a schema definition, and it matches the text to the fields in the schema.
- **Few-shot learning** in which you can train models with minimal examples to extract custom fields.
- **Chain-of-thought reasoning** that guides models through step-by-step field identification logic.

### Stage 3: Field mapping and association

After candidate values are identified, they must be mapped to specific schema fields:

#### Key-value pairing techniques

In many cases, data fields in a document or form are discrete values that can be mapped to keys - for example, the vendor name, date, and total amount in a receipt or invoice. Common techniques used for key-value pairing include:

- **Proximity analysis**:

  - **Spatial clustering**: Group nearby text elements using distance algorithms.
  - **Reading order analysis**: Follow natural text flow to associate labels with values.
  - **Geometric relationships**: Use alignment, indentation, and positioning patterns.
- **Linguistic pattern recognition**:

  - **Named entity recognition (NER)**: Identify specific entity types (dates, amounts, names).
  - **Part-of-speech tagging**: Understand grammatical relationships between labels and values.
  - **Dependency parsing**: Analyze syntactic relationships in text.

#### Table and structured content processing

Some documents include more complex structures of text, such as tables. For example, a receipt or invoice might include a table of line items with columns for the item name, price, and the quantity purchased.

The presence of a table can be determined using several techniques, including:

- Specialized convolutional neural network (CNN) architectures for table structure recognition.
- Object detection approaches adapted for table cell identification.
- Graph-based parsing approaches that model table structure as graph relationships between cells.

To map the values in the cells in a table to fields, the field extraction solution might employ one or more of the following techniques:

- **Row-column association** to map table cells to specific field schemas.
- **Header detection** to identify column headers to understand field meanings.
- **Hierarchical processing** to handle nested table structures and sub-totals.

#### Confidence scoring and validation

Field extraction accuracy depends on many factors, and the algorithms and models used to implement the solution are subject to potential misidentification or value interpretation errors. To account for this, various techniques are employed to evaluate the accuracy of the predicted field values; including:

- **OCR confidence**: Inheriting confidence scores from the underlying text recognition.
- **Pattern matching confidence**: Scoring based on how well extraction matches expected patterns.
- **Context validation**: Verifying that field values make sense in document context.
- **Cross-field validation**: Checking relationships between extracted fields (for example, verifying that line item subtotals sum to the overall invoice total).

### Stage 4: Data normalization and standardization

Raw extracted values are generally transformed into consistent formats (for example to ensure that all extracted dates are expressed in the same date format) and checked for validity.

#### Format standardization

Examples of format standardization that can be implemented include:

- **Date normalization**:

  - **Format detection**: Identify various date formats (MM/DD/YYYY, DD-MM-YYYY, etc.).
  - **Parsing algorithms**: Convert to standardized ISO formats.
  - **Ambiguity resolution**: Handle cases where date format is unclear.
- **Currency and numeric processing**:

  - **Symbol recognition**: Handle different currency symbols and thousand separators.
  - **Decimal normalization**: Standardize decimal point representation across locales.
  - **Unit conversion**: Convert between different measurement units as needed.
- **Text standardization**:

  - **Case normalization**: Apply consistent capitalization rules.
  - **Encoding standardization**: Handle different character encodings and special characters.
  - **Abbreviation expansion**: Convert common abbreviations to full forms.

#### Data Validation and Quality Assurance

As well as formatting the extracted fields, the standardization process enables further validation of the values that have been extracted through techniques like:

- **Rule-based validation**:

  - **Format checking**: Verify extracted values match expected patterns (phone numbers, email addresses).
  - **Range validation**: Ensure numeric values fall within reasonable bounds.
  - **Required field checking**: Confirm all mandatory fields are present.
- **Statistical validation**:

  - **Outlier detection**: Identify unusually high or low values that might indicate extraction errors.
  - **Distribution analysis**: Compare extracted values against historical patterns.
  - **Cross-document validation**: Check consistency across related documents.

### Stage 5: Integration with business processes and systems

The final stage of the process usually involves integrating the extracted field values into a business process or system:

#### Schema mapping

The extracted fields might need to be further transformed or reformatted so they align with application schemas used for data ingestion into downstream systems. For example:

- **Database schemas**: Map extracted fields to specific database columns and tables.
- **API payloads**: Format data for REST API consumption by downstream systems.
- **Message queues**: Prepare structured messages for asynchronous processing.

The schema-mapping process might involve transformations such as:

- **Field renaming**: Map extracted field names to target system conventions.
- **Data type conversion**: Ensure values match expected data types in target systems.
- **Conditional logic**: Apply business rules for field transformation and derivation.

#### Quality metrics and reporting

Another common task after the extraction process has finished is to evaluate and report on the quality of the extracted data. The report can include information such as:

- **Field-level confidence scores**: Individual confidence ratings for each extracted field.
- **Document-level quality assessment**: Overall extraction success metrics.
- **Error categorization**: Classify extraction failures by type and cause.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI-powered information extraction concepts

#### Unit: Exercise - Explore AI information extraction

Source: https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/6b-exercise/

Now it's your chance to explore AI-powered information extraction! In this exercise, you'll use optical character recognition combined with a large language model to extract and interpret fields from receipts.

Launch the exercise and follow the instructions.

[![Button to launch exercise.](assets/image_001.png)](https://go.microsoft.com/fwlink/?linkid=2339457)

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI-powered information extraction concepts

#### Unit: Module assessment

Source: https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/7-knowledge-check/

## Check your knowledge

1.

Which of these statements accurately defines AI information extraction?

Using SQL code to query a database.

Copying files from cloud storage to local disks.

Analyzing unstructured content to identify and extract relevant fields and values.

2.

How is OCR used in the information extraction process?

Online Content Retrieval (OCR) is used to copy cloud data to a local device for processing.

Optical character recognition (OCR) is used to convert images of text into machine-readable text data.

Open Conversion Routine (OCR) is a method for converting JSON data into images.

3.

How does generative AI enhance the data extraction process?

By using semantic language models to accurately match extracted values to data fields.

By manually coding extraction rules for each document type.

By generating new documents from scratch.

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: AI concepts for developers and technology professionals

### Module: Introduction to AI-powered information extraction concepts

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/8-summary/

In this module, you learned how organizations can use AI-powered information extraction to process content. Extracting key information from unstructured content and storing it in structured formats, such as databases, is essential but often time-consuming and error-prone. AI-powered information extraction uses techniques like optical character recognition (OCR), text analysis, machine learning, and generative AI to automate the identification and extraction of data.

Tip

For more information about developing information extraction solutions on Microsoft Azure, see:

- **[Azure Document Intelligence in Foundry Tools](https://azure.microsoft.com/products/ai-foundry/tools/document-intelligence?azure-portal=true)**.
- **[Azure Content Understanding in Foundry Tools](https://azure.microsoft.com/products/ai-foundry/tools/content-understanding?azure-portal=true)**.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI in Azure

#### Unit: Introduction

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/1-introduction/

**Artificial Intelligence (AI)** refers to systems designed to perform tasks that typically require human intelligence—such as reasoning, problem-solving, perception, and language understanding.

An **AI application** is a software solution that uses AI techniques—such as computer vision, speech, and information extraction—to perform tasks that typically require human-like intelligence. These applications can understand, reason, learn, and respond to inputs in a way that feels more adaptive than traditional software.

AI applications are powered by *machine learning* (ML) models, which are mathematical systems trained to recognize patterns in data and make predictions or generate outputs. ML models are the engines inside an AI application. When you interact with an AI application, the model performs *inference*, meaning it applies what it learned during training to new input.

AI applications are:

- *Model-powered*: They use trained models to process inputs and generate outputs, such as text, images, or decisions.
- *Dynamic*: Unlike static programs, AI apps can improve over time through retraining or fine-tuning.

Some examples of AI applications for different industries include:

- **Healthcare**: AI-powered diagnostic tools that analyze medical images (such as X-rays or MRIs) and help doctors detect diseases more accurately and quickly.
- **Finance**: Fraud detection systems that use AI to monitor transactions in real time and identify suspicious activity, helping prevent financial crimes.
- **Retail**: Personalized recommendation engines that analyze customer behavior and preferences to suggest products, improving the shopping experience.
- **Manufacturing**: Predictive maintenance solutions that use AI to monitor equipment and forecast when machines are likely to fail, reducing downtime and maintenance costs.
- **Education**: Intelligent tutoring systems that adapt to each student’s learning style and pace, providing customized feedback and support to enhance learning outcomes.

In this module, you learn how Microsoft enables you to build AI applications with the latest technology, securely, and at scale. While the model is the engine, AI applications also need security, networking, hosting, data storage, application logic, and user interfaces. Microsoft provides all the infrastructure and services needed to support enterprise-scale AI development. The module gives you a foundation in how Azure streamlines AI application development, integrates with Microsoft Foundry, and enables rapid innovation.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI in Azure

#### Unit: Understand Azure

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/2-what-is-azure/

**Microsoft Azure** is one of the world's leading cloud platforms. A **cloud platform** is a collection of services you can use over the internet instead of running everything on your own computer or server. Today, most modern applications run in the cloud, in internet-based data centers that let you store data, run code, and scale without worrying about physical hardware. Instead of buying and maintaining your own infrastructure, you use services provided by trusted platforms.

Azure's trusted by organizations globally to build secure, reliable applications. With Azure, you can develop AI applications and agents that take advantage of advanced AI services and deploy them at global scale.

Azure provides four core categories of services:

- **Compute**: The ability to run applications, programs, and workloads in the cloud. You can think of compute as renting computers in the cloud that you can scale up or down whenever you need.
- **Storage**: Services that let you save and manage data in the cloud. Storage can include files, databases, images, backups—anything you want safely stored and accessible from anywhere.
- **Networking**: Tools that connect your cloud resources to each other, to the internet, or to your organization.
  Networking makes sure your apps can talk to each other securely and efficiently.
- **App Services**: Ready‑made platforms for building, hosting, and running applications without managing the underlying servers.

## Azure's organizational structure

When a user gets started with Azure, their access needs to be organized and managed. Azure organizes access and management by **tenants**, **subscriptions**, **resource groups**, and **resources**.

![Screenshot of diagram of Azure's organizational structure.](assets/image_001.png)

An **Azure tenant** is an organization's home base and identity in Microsoft's cloud. Having a tenant is like having an apartment unit in a large building, where the building is Microsoft cloud. Each tenant is separate and secured from others—your organization has its own locks, rooms, and controls.

When a company signs up for Azure or Microsoft 365, Microsoft creates a *tenant* for them. This tenant is a dedicated and secure space where all the organization’s cloud resources live. The tenant includes users, groups, identities, and policies for managing secure access.

An **Azure subscription** is a billing container for your cloud resources. One tenant can contain one or many Azure subscriptions. A subscription ties your Azure usage to a payment method (or credits for free/trial accounts) and sets boundaries for cost, quotas, and access control.

**Resource groups (RGs)** are folders that hold related Azure resources so you can manage them together. One subscription can have multiple resource groups. Each resource group can have custom permissions and policies at the resource-group level.

An **Azure resource** is *any individual service or object you create in Azure* such as a storage account, a database, or a Foundry resource. Each resource has a resource type, configuration settings, unique resource name and ID, and optional access controls. The resource type (for example: `Microsoft.Storage/storageAccounts`) defines the resource's behavior, capabilities, and settings.

When you *configure* a resource, you choose its settings, such as:

- Region (where the resource is deployed)
- Performance tier (associated with cost)
- Permissions and security

Azure's organizational structure helps ensure clarity, security, and scalability in cloud environments. Tenants and subscriptions allow for clear separation of concerns across departments or projects. Resource groups simplify management by grouping related assets, making it easier to apply policies, monitor usage, and automate deployments. Understanding this hierarchy is essential for efficient cloud governance and cost control in Azure.

## Azure portal

**Azure portal**, accessible at [https://portal.azure.com](https://portal.azure.com?portal=true), is a centralized, web-based management user interface (UI) for all Azure services. It can be used to:

- Create and manage cloud resources
- Deploy and configure services
- Monitor usage, performance, and health
- Manage identities, roles, and access policies
- View billing, costs, and spending patterns
- Access specialized services like Microsoft Foundry

![Screenshot of the Azure portal experience.](assets/image_002.png)

You can create and manage individual resources in Azure portal. Each resource has information which is accessible through the *All resources* pane.

![Screenshot of a resource in the Azure portal.](assets/image_003.png)

Note

You can also create Azure resources **programmatically**, which means using code or scripts *instead* of clicking through the Azure portal interface. This approach is useful when you want to repeat the same setup across environments, automate deployments, or reduce manual errors. For example, instead of going into the Azure portal to create a storage account, you could run a single command in the Azure CLI or use a script that creates it the same way every time. This makes your deployments faster, more reliable, and easier to maintain—especially for larger AI applications that require many resources.

Next, learn how Azure gives you everything you need to build scalable, secure AI applications.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI in Azure

#### Unit: Developing AI apps on Azure

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/3-develop-ai-apps/

The AI applications we use and trust today rely on robust **security**, **networking**, **hosting**, **scaling**, **data storage**, and **AI capabilities**. Azure gives you everything you need to build scalable and secure AI applications quickly and using common technologies of your choice.

## Security and networking

![Screenshot of video showing Azure security and networking icons.](assets/image_001.png)

The foundation of AI applications is security and networking. Azure is secure by design, offering built in identity, access control and network isolation to protect your AI solutions.

AI applications require strong protection and stable connectivity. Azure's security tools protect your AI applications from unauthorized access and threats. For example, *Azure Entra ID* ensures that only the right people and services can access your AI resources. It enables role-based access control (RBAC) to limit access to model deployments, resources, and data.

Azure also protects an AI application's secrets. A **secret** is any sensitive value that your AI application must keep hidden because it grants access to a system, service, or data. Secrets can include API keys, database connection strings, OAuth tokens, passwords, and more. A *key* is a type of secret that is usually a long, randomly generated string—that *authenticates your request* when you call an *endpoint* (a URL). In Azure, secrets are typically stored in *Azure Key Vault*, not in code or GitHub.

For example, suppose you're building an AI chatbot with Azure.

1. Your application calls the model's *endpoint*.
2. Your request includes a *key* to authenticate the call.
3. The key is stored in *Azure Key Vault* as a *secret*.
4. Your application retrieves the secret at runtime using a secure method (managed identity).

Azure's security tools cover identity, secret, and data protection, compliance, threat detection, monitoring, and security controls such as firewalls. Its *networking* services ensure the application runs reliably, privately, and efficiently across cloud and hybrid environments.

## Hosting and scaling

![Screenshot of video showing Azure hosting icons.](assets/image_002.png)

Applications run on computers or environments known as a **host**. In cloud contexts, a host can be a virtual machine (VM), providing the compute, memory, and networking your application needs to execute.

To host and scale your applications, you can use Azure Kubernetes Service (AKS) for containerized workloads or Azure App Service to modernize and deploy web apps quickly. AKS orchestrates, or manages, a large number of containers, which hold what your code needs to run. Azure App Service hosts web applications, APIs, and background jobs. These services accelerate time to market while ensuring reliability.

**Scaling** your applications means to automatically or manually adjust the amount of compute power your app uses—usually by adding or removing instances. In cloud applications, 'instances' refer to copies of your application running at the same time.

Two types of scaling:

- Scale out (horizontal): Add more instances
- Scale up (vertical): Increase CPU/memory on the existing instance

Cloud platforms like Azure make scaling automatic based on CPU usage, number of requests, or custom metrics.

## Data storage

![Screenshot of video showing Azure data icons.](assets/image_003.png)

AI applications rely on **multiple types of data**, each serving a different purpose in the system.

Some examples include:

- *Training data*: which teaches the AI model patterns
- *Inference input data*: real-time user or system input
- *AI model output data*: predictions or generated responses
- *Application state*: data that supports user-specific continuity
- *System/configuration data*: supporting how the AI app behaves
- *Logs & telemetry*: monitoring and optimization
- *Security & access data*: safe authentication and authorization

AI apps need robust data storage. **Data storage** is any system or service used to save, organize, and retrieve data so that applications can use it later. Storage plays a critical role because it lets you safely hold the information your AI system needs to *learn*, *operate*, and *improve*. The stored data can also support personalization, analytics, quality improvement, and debugging.

Azure offers multiple options including *Azure SQL Database* for mission critical workloads, *Azure Cosmos DB* for real time globally distributed data, and *Azure Database* for PostgreSQL for intelligent, scalable solutions. No matter the type, storage gives your application a persistent place to keep information.

## AI capabilities

![Screenshot of video showing Foundry icons.](assets/image_004.png)

Finally, to bring your AI agents to life, you can use **Microsoft Foundry**, an enterprise-grade platform for developing and operating AI agents securely on Azure.

Administrators can manage all of these cloud resources in the Azure portal or by using shell scripting and templates to automate resource deployment and configuration.

The huge range of services and tools in Azure means that whatever your organizational requirements for security, application infrastructure and database platform, you can deliver a great AI solution.

Next, take a closer look at how to use Microsoft Foundry to build AI applications.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI in Azure

#### Unit: Microsoft Foundry for AI

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/4-microsoft-foundry/

**Microsoft Foundry** is a unified, enterprise-grade platform-as-a-service (PaaS) for building, deploying, and managing AI applications and agents. It consolidates models, agent orchestration, monitoring, and governance tools in one platform, offering production-grade infrastructure and security.

Foundry offers powerful capabilities for developers, including the ability to choose from a wide range of **models**, use those models to build **agents**, connect those agents to **tools**, and integrate **knowledge** by using Foundry IQ, the centralized connection point for data sources.

![Screenshot of elements within Foundry including icons for models, tools, agents, tools, and knowledge.](assets/image_001.png)

#### Models

Foundry supports thousands of models—including rich first-party, third-party, and open-source options—directly from its unified **model catalog**. Developers can access Azure-hosted OpenAI models such as the latest **GPT‑5 family** (GPT‑5, GPT‑5-mini, GPT‑5-nano, GPT‑5-chat/5.2-chat) with extensive multimodal and reasoning capabilities, alongside specialist models from Anthropic (e.g., Claude Opus 4.6/4.5, Sonnet), Mistral, Cohere, Meta LLaMA, DeepSeek, xAI’s Grok, Black Forest Labs, and gated (enterprise-governed) Hugging Face models.

Users can browse thousands of models—ranging from massive foundation models to lightweight, domain-specific variants—evaluate them via built-in leaderboards and playgrounds, and manage deployments directly in Foundry. Full lifecycle support enables deployment per region, customizable deployment types (standard, provisioned, batch), version control, and governance support with Responsible AI and content safety.

#### Agents

At the core of Microsoft Foundry is an agent‑first approach that lets developers build intelligent, task‑oriented agents directly within their Foundry projects. These agents can reason over inputs, call tools, interact with data, and automate workflows using the platform’s built‑in orchestration. Foundry handles the underlying coordination—including message threading, tool execution, safety controls, and observability—so developers can focus on designing the agent’s goals and capabilities. Using either low‑code or code‑first workflows, teams can create multi‑agent systems that work with project resources such as documents, datasets, search indexes, and connections to external systems, including integrations like Azure Functions or Microsoft Fabric.

#### Tools

Foundry offers a comprehensive suite of Azure services—such as speech, vision, language, document intelligence, and more. These Foundry Tools provide AI capabilities that can be built into web or mobile applications in a way that's straightforward to implement. There're over a dozen different services that can be used separately or together to add AI power to applications. For example, you could use Azure Vision to analyze images, Azure Language to summarize text, classify information, or extract key phrases, and Azure Speech to convert speech to text and text to speech.

#### Knowledge

Foundry IQ provides a permission‑aware, multi‑source knowledge layer that gives agents accurate, grounded answers using an organization’s own data. It lets you create a configurable knowledge base made up of internal and external knowledge sources—such as Azure Blob Storage, SharePoint, OneLake, or public web data—and automatically handles indexing, document chunking, vector embeddings, and metadata extraction. When an agent queries the knowledge base, Foundry IQ uses agentic retrieval to break the question into subqueries, search multiple sources in parallel, and return relevant, citation‑backed information while enforcing user permissions and Microsoft Purview sensitivity labels. This ensures that agents can draw from trusted, up‑to‑date content and only return information the user is authorized to see, providing a reliable knowledge foundation for enterprise AI workflows.

The assets for your AI solution are organized within a project. Each project is contained within a Foundry resource, which provides model hosting and the services your apps and agents need in Azure.

## Foundry resources and projects

To get started with Foundry, you need to create a **Foundry resource**, which provides model hosting and the services your apps and agents need. You can create a Foundry resource in the Azure portal, Foundry portal, or programmatically with scripting.

A Foundry resource is the *Azure resource* that provides the platform capabilities. A Foundry resource provides access to:

- Models (Microsoft, partner, and OpenAI‑compatible)
- Foundry’s agent service
- Deployment governance
- Monitoring & observability
- Security boundaries
- Quotas and operational controls

A **Foundry project** is a *workspace* inside that resource where you build AI apps, agents, and evaluations. A Foundry Project lets you build and manage:

- Agents
- Evaluations
- Files and datasets
- Vector indexes
- Flows (AI logic)
- Connections
- Project‑specific settings

You might have one Foundry resource for a team or department, and many Foundry projects inside it, each focused on a separate AI use case.

## Foundry portal

The Foundry portal provides a modern web-based interface for developing, testing, and operating AI solutions. This is where you'll spend a lot of your time when working with models, agents, and other assets.

![Screenshot of Foundry main page.](assets/image_002.png)

Note

Foundry portal has a *classic* user interface (UI) and a *new* user interface. The two provide slightly different experiences for users. Choose the *new* portal for a seamless experience that combines simplicity with powerful and secure tools to build, manage and grow multi-agent applications. Only Foundry projects are visible here - use *classic* for all other resource types. Users can toggle back and forth between the classic and new interfaces as needed.

In the *new* Foundry portal you can discover models and tools, build agents, manage the operation of those agents, and much more. At any time, you can get help with **Ask AI** agent helper. The *Ask AI* experience uses specialized sub‑agents to answer questions and help with tasks across Microsoft Foundry. It can guide you through documentation, explain model catalog capabilities, troubleshoot issues, and manage model deployments, quotas, and operations. It also compares and analyzes models, interprets monitoring dashboards, and supports end‑to‑end evaluation workflows for language models and agents.

![Screenshot of Foundry Docs page with the agent helper open.](assets/image_003.png)

#### Using Foundry portal for application development

When you're building applications on Azure, Foundry provides a powerful and versatile platform for development. A general name for applications (that may or may not have AI capabilities) is **client applications**. A client application is a program that a user interacts with on their device (like a phone, laptop, or browser) that sends requests to a server and displays the results.

Consider the following workflow for using Foundry portal to develop an AI application:

1. Sign into Foundry portal using your Azure subscription and create a Foundry project.
2. In Foundry, pick a model from the Model Catalog and deploy it.
   ![Screenshot of a selected model.](assets/image_004.png)
3. In Foundry, experiment with the model in the Playground. You can use the Playground to write prompts, test model responses, configure parameters.
   ![Screenshot of the model in the Foundry playground.](assets/image_005.png)
4. Use the configured model in your own client application.

An AI client application utilizes a model, data, and application logic to process and return results. The app logic is the code or workflow that sends requests to the model, receives the response, and processes and transforms results. The entire process is known as a **client–server** interaction. A client-server system provides the foundation for how users interact with AI systems, how requests are processed, and how results are delivered.

Responsibilities of the **client**:

1. Present a UI or CLI
2. Collect user input (text, voice, images)
3. Format the input into a prompt or API request
4. Send a request to the server (model endpoint)
5. Display the returned output

The client requests the model for results, which is hosted by the **server**, or the *back end*. In Foundry, the server is your **model deployment**.

Responsibilities of the **server**:

1. Receive the prompt
2. Run inference on the model
3. Apply system instructions, safety, context, and more
4. Return the generated output (for example: text, image, audio, or structured JSON)

Next, let's take a look at how clients connect to to Foundry models and how to use Foundry endpoints.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI in Azure

#### Unit: Using Microsoft Foundry endpoints

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/5-endpoints/

In Foundry, you can define the models and agents that you want to use in custom AI applications. Since Foundry resources are cloud-based, you can consume them as *Application Programming Interfaces* (APIs) across internet connections through programmatic interfaces.

Note

An API is a set of rules that allows one application to talk to another application or service. An API defines what requests you can make, what data you get back, and how to format your request.

## Understand endpoints

Like most cloud services, Microsoft Foundry resources are accessed through an **API endpoint**, representing a service entry point. The endpoint has a unique HTTP address, like a website, but it's for client application code rather than human users with a web browser. When you view the endpoint for your model, it looks something like:

`https://<foundry-project>-resource.cognitiveservices.azure.com/openai/deployments/gpt-4o/chat/completions?api-version=2024-05-01-preview`

The interfaces provided at the endpoint are known as *Representational State Transfer Interfaces*, or *REST interfaces* for short.

To keep your Foundry resources secure, the endpoint is protected. Applications can only access it if they present the correct API key or a token confirming that your Microsoft Entra ID credentials are valid. The model endpoint and key can be found in the Foundry Playground's details page.

![Screenshot of the model endpoint and key in the Foundry Playground's details page.](assets/image_001.png)

Two common types of endpoints in Foundry include:

- *Project-level endpoints*: for working with your Foundry project and its resources
- *Model endpoints*: for sending prompts to deployed models

## Using endpoints

Applications communicate with the endpoint by sending REST requests. REST requests consist of headers containing metadata, such as authentication and data format information, and a body consisting of data in JSON format. For example, a request might include a prompt entered by a user in a chat application such as "What is an AI application?".

```
curl -X POST https://YOUR-FOUNDRY-RESOURCE-NAME.services.ai.azure.com/api/projects/YOUR-PROJECT-NAME/openai/responses?api-version=2025-11-15-preview \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $AUTH_TOKEN" \
-d '{
        "model": "gpt-4.1-mini",
        "input": "What is an AI application?"
}'
```

The results of the request are returned as a response, also with headers and a body. For example, the response might include the reply generated by a model from the prompt. The response comes back in a JSON format. A section of that JSON may look like the following:

```
{
    "metadata": {},
    "temperature": 1,
    "model": "gpt-4.1-mini",
    "object": "response",
    "status": "completed",
    "output": [
        {
            "type": "message",
            "status": "completed",
            "role": "assistant",
            "content": [
                {
                    "type": "output_text",
                    "text": "An AI application is a software program or system that utilizes artificial intelligence technologies to perform tasks that typically require human intelligence. These tasks can include recognizing speech, understanding natural language, making decisions, learning from data, recognizing images, and solving complex problems. AI applications are used in various fields such as healthcare, finance, customer service, autonomous vehicles, and more to enhance efficiency, accuracy, and user experience."
                }
            ]
        }
    ]
}
```

While developers can write code that works directly with the REST interfaces, most developers prefer to work with **software development kits (SDKs)** that abstract the REST interfaces with code libraries for their preferred programming language, such as Python, JavaScript, or C#. These language-specific helpers build REST calls for you.

The endpoint for your Foundry resources is the central point of service for client applications, enabling you to build custom solutions that are backed by the security, scalability, and reliability of the Azure Cloud Platform.

Next, let's try creating a Foundry resource and using its endpoint.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI in Azure

#### Unit: Exercise - Get started with Microsoft Foundry

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/6-exercise/

In this exercise, you'll explore a Foundry project and use a Foundry endpoint.

If you have an Azure subscription, you can use [Microsoft Foundry](https://ai.azure.com/).

Note

If you don't already have one, you can [sign up for an Azure subscription](https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/6-exercise/), which includes free credits for the first 30 days.

Launch the exercise and follow the instructions.

[![Button to launch exercise.](assets/image_001.png)](https://go.microsoft.com/fwlink/?linkid=2345150)

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI in Azure

#### Unit: Knowledge check

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/7-knowledge-check/

1.

Which statement best explains the relationship between AI and ML?

AI and ML are interchangeable terms; both refer to systems that mimic human intelligence without distinction.

ML focuses exclusively on generative tasks like creating text and images, whereas AI is limited to decision-making and planning.

AI is the overarching goal of creating systems that exhibit human-like intelligence, while ML is a data-driven method used to achieve AI by learning patterns from data.

2.

How does Microsoft Foundry relate to Azure?

Foundry is built on top of Azure and uses Azure resources such as compute, networking, identity, and security to host and operate AI applications.

Foundry runs independently from Azure and doesn't require Azure resources to deploy models or agents.

Foundry replaces Azure services entirely, serving as a standalone cloud platform for running AI workloads.

3.

Which statement best describes how keys, secrets, and endpoints work together in an Azure‑based AI application?

The key is the location where model responses are stored, and the endpoint retrieves those responses from Azure Key Vault.

The endpoint stores sensitive values for an AI application, and the key determines how much data the endpoint can return.

The endpoint is a URL for calling a deployed model, and the key (stored as a secret in Azure Key Vault) authenticates the request made to that endpoint.

4.

Which statement best describes a client application in the context of an AI solution built with Foundry?

A client application is the environment that hosts the model, runs inference, and returns results.

A client application is a program the user interacts with—such as a web app or mobile app—that sends requests to a model endpoint and displays the response.

A client application is a standalone Azure service that automatically generates API keys for model deployments.

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI in Azure

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/8-summary/

In this module, you learned about the main parts and best practices for getting started with AI in Microsoft Foundry. By using Azure’s scalable infrastructure and Foundry’s unified platform, organizations can speed up the development and launch of generative AI applications and intelligent agents. Foundry’s collection of ready-to-use models, built-in tools, and governance features helps developers create secure, responsible, and high-performing AI solutions.

In this module, we've introduced Azure, Microsoft's cloud service for global scale software applications, and learned about Microsoft Foundry, a platform for building AI apps and agents on Azure. With this foundational knowledge, you can start to explore how to use Foundry to deploy and work with generative AI models, develop agents, and integrate AI capabilities like speech and computer vision.

Use the links below to learn more.

- [Explore the latest Foundry portal has to offer](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry?tabs=python#whats-new&preserve-view=true)
- [Use a QuickStart to create a Foundry project and deploy a model](https://learn.microsoft.com/en-us/azure/ai-foundry/tutorials/quickstart-create-foundry-resources?tabs=portal&preserve-view=true)
- [Learn more about Foundry's Agent Service](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview)
- [Learn more about Foundry Models' REST API](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/reference)

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with generative AI and agents in Azure

#### Unit: Introduction

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/1-introduction/

In a short few years, generative AI, a subset of artificial intelligence that focuses on creating new content, has changed the way we work and revolutionized what is possible with technology. At times, the fast-moving developments in generative AI can feel challenging to keep track of even for seasoned developers.

In this module, gain a framework for understanding generative AI applications and how Microsoft Foundry supports innovation. What does today's innovation look like? Consider these use cases:

- **Marketing Content Creation**: Companies use Microsoft Copilot's generative AI to automatically write product descriptions, blog posts, and social media content—saving time and ensuring brand consistency across platforms.
- **Customer Support**: Businesses deploy AI-powered virtual agents that can understand and respond to customer inquiries in natural language, offering 24/7 support and reducing the load on human agents.
- **Code Generation**: Developers use tools like GitHub Copilot to generate code snippets, suggest functions, and even write entire modules based on natural language prompts, speeding up software development.
- **Image and Video Generation**: Designers and content creators use the latest models in Microsoft Foundry's model catalog to generate visuals for campaigns, storyboards, or concept art—often from just a text description.
- **Personalized Learning and Tutoring**: Educational platforms use generative AI to create custom quizzes, explanations, and study guides tailored to a student’s learning style and progress.

Microsoft offers an ecosystem of tools for AI use and development. This module explores the Foundry model catalog and how to discover, evaluate, and deploy an appropriate model. Learn how to test and configure the deployed model the Foundry playground, and call it from code using the OpenAI‑compatible Responses API. Finally, you’ll see how agents encapsulate a model, its instructions, and optional tools so your solution is reusable and consistent across Playground and code via the Project API.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with generative AI and agents in Azure

#### Unit: Generative AI models

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models/

Generative AI and agentic solutions are based on language models. Large language models (LLMs) form the foundation of generative AI solutions that can provide a wide variety of responses. Today, a broad range of models exist that serve different needs. For example, the AI capabilities in a lightweight phone application may run best on a small language model, while a government application may require a domain-specialized model.

**Microsoft Foundry** provides an integrated environment for discovering, evaluating, deploying, and operating generative AI models. It brings together a rich model catalog, flexible deployment options, and built‑in governance capabilities so teams can build copilots, agents, and AI-powered applications with enterprise confidence.

Note

In order to use Microsoft Foundry, you need an Azure subscription. To utilize Foundry's capabilities, start by creating a project in Foundry. For more information, review [Get started in Microsoft Foundry](https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/).

## Discover models in Foundry's model catalog

**Foundry's model catalog** is a central hub for discovering and using a wide selection of generative AI models from an extensive range of providers. In Foundry, you can filter models by source, capabilities, inference tasks, and more. Foundry enables you to understand and compare model capabilities, as well as test and build scalable, secure, responsible AI solutions.

Note

The Foundry portal has a *classic* user interface (UI) and a *new* UI. Images of the Foundry portal reflect the *new* UI where it's relevant.

![Screenshot of Foundry's model catalog with the new UI.](assets/image_001.png)

The model catalog offers a broad selection of models including models sold directly by Azure alongside models from partners and open-source communities.

- **Models Sold Directly by Azure**: These models are hosted by Microsoft under Microsoft Product Terms. They offer high levels of integration with Azure, enterprise-grade service level agreements (SLAs), preconfigured security, and compliance alignment.
- **Models from Partners and the Community**: Includes open-source or vendor-hosted models integrated through the catalog. These models support broader experimentation and rapid innovation and are often suitable for specialized or domain‑specific tasks.

Each model entry typically includes:

- Model descriptions and capabilities (text generation, reasoning, coding, multimodal, embeddings, etc.)
- Benchmark results and performance comparisons
- Supported inference tasks and fine‑tuning options
- Responsible AI documentation (model cards, constraints, caveats)

![Screenshot of Foundry's model entries with gpt-4.1 as an example.](assets/image_002.png)

#### Commonly used model families

Among the thousand-plus models available in Foundry, there are many grouped by **model family**. A model family refers to a group of related models that share the same underlying architecture or lineage, but differ in size, capability, specialization, or version.

Commonly used model families include:

- **GPT‑5.x**: Optimized for multi‑step reasoning, structured logic, planning, and agentic workflows. It does well in scenarios needing high‑accuracy reasoning and long‑context understanding—such as generating technical reports, code analysis, or orchestrating multi‑tool agents. It supports adjustable "thinking levels", letting developers trade speed for accuracy when needed.
- **Claude Opus 4.5** (Anthropic): When you need a frontier‑level model for sophisticated agents, complex code reasoning, or multi‑step computer‑use tasks. Opus 4.5 is described as Anthropic’s most intelligent model with strong performance across coding, agents, and computer use, and large context/output windows—useful for long specifications, multi-file diffs, or extended research notes.
- **Mistral Large 3** (Mistral AI): is a state‑of‑the‑art, general‑purpose model ideal for where you want strong quality with efficient throughput. The model does well with multilingual drafting, structured business report generation, or mid‑latency agent tasks that balance cost and performance. Mistral Large 3 is a "state‑of‑the‑art" general model and part of the curated Foundry catalog, making it a practical alternative to flagship models when you want high capability with flexible cost/latency trade‑offs.

Note

Registration is currently required for the GPT-5 model family, restricting its availability. All Foundry users can use **GPT‑4.1**, which is ideal for real‑time chat, customer support, and interactive applications that must respond quickly and at scale. It's optimized for speed, efficiency, and low‑latency inference, making it better than reasoning‑heavy models for high‑volume production workloads.

In Foundry, **foundation models** are large, pretrained models—such as GPT, Claude, Mistral, and others—that provide general language, reasoning, or multimodal capabilities out of the box. These models can be deployed immediately or customized through fine‑tuning, and serve as the base layer for building AI applications.

## Evaluate models in Foundry

Choosing the right model in Foundry starts with understanding **your workload, task type, and constraints**.

#### Select a model by task type

| **Task** | **Recommended model types** | **Model details** |
| --- | --- | --- |
| **Chat** | GPT‑5.x chat, Claude Sonnet/Opus, Mistral‑Large‑3, DeepSeek V3.1, small language models (SLMs) like Phi‑4 or Llama | Strong reasoning, conversation tuning, safety |
| **Coding** | GPT‑5.1‑codex, Claude‑Sonnet | Support for complex agent flows |
| **Summarization** | GPT‑5.x reasoning models, Claude Opus/Sonnet | Long-context, high-quality compression |
| **Embeddings** | text‑embedding‑3-small or other embedding models | Built for semantic vector representations |
| **Multimodal** | Phi‑4‑multimodal‑instruct, GPT‑5.x chat multimodal, Mistral‑Large‑3 | Support for images, audio, and video in chat completions |
| **Industry or domain-specific** | Domain-tuned models in the catalog | Applications specific to an industry such as finance, healthcare, legal |

Note

When the use case is well‑defined, instead of choosing a model from the model catalog, you may choose a [**Foundry tool**](https://azure.microsoft.com/products/ai-foundry/tools/?msockid=2bbfe2e7589c63f40fd5f7ea5c9c654c#Tools). Foundry tools are powered by prebuilt models that provide predictable performance, built‑in compliance, and fast time‑to‑value without custom modeling.

#### Score and compare models in Foundry

Foundry's model catalog includes benchmarking results that show how models perform on standard datasets. Benchmark scores simplify model selection by using consistent evaluation criteria.

Through the Foundry portal, you can also view:

- **Model leaderboards**: leaderboards rank models based on attributes like quality, safety, and throughput. This helps identify the best model for a task. Examples of tasks include reasoning, summarization, code generation.
- **Comparisons and filters**: Side‑by‑side model comparison by quality and accuracy, cost, security and compliance, and performance metrics. You can filter by industry, use case, model type, licensing, and more.

![Screenshot of Foundry's model leaderboard and side-by-side comparisons.](assets/image_003.png)

A common way you can evaluate is to start in Foundry's model catalog, choose a model, then select *Benchmarks → Try with your own data*. You can try out prompts and see if the responses are as expected.

There are various ways to score a model in Foundry portal, including *Natural Language Processing (NLP) metrics* and *AI‑assisted quality metrics*. Examples of classic *NLP quality metrics* are: accuracy, precision, recall, and F1. Examples of *AI‑assisted metrics* include groundedness, relevance, coherence and fluency, and GPT similarity. Choose AI-assisted metrics for qualitative scoring beyond traditional metrics.

In Foundry, **evaluators** are components used to measure the quality, safety, and effectiveness of AI model or agent outputs. For example, safety evaluators can be used help ensure responsible AI output. They scan for harmful or unsafe content, bias and unfairness, violence, self‑harm, or protected‑class harms. Foundry's Evaluator Library offers reusable evaluators for quality scoring, safety scanning, and more.

Note

On their own, Foundry's evaluators detect, scan, and score issues but do not actively resolve them.

## Deploy models in Foundry

Once you select a model, Foundry provides flexible deployment mechanisms that let you tailor performance, cost, and governance. **Deploying a model** takes an AI model and makes it available for use in production through a stable, scalable, and secure endpoint. Deployment of a configured model turns the model into a service that applications can call—usually through an API. Deploying a configured model helps ensure consistent performance and reliability. It also allows developers to prevent unauthorized or unsafe use.

Deployment parameters that you can customize in Foundry include:

- **Deployment type**: such as standard, global batch, and regional provisioned throughput, determine where and how inference is processed in Foundry. Deployment types are tied to throughput and data‑processing requirements.
- **Model version**
- **Tokens per minute (TPM)** rate limit

Note

A **token** is the smallest unit of text or data that a generative AI model can process. Models break input into tokens—such as words, subwords, characters, or punctuation—so they can understand and generate language efficiently.

When you deploy a model, you can assign it a *Tokens Per Minute* (TPM) allocation. TPM determines the speed and scale the model can process inputs and the rate‑limit boundaries such as requests per minute (RPM). When you assign a higher TPM allocation to a model deployment, you're increasing its capacity to handle token traffic per minute. Lower TPM reduces how fast your deployment is allowed to consume tokens across requests.

Limits differ by model family, for example:

- High‑end reasoning models (for example: DeepSeek R1, Grok, large Llama versions) may have high TPM ceilings.
- Specialized or image models often operate under capacity units instead of TPM.

*Throttling*, in a compute context, means intentionally slowing down or limiting how much compute work can happen at one time. It's a protective mechanism used when a system is close to hitting its processing limits. Throttling temporarily restricts resource usage so the system can remain stable and responsive.

Deployment‑level quotas define how many tokens or requests can be processed before throttling occurs. Larger prompts and higher max output token settings consume more TPM, leading to rate-limit errors if exceeded (covered in throttling description search results). If you see throttling, lower **max tokens** or reduce concurrent requests in code.

When you deploy a model in Foundry, several things occur:

- Compute resources are allocated: Foundry assigns the hardware needed to run the model—CPUs, GPUs, memory, networking, and scaling rules.
- An API endpoint is created: You're able to securely invoke the model through the OpenAI Responses API, validated through management API checks.
- Configuration (such as model version, response style, safety settings) is locked in
- Monitoring and logging become active: usage metrics, performance, latency, errors, and costs are tracked

Next, learn how to configure these models in the Foundry portal playground and use them in a client application.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with generative AI and agents in Azure

#### Unit: Using a generative AI model

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models/

The easiest way to interact with a deployed model is to use the model playground in the Foundry portal. You can use the **Foundry Playgrounds** to try prompts, compare models, and capture working settings before you write any code.

![Screenshot of the Foundry playgrounds.](assets/image_001.png)

## Key configuration parameters

Several *model arguments* or *parameters* influence runtime behavior, performance, and cost. In the playground settings, you can configure parameters such as **temperature**, **max output tokens**, and **system instructions**. In the playground chat interface you can submit prompts and see the responses generated by the model.

- **Temperature**: controls creativity vs. determinism.
- **Max output tokens** – caps response length; affects token consumption and throttling behavior.
- **System instructions** – sets behavior and role of the model.

Unlike the user prompt, which is the end-user request or question (example: Where should I travel?), a **System prompt** sets behavior, tone, tools, and guardrails for the assistant. An example of a system prompt is: "You are a helpful, step‑by‑step tutor. Cite sources. Decline medical advice."

The playground is a useful bridge between Foundry and code. After you test representative prompts, you can use the same system and user prompts and parameter values in your code. The playground provides code that can call your Foundry deployment via the OpenAI‑compatible *Responses* API. The code is essentially what is running when you use the chat interface to configure settings and send user prompts.

![Screenshot of code example in Foundry portal that is based in the playground.](assets/image_002.png)

You can take the code as a starting point for creating your own chat client.

## Create a lightweight chat client by using the Foundry SDK

A **lightweight client application** is a small, minimal app whose primary job is to **collect user input**, **call a remote service/API**, and **display results**, without heavy UI frameworks, complex backend logic, or large local dependencies. In practice, it typically:

- Runs as a **CLI (command-line interface)**, small desktop utility, or simple web page.
- Keeps **state and compute mostly on the server** (the model runs remotely).
- Has a **small code footprint** and minimal configuration (often just environment variables + a short script).
- Is easy to prototype, easy to run locally, and easy to extend later.

For Foundry, a lightweight chat client is often a **single Python file** that connects to a Foundry project endpoint and sends chat messages to a deployed model. The Foundry SDK exposes a **Project client** (Foundry‑native ops) and an **OpenAI‑compatible client** for calling models via the **Responses API**. Most apps use both.

#### Build a Python chat client

After you created a **Foundry project** and **deployed a chat model** (for example, `gpt-4.1`), you can use the Foundry SDK. In the example, the client application uses authentication to connect to the endpoint for the model, submit a prompt, and display the response.

```
# pip install openai>=1.3.0
# pip install azure-ai-projects azure-identity openai

import os
from openai import OpenAI

client = OpenAI(
    base_url=f"{os.environ['AZURE_OPENAI_ENDPOINT']}/openai",
    api_key=os.environ["AZURE_OPENAI_API_KEY"]
)

response = client.responses.create(
    model=os.environ["DEPLOYMENT_NAME"],          # e.g., "gpt-4o-mini"
    input=[{"role": "system", "content": "You're a helpful assistant."},
           {"role": "user", "content": "Summarize the key points from our release notes in 3 bullets."}],
    max_output_tokens=300,
    temperature=0.7
)

print(response.output_text)
```

## Understand the difference between models and agents

In Microsoft Foundry, **generative AI models** and **agents** are related but serve different purposes. You can think of it this way:

- **Models = raw intelligence**
- **Agents = packaged, task‑oriented workers built on top of that intelligence**

When you use a generative AI model on its own:

- You want pure inference: "Take this prompt and generate output."
- You’re experimenting in the Playground
- You call the model via the **OpenAI Responses API**

Next, learn how to create an agent in Foundry.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with generative AI and agents in Azure

#### Unit: Creating an agent

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/4-creating-an-agent/

**Agents** are *applications* built with generative AI models. Agentic AI moves beyond one‑off prompts and instead defines a consistent, workflow-like behavior that can be reused across apps, experiences, and services.

An agent in Microsoft Foundry is a packaged, reusable AI component that brings together three things:

- **A model**: the generative AI model the agent uses for reasoning (for example, GPT‑4.1)
- **Instructions**: the system prompt that defines the agent’s role, behavior, style, constraints, and output rules
- **Tools**: the actions the agent can take

Agents can:

- Call external tools (APIs, functions, retrieval) automatically
- Break goals into structured steps
- Maintain working memory during a conversation
- Process user input, decide actions, and generate structured outputs

## Create an agent in Foundry portal

To create an agent in Foundry, you can start by exploring a model or just go straight to agent development. In Foundry portal, creating an agent looks similar at first to testing a model in the playground.

1. Choose the model your agent uses.
2. Write the system instructions, such as "You're a helpful scheduling assistant who returns answers in concise bullet points."

What sets the agent apart from using the model alone is the addition of tools, which allow the model to act on information and knowledge, which grounds the model with information.

Tools = *actions*.
Knowledge = *context*.

#### Add Tools

**Tools** in Foundry allow a model to perform actions by calling external systems. They represent **callable capabilities** such as searching the web, querying a database, or using an MCP server.

When enabled in the model playground, the model can inspect available tools, then call them when relevant to a user request. Examples of tools include:

- Code Interpreter (data analysis, file handling)
- Using knowledge sources
- Custom functions or APIs

Tools allow the model to:

- Take real actions (read/write files, search, update systems)
- Execute workflows
- Integrate into enterprise systems

In Foundry, tools form the basis for action-taking agents. They can be configured centrally using the **Foundry Tool Catalog**, where you can discover and manage tools.

#### Add Knowledge

**Knowledge** allows the model to **access and retrieve external content** (your documents, datasets, internal sites) through retrieval-augmented generation (RAG).

Knowledge in Foundry refers to **documents or datasets** provided to the model so it can retrieve highly relevant context during generation. Data can include internal PDFs, SharePoint content, Azure Storage files, and multi‑source knowledge bases.

In the playground, Foundry uses retrieval pipelines to:

1. **Ingest + index** your content
2. **Search + ground** responses
3. Make answers more accurate, traceable, and domain‑specific

Agents rely heavily on knowledge when answering domain-specific questions. When knowledge is used, the response includes a citation for the knowledge store the agent used.

Knowledge enables:

- Document-grounded Q&A
- Context-rich assistance
- Enterprise-safe retrieval

In the Foundry portal, you can save your model, instructions, and tools as an agent. You can continue to test and refine your agent in the Playground.

![Screenshot of the Foundry portal with the dialog box open to save, name, and create your agent.](assets/image_001.png)

![Screenshot of the Foundry portal with the agent saved and open in the playground.](assets/image_002.png)

## Using an agent

You can use an agent from a client application by using the **Foundry Projects SDK** to connect to the project and call it from a client using the **Project API**.

The Project API enables you to:

- Integrate agents into web apps, bots, or backend workflows
- Orchestrate multi‑step tasks
- Pass structured inputs or tool calls
- Run agents at scale with your Foundry deployments

### Create a client application for an agent

To call the agent programmatically using Foundry’s Project API, you need the `agent-id` of your agent. You can find the `agent-id` in the Playground view of the agent when you select the *code* view and open the *.env variables*.

![Screenshot of the agent id that can be found with the environment variables.](assets/image_003.png)

Let's take a look at a Python code sample to use an agent:

```
# Before running the sample, install the packages:
#    pip install --pre azure-ai-projects>=2.0.0b1
#    pip install azure-identity

from azure.identity import DefaultAzureCredential
from azure.ai.projects import AIProjectClient

myEndpoint = "https://<resource>.services.ai.azure.com/api/projects/<resource-name>"

project_client = AIProjectClient(
    endpoint=myEndpoint,
    credential=DefaultAzureCredential(),
)

myAgent = "learning-agent"
# Get an existing agent
agent = project_client.agents.get(agent_name=myAgent)
print(f"Retrieved agent: {agent.name}")

openai_client = project_client.get_openai_client()

# Reference the agent to get a response
response = openai_client.responses.create(
    input=[{"role": "user", "content": "Tell me what you can help with."}],
    extra_body={"agent": {"name": agent.name, "type": "agent_reference"}},
)

print(f"Response output: {response.output_text}")
```

Next, explore a generative AI model in the new Foundry portal.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with generative AI and agents in Azure

#### Unit: Exercise - Get started with generative AI and agents in Microsoft Foundry

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/6-exercise/

In this exercise, you’ll use Microsoft Foundry to deploy and explore a generative AI model. You’ll then use the model in an agent that includes knowledge tools to answer user questions.

If you have an Azure subscription, you can explore Microsoft Foundry for yourself.

Note

If you don't have an Azure subscription, and you want to explore Microsoft Foundry, you can [sign up for an account](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn_1263cdac-a399-dbe9-c4f4-a9616cd19915), which includes credits for the first 30 days.

Launch the exercise and follow the instructions.

[![Button to launch exercise.](assets/image_001.png)](https://go.microsoft.com/fwlink/?linkid=2347367)

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with generative AI and agents in Azure

#### Unit: Knowledge check

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/7-knowledge-check/

1.

What best describes Foundry's model catalog?

A catalog consisting of only Microsoft-exclusive foundation models

A central hub to discover, filter, compare, and test many generative AI models from multiple providers

A tool that replaces the need for an Azure subscription

2.

Which statement best describes a foundation model in Microsoft Foundry

A small, task‑specific model that must be fine‑tuned before it can perform any useful function

A benchmarking tool used to compare different model families

A large, pretrained model that provides general capabilities and can be used immediately or customized

3.

In the Foundry portal, what is the primary benefit of using the Model Playground before writing code?

It lets you test prompts, compare models, and capture working settings that you can reuse in code.

It deploys the model for you and removes the need to use an API.

It replaces system instructions by automatically generating the best system prompt for every scenario.

4.

What is the primary outcome of publishing an agent in Microsoft Foundry?

It converts the agent into a managed Azure resource with a stable endpoint that you can share and integrate without exposing your Foundry project or source code.

It automatically reduces costs by making the agent free to run, regardless of model tokens, tools, or connected data services.

It replaces the need for the Project API by allowing the agent to be called only through the Foundry portal UI.

5.

In the Python example, which line is responsible for calling the published agent (rather than calling a model deployment directly) when generating a response?

`agent = project_client.agents.get(agent_name=myAgent)`

`openai_client = project_client.get_openai_client()`

`response = openai_client.responses.create(input=[{'role': 'user', 'content': 'Tell me what you can help with.''}], extra_body={'agent': {'name': agent.name, 'type': 'agent_reference'}},)`

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with generative AI and agents in Azure

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/8-summary/

In this module, you explored how Microsoft Foundry supports the full lifecycle of building generative AI and agentic solutions. You learned how language models serve as the foundation for AI applications, and how Foundry provides the tools and governance needed to use these models effectively and responsibly.

You began by examining the Foundry model catalog, a centralized environment for discovering and comparing foundation models from Microsoft, partners, and open-source communities. You then learned how to deploy models to make them available as stable, scalable API endpoints.

The module also introduced lightweight client applications, which offer a simple way to connect to deployed models using the Foundry SDK. You learned how a minimal Python script can authenticate to a Foundry project, send prompts to a model, and retrieve responses.

You then moved beyond raw models and learned how to build agents in Foundry. Agents package a model together with instructions, tools, and optional knowledge sources to produce workflow-oriented, repeatable behavior. The module showed how to configure and test agents in the playground, then publish them as Azure resources with stable endpoints. You now have the foundation needed to begin building scalable, secure AI applications powered by modern generative and agentic technologies.

Tip

For more information about generative AI models in Microsoft Foundry, see <https://azure.microsoft.com/products/ai-foundry/models/>.

For more information about creating agents with Microsoft Foundry, see <https://azure.microsoft.com/products/ai-foundry/agent-service/>

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with text analysis in Azure

#### Unit: Introduction

Source: https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/1-introduction/

In this module, you explore how to use AI to make sense of text in documents and other written assets.

Text processing and analysis are possible through **natural language processing (NLP)**. NLP enables machines to understand, interpret, and respond to human language. The goal of NLP is to analyze and extract meaning or structure from existing text.

**Text analysis** is the process of automatically examining written text to extract useful information—such as sentiment, keywords, entities, or topics. Text analysis relies on NLP to turn unstructured text into meaningful insights.

Consider some of these applications of text analysis:

- **Customer Feedback Analysis**: Businesses need to analyze large volumes of customer reviews, support tickets, and survey responses. With text analysis techniques, they can identify trends, detect dissatisfaction early, and improve customer experiences.
- **Healthcare Text Analysis**: Healthcare systems need to extract clinical information from unstructured medical documents. Text analysis techniques can help identify symptoms, medications, and diagnoses, supporting faster and more accurate decision-making.
- **Financial Document Processing**: Banks and financial institutions handle large volumes of contracts, loan applications, and regulatory documents. Text analysis techniques can help automatically extract key details—such as interest rates, borrower information, and compliance risks—helping reduce manual review time and improve accuracy.
- **Legal Document Summarization**: Law firms manage lengthy case files, court rulings, and agreements. Text analysis techniques can help summarize complex legal texts, highlight important clauses, and classify documents by topic, enabling attorneys to work more efficiently and make informed decisions faster.

Next, let's explore text analysis capabilities in Microsoft Foundry.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with text analysis in Azure

#### Unit: Understand text analysis in Foundry

Source: https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language/

**Microsoft Foundry** is the platform for building AI apps and agents on Azure. Foundry portal offers two approaches to text analysis: general-purpose AI models that handle a broad range of tasks through natural language prompts, and purpose-built language tools that return structured, deterministic results for specific tasks.

Note

Foundry has a web-based portal where you can build, test, and deploy AI applications. The portal has two user interfaces (UIs) — a *classic* UI and a *new* UI — the **new** Foundry portal. This content describes capabilities in the *new* Foundry portal.

To get started with text analysis in the *new* Foundry portal, you need to create a *Foundry resource* and *Foundry project*.

A **Foundry resource** is an Azure resource that provides access to AI services and deployed models. A **Foundry project** is a workspace within that resource where you organize your work, deploy models, and access tools like the chat playground and AI services.

## Using general-purpose AI models for text analysis

From your project in the Foundry portal, you can deploy a general-purpose AI model. A **general-purpose AI model** is a language model trained on vast amounts of text data, giving it a broad understanding of language and the ability to handle many different tasks. A general-purpose model can follow natural language instructions to analyze sentiment, extract entities, summarize text, translate content, answer questions, and much more — all without any configuration or training on your part.

You can use a general-purpose AI model to handle text analysis tasks such as:

- **Key phrase extraction** lists the main concepts from unstructured text.
- **Entity linking** identifies known entities together with a link to Wikipedia.
- **Sentiment analysis and opinion mining** identifies whether text is positive or negative.
- **Summarization** summarizes text by identifying the most important information.

You can explore the text analysis capabilities of AI models in the Foundry portal's chat playground. After deploying a model, the playground gives you a chat interface where you type a prompt and the model responds. Because the model understands context, you can also follow up with additional questions or refine the analysis in the same conversation. This makes the playground a useful way to explore what's possible before building a full application.

![Screenshot of the new Foundry portal playground showing key phrase extraction.](assets/image_001.png)

Let's take a closer look at some of the responses a general-purpose AI model can give when given a text analysis task.

#### Key phrase extraction

You can use a language model to extract the keywords and phrases used in some text, which can be helpful in processes like indexing and searching for relevant documents. **Key phrase extraction** identifies the main points from text.

For example, you might receive a review such as:

> "*I had a fantastic meal at the diner in Seattle on Saturday. The mushroom risotto was perfectly prepared, and really tasty. Our waiter, Pete, was friendly and efficient; and gave us a great recommendation for a dessert (strawberry cheesecake). I'd definitely recommend this place for a casual dinner.*"

Key phrase extraction can provide some context to this review by extracting the following phrases:

- casual dinner
- dessert
- fantastic meal
- diner
- great recommendation
- mushroom risotto
- Pete
- place
- Saturday
- Seattle
- strawberry cheesecake
- waiter

#### Entity recognition

You can also use **named entity recognition** to find people, places, dates, and other specific entities mentioned in the text.

You can provide a language model with unstructured text and retrieve a list of *entities* in the text that it recognizes. An entity is an item of a particular type or a category; and in some cases, subtype.

Consider this short text:

> "*On May 2nd, 2017, John Smith visited New York to attend a conference hosted by Microsoft. The event started at 8:00 AM and lasted 3 hours. Over 25% of the 40 attendees traveled more than 10 miles to participate.*"

Entities detected include:

| **Entity Type** | **Subtype / Category** | **Value** |
| --- | --- | --- |
| Person | — | John Smith |
| Location | — | New York |
| Organization | — | Microsoft |
| DateTime | Date | May 2nd, 2017 |
| DateTime | Time | 8:00 AM |
| DateTime | Duration | 3 hours |
| Quantity | Percentage | 25% |
| Quantity | Number | 40 |
| Quantity | Dimension | 10 miles |

#### Sentiment analysis and opinion mining

You can also use **sentiment analysis** to classify a document as positive, negative, or neutral. This is useful for detecting sentiment in social media, customer reviews, discussion forums, and more.

Consider the following restaurant review:

> "*I had a wonderful dinner at a cozy bistro in Portland on Friday evening. The grilled salmon was cooked perfectly and full of flavor, and the seasonal vegetables were a great complement. Our server, Maria, was attentive and personable, and she suggested the lemon tart for dessert—which was excellent. I’d absolutely recommend this spot for a relaxed and enjoyable night out.*"

Note

Because a general-purpose AI model responds to natural language prompts, the output depends on how you phrase your request. For example, you can ask for an overall sentiment score, or you can ask for a sentence-by-sentence breakdown. The more specific your prompt, the more structured and detailed the response.

Analyzing the restaurant review might return:

- Sentence-by-sentence sentiment analysis:

  "I had a wonderful dinner at a cozy bistro in Portland on Friday evening."
  Sentiment: Positive
  Explanation: The words "wonderful dinner" and "cozy bistro" convey a highly positive experience.

  "The grilled salmon was cooked perfectly and full of flavor, and the seasonal vegetables were a great complement."
  Sentiment: Positive
  Explanation: "Cooked perfectly," "full of flavor," and "great complement" all indicate strong satisfaction with the food.

  "Our server, Maria, was attentive and personable, and she suggested the lemon tart for dessert—which was excellent."
  Sentiment: Positive
  Explanation: Positive descriptions of the server's qualities and the dessert ("attentive," "personable," "excellent") reflect a very happy customer.

  "I’d absolutely recommend this spot for a relaxed and enjoyable night out."
  Sentiment: Positive
  Explanation: A clear recommendation with the words "absolutely," "relaxed," and "enjoyable" show strong positive sentiment.
- Overall Document Sentiment: strongly positive. The review is filled with complimentary language about the food, atmosphere, service, and overall experience. There are no neutral or negative statements.

#### When to use a general-purpose AI model for text analysis

Beyond key phrase extraction, entity recognition, and sentiment analysis, general-purpose AI models can also *summarize* long documents into concise paragraphs, *translate* text between languages, *classify* content into categories you define, *answer questions* about a passage, and more. Because these capabilities are all driven by natural language prompts, you can combine them freely — for example, asking the model to translate a long review, and then summarize it in a single conversation.

## Using Azure Language in Foundry tools

While a large language model trained for general generative AI workloads can often do a great job of text analysis, sometimes a more specialized tool gets more predictable results.

**Azure Language in Foundry tools** is a natural language processing service with purpose-built analyzers for specific text analysis tasks. These analyzers use statistical techniques to return structured, deterministic output — making them well-suited for automated pipelines where consistent results matter.

In the *new* Foundry portal, you can explore some of Azure Language's capabilities in the chat playground. To test out the capabilities of AI services, navigate to the *Build* page, then to *Models*, then to the *AI services* tab. In the tab, you can find a selection of AI services available for testing.

![Screenshot of the Foundry portal AI services tab.](assets/image_002.png)

Consider the following Azure Language capabilities:

- **Language detection** evaluates text and detects the language and dialect.
- **Personal identifying information (PII) detection** identifies personally sensitive information, including personal health information (PHI).

#### Language detection

In a multi-language workflow, the first step is often to identify the language a document is written in, so the text can be routed to the most appropriate model or process. **Language detection** evaluates text and identifies the primary language along with a confidence score. Azure Language supports a wide range of languages and regional dialects.

For example, given the following text:

> "*¡Hola! Me llamo Josefina y vivo en Madrid, España.*"

Language detection returns the following result:

| Language | ISO 6391 code | Confidence score |
| --- | --- | --- |
| Spanish | es | 1.00 |

In the Foundry portal, you can test Azure Language's language detection feature in the chat Playground.

[![Screenshot of the chat playground's language detection capability.](assets/image_003.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-text-analysis-azure/media/language-detection.png#lightbox)

#### Personally identifiable information detection

Organizations often need to identify and redact sensitive personal details from text before it's stored or shared, to comply with privacy regulations. **Personally identifiable information (PII) detection** identifies personal details in text—such as names, phone numbers, email addresses, and street addresses—and can optionally redact them.

For example, given the following text:

> "*Maria Garcia called from 020 7946 0958 and asked to send documents to 42 Market Road, London, UK, SW1A 1AA.*"

PII detection identifies the following entities:

| Text | Category |
| --- | --- |
| Maria Garcia | Person |
| 020 7946 0958 | Phone number |
| 42 Market Road, London, UK, SW1A 1AA | Address |

In the Foundry portal, you can test Azure Language's PII detection feature in the Language Playground.

[![Screenshot of the Language playground's PII detection capability.](assets/image_004.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-text-analysis-azure/media/pii-redaction.png#lightbox)

Next, learn how to create a client application with text analysis capabilities using both the OpenAI responses API and the Azure Language SDK.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with text analysis in Azure

#### Unit: Create a client application that analyzes text

Source: https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk/

A **client application** is a program you write that connects to a service or model and uses its capabilities. Your code sends requests to the service and receives results back automatically — making it possible to process large volumes of text or integrate AI analysis into a workflow.

To connect to an AI service, your application uses an **API** (Application Programming Interface). An API is a set of rules that defines how two pieces of software communicate. A client library is a set of ready made code that developers can use in their application to easily talk to a service or API. You can review foundational material on applications and using endpoints in: [Get started with AI in Azure](https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/5-endpoints?pivots=text?azure-portal=true).

## Using general-purpose AI models for text analysis

Start with a Microsoft Foundry resource and create a Foundry project within your resource. In the *new* Foundry portal, you can browse the model catalog and deploy a general-purpose model.

You can build a client application that interacts with Microsoft Foundry Models using the **Azure OpenAI API**. The OpenAI API lets your code talk to a deployed model by sending requests to an *endpoint*, along with an *API key* to prove you're authorized.

The **Responses API** is the modern, unified API within Azure OpenAI for interacting with language models. It is designed to handle complete AI interactions, not just text generation.

You can use the *responses API* to send natural language prompts to a deployed language model. It's useful when you need flexible, conversational-style analysis that doesn't require a fixed structured output.

#### Using the OpenAI Python library

The *OpenAI Python library* is an official Python software development kit (SDK) that lets developers build Python applications that interact with OpenAI models and services through code instead of raw HTTP requests.

To use the OpenAI Python library, you need to work within a code editor. Application code is written in *code editors*, such as Visual Studio Code. A code editor’s *terminal* is a built‑in command‑line window inside the editor where you can run commands without leaving your development environment.

#### 1. Install the necessary packages

The OpenAI Python library can be installed in the Visual Studio Code *terminal* using:

```
pip install openai
```

#### 2. Create a configuration file

Next, you can create a configuration file (type `.env`) to store your environment variables, such as your endpoint, key, and model deployment name.

Consider the following variables:

```
AZURE_OPENAI_ENDPOINT=https://<your-resource>.openai.azure.com/openai/v1/
MODEL_DEPLOYMENT_NAME=gpt-4.1-mini
API_KEY=<your-foundry-key>
```

Notice how the endpoint variable contains the name of your Foundry resource and `openai.azure.com/openai/v1`. Your API key is your Foundry project key.

The model deployment name is the name *you give* the model when you deploy it. For example, when you deploy the *gpt-4.1* model, you may name it *gpt-demo-model*. The deployment name is *gpt-demo-model*. However, if you do not customize the model name, the deployment name will match the model name, as is the case in the snippet above.

#### 3. Create a file containing your application logic

Take a look at the following application code sample:

```
import os
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables from .env file
load_dotenv()
endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
api_key = os.getenv("API_KEY")
deployment_name = os.getenv("MODEL_DEPLOYMENT_NAME")

# Create the client object
client = OpenAI(
    base_url=endpoint,
    api_key=api_key
)

# Make a request using the client
message = client.responses.create(
    model=deployment_name,
    input="",
)

# Print the results
print(f"Sentiment: {message.output[0]}")
```

Note

**Loading environment variables**: In this sample, `dotenv` (`load_dotenv()`) reads your `.env` file and loads those values into your app's environment. The `os` package then retrieves each value by name with `os.getenv()`, such as `os.getenv("AZURE_OPENAI_ENDPOINT")`.

Each key in `.env` must match the name in your code exactly. For example, if your file uses `API_KEY`, your code must also request `API_KEY`. Keep variable names consistent to avoid missing values at runtime.

We use our Foundry resource endpoint and key to create an authenticated **client object**. The `OpenAI` class is defined by the SDK and acts as a blueprint for connecting to the OpenAI API. An authenticated client object in Python is a service specific object that can securely make authorized API calls without your code manually managing tokens or secrets.

Note

In Python, a **class** is a blueprint that defines a type of thing — what data it holds and what actions it can perform. An **object** is a specific instance created from that blueprint. For example, a `Car` class might define that every car has a color and can `drive()` or `stop()`. When you create a specific car — say, a red one — that's an object.

Once you create a **client object** — configured with your endpoint and key — you can call **methods** on it to interact with the model. For example, you can use the `responses` *method* to send a prompt to a specific model deployment.

We can display the results of the analysis by running the application code in the terminal with the command `python <file_name>.py`.

The OpenAI API is straightforward to use, but results can vary between calls because the model generates text probabilistically. In practice, this means two calls with the same prompt can return slightly different wording or formatting. When your app needs consistent, structured values, such as a language code, confidence score, or redacted text, the Azure Language SDK is a better choice.

## Using the Azure Language SDK

The **Azure Language SDK** is a client library for *Azure Language in Foundry Tools*. The SDK makes it easy for developers to add NLP features, such as language detection and redacting personally identifiable information (PII), to their applications.

Let's see how you can use the Azure Language Python SDK to build an application that analyzes text. To use the Azure Language Python SDK, you need to have a *Foundry resource*. Then you need to install a compatible version of Python and the Azure Language Python SDK.

The Python SDK can be installed in the Visual Studio Code *terminal* using:

```
pip install azure-ai-textanalytics
```

Consider the following configuration file sample:

```
AZURE_LANGUAGE_ENDPOINT=https://<your-resource>.cognitiveservices.azure.com/
API_KEY=<your-foundry-key>
```

Consider the following application code sample:

```
# Import packages
import os
from dotenv import load_dotenv
from azure.core.credentials import AzureKeyCredential
from azure.ai.textanalytics import TextAnalyticsClient

# Load environment variables from .env file
load_dotenv()
endpoint = os.getenv("AZURE_LANGUAGE_ENDPOINT")
key = os.getenv("API_KEY")

# Create the client
client = TextAnalyticsClient(endpoint=endpoint, credential=AzureKeyCredential(key))

# Make a request using the client for language detection
text = "¡Hola! Me llamo Josefina y vivo en Madrid, España."
result = client.detect_language([text])[0]
```

We use the client's *methods* to call **Azure Language functions**, such as `detect_language` and `recognize_pii_entities`.

**Language detection**: The `detect_language()` method takes a list of text strings and returns the detected language, its ISO 639-1 code, and a confidence score between 0 and 1.

```
text = "¡Hola! Me llamo Josefina y vivo en Madrid, España."
result = client.detect_language([text])[0]

# Print the results
print(f"Language      : {result.primary_language.name}")
print(f"ISO code      : {result.primary_language.iso6391_name}")
print(f"Confidence    : {result.primary_language.confidence_score:.2f}")
```

**PII detection**: The `recognize_pii_entities()` method identifies personal details in text and returns both the redacted version of the text and a list of the entities it found, including each entity's category and confidence score.

```
text = "Maria Garcia called from 020 7946 0958 and asked to send documents to 42 Market Road, London, UK, SW1A 1AA."

result = client.recognize_pii_entities([text])[0]

# Print the results
print("Redacted text:", result.redacted_text)
print("\nEntities found:")
for entity in result.entities:
    print(f"  {entity.text} | category={entity.category} | confidence={entity.confidence_score}")
```

With the OpenAI API and the Azure Language SDK, you can write code for AI applications that process natural language and generate insight from your text.

Next, let's take a look at how to include Azure Language capabilities in AI agents.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with text analysis in Azure

#### Unit: Use Azure Language with an agent

Source: https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/4-language-mcp/

AI agents use tools and models to perform tasks such as reasoning, planning, retrieval, and calling external services. While an agent can use a generative AI model to understand and generate language, that model alone can't perform text analysis tasks that require deterministic, structured analysis. Adding **Azure Language in Foundry Tools** to an agent gives it consistent and predictable text analysis functionality.

## Understand MCP

The **Model Context Protocol (MCP)** is an open standard that defines how AI agents connect to external tools and data sources. Think of MCP like a universal adapter: instead of writing custom integration code for every service an agent needs, you connect the agent to an MCP server that already exposes those capabilities in a standard way.

MCP uses a client-server architecture:

- The *MCP client* is the AI agent (or the host application running the agent). It sends requests and receives responses.
- The *MCP server* is the service that exposes tools, data, or actions. It listens for requests, executes the appropriate capability, and returns a structured result.

When an agent connects to an MCP server, it can discover what tools the server offers and invoke them as needed—without any custom integration work. The server might respond to a request by:

- Providing *data* (for example: sentiment scores, key phrases, or entity records)
- Taking *action* (for example: processing a batch of documents)

This separation of concerns keeps agent logic clean and makes it easy to swap or extend capabilities by connecting to different MCP servers.

## Azure Language MCP server

The **Azure Language MCP server** is a managed service that exposes *Azure Language in Foundry Tools* capabilities through MCP. It acts as the bridge between your agent and the full suite of Azure Language features—named entity recognition, sentiment analysis, language detection, and more.

Because the server follows the MCP standard, your agent can call these language analysis tools using the same protocol it uses for any other MCP server. You don't need to call the Azure Language REST API directly or manage authentication tokens in your agent code.

## Use the Azure Language MCP server in Foundry portal

To build an agent that uses Azure Language, you can start in the Foundry portal by deploying a model and saving it as an agent.

![Screenshot of the Foundry playground with a deployed model and a dialog box to save as an agent.](assets/image_001.png)

You can add the Azure Language MCP server as a tool in the Foundry playground by searching tools for *Azure Language in Foundry Tools*. To connect to the Azure Language MCP server, configure your connection with your *Foundry resource name*. Once you've connected the MCP server to your agent, use prompts to instruct the agent to analyze text using the tool.

![Screenshot of the dialog box used to configure the connection between the agent and Azure Language in Foundry Tools.](assets/image_002.png)

With the MCP server connected, your agent can combine the reasoning capability of the language model with the precision of Azure Language's text analysis features—making it well suited for tasks like routing support tickets by detected language or identifying and redacting personally identifiable information (PII).

![Screenshot of the Azure Language in Foundry Tools connected to an agent in the Foundry portal.](assets/image_003.png)

Note

A Foundry resource provides a unified environment that already includes access to Language tools. You don't need to create a separate Azure Language resource to access the Azure Language MCP server.

Next, try out text analysis in Foundry yourself.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with text analysis in Azure

#### Unit: Exercise - Get started with text analysis in Microsoft Foundry

Source: https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/5-exercise/

If you have an Azure subscription, you can use the [Microsoft Foundry portal](https://ai.azure.com/) to explore Foundry's text analysis capabilities.

Note

If you don't already have one, you can [sign up for an Azure subscription](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn_e8cf80d4-31a7-5606-295e-ea03d810c10d), which includes free credits for the first 30 days.

Launch the exercise and follow the instructions.

[![Button to launch exercise.](assets/image_001.png)](https://go.microsoft.com/fwlink/?linkid=2359156)

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with text analysis in Azure

#### Unit: Module assessment

Source: https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/6-knowledge-check/

1.

You need to analyze text where the same input must return structured results based on statistical techniques. Which approach is most appropriate?

The OpenAI responses API, because it can follow natural language instructions.

The Azure Language SDK, because it returns deterministic, structured output.

The chat playground in Foundry, because it supports follow-up questions.

2.

What is the purpose of the client object in the Azure Language SDK?

It stores the application's user interface settings.

It helps application code communicate with the Azure Language service.

The client object stores the text that needs to be analyzed.

3.

What is the main purpose of the Azure Language MCP server?

To automatically generate website layouts for an agent.

To replace all generative AI models inside an agent.

To expose Azure Language capabilities to agents through the Model Context Protocol.

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with text analysis in Azure

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/7-summary/

In this module, you learned how AI applications and agents can make sense of written text using natural language processing (NLP). You also learned how to implement text analysis capabilities in client applications.

You explored two methods to implement text analysis in Microsoft Foundry. One was with general-purpose AI models and another was with Azure Language in Foundry Tools. You also learned how to build a client application using either the OpenAI API or the Azure Language SDK. Finally, you learned how to connect an AI agent to the Azure Language MCP server so the agent could perform structured language tasks as part of an automated workflow. You can check out the links below to learn more.

Use the links below to learn more:

- [Read more about the Azure OpenAI Responses API](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/responses?tabs=python-key)
- [Read about about Azure Language in Foundry Tools](https://learn.microsoft.com/en-us/azure/ai-services/language-service/overview)
- [View the Azure Text Analytics client library](https://learn.microsoft.com/en-us/python/api/overview/azure/ai-textanalytics-readme)

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with speech in Azure

#### Unit: Introduction

Source: https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/1-introduction/

**AI speech** capabilities enable us to manage systems with voice instructions, get answers from computers for spoken questions, generate captions from audio, and much more. Voice-based interfaces provide a more natural way to engage with AI software. The ability to interact through spoken language can increase the accessibility and inclusiveness of applications and agents.

To enable this kind of interaction, the AI system must support at least two capabilities:

- **Speech recognition**: the ability to detect and interpret spoken input
- **Speech synthesis**: the ability to generate spoken output

Examples of these capabilities include:

- **Clinical dictation and note-taking in healthcare**: Doctors can say patient notes aloud during or after appointments. An AI speech app converts the audio into accurate medical text, reducing manual typing and saving time.
- **Call transcription in customer support**: Contact centers transcribe customer calls in real time, making it easier to review conversations, detect issues, and analyze sentiment.
- **Automated captioning in media and entertainment**: Video platforms generate live or recorded captions for shows and streams, improving accessibility and supporting multilingual audiences.
- **Language learning and pronunciation feedback in education**: Learning apps use AI speech capabilities to listen to students speak and provide pronunciation feedback, helping learners practice and improve spoken language skills.
- **Voice‑enabled assistants in retail and e‑commerce**: Virtual shopping assistants use speech recognition to understand spoken customer requests and text‑to‑speech to respond with product information or order status.

**Azure Speech in Microsoft Foundry Tools** provides speech-to-text, text-to-speech, and speech translation capabilities through speech recognition and synthesis. You can use prebuilt and custom Speech service models for a variety of tasks, from transcribing audio to text with high accuracy, to identifying speakers in conversations, creating custom voices, and more. Next learn how to incorporate speech recognition into an application with Azure Speech.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with speech in Azure

#### Unit: Speech recognition

Source: https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition/

**Speech recognition**, often called **speech-to-text (STT)**, is an AI capability that enables apps and agents to respond to spoken input. Speech recognition takes the spoken word and converts it into data, usually text. Speech-to-text software typically uses multiple models, including:

- An *acoustic* model that converts the audio into phonemes (representations of specific sounds).
- A *language* model that maps phonemes to words.

The words AI speech recognizes are converted to text. You can use the text for various purposes, such as providing closed captions, creating call transcripts, automating note dictation, and much more.

## Azure Speech - Speech to Text

**Azure Speech** includes a **speech-to-text API** that you can use to process voice input from a microphone or audio file.

Note

An *API* (Application Programming Interface) is a set of rules and endpoints that allows one software application to communicate with and use the functionality or data of another application.

**Microsoft Foundry** is a Microsoft platform that helps developers build, test, and deploy AI applications and agents by bringing together models, tools, data, and services in one place.

In the *new Microsoft Foundry portal*, we can explore Azure Speech's speech-to-text capabilities in the *Foundry playground*. To get to the playground, navigate to the *Build* page, then to *Models*, then to the *AI services* tab. In the tab, you can find a selection of AI services available for testing, including *Azure Speech - Speech to Text*.

In the playground, you can either upload an audio file or record yourself speaking. Azure Speech transcribes what is said, giving you a feel for how your own application would respond to audio input.

[![Screenshot of speech-to-text in the Foundry playground.](assets/image_001.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-speech-azure/media/speech-to-text-playground.png#lightbox)

The playground in the Foundry portal is a great place to experiment with Azure Speech, but to use speech-to-text in an application, we need to write some code.

## Using the Azure speech-to-text SDK

The **Azure Speech – Speech-to-Text SDK** is a client library that lets applications convert spoken audio into written text. The speech-to-text SDK is designed to make speech recognition easy to add to applications.

Note

A client library is a set of ready‑made code that developers can use in their application to easily talk to a service or API.

The SDK enables your application to:

- Capture or send audio from a microphone, audio file, or audio stream
- Send that audio to Azure Speech securely
- Receive transcribed text in near real time or after processing completes

The SDK handles networking, authentication, audio streaming, and response parsing so developers can focus on application logic.

## Developing an application

The Speech-to-Text SDK is typically used in the client or service layer of an application. The SDK acts as the bridge between your application code and the Azure Speech service.

To use the Azure Speech Python SDK, you need to have compatible version of Python and the Azure Speech Python SDK installed.

The Python SDK can be installed in the Visual Studio Code *terminal* using:

```
pip install azure-cognitiveservices-speech
```

Note

Application code is written in *code editors*, such as Visual Studio Code. A code editor’s *terminal* is a built‑in command‑line window inside the editor where you can run commands without leaving your development environment.

To use Azure Speech, you also need to create a Foundry resource. The Foundry resource endpoint and key is used in your code to authenticate your connection.

After you install the Python SDK and create a Foundry resource, you can create and run your program. Consider the following Python code. When you run it:

1. **Your app initializes the Speech SDK**: Provides an endpoint and authentication (key or Microsoft Entra ID)
2. **Audio is captured or loaded**: Microphone input or an audio file/stream
3. **Audio is sent to Azure Speech**: The SDK streams or uploads audio securely
4. **Speech recognition runs in the cloud**: Azure’s speech models analyze the audio
5. **Text results are returned**: Your app receives recognized text and optional metadata

```
import azure.cognitiveservices.speech as speechsdk

# Set up the speech config using resource endpoint
endpoint_url = "ENDPOINT"
speech_key = "FOUNDRY_KEY"

speech_config = speechsdk.SpeechConfig(
    subscription=speech_key,
    endpoint=endpoint_url
)

# Create a recognizer with microphone input
audio_config = speechsdk.audio.AudioConfig(use_default_microphone=True)
speech_recognizer = speechsdk.SpeechRecognizer(
    speech_config=speech_config,
    audio_config=audio_config
)

# Event handlers
def recognized_handler(evt):
    print(f"Recognized: {evt.result.text}")

def recognizing_handler(evt):
    print(f"Recognizing: {evt.result.text}")

# Connect event handlers
speech_recognizer.recognized.connect(recognized_handler)
speech_recognizer.recognizing.connect(recognizing_handler)

# Start continuous recognition
speech_recognizer.start_continuous_recognition()
print("Say something...")

# Keep the program running
input("Press Enter to stop...")
speech_recognizer.stop_continuous_recognition()
```

#### Client app example

For example, let's say you want to develop a lightweight app that automatically transcribes voicemail messages. In the code editor, we have one audio file, and one Python file, which contains application code.

![Screenshot of Visual Studio Code with an audio file open.](assets/image_002.png)

Say you have an audio file containing a voicemail recording. To transcribe the message, start by specifying the endpoint and key and the audio source you want to transcribe. Then use a `SpeechRecognizer` object to perform the transcription, before displaying the results.

[![Screenshot of speech-to-text python code in Visual Studio Code.](assets/image_003.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-speech-azure/media/speech-to-text-python.png#lightbox)

Once you run the code, you can see the transcription text.

![Screenshot of Visual Studio Code with the terminal open and the results of speech-to-text.](assets/image_004.png)

#### Audio processing options

You can use Azure Speech's speech-to-text API to perform real-time or batch transcription of audio into a text format. The audio source for transcription can be a real-time audio stream from a microphone or an audio file.

**Real-time transcription**: Real-time speech to text allows you to transcribe audio streams to text. You can use real-time transcription for presentations, demos, or any other scenario where a person is speaking.

In order for real-time transcription to work, your application needs to be listening for incoming audio from a microphone, or other audio input source such as an audio file. Your application code streams the audio to the service, which returns the transcribed text.

**Batch transcription**: Not all speech to text scenarios are real time. You might have audio recordings stored on a file share, a remote server, or even on Azure storage. You can point to audio files with a shared access signature (SAS) URI and asynchronously receive transcription results.

Batch transcription should be run in an asynchronous manner because the batch jobs are scheduled on a *best-effort basis*. Normally a job starts executing within minutes of the request but there's no estimate for when a job changes into the running state.

Speech Recognition in Azure Speech is a great way to build solutions that transcribe recorded audio or automate speech captioning. Next, learn how to incorporate speech synthesis into an application.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with speech in Azure

#### Unit: Speech synthesis

Source: https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis/

**Speech synthesis**, often called **text-to-speech (TTS)**, is concerned with vocalizing data, usually by converting text to speech. Speech synthesis usually generates audible speech from a text-based source.

A text-to-speech solution typically requires the following information:

- The text to be spoken
- The voice to be used to vocalize the speech

To synthesize speech, the system typically *tokenizes* the text to break it down into individual words, and assigns phonetic sounds to each word. It then breaks the phonetic transcription into *prosodic* units (such as phrases, clauses, or sentences). The system creates phonemes from the prosodic units. These phonemes are then synthesized as audio and can be assigned a particular voice, speaking rate, pitch, and volume.

You can use the output of speech synthesis for many purposes, such as:

- Generating spoken responses to user input.
- Reading messages aloud.
- Broadcasting announcements.

## Azure Speech - Text to Speech

Azure Speech includes a **text-to-speech API** that we can explore in the Microsoft Foundry portal.

The text-to-speech API enables you to convert text input to audible speech, which can either be played directly through a computer speaker or written to an audio file. The service includes multiple predefined voices with support for multiple languages and regional pronunciation, including *neural* voices that use *neural networks*. Neural voices can overcome common limitations in speech synthesis such as issues with intonation, resulting in a more natural sounding voice. You can also develop custom voices and use them with the text to speech API.

In the *new Microsoft Foundry portal*, we can explore Azure Speech's text-to-speech capabilities in the *Foundry playground*. In the *Azure Speech - Text to Speech* Foundry playground, you can choose a synthetic voice from the available selection. You can also adjust some parameters to control the delivery of the audio, such as speed and pitch. The audio output is generated from the synthesized text.

[![Screenshot of text-to-speech in the Foundry playground.](assets/image_001.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-speech-azure/media/text-to-speech-playground.png#lightbox)

## Using the Azure text-to-speech SDK

You can use Azure Speech to develop an application that uses voice synthesis. The **Azure Text-to-Speech SDK** enables applications to convert written text into natural‑sounding spoken audio.

The SDK lets your application:

- Send text to Azure Speech
- Generate spoken audio using neural voices
- Play or save the audio to speakers or an audio file

The SDK handles authentication, network communication, audio formatting, and play back so you can focus on your app’s experience.

## Developing an application

The text-to-speech SDK is typically used in:

- **Client applications** to convert text to speech and play it immediately (for example, a desktop or mobile app)
- **Backend services**: to generate audio files for later play back

After you install the Python SDK, you can create and run your program. Consider the following Python code. When you run it:

1. **Your app initializes the Speech SDK**: Provides an endpoint and authentication (key or Microsoft Entra ID)
2. **Text is provided**
3. **Text is sent to Azure Speech**: The SDK handles the request and formatting
4. **Speech synthesis runs in the cloud**: Neural models generate audio
5. **Audio is returned**: Your app plays, streams, or saves the audio temporarily

```
import os
import azure.cognitiveservices.speech as speechsdk

# This example requires environment variables named "FOUNDRY_KEY" and "ENDPOINT"
speech_config = speechsdk.SpeechConfig(subscription=os.environ.get('FOUNDRY_KEY'), endpoint=os.environ.get('ENDPOINT'))
audio_config = speechsdk.audio.AudioOutputConfig(use_default_speaker=True)

# The neural multilingual voice can speak different languages based on the input text.
speech_config.speech_synthesis_voice_name='en-US-Ava:DragonHDLatestNeural'

speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=audio_config)

# Get text from the console and synthesize to the default speaker.
print("Enter some text that you want to speak >")
text = input()

speech_synthesis_result = speech_synthesizer.speak_text_async(text).get()

if speech_synthesis_result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
    print("Speech synthesized for text [{}]".format(text))
elif speech_synthesis_result.reason == speechsdk.ResultReason.Canceled:
    cancellation_details = speech_synthesis_result.cancellation_details
    print("Speech synthesis canceled: {}".format(cancellation_details.reason))
    if cancellation_details.reason == speechsdk.CancellationReason.Error:
        if cancellation_details.error_details:
            print("Error details: {}".format(cancellation_details.error_details))
            print("Did you set the speech resource key and endpoint values?")
```

#### Client app example

For example, suppose you create an app that vocalizes text messages. In the code editor, you have one text file, and one Python file which contains application code.

![Screenshot of text file in Visual Studio code.](assets/image_002.png)

First, connect to the endpoint for Azure Speech. Then, create a `SpeechSynthesizer` object. Then application processes the text file containing the message and uses the `SpeechSynthesizer` object to generate the spoken audio.

[![Screenshot of text-to-speech Python code.](assets/image_003.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-speech-azure/media/text-to-speech-python.png#lightbox)

When you run the application, it will take the text and return an audio output of the message.

![Screenshot of results of text to speech python script.](assets/image_004.png)

Next, learn how to incorporate speech-to-speech capabilities into an application with Azure Speech - Voice Live.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with speech in Azure

#### Unit: Creating a speech-capable agent

Source: https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/4-voice-live/

**AI agents** are software programs that can understand information, make decisions, and take actions on their own to help users achieve specific goals. A common goal for AI agents is to be able to conduct real-time spoken conversations just like you would with a human.

**Speech‑to‑speech** is a capability that lets an application take spoken audio as input and produce spoken audio as output, without requiring the user to read or type text. The user experience feels like a natural voice conversation.

Speech‑to‑speech enables systems to:

- Listen to a person speaking
- Understand or transform what was said
- Respond with *synthetic speech*

Speech‑to‑speech combines speech‑to‑text and text‑to‑speech into a single conversational experience. Speech‑to‑speech is built as a pipeline of speech and language capabilities. The pipeline completes:

1. **Speech‑to‑Text**: Converting the user’s spoken audio into text.
2. **Processing or reasoning**: Analyzing, translating, and summarizing the text, or used by an AI agent to decide what to say next.
3. **Text‑to‑Speech**: Converting the response text back into spoken audio.

Common speech‑to‑speech scenarios include:

- Voice assistants and AI agents: Users talk to an agent and hear spoken responses.
- Speech translation: A user speaks in one language and hears the response in another language.
- Hands‑free applications: Navigation systems, kiosks, or industrial tools where typing isn’t practical.
- Accessibility: Voice‑based interaction for users who prefer or require audio input and output.
- Customer support bots: Callers speak naturally and receive spoken answers.

## Azure Speech - Voice Live

Azure Speech includes a **VoiceLive Service** which makes it easier to build conversational agents. The **Voice Live API** lets applications have real‑time voice conversations. It allows a voice agent to listen to someone speaking and respond with spoken audio quickly and naturally.

Instead of building and connecting many separate pieces—like speech‑to‑text, AI reasoning, and text‑to‑speech—the Voice Live API combines everything into one service. The Voice Live API makes it easier and faster for developers to create voice‑based experiences.

Azure fully manages *VoiceLive*, which means you don’t need to set up or maintain the backend systems yourself. When you send audio into VoiceLive, it sends back spoken responses. VoiceLive can also return visuals, such as avatars, and trigger actions when needed. Azure handles the models and infrastructure behind the scenes, so you can focus on building the voice experience.

Azure speech-to-speech solutions utilize:

- **Azure Speech** which provides the speech‑to‑text and text‑to‑speech capabilities.
- **Agents or application logic** which makes decisions on responses.
- **Foundry Tools or MCP servers** which can expose speech as callable tools so agents don’t manage SDKs or APIs directly.

You can explore *Voice Live* in a playground in Foundry portal. The Foundry playground includes some preconfigured voice samples that you can try out, or you can create a new solution of your own. When you create a solution, importantly, you need to choose a generative AI model for your agent to use. Azure Speech Voice Live uses the generative AI model *alongside* its own acoustic models to have a live conversation with the user. You can configure many settings in the playground. For example, you can enable proactive engagement, so the agent can initiate conversations.

[![Screenshot of voice live in the Foundry playground.](assets/image_001.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-speech-azure/media/voice-live-playground.png#lightbox)

You can also enable **Voice mode** for a Microsoft Foundry agent in the playground, which integrates Azure Speech Voice Live into the agent definition. This approach means that speech configuration is encapsulated in the agent itself, reducing the client code required to use it.

[![Screenshot of a voice-enabled agent.](assets/image_002.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-speech-azure/media/voice-live-agent.png#lightbox)

## Using Voice Live in an application

To develop a custom app that uses the agent, we need to write some code. To create an application in Python, you need the `azure-ai-voicelive` package.

The package can be installed in the Visual Studio Code *terminal* using:

```
pip install azure-ai-voicelive
```

Note

You also need to install `pyaudio`, `python-dotenv`, and `azure-identity` in order to run your Voice Live application.

You can find sample code for a speech-to-speech application in the Foundry portal. The sample code handles all of the logic needed to initiate the session, connect to audio devices like mics and speakers, process the incoming and outgoing streams of audio, handle interruptions, and so on. The sample code is a good starting point for building your own application.

[![Screenshot of voice live in the Foundry playground sample code.](assets/image_003.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-speech-azure/media/voice-live-playground-code.png#lightbox)

You can take the sample code into your own code editor and install the proper packages. When you run the application, a real‑time voice assistant streams your microphone audio to Azure Voice Live, receives the assistant’s spoken audio response back, and plays it through your speakers.

![Screenshot of the result of the VoiceLive Python script.](assets/image_004.png)

Voice Live in Azure Speech offers an effective way to build speech-capable conversational agents that engage naturally with users. Next, try out Azure Speech - Voice Live in Foundry yourself.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with speech in Azure

#### Unit: Exercise - Get started with speech in Microsoft Foundry

Source: https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/5-exercise/

If you have an Azure subscription, you can use the [Microsoft Foundry](https://ai.azure.com/) to explore the capabilities of Azure Speech.

Note

If you don't already have one, you can [sign up for an Azure subscription](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn_a4719b22-8aed-dcae-45d6-7d725c9fabe4), which includes free credits for the first 30 days.

Launch the exercise and follow the instructions.

[![Button to launch exercise.](assets/image_001.png)](https://go.microsoft.com/fwlink/?linkid=2347368)

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with speech in Azure

#### Unit: Module assessment

Source: https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/6-knowledge-check/

1.

Why would a developer use the Azure Speech‑to‑Text SDK instead of only using the Foundry playground?

The SDK replaces the need for Azure Speech models.

The SDK is required to upload audio files to the Foundry portal.

The SDK allows speech recognition to be added directly into application code.

2.

What does the Azure Text‑to‑Speech SDK handle for developers?

Only selecting the voice and writing audio files manually

Authentication, network communication, and audio generation

Storing synthesized audio permanently in Azure Storage

3.

What role does the Voice Live Python SDK (azure-ai-voicelive) play in a voice‑enabled agent?

It stores audio recordings permanently in Azure Storage

It replaces the need for microphones and speakers on the user’s device

It opens a real‑time connection, streams audio, and handles spoken responses and interruptions

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with speech in Azure

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/7-summary/

This module introduces speech recognition (speech‑to‑text) as the foundation for voice‑enabled applications and agents. Learners explore how spoken audio is captured from a microphone or audio file and converted into written text using Azure Speech. The module explains where speech‑to‑text fits in an application—either in a client app or a backend service—and highlights common scenarios such as live transcription, captions, voicemail processing, and providing text input to AI agents.

The module then covers speech synthesis (text‑to‑speech), which enables applications to generate natural‑sounding spoken audio from text. Learners see how Azure Speech uses neural voices to control pronunciation, tone, speed, and pitch, and how synthesized audio can be played immediately or saved for later use. This section emphasizes how text‑to‑speech allows applications and agents to respond audibly, improving accessibility, hands‑free interaction, and overall user experience.

Finally, the module brings these capabilities together with speech‑to‑speech using Voice Live. Learners discover how Voice Live combines speech‑to‑text, AI reasoning, and text‑to‑speech into a single, fully managed service for real‑time conversations. Instead of stitching together multiple components, developers can use Voice Live to build responsive, natural voice agents that can listen, think, and speak—making it easier to create production‑ready conversational experiences with Azure Speech and Microsoft Foundry.

Use the links below to learn more.

- Azure Speech in the [service documentation](https://learn.microsoft.com/en-us/azure/ai-services/speech-service?azure-portal=true)
- Learn more about Azure Speech's [Software Development Kits (SDKs)](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-sdk)
- Learn more about Azure Speech - Voice Live in the [documentation](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/voice-live)

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with computer vision in Azure

#### Unit: Introduction

Source: https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/1-introduction/

**Computer vision** is a field of AI that enables machines to interpret and understand visual information from the world—such as images, videos, and live camera feeds. Computer vision capabilities are powered by AI models and support the automation of all kinds of time-intensive tasks.

This module will discuss AI models that can identify and analyze objects, recognize patterns, read text within images, and interpret scenes much like a human would. The module also covers visual AI models that can go beyond image analysis to generate new visual content. Together, these capabilities enable a wide range of applications from image search and document analysis, to creative tools and interactive AI experiences, by allowing systems to both see and create visual information.

Consider these applications of computer vision:

- **Defect detection in manufacturing**: AI vision systems inspect products on assembly lines in real time. They detect surface defects, misalignments, or missing components using object detection and image segmentation, reducing waste and improving quality control.
- **Medical imaging analysis**: Computer vision helps radiologists analyze X-rays, MRIs, and CT scans. AI models can highlight anomalies like tumors or fractures, assist in early diagnosis, and reduce human error.
- **Shelf monitoring in retail**: Retailers use AI vision to monitor store shelves. Cameras detect when products are out of stock or misplaced, enabling real-time inventory updates and improving customer experience.
- **Autonomous vehicles**: Self-driving cars rely on computer vision to recognize road signs, lane markings, pedestrians, and other vehicles. This enables safe navigation and decision-making in dynamic environments.

Next, explore multimodal models in **Microsoft Foundry**, Microsoft's unified platform-as-a-service offering on Azure for enterprise AI operations and application development.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with computer vision in Azure

#### Unit: Multimodal models for image analysis

Source: https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models/

Increasingly, new AI models are multimodal. In other words, they support multiple kinds of input data, including images and text. **Multimodal models** are AI models that can understand and work with more than one type of data at the same time, such as text, images, audio, or video. For instance, the multimodal model could describe an image in natural language or answer a question about a photo.

Multimodal models are commonly used as part of:

- **AI applications**, where image understanding enhances user workflows
- **AI agents**, where visual input helps the agent make better decisions

Examples include:

- An agent that reviews uploaded documents and screenshots
- A support app that analyzes photos submitted by customers
- A learning tool that explains diagrams or charts in plain language

Because multimodal models accept both text and images, they reduce the need for separate vision pipelines and make it easier to build end‑to‑end intelligent experiences.

The ability for models to combine visual understanding with natural language responses is referred to as **vision‑enabled GPT models** or GPT with vision. Vision‑enabled models are designed for flexible, general‑purpose visual reasoning. They can analyze visual input and respond in natural language, making it easy to build intelligent applications without needing deep computer vision expertise.

## Multimodal models in Microsoft Foundry

Microsoft Foundry includes many models that accept image-based input, enabling you to create intelligent, vision-based solutions. Multimodal models in Microsoft Foundry allow applications and agents to understand, analyze, and reason over images and visual content.

For example, vision‑enabled GPT models in Foundry can:

- Describe the contents of an image in natural language
- Answer questions about objects, text, or scenes in an image
- Extract meaning from charts, screenshots, documents, or photos
- Combine image understanding with text instructions in a single prompt

Foundry's model catalog contains many multimodal models including:

- **GPT‑4.1 / GPT‑4.1‑mini / GPT‑4.1‑nano**: These general‑purpose multimodal GPT models can process text and images together. They're commonly used for image description and visual question answering, document and screenshot analysis, and chart and diagram interpretation.
- **GPT‑5 series (for example, GPT‑5.1, GPT‑5.2)**: The GPT‑5 family available in Foundry includes advanced multimodal models designed for enterprise and agentic scenarios. These models support multimodal inputs (including text and images), structured outputs, and tool use, large‑context reasoning across modalities. The GPT-5 series models are typically used in production‑grade AI agents and complex multimodal applications.

Foundry also hosts partner‑provided multimodal models in its model catalog, including models from providers such as Anthropic and others that support text and image understanding.

#### Image analysis in the Foundry playground

Note

Foundry portal has a *classic* user interface (UI) and a *new* user interface.

In the *new Microsoft Foundry portal*, you can use the model playground to chat with a deployed model. You can select a vision‑enabled model, upload images, and test prompts interactively to understand how the model interprets visual information.

[![Screenshot of Foundry Playground with a gpt-4.1 mini model deployed and the user uploading an image of an animal.](assets/image_001.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-vision-azure/media/playground-upload-image.png#lightbox)

For example, you can attach an image file and get the multimodal model (such as gpt-4.1 mini) to analyze and describe it.

[![Screenshot of Foundry Playground with a prompt asking the model to describe what is in an image and a response with a description.](assets/image_002.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-vision-azure/media/image-analysis-result-playground.png#lightbox)

Once validated, the same capabilities can be accessed programmatically using APIs, allowing images to be submitted alongside text prompts in application code.

## Using the Azure OpenAI API for image analysis

In order to develop an application, you need to move from the Foundry playground to code. In a code editor, you can write your application code using the **OpenAI Responses API** in Foundry. The OpenAI Responses API is designed for agentic apps and supports native multimodal inputs (including images).

At a high level:

- A single request can include text input and image input together
- Images can be provided as URLs or as base64‑encoded image data
- The model processes both inputs simultaneously to generate a response

Conceptually, the prompt structure looks like:

- A text instruction (for example, *What objects are visible in this image?*)
- One or more image inputs attached to the same request

This approach allows developers to build applications where users upload images and ask questions about them in real time.

## Using the Azure OpenAI Python SDK

You can use a Microsoft Foundry resource with the OpenAI API to perform image analysis—including sending images in prompts and getting text responses—by using the Responses API with a vision‑capable model deployment.

The Python SDK can be installed in the Visual Studio Code *terminal* using:

```
pip install openai
```

In the code editor, we can create one Python file, which contains application code. Importantly, you need your **Foundry resource** *key* and *endpoint*, and the *name of your deployed model*.

Note

When you deploy a model in Foundry, it has a *base* or *original* name, and an original **deployment name** you give it. Foundry hosts the deployed model (for example, GPT‑class models with vision) and provides you with an endpoint.

In the code example, you create the *client*, point it to your endpoint, and pass your *model deployment name* (the name you gave the model) as the `MODEL_NAME`.

```
import os
from openai import OpenAI

# Environment variables you set locally or in your app service:
FOUNDRY_KEY = "... your key ..."
ENDPOINT = "https://YOUR-RESOURCE-NAME.openai.azure.com/openai/v1/"
MODEL_NAME = "your-model-deployment-name"  # e.g., "gpt-4.1-mini" deployed as "my-vision-deploy"

client = OpenAI(
    api_key=os.getenv("FOUNDRY_KEY"),
    base_url=os.getenv("ENDPOINT"),
)

image_url = ""

response = client.responses.create(
    model=os.getenv("MODEL_NAME"),  # your deployment name
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "What is in this image? Provide 3 bullet points."},
                {"type": "input_image", "image_url": image_url}
            ],
        }
    ],
)

print(response.output_text)
```

#### Client app example

You can build a custom application that uses a vision-enabled model to analyze an image with the OpenAI Python SDK. For example, suppose you want to build an app that can identify animals photographed on Safari. You can upload your photos and create a Python file in your code editor.

![Screenshot of the image used for image analysis.](assets/image_003.png)

Then you can write application code that uses the OpenAI API to connect to your model's endpoint in Foundry.

[![Screenshot of Visual Studio Code with a python file containing application code for image analysis.](assets/image_004.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-vision-azure/media/vision-analysis-python.png#lightbox)

The application code needs to load the image data and get a natural language prompt from a user. To submit the input to the model, you need to create a multi-part message that includes both the image and text data. The model can respond with an appropriate output based on both the text and image in the prompt.

[![Screenshot of Visual Studio Code with the result of the image analysis.](assets/image_005.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-vision-azure/media/image-analysis-result-vs-code.png#lightbox)

Next, learn how to use Foundry models and the Azure OpenAI SDK for image generation.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with computer vision in Azure

#### Unit: Image generation models

Source: https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation/

Vision capable models often match visual information in an image to appropriate corresponding text. Some models are designed to perform this process in reverse, generating images that correspond to text descriptions.

## Using image generation models from Foundry

Microsoft Foundry includes models that support text-to-image inferencing, which you can use to generate visual output.

For most new projects, Microsoft recommends starting with the **GPT‑Image‑1 family**, especially GPT‑Image‑1.5, due to its improved quality, editing support, and enterprise readiness.

Common examples of image generation models in Foundry include:

- **GPT‑Image‑1.5**: GPT‑Image‑1.5 is the latest and most advanced image generation model available in Microsoft Foundry. It's designed for high‑fidelity, enterprise‑grade image creation and editing, with strong prompt alignment and improved consistency across iterations. The model supports *text‑to‑image*, *image‑to‑image*, and precise image editing, making it well suited for branding, marketing, and design workflows where visual accuracy matters.
- **GPT‑Image‑1**: GPT‑Image‑1 is a powerful, general‑purpose image generation model that builds on the capabilities of earlier DALL-E models. It supports *text‑to‑image generation*, image variations, and precise image editing. It's commonly used for creative applications, prototyping, and visual content generation. GPT‑Image‑1 is widely supported across Foundry tools and APIs, including the Responses API and agent tools.
- **GPT‑Image‑1‑Mini**: GPT‑Image‑1‑Mini is a lighter‑weight and more cost‑efficient version of GPT‑Image‑1. It supports the same core image generation tasks but is optimized for scenarios where lower latency or reduced cost is more important than maximum visual fidelity. This model is a good choice for experimentation, internal tools, or high‑volume image generation.

All of these image generation models can be:

- Deployed in a **Foundry (Azure OpenAI) resource**
- Tested in the **Foundry Playground**
- Accessed programmatically using the **OpenAI Responses API** or image generation APIs

Note

You can also access third-party image generation models in Foundry. For example, *FLUX* is a family of open‑source image generation models created by Black Forest Labs. They're designed to produce high‑quality, photorealistic, and stylistically flexible images from text prompts.

#### Image generation in the Foundry playground

You can deploy a vision-enabled model and test it in the Foundry portal playground. To test the model, you can describe the image that you want to create. And after a few minutes, an image matching your description is generated.

![Screenshot of image generation in the Foundry playground.](assets/image_001.png)

[![Screenshot of code example in the Foundry playground.](assets/image_002.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-vision-azure/media/image-generation-playground-code.png#lightbox)

## Using the OpenAI Python SDK for image generation

You can write code to build an application that uses an image generation model using Azure OpenAI API's images class. The OpenAI images class in the **OpenAI Python SDK** lets you generate new images and edit existing images. You can use the OpenAI Python SDK by calling the OpenAI Images API endpoint through a Python interface.

The ability to dynamically generate original images from descriptions can be immensely valuable in scenarios that include media, publishing, and content creation.

To generate images with the OpenAI Python SDK, you need:

- **A Foundry resource**
- A **vision‑capable model deployed** (the deployment name is what you pass as `MODEL_NAME`)
- **Authentication** via **API key** or **Microsoft Entra ID**
- **OpenAI Responses API** calls that include *image input* (URL or base64 data URL)

Note

**Base64** refers to files like images are binary (raw bytes). JSON and URLs are text‑only. Base64 encoding converts binary data into safe ASCII text, allows binary files to be embedded inside JSON or URLs.

For example, consider the following Python code:

```
import os
import base64
from openai import OpenAI

# Required environment variables (example names)
FOUNDRY_KEY="..."
ENDPOINT="https://YOUR-RESOURCE-NAME.openai.azure.com/openai/v1/"
MODEL_NAME="your-gpt-image-deployment-name"  # e.g., "gpt-image-1"

client = OpenAI(
    api_key=os.environ["FOUNDRY_KEY"],
    base_url=os.environ["ENDPOINT"],
)

prompt = "A modern flat illustration of a robot holding a potted plant, clean vector style, pastel colors."

response = client.responses.create(
    model=os.environ["MODEL_NAME"],  # your deployment name in Foundry
    input=prompt,
    tools=[{"type": "image_generation"}],
)

image_base64 = next(
    item.result for item in response.output
    if item.type == "image_generation_call"
)

with open("foundry_generated.png", "wb") as f:
    f.write(base64.b64decode(image_base64))

print("Saved: foundry_generated.png")
```

Next, learn how to use video generation models from Foundry.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with computer vision in Azure

#### Unit: Video generation models

Source: https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/4-video-generation/

In addition to static images, we increasingly expect to consume visual content as video.

## Using video generation models from Foundry

Microsoft Foundry includes models for video generation, which you can use to create original video content.

![Screenshot of Foundry model catalog with three video generation models displayed.](assets/image_001.png)

Video generation models in Foundry include:

- **Sora 1**: *Sora* is OpenAI’s first **text‑to‑video** model made available in Microsoft Foundry. It generates short video clips from **text prompts** and can also use **images as input** to guide video creation. Sora 1 supports multiple resolutions and durations and is exposed through the Azure OpenAI Service and the Foundry **Video Playground** for experimentation.

Typical uses:

- Concept videos and storyboards
- Short animations from text descriptions
- Visual prototyping for creative workflows

**Sora 2 (public preview)**: **Sora 2** is the **next‑generation video generation model** in Foundry and represents a significant upgrade over Sora 1. It supports multiple modalities, including: **Text → video**, **Image → video**, **Video → video (remix)**. Sora 2 also introduces **audio generation**, improved realism, and remixing capabilities that allow targeted edits instead of regenerating an entire video. It's available via the Azure OpenAI **v1 API** and the Foundry Video Playground, with built‑in Responsible AI safeguards.

Typical uses:

- Marketing and promotional videos
- Cinematic concept previews and trailers
- Educational and immersive media content

Note

Importantly, Sora models are currently the only native video generation models provided directly through Foundry. Other Foundry models may be multimodal (text, image, audio), but they do **not** generate video output. Both Sora 1 and Sora 2 include *Responsible AI restrictions*, such as limits on real people, copyrighted characters, and certain content types.

#### Video generation in the Foundry playground

Once you deploy an appropriate video generation model, you can test it in the Foundry portal playground. In the playground, you can also specify parameters like video dimensions and duration.

[![Screenshot of the Sora model in the Foundry Playground with parameters and a prompt.](assets/image_002.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-vision-azure/media/video-prompt-playground.png#lightbox)

Your prompts to the video generation model should include a description of the content in the desired video. After a few minutes, the model produces a video.

You can take a look at the sample code in the playground.

[![Screenshot of the Sora model in the Foundry Playground with sample code.](assets/image_003.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-vision-azure/media/video-code-sample-playground.png#lightbox)

The sample code uses the REST Interface for video generation.

## Using the REST Interface for video generation

You can use the **Foundry REST interface** to *request* a video generation job and *retrieve* the finished MP4 *programmatically*. Programmatic video generation enables you to automate the video generation process.

Note

A REST API (Representational State Transfer API) is a web interface that lets programs communicate using HTTP. An SDK as a developer-friendly toolkit built on top of that interface. You can always work with the underlying REST API, especially if an SDK in the programming language you are familiar with does not exist.
You can use **curl** (short for Client URL) to call, or talk to, the REST API. Curl is a command line tool used to send and receive data over the internet. At its core, curl: makes HTTP requests (and other protocols), sends data to a server, and receives and prints the server’s response.

Video generation is resource‑intensive and typically runs as an **asynchronous job**.

Asynchronous means you:

1. Create a job
2. Poll for the job's status
3. Download the video once the job is complete.

Video generation times are often 1–5 minutes, depending on settings. In order to run an asynchronous job using the Foundry REST interface, you need:

- An **Azure OpenAI / Foundry resource** in a supported region and a **Sora deployment** (you deploy Sora from Foundry's Models + endpoints).
- An authorization method: **API key** or **Microsoft Entra ID**

Let's take a look at using the **Azure OpenAI v1 API** with the Sora 2 model.

The Sora 2 API provides distinct endpoints for:

- Starting a render job
- Polling for the status of the job
- Downloading the video

#### 1. Create a video job

In the example, the script starts an **async render job** and returns a response that includes a **video id** to poll.

Note

**Bash** is a command line shell and scripting language. Curl is a command that you run inside Bash.

```
curl -X POST "https://YOUR-RESOURCE-NAME.openai.azure.com/openai/v1/videos" \
  -H "Content-Type: application/json" \
  -H "api-key: $AZURE_OPENAI_API_KEY" \
  -d '{
    "model": "sora-2",
    "prompt": "A cinematic close-up of raindrops sliding down a neon-lit window at night.",
    "size": "1280x720",
    "seconds": "8"
  }'
```

#### 2. Poll job status until completed

In the example, the script polls the endpoint until the job reaches `completed` (or `failed`).

```
curl -X GET "https://YOUR-RESOURCE-NAME.openai.azure.com/openai/v1/videos/{video_id}" \
  -H "api-key: $AZURE_OPENAI_API_KEY"
```

#### 3. Download the completed video

The video is downloaded only after status is `completed`.

```
curl -L "https://YOUR-RESOURCE-NAME.openai.azure.com/openai/v1/videos/{video_id}/content?variant=video" \
  -H "api-key: $AZURE_OPENAI_API_KEY" \
  --output output.mp4
```

Video models are improving all the time, and Microsoft Foundry makes it easy to integrate them into creative solutions. Next, try out vision-enabled models, image generation, and video generation in Foundry yourself.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with computer vision in Azure

#### Unit: Exercise - Get started with computer vision in Microsoft Foundry

Source: https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/5-exercise/

If you have an Azure subscription, you can use [Microsoft Foundry](https://ai.azure.com/) to explore the capabilities of Azure Vision.

Note

If you don't already have one, you can [sign up for an Azure subscription](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn_bac8ad47-af81-ecd8-0f05-6fd53b77642d), which includes free credits for the first 30 days.

Launch the exercise and follow the instructions.

[![Button to launch exercise.](assets/image_001.png)](https://go.microsoft.com/fwlink/?linkid=2347912)

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with computer vision in Azure

#### Unit: Module assessment

Source: https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/6-knowledge-check/

1.

What is a multimodal model?

A model that can only process images but not text.

A model that can understand and work with more than one type of data, such as text and images.

A model that generates video content only.

2.

How can developers programmatically generate images using Foundry image generation models?

By sending text prompts through the OpenAI Responses API using a deployed image model

By uploading images through the Foundry Playground UI.

By calling the GPT-4.1 model endpoint.

3.

When you generate images programmatically using the OpenAI Python SDK with Microsoft Foundry, which value should you pass as the model parameter in the request?

The original base model name (for example, gpt-image-1.5).

The deployment name you gave the image generation model in your Foundry resource.

The name you gave your Foundry resource.

4.

Why is video generation with Sora models in Microsoft Foundry handled as an asynchronous job?

Because video generation requires user interaction during rendering.

Because the REST API doesn't support synchronous requests.

Because video generation is resource‑intensive and takes time to complete.

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with computer vision in Azure

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/7-summary/

In this module, we explored vision-capable models in Microsoft Foundry and how to use them to analyze images and to generate original images and videos.

The module covered multimodal models, which support image analysis. We also covered image generation models, such as those in the GPT-Image family, for creating and editing images from prompts using Foundry tools and APIs. Finally, we introduced video generation with Sora models, which enable text‑to‑video and image‑to‑video creation through both interactive playgrounds and programmatic, asynchronous REST workflows.

Overall, visual AI models in Microsoft Foundry help bridge the gap between visual data and language‑based AI. They enable scenarios such as document and image analysis, visual assistants, accessibility tools, and multimodal AI agents—making image understanding a natural extension of modern AI applications.

To learn more, check out following links:

- Try out a [image analysis quickstart from the documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/gpt-v-quickstart).
- Learn more about [vision-enabled chat models](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/gpt-with-vision).
- Learn more about [Azure OpenAI image generation models](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/dall-e).
- Learn more about [video generation with Sora](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/video-generation).

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI-powered information extraction in Azure

#### Unit: Introduction

Source: https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/1-introduction/

Anyone who has manually processed invoices or forms knows how challenging it is. The great news is that we can use AI to eliminate manual effort and build the information systems of the future. AI-powered information extraction and analysis enable organizations to gain actionable insights from data that might otherwise be locked up in documents, images, audio, video, or other assets.

Examples of information extraction scenarios include:

- **Expense claim processing**: A company needs to extract expense descriptions and amounts from scanned receipts.
- **Customer support**: An agency needs to analyze recorded support calls to identify common problems and resolutions.
- **Capacity planning**: A tourist organization needs to estimate visitor volumes by analyzing video footage and images.

**Microsoft Azure Content Understanding in Foundry Tools** uses AI to extract structured information from unstructured content. Azure Content Understanding helps applications understand *what* is in content by identifying entities, fields, relationships, and meaning in the content.

Azure Content Understanding extracts structured data from multiple content types including:

- **Documents & images**: such as PDFs, forms, invoices, receipts, contracts
- **Audio**: such as recordings or calls
- **Video**: such as video of meetings or other media files

Azure Content Understanding's AI-powered information extraction automates the process of turning unstructured content into machine‑readable data that can be searched and analyzed. Next, learn how to extract structured data from unstructured documents and forms.

Note

We recognize that different people like to learn in different ways. You can choose to complete this module in video-based format or you can read the content as text and images. The text contains greater detail than the videos, so in some cases you might want to refer to it as supplemental material to the video presentation.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI-powered information extraction in Azure

#### Unit: Extract information from documents

Source: https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents/

Today's business processes depend heavily on data contained in documents like forms, receipts, and invoices. Manual processing can introduce delays and errors, making data extraction automation more important than ever.

## How Azure Content Understanding works

Azure Content Understanding follows a model‑driven extraction workflow in which unstructured content is ingested, analyzed, and returned as structured data.

1. **Ingest content**: You submit content to Azure Content Understanding.
2. **AI-powered analysis**: The service uses a combination of: Optical Character Recognition (OCR), speech recognition, natural language understanding, and multimodal AI models to analyze the content.
3. **Structured output**: The service returns structured results (for example, in JSON) that match your model—making the data easy to store, search, or integrate into downstream systems.

Note

JSON (JavaScript Object Notation) is a text‑based data format used to store and exchange structured data between systems. It's easy for humans to read and write, and easy for machines to parse and generate.

#### Understand schemas

OCR (optical character recognition) allows a computer to 'read' text from pictures, such as scanned documents, photos of receipts, or images of printed pages, and turn that text into editable and searchable digital text. Basic OCR helps recognize printed text, focuses on text extraction, and *doesn't* understand meaning, context, or relationships between words.

Azure Content Understanding's document analysis capabilities go beyond simple OCR-based text extraction to include **schema-based** extraction of fields and their values. The schema-driven approach is what differentiates Azure Content Understanding from basic OCR or transcription services.

A schema describes *what information you want to extract* and *how that information should be structured*. When you define a schema, you specify fields to extract. A schema lists the specific fields or entities you care about.

For example, suppose you define a schema that includes the common fields typically found in an invoice, such as:

- Vendor name
- Invoice number
- Invoice date
- Customer name
- Custom address
- Items - the items ordered, each of which includes:
  - Item description
  - Unit price
  - Quantity ordered
  - Line item total
- Invoice subtotal
- Tax
- Shipping Charge
- Invoice total

Now suppose you need to extract this information from the following invoice:

![Photograph of an invoice.](assets/image_001.png)

Azure Content Understanding can apply the invoice schema to your invoice and identify the corresponding fields, even when they're labeled with different names (or not labeled at all). The resulting analysis produces a result like this:

![Photograph of an analyzed invoice with detected fields highlighted.](assets/image_002.png)

The schema also defines the field structure. Schemas support *structured and nested fields*, not just flat text. For example:

- `Items` is a collection
- Each item has `description`, `unit price`, `quantity`, and `line total`

Identifying structured fields allows Azure Content Understanding to understand relationships between values, something OCR alone cannot do.

In the invoice example, for each detected *field*, you can extract nested values:

- **Vendor name**: Adventure Works Cycles
- **Invoice number**: 1234
- **Invoice date**: 03/07/2025
- **Customer name**: John Smith
- **Custom address**: 123 River Street, Marshtown, England, GL1 234
- **Items**:
  - Item 1:
    - **Item description**: 38" Racing Bike (Red)
    - **Unit price**: 1299.00
    - **Quantity ordered**: 1
    - **Line item total**: 1299.00
  - Item 2:
    - **Item description**: Cycling helmet (Black)
    - **Unit price**: 25.99
    - **Quantity ordered**: 1
    - **Line item total**: 25.99
  - Item 3:
    - **Item description**: Cycling shirt (L)
    - **Unit price**: 42.50
    - **Quantity ordered**: 2
    - **Line item total**: 85.00
- **Invoice subtotal**: 1409.99
- **Tax**: 140.99
- **Shipping Charge**: 35.00
- **Invoice total**: 1585.98

Azure Content Understanding extracts expected meaning, not just labels. Schemas are applied *semantically*, meaning:

- Fields can be extracted even if labels differ
- Fields can be extracted even if labels are missing

For example, *Invoice No.*, *Invoice #*, or an unlabeled number can all map to `InvoiceNumber` if the analyzer determines they represent the same concept.

#### Understand analyzers

An **analyzer** is a unit in Azure Content Understanding that takes input, applies AI analysis, and produces structured results. Analyzers consistently apply the same extraction logic to all incoming content. Once it's configured, an analyzer ensures a schema is reused consistently for every analysis request. Analyzers also produce predictable JSON results. The structured results make downstream processing (storage, search, automation) easier.

Azure Content Understanding offers prebuilt analyzers for common scenarios and supports custom analyzers tailored to your needs. At a high level:

1. You choose or create an analyzer.
2. The analyzer includes a schema defining fields and structure.
3. You submit content for analysis
4. The service applies the schema
5. You receive structured JSON results matching the schema

## Using Azure Content Understanding in the Foundry portal

Note

Foundry portal has a *classic* user interface (UI) and a *new* user interface.

After you create a *Microsoft Foundry resource*, you can use the ***new* Foundry portal interface** to test out Azure Content Understanding. The Foundry portal provides content examples and allows you to upload your own material for analysis.

You can use the visual interface to select a source document and extract default fields of information. For example, when you try out Azure Content Understanding on an image of a document, the service returns the document text and text layout information.

[![Screenshot of the new Foundry portal with a document analyzed with Azure Content Understanding.](assets/image_003.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-information-extraction/media/document-analysis-playground.png#lightbox)

Azure Content Understanding's analyzers identify text values in documents and map them to specific fields. For example, given an invoice, the service returns the fields (such as Vendor address) and the data in the fields (such as 123 456th Street).

[![Screenshot of the new Foundry portal with an invoice analyzed with Azure Content Understanding.](assets/image_004.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-information-extraction/media/invoice-playground.png#lightbox)

In Foundry portal, you can also view the JSON results of the processing.

[![Screenshot of the new Foundry portal with the JSON result of an invoice analyzed with Azure Content Understanding.](assets/image_005.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-information-extraction/media/invoice-json-result-playground.png#lightbox)

## Building a client application with Azure Content Understanding

You can use the **Content Understanding API** to build a lightweight client application that extracts data programmatically.

Note

A client application is a software program that runs on a user's device and requests services or data from another system, typically a server, over a network. The *client* is the part of an application that users interact with, while the *server* does the heavy work behind the scenes. Applications can request data or actions from a service and receive a structured response using an API.

When you use the Content Understanding API, you can choose a prebuilt analyzer or create a custom analyzer. Prebuilt analyzers include: `prebuilt-invoice`, `prebuilt-imageSearch`, `prebuilt-audioSearch`, and `prebuilt-videoSearch`. When you submit content for analysis to the analyzer, the analysis is **asynchronous**, which means you get the result later when it's ready. Because the analysis is asynchronous, you need to *poll* the Operation-Location URL (or `analyzerResults`) until the job succeeds.

#### Using the Azure Content Understanding Python SDK

Let's take a look at the process of using the Python SDK to analyze an invoice from a URL.

1. Install the Azure Content Understanding Python SDK.

```
python -m pip install azure-ai-contentunderstanding
```

2. Identify your Foundry resource endpoint and API key or Microsoft Entra ID. Your endpoint typically looks like: `https://<your-resource-name>.services.ai.azure.com/`
3. Create and run the client application code. The `analzyer_id` is the ID of the prebuilt analyzer. You can find a list of prebuilt analyzer ID values [here](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/prebuilt-analyzers).

```
import os
from azure.ai.contentunderstanding import ContentUnderstandingClient
from azure.core.credentials import AzureKeyCredential

endpoint = os.environ["FOUNDRY_ENDPOINT"]
key = os.environ["FOUNDRY_KEY"]

client = ContentUnderstandingClient(endpoint=endpoint, credential=AzureKeyCredential(key))

# 1) start analysis with analyzer id + inputs
analyzer_id = "prebuilt-invoice"
inputs = [
    {"url": "https://github.com/Azure-Samples/azure-ai-content-understanding-python/raw/refs/heads/main/data/invoice.pdf"}
]

# 2) wait for the Long Running Operation (LRO) to complete
poller = client.begin_analyze(analyzer_id=analyzer_id, inputs=inputs)  # starts LRO
result = poller.result()  # waits for completion (polling handled by SDK)

# 3) read structured fields + markdown
# The result typically includes extracted "fields" and "markdown" per input content item.
for content in result.contents:
    print(content.markdown)
    print(content.fields)
```

The resulting output is JSON that shows the extracted markdown, fields, data in the fields, and confidence score. For example:

```
{
	"status": "Succeeded",
	"result": {
		"analyzerId": "prebuilt-invoice",
		"apiVersion": "2025-05-01-preview",
		"contents": [
			{
				"markdown": "# INVOICE\n\nCONTOSO LTD.\n\nContoso Headquarters\n123 456th St\nNew York, NY, 10001\n\nINVOICE: INV-100\n\nINVOICE DATE: 11/15/2019\n\nDUE DATE: 12/15/2019\n\nCUSTOMER NAME: MICROSOFT CORPORATION\n",
				"fields": {
					"CustomerName": {
						"type": "string",
						"valueString": "MICROSOFT CORPORATION",
						"confidence": 0.95,
					},
					"InvoiceDate": {
						"type": "date",
						"valueDate": "2019-11-15",
						"confidence": 0.994,
					}
                }
            }
        ]
    }
}
```

Next, learn how to use Azure Content Understanding analyzers to extract structured data from audio and video.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI-powered information extraction in Azure

#### Unit: Extract information from audio and video

Source: https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/3-audio-video/

Business information is increasingly found in multimedia formats such as audio and video files. For example, businesses often record calls in order to analyze them later. The growth of video conferencing means that useful information is often captured in recorded meetings. Azure Content Understanding supports both audio and video data extraction and analysis.

## Extracting structured data from audio

You can use Azure Content Understanding to provide transcriptions, summaries, and other key insights from audio files.

Suppose you want to have AI summarize your voice mail. You might define a schema of key insights to extract from each recorded call, like this:

- Caller
- Message summary
- Requested actions
- Callback number
- Alternative contact details

Now suppose, a caller leaves you the following voice message:

```
Hi, this is Ava from Contoso.

Just calling to follow up on our meeting last week.

I wanted to let you know that I've run the numbers and I think we can meet your price expectations.

Please call me back on 555-12345 or send me an e-mail at Ava@contoso.com and we'll discuss next steps.

Thanks, bye!
```

Using Azure Content Understanding to analyze the audio recording and apply your schema produces the following results:

- **Caller**: Ava from Contoso
- **Message summary**: Ava from Contoso called to follow up on a meeting and mentioned that they can meet the price expectations. They requested a callback or an email to discuss next steps.
- **Requested actions**: Call back or send an email to discuss next steps.
- **Callback number**: 555-12345
- **Alternative contact details**: Ava@contoso.com

#### Analyzing audio in the Foundry portal

As with document analysis, using Content Understanding in the *new* Foundry portal is a fast way to validate that your analyzer returns the fields you expect before you automate the workflow in code.

In the portal, you can:

- Select an audio or video analyzer and run it on a media file.
- Review outputs such as **transcripts** (for audio) and extracted insights based on your schema.
- View the returned **JSON results** for further processing in downstream systems.

Let's take a look at how we can use content understanding to analyze a call recording. Rather than listen to the whole call, you can run the prebuilt audio analyzer to extract information from the audio. When the analysis is done, you can see a written transcript of the call.

[![Screenshot of the new Foundry portal with audio analyzed with Azure Content Understanding.](assets/image_001.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-information-extraction/media/audio-extraction-playground.png#lightbox)

In the returned results, you can see specific information from the call. As with other analyzers in content understanding, the results are in JSON format for further processing.

[![Screenshot of the new Foundry portal where audio is analyzed and JSON is returned.](assets/image_002.png)](https://learn.microsoft.com/en-us/training/modules/wwl-data-ai/get-started-information-extraction/media/audio-json-result.png#lightbox)

## Extracting structured data from video

Azure Content Understanding also supports video analysis. For example, you could analyze a recorded video conference to extract details of attendance, location, and other information.

Let's first look at one image from the conference room camera. Suppose you defined the following schema:

- Location
- In-person attendees
- Remote attendees
- Total attendees

You could use Azure Content Understanding to analyze an image from the conference room camera:

![Photograph of a person in a conference room on a call with three remote attendees.](assets/image_003.jpg)

After applying the schema to the image, Azure Content Understanding returned structured data:

- **Location**: Conference room
- **In-person attendees**: 1
- **Remote attendees**: 3
- **Total attendees**: 4

Consider what you might add to the schema for a video recording of the meeting. You could include attendance counts at various time intervals, details of who spoke during the call and what they said, a summary of the discussion, and a list of assigned actions from the meeting.

## Building a client application with audio or video analyzers

To analyze audio or video programmatically, you can build a lightweight client application using the *Content Understanding API*.

Let's take a look at an example using the Python SDK. When you run the following code, it analyzes an audio file using a prebuilt analyzer. The prebuilt analyzer is identified as `prebuilt-audioSearch`.

```
import os
from azure.ai.contentunderstanding import ContentUnderstandingClient
from azure.core.credentials import AzureKeyCredential

# Endpoint and key for your Foundry resource
endpoint = os.environ["FOUNDRY_ENDPOINT"]  # e.g., "https://<resource>.services.ai.azure.com/"
key = os.environ["FOUNDRY_KEY"]

client = ContentUnderstandingClient(
    endpoint=endpoint,
    credential=AzureKeyCredential(key)
)

# Choose a prebuilt analyzer for audio
# (The documents module lists examples like prebuilt-audioSearch / prebuilt-videoSearch.)
analyzer_id = "prebuilt-audioSearch"

# Provide an input audio file (URL shown here; you can swap in your own accessible media URL)
inputs = [
    {"url": "https://<your-host>/samples/voicemail.wav"}
]

# Start analysis (asynchronous long-running operation)
poller = client.begin_analyze(analyzer_id=analyzer_id, inputs=inputs)

# Wait for completion (SDK polls under the hood)
result = poller.result()

# Inspect the structured output (JSON-like objects)
for content in result.contents:
    # Some analyzers may return a transcript and/or extracted fields depending on the analyzer and schema
    print("=== MARKDOWN / TRANSCRIPT (if provided) ===")
    print(getattr(content, "markdown", None))

    print("\n=== EXTRACTED FIELDS ===")
    print(getattr(content, "fields", None))
```

Audio and video analysis with content understanding in Microsoft Foundry opens up a whole range of opportunities to unlock the potential of business data in any format. Next, try out Content Understanding for yourself.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI-powered information extraction in Azure

#### Unit: Exercise - Get started with information extraction in Microsoft Foundry

Source: https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/4-exercise/

In this exercise, you use [Microsoft Foundry](https://ai.azure.com/) to explore Azure Content Understanding.

Note

To complete this lab, you need an **[Azure subscription](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn_f27975ad-c97e-b503-1a66-781f1e7068f0)** in which you have administrative access.

Launch the exercise and follow the instructions.

[![Button to launch exercise.](assets/image_001.png)](https://go.microsoft.com/fwlink/?linkid=2347369)

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI-powered information extraction in Azure

#### Unit: Module assessment

Source: https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/5-knowledge-check/

## Check your knowledge

1.

What is the key advantage of using Azure Content Understanding over basic Optical Character Recognition (OCR)?

Azure Content Understanding extracts text faster by skipping image preprocessing.

Azure Content Understanding understands document structure and maps extracted data to a defined schema.

Azure Content Understanding extracts structured data, while OCR extracts the relationship between words in text.

2.

What is the primary role of an analyzer in Azure Content Understanding?

It defines how content is processed and what structured data is returned.

It stores extracted data in a database.

It converts JSON output into human‑readable text.

3.

When you use the Azure Content Understanding Python SDK, what happens after you submit content for analysis?

The results are returned immediately in the same request.

The analyzer retrains itself on the submitted content.

You must poll a URL until the analysis job completes.

Submit answers

You must answer all questions before checking your work.

You must answer all questions before checking your work.

## Learning Path: Get started with AI applications and agents on Azure

### Module: Get started with AI-powered information extraction in Azure

#### Unit: Summary

Source: https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/6-summary/

This module introduces **Azure Content Understanding** in Microsoft Foundry and explain how it extracts structured data from **documents, audio, and video** using AI-powered analyzers. The service is designed to automate the processing of unstructured business content—such as invoices, forms, call recordings, and meeting videos—by converting it into structured, machine-readable output (typically JSON) that can be easily stored, searched, or integrated into downstream systems.

Across all content types, Azure Content Understanding follows a consistent workflow. The service first ingests content, then analyzes it using AI models, and finally returns structured results. Users can experiment in the *new* Foundry portal or build client applications using the **Content Understanding REST API or Python SDK**, which handles asynchronous analysis and polling. Together, these capabilities enable scalable, automated understanding of business data in any format.

To learn more, check out the links:

- Review the [glossary of terms](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/glossary) associated with Azure Content Understanding.
- Learn more about Azure Content Understanding's [workflow from the documentation](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview).
- Read more about Azure Content Understanding [analyzers and their configurations in the documentation](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/analyzer-reference).
- Try out Azure Content Understanding using the REST API with a [quickstart tutorial from the documentation](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/quickstart/use-rest-api?tabs=portal%2Cdocument).
