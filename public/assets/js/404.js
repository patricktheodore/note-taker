const goBackBtn = document.getElementById('back');

const goBack = (e) => {
  e.preventDefault();
  history.back();
};

goBackBtn.addEventListener('click', goBack);