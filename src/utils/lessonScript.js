/* =========================================================================
   LESSON SCRIPT — single source of truth for every spoken line.
   ---------------------------------------------------------------------------
   • UI components DISPLAY these exact strings.
   • src/utils/narration.js wraps them in styled segments for playback.
   • scripts/generate_audio.js reads ALL_PHRASES to pre-generate the MP3s.
   Because all three read the same strings, on-screen text and audio can
   never drift apart (1:1 parity).

   CONTENT POLICY: only paragraphs, questions and pedagogical guidance are narrated.
   Titles, headings and labels live in the components and are NEVER spoken.
   Plain ESM (no Vite-only APIs) so Node scripts can import it too.
   ========================================================================= */

import { RAW_QUESTIONS } from '../mathData.js';

export const WONDER = {
  paragraph:
    "Leo wants the same $200 sneakers. Shop A offers 40 percent off. Shop B offers 20 percent off, and then another 20 percent off at the checkout. Leo thinks 20 plus 20 makes 40, so both deals must be the same!",
  question:
    "Are the two deals really the same? Which shop should Leo choose to pay the least?"
};

export const STORY = [
  {
    body: "Every sale has three key numbers. The marked price is the price on the tag. The discount is the amount taken off. The sale price is what you actually pay. Sale price equals marked price minus discount.",
    style: 'statement'
  },
  {
    body: "Discounts are usually given as a percentage of the MARKED price. 25 percent off an $80 pair of headphones is 0.25 times 80, which is $20 off. So you pay $60.",
    style: 'emphasis'
  },
  {
    body: "There is a faster way! If you get 25 percent off, you pay the other 75 percent. Multiply the marked price by 0.75 to get the sale price straight away. 80 times 0.75 is $60.",
    style: 'statement'
  },
  {
    body: "To find the discount percentage, divide the discount by the marked price and multiply by 100. A $250 bike on sale for $175 is $75 off. 75 divided by 250 is 0.3, which is a 30 percent discount.",
    style: 'thinking'
  },
  {
    body: "Working backwards, divide by the multiplier. A game costs $45 after 25 percent off. You paid 75 percent, so the marked price is 45 divided by 0.75, which is $60. Never just add 25 percent back!",
    style: 'emphasis'
  },
  {
    body: "Leo's mystery is solved! At Shop B, 20 percent off $200 gives $160. The second 20 percent is taken off $160, giving $128. That's 0.8 times 0.8, which is 0.64, so only 36 percent off. Shop A's $120 is the better deal!",
    style: 'encouragement'
  },
  {
    body: "Discounts and sales tax often come together. A $50 jacket at 20 percent off costs $40, and 10 percent tax makes it $44. Here's a secret: tax first then discount gives the same $44, because multiplying in any order gives the same answer!",
    style: 'statement'
  },
  {
    body: "Brilliant! You can now find sale prices, discount percentages and marked prices, combine discounts and compare deals. Step into the lab to design sale stickers, run the checkout and become a deal detective!",
    style: 'celebration'
  }
];

export const SIMULATE_STATIONS = {
  1: {
    intro: "Turn the discount dial and watch the price drop. Find the discount that gives the sale price you need, then work out the savings!",
    activities: [
      {
        id: 1,
        guidance: "Headphones are marked at 80 dollars. The shop wants the sale price to be 60 dollars. Turn the discount dial to make the right sale sticker.",
        hint: "80 dollars minus 60 dollars is 20 dollars off. 20 divided by 80 is 0.25, so it is 25 percent off. You pay 75 percent, so the multiplier is 0.75."
      },
      {
        id: 2,
        guidance: "A bike is marked at 250 dollars and must sell for 175 dollars. Find the discount on the dial, then work out the savings.",
        hint: "250 dollars minus 175 dollars is 75 dollars off. 75 divided by 250 is 0.3, which is 30 percent off. You pay 70 percent."
      },
      {
        id: 3,
        guidance: "A winter jacket marked at 120 dollars is cleared for 78 dollars. What percentage off is that?",
        hint: "120 dollars minus 78 dollars is 42 dollars off. 42 divided by 120 is 0.35, which is 35 percent off."
      }
    ]
  },
  2: {
    intro: "Welcome to the checkout! Scan each item, work out its sale price, then find how much the customer saved altogether.",
    activities: [
      {
        id: 1,
        guidance: "Mia brings two items to the checkout. Scan them, find each sale price, then work out her savings.",
        hint: "T-shirt: 40 dollars times 0.9. Jeans: 60 dollars times 0.7. Saved equals 100 dollars minus total paid. Overall percentage equals saved divided by 100 times 100."
      },
      {
        id: 2,
        guidance: "Leo buys trainers and socks in a sale. Scan the items and complete the receipt.",
        hint: "Trainers: 90 dollars times 0.8. Socks: 10 dollars times 0.5. The marked prices add up to 100 dollars."
      },
      {
        id: 3,
        guidance: "Three items, three different discounts! Scan them all and find the overall discount on the whole cart.",
        hint: "30 dollars times 0.9, 50 dollars times 0.6, and 20 dollars times 0.75. The overall percentage is not the average of the separate percentages."
      }
    ]
  },
  3: {
    intro: "Be a deal detective! Compare offers, work backwards to marked prices, and see what happens when discounts stack up.",
    activities: [
      {
        id: 1,
        guidance: "Shop A offers 40 percent off 200 dollars. Shop B offers 20 percent off 200 dollars, then another 20 percent off the new price. Follow both chains to compare.",
        hint: "200 times 0.6 is 120. 200 times 0.8 is 160, then 160 times 0.8 is 128. Saving 72 dollars out of 200 dollars is 36 percent."
      },
      {
        id: 2,
        guidance: "Ava paid 45 dollars for a video game in a 25 percent off sale. The price tag is torn off! What was the marked price?",
        hint: "Marked price times 0.75 equals 45, so the marked price equals 45 divided by 0.75."
      },
      {
        id: 3,
        guidance: "An 80 dollar jacket has 15 percent off, and there is 10 percent sales tax. Does it matter which is applied first? Follow both chains.",
        hint: "80 times 0.85 equals 68, then 68 times 1.1 equals 74.80. And 80 times 1.1 equals 88, then 88 times 0.85 equals 74.80."
      }
    ]
  }
};

export const SIMULATE = {
  1: SIMULATE_STATIONS[1].intro,
  2: SIMULATE_STATIONS[2].intro,
  3: SIMULATE_STATIONS[3].intro
};

export const REFLECT = {
  question:
    "Why is 20 percent off followed by another 20 percent off NOT the same as 40 percent off? Explain it to Robo with your own example!"
};

export const FEEDBACK = {
  splitDone: "Awesome! That sale sticker is perfect!",
  buildDone: "Great checkout! Every price on the receipt is right!",
  reverseDone: "Brilliant! You cracked the deal like a true detective!",
  tryAgain: "Not quite. Try again!",
  practiceCorrect: "Correct! Excellent work with discounts!",
  practiceWrong: "Not quite!",
  lessonDone: "Outstanding reflection! Lesson complete!"
};

/** Every phrase that should exist as a pre-generated MP3, with its voice style. */
export const ALL_PHRASES = [
  // Wonder
  { text: WONDER.paragraph, style: 'statement' },
  { text: WONDER.question, style: 'question' },

  // Story slides
  ...STORY.map(s => ({ text: s.body, style: s.style })),

  // Simulation station intros
  { text: SIMULATE[1], style: 'instruction' },
  { text: SIMULATE[2], style: 'instruction' },
  { text: SIMULATE[3], style: 'question' },

  // Simulation guidance & hints
  ...[1, 2, 3].flatMap(s => 
    SIMULATE_STATIONS[s].activities.flatMap(a => [
      { text: a.guidance, style: 'instruction' },
      { text: a.hint, style: 'thinking' }
    ])
  ),

  // Reflect
  { text: REFLECT.question, style: 'thinking' },

  // Feedback
  { text: FEEDBACK.splitDone, style: 'celebration' },
  { text: FEEDBACK.buildDone, style: 'celebration' },
  { text: FEEDBACK.reverseDone, style: 'celebration' },
  { text: FEEDBACK.tryAgain, style: 'encouragement' },
  { text: FEEDBACK.practiceCorrect, style: 'celebration' },
  { text: FEEDBACK.practiceWrong, style: 'encouragement' },
  { text: FEEDBACK.lessonDone, style: 'celebration' },

  // All 100 Practice Questions (spokenPrompt and spokenHint)
  ...RAW_QUESTIONS.flatMap(q => [
    { text: q.spokenPrompt || q.prompt, style: 'question' },
    { text: q.spokenHint || q.hint, style: 'thinking' }
  ])
];
