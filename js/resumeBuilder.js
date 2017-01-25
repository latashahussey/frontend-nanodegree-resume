

/* Bio */
var bio = {
    "name": "LaTasha Hussey",
    "role": "Front-End Web Developer",
    "phone": "713-487-7391",
    "email": "latasha.hussey@gmail.com",
    "pictureURL": "images/tasha-tilt.jpg",
    "welcomeMessage": "Hello",
    "skills":"HTML5, CSS3, JavaScript, jQuery, Git, Gulp, WordPress"
};

/* Replace header and role */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.phone);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
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
