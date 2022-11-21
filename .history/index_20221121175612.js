// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;

}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective {
    const inner = function (param = "special")
}

function demoChain(name) {
    const part1 = "hi";
    return function () {
      const part2 = "there";
      return function () {
        console.log(`${part1.toUpperCase()} ${part2} ${name}`);
      };
    };
  }