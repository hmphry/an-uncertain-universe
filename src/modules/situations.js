import './random.js';

// people
// oldest wrestler, youngest wrestler, world champion, secondary champion, tag champion, number one contenders, legend, power rankings

// disputes
// death, injury, justice, personal, disgruntlement, social, professional, retirement

// nice stuff
// new signing, movie deal,

const championships = [
	"the World championship", "the Single championship", "the Tag Team championships"
]
const champions = [
	"One half of the tag team champions",
	"The World Champion",
	"The Singles Champion"
];
const critical_rankers = [
	"The 1st rated wrestler",
	"The 2nd rated wrestler",
	"The 3rd rated wrestler",
	"The 4th rated wrestler",
	"The 5th rated wrestler",
];
const major_rankers = [
	"The 6th rated wrestler",
	"The 7th rated wrestler",
	"The 8th rated wrestler",
	"The 9th rated wrestler",
	"The 10th rated wrestler",
];
const minor_rankers = [
	"The 11th rated wrestler",
	"The 12th rated wrestler",
	"The 13th rated wrestler",
	"The 14th rated wrestler",
	"The 15th rated wrestler",
];
const contenders = [
	"Number 1 contender(s) to ",
	"Number 2 contender(s) to ",
	"Number 3 contender(s) to ",
];

const death = " has succumbed to the life-threatening injuries suffered in their last match.";
const disgruntlement = {
	minor: {
		base: " refuses to re-sign with us.",
		outcome: [" They have 2 months left on their current contract.", " They have 6 months left on their current contract."]
	},
	major: {
		base: " refuses to re-sign with us.",
		outcome: [" They have 1 week left on their current contract.", " They have 2 weeks left on their current contract."]
	},
	serious: {
		base: " refuses to re-sign with us and left the company."
	}
}
const injury = {
	minor: {
		base: " has sustained minor injuries in their last match. They will be out of action for ",
		outcome: ["1 month.", "2 months."]
	},
	major: {
		base: " has sustained major injuries in their last match. They will be out of action for ",
		outcome: ["6 months.", "8 months."]
	},
	serious: {
		base: " has sustained life-threatening injuries in their last match. ",
		outcome: ["They will be out of action for 1 year.", "They will be out of action for 3 years.", "They must retire from professional wrestling."]
	},
}
const justice = {
	minor: {
		base: " has been arrested on minor charges. They have been sentenced to ",
		outcome: ["1 month in prison.", "2 months in prison.", "3 months in prison."]
	},
	major: {
		base: " has been arrested on major charges. They have been sentenced to ",
		outcome: ["8 months in prison.", "12 months in prison.", "3 years in prison."]
	},
	serious: {
		base: " has been arrested on serious charges. They have been immediately released.",
		outcome: [""]
	}
}
const personal = {
	minor: {
		base: " has suffered a death in their family. They require ",
		outcome: ["1 week of time off to greive.", "2 weeks of time off to greive."]
	},
	major: {
		base: " has suffered a death in their immediate family. ",
		outcome: ["They require 1 month away to greive.", "They have dedicated their next year to honor their loved one. They requested a championship push, and we granted it."]
	}
}
const professional = {
	minor: {
		base: " has gained a minor reputation of working stiff. ",
		outcome: [
			"The top 3 rated wrestlers are refusing to work with them for the next 3 months.",
			"The top 5 rated wrestlers are refusing to work with them for the next 3 months."
		]
	},
	major: {
		base: " has gained a major reputation of working stiff. ",
		outcome: [
			"The top 15 rated wrestlers are refusing to work with them for the next 3 months.",
			"The top 20 rated wrestlers are refusing to work with them for the next 3 months."
		]
	},
	serious: {
		base: " has gained a serious reputation of working stiff. ",
		outcome: [
			"Only the bottom 10 rated wrestlers are willing to work with them for the next 3 months.",
			"Only the bottom 5 rated wrestlers are willing to work with them for the next 3 months.",
			"No one in our company is willing to work with them for the next 3 months."
		]
	},
	improvement: {
		base: " has gained a reputation of being a really good worker. ",
		outcome: [
			"The top 10 rated wrestlers are interested in performing with them.",
			"The 8th rated wrestler is interested wants to do a rivarly with them.",
			"The 4th rated wrestler is interested wants to do a rivarly with them.",
			"The 2nd rated wrestler is interested wants to do a rivarly with them.",
			"The Singles champion has asked to work with them more.",
			"The World champion has asked to work with them more."
		]
	},
	excellence: {
		base: " has gained a reputation of being a one of the best wrestlers in the world. ",
		outcome: [
			"We should reward them with a major push in our singles division.",
			"We should reward them with a major push in our world division."
		]
	}
}
const promotional = {
	minor: {
		base: " is starring in a new home-release movie. ",
		outcome: [
			"We are contractually obligated to give them a push.",
			"We are contractually obligated to turn them face, if not already.",
			"We are contractually obligated to turn them heel, if not already."
		]
	},
	major: {
		base: " is starring in a blockbuster new movie. ",
		outcome: [
			"We are contractually obligated to give them a solid push.",
			"We are contractually obligated to turn them face, if not already.",
			"We are contractually obligated to turn them heel, if not already."
		]
	},
	serious: {
		base: " is starring in a blockbuster new movie. ",
		outcome: [
			"We are contractually obligated to give them a major baby-face push.",
			"We are contractually obligated to give them a major resilent face push.",
			"We are contractually obligated to give them a major dominating-heel push.",
			"We are contractually obligated to give them a major cowardly-heel push."
		]
	}
}
const retirement = {
	minor: {
		base: " has informed us of their plans to retire. ",
		outcome: [
			"They will finish the last 3 months of their contract with us.",
			"They will finish the last 6 months of their contract with us.",
			"They will finish the last year of their contract with us."
		]
	},
	major: {
		base: " has informed us of their plans to retire. ",
		outcome: [
			"They will finish the last 1 month of their contract with us.",
			"They will finish the last 2 months of their contract with us."
		]
	},
	serious: {
		base: " has informed us of their plans to retire ",
		outcome: [
			"immediately"
		]
	},
}
const raise = {
	minor: {
		base: " is demanding a push."
	},
	major: {
		base: "One half of the tag team champions is demanding a solo push."
	},
	serious: {
		base: "The singles champion is demanding a world championship match."
	}
}
const signing = {
	minor: {
		base: "We've just signed a great up and coming wrestler to compete in our company. They can go anywhere you like and work themselves up."
	},
	major: {
		base: "We've just signed the hottest act in the indies. They're going to compete in our ",
		outcome: [
			"tag-team division.",
			"singles division."
		]
	},
	serious: {
		base: "We've just signed an industry legend! ",
		outcome: [
			"A bit over the hill, but they'll do well in our tag team division.",
			"A bit over the hill, but they'll do well in our singles.",
			"A bit over the hill, but they're interested in mentoring a younger talent!",
			"They still connect with the crowd well and will compete in our world division."
		]
	},
}
const social = {
	minor: {
		base: " has said something hateful on social media. ",
		outcome: ["They have been suspended for 1 month.", "They have been suspended for 2 months."]
	},
	major: {
		base: " has said something hateful on social media. ",
		outcome: [
			"They must defend their championship in a 4 four way as punishment.",
			"They must defend their championship in a cage match as punishment.",
			"They must defend their championship in a laddar match as punishment.",
			"They must defend their championship in a hardcore match as punishment."
		]
	},
	serious: {
		base: " has said something hateful on social media. ",
		outcome: [
			"They have been suspended for 6 months and striped of their championship.",
			"They have been striped of their championship."
		]
	}
}



const common = [
	{t: "business as usual."},
	{t: "business as usual."},
	{t: "business as usual."},
	{t: "business as usual."},
	{t: "business as usual."},
	// injury
	{t: champions.random() + injury.minor.base + injury.minor.outcome.random()},
	{t: critical_rankers.random() + injury.minor.base + injury.minor.outcome.random()},
	{t: major_rankers.random() + injury.minor.base + injury.minor.outcome.random()},
	{t: minor_rankers.random() + injury.minor.base + injury.minor.outcome.random()},
	{t: contenders.random() + championships.random() + injury.minor.base + injury.minor.outcome.random()},
	{t: champions.random() + injury.minor.base + injury.minor.outcome.random()},
	{t: critical_rankers.random() + injury.minor.base + injury.minor.outcome.random()},
	{t: major_rankers.random() + injury.minor.base + injury.minor.outcome.random()},
	{t: minor_rankers.random() + injury.minor.base + injury.minor.outcome.random()},
	{t: contenders.random() + championships.random() + injury.minor.base + injury.minor.outcome.random()},
	// raise
	{t: critical_rankers.random() + raise.minor.base},
	{t: minor_rankers.random() + raise.minor.base},
	{t: major_rankers.random() + raise.minor.base},
	{t: critical_rankers.random() + raise.minor.base},
	{t: minor_rankers.random() + raise.minor.base},
	{t: major_rankers.random() + raise.minor.base},
	// signing
	{t: signing.major.base + signing.major.outcome.random()},
	{t: signing.minor.base},
];
const uncommon = [
	// disgruntlement
	{t: minor_rankers.random() + disgruntlement.minor.base + disgruntlement.minor.outcome.random()},
	// injury
	{t: critical_rankers.random() + injury.major.base + injury.major.outcome.random()},
	{t: major_rankers.random() + injury.major.base + injury.major.outcome.random()},
	// professional
	{t: minor_rankers.random() + professional.major.base + professional.major.outcome.random()},
	{t: major_rankers.random() + professional.minor.base + professional.minor.outcome.random()},
	{t: contenders.random() + championships.random() + personal.minor.base + personal.minor.outcome.random()},
	{t: minor_rankers.random() + professional.improvement.base + professional.improvement.outcome.random()},
	// promotional
	{t: critical_rankers.random() + promotional.minor.base + promotional.minor.outcome.random()},
	{t: major_rankers.random() + promotional.major.base + promotional.major.outcome.random()},
	// social
	{t: minor_rankers.random() + social.minor.base + social.minor.outcome.random()},
];
const rare = [
	// disgruntlement
	{t: major_rankers.random() + disgruntlement.minor.base + disgruntlement.minor.outcome.random()},
	{t: critical_rankers.random() + disgruntlement.minor.base + disgruntlement.minor.outcome.random()},
	// injury
	{t: champions.random() + injury.major.base + injury.major.outcome.random()},
	{t: critical_rankers.random() + injury.major.base + injury.major.outcome.random()},
	{t: contenders.random() + injury.major.base + injury.major.outcome.random()},
	// justice
	{t: champions.random() + justice.minor.base + justice.minor.outcome.random()},
	// professional
	{t: major_rankers.random() + professional.serious.base + professional.serious.outcome.random()},
	{t: champions.random() + professional.major.base + professional.major.outcome.random()},
	{t: minor_rankers.random() + professional.excellence.base + professional.excellence.outcome.random()},
	{t: major_rankers.random() + professional.excellence.base + professional.excellence.outcome.random()},
	{t: critical_rankers.random() + professional.excellence.base + professional.excellence.outcome.random()},
	// retirement
	{t: major_rankers.random() + retirement.minor.base + retirement.minor.outcome.random()},
	{t: critical_rankers.random() + retirement.minor.base + retirement.minor.outcome.random()},
	{t: minor_rankers.random() + retirement.minor.base + retirement.minor.outcome.random()},
	{t: minor_rankers.random() + retirement.major.base + retirement.major.outcome.random()},
	// raise
	{t: raise.serious.base},
	// signing
	{t: signing.serious.base + signing.serious.outcome.random()},
	// social
	{t: major_rankers.random() + social.minor.base + social.minor.outcome.random()},
];
const strange = [
	// disgruntlement
	{t: champions.random() + disgruntlement.minor.base + disgruntlement.minor.outcome.random()},
	{t: champions.random() + disgruntlement.major.base + disgruntlement.major.outcome.random()},
	// personal
	{t: contenders.random() + championships.random() + personal.major.base + personal.major.outcome.random()},
	{t: champions.random() + personal.major.base + personal.major.outcome.random()},
	{t: major_rankers.random() + personal.major.base + personal.major.outcome.random()},
	{t: critical_rankers.random() + personal.major.base + personal.major.outcome.random()},
	// professional
	{t: major_rankers.random() + professional.major.base + professional.major.outcome.random()},
	{t: champions.random() + professional.minor.base + professional.minor.outcome.random()},
	{t: minor_rankers.random() + professional.excellence.base + professional.excellence.outcome.random()},
	{t: major_rankers.random() + professional.excellence.base + professional.excellence.outcome.random()},
	{t: critical_rankers.random() + professional.excellence.base + professional.excellence.outcome.random()},
	// promotional
	{t: champions.random() + promotional.serious.base + promotional.serious.outcome.random()},
	{t: critical_rankers.random() + promotional.serious.base + promotional.serious.outcome.random()},
	{t: major_rankers.random() + promotional.serious.base + promotional.serious.outcome.random()},
	{t: critical_rankers.random() + promotional.major.base + promotional.major.outcome.random()},
	{t: major_rankers.random() + promotional.major.base + promotional.major.outcome.random()},
	// retirement
	{t: major_rankers.random() + retirement.major.base + retirement.major.outcome.random()},
	{t: critical_rankers.random() + retirement.major.base + retirement.major.outcome.random()},
	{t: champions.random() + retirement.major.base + retirement.major.outcome.random()},
	// raise
	{t: raise.major.base},
	// social
	{t: critical_rankers.random() + social.minor.base + social.minor.outcome.random()},
	{t: champions.random() + social.minor.base + social.minor.outcome.random()},
	{t: contenders.random() + championships.random() + social.minor.base + social.minor.outcome.random()},
];
const unprecedented = [
	// disgruntlement
	{t: champions.random() + disgruntlement.major.base + disgruntlement.major.outcome.random()},
	// injury
	{t: champions.random() + injury.serious.base + injury.serious.outcome.random()},
	{t: critical_rankers.random() + injury.serious.base + injury.serious.outcome.random()},
	// justice
	{t: champions.random() + justice.major.base + justice.major.outcome.random()},
	// professional
	{t: champions.random() + professional.serious.base + professional.serious.outcome.random()},
	// retirement
	{t: critical_rankers.random() + retirement.serious.base + retirement.serious.outcome.random()},
	{t: champions.random() + retirement.serious.base + retirement.serious.outcome.random()},
	// social
	{t: champions.random() + social.major.base + social.major.outcome.random()},
];
const bizarre = [
	// death
	{t: champions.random() + death},
	{t: critical_rankers.random() + death},
	// disgruntlement
	{t: champions.random() + disgruntlement.serious.base},
	// justice
	{t: champions.random() + justice.serious.base + justice.serious.outcome.random()},
	// social
	{t: champions.random() + social.serious.base + social.serious.outcome.random()},
];

export let situations = {common, uncommon, rare, strange, unprecedented, bizarre};
