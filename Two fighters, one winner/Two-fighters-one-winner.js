/*Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious.
Death is defined as having health <= 0.Each fighter will be a Fighter object/instance.
See the Fighter class below in your chosen language.Both health and damagePerAttack
(damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
Your function also receives a third argument, a string, with the name of the fighter that attacks first.
Example:
declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
Lew attacks Harry; Harry now has 3 health.
Harry attacks Lew; Lew now has 6 health.
Lew attacks Harry; Harry now has 1 health.
Harry attacks Lew; Lew now has 2 health.
Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
 */
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
        return this.name;
    }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let attacksNow = firstAttacker
    let win = fighter1.toString()
    while (fighter1.health > 0 && fighter2.health > 0) {
        if (attacksNow === fighter1.name) {
            fighter2.health -= fighter1.damagePerAttack;
            attacksNow = fighter2.name
            win = fighter1.toString()
        } else {
            fighter1.health -= fighter2.damagePerAttack;
            attacksNow = fighter1.name
            win = fighter2.toString()
        }
    }
    return win
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"))
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"))