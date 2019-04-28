const htmltext = document.querySelector('#html-text');
const jstext = document.querySelector('#js-text');
const csstext = document.querySelector('#css-text');
const code = document.querySelector('#code').contentWindow.document;

function compile(){
    document.body.onkeyup = function(){
        code.open()
        code.writeln(`${htmltext.value} <style> ${csstext.value} </style> <script> ${jstext.value} </script>`)
        code.close()
    }
}

compile()

document.querySelector('.tabs').addEventListener('click', function(ev){
    let isCheck1 = document.querySelector('#chk1').checked;
    let isCheck2 = document.querySelector('#chk2').checked;
    let isCheck3 = document.querySelector('#chk3').checked;
    let targetid = ev.target.id;
    
    if(isCheck1){
        htmltext.classList.add('active');
        jstext.classList.remove('active');
        csstext.classList.remove('active');
    }

    else if(isCheck2){
        htmltext.classList.remove('active');
        jstext.classList.add('active');
        csstext.classList.remove('active');
    }

    if(isCheck3){
        htmltext.classList.remove('active');
        jstext.classList.remove('active');
        csstext.classList.add('active');
    }
        
});

const defaultHTML = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

</body>
</html>
`

htmltext.defaultValue = defaultHTML;