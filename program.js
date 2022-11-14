function plus(){
    text01 = document.getElementById('atai1');
    text02 = document.getElementById('atai2');

    x = parseInt(text01.value);
    y = parseInt(text02.value);

    if(text01.value == ''){
        alert('１つ目の値が入力されていません');
        return;
    }
    if(text02.value == ''){
        alert('２つ目の値が入力されていません');
        return;
    }

    z = x + y;
    alert(z);
}

function minus(){
    text01 = document.getElementById('atai1');
    text02 = document.getElementById('atai2');

    x = parseInt(text01.value);
    y = parseInt(text02.value);

    if(text01.value == ''){
        alert('１つ目の値が入力されていません');
        return;
    }
    if(text02.value == ''){
        alert('２つ目の値が入力されていません');
        return;
    }

    z = x - y;
    alert(z);
}

function multiplied(){
    text01 = document.getElementById('atai1');
    text02 = document.getElementById('atai2');

    x = parseInt(text01.value);
    y = parseInt(text02.value);

    if(text01.value == ''){
        alert('１つ目の値が入力されていません');
        return;
    }
    if(text02.value == ''){
        alert('２つ目の値が入力されていません');
        return;
    }

    z = x * y;
    alert(z);
}

function divided(){
    text01 = document.getElementById('atai1');
    text02 = document.getElementById('atai2');

    x = parseInt(text01.value);
    y = parseInt(text02.value);

    if(text01.value == ''){
        alert('１つ目の値が入力されていません');
        return;
    }
    if(text02.value == ''){
        alert('２つ目の値が入力されていません');
        return;
    }

    z = x / y;
    alert(z);
}
