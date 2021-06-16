// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
        
        estados(states[0],states[1],states[2]);
        
      	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";		
		
	ensuciar(states);
		
    finalizar = (estados_posibles.length == estados_final.length) && estados_posibles.every(function(element, index) {
    return element === estados_final[index]; });
    
		if (finalizar){
    console.log(estados_posibles);
    console.log("Ya se cumplieron todos los estados");
		return
	}
		
	setTimeout(function(){ test(states); }, 100);
}

function ensuciar(states){
	var estados = ['CLEAN', 'DIRTY']

    if (states[1] == 'CLEAN'){
        states[1] = estados[Math.floor(Math.random() * 2)];
	}
    if (states[2] == 'CLEAN'){
        states[2] = estados[Math.floor(Math.random() * 2)];  
	}
}

function estados(posicion, izquierda, derecha){
	if (izquierda == 'DIRTY' && derecha == 'DIRTY' && posicion == 'A'){
		estados_posibles[0] = 1;
		return	
	} else if (izquierda == 'DIRTY' && derecha == 'CLEAN' && posicion == 'A'){
		estados_posibles[1] = 1
		return
	} else if (izquierda == 'CLEAN' && derecha == 'DIRTY' && posicion == 'A'){
		estados_posibles[2] = 1
		return
	} else if (izquierda == 'CLEAN' && derecha == 'CLEAN' && posicion == 'A'){
		estados_posibles[3] = 1
		return
	} else if (izquierda == 'DIRTY' && derecha == 'DIRTY' && posicion == 'B'){
		estados_posibles[4] = 1
		return
	} else if (izquierda == 'DIRTY' && derecha == 'CLEAN' && posicion == 'B'){
		estados_posibles[5] = 1
		return
	} else if (izquierda == 'CLEAN' && derecha == 'DIRTY' && posicion == 'B'){
		estados_posibles[6] = 1
		return
	} else if (izquierda == 'CLEAN' && derecha == 'CLEAN' && posicion == 'B'){
		estados_posibles[7] = 1
		return
	}
}

var states = ["A","DIRTY","DIRTY"];
var estados_posibles = [0,0,0,0,0,0,0,0];
var estados_final = [1,1,1,1,1,1,1,1];
test(states);
