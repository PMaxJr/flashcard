document.addEventListener("DOMContentLoaded", () => {
  const flashcards = [
    { q: "What is the supreme law of the land?", a: "The Constitution" },
    {
      q: "What does the Constitution do?",
      a: "Sets up the government\nDefines the government\nProtects basic rights of Americans",
    },
    {
      q: "The idea of self-government is in the first three words of the Constitution. What are these words?",
      a: "We the People",
    },
    {
      q: "What is an amendment?",
      a: "A change (to the Constitution)\nAn addition (to the Constitution)",
    },
    {
      q: "What do we call the first ten amendments to the Constitution?",
      a: "The Bill of Rights",
    },
    {
      q: "What is one right or freedom from the First Amendment?",
      a: "Speech\nReligion\nAssembly\nPress\nPetition the government",
    },
    {
      q: "How many amendments does the Constitution have?",
      a: "Twenty-seven (27)",
    },
    {
      q: "What did the Declaration of Independence do?",
      a: "Announced our independence (from Great Britain)\nDeclared our independence\nSaid that the United States is free",
    },
    {
      q: "What are two rights in the Declaration of Independence?",
      a: "Life\nLiberty\nPursuit of happiness",
    },
    {
      q: "What is freedom of religion?",
      a: "You can practice any religion, or not practice a religion.",
    },
    {
      q: "What is the economic system in the United States?",
      a: "Capitalist economy\nMarket economy",
    },
    {
      q: "What is the “rule of law”?",
      a: "Everyone must follow the law\nLeaders must obey the law\nGovernment must obey the law\nNo one is above the law",
    },
    {
      q: "Name one branch or part of the government.",
      a: "Congress\nLegislative\nPresident\nExecutive\nThe courts\nJudicial",
    },
    {
      q: "What stops one branch of government from becoming too powerful?",
      a: "Checks and balances\nSeparation of powers",
    },
    { q: "Who is in charge of the executive branch?", a: "The President" },
    {
      q: "Who makes federal laws?",
      a: "Congress\nSenate and House\n(U.S. or national) legislature",
    },
    {
      q: "What are the two parts of the U.S. Congress?",
      a: "The Senate and House (of Representatives)",
    },
    { q: "How many U.S. Senators are there?", a: "One hundred (100)" },
    { q: "We elect a U.S. Senator for how many years?", a: "Six (6)" },
    {
      q: "Who is one of your state’s U.S. Senators now?",
      a: "John Cornyn or Ted Cruz (Texas)",
    },
    {
      q: "The House of Representatives has how many voting members?",
      a: "Four hundred thirty-five (435)",
    },
    {
      q: "We elect a U.S. Representative for how many years?",
      a: "Two (2)",
    },
    {
      q: "Name your U.S. Representative.",
      a: "Jasmine Crockett",
    },
    {
      q: "Who does a U.S. Senator represent?",
      a: "All people of the state",
    },
    {
      q: "Why do some states have more Representatives than other states?",
      a: "Because of the state’s population\nSome states have more people",
    },
    { q: "We elect a President for how many years?", a: "Four (4)" },
    { q: "In what month do we vote for President?", a: "November" },
    {
      q: "What is the name of the President of the United States now?",
      a: "Donald Trump",
    },
    {
      q: "What is the name of the Vice President of the United States now?",
      a: "JD Vance",
    },
    {
      q: "If the President can no longer serve, who becomes President?",
      a: "The Vice President",
    },
    {
      q: "If both the President and the Vice President can no longer serve, who becomes President?",
      a: "The Speaker of the House",
    },
    {
      q: "Who is the Commander in Chief of the military?",
      a: "The President",
    },
    { q: "Who signs bills to become laws?", a: "The President" },
    { q: "Who vetoes bills?", a: "The President" },
    {
      q: "What does the President’s Cabinet do?",
      a: "Advises the President",
    },
    {
      q: "What are two Cabinet-level positions?",
      a: "Secretary of Defense, Secretary of State\nAttorney General\nVice President",
    },
    {
      q: "What does the judicial branch do?",
      a: "Reviews laws\nExplains laws\nResolves disputes\nDecides if a law goes against the Constitution",
    },
    {
      q: "What is the highest court in the United States?",
      a: "The Supreme Court",
    },
    { q: "How many justices are on the Supreme Court?", a: "Nine (9)" },
    {
      q: "Who is the Chief Justice of the United States now?",
      a: "John Roberts",
    },
    {
      q: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
      a: "To print money\nTo declare war\nTo create an army\nTo make treaties",
    },
    {
      q: "Under our Constitution, some powers belong to the states. What is one power of the states?",
      a: "Provide schooling and education\nProvide protection\nGive a driver’s license\nApprove zoning and land use",
    },
    { q: "Who is the Governor of your state now?", a: "Greg Abbott" },
    { q: "What is the capital of your state?", a: "Austin" },
    {
      q: "What are the two major political parties in the United States?",
      a: "Democratic and Republican",
    },
    {
      q: "What is the political party of the President now?",
      a: "Republican",
    },
    {
      q: "What is the name of the Speaker of the House of Representatives now?",
      a: "Mike Johnson",
    },
    {
      q: "There are four amendments to the Constitution about who can vote. Describe one of them.",
      a: "Citizens 18 and older can vote\nYou don’t have to pay (a poll tax)\nAny citizen can vote\nA male citizen of any race can vote",
    },
    {
      q: "What is one responsibility that is only for United States citizens?",
      a: "Serve on a jury\nVote in a federal election",
    },
    {
      q: "Name one right only for United States citizens.",
      a: "Vote in a federal election\nRun for federal office",
    },
    {
      q: "What are two rights of everyone living in the United States?",
      a: "Freedom of expression\nFreedom of speech\nFreedom of assembly\nFreedom to petition the government\nFreedom of religion\nThe right to bear arms",
    },
    {
      q: "What do we show loyalty to when we say the Pledge of Allegiance?",
      a: "The United States\nThe flag",
    },
    {
      q: "What is one promise you make when you become a United States citizen?",
      a: "Give up loyalty to other countries\nDefend the Constitution and laws\nObey the laws\nServe in the military if needed\nbe loyal to the United States",
    },
    {
      q: "How old do citizens have to be to vote for President?",
      a: "Eighteen (18) and older",
    },
    {
      q: "What are two ways that Americans can participate in their democracy?",
      a: "Vote\nJoin a political party\nHelp with a campaign\nJoin a civic group\nGive an elected official your opinion",
    },
    {
      q: "When is the last day you can send in federal income tax forms?",
      a: "April 15",
    },
    {
      q: "When must all men register for the Selective Service?",
      a: "At age eighteen (18)\nBetween 18 and 26",
    },
    {
      q: "What is one reason colonists came to America?",
      a: "Freedom\nPolitical liberty\nReligious freedom\nEconomic opportunity",
    },
    {
      q: "Who lived in America before the Europeans arrived?",
      a: "American Indians\nNative Americans",
    },
    {
      q: "What group of people was taken to America and sold as slaves?",
      a: "Africans\nPeople from Africa",
    },
    {
      q: "Why did the colonists fight the British?",
      a: "Because of high taxes\nBecause the British army stayed in their houses\nBecause they didn’t have self-government",
    },
    {
      q: "Who wrote the Declaration of Independence?",
      a: "Thomas Jefferson",
    },
    {
      q: "When was the Declaration of Independence adopted?",
      a: "July 4, 1776",
    },
    {
      q: "There were 13 original states. Name three.",
      a: "North Carolina, South Carolina, Massachusetts\nNew York, New Jersey, Pennsylvania",
    },
    {
      q: "What happened at the Constitutional Convention?",
      a: "The Constitution was written\nThe Founding Fathers wrote the Constitution",
    },
    { q: "When was the Constitution written?", a: "1787" },
    {
      q: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
      a: "Alexander Hamilton",
    },
    {
      q: "What is one thing Benjamin Franklin is famous for?",
      a: "U.S. diplomat\nOldest member of the Constitutional Convention\nFirst Postmaster General",
    },
    { q: "Who is the “Father of Our Country”?", a: "George Washington" },
    { q: "Who was the first President?", a: "George Washington" },
    {
      q: "What territory did the United States buy from France in 1803?",
      a: "The Louisiana Territory",
    },
    {
      q: "Name one war fought by the United States in the 1800s.",
      a: "Civil War",
    },
    {
      q: "Name the U.S. war between the North and the South.",
      a: "The Civil War",
    },
    {
      q: "Name one problem that led to the Civil War.",
      a: "Slavery\nStates’ rights",
    },
    {
      q: "What was one important thing that Abraham Lincoln did?",
      a: "Freed the slaves\nSaved the Union\nLed the U.S. during the Civil War",
    },
    {
      q: "What did the Emancipation Proclamation do?",
      a: "Freed the slaves\nFreed slaves in the Confederacy",
    },
    {
      q: "What did Susan B. Anthony do?",
      a: "Fought for women’s rights\nFought for civil rights",
    },
    {
      q: "Name one war fought by the United States in the 1900s.",
      a: "World War I\nWorld War II\nKorean War\nVietnam War\nPersian Gulf War",
    },
    { q: "Who was President during World War I?", a: "Woodrow Wilson" },
    {
      q: "Who was President during the Great Depression and World War II?",
      a: "Franklin Roosevelt",
    },
    {
      q: "Who did the United States fight in World War II?",
      a: "Japan, Germany, and Italy",
    },
    {
      q: "Before he was President, Eisenhower was a general. What war was he in?",
      a: "World War II",
    },
    {
      q: "During the Cold War, what was the main concern of the United States?",
      a: "Communism",
    },
    {
      q: "What movement tried to end racial discrimination?",
      a: "The civil rights movement",
    },
    {
      q: "What did Martin Luther King, Jr. do?",
      a: "Fought for civil rights\nWorked for equality for all Americans",
    },
    {
      q: "What major event happened on September 11, 2001, in the United States?",
      a: "Terrorists attacked the United States",
    },
    {
      q: "Name one American Indian tribe in the United States.",
      a: "Cherokee\nHuron\nCreek\nApache\nBlackfeet",
    },
    {
      q: "Name one of the two longest rivers in the United States.",
      a: "Missouri River\nMississippi River",
    },
    {
      q: "What ocean is on the West Coast of the United States?",
      a: "Pacific Ocean",
    },
    {
      q: "What ocean is on the East Coast of the United States?",
      a: "Atlantic Ocean",
    },
    {
      q: "Name one U.S. territory.",
      a: "Puerto Rico",
    },
    {
      q: "Name one state that borders Canada.",
      a: "Michigan",
    },
    {
      q: "Name one state that borders Mexico.",
      a: "Texas",
    },
    {
      q: "What is the capital of the United States?",
      a: "Washington, D.C.",
    },
    {
      q: "Where is the Statue of Liberty?",
      a: "New York Harbor or Liberty Island",
    },
    {
      q: "Why does the flag have 13 stripes?",
      a: "Because there were 13 original colonies",
    },
    {
      q: "Why does the flag have 50 stars?",
      a: "Because there are 50 states",
    },
    {
      q: "What is the name of the national anthem?",
      a: "The Star-Spangled Banner",
    },
    { q: "When do we celebrate Independence Day?", a: "July 4" },
    {
      q: "Name two national U.S. holidays.",
      a: "New Year’s Day\nIndependence Day\nThanksgiving\nChristmas",
    },
  ];

  // Shuffle cards
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let cards = shuffle([...flashcards]);
  let current = 0;
  let flipped = false;

  const cardEl = document.getElementById("card");

  function showCard() {
    const text = flipped ? cards[current].a : cards[current].q;
    cardEl.innerHTML = text.replace(/\n/g, "<br>");
  }

  cardEl.addEventListener("click", () => {
    flipped = !flipped;
    showCard();
  });

  function nextCard() {
    current = (current + 1) % cards.length;
    flipped = false;
    showCard();
  }

  function prevCard() {
    current = (current - 1 + cards.length) % cards.length;
    flipped = false;
    showCard();
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️ Light Mode";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  document.getElementById("next-btn").addEventListener("click", nextCard);
  document.getElementById("prev-btn").addEventListener("click", prevCard);

  // Initialize
  showCard();
});
