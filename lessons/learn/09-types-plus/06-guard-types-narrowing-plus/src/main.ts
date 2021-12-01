type Droide = { fight: () => void };
type Jedi = { mind: () => void };

function fight(item: Droide | Jedi) {
    if ('fight' in item) {
        item.fight();
    }
}

// function printAll(strs: string | string[] | null) {
//     if (typeof strs === "object") {
//       for (const s of strs) { // ne compile pas car potentiellement null;
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     } else {
//       // do nothing
//     }
//   }

function printAll(strs: string | string[] | null) {
    if (strs !== null) {
      if (typeof strs === "object") {
        for (const s of strs) {  
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);

      }
    }
  }

  /** Type predicate */
  function isWarrior(item: Droide | Jedi): item is Droide {
      return (item as Droide).fight != undefined;
  }

  function getWarrior(): Droide | Jedi {
      return  { fight: () => {} }
  }

  const droide = getWarrior();

  if (isWarrior(droide)) {
      droide.fight();
  } else  {
      droide.mind();
  }