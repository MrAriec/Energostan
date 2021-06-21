let questionItem = document.querySelector('.question'),
  btnQuestion = document.querySelector('.formQuestion'),
  smallBtn = document.querySelector('.smallFormQuestion'),
  btnClose = document.querySelector('.question_krest');

    btnQuestion.addEventListener('click', function(){
        questionItem.classList.add('active');
    })

    smallBtn.addEventListener('click', function(){
      questionItem.classList.add('active');
  })

    btnClose.addEventListener('click', function(){
      questionItem.classList.remove('active');
    })

