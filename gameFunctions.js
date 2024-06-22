const changePlayer = async (db) => {
  const docRef = db.collection('games').doc('1');
  const docSnapshot = await docRef.get();

  if (docSnapshot.exists) {
    const currentData = docSnapshot.data();

    const updatedData = { 
      player1Active: !currentData.player1Active,
      player2Active: !currentData.player2Active,
      lastIsRed: false,
      player1Break: 0,
      player2Break: 0,
    };

    await docRef.update(updatedData);
    console.log('Player turn and statuses updated successfully.');
  } else {
    console.error('Game not found.');
  }
};

const updateFaultPoints = async (db, points) => {
  const docRef = db.collection('games').doc('1');
  const docSnapshot = await docRef.get();

  if (docSnapshot.exists) {
    const currentData = docSnapshot.data();
    const updatedData = currentData.player1Active
      ? { player2Point: currentData.player2Point + points }
      : { player1Point: currentData.player1Point + points };

    await docRef.update(updatedData);
    console.log(`${points} points added to the ${currentData.player1Active ? 'player2' : 'player1'}.`);

    await changePlayer(db);
  } else {
    console.error('Game not found.');
  }
};

const fault4 = async (db) => updateFaultPoints(db, 4);
const fault5 = async (db) => updateFaultPoints(db, 5);
const fault6 = async (db) => updateFaultPoints(db, 6);
const fault7 = async (db) => updateFaultPoints(db, 7);

const giveUpFrame = async (db) => {
  const docRef = db.collection('games').doc('1');
  const docSnapshot = await docRef.get();

  if (docSnapshot.exists) {
    const currentData = docSnapshot.data();
    const resetData = {
      player1Point: 0,
      player2Point: 0,
      player1Break: 0,
      player2Break: 0,
      numOfRed: 15,
      numOfYellow: 1,
      numOfGreen: 1,
      numOfBrown: 1,
      numOfBlue: 1,
      numOfPink: 1,
      numOfBlack: 1,
      lastIsRed: false
    };

    let updatedData;
    if (currentData.player1Point > currentData.player2Point) {
      updatedData = { ...resetData, player1Frame: currentData.player1Frame + 1 };
    } else {
      updatedData = { ...resetData, player2Frame: currentData.player2Frame + 1 };
    }

    await docRef.update(updatedData);
    console.log(`Frame points updated and game reset to default values.`);
  } else {
    console.error('Game not found.');
  }
};

const updateColorPoints = async (db, color, points, decrementProperty) => {
  const docRef = db.collection('games').doc('1');
  const docSnapshot = await docRef.get();

  if (docSnapshot.exists) {
    const currentData = docSnapshot.data();
    console.log('Current Data:', currentData); // Debug log

    const colors = ['yellow', 'green', 'brown', 'blue', 'pink', 'black'];
    const colorPoints = {
      yellow: 2,
      green: 3,
      brown: 4,
      blue: 5,
      pink: 6,
      black: 7,
    };

    const findNextAvailableColor = () => {
      for (let color of colors) {
        if (currentData[`numOf${capitalizeFirstLetter(color)}`] > 0) {
          return color;
        }
      }
      return null;
    };

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    if (color === 'red') {
      if (currentData.numOfRed > 0) {
        const updatedData = currentData.player1Active
          ? {
              player1Point: currentData.player1Point + points,
              player1Break: currentData.player1Break + points,
              lastIsRed: true,
              numOfRed: currentData.numOfRed - 1,
            }
          : {
              player2Point: currentData.player2Point + points,
              player2Break: currentData.player2Break + points,
              lastIsRed: true,
              numOfRed: currentData.numOfRed - 1,
            };

        await docRef.update(updatedData);
        console.log(`Player ${currentData.player1Active ? 1 : 2} scored ${points} points for red ball.`);
      } else {
        console.error('No red balls left.');
      }
    } else {
      if (currentData.numOfRed === 0 && !currentData.lastIsRed) {
        const nextColor = findNextAvailableColor();
        if (nextColor && nextColor === color) {
          const updatedData = currentData.player1Active
            ? {
                player1Point: currentData.player1Point + points,
                player1Break: currentData.player1Break + points,
                lastIsRed: false,
                [`numOf${capitalizeFirstLetter(color)}`]: currentData[`numOf${capitalizeFirstLetter(color)}`] - 1,
              }
            : {
                player2Point: currentData.player2Point + points,
                player2Break: currentData.player2Break + points,
                lastIsRed: false,
                [`numOf${capitalizeFirstLetter(color)}`]: currentData[`numOf${capitalizeFirstLetter(color)}`] - 1,
              };

          await docRef.update(updatedData);
          console.log(`Player ${currentData.player1Active ? 1 : 2} scored ${points} points for ${color} ball.`);
        } else {
          console.error(`Conditions not met for hitting ${color}. You can only hit ${nextColor} now.`);
        }
      } else if (currentData[`numOf${capitalizeFirstLetter(color)}`] > 0 && currentData.lastIsRed) {
        const updatedData = currentData.player1Active
          ? {
              player1Point: currentData.player1Point + points,
              player1Break: currentData.player1Break + points,
              lastIsRed: false,
            }
          : {
              player2Point: currentData.player2Point + points,
              player2Break: currentData.player2Break + points,
              lastIsRed: false,
            };

        await docRef.update(updatedData);
        console.log(`Player ${currentData.player1Active ? 1 : 2} scored ${points} points for ${color} ball.`);
      } else {
        console.error('Conditions not met for updating color points.');
      }
    }
  } else {
    console.error('Game not found.');
  }
};


const red = async (db) => updateColorPoints(db, 'red', 1, 'numOfRed');
const yellow = async (db) => updateColorPoints(db, 'yellow', 2, 'numOfYellow');
const green = async (db) => updateColorPoints(db, 'green', 3, 'numOfGreen');
const brown = async (db) => updateColorPoints(db, 'brown', 4, 'numOfBrown');
const blue = async (db) => updateColorPoints(db, 'blue', 5, 'numOfBlue');
const pink = async (db) => updateColorPoints(db, 'pink', 6, 'numOfPink');
const black = async (db) => updateColorPoints(db, 'black', 7, 'numOfBlack');

module.exports = {
  fault4,
  fault5,
  fault6,
  fault7,
  giveUpFrame,
  red,
  yellow,
  green,
  brown,
  blue,
  pink,
  black,
  changePlayer
};
