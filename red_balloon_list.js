	 //-------------------------------------------------------------------------------
	 //  array of the 16 stimuli, 
	var init_stimuli = [
	 	['stimuli/obj1_Red.jpg','red','sofa'],
	 	['stimuli/obj2_Red.jpg','red','balloon'],
	 	['stimuli/obj3_Red.jpg','red','jacket'],
	 	['stimuli/obj4_Red.jpg','red','can'],
	 	['stimuli/obj1_Blue.jpg','blue','sofa'],
	 	['stimuli/obj1_Green.jpg','green','sofa'],
	 	['stimuli/obj1_Purple.jpg','purple','sofa'],
	 	['stimuli/obj2_Blue.jpg','blue','balloon'],
	 	['stimuli/obj2_Green.jpg','green','balloon'],
	  	['stimuli/obj2_Purple.jpg','purple','balloon'],
	 	['stimuli/obj3_Blue.jpg','blue','jacket'],
	 	['stimuli/obj3_Green.jpg','green','jacket'],
	 	['stimuli/obj3_Purple.jpg','purple','jacket'],
		['stimuli/obj4_Blue.jpg','blue','can'],
	 	['stimuli/obj4_Green.jpg','green','can'],
	 	['stimuli/obj4_Purple.jpg','purple','can']
	];

	//creates three lists of the stimuli, each 16 elements long, the elements of the three lists differ by their condition tag
	var adj_stimuli = [];
	var noun_stimuli = [];
	var adjnoun_stimuli = [];
	for(var k=0;k<init_stimuli.length;k++){
		adj_stimuli.push(init_stimuli[k].slice(0));		
		adj_stimuli[k].push('Adj');
		noun_stimuli.push(init_stimuli[k].slice(0));
		noun_stimuli[k].push('Noun');
		adjnoun_stimuli.push(init_stimuli[k].slice(0));
		adjnoun_stimuli[k].push('AdjNoun');
	}
	 


	//--------------------------------------------------------------------------------
	//generates the 64 trials in which 'is it blue/red/green/purple?' is asked by making four lists of sixteen, one list per question
	var blue_adj_stimuli = []; 
	var red_adj_stimuli = [];
	var green_adj_stimuli = [];
	var purple_adj_stimuli = [];
	for(var x=0;x<adj_stimuli.length; x++){
		blue_adj_stimuli.push(adj_stimuli[x].slice(0)),
		blue_adj_stimuli[x].push('Is it blue?');  	
		red_adj_stimuli.push(adj_stimuli[x].slice(0)),
		red_adj_stimuli[x].push('Is it red?');
		green_adj_stimuli.push(adj_stimuli[x].slice(0)),
		green_adj_stimuli[x].push('Is it green?');	  	
		purple_adj_stimuli.push(adj_stimuli[x].slice(0)),
		purple_adj_stimuli[x].push('Is it purple?');
		
	};

	//--------------------------------------------------------------------------------
	//generates the 64 trials in which 'is it a balloon/jacket/can/sofa?' is asked by making four lists of sixteen, one list per question
	var balloon_noun_stimuli = [];
	var jacket_noun_stimuli = [];
	var can_noun_stimuli = [];
	var sofa_noun_stimuli = [];
	for(var x=0; x<noun_stimuli.length; x++){
		balloon_noun_stimuli.push(noun_stimuli[x].slice(0)),
		balloon_noun_stimuli[x].push('Is it a balloon?');
		jacket_noun_stimuli.push(noun_stimuli[x].slice(0)),
		jacket_noun_stimuli[x].push('Is it a jacket?');
		can_noun_stimuli.push(noun_stimuli[x].slice(0)),
		can_noun_stimuli[x].push('Is it a can?');
		sofa_noun_stimuli.push(noun_stimuli[x].slice(0)),
		sofa_noun_stimuli[x].push('Is it a sofa?');
	};
	


//--------------------------------------------------------------------------------
	//creates three lists for the red balloon adjNoun question, one of perfect successes(there will initially only be one of these out of the sixteen), one for near misses (the three non-red balloons and the three red non-balloons), and one for the 9 perfect failures.
	var red_balloon_adjnoun_stimuli = [];
	var red_balloon_adjnoun_total_success = [];
	var red_balloon_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'red' && adjnoun_stimuli[x][2] == 'balloon'){
			red_balloon_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'red' && adjnoun_stimuli[x][2] != 'balloon'){
			red_balloon_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			red_balloon_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<red_balloon_adjnoun_total_success.length; x++){
		red_balloon_adjnoun_total_success[x].push('Is it a red balloon?');
	};
	for(var x=0; x<red_balloon_adjnoun_total_failure.length; x++){
		red_balloon_adjnoun_total_failure[x].push('Is it a red balloon?');
	};
	for(var x=0; x<red_balloon_adjnoun_stimuli.length; x++){
		red_balloon_adjnoun_stimuli[x].push('Is it a red balloon?');
	};
	//adds two extra successful trials
	while(red_balloon_adjnoun_total_success.length < 3){
		red_balloon_adjnoun_total_success.push(red_balloon_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials, making sure that there is an even balance of red/blue/green/purple things and cans/sofas/balloons/jackets over all the trials
	var red_balloon_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(red_balloon_adjnoun_total_failure, 1);
	var red_balloon_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < red_balloon_adjnoun_total_failure_randomized.length; k++){
			   if(red_balloon_adjnoun_total_failure_randomized[k][1] != red_balloon_adjnoun_total_failure_appended[0][1] && red_balloon_adjnoun_total_failure_randomized[k][1] != red_balloon_adjnoun_total_failure_appended[1][1] && red_balloon_adjnoun_total_failure_randomized[k][1] != red_balloon_adjnoun_total_failure_appended[2][1] &&	red_balloon_adjnoun_total_failure_randomized[k][2] != 			red_balloon_adjnoun_total_failure_appended[0][2] &&				red_balloon_adjnoun_total_failure_randomized[k][2] != 			red_balloon_adjnoun_total_failure_appended[1][2] &&				red_balloon_adjnoun_total_failure_randomized[k][2] != 		red_balloon_adjnoun_total_failure_appended[2][2]){
					red_balloon_adjnoun_total_failure_appended[j] =red_balloon_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//---------------------------------------------------------------------------------
	//same as above but for blue balloon

	var blue_balloon_adjnoun_stimuli = [];
	var blue_balloon_adjnoun_total_success = [];
	var blue_balloon_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'blue' && adjnoun_stimuli[x][2] == 'balloon'){
			blue_balloon_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'blue' && adjnoun_stimuli[x][2] != 'balloon'){
			blue_balloon_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			blue_balloon_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<blue_balloon_adjnoun_total_success.length; x++){
		blue_balloon_adjnoun_total_success[x].push('Is it a blue balloon?');
	};
	for(var x=0; x<blue_balloon_adjnoun_total_failure.length; x++){
		blue_balloon_adjnoun_total_failure[x].push('Is it a blue balloon?');
	};
	for(var x=0; x<blue_balloon_adjnoun_stimuli.length; x++){
		blue_balloon_adjnoun_stimuli[x].push('Is it a blue balloon?');
	};
	//adds two extra successful trials
	while(blue_balloon_adjnoun_total_success.length < 3){
		blue_balloon_adjnoun_total_success.push(blue_balloon_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var blue_balloon_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(blue_balloon_adjnoun_total_failure, 1);
	var blue_balloon_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < blue_balloon_adjnoun_total_failure_randomized.length; k++){
			   if(blue_balloon_adjnoun_total_failure_randomized[k][1] != blue_balloon_adjnoun_total_failure_appended[0][1] && blue_balloon_adjnoun_total_failure_randomized[k][1] != blue_balloon_adjnoun_total_failure_appended[1][1] && 		blue_balloon_adjnoun_total_failure_randomized[k][1] != 	blue_balloon_adjnoun_total_failure_appended[2][1] && blue_balloon_adjnoun_total_failure_randomized[k][2] != blue_balloon_adjnoun_total_failure_appended[0][2] && blue_balloon_adjnoun_total_failure_randomized[k][2] != blue_balloon_adjnoun_total_failure_appended[1][2] && blue_balloon_adjnoun_total_failure_randomized[k][2] != blue_balloon_adjnoun_total_failure_appended[2][2]){
					blue_balloon_adjnoun_total_failure_appended[j] = blue_balloon_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}


//------------------------------------------------------------------------------------
//same as above, but for green balloon

	var green_balloon_adjnoun_stimuli = [];
	var green_balloon_adjnoun_total_success = [];
	var green_balloon_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'green' && adjnoun_stimuli[x][2] == 'balloon'){
			green_balloon_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'green' && adjnoun_stimuli[x][2] != 'balloon'){
			green_balloon_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			green_balloon_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<green_balloon_adjnoun_total_success.length; x++){
		green_balloon_adjnoun_total_success[x].push('Is it a green balloon?');
	};
	for(var x=0; x<green_balloon_adjnoun_total_failure.length; x++){
		green_balloon_adjnoun_total_failure[x].push('Is it a green balloon?');
	};
	for(var x=0; x<green_balloon_adjnoun_stimuli.length; x++){
		green_balloon_adjnoun_stimuli[x].push('Is it a green balloon?');
	};
	//adds two extra successful trials
	while(green_balloon_adjnoun_total_success.length < 3){
		green_balloon_adjnoun_total_success.push(green_balloon_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var green_balloon_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(green_balloon_adjnoun_total_failure, 1);
	var green_balloon_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < green_balloon_adjnoun_total_failure_randomized.length; k++){
			   if(green_balloon_adjnoun_total_failure_randomized[k][1] != green_balloon_adjnoun_total_failure_appended[0][1] && green_balloon_adjnoun_total_failure_randomized[k][1] != green_balloon_adjnoun_total_failure_appended[1][1] && green_balloon_adjnoun_total_failure_randomized[k][1] != green_balloon_adjnoun_total_failure_appended[2][1] &&	green_balloon_adjnoun_total_failure_randomized[k][2] != green_balloon_adjnoun_total_failure_appended[0][2] && green_balloon_adjnoun_total_failure_randomized[k][2] != green_balloon_adjnoun_total_failure_appended[1][2] &&	green_balloon_adjnoun_total_failure_randomized[k][2] != green_balloon_adjnoun_total_failure_appended[2][2]){
					green_balloon_adjnoun_total_failure_appended[j] =green_balloon_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//------------------------------------------------------------------------------------
	//same as above but for purple balloon
	

	var purple_balloon_adjnoun_stimuli = [];
	var purple_balloon_adjnoun_total_success = [];
	var purple_balloon_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'purple' && adjnoun_stimuli[x][2] == 'balloon'){
			purple_balloon_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'purple' && adjnoun_stimuli[x][2] != 'balloon'){
			purple_balloon_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			purple_balloon_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<purple_balloon_adjnoun_total_success.length; x++){
		purple_balloon_adjnoun_total_success[x].push('Is it a purple balloon?');
	};
	for(var x=0; x<purple_balloon_adjnoun_total_failure.length; x++){
		purple_balloon_adjnoun_total_failure[x].push('Is it a purple balloon?');
	};
	for(var x=0; x<purple_balloon_adjnoun_stimuli.length; x++){
		purple_balloon_adjnoun_stimuli[x].push('Is it a purple balloon?');
	};
	//adds two extra successful trials
	while(purple_balloon_adjnoun_total_success.length < 3){
		purple_balloon_adjnoun_total_success.push(purple_balloon_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var purple_balloon_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(purple_balloon_adjnoun_total_failure, 1);
	var purple_balloon_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < purple_balloon_adjnoun_total_failure_randomized.length; k++){
			   if(purple_balloon_adjnoun_total_failure_randomized[k][1] != purple_balloon_adjnoun_total_failure_appended[0][1] && purple_balloon_adjnoun_total_failure_randomized[k][1] != purple_balloon_adjnoun_total_failure_appended[1][1] && purple_balloon_adjnoun_total_failure_randomized[k][1] != purple_balloon_adjnoun_total_failure_appended[2][1] &&	purple_balloon_adjnoun_total_failure_randomized[k][2] != purple_balloon_adjnoun_total_failure_appended[0][2] &&				purple_balloon_adjnoun_total_failure_randomized[k][2] != purple_balloon_adjnoun_total_failure_appended[1][2] &&				purple_balloon_adjnoun_total_failure_randomized[k][2] != 		purple_balloon_adjnoun_total_failure_appended[2][2]){
					purple_balloon_adjnoun_total_failure_appended[j] =purple_balloon_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//------------------------------------------------------------------------------------
//same as above but for red sofa
	var red_sofa_adjnoun_stimuli = [];
	var red_sofa_adjnoun_total_success = [];
	var red_sofa_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'red' && adjnoun_stimuli[x][2] == 'sofa'){
			red_sofa_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'red' && adjnoun_stimuli[x][2] != 'sofa'){
			red_sofa_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			red_sofa_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<red_sofa_adjnoun_total_success.length; x++){
		red_sofa_adjnoun_total_success[x].push('Is it a red sofa?');
	};
	for(var x=0; x<red_sofa_adjnoun_total_failure.length; x++){
		red_sofa_adjnoun_total_failure[x].push('Is it a red sofa?');
	};
	for(var x=0; x<red_sofa_adjnoun_stimuli.length; x++){
		red_sofa_adjnoun_stimuli[x].push('Is it a red sofa?');
	};
	//adds two extra successful trials
	while(red_sofa_adjnoun_total_success.length < 3){
		red_sofa_adjnoun_total_success.push(red_sofa_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var red_sofa_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(red_sofa_adjnoun_total_failure, 1);
	var red_sofa_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < red_sofa_adjnoun_total_failure_randomized.length; k++){
			   if(red_sofa_adjnoun_total_failure_randomized[k][1] != red_sofa_adjnoun_total_failure_appended[0][1] && red_sofa_adjnoun_total_failure_randomized[k][1] != red_sofa_adjnoun_total_failure_appended[1][1] && red_sofa_adjnoun_total_failure_randomized[k][1] != red_sofa_adjnoun_total_failure_appended[2][1] &&	red_sofa_adjnoun_total_failure_randomized[k][2] != 			red_sofa_adjnoun_total_failure_appended[0][2] &&				red_sofa_adjnoun_total_failure_randomized[k][2] != 			red_sofa_adjnoun_total_failure_appended[1][2] &&				red_sofa_adjnoun_total_failure_randomized[k][2] != 		red_sofa_adjnoun_total_failure_appended[2][2]){
					red_sofa_adjnoun_total_failure_appended[j] =red_sofa_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}


//---------------------------------------------------------------------------------
//same as above but for blue sofa
	var blue_sofa_adjnoun_stimuli = [];
	var blue_sofa_adjnoun_total_success = [];
	var blue_sofa_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'blue' && adjnoun_stimuli[x][2] == 'sofa'){
			blue_sofa_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'blue' && adjnoun_stimuli[x][2] != 'sofa'){
			blue_sofa_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			blue_sofa_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<blue_sofa_adjnoun_total_success.length; x++){
		blue_sofa_adjnoun_total_success[x].push('Is it a blue sofa?');
	};
	for(var x=0; x<blue_sofa_adjnoun_total_failure.length; x++){
		blue_sofa_adjnoun_total_failure[x].push('Is it a blue sofa?');
	};
	for(var x=0; x<blue_sofa_adjnoun_stimuli.length; x++){
		blue_sofa_adjnoun_stimuli[x].push('Is it a blue sofa?');
	};
	//adds two extra successful trials
	while(blue_sofa_adjnoun_total_success.length < 3){
		blue_sofa_adjnoun_total_success.push(blue_sofa_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var blue_sofa_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(blue_sofa_adjnoun_total_failure, 1);
	var blue_sofa_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < blue_sofa_adjnoun_total_failure_randomized.length; k++){
			   if(blue_sofa_adjnoun_total_failure_randomized[k][1] != blue_sofa_adjnoun_total_failure_appended[0][1] && blue_sofa_adjnoun_total_failure_randomized[k][1] != blue_sofa_adjnoun_total_failure_appended[1][1] && blue_sofa_adjnoun_total_failure_randomized[k][1] != blue_sofa_adjnoun_total_failure_appended[2][1] &&	blue_sofa_adjnoun_total_failure_randomized[k][2] != 			blue_sofa_adjnoun_total_failure_appended[0][2] &&				blue_sofa_adjnoun_total_failure_randomized[k][2] != 			blue_sofa_adjnoun_total_failure_appended[1][2] &&				blue_sofa_adjnoun_total_failure_randomized[k][2] != 		blue_sofa_adjnoun_total_failure_appended[2][2]){
					blue_sofa_adjnoun_total_failure_appended[j] =blue_sofa_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//---------------------------------------------------------------------------------
//same as above but for green sofa
	var green_sofa_adjnoun_stimuli = [];
	var green_sofa_adjnoun_total_success = [];
	var green_sofa_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'green' && adjnoun_stimuli[x][2] == 'sofa'){
			green_sofa_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'green' && adjnoun_stimuli[x][2] != 'sofa'){
			green_sofa_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			green_sofa_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<green_sofa_adjnoun_total_success.length; x++){
		green_sofa_adjnoun_total_success[x].push('Is it a green sofa?');
	};
	for(var x=0; x<green_sofa_adjnoun_total_failure.length; x++){
		green_sofa_adjnoun_total_failure[x].push('Is it a green sofa?');
	};
	for(var x=0; x<green_sofa_adjnoun_stimuli.length; x++){
		green_sofa_adjnoun_stimuli[x].push('Is it a green sofa?');
	};
	//adds two extra successful trials
	while(green_sofa_adjnoun_total_success.length < 3){
		green_sofa_adjnoun_total_success.push(green_sofa_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var green_sofa_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(green_sofa_adjnoun_total_failure, 1);
	var green_sofa_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < green_sofa_adjnoun_total_failure_randomized.length; k++){
			   if(green_sofa_adjnoun_total_failure_randomized[k][1] != green_sofa_adjnoun_total_failure_appended[0][1] && green_sofa_adjnoun_total_failure_randomized[k][1] != green_sofa_adjnoun_total_failure_appended[1][1] && green_sofa_adjnoun_total_failure_randomized[k][1] != green_sofa_adjnoun_total_failure_appended[2][1] &&	green_sofa_adjnoun_total_failure_randomized[k][2] != 			green_sofa_adjnoun_total_failure_appended[0][2] &&				green_sofa_adjnoun_total_failure_randomized[k][2] != 			green_sofa_adjnoun_total_failure_appended[1][2] &&				green_sofa_adjnoun_total_failure_randomized[k][2] != 		green_sofa_adjnoun_total_failure_appended[2][2]){
					green_sofa_adjnoun_total_failure_appended[j] =green_sofa_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//---------------------------------------------------------------------------------
//same as above but for purple sofa
	var purple_sofa_adjnoun_stimuli = [];
	var purple_sofa_adjnoun_total_success = [];
	var purple_sofa_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'purple' && adjnoun_stimuli[x][2] == 'sofa'){
			purple_sofa_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'purple' && adjnoun_stimuli[x][2] != 'sofa'){
			purple_sofa_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			purple_sofa_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<purple_sofa_adjnoun_total_success.length; x++){
		purple_sofa_adjnoun_total_success[x].push('Is it a purple sofa?');
	};
	for(var x=0; x<purple_sofa_adjnoun_total_failure.length; x++){
		purple_sofa_adjnoun_total_failure[x].push('Is it a purple sofa?');
	};
	for(var x=0; x<purple_sofa_adjnoun_stimuli.length; x++){
		purple_sofa_adjnoun_stimuli[x].push('Is it a purple sofa?');
	};
	//adds two extra successful trials
	while(purple_sofa_adjnoun_total_success.length < 3){
		purple_sofa_adjnoun_total_success.push(purple_sofa_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var purple_sofa_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(purple_sofa_adjnoun_total_failure, 1);
	var purple_sofa_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < purple_sofa_adjnoun_total_failure_randomized.length; k++){
			   if(purple_sofa_adjnoun_total_failure_randomized[k][1] != purple_sofa_adjnoun_total_failure_appended[0][1] && purple_sofa_adjnoun_total_failure_randomized[k][1] != purple_sofa_adjnoun_total_failure_appended[1][1] && purple_sofa_adjnoun_total_failure_randomized[k][1] != purple_sofa_adjnoun_total_failure_appended[2][1] &&	purple_sofa_adjnoun_total_failure_randomized[k][2] != 			purple_sofa_adjnoun_total_failure_appended[0][2] &&				purple_sofa_adjnoun_total_failure_randomized[k][2] != 			purple_sofa_adjnoun_total_failure_appended[1][2] &&				purple_sofa_adjnoun_total_failure_randomized[k][2] != 		purple_sofa_adjnoun_total_failure_appended[2][2]){
					purple_sofa_adjnoun_total_failure_appended[j] =purple_sofa_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//---------------------------------------------------------------------------------
//same as above but for red jacket
	var red_jacket_adjnoun_stimuli = [];
	var red_jacket_adjnoun_total_success = [];
	var red_jacket_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'red' && adjnoun_stimuli[x][2] == 'jacket'){
			red_jacket_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'red' && adjnoun_stimuli[x][2] != 'jacket'){
			red_jacket_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			red_jacket_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<red_jacket_adjnoun_total_success.length; x++){
		red_jacket_adjnoun_total_success[x].push('Is it a red jacket?');
	};
	for(var x=0; x<red_jacket_adjnoun_total_failure.length; x++){
		red_jacket_adjnoun_total_failure[x].push('Is it a red jacket?');
	};
	for(var x=0; x<red_sofa_adjnoun_stimuli.length; x++){
		red_jacket_adjnoun_stimuli[x].push('Is it a red jacket?');
	};
	//adds two extra successful trials
	while(red_jacket_adjnoun_total_success.length < 3){
		red_jacket_adjnoun_total_success.push(red_jacket_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var red_jacket_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(red_jacket_adjnoun_total_failure, 1);
	var red_jacket_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < red_jacket_adjnoun_total_failure_randomized.length; k++){
			   if(red_jacket_adjnoun_total_failure_randomized[k][1] != red_jacket_adjnoun_total_failure_appended[0][1] && red_jacket_adjnoun_total_failure_randomized[k][1] != red_jacket_adjnoun_total_failure_appended[1][1] && red_jacket_adjnoun_total_failure_randomized[k][1] != red_jacket_adjnoun_total_failure_appended[2][1] &&	red_jacket_adjnoun_total_failure_randomized[k][2] != 			red_jacket_adjnoun_total_failure_appended[0][2] &&				red_jacket_adjnoun_total_failure_randomized[k][2] != 			red_jacket_adjnoun_total_failure_appended[1][2] &&				red_jacket_adjnoun_total_failure_randomized[k][2] != 		red_jacket_adjnoun_total_failure_appended[2][2]){
					red_jacket_adjnoun_total_failure_appended[j] =red_jacket_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//---------------------------------------------------------------------------------
//same as above but for blue jacket
	var blue_jacket_adjnoun_stimuli = [];
	var blue_jacket_adjnoun_total_success = [];
	var blue_jacket_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'blue' && adjnoun_stimuli[x][2] == 'jacket'){
			blue_jacket_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'blue' && adjnoun_stimuli[x][2] != 'jacket'){
			blue_jacket_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			blue_jacket_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<blue_jacket_adjnoun_total_success.length; x++){
		blue_jacket_adjnoun_total_success[x].push('Is it a blue jacket?');
	};
	for(var x=0; x<blue_jacket_adjnoun_total_failure.length; x++){
		blue_jacket_adjnoun_total_failure[x].push('Is it a blue jacket?');
	};
	for(var x=0; x<blue_jacket_adjnoun_stimuli.length; x++){
		blue_jacket_adjnoun_stimuli[x].push('Is it a blue jacket?');
	};
	//adds two extra successful trials
	while(blue_jacket_adjnoun_total_success.length < 3){
		blue_jacket_adjnoun_total_success.push(blue_jacket_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var blue_jacket_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(blue_jacket_adjnoun_total_failure, 1);
	var blue_jacket_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < blue_jacket_adjnoun_total_failure_randomized.length; k++){
			   if(blue_jacket_adjnoun_total_failure_randomized[k][1] != blue_jacket_adjnoun_total_failure_appended[0][1] && blue_jacket_adjnoun_total_failure_randomized[k][1] != blue_jacket_adjnoun_total_failure_appended[1][1] && blue_jacket_adjnoun_total_failure_randomized[k][1] != blue_jacket_adjnoun_total_failure_appended[2][1] &&	blue_jacket_adjnoun_total_failure_randomized[k][2] != 			blue_jacket_adjnoun_total_failure_appended[0][2] &&				blue_jacket_adjnoun_total_failure_randomized[k][2] != 			blue_jacket_adjnoun_total_failure_appended[1][2] &&				blue_jacket_adjnoun_total_failure_randomized[k][2] != blue_jacket_adjnoun_total_failure_appended[2][2]){
					blue_jacket_adjnoun_total_failure_appended[j] =blue_jacket_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//---------------------------------------------------------------------------------
//same as above but for green jacket
	var green_jacket_adjnoun_stimuli = [];
	var green_jacket_adjnoun_total_success = [];
	var green_jacket_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'green' && adjnoun_stimuli[x][2] == 'jacket'){
			green_jacket_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'green' && adjnoun_stimuli[x][2] != 'jacket'){
			green_jacket_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			green_jacket_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<green_jacket_adjnoun_total_success.length; x++){
		green_jacket_adjnoun_total_success[x].push('Is it a green jacket?');
	};
	for(var x=0; x<green_jacket_adjnoun_total_failure.length; x++){
		green_jacket_adjnoun_total_failure[x].push('Is it a green jacket?');
	};
	for(var x=0; x<green_jacket_adjnoun_stimuli.length; x++){
		green_jacket_adjnoun_stimuli[x].push('Is it a green jacket?');
	};
	//adds two extra successful trials
	while(green_jacket_adjnoun_total_success.length < 3){
		green_jacket_adjnoun_total_success.push(green_jacket_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var green_jacket_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(green_jacket_adjnoun_total_failure, 1);
	var green_jacket_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < green_jacket_adjnoun_total_failure_randomized.length; k++){
			   if(green_jacket_adjnoun_total_failure_randomized[k][1] != green_jacket_adjnoun_total_failure_appended[0][1] && green_jacket_adjnoun_total_failure_randomized[k][1] != green_jacket_adjnoun_total_failure_appended[1][1] && green_jacket_adjnoun_total_failure_randomized[k][1] != green_jacket_adjnoun_total_failure_appended[2][1] &&	green_jacket_adjnoun_total_failure_randomized[k][2] != 			green_jacket_adjnoun_total_failure_appended[0][2] && green_jacket_adjnoun_total_failure_randomized[k][2] != 			green_jacket_adjnoun_total_failure_appended[1][2] && green_jacket_adjnoun_total_failure_randomized[k][2] != 		green_jacket_adjnoun_total_failure_appended[2][2]){
					green_jacket_adjnoun_total_failure_appended[j] =green_jacket_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//---------------------------------------------------------------------------------
//same as above but for purple jacket
	var purple_jacket_adjnoun_stimuli = [];
	var purple_jacket_adjnoun_total_success = [];
	var purple_jacket_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'purple' && adjnoun_stimuli[x][2] == 'jacket'){
			purple_jacket_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'purple' && adjnoun_stimuli[x][2] != 'jacket'){
			purple_jacket_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			purple_jacket_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<purple_jacket_adjnoun_total_success.length; x++){
		purple_jacket_adjnoun_total_success[x].push('Is it a purple jacket?');
	};
	for(var x=0; x<purple_jacket_adjnoun_total_failure.length; x++){
		purple_jacket_adjnoun_total_failure[x].push('Is it a purple jacket?');
	};
	for(var x=0; x<purple_jacket_adjnoun_stimuli.length; x++){
		purple_jacket_adjnoun_stimuli[x].push('Is it a purple jacket?');
	};
	//adds two extra successful trials
	while(purple_jacket_adjnoun_total_success.length < 3){
		purple_jacket_adjnoun_total_success.push(purple_jacket_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var purple_jacket_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(purple_jacket_adjnoun_total_failure, 1);
	var purple_jacket_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < purple_jacket_adjnoun_total_failure_randomized.length; k++){
			   if(purple_jacket_adjnoun_total_failure_randomized[k][1] != purple_jacket_adjnoun_total_failure_appended[0][1] && purple_jacket_adjnoun_total_failure_randomized[k][1] != purple_jacket_adjnoun_total_failure_appended[1][1] && purple_jacket_adjnoun_total_failure_randomized[k][1] != purple_jacket_adjnoun_total_failure_appended[2][1] &&	purple_jacket_adjnoun_total_failure_randomized[k][2] != purple_jacket_adjnoun_total_failure_appended[0][2] && purple_jacket_adjnoun_total_failure_randomized[k][2] != 			purple_jacket_adjnoun_total_failure_appended[1][2] && purple_jacket_adjnoun_total_failure_randomized[k][2] != 		purple_jacket_adjnoun_total_failure_appended[2][2]){
					purple_jacket_adjnoun_total_failure_appended[j] = purple_jacket_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//---------------------------------------------------------------------------------
//same as above but for red can
	var red_can_adjnoun_stimuli = [];
	var red_can_adjnoun_total_success = [];
	var red_can_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'red' && adjnoun_stimuli[x][2] == 'can'){
			red_can_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'red' && adjnoun_stimuli[x][2] != 'can'){
			red_can_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			red_can_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<red_can_adjnoun_total_success.length; x++){
		red_can_adjnoun_total_success[x].push('Is it a red can?');
	};
	for(var x=0; x<red_can_adjnoun_total_failure.length; x++){
		red_can_adjnoun_total_failure[x].push('Is it a red can?');
	};
	for(var x=0; x<red_can_adjnoun_stimuli.length; x++){
		red_can_adjnoun_stimuli[x].push('Is it a red can?');
	};
	//adds two extra successful trials
	while(red_can_adjnoun_total_success.length < 3){
		red_can_adjnoun_total_success.push(red_can_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var red_can_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(red_can_adjnoun_total_failure, 1);
	var red_can_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < red_can_adjnoun_total_failure_randomized.length; k++){
			   if(red_can_adjnoun_total_failure_randomized[k][1] != red_can_adjnoun_total_failure_appended[0][1] && red_can_adjnoun_total_failure_randomized[k][1] != red_can_adjnoun_total_failure_appended[1][1] && red_can_adjnoun_total_failure_randomized[k][1] != red_can_adjnoun_total_failure_appended[2][1] &&	red_can_adjnoun_total_failure_randomized[k][2] != 			red_can_adjnoun_total_failure_appended[0][2] &&				red_can_adjnoun_total_failure_randomized[k][2] != 			red_can_adjnoun_total_failure_appended[1][2] &&				red_can_adjnoun_total_failure_randomized[k][2] != 		red_can_adjnoun_total_failure_appended[2][2]){
					red_can_adjnoun_total_failure_appended[j] =red_can_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//---------------------------------------------------------------------------------
//same as above but for blue can
	var blue_can_adjnoun_stimuli = [];
	var blue_can_adjnoun_total_success = [];
	var blue_can_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'blue' && adjnoun_stimuli[x][2] == 'can'){
			blue_can_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'blue' && adjnoun_stimuli[x][2] != 'can'){
			blue_can_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			blue_can_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<blue_can_adjnoun_total_success.length; x++){
		blue_can_adjnoun_total_success[x].push('Is it a blue can?');
	};
	for(var x=0; x<blue_can_adjnoun_total_failure.length; x++){
		blue_can_adjnoun_total_failure[x].push('Is it a blue can?');
	};
	for(var x=0; x<blue_can_adjnoun_stimuli.length; x++){
		blue_can_adjnoun_stimuli[x].push('Is it a blue can?');
	};
	//adds two extra successful trials
	while(blue_can_adjnoun_total_success.length < 3){
		blue_can_adjnoun_total_success.push(blue_can_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var blue_can_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(blue_can_adjnoun_total_failure, 1);
	var blue_can_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < blue_can_adjnoun_total_failure_randomized.length; k++){
			   if(blue_can_adjnoun_total_failure_randomized[k][1] != blue_can_adjnoun_total_failure_appended[0][1] && blue_can_adjnoun_total_failure_randomized[k][1] != blue_can_adjnoun_total_failure_appended[1][1] && blue_can_adjnoun_total_failure_randomized[k][1] != blue_can_adjnoun_total_failure_appended[2][1] &&	blue_can_adjnoun_total_failure_randomized[k][2] != 			blue_can_adjnoun_total_failure_appended[0][2] &&				blue_can_adjnoun_total_failure_randomized[k][2] != 			blue_can_adjnoun_total_failure_appended[1][2] &&				blue_can_adjnoun_total_failure_randomized[k][2] != 		blue_can_adjnoun_total_failure_appended[2][2]){
					blue_can_adjnoun_total_failure_appended[j] =blue_can_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//---------------------------------------------------------------------------------
//same as above but for green can
	var green_can_adjnoun_stimuli = [];
	var green_can_adjnoun_total_success = [];
	var green_can_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'green' && adjnoun_stimuli[x][2] == 'can'){
			green_can_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'green' && adjnoun_stimuli[x][2] != 'can'){
			green_can_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			green_can_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<green_can_adjnoun_total_success.length; x++){
		green_can_adjnoun_total_success[x].push('Is it a green can?');
	};
	for(var x=0; x<green_can_adjnoun_total_failure.length; x++){
		green_can_adjnoun_total_failure[x].push('Is it a green can?');
	};
	for(var x=0; x<green_can_adjnoun_stimuli.length; x++){
		green_can_adjnoun_stimuli[x].push('Is it a green can?');
	};
	//adds two extra successful trials
	while(green_can_adjnoun_total_success.length < 3){
		green_can_adjnoun_total_success.push(green_can_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var green_can_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(green_can_adjnoun_total_failure, 1);
	var green_can_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < green_can_adjnoun_total_failure_randomized.length; k++){
			   if(green_can_adjnoun_total_failure_randomized[k][1] != green_can_adjnoun_total_failure_appended[0][1] && green_can_adjnoun_total_failure_randomized[k][1] != green_can_adjnoun_total_failure_appended[1][1] && green_can_adjnoun_total_failure_randomized[k][1] != green_can_adjnoun_total_failure_appended[2][1] &&	green_can_adjnoun_total_failure_randomized[k][2] != 			green_can_adjnoun_total_failure_appended[0][2] &&				green_can_adjnoun_total_failure_randomized[k][2] != 			green_can_adjnoun_total_failure_appended[1][2] &&				green_can_adjnoun_total_failure_randomized[k][2] != 		green_can_adjnoun_total_failure_appended[2][2]){
					green_can_adjnoun_total_failure_appended[j] = green_can_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}

//---------------------------------------------------------------------------------
//same as above but for purple can
	var purple_can_adjnoun_stimuli = [];
	var purple_can_adjnoun_total_success = [];
	var purple_can_adjnoun_total_failure = [];
	for(var x=0; x<adjnoun_stimuli.length; x++){
		if(adjnoun_stimuli[x][1] == 'purple' && adjnoun_stimuli[x][2] == 'can'){
			purple_can_adjnoun_total_success.push(adjnoun_stimuli[x].slice(0));	
		}
		else if(adjnoun_stimuli[x][1] != 'purple' && adjnoun_stimuli[x][2] != 'can'){
			purple_can_adjnoun_total_failure.push(adjnoun_stimuli[x].slice(0));	
		}
		else {
			purple_can_adjnoun_stimuli.push(adjnoun_stimuli[x].slice(0));
		}
	};
	//add the question data to each of the lists
	for(var x=0; x<purple_can_adjnoun_total_success.length; x++){
		purple_can_adjnoun_total_success[x].push('Is it a purple can?');
	};
	for(var x=0; x<purple_can_adjnoun_total_failure.length; x++){
		purple_can_adjnoun_total_failure[x].push('Is it a purple can?');
	};
	for(var x=0; x<purple_can_adjnoun_stimuli.length; x++){
		purple_can_adjnoun_stimuli[x].push('Is it a purple can?');
	};
	//adds two extra successful trials
	while(purple_can_adjnoun_total_success.length < 3){
		purple_can_adjnoun_total_success.push(purple_can_adjnoun_total_success[0].slice(0));
	};
	//randomly takes three of the nine total failure trials
	var purple_can_adjnoun_total_failure_randomized = jsPsych.randomization.repeat(purple_can_adjnoun_total_failure, 1);
	var purple_can_adjnoun_total_failure_appended = [
		 ['','','','',''],
		 ['','','','',''],
		 ['','','','','']
	];
	for(var j = 0; j < 3; j++){
		for(var k = 0; k < purple_can_adjnoun_total_failure_randomized.length; k++){
			   if(purple_can_adjnoun_total_failure_randomized[k][1] != purple_can_adjnoun_total_failure_appended[0][1] && purple_can_adjnoun_total_failure_randomized[k][1] != purple_can_adjnoun_total_failure_appended[1][1] && purple_can_adjnoun_total_failure_randomized[k][1] != purple_can_adjnoun_total_failure_appended[2][1] &&	purple_can_adjnoun_total_failure_randomized[k][2] != 			purple_can_adjnoun_total_failure_appended[0][2] &&				purple_can_adjnoun_total_failure_randomized[k][2] != 			purple_can_adjnoun_total_failure_appended[1][2] &&				purple_can_adjnoun_total_failure_randomized[k][2] != 		purple_can_adjnoun_total_failure_appended[2][2]){
					purple_can_adjnoun_total_failure_appended[j] = purple_can_adjnoun_total_failure_randomized[k].slice(0);
			}
		}
	}


//----------------------------------------------------------------------------------


//Compiling all trials into one randomized list:


//---------------------------------------------------------------------------------
//combines the 16 sets of 3 successes into the 48 yes trials for adjnoun


	var success_balloon_stimuli = red_balloon_adjnoun_total_success.concat(blue_balloon_adjnoun_total_success.concat(green_balloon_adjnoun_total_success.concat(purple_balloon_adjnoun_total_success)));
	var success_jacket_stimuli = red_jacket_adjnoun_total_success.concat(blue_jacket_adjnoun_total_success.concat(green_jacket_adjnoun_total_success.concat(purple_jacket_adjnoun_total_success)));
	var success_sofa_stimuli = red_sofa_adjnoun_total_success.concat(blue_sofa_adjnoun_total_success.concat(green_sofa_adjnoun_total_success.concat(purple_sofa_adjnoun_total_success)));
	var success_can_stimuli = red_can_adjnoun_total_success.concat(blue_can_adjnoun_total_success.concat(green_can_adjnoun_total_success.concat(purple_can_adjnoun_total_success)));		

	var total_adjnoun_success = success_balloon_stimuli.concat(success_can_stimuli.concat(success_sofa_stimuli.concat(success_jacket_stimuli)));
//------------------------------------------------------------------------------------
//combines the 16 sets of 3 total failures into the 48 absolute no trials for adjnoun

	var failure_balloon_stimuli = red_balloon_adjnoun_total_failure_appended.concat(blue_balloon_adjnoun_total_failure_appended.concat(green_balloon_adjnoun_total_failure_appended.concat(purple_balloon_adjnoun_total_failure_appended)));
	var failure_jacket_stimuli = red_jacket_adjnoun_total_failure_appended.concat(blue_jacket_adjnoun_total_failure_appended.concat(green_jacket_adjnoun_total_failure_appended.concat(purple_jacket_adjnoun_total_failure_appended)));
	var failure_sofa_stimuli = red_sofa_adjnoun_total_failure_appended.concat(blue_sofa_adjnoun_total_failure_appended.concat(green_sofa_adjnoun_total_failure_appended.concat(purple_sofa_adjnoun_total_failure_appended)));
	var failure_can_stimuli = red_can_adjnoun_total_failure_appended.concat(blue_can_adjnoun_total_failure_appended.concat(green_can_adjnoun_total_failure_appended.concat(purple_can_adjnoun_total_failure_appended)));

	var total_adjnoun_failure = failure_can_stimuli.concat(failure_sofa_stimuli.concat(failure_jacket_stimuli.concat(failure_balloon_stimuli)));

//------------------------------------------------------------------------------------
//combines the 16 sets of 6 partial failures into the 96 partial no trials

	var par_balloon_stimuli = red_balloon_adjnoun_stimuli.concat(blue_balloon_adjnoun_stimuli.concat(green_balloon_adjnoun_stimuli.concat(purple_balloon_adjnoun_stimuli)));
	var par_jacket_stimuli = red_jacket_adjnoun_stimuli.concat(blue_jacket_adjnoun_stimuli.concat(green_jacket_adjnoun_stimuli.concat(purple_jacket_adjnoun_stimuli)));
	var par_sofa_stimuli = red_sofa_adjnoun_stimuli.concat(blue_sofa_adjnoun_stimuli.concat(green_sofa_adjnoun_stimuli.concat(purple_sofa_adjnoun_stimuli)));
	var par_can_stimuli = red_can_adjnoun_stimuli.concat(blue_can_adjnoun_stimuli.concat(green_can_adjnoun_stimuli.concat(purple_can_adjnoun_stimuli)));

	var par_adjnoun_stimuli = par_balloon_stimuli.concat(par_can_stimuli.concat(par_sofa_stimuli.concat(par_jacket_stimuli)));
//------------------------------------------------------------------------------------
//combines the 96 partial no trials, 48 yes trials, and 48 absolute no trials into one list of all 192 trials in which is it a red/blue/green/purple balloon/sofa/jacket/can? is asked

	var all_adjnoun_trials = par_adjnoun_stimuli.concat(total_adjnoun_failure.concat(total_adjnoun_success));

//------------------------------------------------------------------------------------
// combines all the 64 adj trials(16 yes 48 no)
	var combined_adj_stimuli = purple_adj_stimuli.concat(green_adj_stimuli.concat(
		red_adj_stimuli.concat(blue_adj_stimuli)));
	var random_adj_stimuli = jsPsych.randomization.repeat(combined_adj_stimuli, 1);

//------------------------------------------------------------------------------------
//combines all the 64 noun trials(16 yes 48 no)
	var combined_noun_stimuli = balloon_noun_stimuli.concat(jacket_noun_stimuli.concat(can_noun_stimuli.concat(sofa_noun_stimuli)));
	var random_noun_stimuli = jsPsych.randomization.repeat(combined_noun_stimuli, 1);