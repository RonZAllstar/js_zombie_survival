
/*
=========
Scenario
=========
1) Set a scenario in which we encounter a zombie
2) Choose a weapon to fight the zombie with
3) Have a 50/50 chance of either defeating the zombie with our weapon (else) or getting bitten and losing the game.
*/

//  zombie-encounter chance algorithm
var random_number = Math.round( Math.random());
var swing_number1 = Math.round(Math.random() * 100);
var swing_number2 = Math.round(Math.random() * 100);
var swing_number3 = Math.round(Math.random() * 100);
var encounter_chance = random_number / 5;

//  weapons
var weapon_01 = "Sword ";
var weapon_02 = "Shovel ";
var weapon_03 = "Spear ";
var weapon_04 = "Knife ";

// hp
var zombie_hp_01 = 100;
var player_hp_01 = 100;

//  track zombie hp
function remaining_z_hp(){
  var remaining_01 = zombie_hp_01 - swing_number1;
  //console.log("function returned: " + remaining_01())    // debug
  return remaining_01;
}

//  track player hp
function remaining_p_hp(){
  var remaining_02 = player_hp_01 - swing_number2;
  // console.log("function returned: " + remaining_02()) // debug
  return remaining_02;
}

//  fight algo
function fight_01(){
  var fight_result = remaining_p_hp();
  // console.log("function returned: " + fight_result())  // debug
  var sum = 0;
      for (var i = 1; i <= 50; i++) {
         sum = sum + i;
      }
    alert("Sum = " + sum);    // => Sum = 1275
  return fight_result;
}

//  swing function
function swing_action(){
  var swing_result = swing_number3;
  console.log("swing_result == " + swing_result);
  //console.log("function returned: " + swing_result())   //  debug
  if (swing_result < 30){
    return -1;
    console.log("swing_result == -1");
  }
  else{
    return 1;
    console.log("swing_result == 1");
  }
}

/*
function bite_action(){
  var bite_result = swing_number3;
  console.log("bite_result == " + bite_result);
  if (bit_result < 45) 
}
*/

//console.log("z == " + remaining_z_hp());
//console.log("p == " + remaining_p_hp());
//console.log("fr == " + fight_01());
//console.log("swing_action == " + swing_action());

alert("Zom Apoc: You are looting a store and suddenly a zombie bursts through the door!");

//  weapon selection
var weapon = prompt ("Choose a weapon to kill the bastard: " + weapon_01 + weapon_02 + weapon_03 + weapon_04);
switch (weapon){
    case (weapon_01):
        alert("You chose a " + weapon_01 + "to kill the bastard!");
        alert("Slash Him!");
        break;
    case (weapon_02):
        alert("You chose a " + weapon_02 + "to kill the bastard!");
        alert("Shove Him!");
        break;    
    case(weapon_03):
        alert("You chose a " + weapon_03 + "to kill the bastard!");
        alert("Spear Him!");
        break;    
    case(weapon_04):
        alert("You chose a " + weapon_04 + "to kill the bastard!");
        alert("Stab Him!");
        break;    
}


alert("You take a swing at the bastard!");
console.log("Damage to Zombie == " + swing_number1);
//player_01 = swing_number;
//console.log("Player HP == " + player_hp_01);
//swing_number 
console.log("Zombie HP == " + remaining_z_hp());


/*if (encounter_chance > 50){
 if (encounter_chance%50 < 50){
   alert("No Encounter");
 }
  else{
    alert("Encounter");
  }
}
*/

//if (encounter_chance > 50){
//  alert("Encounter");
//}
//console.log(random_number);
// console.log(encounter_chance);

/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:57
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:57
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:57
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:57
*/
/*
Exception: SyntaxError: expected expression, got '}'
@Scratchpad/1:73
*/