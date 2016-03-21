console.log('Sanity Check: JS is working!');

$(document).ready(function(){

  renderGitHubLinks(data.students);


});

function buildGitHubLink(first_name,last_name,user_name){
  return '<li><a href="https://github.com/' + user_name + '">' + first_name + ' ' + last_name + '</a></li>';
}

function renderGitHubLinks(students){
  students.forEach(function(el){
    var link = buildGitHubLink(el.first_name,el.last_name,el.github_username);
    $('#student_list').append(link);
  })
}


var data = {
  school: "General Assembly",
  cohort: 27,
  room: 1,
  github_schedule: "https://github.com/sf-wdi-27-28/schedule-27",
  students:[
    {
      first_name: 'Rene',
      last_name: 'Arellano',
      github_username: 'relative-rene'
    },
    {
      first_name: 'Keith',
      last_name: 'Francis',
      github_username: 'kjfrancis'
    },
    {
      first_name: 'Joanne',
      last_name: 'Abad',
      github_username: 'Jabad28'
    },
     {
      first_name: 'Marcelo',
      last_name: 'leon',
      github_username: 'Mel195'
    },
    {
      first_name: 'Kirby',
      last_name: 'Tate III',
      github_username: 'shindomino' //When's Marvel?
    },
    {
      first_name: 'Ayush',
      last_name: 'Jha',
      github_username: 'ayush'
    },
    {
      first_name: 'Jonathan',
      last_name: 'Ortiz',
      github_username: 'jortiz31'
    },
    {
      first_name: 'Herman',
      last_name: 'Chan',
      github_username: 'hermchan'
    },
    {
      first_name: "Phill",
      last_name: "Cheng",
      github_username: "PJC-1"
    },
    {
      first_name: "Justin",
      last_name: "Pettit",
      github_username: "ahza64",
      role: "Master of code destruction"
    },
    {
      first_name: 'Paul',
      last_name: 'Cleary',
      github_username: 'Two-Watch-Boy'
    },
    {
      first_name: "Jacquelyn",
      last_name: "Fambrough",
      github_username: "jacquelynfambrough"
    },
    {
      first_name: "Bryan",
      last_name: "Smith",
      github_username: "smicl11"
    },
    {
      first_name: 'Anna',
      last_name: 'Sobolewska',
      github_username: 'sobolewskaanna'
    },
    {
      first_name: "Ada",
      last_name: "Reid",
      github_username: "adamrobertreid"
    },
    {
      first_name: "Andrea",
      last_name: "Ceballos",
      github_username: "andreaainara10"
    },
    {
      first_name: "Ilter",
      last_name: "Ates",
      github_username: 'ilterates',
      personality: "sassy"
    },
    {
      first_name: "Sarah",
      last_name: "Bannister",
      github_username: "Srhbnnstr"
    },
    {
      first_name: 'Nathan',
      last_name: 'Lee',
      github_username: 'timesize'
    },
    {
      first_name: 'John',
      last_name: 'Ruhsam',
      github_username: 'ruhsam'
    },
    {
      first_name: "Eric",
      last_name: "Han",
      github_username: "scoobaroo"
    },
    {
      first_name: 'Arthur',
      last_name: 'Tonelli',
      github_username: 'altonelli'
   }
  ],
  instructors: [
    {
      last_name: "Fauver",
      first_name: "Cory",
      github_username: "cofauver"
    },
    {
      last_name: "Gaff",
      first_name: "Travis",
      github_username: "tgaff",
      car: {
        make: 'kia',
        model: 'cilantro',
        year: 2019
      }
    },
    {
      last_name: "Veenstra",
      first_name: "Brianna",
      github_username: "bgveenstra"
    },
    {
      role: "DiR",
      first_name: "Wilbot",
      last_name: "Cauthen",
      github_username: "willcauthen"
    }
  ]
};
