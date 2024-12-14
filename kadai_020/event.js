const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventlistener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});