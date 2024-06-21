
let cValue, hValue, cAns, hAns, cSelect, hSelect, numLoops;
			
function compChoice()
{
    cValue = Math.random();
    
    if(cValue >= 0.7)
    {
        cValue = "Rock";
    }
    else if(cValue <= 0.3)
    {
        cValue = "Paper";
    }
    else 
    {
        cValue = "Scissors";
    }
    
    return cValue;
}

/*function humChoice()
{
    hValue = prompt("Enter you Weapon (Rock/Paper/Scissors)");
    return hValue;
}*/

function ansSelect(hSelect, cSelect)
{
    if(cSelect==hSelect)
{
    document.getElementById("ans1").innerHTML = "It's a Tie";
}
else if((cSelect=="Rock" && hSelect=="Scissors")||(cSelect=="Paper" && hSelect=="Rock")||(cSelect=="Scissors" && hSelect=="Paper"))
{
    document.getElementById("ans1").innerHTML = "Computer Wins";
}
else if((hSelect=="Rock" && cSelect=="Scissors")||(hSelect=="Paper" && cSelect=="Rock")||(hSelect=="Scissors" && cSelect=="Paper"))
{
    document.getElementById("ans1").innerHTML = "Human Wins";
}
else
{
    document.getElementById("ans1").innerHTML = "You have entered an Incorrect Input";
}

}


function playRound(hSelection)
{		
        hAns = hSelection;
        cAns = compChoice();
        console.log(cAns);
        console.log(hAns);
        
        ansSelect(hAns, cAns);
        
        document.getElementById("ans2").innerHTML = "Computer's Choice: "+ cAns;
        document.getElementById("ans3").innerHTML = "Human's Choice: "+ hAns;
}

document.getElementById("rock").addEventListener("click", function() 
{
    playRound("Rock");
});

document.getElementById("paper").addEventListener("click", function() 
{
    playRound("Paper");
});

document.getElementById("scissors").addEventListener("click", function() 
{
    playRound("Scissors");
});
