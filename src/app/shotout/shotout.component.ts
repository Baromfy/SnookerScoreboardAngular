import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { MatchData } from '../player-scoreboard/player-scoreboard.component';
import { WinnerDialogComponent } from '../winner-dialog/winner-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-shotout',
  templateUrl: './shotout.component.html',
  styleUrl: './shotout.component.css'
})
export class ShotoutComponent implements OnInit {
  users$!: Observable<MatchData[]>;
  numOfRed = 15;
  numOfYellow = 1;
  numOfGreen = 1;
  numOfBrown = 1;
  numOfBlue = 1;
  numOfPink = 1;
  numOfBlack = 1;
  isFullScreen = false;

  constructor(private firestore: AngularFirestore, public dialog: MatDialog) {}

  ngOnInit() {
    this.users$ = this.firestore.collection<MatchData>('games').valueChanges();
  }

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

  openWinnerDialog(winner: string) {
    this.dialog.open(WinnerDialogComponent, {
      data: {
        winner: winner
      }
    });
  }

  changePlayer() {
    const docRef = this.firestore.collection('games').doc('1');
    docRef.get().subscribe((docSnapshot) => {
      if (docSnapshot.exists) {
        const currentData = docSnapshot.data() as MatchData;
        const updatedData = { 
          player1Active: !currentData.player1Active,
          player2Active: !currentData.player2Active,
          lastIsRed: currentData.lastIsRed = false,
          player1Break: currentData.player1Break = 0,
          player2Break: currentData.player2Break = 0,
         };
        docRef.update(updatedData).then(() => {
          console.log('player1Active értéke megfordítva.');
        }).catch((error) => {
          console.error('Hiba a player1Active frissítésekor:', error);
        });
      }
    });
  }

  fault4() {
    const docRef = this.firestore.collection('games').doc('1');
    docRef.get().subscribe((docSnapshot) => {
      if (docSnapshot.exists) {
        const currentData = docSnapshot.data() as MatchData;
        if (currentData.player1Active) {
          const updatedData = { player2Point: currentData.player2Point + 4 };
          docRef.update(updatedData).then(() => {
            console.log('player2 4 pontot kapott.');
          }).catch((error) => {
            console.error('Hiba a player2 pontjainak frissítésekor:', error);
          });
        } else {
          const updatedData = { player1Point: currentData.player1Point + 4 };
          docRef.update(updatedData).then(() => {
            console.log('player1 4 pontot kapott.');
          }).catch((error) => {
            console.error('Hiba a player1 pontjainak frissítésekor:', error);
          });
        }
      }
    });
    this.changePlayer();
    } 

    fault5() {
      const docRef = this.firestore.collection('games').doc('1');
      docRef.get().subscribe((docSnapshot) => {
        if (docSnapshot.exists) {
          const currentData = docSnapshot.data() as MatchData;
          if (currentData.player1Active) {
            const updatedData = { player2Point: currentData.player2Point + 5 };
            docRef.update(updatedData).then(() => {
              console.log('player2 5 pontot kapott.');
            }).catch((error) => {
              console.error('Hiba a player2 pontjainak frissítésekor:', error);
            });
          } else {
            const updatedData = { player1Point: currentData.player1Point + 5 };
            docRef.update(updatedData).then(() => {
              console.log('player1 5 pontot kapott.');
            }).catch((error) => {
              console.error('Hiba a player1 pontjainak frissítésekor:', error);
            });
          }
        }
      });
      this.changePlayer();
    }

    fault6() {
      const docRef = this.firestore.collection('games').doc('1');
      docRef.get().subscribe((docSnapshot) => {
        if (docSnapshot.exists) {
          const currentData = docSnapshot.data() as MatchData;
          if (currentData.player1Active) {
            const updatedData = { player2Point: currentData.player2Point + 6 };
            docRef.update(updatedData).then(() => {
              console.log('player2 6 pontot kapott.');
            }).catch((error) => {
              console.error('Hiba a player2 pontjainak frissítésekor:', error);
            });
          } else {
            const updatedData = { player1Point: currentData.player1Point + 6 };
            docRef.update(updatedData).then(() => {
              console.log('player1 6 pontot kapott.');
            }).catch((error) => {
              console.error('Hiba a player1 pontjainak frissítésekor:', error);
            });
          }
        }
      });
      this.changePlayer();
    }

    fault7() {
      const docRef = this.firestore.collection('games').doc('1');
      docRef.get().subscribe((docSnapshot) => {
        if (docSnapshot.exists) {
          const currentData = docSnapshot.data() as MatchData;
          if (currentData.player1Active) {
            const updatedData = { player2Point: currentData.player2Point + 7 };
            docRef.update(updatedData).then(() => {
              console.log('player2 7 pontot kapott.');
            }).catch((error) => {
              console.error('Hiba a player2 pontjainak frissítésekor:', error);
            });
          } else {
            const updatedData = { player1Point: currentData.player1Point + 7 };
            docRef.update(updatedData).then(() => {
              console.log('player1 7 pontot kapott.');
            }).catch((error) => {
              console.error('Hiba a player1 pontjainak frissítésekor:', error);
            });
          }
        }
      });
      this.changePlayer();
    }

    giveUpFrame() {
      const docRef = this.firestore.collection('games').doc('1');
      docRef.get().subscribe((docSnapshot) => {
        if (docSnapshot.exists) {
          const currentData = docSnapshot.data() as MatchData;
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
    
          this.numOfRed = 15;
          this.numOfYellow = 1;
          this.numOfGreen = 1;
          this.numOfBrown = 1;
          this.numOfBlue = 1;
          this.numOfPink = 1;
          this.numOfBlack = 1;
    
          let updatedData: any;
    
          if (currentData.player1Point > currentData.player2Point) {
            updatedData = { ...resetData, player1Frame: currentData.player1Frame + 1 };
            docRef.update(updatedData).then(() => {
              console.log('player1 frame pontja növelve és játék visszaállítva alapértelmezett értékekre.');
              if (updatedData.player1Frame >= currentData.framesToWin) {
                this.openWinnerDialog('Player 1');
              }
            }).catch((error) => {
              console.error('Hiba a player1 frame pontjának frissítésekor:', error);
            });
          } else {
            updatedData = { ...resetData, player2Frame: currentData.player2Frame + 1 };
            docRef.update(updatedData).then(() => {
              console.log('player2 frame pontja növelve és játék visszaállítva alapértelmezett értékekre.');
              if (updatedData.player2Frame >= currentData.framesToWin) {
                this.openWinnerDialog('Player 2');
              }
            }).catch((error) => {
              console.error('Hiba a player2 frame pontjának frissítésekor:', error);
            });
          }
        }
      });
    }
    
    

      red() {
        const docRef = this.firestore.collection('games').doc('1');
        docRef.get().subscribe((docSnapshot) => {
          if (docSnapshot.exists) {
            const currentData = docSnapshot.data() as MatchData;
            if (currentData.player1Active && this.numOfRed>0) {
              const updatedData = { 
                player1Point: currentData.player1Point + 1,
                player1Break: currentData.player1Break + 1,
                lastIsRed: currentData.lastIsRed = true,
                numOfRed: currentData.numOfRed -1
               };
              this.numOfRed = updatedData.numOfRed;
              docRef.update(updatedData).then(() => {
                console.log('player2 4 pontot kapott.');
              }).catch((error) => {
                console.error('Hiba a player2 pontjainak frissítésekor:', error);
              });
            } else if(currentData.player2Active && this.numOfRed>0) {
              const updatedData = { 
                player2Point: currentData.player2Point + 1,
                player2Break: currentData.player2Break + 1,
                lastIsRed: currentData.lastIsRed = true,
                numOfRed: currentData.numOfRed -1
               };
              this.numOfRed = updatedData.numOfRed;
              docRef.update(updatedData).then(() => {
                console.log('player1 4 pontot kapott.');
              }).catch((error) => {
                console.error('Hiba a player1 pontjainak frissítésekor:', error);
              });
            }
          }
        });
        }

        yellow() {
          const docRef = this.firestore.collection('games').doc('1');
          docRef.get().subscribe((docSnapshot) => {
            if (docSnapshot.exists) {
              const currentData = docSnapshot.data() as MatchData;
              if (currentData.player1Active && currentData.lastIsRed == true) {
                const updatedData = { 
                  player1Point: currentData.player1Point + 2,
                  player1Break: currentData.player1Break + 2,
                  lastIsRed: currentData.lastIsRed = false
                 };
                docRef.update(updatedData).then(() => {
                  console.log('player2 4 pontot kapott.');
                }).catch((error) => {
                  console.error('Hiba a player2 pontjainak frissítésekor:', error);
                });
              }
              else if(currentData.player1Active && this.numOfRed == 0 && this.numOfYellow == 1 && currentData.lastIsRed == false){
                const updatedData = { 
                  player1Point: currentData.player1Point + 2,
                  player1Break: currentData.player1Break + 2,
                  numOfYellow: currentData.numOfYellow - 1
                 };
                this.numOfYellow -=1;
                docRef.update(updatedData).then(() => {
                console.log('player1 4 pontot kapott.');
              }).catch((error) => {
                console.error('Hiba a player1 pontjainak frissítésekor:', error);
              });
              }
              else if(currentData.player2Active && this.numOfRed == 0 && this.numOfYellow == 1 && currentData.lastIsRed == false){
                const updatedData = { 
                  player2Point: currentData.player2Point + 2,
                  player2Break: currentData.player2Break + 2,
                  numOfYellow: currentData.numOfYellow - 1
                 };
                this.numOfYellow -=1;
                docRef.update(updatedData).then(() => {
                console.log('player1 4 pontot kapott.');
              }).catch((error) => {
                console.error('Hiba a player1 pontjainak frissítésekor:', error);
              });
              } 
              else if(currentData.player2Active && currentData.lastIsRed == true) {
                  const updatedData = { 
                    player2Point: currentData.player2Point + 2,
                    player2Break: currentData.player2Break + 2,
                    lastIsRed: currentData.lastIsRed = false
                   };
                  currentData.lastIsRed = false;
                  docRef.update(updatedData).then(() => {
                  console.log('player1 4 pontot kapott.');
                }).catch((error) => {
                  console.error('Hiba a player1 pontjainak frissítésekor:', error);
                });
              }
            }
          });
          }

          green() {
            const docRef = this.firestore.collection('games').doc('1');
            docRef.get().subscribe((docSnapshot) => {
              if (docSnapshot.exists) {
                const currentData = docSnapshot.data() as MatchData;
                if (currentData.player1Active && currentData.lastIsRed == true) {
                  const updatedData = { 
                    player1Point: currentData.player1Point + 3,
                    player1Break: currentData.player1Break + 3,
                    lastIsRed: currentData.lastIsRed = false
                  };
                  docRef.update(updatedData).then(() => {
                    console.log('player2 3 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player2 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player1Active && this.numOfRed == 0 && this.numOfGreen == 1 && this.numOfYellow == 0 && currentData.lastIsRed == false) {
                  const updatedData = { 
                    player1Point: currentData.player1Point + 3,
                    player1Break: currentData.player1Break + 3,
                    numOfGreen: currentData.numOfGreen - 1
                  };
                  this.numOfGreen -= 1;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 3 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player2Active && this.numOfRed == 0 && this.numOfGreen == 1 && this.numOfYellow == 0 && currentData.lastIsRed == false) {
                  const updatedData = { 
                    player2Point: currentData.player2Point + 3,
                    player2Break: currentData.player2Break + 3,
                    numOfGreen: currentData.numOfGreen - 1
                  };
                  this.numOfGreen -= 1;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 3 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player2Active && currentData.lastIsRed == true) {
                  const updatedData = { 
                    player2Point: currentData.player2Point + 3,
                    player2Break: currentData.player2Break + 3,
                    lastIsRed: currentData.lastIsRed = false
                  };
                  currentData.lastIsRed = false;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 3 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                }
              }
            });
          }
          
          brown() {
            const docRef = this.firestore.collection('games').doc('1');
            docRef.get().subscribe((docSnapshot) => {
              if (docSnapshot.exists) {
                const currentData = docSnapshot.data() as MatchData;
                if (currentData.player1Active && currentData.lastIsRed == true) {
                  const updatedData = { 
                    player1Point: currentData.player1Point + 4,
                    lastIsRed: currentData.lastIsRed = false
                  };
                  docRef.update(updatedData).then(() => {
                    console.log('player2 4 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player2 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player1Active && this.numOfRed == 0 && this.numOfBrown == 1 && this.numOfGreen == 0 && currentData.lastIsRed == false) {
                  const updatedData = { 
                    player1Point: currentData.player1Point + 4,
                    numOfBrown: currentData.numOfBrown - 1
                  };
                  this.numOfBrown -= 1;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 4 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player2Active && this.numOfRed == 0 && this.numOfBrown == 1 && this.numOfGreen == 0 && currentData.lastIsRed == false) {
                  const updatedData = { 
                    player2Point: currentData.player2Point + 4,
                    numOfBrown: currentData.numOfBrown - 1
                  };
                  this.numOfBrown -= 1;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 4 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player2Active && currentData.lastIsRed == true) {
                  const updatedData = { 
                    player2Point: currentData.player2Point + 4,
                    lastIsRed: currentData.lastIsRed = false
                  };
                  currentData.lastIsRed = false;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 4 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                }
              }
            });
          }
          
          blue() {
            const docRef = this.firestore.collection('games').doc('1');
            docRef.get().subscribe((docSnapshot) => {
              if (docSnapshot.exists) {
                const currentData = docSnapshot.data() as MatchData;
                if (currentData.player1Active && currentData.lastIsRed == true) {
                  const updatedData = { 
                    player1Point: currentData.player1Point + 5,
                    lastIsRed: currentData.lastIsRed = false
                  };
                  docRef.update(updatedData).then(() => {
                    console.log('player2 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player2 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player1Active && this.numOfRed == 0 && this.numOfBlue == 1 && this.numOfBrown == 0 && currentData.lastIsRed == false) {
                  const updatedData = { 
                    player1Point: currentData.player1Point + 5,
                    numOfBlue: currentData.numOfBlue - 1
                  };
                  this.numOfBlue -= 1;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player2Active && this.numOfRed == 0 && this.numOfBlue == 1 && this.numOfBrown == 0 && currentData.lastIsRed == false) {
                  const updatedData = { 
                    player2Point: currentData.player2Point + 5,
                    numOfBlue: currentData.numOfBlue - 1
                  };
                  this.numOfBlue -= 1;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player2Active && currentData.lastIsRed == true) {
                  const updatedData = { 
                    player2Point: currentData.player2Point + 5,
                    lastIsRed: currentData.lastIsRed = false
                  };
                  currentData.lastIsRed = false;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                }
              }
            });
          }

          pink() {
            const docRef = this.firestore.collection('games').doc('1');
            docRef.get().subscribe((docSnapshot) => {
              if (docSnapshot.exists) {
                const currentData = docSnapshot.data() as MatchData;
                if (currentData.player1Active && currentData.lastIsRed == true) {
                  const updatedData = { 
                    player1Point: currentData.player1Point + 6,
                    lastIsRed: currentData.lastIsRed = false
                  };
                  docRef.update(updatedData).then(() => {
                    console.log('player2 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player2 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player1Active && this.numOfRed == 0 && this.numOfPink == 1 && this.numOfBlue == 0 && currentData.lastIsRed == false) {
                  const updatedData = { 
                    player1Point: currentData.player1Point + 6,
                    numOfPink: currentData.numOfPink - 1
                  };
                  this.numOfPink -= 1;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player2Active && this.numOfRed == 0 && this.numOfPink == 1 && this.numOfBlue == 0 && currentData.lastIsRed == false) {
                  const updatedData = { 
                    player2Point: currentData.player2Point + 6,
                    numOfPink: currentData.numOfPink - 1
                  };
                  this.numOfPink -= 1;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player2Active && currentData.lastIsRed == true) {
                  const updatedData = { 
                    player2Point: currentData.player2Point + 6,
                    lastIsRed: currentData.lastIsRed = false
                  };
                  currentData.lastIsRed = false;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                }
              }
            });
          }

          black() {
            const docRef = this.firestore.collection('games').doc('1');
            docRef.get().subscribe((docSnapshot) => {
              if (docSnapshot.exists) {
                const currentData = docSnapshot.data() as MatchData;
                if (currentData.player1Active && currentData.lastIsRed == true) {
                  const updatedData = { 
                    player1Point: currentData.player1Point + 7,
                    lastIsRed: currentData.lastIsRed = false
                  };
                  docRef.update(updatedData).then(() => {
                    console.log('player2 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player2 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player1Active && this.numOfRed == 0 && this.numOfBlack == 1 && this.numOfPink == 0 && currentData.lastIsRed == false) {
                  const updatedData = { 
                    player1Point: currentData.player1Point + 7,
                    numOfBlack: currentData.numOfBlack - 1
                  };
                  this.numOfBlack -= 1;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player2Active && this.numOfRed == 0 && this.numOfBlack == 1 && this.numOfPink == 0 && currentData.lastIsRed == false) {
                  const updatedData = { 
                    player2Point: currentData.player2Point + 7,
                    numOfBlack: currentData.numOfBlack - 1
                  };
                  this.numOfBlack -= 1;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                } else if (currentData.player2Active && currentData.lastIsRed == true) {
                  const updatedData = { 
                    player2Point: currentData.player2Point + 7,
                    lastIsRed: currentData.lastIsRed = false
                  };
                  currentData.lastIsRed = false;
                  docRef.update(updatedData).then(() => {
                    console.log('player1 5 pontot kapott.');
                  }).catch((error) => {
                    console.error('Hiba a player1 pontjainak frissítésekor:', error);
                  });
                }
              }
            });
          }
}

