// Task 1
"use strict";
let resort = prompt('Введите число от 1 до 3', '1 - taba, 2 - sharm, 3 - hurgada');
let out1 = document.getElementById('out1');

if (resort >= 1 && resort <=3) {
    if (resort === 1) {
	    out1.innerHTML = 'Вы выбрали курорт - taba' ;
    }    
    else if (resort === 2) {
	    out1.innerHTML = 'Вы выбрали курорт - sharm' ;
    }
    else if (resort === 3) {
	    out1.innerHTML = 'Вы выбрали курорт - hurgada' ;
    }
}

else alert('Нет такого курорта, далее мы предложим доступные варианты') 

// Task 2

let people = prompt('Введите число учасников группы', '');
let out2 = document.getElementById('out2');

let tabaFree = 6;
let sharmFree = 15;
let hurgadaFree = 25;

	if (people == Math.abs(people) && people == Math.round(people))
		// Math.abs (Этот метод возвращает абсолютное значение числа, 
		// 	то есть иными словами - если число неотрицательное, 
		// 	то его и возвращает, а если отрицательное - отбрасывает знак "минус".)
	 //    Math.round (Округление до ближайшего целого)
	 {
		if (people<=25) {
			let hurgadaPeople = confirm('Согласны ли Вы быть в группе Hurgada?');
			if (hurgadaPeople) {
				out2.innerHTML = `Ваша группа Hurgada - ${25-people} мест осталось`;
			}
			else if (people<=15) {
				let shurmPeople = confirm('Согласны ли Вы быть в группе Sharm?');
				if (shurmPeople) {
					out2.innerHTML = `Ваша группа Shurm - ${15-people} мест осталось`;
				}
				else if (people<=6) {
					let tabaPeople = confirm('Согласны ли Вы быть в группе Taba?');
					if (tabaPeople) {
						out2.innerHTML = `Ваша группа Taba - ${6-people} мест осталось`;
					}
					else {
						alert('Мест  нет!');
					}
				}
				else {
					alert('Мест  нет!');
				}
			}
			else {
				alert('Мест  нет!');
			}
		}
		else {
			alert('Мест нет!');
		}
	}
	else alert('Вы никуда не поедете!')
