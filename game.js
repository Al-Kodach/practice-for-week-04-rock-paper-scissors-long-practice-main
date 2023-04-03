const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock 🪨',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper 📃',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors ✂️',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
    console.log("  Type 'r' for Rock");
    console.log("  Type 'p' for Paper");
    console.log("  Type 's' for Scissors");
    console.log("  Type 'q' to quit");
    console.log("  Type 'h' for a list of valid commands\n");

    rl.question('☠️ ', promptInput);
}

function getWinner(move1, move2) {
  let cmd = move1;
  let cpu = move2;

  if (cmd == cpu) {
    console.log("You tie.\n");
    ties++;
    return;
  }

  if ( VALID_MOVES[cmd].winsAgainst == cpu) {
    console.log('You win!\n');
    wins++;
    return
  }

  console.log('You lose...\n');
  losses++;
}

function getCPUMove() {
  const keys = ['r', 's', 'p'];
  let cpuMoveKey = '';

  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * keys.length);
    cpuMoveKey = keys[randomIndex];
  }

  return cpuMoveKey;

}

function processMove(cmd, cpu) {
  let name1 = VALID_MOVES[cmd].name;
  let name2 = VALID_MOVES[cpu].name;

  console.log(`You pick ${name1}, computer picks ${name2}.`);
  getWinner(cmd, cpu);
  rl.question('☠️: ', promptInput);
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(cmd) {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp();

    } else if (cmd === 'q') {
      rl.close();
      return;

    } else if (VALID_MOVES[cmd]){
      const cpu = getCPUMove();
      processMove(cmd, cpu);

    } else {
      console.log("\nInvalid command.\n");
      printHelp();
    }
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  console.log("Welcome to Rock/Paper/Scissors\n");
  printHelp();
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};
