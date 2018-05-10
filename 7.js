const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let attempts = 3;

while (attempts > 0) {
  let enter = prompt(`Введите пароль, у вас есть ${attempts} попытки`, '');
  attempts -= 1;
  if (!enter) {
  	alert (`Введите пароль, у вас есть ${attempts} попытки`)
    break;
  } else {
    if (passwords.includes(enter)) {
      alert('Добро пожаловать!');
      break;
    } else if (enter !== passwords && attempts >= 1) {
      alert(`Введите пароль, у вас есть ${attempts} попытки`);
    } else if (attempts <= 0) {
      alert('У вас закончились попытки, аккаунт заблокирован!');
    }
  }
} 
