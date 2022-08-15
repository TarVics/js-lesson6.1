/*
- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый

- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

- Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'

    - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com

Примітка
Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

- є масивlet coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


відсортувати його в спадаючому порядку за кількістю елементів в полі modules

- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb)) // 5

- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

-стоврити масив книжок (назва, кількість сторінок, автори , жанри).
-знайти наібльшу книжку.
- знайти книжку/ки з найбільшою кількістю жанрів
- знайти книжку/ки з найдовшою назвою
- знайти книжку/ки які писали 2 автори
- знайти книжку/ки які писав 1 автор
- вісортувати книжки по кількості сторінок по зростанню
*/

/********************************************************************/

consolex.header(`- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
  document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
`)
{
    const cutString = function (str, n) {
        const res = [];
        for (let i = 0; i < str.length; i += n) {
            res.push(str.substring(i, i + n));
        }
        return res;
    }
    const str = 'наслаждение';
    const num = 3;
    consolex.log('Маємо строку %S. Розіб\'ємо її на підстроки із %D символів: ', str, num);
    consolex.log(cutString(str, num));
}

/********************************************************************/

consolex.header(`- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
  document.writeln(delete_characters(str, 7)); // Каждый
`)
{
    const delete_characters = (str, n) => str.substring(0, n);
    let str = 'Каждый охотник желает знать';
    let num = 7;
    consolex.log('Маємо строку %S. Підрядок із %D символів: ', str, num);
    consolex.log('%S', delete_characters(str, num));
}

/********************************************************************/

consolex.header(`- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. 
  При цьому всі символи рядка необхідно перевести у верхній регістр.
  let str = "HTML JavaScript PHP";
  document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
`)
{
    const insert_dash = (str) => str.toUpperCase().replaceAll(' ', '-');
    let str = "HTML JavaScript PHP";
    consolex.log('Маємо строку %S. Перетворене значення буде: ', str);
    consolex.log('%S', insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
}

/********************************************************************/

consolex.header(`- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр 
  першого символу рядка з нижнього регістру у верхній.
`)
{
    const capitalize = (str) => str.substring(0, 1).toUpperCase().concat(str.substring(1));
    let str = "рядок як аргумент";
    consolex.log('Маємо строку %S. Перетворене значення буде: ', str);
    consolex.log('%S', capitalize(str));
}

/********************************************************************/

consolex.header(`- Дано список імен.
    let n1 = 'Harry..Potter'
    let n2 = 'Ron---Whisley'
    let n3 = 'Hermione__Granger'
    
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
    let n1 = 'Harry Potter'
    let n2 = 'Ron Whisley'
    let n3 = 'Hermione Granger'
`)
{
    /**
     * @description Функція приймає лише латинські літери. Нелатинські літери будуть вважатись пробілами
     * @param {string} str Строка для нормалізації
     * @returns {string}
     */
    const repairName = function (str) {
        let lastChar = '';
        let res = '';
        for (const char of str) {
            if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
                lastChar = char;
                res += lastChar;
            } else if (lastChar !== ' ') {
                lastChar = ' ';
                res += lastChar;
            }
        }
        return res;
    }
    const names = ['Harry..Potter', 'Ron---Whisley', 'Hermione__Granger'];
    consolex.log('Маємо список імен: ');
    names.forEach((name, index) => consolex.log('%D. %S', index + 1, name));
    consolex.log('Перетворений список імен: ');
    names.forEach((name, index) => consolex.log('%D. %S', index + 1, repairName(name)));
}

/********************************************************************/

consolex.header(`- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
`)
{
    const makeRandomInts = function (size) {
        const res = [];
        for (let i = 0; i < size; i++) {
            res.push(Math.round(Math.random() * 100));
        }
        return res;
    }
    let size = 5;
    consolex.log('Генеруємо масив довжиною %D: ', size, makeRandomInts(size));
}

/********************************************************************/

consolex.header(`- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. 
 Відсортувати його за допомоги sort
`)
{
    const makeRandomInts = function (size) {
        const res = [];
        for (let i = 0; i < size; i++) {
            res.push(Math.round(Math.random() * 100));
        }
        return res;
    }
    let size = 5;
    const arr = makeRandomInts(size);
    consolex.log('Генеруємо масив довжиною %D: ', size, arr);
    consolex.log('Сортуємо його: ', arr.sort((a, b) => a - b));
}

/********************************************************************/

consolex.header(`- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. 
  відфільтрувати його за допомоги filter, залишивши тільки парні числа (без 0!)
`)
{
    const makeRandomInts = function (size) {
        const res = [];
        for (let i = 0; i < size; i++) {
            res.push(Math.round(Math.random() * 100));
        }
        return res;
    }
    let size = 5;
    const arr = makeRandomInts(size);
    consolex.log('Генеруємо масив довжиною %D: ', size, arr);
    /* (без 0!), Я зрозумів умову так: якщо в числі є 0, то число виключається із масива */
    consolex.log('Фільтруємо його: ', arr.filter(value => !(value % 2) && (value % 10)));
}

/********************************************************************/

consolex.header(`- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
`)
{
    const capitalize = (str) =>
        // 1. маємо вхідну строку
        // 2. створюємо масив зі словами строки, вказаної у п1
        // 3. створюємо масив зі словами строки, які перетворені відповідно до вимог задачі
        // 4. з'єднуємо елементи масиву, отриманому у п3, у строку-результат
        str.split(' ').map(
            value => value.substring(0, 1).toUpperCase().concat(value.substring(1))
        ).join(' ');

    let str = "рядок як аргумент";
    consolex.log('1. Маємо строку %S. Перетворене значення буде: ', str);
    consolex.log('  %S', capitalize(str));

    const capitalize2 = function (str) {
        let prevPos = 0;
        let currPos = 0;
        let result = '';

        // 1. маємо вхідну строку
        // 2. послідовно вибираємо слова, перетворюючи їх, відповідно до вимог задачі та додаючи їх у строку-результат
        while (~(currPos = str.indexOf(' ', prevPos))) {
            result +=
                str.substring(prevPos, prevPos + 1).toUpperCase() +
                str.substring(prevPos + 1, currPos + 1);

            prevPos = currPos + 1;
        }
        result +=
            str.substring(prevPos, prevPos + 1).toUpperCase() +
            str.substring(prevPos + 1);

        return result;
    }

    let str2 = "рядок як аргумент";
    consolex.log('2. Маємо строку %S. Перетворене значення буде: ', str2);
    consolex.log('  %S', capitalize2(str2));
}

/********************************************************************/

consolex.header(`- Створити функцію-валідатор для адрес електронної пошти. 
 Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка 
 знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива 
 до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
 
 Протестувати на значеннях
    someemail@gmail.com
    someeMAIL@gmail.com
    someeMAIL@i.ua
    some.email@gmail.com

Примітка

Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". 
Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
`)
{
    /**
     * Перевірка валідності email адреси. Процедура виконує, перевірку згідно з вимогами, які
     * описані тут <i>https://en.wikipedia.org/wiki/Email_address#Syntax</i>
     * В реальності ж усі вимоги до формату адреси email - набагато спрощені. Наприклад, Google допускає
     * в локальній частині email лише цифри, крапку та латинські літери. У дану функцію варто додати налаштування
     * параметрів спрощеної перевірки.
     * Функція не створює допоміжних масивів, і виконує перевірку за один посимвольний прохід тексту адреси email
     * @param {string} email
     * @returns {boolean}
     */
    const isEmailAddressValid = function (email) {
        let maxPos = email.length - 1;
        if (maxPos > 255) return false;

        let currPos = 0;
        let inQuote = false;
        let char = '';
        let commentLevel = 0;
        let commentAfter = false;

        // TODO Відокремити перевірки частини в лапках та коментарів у окремі функції для подальшої опціональної перевірки

        /* local-part */

        while (char = email.charAt(currPos)) {
            if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
                // Символи a-z, A-Z дозволені у всіх випадках
            } else if (char >= '0' && char <= '9') {
                // Символи 0-9 дозволені у всіх випадках
            } else if (char === '@') {
                // У випадку, якщо лапки відсутні, перейдемо до розбору домену адреси
                if (!inQuote && !commentLevel) break;
            } else if (char === '.') {
                // У початковій позиції адреси заборонений "."
                if (currPos === 0) return false;
                if (!commentLevel) {
                    let nChar = email.charAt(currPos + 1);
                    // Дублювання поза лапками заборонено "..": john..smith@gmail.com
                    // Поза лапками в кінцевій частині локальної частини адреси заборонено ".": john.smith.@gmail.com
                    if (!inQuote && (nChar === '.' || nChar === '@')) return false;
                }
            } else if ("!#$%&'*+-/=?^_`{|}~".includes(char)) {
                // Символи "!#$%&'*+-/=?^_`{|}~" дозволені у всіх випадках
            } else if (char === '"') {
                if (!commentLevel) {
                    // !!!! A local part is either a Dot-string or a Quoted-string; it cannot be a combination.
                    // Відкриття лапок дозволено починати лише на початку local-part адреси
                    inQuote = currPos === 0;
                    if (
                        !inQuote && (
                            // Не допускаються пусті лапки ""
                            currPos < 2 ||
                            // Після лапки, яка закрилась, повинен слідувати символ @
                            email.charAt(currPos + 1) !== '@'
                        )
                    ) return false;
                }
            } else if (char === '\\') {
                // let nChar = email.charAt(currPos + 1);
                // if (!inQuote) {
                //     // Якщо нема лапок, \ виконує роль екранування символів
                //     // (even if escaped (preceded by a backslash), spaces, quotes, and backslashes
                //     // must still be contained by quotes)
                //     /* if ( !(' "(),:;<>@[\\]'.includes(nChar)) ) return false; */
                //     if ( !('(),:;<>@[]'.includes(nChar)) ) return false;
                // } else {
                //     // В лапках наступний символ після \ може бути, або \, або " - ( "...\\...\"..." )
                //     if (nChar !== '\\' && nChar !== '"') return false;
                // }
                if (!inQuote) {
                    // Активний коментар
                    if (commentLevel) {
                        let nChar = email.charAt(currPos + 1);
                        // Всередині коментара допускаються символи \\ та \)
                        if (nChar !== '\\' && nChar !== ')') return false;
                        currPos++;
                    } else return false;
                } else {
                    let nChar = email.charAt(currPos + 1);
                    // В лапках наступний символ після \ може бути, або \, або " - ( "...\\...\"..." )
                    if (nChar !== '\\' && nChar !== '"') return false;
                    currPos++;
                }
            } else if (char === '(') {
                if (!inQuote) {
                    // Збільшимо рівень вкладення
                    commentLevel++;
                    // Ознака того, що коментар повинен бути в кінці local-part
                    commentAfter = currPos !== 0;
                }
            } else if (char === ')') {
                if (!inQuote) {
                    // Зменшимо рівень вкладення
                    commentLevel--;
                    // Зайва дужка, що закриває коментар
                    if (commentLevel < 0) return false;
                    if (commentLevel === 0) {
                        let nChar = email.charAt(currPos + 1);
                        // За коментарем іде ще один ...)(....
                        if (nChar === '(') {
                            commentLevel++;
                            currPos++;
                        } else if (commentAfter && nChar !== '@')
                            return false; // Після коментаря, що в кінці має бути @
                    }
                }
            } else if (' "(),:;<>@[\\]'.includes(char)) {
                if (!inQuote && !commentLevel) return false;
            } else return false;

            currPos++;
        }

        /* domain-part */

        if (char !== '@' || currPos > 64 || currPos < 1 || currPos === maxPos) return false;
        currPos++;

        let addressType = 0;

        char = email.charAt(currPos);

        const eatComment = function () {
            // Маємо початковий коментар до частини домену
            if (char === '(') {
                commentLevel++;

                while (char = email.charAt(++currPos)) {
                    if (
                        char >= 'a' && char <= 'z' ||
                        char >= 'A' && char <= 'Z' ||
                        char >= '0' && char <= '9' ||
                        '.-:[]'.includes(char)
                    ) {
                        // Символи a-z, A-Z, 0-9 та .-:[] - дозволені у всіх випадках
                    } else if (char === '\\') {
                        // Активний коментар
                        if (commentLevel) {
                            let nChar = email.charAt(currPos + 1);
                            // Всередині коментаря допускаються символи \\ та \)
                            if (nChar !== '\\' && nChar !== ')') return false;
                            currPos++;
                        } else return false;
                    } else if (char === '(') {
                        // Збільшимо рівень вкладення
                        commentLevel++;
                    } else if (char === ')') {
                        // Зменшимо рівень вкладення
                        commentLevel--;
                        // Зайва дужка, що закриває коментар
                        if (commentLevel < 0) return false;
                        if (commentLevel === 0) {
                            currPos++;
                            char = email.charAt(currPos);
                            // За коментарем іде ще один ...)(....
                            if (char === '(') {
                                commentLevel++;
                            } else return true;
                        }
                    } else return false;
                }
            }
            return false;
        }

        // Маємо початковий коментар до частини домену
        if (char === '(' && !eatComment()) return false;

        { // Перевіримо коментар у кінці адреси у кінці частини домену
            let tmpPos = currPos;
            let tmpChar = char;
            currPos = email.indexOf('(', currPos);
            if (~currPos) {
                maxPos = currPos - 1;
                char = email.charAt(currPos);
                if (!eatComment() || char/* не кінець строки */) return false;
            }
            currPos = tmpPos;
            char = tmpChar;
        }

        // Перевіримо, чи домен представлений у вигляді IP адреси.
        // jsmith@[192.168.2.1] or jsmith@[IPv6:2001:db8::1]
        if (char === '[') {
            // Якщо домен починається "[", то домен повинен закінчуватись символом "]"
            if (email.charAt(maxPos) !== ']') return false;
            if (
                // У випадку IPv6 адреса починається з "[IPv6:"
                email.substring(currPos, currPos + '[IPv6:'.length) === '[IPv6:') {
                addressType = 1; /* IPv6 */
                currPos += '[IPv6:'.length;
            } else {
                currPos++;
                addressType = 2; /* IPv4 */
            }
        }

        let startPos = currPos;
        // Значення попереднього роздільника IP адреси (":" - для IPv6, "." - для IPv4)
        let prevDelim = startPos;
        // Підрахунок кількості цифр у IP адресі
        let numCount = 0;

        while (currPos <= maxPos && (char = email.charAt(currPos))) {
            if (char >= 'a' && char <= 'f' || char >= 'A' && char <= 'F') {
                // У випадку IPv4 символи a-f та A-F - заборонені
                if (addressType === 2) return false;
            } else if (char >= 'g' && char <= 'z' || char >= 'G' && char <= 'Z') {
                // У випадку IPv4, IPv6 символи g-z та G-Z - заборонені
                if (addressType > 0) return false;
            } else if (char >= '0' && char <= '9') {
                // Символи 0-9 дозволені у всіх випадках
            } else if (char === '.') {
                if (
                    // У початковій позиції домену заборонений "."
                    currPos === startPos ||
                    // Суфікс символьного домену із 1 літери заборонений
                    addressType === 0 && currPos >= maxPos - 1 ||
                    // У випадку IPv6 символ "." - заборонений
                    addressType === 1 /* IPv6 */ ||
                    // У випадку IPv4 в останній позиції заборонено "." [234.34.34.38.]
                    addressType === 2 && currPos === maxPos - 1 ||
                    // Дублювання заборонено ".."
                    email.charAt(currPos + 1) === '.'
                ) return false;

                // У випадку IPv4 перевіримо кількість цифр та їх діапазон 0-254 [234.34.34.38]
                if (addressType === 2) {
                    let num = +email.substring(prevDelim, currPos);
                    prevDelim = currPos + 1;
                    numCount++;
                    if(num < 0 || num > 254 || numCount > 3) return false;
                }
            } else if (char === '-') {
                if (
                    // У початковій позиції домену заборонений "-"
                    currPos === startPos ||
                    // У випадку IPv4, IPv6 символ "-" - заборонений
                    addressType > 0 /* IPv4, IPv6 */ ||
                    // У кінцевій позиції символьного домену заборонений "-"
                    currPos === maxPos ||
                    // Не впевнений, але й у випадку, якщо за "-" іде ".", то такий випадок також недопустимий
                    email.charAt(currPos + 1) === '.'
                ) return false;
            } else if (char === ':') {
                // У випадку IPv4 та символьного домену символ ":" - заборонений
                // У випадку IPv6 перевіримо кількість цифр та їх діапазон 0-0xFFFF
                // [IPv6:2001:0db8:85a3:0000:0000:8a2e:0370:7334]
                if (addressType === 1) {
                    let num = parseInt(email.substring(prevDelim, currPos), 16);
                    prevDelim = currPos + 1;
                    numCount++;
                    if(num < 0 || num > 0xFFFF || numCount > 7) return false;
                } else return false;
            } else if (char === ']') {
                // У випадку символьного домену символ "]" - заборонений
                // У випадку IPv4, IPv6 символ "]" - повинен бути лише у кінці
                if (addressType === 0 || currPos !== maxPos) return false;

                // У випадку IPv4 перевіримо кількість цифр та їх діапазон 0-254 [234.34.34.38]
                if (addressType === 2) {
                    let num = +email.substring(prevDelim, currPos);
                    prevDelim = currPos + 1;
                    numCount++;
                    if(num < 0 || num > 254 || numCount > 4) return false;
                }
                // У випадку IPv6 перевіримо кількість цифр та їх діапазон 0-0xFFFF
                // [IPv6:2001:0db8:85a3:0000:0000:8a2e:0370:7334]
                else if (addressType === 1) {
                    let num = parseInt(email.substring(prevDelim, currPos), 16);
                    prevDelim = currPos + 1;
                    numCount++;
                    if(num < 0 || num > 0xFFFF || numCount > 8) return false;
                } else return false;
            } else return false;

            currPos++;
        }
        return true;
    }

    const emails = [
        'someemail@gmail.com',
        'someeMAIL@gmail.com',
        'someeMAIL@i.ua',
        'some.email@gmail.com'
    ];
    const checkEmails = [
        {valid: true, email: 'simple@example.com'},
        {valid: true, email: 'very.common@example.com'},
        {valid: true, email: 'disposable.style.email.with+symbol@example.com'},
        {valid: true, email: 'other.email-with-hyphen@example.com'},
        {valid: true, email: 'fully-qualified-domain@example.com'},
        // (may go to user.name@example.com inbox depending on mail server)
        {valid: true, email: 'user.name+tag+sorting@example.com'},
        {valid: true, email: 'x@example.com'},
        {valid: true, email: 'example-indeed@strange-example.com'},
        // (slashes are a printable character, and allowed)
        {valid: true, email: 'test/test@test.com'},
        // (local domain name with no TLD, although ICANN highly discourages dotless email addresses[10])
        {valid: true, email: 'admin@mailserver1'},
        // (see the List of Internet top-level domains) https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains
        {valid: true, email: 'example@s.example'},
        // (space between the quotes)
        {valid: true, email: '" "@example.org'},
        // (quoted double dot)
        {valid: true, email: '"john..doe"@example.org'},
        // (bangified host route used for uucp mailers)
        {valid: true, email: 'mailhost!username@example.org'},
        // (include non-letters character AND multiple at sign, the first one being double quoted)
        {valid: true, email: '"very.(),:;<>[]\\".VERY.\\"very@\\\\ \\"very\\".unusual"@strange.example.com'},
        // (% escaped mail route to user@example.com via example.org)
        {valid: true, email: 'user%example.com@example.org'},
        // (local part ending with non-alphanumeric character from the list of allowed printable characters)
        {valid: true, email: 'user-@example.org'},
        // (IP addresses are allowed instead of domains when in square brackets, but strongly discouraged)
        {valid: true, email: 'postmaster@[123.123.123.123]'},
        // (IPv6 uses a different syntax)
        {valid: true, email: 'postmaster@[IPv6:2001:0db8:85a3:0000:0000:8a2e:0370:7334]'},
        // (no @ character)
        {valid: false, email: 'Abc.example.com'},
        // (only one @ is allowed outside quotation marks)
        {valid: false, email: 'A@b@c@example.com'},
        // (none of the special characters in this local-part are allowed outside quotation marks)
        {valid: false, email: 'a"b(c)d,e:f;g<h>i[j\\k]l@example.com'},
        // (quoted strings must be dot separated or the only element making up the local-part)
        {valid: false, email: 'just"not"right@example.com'},
        // (spaces, quotes, and backslashes may only exist when within quoted strings and preceded by a backslash)
        {valid: false, email: 'this is"not\\allowed@example.com'},
        // (even if escaped (preceded by a backslash), spaces, quotes, and backslashes must still be contained by quotes)
        {valid: false, email: 'this\\ still\\"not\\\\allowed@example.com'},
        // (local-part is longer than 64 characters)
        {valid: false, email: '1234567890123456789012345678901234567890123456789012345678901234+x@example.com'},
        // (Underscore is not allowed in domain part)
        {valid: false, email: 'i_like_underscore@but_its_not_allowed_in_this_part.example.com'},
        // (icon characters)
        {valid: false, email: 'QA[icon]CHOCOLATE[icon]@test.com'},
        {valid: false, email: 'john.doe@test.c'},

        // https://en.m.wikibooks.org/wiki/JavaScript/Best_practices
        {valid: true, email: 'me@example.com'},
        {valid: true, email: 'a.nonymous@example.com'},
        {valid: true, email: 'name+tag@example.com'},
        {valid: true, email: 'a.name+tag@example.com'},
        {valid: true, email: 'me.example@com'},
        {valid: true, email: '"spaces must be quoted"@example.com'},
        {valid: true, email: '!#$%&\'*+-/=.?^_`{|}~@[1.0.0.127]'},
        {valid: true, email: '!#$%&\'*+-/=.?^_`{|}~@[IPv6:0123:4567:89AB:CDEF:0123:4567:89AB:CDEF]'},
        // comments are discouraged but not prohibited by RFC2822.
        {valid: true, email: 'me(this is a comment)@example.com'},

        {valid: false, email: 'me@'},
        {valid: false, email: '@example.com'},
        {valid: false, email: 'me.@example.com'},
        {valid: false, email: '.me@example.com'},
        {valid: false, email: 'me@example..com'},
        {valid: false, email: 'me\\@example.com'},
        {valid: false, email: 'spaces\\ must\\ be\\ within\\ quotes\\ even\\ when\\ escaped@example.com'},
        {valid: false, email: 'a\\@mustbeinquotes@example.com'},

        /* RFC 2822                Internet Message Format               April 2001

        A.5. White space, comments, and other oddities

           White space, including folding white space, and comments can be
           inserted between many of the tokens of fields.  Taking the example
           from A.1.3, white space and comments can be inserted into all of the
           fields.

        ----
        From: Pete(A wonderful \) chap) <pete(his account)@silly.test(his host)>
        To:A Group(Some people)
             :Chris Jones <c@(Chris's host.)public.example>,
                 joe@example.org,
          John <jdoe@one.test> (my dear friend); (the end of the group)
        Cc:(Empty list)(start)Undisclosed recipients  :(nobody(that I know))  ;
        ----

           The above example is aesthetically displeasing, but perfectly legal.
        */
        {valid: true, email: '(comment)local.part@domain.part.tld'},
        {valid: true, email: '(comment)(comment)local.part@domain.part.tld'},
        {valid: true, email: 'local.part(comment)@domain.part.tld'},
        {valid: true, email: 'local.part@(comment)domain.part.tld'},
        {valid: true, email: 'local.part@domain.part.tld(comment)'},
    ];

    emails.forEach((email, index) =>
        consolex.log('%d. %S - %s', index + 1, email, isEmailAddressValid(email)));

    checkEmails.forEach((item, index) => {
        let res = isEmailAddressValid(item.email);
        consolex[res === item.valid ? 'log' : 'error']('%c%d%c. %S. Очікуємо %B; обчислили: %B',
            'color:' + (item.valid ? 'green' : 'red'), index + 1, 'color:none', item.email, item.valid, res)
    });

}

/********************************************************************/

consolex.header(`є масив coursesArray
  відсортувати його в спадаючому порядку за кількістю елементів в полі modules
`)
{
    const coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];

    consolex.log('Маємо масив: ');
    // Виводимо копію масиву. Без створення копії масиву в лог виводиться вже змінений масив
    consolex.log([...coursesArray]);
    consolex.log('Відсортований масив в спадаючому порядку за кількістю елементів в полі modules: ');
    coursesArray.sort((a, b) => b.modules.length - a.modules.length);
    consolex.log(coursesArray);
}

/********************************************************************/

consolex.header(`- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb)) // 5
`)
{
    /**
     * @description Підрахунок кількості збігів строки у тексті
     * @param {string} str Текст, у якому відбувається підраховування кількості збігів значення <i>stringsearch</i>
     * @param {string} stringsearch Текст, за яким відбувається підраховування кількості збігів в <i>str</i>
     * @returns {number}
     */
    const count = function (str, stringsearch) {
        if (!stringsearch) return 0;

        let prevPos = 0;
        let currPos = 0;
        let result = 0;

        while (~(currPos = str.indexOf(stringsearch, prevPos))) {
            result++;
            prevPos = currPos + stringsearch.length;
        }

        return result;
    }

    let str = "Астрономия это наука о небесных объектах";
    let symb = "о";

    consolex.log('Маємо рядок, у якому будемо шукати кількість повторів: %S', str);
    consolex.log('Маємо %S, яку будемо шукати', symb);
    consolex.log('Отримаємо кількість повторень %S у заданій строці: %D', symb, count(str, symb));

    consolex.log('Отримаємо кількість повторень %S у заданій строці: %D', symb + ' ', count(str, symb + ' '));
}

/********************************************************************/

consolex.header(`- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str = "Сила тяжести приложена к центру масс тела";
  document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
`)
{
    const cutString = function (str, n) {
        let prevPos = 0;
        let currPos = 0;
        let result = '';

        while (n > 0 && ~(currPos = str.indexOf(' ', prevPos))) {
            let substr = str.substring(prevPos, currPos);
            // Рядок не пустий. тобто відсутнє дублювання пробілів
            if (substr) {
                // Додаємо до результату
                result += substr;
                // Якщо це не останнє слово, то додаємо до результату пробіл
                if (--n > 0) result += ' ';
            }
            prevPos = currPos + 1;
        }
        if (n > 0) {
            // Якщо в тексті менше слів, ніж задано в параметрі n, то додаємо до результату
            // залишок строки, у якому вже відсутній пробіл
            result += str.substring(prevPos);
        }
        return result;
    }

    let str = "Сила     тяжести приложена к центру масс тела";
    let count = 5;
    consolex.log('Маємо рядок, у якому будемо обрізати лишні слова: %S', str);
    consolex.log('Маємо обмеження на кількість слів у рядку: %D', count);
    str = cutString(str, count);
    consolex.log('Отримаємо рядок, у якому обрізано лишні слова: %S', str);
}

/********************************************************************/

consolex.header(`-стоврити масив книжок (назва, кількість сторінок, автори , жанри).
- знайти наібльшу книжку.
- знайти книжку/ки з найбільшою кількістю жанрів
- знайти книжку/ки з найдовшою назвою
- знайти книжку/ки які писали 2 автори
- знайти книжку/ки які писав 1 автор
- вісортувати книжки по кількості сторінок по зростанню
`)
{
    const books = [
        {
            title: 'Назва книги 1',
            pages: 123,
            authors: ['Автор 1', 'Автор 2', 'Автор 3'],
            genres: ['Жанр 1', 'Жанр 2', 'Жанр 3']
        },
        {
            title: 'Назва книги 2 найдовша',
            pages: 436,
            authors: ['Автор 4', 'Автор 5'],
            genres: ['Жанр 4']
        },
        {
            title: 'Назва книги 3',
            pages: 202,
            authors: ['Автор 6'],
            genres: ['Жанр 5', 'Жанр 6']
        }
    ];
    consolex.log('Маємо масив книжок:');
    consolex.log([...books]);

    consolex.log('- знайти наібльшу книжку:');
    books.sort((a, b) => b.pages - a.pages);
    consolex.log(books[0]);

    consolex.log('- знайти книжку/ки з найбільшою кількістю жанрів');
    books.sort((a, b) => b.genres.length - a.genres.length);
    let count = books[0].genres.length;
    consolex.log(books.filter(book => book.genres.length === count));

    consolex.log('- знайти книжку/ки з найдовшою назвою');
    books.sort((a, b) => b.title.length - a.title.length);
    count = books[0].title.length;
    consolex.log(books.filter(book => book.title.length === count));

    consolex.log('- знайти книжку/ки які писали 2 автори');
    consolex.log(books.filter(book => book.authors.length === 2));

    consolex.log('- знайти книжку/ки які писав 1 автор');
    consolex.log(books.filter(book => book.authors.length === 1));

    consolex.log('- вісортувати книжки по кількості сторінок по зростанню');
    books.sort((a, b) => a.pages - b.pages);
    consolex.log(books);

}
/********************************************************************/
