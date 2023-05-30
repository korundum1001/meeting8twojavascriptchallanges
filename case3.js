// const today = new Date().toLocaleDateString('id-ID');
const today = new Date();

function getPreviousDay(date = new Date()) {
    const yesterday = new Date(date.getTime());
    yesterday.setDate(date.getDate() - 1);
  
    return yesterday;
  }

  function getNextDay(date = new Date()) {
    const tomorrow = new Date(date.getTime());
    tomorrow.setDate(date.getDate() - 1);
  
    return tomorrow;
  }

console.log("Tanggal hari ini adalah " + today);
console.log("Tanggal kemarin adalah " + getPreviousDay());
console.log("Tanggal besok adalah " + getNextDay());