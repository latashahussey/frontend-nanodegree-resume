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
            "descripton": "Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium.",
            "images": [
                "images/project1.jpg"
            ]
        },
        {
            "title": "Animal Trading Cards",
            "dates": "2017",
            "descripton": "Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium.",
            "images": [
                "images/project2.jpg"
            ]
        },
        {
            "title": "Animal Trading Cards",
            "dates": "2017",
            "descripton": "Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium.",
            "images": [
                "images/project3.jpg"
            ]
        }
    ]
};

var bio = {
    "name": "LaTasha Hussey",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Hi, I am a front-end web developer.",
    "biopic": "images/tasha-tilt.jpg",
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
            "url": "http://www.tarletone.edu",
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
            "dates": "2017",
            "url": "http://www.udacity.com"
        },
        {
            "title": "WordPress Developer Blueprint",
            "school": "Skillcrush",
            "dates": "August 2016-September 2017",
            "url": "http://www.skillcrush.com"
        }
    ]
};

/* Check to see if data exist, then add to page*/

/* -- HEADER -- */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedWelcomeMsg);

/*Skills*/
if (bio.skills.length > 0) {
    //Add Skills section header
    $("#header").append(HTMLskillsStart);

    //Grab all skills and display them
    for (skill in bio.skills) {
        formattedHTMLskill = HTMLskills.replace("%data%", bio.skills[skill]);

        $("#skills").append(formattedHTMLskill);
    }
}

/* -- WORK EXPERIENCE -- */
if (work.jobs.length > 0) {
    //Add Work Experience
    $("#workExperience").append(HTMLworkStart);

    //Grab all jobs and display them

    for (job in work.jobs) {
        var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        $(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle);

        var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedHTMLworkDates);

        var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedHTMLworkLocation);

        var formattedHTMLworkDescription = HTMLworkLocation.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedHTMLworkDescription);
    }
}
