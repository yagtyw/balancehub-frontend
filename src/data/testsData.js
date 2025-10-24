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
];

export default tests;
