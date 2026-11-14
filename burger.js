const fs = require('fs');

try {
  const dataString = fs.readFileSync('./sample-plan.json', 'utf8');
  const data = JSON.parse(dataString);
  console.log(data.tasks[0].userStories);
} catch (error) {
  console.error('خطأ في قراءة الملف:', error);
}