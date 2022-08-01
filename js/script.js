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
}
/*(function maksim_generator()
{
	let shuffle = [];
	for (let i = 0; i <= 24; i++) {
		let random = Math.floor(Math.random() * 2);
		shuffle.push(random);
	}
	field = shuffle;
	for (let i = 0; i <= 24; i++) {
		if (field[i] == 0) {

		} else {

		}
	}
	return field;
}())*/