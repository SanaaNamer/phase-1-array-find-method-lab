// code your solution here
const record = [
    {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]
function superbowlWin(record) {
        const w = record.find(record => record.result === 'W');
      
        return w ? w.year : undefined;
}; 

superbowlWin()