var firebaseConfig = {
    apiKey: "AIzaSyDc9Wq7XdZxekC615opfnus242ZT3zjgao",
    authDomain: "quiz-e1b3a.firebaseapp.com",
    projectId: "quiz-e1b3a",
    storageBucket: "quiz-e1b3a.appspot.com",
    messagingSenderId: "429781514691",
    appId: "1:429781514691:web:d243b384744f462bf56576"
  };
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);

  var change={
    scoreboard:0,
    id:"sd"
    }

var questionArray = [ 
    {
        ques:"Which Urdu has been taken from the following language:",
        answer:2,
        options :[
            "Persian",
            "Arabic",
            "Turkish",
            "India"
        ]
    },
    {
        ques:"Word Urdu means:",
        answer:0,
        options :[
            "Army",
            "Believers",
            "A group of students",
            "None of these"
        ]
    },
    {
        ques:"Who composed the verses of Pakistan national Anthem?:",
        answer:1,
        options :[
            "Faiz Ahmed Faiz",
            "Hafeez Jallandri",
            "Allama Iqbal",
            "Nasir Kazmi"
        ]
    },
    {
        ques:"When do we pray Fajr?:",
        answer:3,
        options :[
            "After Sunrise",
            "Afternoon",
            "At Night",
            "Before Sunrise"
        ]
    },
    {
        ques: "If x is a set and the set contains the real number between 1 and 2, then the set is ____.",
        answer: 2,
        options: [
          "Infinite set",
          "b.	Finite set",
          "c.	Empty set",
          "d.	Not mentioned",
        ]
    }
];

// var app = firebase.initializeApp(firebaseConfig);
var count = 0;
    var score =0;



var options = document.getElementsByName('op')
function calc(){
    for(var i = 0; i<options.length; i++){
        if(options[i].checked){
            var ans = options[i].value

            if(i == questionArray[count].answer){
                score++
                console.log(score);
            }
            options[i].checked = false
        }
    }
}


let btn = document.querySelector('button')
btn.addEventListener("click",active)
function active(){
    var change= document.getElementById('submission')
if(count ==questionArray.length){
    change.innerHTML= "submit"
    btn.classList.toggle('is_active')
}
}

function showques(e){
    // for Question
    var question = document.getElementById('sawal');
    question.innerHTML = questionArray[e].ques

    // for options
    var optns = document.querySelectorAll('.para');
    for(var i = 0; i<optns.length; i++){
        optns[i].innerHTML = questionArray[e].options[i]
    }

    console.log(optns.length);
}

function nextQues(){
    var optns = document.getElementsByName('op')
    var btn = document.getElementById('nextBtn')
    var cond = false
    for(var i = 0; i<optns.length;i++){
        if(optns[i].checked == true){
            calc()
             cond = true;
            
        }
    }
        if(cond){
            if(count<questionArray.length-1){
                count++
                showques(count)
            }
            else{
                alert('you have secured'+score+"marks")
                app.database().ref('/userdetails').child(change.id).update({ score: score })
               
                change.scoreboard=score;
    alert(change.scoreboard)
    alert(change.id)
    window.open("./main.html")
            }
        }
    }


    function getUserData() {
        app.database().ref('/users').on("child_added", function (data) {
          console.log(data)
          console.log(data.key)
          console.log(data.val())
        })
      }
      
      
    //   function deleteData() {
    //     app.database().ref('/').remove()
    //   }
      
      
      app.database().ref('/userdetails').on("child_added",function(data){
        console.log(data.parentNode)
        change.id=data.key;
        console.log(data.key)
        console.log()
      
      })


    function verify(){
        var firstname=document.getElementById('name').value
        var lastname = document.getElementById('e-mail').value
        var age=document.getElementById('mynum').value
        // var fs=document.getElementById('fname')
      
        var obj={
          firstname:firstname,
          lastname:lastname,
          score:0,
          age:age
            
          }
          alert("Your Test is start Now.")
             app.database().ref('/').child(key).push(obj)
        
             window.open("./main.html")
             .then(function(success){
          console.log(success,'success')
             })
             .catch(function(err){
          console.log(err,'err')
             })
        }
    


