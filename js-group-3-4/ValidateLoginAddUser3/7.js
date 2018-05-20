const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const login = prompt('Enter your login');
// Проверяем на нужную длину логина
const checkLoginValidity = login => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
    
  }
};
// Проверяем, есть ли такой логин,

const checkIfLoginExists = (logins, login) => {
  if (logins.includes(login)) {
    return true;
  } else {
  	return false;
  }
};

const addLogin = (logins, login) => {
  if (checkLoginValidity(login) && !checkIfLoginExists(logins, login)) {
    logins.push(login);
    console.log('Логин успешно добавлен!');
    console.log(logins);
  } else if (!checkLoginValidity(login)) {
  	console.log('Ошибка! Логин должен быть от 4 до 16 символов' );
    return;
  } else if (checkIfLoginExists(logins, login)) {
  	console.log('Такой логин существует');
    return;
  }
    else return;
};

if (login !== null) {
  addLogin(logins, login);
}
