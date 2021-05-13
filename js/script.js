const wrapper = document.querySelector('#wrapper');
let move = 0;
// console.log((`Ход: ${move}`))

wrapper.addEventListener('click' , function(cont){
    if(move % 2 === 0){
        cont.target.innerHTML = 'x'
    }else{
        cont.target.innerHTML = 'o'
    }
    check()
    move++
    // console.log(`Ход: ${(move )}`)
});

function check(){
    const boxes = document.getElementsByClassName('box');
    const combination = [

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,4,8],
        [2,4,6],

        [0,3,6],
        [1,4,7],
        [2,5,8],

    ]
    for(let i = 0; i < combination.length; i++){
        if(boxes[combination[i][0]].innerHTML === 'x' && boxes[combination[i][1]].innerHTML === 'x' && boxes[combination[i][2]].innerHTML === 'x'){
            alert('" X " win')
            window.location.reload();
        }else if(boxes[combination[i][0]].innerHTML === 'o' && boxes[combination[i][1]].innerHTML === 'o' && boxes[combination[i][2]].innerHTML === 'o'){
            alert(' " O " win')
            window.location.reload();
        }
    }
}