var possibleRuns = [1,2,3,4,5,6];

var teams1 = {
    name:"",
    runs:[],
    score:0
}

var teams2 = {
    name:"",
    runs:[],
    score:0
}

var turn,run;

window.onload = () => {
    updateName();
    selectTurn();
    updateButtonText();
    updateScore();
    updateRuns();
}

var selectTurn = () => {
    turn = Math.round(Math.random()+1);
}

var strikeButton = () => {
    console.log("stike working");
    run = Math.round(Math.random() * (possibleRuns.length));
    run = (run == 5) ? 'W' : run;
    if(turn == 1)
    {
        teams1.runs.push(run);
        teams1.score = calculateScore(teams1.runs);
        console.log(teams1.score);
    }
    else
    {
        teams2.runs.push(run);
        teams2.score = calculateScore(teams2.runs);
        console.log(teams2.score);
    }
    updateButtonText();
    updateRuns();
    updateScore();
}

var updateButtonText = () => {
    var button = document.getElementById("button");
    var result = document.getElementById("result");
    result.style.visibility="";
    if(teams1.runs.length === 6 && teams2.runs.length === 6)
    {
        button.remove();
        result.textContent = teams1.score === teams2.score ? 'It is Draw' : `${teams1.score > teams2.score ? teams1.name : teams2.name} wins` ;
    }
    else
    {
        turn = teams1.runs.length == 6 ? 2 : teams2.runs.length == 6 ? 1 : turn;
        button.textContent = `${turn == 1 ? teams1.name : teams2.name} strike`;
    }
}

var updateName = () => {
    document.getElementById("name1").textContent = "CSK";
    document.getElementById("name2").textContent = "MI";
    teams1.name = "CSK";
    teams2.name = "MI";
}

var calculateScore =(runs) => {
    return runs.map( (run) => {
        return run == 'W' ? 0 : run;
    }).reduce( (total, run) => total + run)
}

var updateScore = () => {
    document.getElementById("score1").textContent = teams1.score;
    console.log(teams1.score);
    document.getElementById("score2").textContent = teams2.score;
    console.log(teams2.score);
}

var updateRuns = () => {
    var team1Runs = document.getElementById("team1Runs").children;
    var team2Runs = document.getElementById("team2Runs").children;
    teams1.runs.forEach((run,index) => {
        team1Runs[index].textContent = run;
    })
    teams2.runs.forEach((run,index) => {
        team2Runs[index].textContent = run;
    })
}
