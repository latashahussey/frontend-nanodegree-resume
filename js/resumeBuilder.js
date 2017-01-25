

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

/* Replace header and role */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);


/* Add bio to header */
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedSkills);
$("#header").append(formattedWelcomeMsg);
