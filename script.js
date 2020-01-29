//imports from quotes.js
import { quotes } from './quotes.js';

//array of backgrounds
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

//global variable for switching backgrounds with a crossfade
let currentBackground = 1;

function getNewQuote() {
	//retrieves a random quote from the list
	const x = Math.floor(Math.random()* quotes.length);
	$("#quote").fadeToggle(1000, function () {
		$("#text").html(quotes[x]);
		$(window).scrollTop(0);
		$("#quote").fadeToggle(1000);
	});
}

function getNewBackground() {
	//randomly chooses a new background and crossfades to the new one
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
	//scroll the text down a pixel
	window.scrollBy(0,1);
}

//changes background every 15 seconds
const backgroundFade = setInterval(getNewBackground, 15000);

//auto scroll the text
const autoScroll = setInterval(scroll, 10)
getNewBackground()

$("document").ready(function() {
	//loads a quote when the page loads and fades it in
	setTimeout(function() {
		$(window).scrollTop(0);
		const x = Math.floor(Math.random()* quotes.length);
		$("#text").html(quotes[x]);
		$("#quote").fadeIn(1500);
	}, 1000)
	});

function tweet() {
	//function to set up a tweet with current quote
	const tweetText = $("#text").text().replace(/\s/g,'%20');
	const url = 'https://twitter.com/intent/tweet?text=' + tweetText + "%0A%09-Jack Handey";
	window.open(url, '_blank')
}

$("#new-quote").on('click', getNewQuote);
$("#tweet").on('click', tweet);
