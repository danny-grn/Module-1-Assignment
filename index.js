var nbChoresEmerick = 1;
var nbChoresDanny = 4;
var nbChoresMatteo = 3;
var nbChoresLeo = 2;


function leastChores(){
	var v1 =  Math.min(nbChoresLeo, nbChoresDanny, nbChoresEmerick, nbChoresMatteo);
	if (v1 == nbChoresEmerick){return "Emerick";}
	if (v1 == nbChoresDanny){return "Danny";}
	if (v1 == nbChoresLeo){return "Leo";}
	return "Matteo";
}

function mostChores(){
	var v1 =  Math.max(nbChoresLeo, nbChoresDanny, nbChoresEmerick, nbChoresMatteo);
	if (v1 == nbChoresEmerick){return "Emerick";}
	if (v1 == nbChoresDanny){return "Danny";}
	if (v1 == nbChoresLeo){return "Leo";}
	return "Matteo";
}

console.log("Hello, the person that have done the least chores is: " + leastChores());
console.log("He will have to do the next chores");
console.log("The person that have done the most chores is: " + mostChores());
console.log("He can rest");