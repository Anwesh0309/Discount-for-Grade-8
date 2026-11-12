/* =========================================================================
   MATH DATA & PRACTICE QUESTION BANK — DISCOUNT (GRADE 8)
   10 Themed Worlds × 10 Questions = 100 Comprehensive Questions
   Every question has:
   • prompt: displayed on screen
   • spokenPrompt: formatted for natural ElevenLabs speech
   • hint: pedagogical hint displayed
   • spokenHint: formatted for natural ElevenLabs speech
   • options: 4 distinct choices (shuffled)
   • correctIndex: index of correct choice
   • explanation: full step-by-step mathematical reasoning
   • diagramData: visual data for <DiscountDiagram />
   • rule: rule badge shown in UI
   ========================================================================= */

export const PRACTICE_WORLDS = [
  { id: 0, name: "Sticker Street", icon: "🏷️", range: "Q1–10", difficulty: 1, desc: "Finding the sale price from marked price and percent off" },
  { id: 1, name: "Savings Square", icon: "💵", range: "Q11–20", difficulty: 1, desc: "Finding the discount amount saved" },
  { id: 2, name: "Multiplier Market", icon: "✖️", range: "Q21–30", difficulty: 2, desc: "Mastering the single multiplier shortcut" },
  { id: 3, name: "Percent-Off Plaza", icon: "🛍️", range: "Q31–40", difficulty: 2, desc: "Calculating the discount percentage" },
  { id: 4, name: "Clearance Corner", icon: "📦", range: "Q41–50", difficulty: 2, desc: "Multi-item shopping carts and total savings" },
  { id: 5, name: "Torn Tag Town", icon: "🔙", range: "Q51–60", difficulty: 3, desc: "Working backwards to find original marked prices" },
  { id: 6, name: "Double Deal Dock", icon: "🔗", range: "Q61–70", difficulty: 3, desc: "Successive and chained percentage discounts" },
  { id: 7, name: "Compare Canyon", icon: "⚖️", range: "Q71–80", difficulty: 3, desc: "Comparing competing deals to find the cheapest" },
  { id: 8, name: "Tax Tower", icon: "🧾", range: "Q81–90", difficulty: 4, desc: "Combining percentage discounts with sales tax" },
  { id: 9, name: "Bargain Champion", icon: "🏆", range: "Q91–100", difficulty: 4, desc: "Mastery challenges, BOGO deals, and real-world math" }
];

export const RULES = {
  sale: "✦ SALE = MARKED × (1 − d%)",
  amount: "✦ DISCOUNT = d% OF MARKED",
  mult: "✦ d% OFF → PAY (100 − d)%",
  pct: "✦ DISCOUNT ÷ MARKED × 100",
  cart: "✦ TOTAL MARKED − TOTAL PAID",
  reverse: "✦ MARKED = SALE ÷ MULTIPLIER",
  stack: "✦ MULTIPLY THE MULTIPLIERS",
  compare: "✦ WORK OUT EACH PRICE",
  tax: "✦ DISCOUNT, THEN × (1 + TAX)",
  mastery: "✦ STEP-BY-STEP STRATEGY"
};

export const RAW_QUESTIONS = [
  /* -----------------------------------------------------------------------
     WORLD 1: Sticker Street (Finding Sale Price)
     ----------------------------------------------------------------------- */
  {
    worldIndex: 0, qIndex: 0,
    rule: RULES.sale,
    prompt: "Headphones are marked at $80 with a 25% discount. What is the sale price?",
    spokenPrompt: "Headphones are marked at 80 dollars with a 25 percent discount. What is the sale price?",
    options: ["$60", "$55", "$65", "$70"],
    correctIndex: 0,
    explanation: "25% of $80 is 0.25 × 80 = $20. Sale price = $80 − $20 = $60. Or multiply $80 by 0.75 = $60.",
    hint: "25% off leaves 75% to pay. Multiply 80 dollars by 0.75, or find 20 dollars off.",
    spokenHint: "25 percent off leaves 75 percent to pay. Multiply 80 dollars by 0.75, or subtract 20 dollars.",
    diagramData: { type: 'tag', marked: "$80", off: "25%", sale: "?" }
  },
  {
    worldIndex: 0, qIndex: 1,
    rule: RULES.sale,
    prompt: "A T-shirt is marked at $30 with a 20% discount. What is the sale price?",
    spokenPrompt: "A T-shirt is marked at 30 dollars with a 20 percent discount. What is the sale price?",
    options: ["$24", "$20", "$26", "$28"],
    correctIndex: 0,
    explanation: "20% of $30 is $6. Sale price = $30 − $6 = $24. Alternatively, $30 × 0.8 = $24.",
    hint: "10% of $30 is $3, so 20% is $6. Subtract $6 from $30.",
    spokenHint: "10 percent of 30 dollars is 3 dollars, so 20 percent is 6 dollars. Subtract 6 dollars from 30 dollars.",
    diagramData: { type: 'tag', marked: "$30", off: "20%", sale: "?" }
  },
  {
    worldIndex: 0, qIndex: 2,
    rule: RULES.sale,
    prompt: "A backpack is marked at $50 with a 10% discount. What is the sale price?",
    spokenPrompt: "A backpack is marked at 50 dollars with a 10 percent discount. What is the sale price?",
    options: ["$45", "$40", "$48", "$35"],
    correctIndex: 0,
    explanation: "10% of $50 is $5. Sale price = $50 − $5 = $45.",
    hint: "Find 10% of $50 by dividing by 10, then subtract that amount from $50.",
    spokenHint: "Find 10 percent of 50 dollars by dividing by 10, then subtract that amount from 50 dollars.",
    diagramData: { type: 'tag', marked: "$50", off: "10%", sale: "?" }
  },
  {
    worldIndex: 0, qIndex: 3,
    rule: RULES.sale,
    prompt: "Trainers are marked at $100 with a 30% discount. What is the sale price?",
    spokenPrompt: "Trainers are marked at 100 dollars with a 30 percent discount. What is the sale price?",
    options: ["$70", "$65", "$75", "$80"],
    correctIndex: 0,
    explanation: "30% of $100 is $30. Sale price = $100 − $30 = $70.",
    hint: "30% off of $100 means you save exactly $30.",
    spokenHint: "30 percent off of 100 dollars means you save exactly 30 dollars.",
    diagramData: { type: 'tag', marked: "$100", off: "30%", sale: "?" }
  },
  {
    worldIndex: 0, qIndex: 4,
    rule: RULES.sale,
    prompt: "A video game is marked at $60 with a 15% discount. What is the sale price?",
    spokenPrompt: "A video game is marked at 60 dollars with a 15 percent discount. What is the sale price?",
    options: ["$51", "$48", "$54", "$45"],
    correctIndex: 0,
    explanation: "10% of $60 is $6, 5% is $3, so 15% is $9. Sale price = $60 − $9 = $51.",
    hint: "15% of $60 is $9. Subtract $9 from $60, or multiply $60 by 0.85.",
    spokenHint: "15 percent of 60 dollars is 9 dollars. Subtract 9 dollars from 60 dollars, or multiply 60 dollars by 0.85.",
    diagramData: { type: 'tag', marked: "$60", off: "15%", sale: "?" }
  },
  {
    worldIndex: 0, qIndex: 5,
    rule: RULES.sale,
    prompt: "A winter jacket is marked at $120 with a 40% discount. What is the sale price?",
    spokenPrompt: "A winter jacket is marked at 120 dollars with a 40 percent discount. What is the sale price?",
    options: ["$72", "$68", "$78", "$80"],
    correctIndex: 0,
    explanation: "40% off means you pay 60%: $120 × 0.6 = $72. Savings = 0.4 × $120 = $48.",
    hint: "Multiply the marked price by 0.6 to get the price you pay straight away.",
    spokenHint: "Multiply the marked price by 0.6 to get the price you pay straight away.",
    diagramData: { type: 'tag', marked: "$120", off: "40%", sale: "?" }
  },
  {
    worldIndex: 0, qIndex: 6,
    rule: RULES.sale,
    prompt: "A skateboard is marked at $40 with a 50% discount. What is the sale price?",
    spokenPrompt: "A skateboard is marked at 40 dollars with a 50 percent discount. What is the sale price?",
    options: ["$20", "$15", "$25", "$30"],
    correctIndex: 0,
    explanation: "50% off is half price: $40 ÷ 2 = $20.",
    hint: "50% off means paying exactly half of the marked price.",
    spokenHint: "50 percent off means paying exactly half of the marked price.",
    diagramData: { type: 'tag', marked: "$40", off: "50%", sale: "?" }
  },
  {
    worldIndex: 0, qIndex: 7,
    rule: RULES.sale,
    prompt: "A smart watch is marked at $150 with a 20% discount. What is the sale price?",
    spokenPrompt: "A smart watch is marked at 150 dollars with a 20 percent discount. What is the sale price?",
    options: ["$120", "$115", "$125", "$130"],
    correctIndex: 0,
    explanation: "20% of $150 is $30. Sale price = $150 − $30 = $120.",
    hint: "20% of 150 dollars is 30 dollars. Subtract 30 dollars from 150 dollars.",
    spokenHint: "20 percent of 150 dollars is 30 dollars. Subtract 30 dollars from 150 dollars.",
    diagramData: { type: 'tag', marked: "$150", off: "20%", sale: "?" }
  },
  {
    worldIndex: 0, qIndex: 8,
    rule: RULES.sale,
    prompt: "A bicycle is marked at $200 with a 35% discount. What is the sale price?",
    spokenPrompt: "A bicycle is marked at 200 dollars with a 35 percent discount. What is the sale price?",
    options: ["$130", "$125", "$135", "$140"],
    correctIndex: 0,
    explanation: "35% of $200 is $70. Sale price = $200 − $70 = $130. Or $200 × 0.65 = $130.",
    hint: "You pay 65% of the marked price. 200 times 0.65 equals 130 dollars.",
    spokenHint: "You pay 65 percent of the marked price. 200 times 0.65 equals 130 dollars.",
    diagramData: { type: 'tag', marked: "$200", off: "35%", sale: "?" }
  },
  {
    worldIndex: 0, qIndex: 9,
    rule: RULES.sale,
    prompt: "A desk lamp is marked at $24 with a 25% discount. What is the sale price?",
    spokenPrompt: "A desk lamp is marked at 24 dollars with a 25 percent discount. What is the sale price?",
    options: ["$18", "$16", "$20", "$22"],
    correctIndex: 0,
    explanation: "25% of $24 is one-quarter of $24 = $6. Sale price = $24 − $6 = $18.",
    hint: "25% off is one quarter off. 24 divided by 4 is 6 dollars off.",
    spokenHint: "25 percent off is one quarter off. 24 divided by 4 is 6 dollars off.",
    diagramData: { type: 'tag', marked: "$24", off: "25%", sale: "?" }
  },

  /* -----------------------------------------------------------------------
     WORLD 2: Savings Square (Finding Discount Amount)
     ----------------------------------------------------------------------- */
  {
    worldIndex: 1, qIndex: 0,
    rule: RULES.amount,
    prompt: "Jeans are marked at $60 in a 30% off sale. How much money do you save?",
    spokenPrompt: "Jeans are marked at 60 dollars in a 30 percent off sale. How much money do you save?",
    options: ["$18", "$15", "$20", "$24"],
    correctIndex: 0,
    explanation: "Savings = 30% of $60 = 0.3 × 60 = $18.",
    hint: "Multiply 60 dollars by 0.3 to find the savings amount.",
    spokenHint: "Multiply 60 dollars by 0.3 to find the savings amount.",
    diagramData: { type: 'bar', pct: 30 }
  },
  {
    worldIndex: 1, qIndex: 1,
    rule: RULES.amount,
    prompt: "A laptop bag is marked at $40 with a 25% discount. How much money is taken off?",
    spokenPrompt: "A laptop bag is marked at 40 dollars with a 25 percent discount. How much money is taken off?",
    options: ["$10", "$8", "$12", "$15"],
    correctIndex: 0,
    explanation: "25% of $40 is one-quarter of $40 = $10.",
    hint: "To find 25% of 40 dollars, divide 40 by 4.",
    spokenHint: "To find 25 percent of 40 dollars, divide 40 by 4.",
    diagramData: { type: 'bar', pct: 25 }
  },
  {
    worldIndex: 1, qIndex: 2,
    rule: RULES.amount,
    prompt: "A basketball is marked at $30 with a 10% discount. How much do you save?",
    spokenPrompt: "A basketball is marked at 30 dollars with a 10 percent discount. How much do you save?",
    options: ["$3", "$2", "$4", "$5"],
    correctIndex: 0,
    explanation: "10% of $30 = $30 ÷ 10 = $3.",
    hint: "10% is found simply by dividing the price by 10.",
    spokenHint: "10 percent is found simply by dividing the price by 10.",
    diagramData: { type: 'bar', pct: 10 }
  },
  {
    worldIndex: 1, qIndex: 3,
    rule: RULES.amount,
    prompt: "A tennis racket is marked at $80 with a 40% discount. What is the discount amount?",
    spokenPrompt: "A tennis racket is marked at 80 dollars with a 40 percent discount. What is the discount amount?",
    options: ["$32", "$30", "$35", "$40"],
    correctIndex: 0,
    explanation: "40% of $80 = 0.4 × 80 = $32.",
    hint: "Multiply 80 dollars by 0.4 to calculate the discount amount.",
    spokenHint: "Multiply 80 dollars by 0.4 to calculate the discount amount.",
    diagramData: { type: 'bar', pct: 40 }
  },
  {
    worldIndex: 1, qIndex: 4,
    rule: RULES.amount,
    prompt: "A board game is marked at $50 with a 20% discount. How much money is saved?",
    spokenPrompt: "A board game is marked at 50 dollars with a 20 percent discount. How much money is saved?",
    options: ["$10", "$12", "$15", "$8"],
    correctIndex: 0,
    explanation: "20% of $50 = 0.2 × 50 = $10.",
    hint: "20% is one-fifth. 50 divided by 5 is 10 dollars.",
    spokenHint: "20 percent is one-fifth. 50 divided by 5 is 10 dollars.",
    diagramData: { type: 'bar', pct: 20 }
  },
  {
    worldIndex: 1, qIndex: 5,
    rule: RULES.amount,
    prompt: "Sunglasses marked at $90 are 50% off. What is the discount amount?",
    spokenPrompt: "Sunglasses marked at 90 dollars are 50 percent off. What is the discount amount?",
    options: ["$45", "$40", "$50", "$35"],
    correctIndex: 0,
    explanation: "50% of $90 is half of $90 = $45.",
    hint: "50% off means half the price is discounted.",
    spokenHint: "50 percent off means half the price is discounted.",
    diagramData: { type: 'bar', pct: 50 }
  },
  {
    worldIndex: 1, qIndex: 6,
    rule: RULES.amount,
    prompt: "An acoustic guitar is marked at $240 with a 15% discount. How much do you save?",
    spokenPrompt: "An acoustic guitar is marked at 240 dollars with a 15 percent discount. How much do you save?",
    options: ["$36", "$32", "$40", "$24"],
    correctIndex: 0,
    explanation: "10% of $240 is $24, 5% is $12. So 15% is $24 + $12 = $36.",
    hint: "Add 10% (24 dollars) and 5% (12 dollars) to get 15% savings.",
    spokenHint: "Add 10 percent (24 dollars) and 5 percent (12 dollars) to get 15 percent savings.",
    diagramData: { type: 'bar', pct: 15 }
  },
  {
    worldIndex: 1, qIndex: 7,
    rule: RULES.amount,
    prompt: "A digital camera is marked at $300 with a 20% discount. What is the discount amount?",
    spokenPrompt: "A digital camera is marked at 300 dollars with a 20 percent discount. What is the discount amount?",
    options: ["$60", "$50", "$70", "$80"],
    correctIndex: 0,
    explanation: "20% of $300 = 0.2 × 300 = $60.",
    hint: "10% of 300 is 30. Double that to find 20%.",
    spokenHint: "10 percent of 300 is 30. Double that to find 20 percent.",
    diagramData: { type: 'bar', pct: 20 }
  },
  {
    worldIndex: 1, qIndex: 8,
    rule: RULES.amount,
    prompt: "A drone is marked at $160 with a 25% discount. How much money do you save?",
    spokenPrompt: "A drone is marked at 160 dollars with a 25 percent discount. How much money do you save?",
    options: ["$40", "$35", "$45", "$50"],
    correctIndex: 0,
    explanation: "25% of $160 = $160 ÷ 4 = $40.",
    hint: "25% is one quarter. Divide 160 by 4 to get 40 dollars.",
    spokenHint: "25 percent is one quarter. Divide 160 by 4 to get 40 dollars.",
    diagramData: { type: 'bar', pct: 25 }
  },
  {
    worldIndex: 1, qIndex: 9,
    rule: RULES.amount,
    prompt: "Winter boots are marked at $110 with a 10% discount. How much money is saved?",
    spokenPrompt: "Winter boots are marked at 110 dollars with a 10 percent discount. How much money is saved?",
    options: ["$11", "$10", "$12", "$15"],
    correctIndex: 0,
    explanation: "10% of $110 = $110 ÷ 10 = $11.",
    hint: "Divide 110 dollars by 10 to find 10% savings.",
    spokenHint: "Divide 110 dollars by 10 to find 10 percent savings.",
    diagramData: { type: 'bar', pct: 10 }
  },

  /* -----------------------------------------------------------------------
     WORLD 3: Multiplier Market (Decimal Multipliers)
     ----------------------------------------------------------------------- */
  {
    worldIndex: 2, qIndex: 0,
    rule: RULES.mult,
    prompt: "What single multiplier calculates the sale price after a 20% discount?",
    spokenPrompt: "What single multiplier calculates the sale price after a 20 percent discount?",
    options: ["0.8", "0.2", "1.2", "0.7"],
    correctIndex: 0,
    explanation: "100% − 20% = 80% to pay. In decimals, 80% is 0.8.",
    hint: "Subtract the discount percentage from 100%, then convert to a decimal.",
    spokenHint: "Subtract the discount percentage from 100 percent, then convert to a decimal.",
    diagramData: null
  },
  {
    worldIndex: 2, qIndex: 1,
    rule: RULES.mult,
    prompt: "What single multiplier calculates the sale price after a 35% discount?",
    spokenPrompt: "What single multiplier calculates the sale price after a 35 percent discount?",
    options: ["0.65", "0.35", "1.35", "0.75"],
    correctIndex: 0,
    explanation: "100% − 35% = 65% to pay. In decimals, 65% = 0.65.",
    hint: "100 minus 35 leaves 65 percent. As a decimal, that is 0.65.",
    spokenHint: "100 minus 35 leaves 65 percent. As a decimal, that is 0.65.",
    diagramData: null
  },
  {
    worldIndex: 2, qIndex: 2,
    rule: RULES.mult,
    prompt: "What single multiplier calculates the sale price after a 15% discount?",
    spokenPrompt: "What single multiplier calculates the sale price after a 15 percent discount?",
    options: ["0.85", "0.15", "1.15", "0.75"],
    correctIndex: 0,
    explanation: "100% − 15% = 85% to pay. As a decimal, 85% = 0.85.",
    hint: "100% minus 15% is 85%. 85% as a decimal is 0.85.",
    spokenHint: "100 percent minus 15 percent is 85 percent. 85 percent as a decimal is 0.85.",
    diagramData: null
  },
  {
    worldIndex: 2, qIndex: 3,
    rule: RULES.mult,
    prompt: "What single multiplier calculates the sale price after a 5% discount?",
    spokenPrompt: "What single multiplier calculates the sale price after a 5 percent discount?",
    options: ["0.95", "0.05", "1.05", "0.9"],
    correctIndex: 0,
    explanation: "100% − 5% = 95% to pay. In decimals, 95% = 0.95.",
    hint: "100 minus 5 is 95 percent. In decimal form, that is 0.95.",
    spokenHint: "100 minus 5 is 95 percent. In decimal form, that is 0.95.",
    diagramData: null
  },
  {
    worldIndex: 2, qIndex: 4,
    rule: RULES.mult,
    prompt: "A sweater marked at $70 has 30% off. Which multiplication gives the sale price?",
    spokenPrompt: "A sweater marked at 70 dollars has 30 percent off. Which multiplication gives the sale price?",
    options: ["$70 × 0.7", "$70 × 0.3", "$70 × 1.3", "$70 × 0.6"],
    correctIndex: 0,
    explanation: "30% off means you pay 70%, so multiply $70 by 0.7.",
    hint: "You pay 70 percent of the price, so multiply by 0.7.",
    spokenHint: "You pay 70 percent of the price, so multiply by 0.7.",
    diagramData: null
  },
  {
    worldIndex: 2, qIndex: 5,
    rule: RULES.mult,
    prompt: "If the multiplier for a sale price is 0.75, what was the discount percentage?",
    spokenPrompt: "If the multiplier for a sale price is 0.75, what was the discount percentage?",
    options: ["25%", "75%", "15%", "35%"],
    correctIndex: 0,
    explanation: "0.75 means paying 75%. 100% − 75% = 25% discount.",
    hint: "Subtract the percentage you pay (75%) from 100% to find the discount.",
    spokenHint: "Subtract the percentage you pay (75 percent) from 100 percent to find the discount.",
    diagramData: null
  },
  {
    worldIndex: 2, qIndex: 6,
    rule: RULES.mult,
    prompt: "If the multiplier for a sale price is 0.6, what was the discount percentage?",
    spokenPrompt: "If the multiplier for a sale price is 0.6, what was the discount percentage?",
    options: ["40%", "60%", "20%", "30%"],
    correctIndex: 0,
    explanation: "0.6 means paying 60%. 100% − 60% = 40% discount.",
    hint: "100% − 60% = 40% discount.",
    spokenHint: "100 percent minus 60 percent equals 40 percent discount.",
    diagramData: null
  },
  {
    worldIndex: 2, qIndex: 7,
    rule: RULES.mult,
    prompt: "If the multiplier for a sale price is 0.82, what was the discount percentage?",
    spokenPrompt: "If the multiplier for a sale price is 0.82, what was the discount percentage?",
    options: ["18%", "82%", "12%", "28%"],
    correctIndex: 0,
    explanation: "0.82 means paying 82%. 100% − 82% = 18% discount.",
    hint: "100 minus 82 gives the discount percentage.",
    spokenHint: "100 minus 82 gives the discount percentage.",
    diagramData: null
  },
  {
    worldIndex: 2, qIndex: 8,
    rule: RULES.mult,
    prompt: "Using the multiplier shortcut, what is the sale price of a $40 scarf at 10% off?",
    spokenPrompt: "Using the multiplier shortcut, what is the sale price of a 40 dollar scarf at 10 percent off?",
    options: ["$36", "$34", "$38", "$32"],
    correctIndex: 0,
    explanation: "Multiplier = 0.9. $40 × 0.9 = $36.",
    hint: "Multiply 40 dollars directly by 0.9.",
    spokenHint: "Multiply 40 dollars directly by 0.9.",
    diagramData: { type: 'tag', marked: "$40", off: "10%", sale: "?" }
  },
  {
    worldIndex: 2, qIndex: 9,
    rule: RULES.mult,
    prompt: "Using the multiplier shortcut, what is the sale price of an $80 jacket at 45% off?",
    spokenPrompt: "Using the multiplier shortcut, what is the sale price of an 80 dollar jacket at 45 percent off?",
    options: ["$44", "$40", "$48", "$36"],
    correctIndex: 0,
    explanation: "Multiplier = 1 − 0.45 = 0.55. $80 × 0.55 = $44.",
    hint: "100% − 45% = 55% to pay. Multiply 80 dollars by 0.55.",
    spokenHint: "100 percent minus 45 percent is 55 percent to pay. Multiply 80 dollars by 0.55.",
    diagramData: { type: 'tag', marked: "$80", off: "45%", sale: "?" }
  },

  /* -----------------------------------------------------------------------
     WORLD 4: Percent-Off Plaza (Finding Discount Percentage)
     ----------------------------------------------------------------------- */
  {
    worldIndex: 3, qIndex: 0,
    rule: RULES.pct,
    prompt: "A bike marked at $250 sells for $175. What is the discount percentage?",
    spokenPrompt: "A bike marked at 250 dollars sells for 175 dollars. What is the discount percentage?",
    options: ["30%", "25%", "35%", "40%"],
    correctIndex: 0,
    explanation: "Discount = $250 − $175 = $75. Percentage = (75 ÷ 250) × 100 = 30%.",
    hint: "Find the savings (75 dollars), then divide by marked price (250 dollars) and multiply by 100.",
    spokenHint: "Find the savings (75 dollars), then divide by marked price (250 dollars) and multiply by 100.",
    diagramData: { type: 'tag', marked: "$250", off: "?%", sale: "$175" }
  },
  {
    worldIndex: 3, qIndex: 1,
    rule: RULES.pct,
    prompt: "A winter jacket marked at $120 sells for $78. What is the discount percentage?",
    spokenPrompt: "A winter jacket marked at 120 dollars sells for 78 dollars. What is the discount percentage?",
    options: ["35%", "30%", "40%", "25%"],
    correctIndex: 0,
    explanation: "Discount = $120 − $78 = $42. Percentage = (42 ÷ 120) × 100 = 35%.",
    hint: "Savings = 42 dollars. 42 divided by 120 is 0.35, which is 35%.",
    spokenHint: "Savings equals 42 dollars. 42 divided by 120 is 0.35, which is 35 percent.",
    diagramData: { type: 'tag', marked: "$120", off: "?%", sale: "$78" }
  },
  {
    worldIndex: 3, qIndex: 2,
    rule: RULES.pct,
    prompt: "A shirt marked at $40 sells for $32. What is the discount percentage?",
    spokenPrompt: "A shirt marked at 40 dollars sells for 32 dollars. What is the discount percentage?",
    options: ["20%", "25%", "15%", "10%"],
    correctIndex: 0,
    explanation: "Discount = $40 − $32 = $8. (8 ÷ 40) × 100 = 20%.",
    hint: "Discount is 8 dollars. 8 out of 40 is 1 out of 5, which is 20%.",
    spokenHint: "Discount is 8 dollars. 8 out of 40 is 1 out of 5, which is 20 percent.",
    diagramData: { type: 'tag', marked: "$40", off: "?%", sale: "$32" }
  },
  {
    worldIndex: 3, qIndex: 3,
    rule: RULES.pct,
    prompt: "A pair of shoes marked at $80 is discounted by $20. What is the discount percentage?",
    spokenPrompt: "A pair of shoes marked at 80 dollars is discounted by 20 dollars. What is the discount percentage?",
    options: ["25%", "20%", "30%", "15%"],
    correctIndex: 0,
    explanation: "Discount percentage = (20 ÷ 80) × 100 = 25%.",
    hint: "20 divided by 80 is 0.25, which is 25%.",
    spokenHint: "20 divided by 80 is 0.25, which is 25 percent.",
    diagramData: { type: 'tag', marked: "$80", off: "?%", sale: "$60" }
  },
  {
    worldIndex: 3, qIndex: 4,
    rule: RULES.pct,
    prompt: "A gaming mouse marked at $50 is discounted by $15. What is the discount percentage?",
    spokenPrompt: "A gaming mouse marked at 50 dollars is discounted by 15 dollars. What is the discount percentage?",
    options: ["30%", "25%", "35%", "20%"],
    correctIndex: 0,
    explanation: "Discount percentage = (15 ÷ 50) × 100 = 30%.",
    hint: "15 divided by 50 is 30 out of 100, which is 30%.",
    spokenHint: "15 divided by 50 is 30 out of 100, which is 30 percent.",
    diagramData: { type: 'tag', marked: "$50", off: "?%", sale: "$35" }
  },
  {
    worldIndex: 3, qIndex: 5,
    rule: RULES.pct,
    prompt: "A scooter marked at $150 sells for $90. What is the discount percentage?",
    spokenPrompt: "A scooter marked at 150 dollars sells for 90 dollars. What is the discount percentage?",
    options: ["40%", "50%", "35%", "45%"],
    correctIndex: 0,
    explanation: "Discount = $150 − $90 = $60. (60 ÷ 150) × 100 = 40%.",
    hint: "Saved 60 dollars out of 150. 60 divided by 150 is 0.4, or 40%.",
    spokenHint: "Saved 60 dollars out of 150. 60 divided by 150 is 0.4, or 40 percent.",
    diagramData: { type: 'tag', marked: "$150", off: "?%", sale: "$90" }
  },
  {
    worldIndex: 3, qIndex: 6,
    rule: RULES.pct,
    prompt: "A book marked at $20 sells for $17. What is the discount percentage?",
    spokenPrompt: "A book marked at 20 dollars sells for 17 dollars. What is the discount percentage?",
    options: ["15%", "10%", "20%", "25%"],
    correctIndex: 0,
    explanation: "Discount = $20 − $17 = $3. (3 ÷ 20) × 100 = 15%.",
    hint: "Discount is 3 dollars. 3 divided by 20 is 0.15, which is 15%.",
    spokenHint: "Discount is 3 dollars. 3 divided by 20 is 0.15, which is 15 percent.",
    diagramData: { type: 'tag', marked: "$20", off: "?%", sale: "$17" }
  },
  {
    worldIndex: 3, qIndex: 7,
    rule: RULES.pct,
    prompt: "A watch marked at $200 sells for $150. What is the discount percentage?",
    spokenPrompt: "A watch marked at 200 dollars sells for 150 dollars. What is the discount percentage?",
    options: ["25%", "30%", "20%", "35%"],
    correctIndex: 0,
    explanation: "Discount = $200 − $150 = $50. (50 ÷ 200) × 100 = 25%.",
    hint: "50 dollars off 200 dollars is one quarter off, or 25%.",
    spokenHint: "50 dollars off 200 dollars is one quarter off, or 25 percent.",
    diagramData: { type: 'tag', marked: "$200", off: "?%", sale: "$150" }
  },
  {
    worldIndex: 3, qIndex: 8,
    rule: RULES.pct,
    prompt: "A tablet marked at $300 sells for $210. What is the discount percentage?",
    spokenPrompt: "A tablet marked at 300 dollars sells for 210 dollars. What is the discount percentage?",
    options: ["30%", "35%", "25%", "40%"],
    correctIndex: 0,
    explanation: "Discount = $300 − $210 = $90. (90 ÷ 300) × 100 = 30%.",
    hint: "Savings is 90 dollars. 90 divided by 300 equals 0.3, or 30%.",
    spokenHint: "Savings is 90 dollars. 90 divided by 300 equals 0.3, or 30 percent.",
    diagramData: { type: 'tag', marked: "$300", off: "?%", sale: "$210" }
  },
  {
    worldIndex: 3, qIndex: 9,
    rule: RULES.pct,
    prompt: "A skateboard marked at $80 sells for $48. What is the discount percentage?",
    spokenPrompt: "A skateboard marked at 80 dollars sells for 48 dollars. What is the discount percentage?",
    options: ["40%", "45%", "35%", "50%"],
    correctIndex: 0,
    explanation: "Discount = $80 − $48 = $32. (32 ÷ 80) × 100 = 40%.",
    hint: "Discount is 32 dollars. 32 divided by 80 equals 0.4, or 40%.",
    spokenHint: "Discount is 32 dollars. 32 divided by 80 equals 0.4, or 40 percent.",
    diagramData: { type: 'tag', marked: "$80", off: "?%", sale: "$48" }
  },

  /* -----------------------------------------------------------------------
     WORLD 5: Clearance Corner (Cart / Multi-Item Discounts)
     ----------------------------------------------------------------------- */
  {
    worldIndex: 4, qIndex: 0,
    rule: RULES.cart,
    prompt: "Alex buys a $40 T-shirt at 10% off and $60 jeans at 30% off. What is the total paid?",
    spokenPrompt: "Alex buys a 40 dollar T-shirt at 10 percent off and 60 dollar jeans at 30 percent off. What is the total paid?",
    options: ["$78", "$80", "$75", "$82"],
    correctIndex: 0,
    explanation: "T-shirt: $40 × 0.9 = $36. Jeans: $60 × 0.7 = $42. Total paid = $36 + $42 = $78.",
    hint: "Calculate each discounted item separately: 36 dollars plus 42 dollars.",
    spokenHint: "Calculate each discounted item separately: 36 dollars plus 42 dollars.",
    diagramData: null
  },
  {
    worldIndex: 4, qIndex: 1,
    rule: RULES.cart,
    prompt: "For Alex's cart ($40 T-shirt at 10% off and $60 jeans at 30% off), how much money was saved altogether?",
    spokenPrompt: "For Alex's cart (40 dollar T-shirt at 10 percent off and 60 dollar jeans at 30 percent off), how much money was saved altogether?",
    options: ["$22", "$20", "$25", "$18"],
    correctIndex: 0,
    explanation: "Total marked = $40 + $60 = $100. Total paid = $78. Total saved = $100 − $78 = $22.",
    hint: "Total marked price was 100 dollars. Subtract the 78 dollars paid to get savings.",
    spokenHint: "Total marked price was 100 dollars. Subtract the 78 dollars paid to get savings.",
    diagramData: null
  },
  {
    worldIndex: 4, qIndex: 2,
    rule: RULES.cart,
    prompt: "What is the overall percentage discount on Alex's entire $100 cart?",
    spokenPrompt: "What is the overall percentage discount on Alex's entire 100 dollar cart?",
    options: ["22%", "20%", "25%", "24%"],
    correctIndex: 0,
    explanation: "Overall % = (Total saved ÷ Total marked) × 100 = ($22 ÷ $100) × 100 = 22%. (Notice it is not the average of 10% and 30%!)",
    hint: "Divide total saved (22 dollars) by total marked price (100 dollars).",
    spokenHint: "Divide total saved (22 dollars) by total marked price (100 dollars).",
    diagramData: null
  },
  {
    worldIndex: 4, qIndex: 3,
    rule: RULES.cart,
    prompt: "Maya buys trainers marked at $90 with 20% off and socks marked at $10 with 50% off. What is the total paid?",
    spokenPrompt: "Maya buys trainers marked at 90 dollars with 20 percent off and socks marked at 10 dollars with 50 percent off. What is the total paid?",
    options: ["$77", "$75", "$80", "$72"],
    correctIndex: 0,
    explanation: "Trainers: $90 × 0.8 = $72. Socks: $10 × 0.5 = $5. Total paid = $72 + $5 = $77.",
    hint: "Trainers cost 72 dollars, and socks cost 5 dollars. Add them together.",
    spokenHint: "Trainers cost 72 dollars, and socks cost 5 dollars. Add them together.",
    diagramData: null
  },
  {
    worldIndex: 4, qIndex: 4,
    rule: RULES.cart,
    prompt: "In Maya's purchase of $100 total marked price ($77 paid), what is the overall discount percentage?",
    spokenPrompt: "In Maya's purchase of 100 dollars total marked price (77 dollars paid), what is the overall discount percentage?",
    options: ["23%", "25%", "20%", "22%"],
    correctIndex: 0,
    explanation: "Total saved = $100 − $77 = $23. ($23 ÷ $100) × 100 = 23%.",
    hint: "Maya saved 23 dollars out of 100 dollars, which is 23%.",
    spokenHint: "Maya saved 23 dollars out of 100 dollars, which is 23 percent.",
    diagramData: null
  },
  {
    worldIndex: 4, qIndex: 5,
    rule: RULES.cart,
    prompt: "Liam buys a $30 backpack at 10% off and a $50 desk lamp at 40% off. What is the total paid?",
    spokenPrompt: "Liam buys a 30 dollar backpack at 10 percent off and a 50 dollar desk lamp at 40 percent off. What is the total paid?",
    options: ["$57", "$55", "$60", "$52"],
    correctIndex: 0,
    explanation: "Backpack: $30 × 0.9 = $27. Desk lamp: $50 × 0.6 = $30. Total = $27 + $30 = $57.",
    hint: "Backpack is 27 dollars and lamp is 30 dollars. Total is 57 dollars.",
    spokenHint: "Backpack is 27 dollars and lamp is 30 dollars. Total is 57 dollars.",
    diagramData: null
  },
  {
    worldIndex: 4, qIndex: 6,
    rule: RULES.cart,
    prompt: "For Liam's cart ($30 backpack + $50 lamp = $80 marked), how much money was saved in total?",
    spokenPrompt: "For Liam's cart (30 dollar backpack plus 50 dollar lamp equals 80 dollars marked), how much money was saved in total?",
    options: ["$23", "$20", "$25", "$27"],
    correctIndex: 0,
    explanation: "Marked total = $80. Paid total = $57. Savings = $80 − $57 = $23.",
    hint: "Subtract the paid price of 57 dollars from the marked total of 80 dollars.",
    spokenHint: "Subtract the paid price of 57 dollars from the marked total of 80 dollars.",
    diagramData: null
  },
  {
    worldIndex: 4, qIndex: 7,
    rule: RULES.cart,
    prompt: "Emma buys 3 shirts marked at $20 each. A store deal offers 25% off the entire bundle. What is the total paid?",
    spokenPrompt: "Emma buys 3 shirts marked at 20 dollars each. A store deal offers 25 percent off the entire bundle. What is the total paid?",
    options: ["$45", "$40", "$50", "$48"],
    correctIndex: 0,
    explanation: "Total marked = 3 × $20 = $60. 25% off leaves 75%: $60 × 0.75 = $45.",
    hint: "Total marked price is 60 dollars. 75% of 60 dollars is 45 dollars.",
    spokenHint: "Total marked price is 60 dollars. 75 percent of 60 dollars is 45 dollars.",
    diagramData: null
  },
  {
    worldIndex: 4, qIndex: 8,
    rule: RULES.cart,
    prompt: "Jack buys a $120 tennis racket at 25% off and a $10 pack of tennis balls at 10% off. What is the total paid?",
    spokenPrompt: "Jack buys a 120 dollar tennis racket at 25 percent off and a 10 dollar pack of tennis balls at 10 percent off. What is the total paid?",
    options: ["$99", "$95", "$102", "$90"],
    correctIndex: 0,
    explanation: "Racket: $120 × 0.75 = $90. Balls: $10 × 0.9 = $9. Total = $90 + $9 = $99.",
    hint: "Racket is 90 dollars, balls are 9 dollars. 90 plus 9 equals 99 dollars.",
    spokenHint: "Racket is 90 dollars, balls are 9 dollars. 90 plus 9 equals 99 dollars.",
    diagramData: null
  },
  {
    worldIndex: 4, qIndex: 9,
    rule: RULES.cart,
    prompt: "Chloe buys two books marked at $15 each with 20% off and a pen marked at $10 with 30% off. What is the total paid?",
    spokenPrompt: "Chloe buys two books marked at 15 dollars each with 20 percent off and a pen marked at 10 dollars with 30 percent off. What is the total paid?",
    options: ["$31", "$28", "$33", "$35"],
    correctIndex: 0,
    explanation: "Books: 2 × $15 = $30; $30 × 0.8 = $24. Pen: $10 × 0.7 = $7. Total = $24 + $7 = $31.",
    hint: "Two books are 24 dollars after discount, and the pen is 7 dollars. 24 plus 7 is 31 dollars.",
    spokenHint: "Two books are 24 dollars after discount, and the pen is 7 dollars. 24 plus 7 is 31 dollars.",
    diagramData: null
  },

  /* -----------------------------------------------------------------------
     WORLD 6: Torn Tag Town (Working Backwards to Find Marked Price)
     ----------------------------------------------------------------------- */
  {
    worldIndex: 5, qIndex: 0,
    rule: RULES.reverse,
    prompt: "A video game costs $45 after a 25% discount. What was the original marked price?",
    spokenPrompt: "A video game costs 45 dollars after a 25 percent discount. What was the original marked price?",
    options: ["$60", "$56.25", "$65", "$70"],
    correctIndex: 0,
    explanation: "You paid 75% of marked price. Marked = $45 ÷ 0.75 = $60. (Never just add 25% of $45 back!)",
    hint: "Divide the sale price by 0.75, because 45 dollars represents 75% of the marked price.",
    spokenHint: "Divide the sale price by 0.75, because 45 dollars represents 75 percent of the marked price.",
    diagramData: { type: 'chain', nodes: [{ label: "?", caption: "marked" }, { label: "$45", caption: "paid" }], edges: ["−25% (×0.75)"] }
  },
  {
    worldIndex: 5, qIndex: 1,
    rule: RULES.reverse,
    prompt: "A jacket costs $72 after a 20% discount. What was the original marked price?",
    spokenPrompt: "A jacket costs 72 dollars after a 20 percent discount. What was the original marked price?",
    options: ["$90", "$86.40", "$95", "$85"],
    correctIndex: 0,
    explanation: "20% off leaves 80% to pay. Marked = $72 ÷ 0.8 = $90.",
    hint: "Divide 72 dollars by 0.8 to reverse the 20% discount.",
    spokenHint: "Divide 72 dollars by 0.8 to reverse the 20 percent discount.",
    diagramData: { type: 'chain', nodes: [{ label: "?", caption: "marked" }, { label: "$72", caption: "paid" }], edges: ["−20% (×0.8)"] }
  },
  {
    worldIndex: 5, qIndex: 2,
    rule: RULES.reverse,
    prompt: "A pair of sneakers costs $68 after a 15% discount. What was the original marked price?",
    spokenPrompt: "A pair of sneakers costs 68 dollars after a 15 percent discount. What was the original marked price?",
    options: ["$80", "$78.20", "$85", "$75"],
    correctIndex: 0,
    explanation: "You paid 85%. Marked = $68 ÷ 0.85 = $80.",
    hint: "Divide 68 dollars by 0.85.",
    spokenHint: "Divide 68 dollars by 0.85.",
    diagramData: { type: 'chain', nodes: [{ label: "?", caption: "marked" }, { label: "$68", caption: "paid" }], edges: ["−15% (×0.85)"] }
  },
  {
    worldIndex: 5, qIndex: 3,
    rule: RULES.reverse,
    prompt: "A smartphone costs $240 after a 40% discount. What was the original marked price?",
    spokenPrompt: "A smartphone costs 240 dollars after a 40 percent discount. What was the original marked price?",
    options: ["$400", "$336", "$380", "$420"],
    correctIndex: 0,
    explanation: "You paid 60% of marked price. Marked = $240 ÷ 0.6 = $400.",
    hint: "Divide 240 dollars by 0.6.",
    spokenHint: "Divide 240 dollars by 0.6.",
    diagramData: { type: 'chain', nodes: [{ label: "?", caption: "marked" }, { label: "$240", caption: "paid" }], edges: ["−40% (×0.6)"] }
  },
  {
    worldIndex: 5, qIndex: 4,
    rule: RULES.reverse,
    prompt: "A backpack costs $35 after a 30% discount. What was the original marked price?",
    spokenPrompt: "A backpack costs 35 dollars after a 30 percent discount. What was the original marked price?",
    options: ["$50", "$45.50", "$55", "$48"],
    correctIndex: 0,
    explanation: "You paid 70%. Marked = $35 ÷ 0.7 = $50.",
    hint: "Divide 35 dollars by 0.7.",
    spokenHint: "Divide 35 dollars by 0.7.",
    diagramData: { type: 'chain', nodes: [{ label: "?", caption: "marked" }, { label: "$35", caption: "paid" }], edges: ["−30% (×0.7)"] }
  },
  {
    worldIndex: 5, qIndex: 5,
    rule: RULES.reverse,
    prompt: "A scooter costs $84 after a 30% discount. What was the original marked price?",
    spokenPrompt: "A scooter costs 84 dollars after a 30 percent discount. What was the original marked price?",
    options: ["$120", "$109.20", "$115", "$130"],
    correctIndex: 0,
    explanation: "Marked = $84 ÷ 0.7 = $120.",
    hint: "84 divided by 0.7 equals 120 dollars.",
    spokenHint: "84 divided by 0.7 equals 120 dollars.",
    diagramData: { type: 'chain', nodes: [{ label: "?", caption: "marked" }, { label: "$84", caption: "paid" }], edges: ["−30% (×0.7)"] }
  },
  {
    worldIndex: 5, qIndex: 6,
    rule: RULES.reverse,
    prompt: "A bicycle costs $160 after a 20% discount. What was the original marked price?",
    spokenPrompt: "A bicycle costs 160 dollars after a 20 percent discount. What was the original marked price?",
    options: ["$200", "$192", "$210", "$220"],
    correctIndex: 0,
    explanation: "Marked = $160 ÷ 0.8 = $200.",
    hint: "Divide 160 by 0.8.",
    spokenHint: "Divide 160 by 0.8.",
    diagramData: { type: 'chain', nodes: [{ label: "?", caption: "marked" }, { label: "$160", caption: "paid" }], edges: ["−20% (×0.8)"] }
  },
  {
    worldIndex: 5, qIndex: 7,
    rule: RULES.reverse,
    prompt: "A winter coat costs $105 after a 30% discount. What was the original marked price?",
    spokenPrompt: "A winter coat costs 105 dollars after a 30 percent discount. What was the original marked price?",
    options: ["$150", "$136.50", "$145", "$160"],
    correctIndex: 0,
    explanation: "Marked = $105 ÷ 0.7 = $150.",
    hint: "Divide 105 by 0.7.",
    spokenHint: "Divide 105 by 0.7.",
    diagramData: { type: 'chain', nodes: [{ label: "?", caption: "marked" }, { label: "$105", caption: "paid" }], edges: ["−30% (×0.7)"] }
  },
  {
    worldIndex: 5, qIndex: 8,
    rule: RULES.reverse,
    prompt: "A watch costs $75 after a 50% discount. What was the original marked price?",
    spokenPrompt: "A watch costs 75 dollars after a 50 percent discount. What was the original marked price?",
    options: ["$150", "$112.50", "$125", "$175"],
    correctIndex: 0,
    explanation: "Marked = $75 ÷ 0.5 = $150 (double $75).",
    hint: "If 50% off is 75 dollars, the original price was double 75 dollars.",
    spokenHint: "If 50 percent off is 75 dollars, the original price was double 75 dollars.",
    diagramData: { type: 'chain', nodes: [{ label: "?", caption: "marked" }, { label: "$75", caption: "paid" }], edges: ["−50% (×0.5)"] }
  },
  {
    worldIndex: 5, qIndex: 9,
    rule: RULES.reverse,
    prompt: "A skateboard costs $54 after a 10% discount. What was the original marked price?",
    spokenPrompt: "A skateboard costs 54 dollars after a 10 percent discount. What was the original marked price?",
    options: ["$60", "$59.40", "$65", "$70"],
    correctIndex: 0,
    explanation: "Marked = $54 ÷ 0.9 = $60.",
    hint: "Divide 54 by 0.9.",
    spokenHint: "Divide 54 by 0.9.",
    diagramData: { type: 'chain', nodes: [{ label: "?", caption: "marked" }, { label: "$54", caption: "paid" }], edges: ["−10% (×0.9)"] }
  },

  /* -----------------------------------------------------------------------
     WORLD 7: Double Deal Dock (Successive Discounts)
     ----------------------------------------------------------------------- */
  {
    worldIndex: 6, qIndex: 0,
    rule: RULES.stack,
    prompt: "An item gets 20% off, then another 20% off the reduced price. What is the overall percentage discount?",
    spokenPrompt: "An item gets 20 percent off, then another 20 percent off the reduced price. What is the overall percentage discount?",
    options: ["36%", "40%", "32%", "38%"],
    correctIndex: 0,
    explanation: "Multiplier = 0.8 × 0.8 = 0.64. You pay 64%, so overall discount = 100% − 64% = 36% (not 40%!).",
    hint: "Multiply the multipliers: 0.8 times 0.8 equals 0.64, leaving a 36% discount.",
    spokenHint: "Multiply the multipliers: 0.8 times 0.8 equals 0.64, leaving a 36 percent discount.",
    diagramData: { type: 'chain', nodes: [{ label: "100%" }, { label: "80%" }, { label: "64%" }], edges: ["×0.8", "×0.8"] }
  },
  {
    worldIndex: 6, qIndex: 1,
    rule: RULES.stack,
    prompt: "A $200 pair of sneakers has 20% off, then an extra 20% off at checkout. What is the final price?",
    spokenPrompt: "A 200 dollar pair of sneakers has 20 percent off, then an extra 20 percent off at checkout. What is the final price?",
    options: ["$128", "$120", "$132", "$140"],
    correctIndex: 0,
    explanation: "First discount: $200 × 0.8 = $160. Second discount: $160 × 0.8 = $128.",
    hint: "200 times 0.8 is 160. Then 160 times 0.8 is 128 dollars.",
    spokenHint: "200 times 0.8 is 160. Then 160 times 0.8 is 128 dollars.",
    diagramData: { type: 'chain', nodes: [{ label: "$200" }, { label: "$160" }, { label: "$128" }], edges: ["×0.8", "×0.8"] }
  },
  {
    worldIndex: 6, qIndex: 2,
    rule: RULES.stack,
    prompt: "An item gets 10% off, then another 10% off. What is the overall percentage discount?",
    spokenPrompt: "An item gets 10 percent off, then another 10 percent off. What is the overall percentage discount?",
    options: ["19%", "20%", "18%", "21%"],
    correctIndex: 0,
    explanation: "Multiplier = 0.9 × 0.9 = 0.81. Discount = 100% − 81% = 19%.",
    hint: "0.9 times 0.9 is 0.81, so you pay 81%, giving a 19% discount.",
    spokenHint: "0.9 times 0.9 is 0.81, so you pay 81 percent, giving a 19 percent discount.",
    diagramData: { type: 'chain', nodes: [{ label: "100%" }, { label: "90%" }, { label: "81%" }], edges: ["×0.9", "×0.9"] }
  },
  {
    worldIndex: 6, qIndex: 3,
    rule: RULES.stack,
    prompt: "A $100 jacket gets 30% off, then an extra 10% off at the register. What is the final price?",
    spokenPrompt: "A 100 dollar jacket gets 30 percent off, then an extra 10 percent off at the register. What is the final price?",
    options: ["$63", "$60", "$65", "$70"],
    correctIndex: 0,
    explanation: "$100 × 0.7 = $70. $70 × 0.9 = $63.",
    hint: "First reduce 100 dollars to 70 dollars, then take 10% off 70 dollars.",
    spokenHint: "First reduce 100 dollars to 70 dollars, then take 10 percent off 70 dollars.",
    diagramData: { type: 'chain', nodes: [{ label: "$100" }, { label: "$70" }, { label: "$63" }], edges: ["×0.7", "×0.9"] }
  },
  {
    worldIndex: 6, qIndex: 4,
    rule: RULES.stack,
    prompt: "An item gets 50% off, then an extra 20% off the sale price. What is the overall discount percentage?",
    spokenPrompt: "An item gets 50 percent off, then an extra 20 percent off the sale price. What is the overall discount percentage?",
    options: ["60%", "70%", "55%", "65%"],
    correctIndex: 0,
    explanation: "Multiplier = 0.5 × 0.8 = 0.4. 100% − 40% = 60% overall discount.",
    hint: "0.5 times 0.8 equals 0.4. Paying 40% means an overall discount of 60%.",
    spokenHint: "0.5 times 0.8 equals 0.4. Paying 40 percent means an overall discount of 60 percent.",
    diagramData: { type: 'chain', nodes: [{ label: "100%" }, { label: "50%" }, { label: "40%" }], edges: ["×0.5", "×0.8"] }
  },
  {
    worldIndex: 6, qIndex: 5,
    rule: RULES.stack,
    prompt: "A $150 tablet has 20% off, followed by a 10% member discount. What is the final price?",
    spokenPrompt: "A 150 dollar tablet has 20 percent off, followed by a 10 percent member discount. What is the final price?",
    options: ["$108", "$105", "$112", "$120"],
    correctIndex: 0,
    explanation: "$150 × 0.8 = $120. Then $120 × 0.9 = $108.",
    hint: "150 times 0.8 is 120 dollars. 120 times 0.9 is 108 dollars.",
    spokenHint: "150 times 0.8 is 120 dollars. 120 times 0.9 is 108 dollars.",
    diagramData: { type: 'chain', nodes: [{ label: "$150" }, { label: "$120" }, { label: "$108" }], edges: ["×0.8", "×0.9"] }
  },
  {
    worldIndex: 6, qIndex: 6,
    rule: RULES.stack,
    prompt: "An item has 25% off, and then an extra 20% off. What is the overall percentage discount?",
    spokenPrompt: "An item has 25 percent off, and then an extra 20 percent off. What is the overall percentage discount?",
    options: ["40%", "45%", "35%", "50%"],
    correctIndex: 0,
    explanation: "Multiplier = 0.75 × 0.8 = 0.6. 100% − 60% = 40% overall discount.",
    hint: "0.75 times 0.8 equals 0.6, which means you pay 60%, saving 40%.",
    spokenHint: "0.75 times 0.8 equals 0.6, which means you pay 60 percent, saving 40 percent.",
    diagramData: { type: 'chain', nodes: [{ label: "100%" }, { label: "75%" }, { label: "60%" }], edges: ["×0.75", "×0.8"] }
  },
  {
    worldIndex: 6, qIndex: 7,
    rule: RULES.stack,
    prompt: "An $80 video game has 25% off, and then an extra 20% off. What is the final price?",
    spokenPrompt: "An 80 dollar video game has 25 percent off, and then an extra 20 percent off. What is the final price?",
    options: ["$48", "$44", "$52", "$50"],
    correctIndex: 0,
    explanation: "$80 × 0.75 = $60. $60 × 0.8 = $48. Or $80 × 0.6 = $48.",
    hint: "80 times 0.75 is 60 dollars, then 60 times 0.8 is 48 dollars.",
    spokenHint: "80 times 0.75 is 60 dollars, then 60 times 0.8 is 48 dollars.",
    diagramData: { type: 'chain', nodes: [{ label: "$80" }, { label: "$60" }, { label: "$48" }], edges: ["×0.75", "×0.8"] }
  },
  {
    worldIndex: 6, qIndex: 8,
    rule: RULES.stack,
    prompt: "A shop takes 40% off, then another 25% off. What is the overall percentage discount?",
    spokenPrompt: "A shop takes 40 percent off, then another 25 percent off. What is the overall percentage discount?",
    options: ["55%", "65%", "50%", "60%"],
    correctIndex: 0,
    explanation: "Multiplier = 0.6 × 0.75 = 0.45. 100% − 45% = 55% overall discount.",
    hint: "0.6 times 0.75 is 0.45. You pay 45%, so the overall discount is 55%.",
    spokenHint: "0.6 times 0.75 is 0.45. You pay 45 percent, so the overall discount is 55 percent.",
    diagramData: { type: 'chain', nodes: [{ label: "100%" }, { label: "60%" }, { label: "45%" }], edges: ["×0.6", "×0.75"] }
  },
  {
    worldIndex: 6, qIndex: 9,
    rule: RULES.stack,
    prompt: "Does applying 20% off then 10% off give the same final price as applying 10% off then 20% off?",
    spokenPrompt: "Does applying 20 percent off then 10 percent off give the same final price as applying 10 percent off then 20 percent off?",
    options: ["Yes, both give 28% off", "No, 20% first is cheaper", "No, 10% first is cheaper", "Yes, both give 30% off"],
    correctIndex: 0,
    explanation: "0.8 × 0.9 = 0.9 × 0.8 = 0.72. Both result in paying 72% (a 28% discount). Order does not matter!",
    hint: "Multiplying numbers in any order gives the same answer: 0.8 times 0.9 equals 0.9 times 0.8.",
    spokenHint: "Multiplying numbers in any order gives the same answer: 0.8 times 0.9 equals 0.9 times 0.8.",
    diagramData: null
  },

  /* -----------------------------------------------------------------------
     WORLD 8: Compare Canyon (Comparing Deals)
     ----------------------------------------------------------------------- */
  {
    worldIndex: 7, qIndex: 0,
    rule: RULES.compare,
    prompt: "Sneakers cost $200. Shop A offers 40% off. Shop B offers 20% off plus an extra 20% off. Which is cheaper, and by how much?",
    spokenPrompt: "Sneakers cost 200 dollars. Shop A offers 40 percent off. Shop B offers 20 percent off plus an extra 20 percent off. Which is cheaper, and by how much?",
    options: ["Shop A, by $8", "Shop B, by $8", "Both are equal", "Shop A, by $10"],
    correctIndex: 0,
    explanation: "Shop A: $200 × 0.6 = $120. Shop B: $200 × 0.8 × 0.8 = $128. Shop A is $8 cheaper.",
    hint: "Shop A is 120 dollars. Shop B is 128 dollars. Shop A is cheaper by 8 dollars.",
    spokenHint: "Shop A is 120 dollars. Shop B is 128 dollars. Shop A is cheaper by 8 dollars.",
    diagramData: { type: 'two', a: { name: "Shop A", marked: "$200", off: "40%", sale: "$120" }, b: { name: "Shop B", marked: "$200", off: "20%+20%", sale: "$128" } }
  },
  {
    worldIndex: 7, qIndex: 1,
    rule: RULES.compare,
    prompt: "A jacket costs $100. Shop A offers 30% off. Shop B offers $25 off. Which is cheaper, and by how much?",
    spokenPrompt: "A jacket costs 100 dollars. Shop A offers 30 percent off. Shop B offers 25 dollars off. Which is cheaper, and by how much?",
    options: ["Shop A, by $5", "Shop B, by $5", "Both are equal", "Shop A, by $10"],
    correctIndex: 0,
    explanation: "Shop A: $100 − $30 = $70. Shop B: $100 − $25 = $75. Shop A is $5 cheaper.",
    hint: "30% of 100 dollars is 30 dollars off, which beats 25 dollars off by 5 dollars.",
    spokenHint: "30 percent of 100 dollars is 30 dollars off, which beats 25 dollars off by 5 dollars.",
    diagramData: null
  },
  {
    worldIndex: 7, qIndex: 2,
    rule: RULES.compare,
    prompt: "A backpack costs $60. Deal A gives 25% off. Deal B gives $12 off. Which deal saves more money?",
    spokenPrompt: "A backpack costs 60 dollars. Deal A gives 25 percent off. Deal B gives 12 dollars off. Which deal saves more money?",
    options: ["Deal A, saves $3 more", "Deal B, saves $3 more", "They save the same", "Deal A, saves $5 more"],
    correctIndex: 0,
    explanation: "Deal A savings: 25% of $60 = $15. Deal B savings: $12. Deal A saves $15 − $12 = $3 more.",
    hint: "25% of 60 dollars is 15 dollars. Compare 15 dollars with 12 dollars.",
    spokenHint: "25 percent of 60 dollars is 15 dollars. Compare 15 dollars with 12 dollars.",
    diagramData: null
  },
  {
    worldIndex: 7, qIndex: 3,
    rule: RULES.compare,
    prompt: "A $150 bicycle. Shop A offers 20% off. Shop B offers 10% off plus another 10% off. Which shop is cheaper?",
    spokenPrompt: "A 150 dollar bicycle. Shop A offers 20 percent off. Shop B offers 10 percent off plus another 10 percent off. Which shop is cheaper?",
    options: ["Shop A, by $1.50", "Shop B, by $1.50", "Both are equal", "Shop A, by $5.00"],
    correctIndex: 0,
    explanation: "Shop A: $150 × 0.8 = $120. Shop B: $150 × 0.9 × 0.9 = $121.50. Shop A is $1.50 cheaper.",
    hint: "Shop A is 120 dollars. Shop B is 121.50. Shop A is 1.50 cheaper.",
    spokenHint: "Shop A is 120 dollars. Shop B is 121 dollars and 50 cents. Shop A is cheaper by 1 dollar and 50 cents.",
    diagramData: null
  },
  {
    worldIndex: 7, qIndex: 4,
    rule: RULES.compare,
    prompt: "An $80 pair of headphones. Coupon 1 gives 20% off. Coupon 2 gives $15 off. Which coupon saves more?",
    spokenPrompt: "An 80 dollar pair of headphones. Coupon 1 gives 20 percent off. Coupon 2 gives 15 dollars off. Which coupon saves more?",
    options: ["Coupon 1, saves $1 more", "Coupon 2, saves $1 more", "Both save $15", "Coupon 1, saves $5 more"],
    correctIndex: 0,
    explanation: "Coupon 1 savings = 20% of $80 = $16. Coupon 2 savings = $15. Coupon 1 saves $1 more.",
    hint: "20% of 80 is 16 dollars. Compare 16 dollars with 15 dollars.",
    spokenHint: "20 percent of 80 is 16 dollars. Compare 16 dollars with 15 dollars.",
    diagramData: null
  },
  {
    worldIndex: 7, qIndex: 5,
    rule: RULES.compare,
    prompt: "A sweater costs $40. Store X offers 30% off. Store Y offers Buy One at $40, Get Second at 50% off. For 2 sweaters, which is cheaper?",
    spokenPrompt: "A sweater costs 40 dollars. Store X offers 30 percent off. Store Y offers Buy One at 40 dollars, Get Second at 50 percent off. For 2 sweaters, which is cheaper?",
    options: ["Store X, by $4", "Store Y, by $4", "Both are equal", "Store X, by $8"],
    correctIndex: 0,
    explanation: "Store X: 2 × ($40 × 0.7) = $56. Store Y: $40 + $20 = $60. Store X is $4 cheaper.",
    hint: "Store X is 28 dollars each (56 total). Store Y is 40 plus 20 (60 total).",
    spokenHint: "Store X is 28 dollars each, making 56 total. Store Y is 40 plus 20, making 60 total.",
    diagramData: null
  },
  {
    worldIndex: 7, qIndex: 6,
    rule: RULES.compare,
    prompt: "A $250 tablet. Shop 1 has 30% off. Shop 2 has $70 off. Which is cheaper, and by how much?",
    spokenPrompt: "A 250 dollar tablet. Shop 1 has 30 percent off. Shop 2 has 70 dollars off. Which is cheaper, and by how much?",
    options: ["Shop 1, by $5", "Shop 2, by $5", "Both are equal", "Shop 1, by $10"],
    correctIndex: 0,
    explanation: "Shop 1 savings: 30% of $250 = $75. Shop 2 savings: $70. Shop 1 is $5 cheaper ($175 vs $180).",
    hint: "30% of 250 is 75 dollars off. Shop 1 saves 75 dollars, Shop 2 saves 70 dollars.",
    spokenHint: "30 percent of 250 is 75 dollars off. Shop 1 saves 75 dollars, Shop 2 saves 70 dollars.",
    diagramData: null
  },
  {
    worldIndex: 7, qIndex: 7,
    rule: RULES.compare,
    prompt: "A $120 coat. Deal A gives 35% off. Deal B gives 20% off, then an extra 15% off. Which is cheaper?",
    spokenPrompt: "A 120 dollar coat. Deal A gives 35 percent off. Deal B gives 20 percent off, then an extra 15 percent off. Which is cheaper?",
    options: ["Deal A, by $3.60", "Deal B, by $3.60", "Both are equal", "Deal A, by $5.00"],
    correctIndex: 0,
    explanation: "Deal A: $120 × 0.65 = $78. Deal B: $120 × 0.8 × 0.85 = $81.60. Deal A is $3.60 cheaper.",
    hint: "Deal A leaves 78 dollars. Deal B leaves 81.60. Deal A is 3.60 cheaper.",
    spokenHint: "Deal A leaves 78 dollars. Deal B leaves 81 dollars and 60 cents. Deal A is cheaper by 3 dollars and 60 cents.",
    diagramData: null
  },
  {
    worldIndex: 7, qIndex: 8,
    rule: RULES.compare,
    prompt: "A $50 board game. Option 1 is 15% off. Option 2 is $8 off. Which option saves more money?",
    spokenPrompt: "A 50 dollar board game. Option 1 is 15 percent off. Option 2 is 8 dollars off. Which option saves more money?",
    options: ["Option 2, saves $0.50 more", "Option 1, saves $0.50 more", "They save the same", "Option 2, saves $2.00 more"],
    correctIndex: 0,
    explanation: "Option 1 savings = 0.15 × $50 = $7.50. Option 2 savings = $8.00. Option 2 saves $0.50 more.",
    hint: "15% of 50 is 7.50. 8 dollars is 50 cents more savings.",
    spokenHint: "15 percent of 50 is 7 dollars and 50 cents. 8 dollars is 50 cents more savings.",
    diagramData: null
  },
  {
    worldIndex: 7, qIndex: 9,
    rule: RULES.compare,
    prompt: "A $300 television. Store A offers 25% off. Store B offers $80 off. Which store is cheaper?",
    spokenPrompt: "A 300 dollar television. Store A offers 25 percent off. Store B offers 80 dollars off. Which store is cheaper?",
    options: ["Store B, by $5", "Store A, by $5", "Both are equal", "Store B, by $10"],
    correctIndex: 0,
    explanation: "Store A savings: 25% of $300 = $75 (price = $225). Store B savings: $80 (price = $220). Store B is $5 cheaper.",
    hint: "Store A price is 225 dollars. Store B price is 220 dollars. Store B is 5 dollars cheaper.",
    spokenHint: "Store A price is 225 dollars. Store B price is 220 dollars. Store B is 5 dollars cheaper.",
    diagramData: null
  },

  /* -----------------------------------------------------------------------
     WORLD 9: Tax Tower (Discount Combined with Sales Tax)
     ----------------------------------------------------------------------- */
  {
    worldIndex: 8, qIndex: 0,
    rule: RULES.tax,
    prompt: "A $50 jacket has 20% off, and then 10% sales tax is added. What is the final total?",
    spokenPrompt: "A 50 dollar jacket has 20 percent off, and then 10 percent sales tax is added. What is the final total?",
    options: ["$44", "$45", "$42", "$46"],
    correctIndex: 0,
    explanation: "$50 × 0.8 = $40. Then $40 × 1.1 = $44.",
    hint: "First find the discounted price of 40 dollars, then multiply by 1.1 to add 10% tax.",
    spokenHint: "First find the discounted price of 40 dollars, then multiply by 1.1 to add 10 percent tax.",
    diagramData: { type: 'chain', nodes: [{ label: "$50" }, { label: "$40" }, { label: "$44" }], edges: ["×0.8", "×1.1"] }
  },
  {
    worldIndex: 8, qIndex: 1,
    rule: RULES.tax,
    prompt: "Does calculating discount then tax give the same result as calculating tax then discount?",
    spokenPrompt: "Does calculating discount then tax give the same result as calculating tax then discount?",
    options: ["Yes, multiplication order does not matter", "No, discount first is cheaper", "No, tax first is cheaper", "It depends on the price"],
    correctIndex: 0,
    explanation: "Because a × 0.8 × 1.1 = a × 1.1 × 0.8. Multiplying in any order always gives the exact same result!",
    hint: "Multiplication is commutative: a times b equals b times a.",
    spokenHint: "Multiplication is commutative: a times b equals b times a.",
    diagramData: null
  },
  {
    worldIndex: 8, qIndex: 2,
    rule: RULES.tax,
    prompt: "An $80 camera has 25% off, and then 5% sales tax is added. What is the final price?",
    spokenPrompt: "An 80 dollar camera has 25 percent off, and then 5 percent sales tax is added. What is the final price?",
    options: ["$63", "$60", "$65", "$64"],
    correctIndex: 0,
    explanation: "$80 × 0.75 = $60. Then $60 × 1.05 = $63.",
    hint: "Discounted price is 60 dollars. 5% tax on 60 dollars is 3 dollars, giving 63 dollars.",
    spokenHint: "Discounted price is 60 dollars. 5 percent tax on 60 dollars is 3 dollars, giving 63 dollars.",
    diagramData: { type: 'chain', nodes: [{ label: "$80" }, { label: "$60" }, { label: "$63" }], edges: ["×0.75", "×1.05"] }
  },
  {
    worldIndex: 8, qIndex: 3,
    rule: RULES.tax,
    prompt: "A $100 scooter has 30% off, and then 8% sales tax is added. What is the final price?",
    spokenPrompt: "A 100 dollar scooter has 30 percent off, and then 8 percent sales tax is added. What is the final price?",
    options: ["$75.60", "$78.00", "$72.00", "$74.50"],
    correctIndex: 0,
    explanation: "$100 × 0.7 = $70. $70 × 1.08 = $75.60.",
    hint: "70 dollars times 1.08 equals 75 dollars and 60 cents.",
    spokenHint: "70 dollars times 1.08 equals 75 dollars and 60 cents.",
    diagramData: { type: 'chain', nodes: [{ label: "$100" }, { label: "$70" }, { label: "$75.60" }], edges: ["×0.7", "×1.08"] }
  },
  {
    worldIndex: 8, qIndex: 4,
    rule: RULES.tax,
    prompt: "A $40 pair of shoes has 10% off, and then 10% sales tax is added. What is the final price?",
    spokenPrompt: "A 40 dollar pair of shoes has 10 percent off, and then 10 percent sales tax is added. What is the final price?",
    options: ["$39.60", "$40.00", "$36.00", "$44.00"],
    correctIndex: 0,
    explanation: "$40 × 0.9 = $36. Then $36 × 1.1 = $39.60 (not $40, because tax is on the reduced $36!).",
    hint: "36 dollars times 1.1 is 39 dollars and 60 cents.",
    spokenHint: "36 dollars times 1.1 is 39 dollars and 60 cents.",
    diagramData: { type: 'chain', nodes: [{ label: "$40" }, { label: "$36" }, { label: "$39.60" }], edges: ["×0.9", "×1.1"] }
  },
  {
    worldIndex: 8, qIndex: 5,
    rule: RULES.tax,
    prompt: "A $200 monitor has 15% off, and then 6% sales tax is added. What is the final price?",
    spokenPrompt: "A 200 dollar monitor has 15 percent off, and then 6 percent sales tax is added. What is the final price?",
    options: ["$180.20", "$170.00", "$185.00", "$182.00"],
    correctIndex: 0,
    explanation: "$200 × 0.85 = $170. Then $170 × 1.06 = $180.20.",
    hint: "170 dollars times 1.06 is 180.20.",
    spokenHint: "170 dollars times 1.06 is 180 dollars and 20 cents.",
    diagramData: { type: 'chain', nodes: [{ label: "$200" }, { label: "$170" }, { label: "$180.20" }], edges: ["×0.85", "×1.06"] }
  },
  {
    worldIndex: 8, qIndex: 6,
    rule: RULES.tax,
    prompt: "A $60 backpack has 20% off, and then 5% sales tax is added. What is the final price?",
    spokenPrompt: "A 60 dollar backpack has 20 percent off, and then 5 percent sales tax is added. What is the final price?",
    options: ["$50.40", "$48.00", "$52.00", "$51.20"],
    correctIndex: 0,
    explanation: "$60 × 0.8 = $48. Then $48 × 1.05 = $50.40.",
    hint: "48 dollars times 1.05 is 50.40.",
    spokenHint: "48 dollars times 1.05 is 50 dollars and 40 cents.",
    diagramData: { type: 'chain', nodes: [{ label: "$60" }, { label: "$48" }, { label: "$50.40" }], edges: ["×0.8", "×1.05"] }
  },
  {
    worldIndex: 8, qIndex: 7,
    rule: RULES.tax,
    prompt: "A $120 tennis racket has 40% off, and then 10% sales tax is added. What is the final price?",
    spokenPrompt: "A 120 dollar tennis racket has 40 percent off, and then 10 percent sales tax is added. What is the final price?",
    options: ["$79.20", "$72.00", "$84.00", "$78.50"],
    correctIndex: 0,
    explanation: "$120 × 0.6 = $72. Then $72 × 1.1 = $79.20.",
    hint: "72 dollars times 1.1 is 79.20.",
    spokenHint: "72 dollars times 1.1 is 79 dollars and 20 cents.",
    diagramData: { type: 'chain', nodes: [{ label: "$120" }, { label: "$72" }, { label: "$79.20" }], edges: ["×0.6", "×1.1"] }
  },
  {
    worldIndex: 8, qIndex: 8,
    rule: RULES.tax,
    prompt: "A $25 book has 20% off, and then 8% sales tax is added. What is the final price?",
    spokenPrompt: "A 25 dollar book has 20 percent off, and then 8 percent sales tax is added. What is the final price?",
    options: ["$21.60", "$20.00", "$22.50", "$21.00"],
    correctIndex: 0,
    explanation: "$25 × 0.8 = $20. Then $20 × 1.08 = $21.60.",
    hint: "20 dollars times 1.08 is 21.60.",
    spokenHint: "20 dollars times 1.08 is 21 dollars and 60 cents.",
    diagramData: { type: 'chain', nodes: [{ label: "$25" }, { label: "$20" }, { label: "$21.60" }], edges: ["×0.8", "×1.08"] }
  },
  {
    worldIndex: 8, qIndex: 9,
    rule: RULES.tax,
    prompt: "A $150 guitar has 10% off, and then 8% sales tax is added. What is the final price?",
    spokenPrompt: "A 150 dollar guitar has 10 percent off, and then 8 percent sales tax is added. What is the final price?",
    options: ["$145.80", "$135.00", "$147.20", "$142.50"],
    correctIndex: 0,
    explanation: "$150 × 0.9 = $135. Then $135 × 1.08 = $145.80.",
    hint: "135 dollars times 1.08 is 145.80.",
    spokenHint: "135 dollars times 1.08 is 145 dollars and 80 cents.",
    diagramData: { type: 'chain', nodes: [{ label: "$150" }, { label: "$135" }, { label: "$145.80" }], edges: ["×0.9", "×1.08"] }
  },

  /* -----------------------------------------------------------------------
     WORLD 10: Bargain Champion (Mastery Challenges)
     ----------------------------------------------------------------------- */
  {
    worldIndex: 9, qIndex: 0,
    rule: RULES.mastery,
    prompt: "A store offers 'Buy 2, Get 1 Free' on $30 shirts. If you take 3 shirts, what is the effective percentage discount?",
    spokenPrompt: "A store offers Buy 2, Get 1 Free on 30 dollar shirts. If you take 3 shirts, what is the effective percentage discount?",
    options: ["33.3%", "50%", "25%", "30%"],
    correctIndex: 0,
    explanation: "You receive 3 items worth $90, but pay for 2 ($60). Savings = $30. Percentage = (1 ÷ 3) = 33.3%.",
    hint: "You get 1 free shirt out of 3 total shirts. 1 divided by 3 is 33.3%.",
    spokenHint: "You get 1 free shirt out of 3 total shirts. 1 divided by 3 is 33.3 percent.",
    diagramData: null
  },
  {
    worldIndex: 9, qIndex: 1,
    rule: RULES.mastery,
    prompt: "A store offers 'Buy 1, Get 1 at 50% Off' on $40 jeans. What is the total cost for 2 pairs?",
    spokenPrompt: "A store offers Buy 1, Get 1 at 50 percent Off on 40 dollar jeans. What is the total cost for 2 pairs?",
    options: ["$60", "$50", "$70", "$65"],
    correctIndex: 0,
    explanation: "First pair: $40. Second pair: $40 × 0.5 = $20. Total = $40 + $20 = $60.",
    hint: "First pair is 40 dollars, second is 20 dollars. 40 plus 20 is 60 dollars.",
    spokenHint: "First pair is 40 dollars, second is 20 dollars. 40 plus 20 is 60 dollars.",
    diagramData: null
  },
  {
    worldIndex: 9, qIndex: 2,
    rule: RULES.mastery,
    prompt: "In that 'Buy 1, Get 1 at 50% Off' deal on two $40 jeans ($60 paid), what is the overall discount percentage?",
    spokenPrompt: "In that Buy 1, Get 1 at 50 percent Off deal on two 40 dollar jeans (60 dollars paid), what is the overall discount percentage?",
    options: ["25%", "50%", "30%", "20%"],
    correctIndex: 0,
    explanation: "Total marked = $80. You pay $60, saving $20. ($20 ÷ $80) × 100 = 25%.",
    hint: "Saved 20 dollars out of 80 dollars. 20 divided by 80 is 25%.",
    spokenHint: "Saved 20 dollars out of 80 dollars. 20 divided by 80 is 25 percent.",
    diagramData: null
  },
  {
    worldIndex: 9, qIndex: 3,
    rule: RULES.mastery,
    prompt: "Liam has a $100 budget. A $140 drone is marked 30% off. Can Liam afford it, and how much change is left?",
    spokenPrompt: "Liam has a 100 dollar budget. A 140 dollar drone is marked 30 percent off. Can Liam afford it, and how much change is left?",
    options: ["Yes, $2 change left", "No, $2 short", "Yes, $5 change left", "No, $5 short"],
    correctIndex: 0,
    explanation: "Sale price = $140 × 0.7 = $98. $100 − $98 = $2 change left.",
    hint: "140 times 0.7 is 98 dollars. 100 minus 98 leaves 2 dollars.",
    spokenHint: "140 times 0.7 is 98 dollars. 100 minus 98 leaves 2 dollars.",
    diagramData: { type: 'tag', marked: "$140", off: "30%", sale: "$98" }
  },
  {
    worldIndex: 9, qIndex: 4,
    rule: RULES.mastery,
    prompt: "A store offers 20% off everything, plus a $10 voucher applied after the discount. What is the final price of an $80 coat?",
    spokenPrompt: "A store offers 20 percent off everything, plus a 10 dollar voucher applied after the discount. What is the final price of an 80 dollar coat?",
    options: ["$54", "$56", "$50", "$58"],
    correctIndex: 0,
    explanation: "20% off $80 = $64. Subtract $10 voucher = $54.",
    hint: "80 times 0.8 is 64 dollars, then subtract 10 dollars to get 54 dollars.",
    spokenHint: "80 times 0.8 is 64 dollars, then subtract 10 dollars to get 54 dollars.",
    diagramData: null
  },
  {
    worldIndex: 9, qIndex: 5,
    rule: RULES.mastery,
    prompt: "If the $10 voucher was applied BEFORE the 20% discount on that $80 coat, what would the price be?",
    spokenPrompt: "If the 10 dollar voucher was applied before the 20 percent discount on that 80 dollar coat, what would the price be?",
    options: ["$56", "$54", "$50", "$58"],
    correctIndex: 0,
    explanation: "$80 − $10 = $70. Then $70 × 0.8 = $56.",
    hint: "80 minus 10 is 70 dollars. 70 times 0.8 is 56 dollars.",
    spokenHint: "80 minus 10 is 70 dollars. 70 times 0.8 is 56 dollars.",
    diagramData: null
  },
  {
    worldIndex: 9, qIndex: 6,
    rule: RULES.mastery,
    prompt: "Which order saves the customer more: 20% off then $10 voucher, or $10 voucher then 20% off?",
    spokenPrompt: "Which order saves the customer more: 20 percent off then 10 dollar voucher, or 10 dollar voucher then 20 percent off?",
    options: ["20% off then $10 voucher, saves $2 more", "$10 voucher then 20% off, saves $2 more", "Both give the exact same price", "Neither saves money"],
    correctIndex: 0,
    explanation: "20% first gives $54; voucher first gives $56. Applying the percentage to the full price first saves $2 more!",
    hint: "Applying percentage discount to the larger original amount saves more money.",
    spokenHint: "Applying percentage discount to the larger original amount saves more money.",
    diagramData: null
  },
  {
    worldIndex: 9, qIndex: 7,
    rule: RULES.mastery,
    prompt: "A laptop marked at $600 is discounted by 25%. A student gets an extra 10% off the discounted price. What is the final price?",
    spokenPrompt: "A laptop marked at 600 dollars is discounted by 25 percent. A student gets an extra 10 percent off the discounted price. What is the final price?",
    options: ["$405", "$390", "$420", "$450"],
    correctIndex: 0,
    explanation: "$600 × 0.75 = $450. Then $450 × 0.9 = $405.",
    hint: "600 times 0.75 is 450 dollars. 450 times 0.9 is 405 dollars.",
    spokenHint: "600 times 0.75 is 450 dollars. 450 times 0.9 is 405 dollars.",
    diagramData: { type: 'chain', nodes: [{ label: "$600" }, { label: "$450" }, { label: "$405" }], edges: ["×0.75", "×0.9"] }
  },
  {
    worldIndex: 9, qIndex: 8,
    rule: RULES.mastery,
    prompt: "Sophia has a 15% discount card. The store has a clearance rack with an extra 20% off. If she buys a $120 dress, what does she pay?",
    spokenPrompt: "Sophia has a 15 percent discount card. The store has a clearance rack with an extra 20 percent off. If she buys a 120 dollar dress, what does she pay?",
    options: ["$81.60", "$78.00", "$84.00", "$85.50"],
    correctIndex: 0,
    explanation: "$120 × 0.85 = $102. $102 × 0.8 = $81.60.",
    hint: "120 times 0.85 times 0.8 equals 81 dollars and 60 cents.",
    spokenHint: "120 times 0.85 times 0.8 equals 81 dollars and 60 cents.",
    diagramData: { type: 'chain', nodes: [{ label: "$120" }, { label: "$102" }, { label: "$81.60" }], edges: ["×0.85", "×0.8"] }
  },
  {
    worldIndex: 9, qIndex: 9,
    rule: RULES.mastery,
    prompt: "An item is marked up by 20%, then later discounted by 20%. Is the final price higher, lower, or equal to the starting price?",
    spokenPrompt: "An item is marked up by 20 percent, then later discounted by 20 percent. Is the final price higher, lower, or equal to the starting price?",
    options: ["Lower, by 4%", "Equal to starting price", "Higher, by 4%", "Lower, by 2%"],
    correctIndex: 0,
    explanation: "Multiplier = 1.2 × 0.8 = 0.96. The final price is 96% of the original, so it is 4% lower!",
    hint: "1.2 times 0.8 equals 0.96. You end up with 96% of the starting price, which is 4% lower.",
    spokenHint: "1.2 times 0.8 equals 0.96. You end up with 96 percent of the starting price, which is 4 percent lower.",
    diagramData: null
  }
];

// Helper map: group questions by worldIndex
export const WORLD_QUESTIONS = Array.from({ length: 10 }, (_, wIdx) => {
  return RAW_QUESTIONS.filter(q => q.worldIndex === wIdx).sort((a, b) => a.qIndex - b.qIndex);
});

/**
 * Get deterministic question by world and question index (0..9)
 * Shuffles options so correct answer is naturally distributed across positions 0, 1, 2, 3
 */
export function getQuestion(worldIndex = 0, qIndex = 0) {
  const worldList = WORLD_QUESTIONS[worldIndex] || WORLD_QUESTIONS[0];
  const q = worldList[qIndex] || worldList[0];
  const correctVal = q.options[q.correctIndex];

  // Deterministically rotate/swap so options are distributed across 0, 1, 2, 3
  const targetPos = (worldIndex * 3 + qIndex * 7 + 1) % 4;
  const shuffled = [...q.options];
  if (targetPos !== 0) {
    const tmp = shuffled[targetPos];
    shuffled[targetPos] = shuffled[0];
    shuffled[0] = tmp;
  }
  const newCorrectIndex = shuffled.indexOf(correctVal);

  return {
    world: PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0],
    ...q,
    options: shuffled,
    correctIndex: newCorrectIndex,
    correctValue: correctVal
  };
}

/**
 * Fallback procedural generator (kept for compatibility)
 */
export function makeQuestion(worldIndex = 0, qIndex = 0) {
  return getQuestion(worldIndex, qIndex);
}
