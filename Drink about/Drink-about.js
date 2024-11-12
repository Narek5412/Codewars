/*Kids drink toddy.
   * Teens drink coke.
   * Young adults drink beer.
   * Adults drink whisky.
   * Make a function that receive age, and return what they drink.

    Rules:

   * Children under 14 old.
   * Teens under 18 old.
   * Young under 21 old.
   * Adults have 21 or more.
   * Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/
debugger;

function peopleWithAgeDrink(old) {
    let result = old < 14 ? "drink toddy" :
        14 <= old && old < 18 ? "drink coke" :
            18 <= old && old < 21 ? "drink beer" : "drink whisky";
    return result
}

console.log(peopleWithAgeDrink(14));