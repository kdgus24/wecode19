const commentValue = document.querySelector('.commentUpBox textarea');
const commentUploadButton = document.getElementById('commentUpload');
let checkNullEnter = false;

window.onload = function(){
    loginButton.disable = false;
}

function adjustHeight() {
    var textEle = document.querySelector('.commentUpBox textarea');
    textEle[0].style.height = 'auto';
    alert(textEle[0].style.height);
    var textEleHeight = textEle.prop('scrollHeight');
    alert(textEleHeight);
    textEle.css('height', textEleHeight);
  };

commentValue.addEventListener('keydown', function(e){
    alert(commentValue.value.length);
    alert(e.keyCode);
    if(commentValue.value.length = 0 && e.keyCode === 13){
        checkNullEnter = true;
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
    alert(commentValue.value);
    
    if(commentValue.value.length > 0){
        
    }
})