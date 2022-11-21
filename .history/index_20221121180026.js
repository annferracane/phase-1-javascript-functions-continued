// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;

}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}


function wrapAdjective(greeting, msg = "It's a fine day to learn") {
    return function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
  }
  
  outer("Hello")("student", "JavaScript");

function wrapAdjective(adjective = "special") {
    const flair = "hi";
    return function () {
        return `You are ${flair} a ${part2} ${name}`);
    };
}

wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"