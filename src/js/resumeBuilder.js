var work = {
    "jobs": [{
            "employer": "Lone Star College-University Park",
            "title": "Adjunct Faculty",
            "location": "Houston, TX",
            "dates": "August 2014-Present",
            "description": "De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium."
        },
        {
            "employer": "Lone Star College-Online",
            "title": "Instructional Technologist II",
            "location": "Houston, TX",
            "dates": "November 2013-Present",
            "description": "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium."
        },
        {
            "employer": "Central Texas College",
            "title": "Junior Systems Engineer",
            "location": "Killeen, TX",
            "dates": "May 2011-June 2013",
            "description": "Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Jane Doette Portfolio",
            "dates": "2017",
            "descripton":"Hi soulless creaturas, imo monstra adventus vultus comedat cerebella viventium.",
            "images": [
              "http://lorempixel.com/300/200/abstract/1",
              "http://lorempixel.com/300/200/abstract/2",
              "http://lorempixel.com/300/200/abstract/3"
            ]
        },
        {
            "title": "Animal Trading Cards",
            "dates": "2017",
            "descripton":"Creaturas, imo monstra adventus vultus comedat cerebella viventium.",
            "images": [
              "http://lorempixel.com/300/200/animals/1",
              "http://lorempixel.com/300/200/animals/2",
              "http://lorempixel.com/300/200/animals/3"
            ]
        },
        {
            "title": "Technics",
            "dates": "2017",
            "descripton": "Imo monstra adventus vultus comedat cerebella viventium.",
            "images": [
                "http://lorempixel.com/300/200/technics/6",
                "http://lorempixel.com/300/200/technics/2",
                "http://lorempixel.com/300/200/technics/4"
            ]
        }
    ]
};

var bio = {
    "name": "LaTasha Hussey",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Welcome to my online resume project.",
    "biopic": "../dist/images/tasha-tilt-small.jpg",
    "contacts": {
        "mobile": "713-487-7391",
        "email": "latasha.hussey@gmail.com",
        "github": "latashahussey",
        "twitter": "@latashahussey",
        "location": "Austin, TX"
    },
    "skills": [
        "HTML5",
        "CSS3",
        "WordPress",
        "Javascript",
        "jQuery",
        "Git",
        "Grunt",
        "Gulp"
    ]
};

var education = {
    "schools": [{
            "name": "Texas A&M University-Central Texas",
            "location": "Killeen, TX",
            "degree": "MS",
            "dates": "2008-2010",
            "url": "http://www.tamuct.edu ",
            "major": [
                "Information Systems"
            ]
        },
        {
            "name": "Tarleton State University-Central Texas",
            "location": "Killeen, TX",
            "degree": "BS",
            "dates": "2001-2004",
            "url": "http://www.tarleton.edu",
            "major": [
                "Liberal Arts"
            ]
        },
        {
            "name": "Central Texas College",
            "location": "Killeen, TX",
            "degree": "AAS",
            "dates": "1999-2001",
            "url": "http://www.ctcd.edu",
            "major": [
                "Office Administration"
            ]
        }

    ],
    "onlineCourses": [{
            "title": "Front-End Developer Nanodegree",
            "school": "Udacity",
            "dates": "January 2017-Present",
            "url": "http://www.udacity.com"
        },
        {
            "title": "WordPress Developer Blueprint",
            "school": "Skillcrush",
            "dates": "August 2016-September 2016",
            "url": "http://www.skillcrush.com"
        }
    ]
};

/* MAIN */
$("#main").append(internationalizeButton);

function inName(){
  finalName = bio.name.split(" ");
  firstName = finalName[0];
  lastName = finalName[1].toUpperCase();

  return firstName + " " + lastName;
}

/* Check to see if data exist, then add to page*/

/* -- HEADER -- */
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedBioPic);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedTwitter);
  $("#topContacts").append(formattedGithub);
  $("#header").append(formattedWelcomeMsg);

  /*Skills*/
  if (bio.skills.length > 0) {
      //Add Skills section header
      $("#header").append(HTMLskillsStart);

      //Grab all skills and display them
      for (var skill = 0; skill < bio.skills.length; skill++) {
          formattedHTMLskill = HTMLskills.replace("%data%", bio.skills[skill]);
          $("#skills").append(formattedHTMLskill);
      }
  }
};

/* -- WORK EXPERIENCE -- */
work.display = function() {
    if (work.jobs.length > 0) {
        //Add Work Experience
        $("#workExperience").append(HTMLworkStart);

        //Grab all jobs and display them
        for (var job = 0; job < work.jobs.length; job++) {
            var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

            var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

            $(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle);

            var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedHTMLworkDates);

            var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedHTMLworkLocation);

            var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedHTMLworkDescription);
        }
    }
};

/* -- PROJECTS -- */

//Encapsulate all projects into a function to display
projects.display = function() {
    if (projects.projects.length > 0){

      for (var project = 0; project < projects.projects.length; project++) {
          $("#projects").append(HTMLprojectStart);

          var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
          $(".project-entry:last").append(formattedHTMLprojectTitle);

          var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
          $(".project-entry:last").append(formattedHTMLprojectDates);

          var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].descripton);
          $(".project-entry:last").append(formattedHTMLprojectDescription);


          //Display all images within the array for this project
          if(projects.projects[project].images.length >0) {
            for (image in projects.projects[project].images){
              var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
              $(".project-entry:last").append(formattedHTMLprojectImage);
            }
          }
        }
    }
};

/* -- EDUCATION -- */
education.display = function() {
    if (education.schools.length > 0) {


        //Grab all schools and display them
        for (var school = 0; school < education.schools.length; school++) {
            //Add School Education
            $("#education").append(HTMLschoolStart);

            var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);

            var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

            $(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree);

            $(".education-entry:last a").attr('href', education.schools[school].url);

            $(".education-entry:last a").attr('target', '_blank');

            var formattedHTMLschoolDates = HTMLworkDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedHTMLschoolDates);

            var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedHTMLschoolLocation);

            //Display all majors within the array for this school
            if(education.schools[school].major.length > 0) {
              for (var major = 0; major < education.schools[school].major.length; major++){
                  var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[major]);
                  $(".education-entry:last").append(formattedHTMLschoolMajor);
              }
          }
        }
    }

    //Add Online Education
    if (education.onlineCourses.length > 0) {
        //Add Education
        $(".education-entry:last").append(HTMLonlineClasses);

        for(var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
            //Add School Education
            $("#education").append(HTMLschoolStart);

            var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);

            var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);

            //Display online course title with school
            $(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);

            $(".education-entry:last a").attr('href', education.onlineCourses[onlineCourse].url);

            $(".education-entry:last a").attr('target', '_blank');


            var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);

            $(".education-entry:last").append(formattedHTMLonlineDates);

            var formattedHTMLonlineURL= HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

            $(".education-entry:last").append(formattedHTMLonlineURL);

            $(".education-entry:last a").last().attr('href', education.onlineCourses[onlineCourse].url);

            $(".education-entry:last a").last().attr('target', '_blank');

        }

    }
};

/* Display each section */
bio.display();
work.display();
projects.display();
education.display();

/* -- Google Map of Work Locations */
$("#mapDiv").append(googleMap);

/* -- LET'S CONNECT (FOOTER) -- */
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
