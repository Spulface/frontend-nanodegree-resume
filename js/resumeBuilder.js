var bio = {
"name" : "Martin Freyberg",
"role": "Technical Account Manager",
"contact" : {
	"mobile" : "+49151123124",
	"twitter" : "twitter.com/Spulface",
	"email" : "Spulface@aol.com",
	"location" : "Munich, Germany"
},
"pictureUrl" : "images/me.png",
"welcomeMsg" : "Hey there, it's Martin!",
"skills" : ["mega","man","oida"]
};

var work = {
"jobs" : [
	{
		"title" : "Technical Account Manager",
		"employer" : "AWIN AG",
		"dates" : "07/2016 - current",
		"location" : "Munich, Germany",
		"description" : "FPOC for Customer Tech Integrations"
	},
	{
		"title" : "Product Manager",
		"employer" : "Shore GmbH",
		"dates" : "01/2016 - 06/2016",
		"location" : "Munich, Germany",
		"description" : "Project Lead - Payment Processor Integration"
	}
]};

var projects = {
"projects" : [
	{
		"title" : "Dynamic Adcode Structuring",
		"dates" : "07/2017 - current",
		"description" : "Allowing A-grade customers to use dynamic target URLs for any given affilinet adcode.",
		"images" : []
	},
	{
		"title" : "Stripe Payment Processor Integration",
		"dates" : "02/2016 - 06/2016",
		"description" : "Providing a B2B integration (Stripe API + own frontend) that allows end customers to process their payments through a wite label Stripe integration.",
		"images" : []
	}
]};


var education = {
"schools" : [
	{
		"name" : "University of Applied Sciences",
		"dates" : "2008 - 2012",
		"location" : "Munich, Germany",
		"majors" : ["Business Administration"]
	},
	{
		"name" : "Berufsoberschule München Nord",
		"dates" : "2007 - 2008",
		"location" : "Munich, Germany"
	},
	{	
		"name" : "Realschule Tutzing",
		"dates" : "1999 - 2004",
		"location" : "Tutzing, Germany"
	}
],
"onlineCourses" : [
	{
		"title": "JavaScript Basics",
		"school": "UDACITY",
		"dates": "09/2017 - current",
		"url": "https://de.udacity.com/course/javascript-basics--ud804/"
	}
]};

function displayWork()
{
	if (bio.skills.length !== 0)
	{
		$("#header").append(HTMLskillsStart)
		
		for (var i = 0; i < bio.skills.length; i++)
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]))
	};

	for (job in work.jobs)
	{
		if (work.jobs.hasOwnProperty(job))
		{
			$("#workExperience").append(HTMLworkStart)
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));

		}
	}}
$(document).click(function(loc) {
  var cor = {x:0, y:0};
  cor.x = loc.pageX;
  cor.y = loc.pageY;
  logClicks(cor.x,cor.y);
});
