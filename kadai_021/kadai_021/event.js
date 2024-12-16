document.getElementById('btn').addEventListener('click',function(){
  setTimeout(function(){
    document.getElementById('text').textContent='ボタンをクリックしました';
  },2000);
});
