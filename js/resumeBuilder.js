

/* Bio */
var bio = {
    "name": "LaTasha Hussey",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "713-487-7391",
        "email": "latasha.hussey@gmail.com",
        "github":"latashahussey",
        "twitter":"@latashahussey",
        "location":"Austin"
    },
    "welcomeMessage": "Hello",
    "skills": [
        "HTML5", "CSS3", "JavaScript", "jQuery", "Git", "Gulp", "WordPress"
    ],
    "bioPic": "images/tasha-tilt.jpg"
};

/* Work */
var work = {};

work.position = "Instructional Technologist II";
work.employer = "Lone Star College-Online";
work.years = "2013-Present";
work.city = "Houston, TX";

/* Education */
var education = {};

education.name = "Tarleton State University-Central Texas";
education.years = "2008-2010";
education.city = "Killeen, TX";

var education = [
  {
	"name":"Udacity",
    "location": "Online",
    "major":"Front-End Developer Nanodegree",
    "graduation": 2017
},
  {
	"name":"Skillcrush",
    "location": "Online",
    "major":"WordPress Developer Blueprint",
    "graduation": 2016
},
  {
	"name":"Tarleton State University-Central Texas",
    "location": "Killeen, TX",
    "major":"Masters of Science in Information Systems",
    "graduation": 2010
},
  {
	"name":"Tarleton State University-Central Texas",
    "location": "Killeen, TX",
    "major":"Bachelor of Science in Liberal Arts",
    "graduation": 2004
},
  {
	"name":"Central Texas College",
    "location": "Killeen, TX",
    "major":"Associate of Applied Sciences in Office Administration",
    "graduation": 2001
}];

/* Replace header and role */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.position);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.years);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.city);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.years);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.city);

/* Add bio to header */
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedSkills);
$("#header").append(formattedWelcomeMsg);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkTitle);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkLocation);
$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);
