// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatlesStr = [];
  
  for(var i = 0; i < musicians.length; i++){
    beatlesStr.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesStr;
}