// code your solution here
function saturdayFun(action="roller-skate") {
    return `This Saturday, I want to ${action}!`
  }
  
  let mondayWork = function(action="go to the office") {
    return `This Monday, I will ${action}.`
  }
  
  let wrapAdjective = function(symbol="*") {
    return function(adjective="special") {
      return `You are ${symbol}${adjective}${symbol}!`
    }
}