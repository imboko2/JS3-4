var test = {
    name : 'Тест',
    hat : function (){
        var head = document.createElement('h1');
        head.innerHTML = "Тест по программированию";
        head.style.textAlign = 'center';
        document.body.appendChild(head)
    },
    goodTest : function () {
        var good = document.createElement('p');
        good.innerHTML = "1. Вопрос №1";
        document.body.appendChild(good);
        var firstElem = document.createElement ('input');
        firstElem.type = 'checkBox';
        firstElem.id = 12;
        firstElem.style.marginLeft = "50px";
        var l = document.createElement('label');
        l.id = 12;
        l.innerHTML = "Вариант Ответа №1<br>";
        document.body.appendChild(firstElem);
        document.body.appendChild(l);

        var secondElem = document.createElement ('input');
        secondElem.type = 'checkBox';
        secondElem.id = 22;
        var labelTwo = document.createElement('label');
        labelTwo.id = 22;
        secondElem.style.marginLeft = "50px";
        labelTwo.innerHTML = "Вариант Ответа №2<br>";
        l.appendChild(secondElem);
        l.appendChild(labelTwo);

        var thirdElem = document.createElement ('input');
        thirdElem.type = 'checkBox';
        thirdElem.id = 32;
        thirdElem.style.marginLeft = "50px";
        var labelTree = document.createElement('label');
        labelTree.id = 32;
        labelTree.innerHTML = "Вариант Ответа №2<br>";
        l.appendChild(thirdElem);
        l.appendChild(labelTree);
         },

    midTest : function () {
        var good = document.createElement('p');
        good.innerHTML = "2. Вопрос №2";
        document.body.appendChild(good);
        var firstElem = document.createElement ('input');
        firstElem.type = 'checkBox';
        firstElem.id = 12;
        firstElem.style.marginLeft = "50px";
        var l = document.createElement('label');
        l.id = 12;
        l.innerHTML = "Вариант Ответа №1<br>";
        document.body.appendChild(firstElem);
        document.body.appendChild(l);

        var secondElem = document.createElement ('input');
        secondElem.type = 'checkBox';
        secondElem.id = 22;
        secondElem.style.marginLeft = "50px";
        var labelTwo = document.createElement('label');
        labelTwo.id = 22;
        labelTwo.innerHTML = "Вариант Ответа №2<br>";
        l.appendChild(secondElem);
        l.appendChild(labelTwo);

        var thirdElem = document.createElement ('input');
        thirdElem.type = 'checkBox';
        thirdElem.id = 32;
        thirdElem.style.marginLeft = "50px";
        var labelTree = document.createElement('label');
        labelTree.id = 32;
        labelTree.innerHTML = "Вариант Ответа №2<br>";
        l.appendChild(thirdElem);
        l.appendChild(labelTree);
    },
    lastTest : function () {
        var good = document.createElement('p');
        good.innerHTML = "3. Вопрос №3";
        document.body.appendChild(good);
        var firstElem = document.createElement ('input');
        firstElem.style.marginLeft = "50px";
        firstElem.type = 'checkBox';
        firstElem.id = 12;
        var l = document.createElement('label');
        l.id = 12;
        l.innerHTML = "Вариант Ответа №1<br>";
        document.body.appendChild(firstElem);
        document.body.appendChild(l);

        var secondElem = document.createElement ('input');
        secondElem.type = 'checkBox';
        secondElem.id = 22;
        secondElem.style.marginLeft = "50px";
        var labelTwo = document.createElement('label');
        labelTwo.id = 22;
        labelTwo.innerHTML = "Вариант Ответа №2<br>";
        l.appendChild(secondElem);
        l.appendChild(labelTwo);

        var thirdElem = document.createElement ('input');
        thirdElem.type = 'checkBox';
        thirdElem.id = 32;
        thirdElem.style.marginLeft = "50px";
        var labelTree = document.createElement('label');
        labelTree.id = 32;
        labelTree.innerHTML = "Вариант Ответа №2<br>";
        l.appendChild(thirdElem);
        l.appendChild(labelTree);
    },
    button : function () {
        var butt = document.createElement ('input');
        butt.type = 'button';
        butt.value = 'Проверить мои результаты!!';
        butt.style.display = "block";
        butt.style.margin = "100px auto";
        butt.style.padding = "25px 100px";
        // butt.style.border = "2px solid blue";
        // butt.
        document.body.appendChild(butt)

    }

};
test.hat();
test.goodTest();
test.midTest();
test.lastTest();
test.button();