const commentValue = document.querySelector('.commentUpBox textarea');
const commentUploadButton = document.getElementById('commentUpload');
let checkNullEnter = false;

window.onload = function(){
}

function adjustHeight() {
    var textEle = document.querySelector('.commentUpBox textarea');
    textEle[0].style.height = 'auto';
    console.log(textEle[0].style.height);
    var textEleHeight = textEle.prop('scrollHeight');
    console.log(textEleHeight);
    textEle.css('height', textEleHeight);
  };

commentValue.addEventListener('keydown', function(e){
    console.log(commentValue.value.length);
    console.log(e.keyCode);

    if(e.keyCode === 13){
        e.preventDefault();
    }

    if(commentValue.value.length = 0 && e.keyCode === 13){
        checkNullEnter = true;
        console.log(checkNullEnter);
    }else{

    }
})


commentValue.addEventListener('keyup', function(e){
    if(commentValue.value.length > 0){
        commentUploadButton.style.color = 'blue';
        commentUploadButton.style.cursor = 'pointer';
        commentUploadButton.disable = false
    }else{
        commentUploadButton.style.color = 'skyblue';
        commentUploadButton.style.cursor = 'auto';
        commentUploadButton.disable = true;
    }

    if(checkNullEnter){
        commentValue.value = '';
        commentUploadButton.style.color = 'skyblue';
        commentUploadButton.style.cursor = 'auto';
        commentUploadButton.disable = true;
    }
})

commentUploadButton.addEventListener('click', function(){
    console.log(commentValue.value);
    
    if(commentValue.value.length > 0){
        
    }
})