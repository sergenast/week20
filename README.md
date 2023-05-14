# week20

1. установить Node.js и проверить, все ли норм установилось, с помощью команд node -v и npm -v в терминале

2. ввести команду npm -v 

3. код, написанный в finally, сработает в любом случае, вне зависимости от того, произойдет ошибка или нет

4. try {
    let user = undefined;
    console.log(`Привет, ${user.name}`);
} catch {
    console.log('Имя пользователя не заполнено');
}

5. с помощью throw new Error ('Некорректный формат данных')

6. npm install или npm i

7. try {
    let number = 'ыыы'
    console.log(parseInt(number));

    if (number !== Number) {
        throw new Error('Некорректные данные.Введите число')
    }

} catch {
    console.log('Некорректные данные')
}

8. 