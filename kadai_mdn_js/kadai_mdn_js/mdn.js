const now = new Date();
const days =['日','月','火','水','木','金','土'];
const months =['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
const dayOfweek =days[now.getDay()];
const monthName =months[now.getMonth()];

console.log(`${now.getFullYear()}年　${monthName} ${now.getDate()}日 (${dayOfweek})`);

