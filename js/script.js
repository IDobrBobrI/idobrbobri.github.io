let field = [0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0]
function reply_click()
{
	let click = event.srcElement.id;
	change_colour(click);
}
function change_colour(click)
{
	//self-button
	    switch(field[click]) {
			case 0:
			field[click] = 1;
			document.getElementById(click).style.backgroundColor = 'yellow';
			break;
			case 1:
			field[click] = 0;
			document.getElementById(click).style.backgroundColor = 'gray';
		}
		//end self-button

		//left-button
		if (click == 5 || click == 10 || click == 15 || click == 20) {
		} else {
			switch(field[parseInt(click)-1]) {
				case 0:
				field[parseInt(click)-1] = 1;
				document.getElementById(parseInt(click)-1).style.backgroundColor = 'yellow';
				break;
				case 1:
				field[parseInt(click)-1] = 0;
				document.getElementById(parseInt(click)-1).style.backgroundColor = 'gray';
			}
		}
		//end left-button
		//right-button
		if (click == 4 || click == 9 || click == 14 || click == 19) {
		} else {
			switch(field[parseInt(click)+1]) {
				case 0:
				field[parseInt(click)+1] = 1;
				document.getElementById(parseInt(click)+1).style.backgroundColor = 'yellow';
				break;
				case 1:
				field[parseInt(click)+1] = 0;
				document.getElementById(parseInt(click)+1).style.backgroundColor = 'gray';
			}
		}
		//end right-button
		//top-button
		switch(field[parseInt(click)-5]) {
			case 0:
			field[parseInt(click)-5] = 1;
			document.getElementById(parseInt(click)-5).style.backgroundColor = 'yellow';
			break;
			case 1:
			field[parseInt(click)-5] = 0;
			document.getElementById(parseInt(click)-5).style.backgroundColor = 'gray';
		}
		//end top-button
		//top-button
		switch(field[parseInt(click)+5]) {
			case 0:
			field[parseInt(click)+5] = 1;
			document.getElementById(parseInt(click)+5).style.backgroundColor = 'yellow';
			break;
			case 1:
			field[parseInt(click)+5] = 0;
			document.getElementById(parseInt(click)+5).style.backgroundColor = 'gray';
		}
		//end top-button
		check_victory(field);
}
function check_victory(field) {
	let sum = 0;
	for (let i = 0; i <=24; i++) {
		sum += field[i];
	}
	if (sum == 0) {
		alert("You won!");
	}
}
function gen_1_level() {
	field = [0, 0, 0, 0, 0,
			 0, 1, 1, 1, 0,
			 0, 1, 1, 1, 0,
			 0, 1, 1, 1, 0,
			 0, 0, 0, 0, 0]
	document.getElementById("0").style.backgroundColor = 'gray';
	document.getElementById("1").style.backgroundColor = 'gray';
	document.getElementById("2").style.backgroundColor = 'gray';
	document.getElementById("3").style.backgroundColor = 'gray';
	document.getElementById("4").style.backgroundColor = 'gray';
	document.getElementById("5").style.backgroundColor = 'gray';

	document.getElementById("6").style.backgroundColor = 'yellow';
	document.getElementById("7").style.backgroundColor = 'yellow';
	document.getElementById("8").style.backgroundColor = 'yellow';

	document.getElementById("9").style.backgroundColor = 'gray';
	document.getElementById("10").style.backgroundColor = 'gray';

	document.getElementById("11").style.backgroundColor = 'yellow';
	document.getElementById("12").style.backgroundColor = 'yellow';
	document.getElementById("13").style.backgroundColor = 'yellow';

	document.getElementById("14").style.backgroundColor = 'gray';
	document.getElementById("15").style.backgroundColor = 'gray';

	document.getElementById("16").style.backgroundColor = 'yellow';
	document.getElementById("17").style.backgroundColor = 'yellow';
	document.getElementById("18").style.backgroundColor = 'yellow';

	document.getElementById("19").style.backgroundColor = 'gray';
	document.getElementById("20").style.backgroundColor = 'gray';
	document.getElementById("21").style.backgroundColor = 'gray';
	document.getElementById("22").style.backgroundColor = 'gray';
	document.getElementById("23").style.backgroundColor = 'gray';
	document.getElementById("24").style.backgroundColor = 'gray';
	return field;
}
function gen_2_level() {
	field = [0, 1, 0, 1, 0,
			 1, 0, 1, 0, 1,
			 1, 1, 1, 1, 1,
			 0, 1, 0, 1, 0,
			 0, 1, 1, 1, 0]
	document.getElementById("0").style.backgroundColor = 'gray';

	document.getElementById("1").style.backgroundColor = 'yellow';

	document.getElementById("2").style.backgroundColor = 'gray';

	document.getElementById("3").style.backgroundColor = 'yellow';

	document.getElementById("4").style.backgroundColor = 'gray';

	document.getElementById("5").style.backgroundColor = 'yellow';

	document.getElementById("6").style.backgroundColor = 'gray';

	document.getElementById("7").style.backgroundColor = 'yellow';

	document.getElementById("8").style.backgroundColor = 'gray';

	document.getElementById("9").style.backgroundColor = 'yellow';
	document.getElementById("10").style.backgroundColor = 'yellow';
	document.getElementById("11").style.backgroundColor = 'yellow';
	document.getElementById("12").style.backgroundColor = 'yellow';
	document.getElementById("13").style.backgroundColor = 'yellow';
	document.getElementById("14").style.backgroundColor = 'yellow';

	document.getElementById("15").style.backgroundColor = 'gray';

	document.getElementById("16").style.backgroundColor = 'yellow';

	document.getElementById("17").style.backgroundColor = 'gray';

	document.getElementById("18").style.backgroundColor = 'yellow';

	document.getElementById("19").style.backgroundColor = 'gray';
	document.getElementById("20").style.backgroundColor = 'gray';

	document.getElementById("21").style.backgroundColor = 'yellow';
	document.getElementById("22").style.backgroundColor = 'yellow';
	document.getElementById("23").style.backgroundColor = 'yellow';

	document.getElementById("24").style.backgroundColor = 'gray';
	return field;
}
function gen_3_level() {
	field = [0, 0, 0, 0, 0,
			 0, 0, 0, 0, 0,
			 1, 1, 1, 1, 1,
			 1, 1, 1, 1, 1,
			 0, 0, 0, 0, 0]
	document.getElementById("0").style.backgroundColor = 'blue';
	document.getElementById("1").style.backgroundColor = 'blue';
	document.getElementById("2").style.backgroundColor = 'blue';
	document.getElementById("3").style.backgroundColor = 'blue';
	document.getElementById("4").style.backgroundColor = 'blue';
	document.getElementById("5").style.backgroundColor = 'blue';
	document.getElementById("6").style.backgroundColor = 'blue';
	document.getElementById("7").style.backgroundColor = 'blue';
	document.getElementById("8").style.backgroundColor = 'blue';
	document.getElementById("9").style.backgroundColor = 'blue';
	
	document.getElementById("10").style.backgroundColor = 'yellow';
	document.getElementById("11").style.backgroundColor = 'yellow';
	document.getElementById("12").style.backgroundColor = 'yellow';
	document.getElementById("13").style.backgroundColor = 'yellow';
	document.getElementById("14").style.backgroundColor = 'yellow';
	document.getElementById("15").style.backgroundColor = 'yellow';
	document.getElementById("16").style.backgroundColor = 'yellow';
	document.getElementById("17").style.backgroundColor = 'yellow';
	document.getElementById("18").style.backgroundColor = 'yellow';
	document.getElementById("19").style.backgroundColor = 'yellow';
	
	document.getElementById("20").style.backgroundColor = 'gray';
	document.getElementById("21").style.backgroundColor = 'gray';
	document.getElementById("22").style.backgroundColor = 'gray';
	document.getElementById("23").style.backgroundColor = 'gray';
	document.getElementById("24").style.backgroundColor = 'gray';
	return field;
}
function gen_4_level()
{
	let shuffle = [];
	for (let i = 0; i <= 24; i++) {
		let random = Math.floor(Math.random() * 2);
		shuffle.push(random);
	}
	field = shuffle;
	for (let click = 0; click <= 24; click++) {
		if (field[click] == 0) {
		} else {
			change_colour(click);
		}
	}
	return field;
}