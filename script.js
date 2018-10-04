const quotes = [ 'If you ever catch on fire, try to avoid seeing yourself in the mirror, because I bet that\'s what REALLY throws you into a panic.',
	'Maybe in order to understand mankind we have to look at that word itself. MANKIND. Basically, it\'s made up of two separate words mank and ind. What do these words mean? It\'s a mystery and that\'s why so is mankind.',
	'I think the mistake a lot of us make is thinking the state-appointed shrink is our friend',
	'I can picture in my mind a world without war, a world without hate. And I can picture us attacking that world, because they\'d never expect it.',
	'If you ever drop your keys into a river of molten lava, let\'em go, because, man, they\'re gone.',
	'I hope that after I die, people will say of me: "That guy sure owed me a lot of money."',
	'One thing vampire children have to be taught early on is, don\'t run with wooden stakes.',
	'I\'d like to see a nude opera, because when they hit those high notes, I bet you can really see it in those genitals',
	'Why do people in ship mutinies always ask for "better treatment"? I\'d ask for a pinball machine, because with all that rocking back and forth you\'d probably be able to get a lot of free games.',
	'If you go flying back through time and you see somebody else flying forward into the future, it\'s probably best to avoid eye contact.',
	'A good way to threaten somebody is to light a stick of dynamite. Then you call the guy and hold the burning fuse up to the phone. "Hear that?" you say. "That\'s dynamite, baby."',
	'Whenever you read a good book, it\'s like the author is right there, in the room talking to you, which is why I don\'t like to read good books.',
	'It\'s easy to sit there and say you\'d like to have more money. And I guess that\'s what I like about it. It\'s easy. Just sitting there, rocking back and forth, wanting that money.',
	'Instead of a trap door, what about a trap window? The guy looks out it, and if he leans too far, he falls out. Wait. I guess that\'s like a regular window.',
	'If there was a terrible storm outside, but somehow this dog lived through the storm, and he showed up at your door when the storm was finally over, I think a good name for him would be Carl.',
	'I bet a fun thing would be to go way back in time to where there was going to be an eclipse and tell the cave men, "If I have come to destroy you, may the sun be blotted out from the sky." Just then the eclipse would start, and they\'d probably try to kill you or something, but then you could explain about the rotation of the moon and all, and everyone would get a good laugh.',
	'To me, it\'s a good idea to always carry two sacks of something when you walk around. That way, if anybody says, "Hey, can you give me a hand?" You can say, "Sorry, got these sacks."',
	'As the light changed from red to green to yellow and back to red again, I sat there thinking about life. Was it nothing more than a bunch of honking and yelling? Sometimes it seemed that way.',
	'It takes a big man to cry, but it takes a bigger man to laugh at that man.',
	'Instead of building newer and larger weapons of mass destruction, I think mankind should try to get more use out of the ones we have',
	'I think college administrators should encourage students to urinate on walls and bushes, because then when students from another college come sniffing around, they\'ll know this is someone else\'s territory.',
	'Is there anything more beautiful than a beautiful, beautiful flamingo, flying across in front of a beautiful sunset? And he\'s carrying a beautiful rose in his beak, and also he\'s carrying a very beautiful painting with his feet. And also, you\'re drunk.',
	'If trees could scream, would we be so cavalier about cutting them down? We might, if they screamed all the time, for no good reason.',
	'One thing a computer can do that most humans can\'t is be sealed up in a cardboard box and sit in a warehouse',
	'I think the monkeys at the zoo should have to wear sunglasses so they can\'t hypnotize you.',
	'If your friend is already dead, and being eaten by vultures, I think it\'s okay to feed some bits of your friend to one of the vultures, to teach him to do some tricks. But only if you\'re serious about adopting the vulture.',
	'Laugh, clown, laugh. This is what I tell myself whenever I dress up like Bozo.',
	'I think a good product would be Baby Duck Hat. It\'s a fake baby duck, which you strap on top of your head. Then you go swimming underwater until you find a mommy duck and her babies, and you join them. Then all of a sudden, you stand up out of the water and roar like Godzilla. Man those ducks really take off! Also Baby Duck Hat is good for parties.',
	'If I had a mine shaft, I don\'t think I would just abandon it. There\'s got to be a better way.',
	'Fear can sometimes be a useful emotion. For instance, let\'s say you\'re an astronaut on the moon and you fear that your partner has been turned into Dracula. The next time he goes out for the moon pieces, wham!, you just slam the door behind him and blast off. He might call you on the radio and say he\'s not Dracula, but you just say, "Think again, bat man."',
	'To me, clowns aren\'t funny. In fact, they\'re kind of scary. I\'ve wondered where this started and I think it goes back to the time I went to the circus, and a clown killed my dad.',
	'For mad scientists who keep brains in jars, here\'s a tip: why not add a slice of lemon to each jar, for freshness?',
	'When we were growing up, old man jenkins would never fail to come out every morning to nail tadpoles to a wheel, spin it around and around, like a wheel of fortune, and then say, "Tadpoles! Tadpoles is the winner!" We all thought he was crazy, but then, we had some growing up to do.',
	'How come the dove gets to be the peace symbol? How about the pillow? It has more feathers than the dove, and it doesn\'t have that dangerous beak',
	'I hope life isn\'t a big joke, because I don\'t get it.',
	'To me, boxing is like a ballet, except there\'s no music, no choreography, and the dancers hit each other',
	'Broken promises don\'t upset me. I just think, why did they believe me?',
	'Sometimes I think I\'d be better off dead. No, wait, not me, you.',
	'I can picture in my mind a world without war, a world without hate. And I can picture us attacking that world, because they\'d never expect it.',
	'When I found the skull in the woods, the first thing I did was call the police. But then I got curious about it. I picked it up, and started wondering who this person was, and why he had deer horns.',
	'I bet the main reason the police keep people away from a plane crash is they don\'t want anybody walking in and lying down in the crash stuff, then, when somebody comes up, act like they just woke up and go, "What was THAT?!"',
	'Dad always thought laughter was the best medicine, which I guess is why several of us died of tuberculosis.',
	"I think one way the cops could make money would be to hold a murder weapons sale. Many people could really use used ice picks.",
	"I bet one legend that keeps recurring throughout history, in every culture, is the story of Popeye.",
	"If you're a cowboy and you're dragging a guy behind your horse, I bet it would really make you mad if you looked back and the guy was reading a magazine.",
	"Instead of trying to build newer and bigger weapons of destruction, we should be thinking about getting more use out of the ones we already have.",
	"When the chairman introduced the guest speaker as a former illegal alien, I got up from my chair and yelled, \"What's the matter, no jobs on Mars?\" When no one laughed, I was real embarrassed. I don't think people should make you feel that way.", 
	"Any man, in the right situation, is capable of murder. But not any man is capable of being a good camper. So, murder and camping are not as similar as you might think.",
	"If you go to a costume party at your boss's house, wouldn't you think a good costume would be to dress up like the boss's wife? Trust me, it's not.",
	"I wish I had a kryptonite cross, because then you could keep both Dracula and Superman away",
	"If you lose your job, your marriage and your mind all in one week, try to lose your mind first, because then the other stuff won't matter that much",
	"It's amazing to me that one of the world's most feared diseases would be carried by one of the world's smallest animals: the real tiny dog.",
	"Whenever I hear the sparrow chirping, watch the woodpecker chirp, catch a chirping trout, or listen to the sad howl of the chirp rat, I think: Oh boy! I'm going insane again.",
	"I wish a robot would get elected president. That way, when he came to town, we could all take a shot at him and not feel too bad.",
	"I have to laugh when I think of the first cigar, because it was probably just a bunch of rolled up tobacco leaves",
	"Whenever you read a good book, it's like the author is right there, in the room talking to you, which is why I don't like to read good books",
	"What is it about a beautiful sunny afternoon, with the birds singing and the wind rustling through the leaves, that makes you want to get drunk?",
	"I wouldn't be surprised if someday some fishermen caught a big shark and cut it open, and there inside was a whole person. Then they cut the person open, and in him is a little baby shark. And in the baby shark there isn't a person, because it would be too small. But there's a little doll or something, like a Johnny Combat little toy guy - something like that.",
	"If you're robbing a bank and you're pants fall down, I think it's okay to laugh and to let the hostages laugh too, because, come on, life is funny.",
	"He was a cowboy, mister, and he loved the land. He loved it so much he made a woman out of dirt and married her. But when he kissed her, she disintegrated. Later, at the funeral, when the preacher said, \"Dust to dust,\" some people laughed, and the cowboy shot them. At his hanging, he told the others, \"I'll be waiting for you in heaven -- with a gun.\"",
	"Of all the tall tales, I think my favorite is the one about Eli Whitney and the interchangeable parts.",
	"If Alien was my friend, I'd like to be with him when he went to the dentist. When they started drilling, he'd probably go nuts and start eating everybody. That Alien!",
	"When I was a kid my favorite relative was Uncle Caveman. After school we'd all go play in his cave, and every once in a while he would eat one of us. It wasn't until later that I found out that Uncle Caveman was a bear.",
	"If I lived back in the wild west days, instead of carrying a six-gun in my holster, I'd carry a soldering iron. That way, if some smart-aleck cowboy said something like \"Hey, look. He's carrying a soldering iron!\" and started laughing, and everybody else started laughing, I could just say, \"That's right, it's a soldering iron. The soldering iron of justice.\" Then everybody would get real quiet and ashamed, because they had made fun of the soldering iron of justice, and I could probably hit them up for a free drink.",
	"The people in the village were real poor, so none of the children had any toys. But this one little boy had gotten an old enema bag and filled it with rocks, and he would go around and whap the other children across the face with it. Man, I think my heart almost broke. Later the boy came up and offered to give me the toy. This was too much! I reached out my hand, but then he ran away. I chased him down and took the enema bag. He cried a little, but that's the way of these people.",
	"Probably the earliest fly swatters were nothing more than some sort of striking surface attached to the end of a long stick.",
	"If you're in a war, instead of throwing a hand grenade at the enemy, throw one of those small pumpkins. Maybe it'll make everyone think how stupid war is, and while they are thinking, you can throw a real grenade at them.",
	"If I ever get real rich, I hope I'm not real mean to poor people, like now.",
	"It's true that every time you hear a bell, an angel gets its wings. But what they don't tell you is that every time you hear a mouse trap snap, an angel gets set on fire.",
	"There's nothing so tragic as seeing a family pulled apart by something as simple as a pack of wolves.",
	"If you want to be the most popular person in your class, whenever the professor pauses in his lecture, just let out a big snort and say, \"How do you figger that!\" real loud. Then lean back and sort of smirk.",
	"If you ever fall off the Sears Tower, just go real limp, because maybe you'll look like a dummy and people will try to catch you because, hey, free dummy.",
	"As a young boy, when you get splashed by a mud puddle on the way to school, you wonder if you should go home and change, but be late for school, or go to school the way you are; dirty and soaking wet. Well, while he tried to decide, I drove by and splashed him again.",
	"I bet it's hard to break farmers of the old superstitions like \"Tornado got Old Yeller, stay in the cellar.\"",
	"Laurie got offended that I used the word \"puke.\" But to me, that's what her dinner tasted like.",
	"I bet when neanderthal kids would make a snowman, someone would always end up saying, \"Don't forget the thick, heavy brows.\" Then they would get all embarrassed because they remembered they had the big husky brows too, and they'd get mad and eat the snowman.",
	"Better not take a dog on the space shuttle, because if he sticks his head out when you're coming home his face might burn up",
	"Too bad Lassie didn't know how to ice skate, because then if she was in Holland on vacation in winter and someone said \"Lassie, go skate for help,\" she could do it.",
	"I don't like small birds. They hop around so merrily outside my window, looking so innocent. but I know that secretly, they're watching my every move and plotting to beat me over the head with a large steel pipe and take my shoe.",
	"If you define cowardice as running away at the first sign of danger, screaming and tripping and begging for mercy, then yes, Mr. Brave man, I guess I'm a coward.",
	"If you go parachuting, and your parachute doesn't open, and you friends are all watching you fall, I think a funny gag would be to pretend you were swimming.",
	"Here's a good thing to do if you go to a party and you don't know anybody: First take out the garbage. Then go around and collect any extra garbage that people might have, like a crumpled napkin, and take that out too. Pretty soon people will want to meet the busy garbage guy.",
	"A funny thing to do is, if you're out hiking and your friend gets bitten by a poisonous snake, tell him you're going to go for help, then go about ten feet and pretend that <em>you<em> got bit by a snake. Then start an argument with him about who's going to go get help. A lot of guys will start crying. That's why it makes you feel good when you tell them it was just a joke.",
	"Life, to me, is like a quiet forest pool, one that needs a direct hit from a big rock half-buried in the ground. You pull and you pull, but you can't get the rock out of the ground. So you give it a good kick, but you lose your balance and go skidding down the hill toward the pool. Then out comes a big Hawaiian man who was screwing his wife beside the pool because they thought it was real pretty. He tells you to get out of there, but you start faking it, like you're talking Hawaiian, and then he gets mad and chases you...",
	"Marta was watching the football game with me when she said, \"You know, most of these sports are based on the idea of one group protecting its territory from invasion by another group.\" \"Yeah,\" I said, trying not to laugh. Girls are funny.",
	"If a kid asks where rain comes from, I think a cute thing to tell him is \"God is crying.\" And if he asks why God is crying, another cute thing to tell him is \"Probably because of something you did.\"",
	"Probably the saddest thing you'll ever see is a mosquito sucking on a mummy. Forget it, little friend.",
	"Most of the time it was probably real bad being stuck down in a dungeon. But some days, when there was a bad storm outside, you'd look out your little window and think, \"Boy, I'm glad I'm not out in that.\"",
	"I hope if dogs take over the world, and they choose a king, they don't just go by size, because I bet there are some Chihuahuas with some good ideas.",
	"We used to laugh at Grandpa when he'd head off and go fishing. But we wouldn't be laughing that evening when he'd come back with some whore he picked up in town.",
	"Sometimes I think you have to march right in and demand your rights,even if you don't know what your rights are, or who the person is you're talking to. Then on the way out, slam the door.",
	"Sometimes when I feel like killing someone, I do a little trick to calm myself down. I'll go over to the persons house and ring the doorbell. When the person comes to the door, I'm gone, but you know what I've left on the porch? A jack-o-lantern with a knife stuck in the side of it's head with a note that says \"You.\" After that I usually feel a lot better, and no harm done.",
	"When you go in for a job interview, I think a good thing to ask is if they ever press charges.",
	"I hope that someday we will be able to put away our fears and prejudices and just laugh at people.",
	"Consider the daffodil. And while you're doing that, I'll be over here, looking through your stuff.",
	"If you're a young Mafia gangster out on your first date, I bet it's real embarrassing if someone tries to kill you.",
	"As I bit into the nectarine, it had a crisp juiciness about it that was very pleasurable - until I realized it wasn't a nectarine at all, but A HUMAN HEAD!",
	"Anytime I see something screech across a room and latch onto someone's neck, and the guy screams and tries to get it off, I have to laugh, because what is that thing?",
	"Sometimes you have to be careful when selecting a new name for yourself. For instance, let's say you have chosen the nickname \"Fly Head.\" Normally you would think that \"Fly Head\" would mean a person who has beautiful swept-back features, as if flying through the air. But think again. Couldn't it also mean \"having a head like a fly\"? I'm afraid some people might actually think that.",
	"I think someone should have had the decency to tell me the luncheon was free. To make someone run out with potato salad in his hand, pretending he's throwing up, is not what I call hospitality.",
	"As the evening sky faded from a salmon color to a sort of flint gray, I thought back to the salmon I caught that morning, and how gray he was, and how I named him Flint.",
	"Many people think that history is a dull subject. Dull? Is it \"dull\" that Jesse James once got bitten on the forehead by an ant, and at first it didn't seem like anything, but then the bite got worse and worse, so he went to a doctor in town, and the secretary told him to wait, so he sat down and waited, and waited, and waited, and waited, and then finally he got to see the doctor, and the doctor put some salve on it? You call that dull?",
	"The tired and thirsty prospector threw himself down at the edge of the watering hole and started to drink. But then he looked around and saw skulls and bones everywhere. \"Uh-oh,\" he thought. \"This watering hole is reserved for skeletons.\"",
	"If you saw two guys named Hambone and Flippy, which one would you think liked dolphins most? I'd say Flippy, wouldn't you? You'd be wrong though. It's Hambone.",
	"If you get invited to your first orgy, don't just show up nude. That's a common mistake. You have to let nudity \"happen.\"",
	"In some places it's known as a tornado. In others, a cyclone. And in still others, the Idiot's Merry-go-round. But around here they'll always be known as screw-boys.",
	"I guess I kinda lost control, because in the middle of the play I ran up and lit the evil puppet villain on fire. No, I didn't. Just kidding. I just said that to help illustrate one of the human emotions, which is freaking out. Another emotion is greed, as when you kill someone for money, or something like that. Another emotion is generosity, as when you pay someone double what he paid for his stupid puppet.",
	"I wish outer space guys would conquer the Earth and make people their pets, because I'd like to have one of those little beds with my name on it.",
	"Sometimes life seems like a dream, especially when I look down and see that I forgot to put on my pants",
	"I guess we were all guilty, in a way. We all shot him, we all skinned him, and we all got a complimentary bumper sticker that said, \"I helped skin Bob.\"",
	"If you ever teach a yodeling class, probably the hardest thing is to keep the students from just trying to yodel right off. You see, we build to that.",
	"The face of a child can say it all, especially the mouth part of the face",
	"Children need encouragement. If a kid gets an answer right, tell him it was a lucky guess. That way he develops a good, lucky feeling.",
	"I'd like to see a nature film where an eagle swoops down and pulls a fish out of a lake, and then maybe he's flying along, low to the ground, and the fish pulls a worm out of the ground. Now that's a documentary.",
	"Folks still remember the day ole Bob Riley came bouncing down that dirt road in his pickup. Pretty soon, it was bouncing higher and higher. The tires popped, and the shocks broke, but that truck kept bouncing. Some say it bounced clean over the moon, but whoever says that is a goddamn liar.",
	"I don't think I'm alone when I say I'd like to see more and more planets fall under the ruthless domination of our solar system.",
	"Instead of studying for finals, what about just going to the Bahamas and catching some rays? Maybe you'll flunk, but you might have flunked anyway; that's my point.",
	"If God dwells inside us like some people say, I sure hope He likes enchiladas, because that's what He's getting",
	"If any man says he hates war more than I do, he better have a knife, that's all I have to say",
	"The difference between a man and a boy is, a boy wants to grow up to be a fireman, but a man wants to grow up to be a giant monster fireman.",
	"The next time I have meat and mashed potatoes, I think I'll put a very large blob of potatoes on my plate with just a little piece of meat. And if someone asks me why I didn't get more meat, I'll just say, \"Oh, you mean this?\" and pull out a big piece of meat from inside the blob of potatoes, where I've hidden it. Good magic trick, huh?",
	"Somebody told me it was frightening how much topsoil we are losing each year, but I told that story around the campfire and nobody got scared",
	"We tend to scoff at the beliefs of the ancients. But we can't scoff at them personally, to their faces, and this is what annoys me.",
	"You know what would make a good story? Something about a clown who makes people happy, but inside he's real sad. Also, he has severe diarrhea.",
	"Whenever I see an old lady slip and fall on a wet sidewalk, my first instinct is to laugh. But then I think, what if I was an ant, and she fell on me. Then it wouldn't seem quite so funny.",
	"I think there should be something in science called the \"reindeer effect.\" I don't know what it would be, but I think it'd be good to hear someone say, \"Gentlemen, what we have here is a terrifying example of the reindeer effect.\"",
	"If you ever crawl inside an old hollow log and go to sleep, and while you're in there some guys come and seal up both ends and then put it on a truck and take it to another city, boy, I don't know what to tell you.",
	"I can't stand cheap people. It makes me real mad when someone says something like, \"Hey, when are you going to pay me that $100 you owe me?\" or \"Do you have that $50 you borrowed?\" Man, quit being so cheap!",
	"Here's a good trick: Get a job as a judge at the Olympics. Then, if some guy sets a world record, pretend that you didn't see it and go, \"Okay, is everybody ready to start now?\".",
	"It's fascinating to think that all around us there's an invisible world we can't even see. I'm speaking, of course, of the World of the Invisible Scary Skeletons.",
	"I hate it when people say somebody has a \"speech impediment\", even if he does, because it could hurt his feelings. So instead, I call it a \"speech improvement\", and I go up to the guy and say, \"Hey, Bob, I like your speech improvement.\" I think this makes him feel better.",
	"I bet it was pretty hard to pick up girls if you had the Black Death.",
	"Contrary to what most people say, the most dangerous animal in the world is not the lion or the tiger or even the elephant. It's a shark riding on an elephant's back, just trampling and eating everything they see.",
	"What is it that makes a complete stranger dive into an icy river to save a solid gold baby? Maybe we'll never know",
	"I think a good gift for the President would be a chocolate revolver. and since he is so busy, you'd probably have to run up to him real quick and give it to him.",
	"Even though I was their captive, the Indians allowed me quite a bit of freedom. I could walk freely, make my own meals, and even hurl large rocks at their heads. It was only later that I discovered that they were not Indians at all but only dirty-clothes hampers.",
	"When you're riding in a time machine way far into the future, don't stick your elbow out the window, or it'll turn into a fossil.",
	"Ambition is like a frog sitting on a Venus Flytrap. The flytrap can bite and bite, but it won't bother the frog because it only has little tiny plant teeth. But some other stuff could happen and it could be like ambition.",
	"If you think a weakness can be turned into a strength, I hate to tell you this, but that's another weakness.",
	"If you ever reach total enlightenment while drinking beer, I bet it makes beer shoot out your nose.",
	"One thing kids like is to be tricked. For instance, I was going to take my nephew to Disneyland, but instead I drove him to an old burned-out warehouse. \"Oh no,\" I said, \"Disneyland burned down.\" He cried and cried, but I think that deep down he thought it was a pretty good joke. I started to drive over to the real Disneyland, but it was getting pretty late."
	]

const backgrounds = [
	{
		image: 'https://i.giphy.com/media/rAJfdmusNFDDG/giphy.webp',
		description: 'sunset with fog' 
	},
	{
		image: 'https://media.giphy.com/media/XwoXfc0yayzpm/giphy.gif',
		description: 'insects swarming around plants at sunset'
	},
	{
		image: 'https://i.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.webp',
		description: 'fog coming through the forest'
	},
	{
		image: 'https://i.giphy.com/media/4Rob5KCzwlwoU/giphy.webp',
		description: 'pink sunset over water'
	},
	{
		image: 'https://i.giphy.com/media/EKpmZuydbsmRy/giphy.webp',
		description: 'bright sun over ocean'
	},
	{
		image: 'https://i.giphy.com/media/pRzlhjFM60A5q/giphy.webp',
		description: 'stinging nettle'
	},
	{
		image: 'https://i.giphy.com/media/FGlv0Mpp44HS0/giphy.webp',
		description: 'daisies in the rain'
	},
	{
		image: 'https://media.giphy.com/media/xUA7aS8zKYFHbng6NW/giphy.gif',
		description: 'stream flowing in a pool of water'
	},
	{
		image: 'https://media3.giphy.com/media/NPP4Z7wMIf0SA/giphy.gif',
		description: 'waterfall on the beach'
	},
	{
		image: 'https://media.giphy.com/media/WteKbag35EBfq/giphy.gif',
		description: 'fast moving snow water'
	},
	{
		image: 'https://media.giphy.com/media/l3vQXKPdzpShJtTCE/giphy.gif',
		description: 'stream water flowing towards camera'
	},
	{
		image: 'https://media.giphy.com/media/gvKru3mU4wLFm/giphy.gif',
		description: 'snowy woods'
	}
]

let currentBackground = 1;

function getNewQuote() {
	const x = Math.floor(Math.random()* quotes.length);
	$("#quote").fadeToggle(1000, function () {
		$("#text").html(quotes[x]);
		$(window).scrollTop(0);
		$("#quote").fadeToggle(1000);
	});
}

function getNewBackground() {
	img = backgrounds[Math.floor(Math.random()*backgrounds.length)];
	console.log(img);
			if (currentBackground == 1) {
				$("#background2").attr('src', img.image);
				currentBackground = 2;
			}else{
				$("#background1").attr('src', img.image);
				currentBackground = 1;
			};
			$("#background1").fadeToggle(2000);
			$("#background2").fadeToggle(2000);
}

function scroll() {
	window.scrollBy(0,1);
}

const backgroundFade = setInterval(getNewBackground, 15000);
const autoScroll = setInterval(scroll, 10)
getNewBackground()

$("document").ready(function() {
	setTimeout(function() {
		$(window).scrollTop(0);
		const x = Math.floor(Math.random()* quotes.length);
		$("#text").html(quotes[x]);
		$("#quote").fadeIn(1500);
	}, 1000)
	});

function tweet() {
	const tweetText = $("#text").text().replace(/\s/g,'%20');
	const url = 'https://twitter.com/intent/tweet?text=' + tweetText + "%0A%09-Jack Handey";
	window.open(url, '_blank')
}

$("#new-quote").on('click', getNewQuote);
$("#tweet").on('click', tweet);
