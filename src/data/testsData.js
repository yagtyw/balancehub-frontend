const tests = [
  {
    id: 1,
    slug: "ptsd",
    title: "PTSD Test",
    instruction:
      "Please answer Yes if you have experienced the following symptoms at least twice in the past week.",
    decoding:
      "If the score obtained on the questionnaire is equal to or exceeds 6, then there is PTSD.",
    type: "yesNo", // Yes (1), No (0)
    threshold: 6,
    questions: [
      "Intrusive or distressing memories of the event came to my mind against my will.",
      "I had distressing dreams about what happened.",
      "I suddenly found myself acting or feeling as if the situation were happening again.",
      "When something reminded me of the event, I felt depressed or down.",
      "When something reminded me of what happened, I experienced unpleasant physical sensations (sweating, shortness of breath, nausea, increased heart rate, etc.).",
      "My sleep was disturbed (trouble falling asleep or frequent awakenings).",
      "I felt constant irritation or anger.",
      "I found it difficult to concentrate.",
      "I became more aware of potential dangers to myself and others.",
      "I was constantly tense and startled easily when something suddenly frightened me.",
    ],
  },
  {
    id: 2,
    slug: "bar",
    title: "Online Tests for Bipolar Disorder (BAR)",
    description: 
      `The online tests for bipolar disorder (BAR) presented on this page will help you independently assess your mental state. 
      This can be useful in cases where the symptoms of BAR are not clearly expressed and you are unsure about its presence.
      However, it is important to understand that the results of this BAR test are not a basis for diagnosis — 
      to make a conclusion, you need to consult a psychologist from our center.`,
    subTitle: "HCL-32 Scale",
    instruction: 
      `In every person's life, there are periods of "ups" and "downs" accompanied by changes in energy levels, activity, and mood. 
      The purpose of this questionnaire is to obtain a detailed description of the "high" periods.
      Try to recall a period of elevated mood. How did you feel then?
      Please answer the questions regardless of how you feel right now.`,
    decoding: 
      `If the score obtained on the questionnaire exceeds 14, 
      there is a suspicion of a bipolar affective disorder.`,
    type: "yesNo", // Yes (1), No (0)
    threshold: 14,
    questions: [
      "I needed less time to sleep.",
      "I had more energy, and I was more active.",
      "I was more confident in myself.",
      "I enjoyed my work more.",
      "I became more sociable (I made phone calls more often, went out more).",
      "I wanted to travel, and I actually traveled a lot more.",
      "I started driving faster and taking more risks.",
      "I spent more (too much) money.",
      "In my daily life, I often found myself in risky situations (both at work and in other circumstances).",
      "I started moving more (exercising, etc.).",
      "I had a lot of plans and projects.",
      "I became more creative, I had a lot of ideas.",
      "I became less shy and insecure.",
      "I dressed more brightly and extravagantly.",
      "I wanted to meet people more often, and I really talked to a lot of people.",
      "I became more interested in sex than usual, and my sex drive increased.",
      "I started flirting more often and/or was more sexually active.",
      "I've talked a lot.",
      "I was thinking faster than usual.",
      "I made a lot of jokes and puns.",
      "I was easily distracted.",
      "I've got a lot of new things to do.",
      "My thoughts were jumping from one to the other.",
      "I did everything much faster and easier than usual.",
      "I became more impatient and easily irritated.",
      "I irritated and tired others.",
      "I used to fight a lot.",
      "My mood was upbeat and optimistic.",
      "I drank a lot of coffee.",
      "I smoked a lot.",
      "I drank more and more often.",
      "I took more medications (sedatives, anxiolytics, stimulants).",
    ],
  },
];

export default tests;
