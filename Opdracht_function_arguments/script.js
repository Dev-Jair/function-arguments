// No arguments + Single arguments + Multiple arguments

const paintWall = function (color, place) {
    console.log("The " + place + " wall has been painted " + color);
}

paintWall("green");

paintWall("yellow");

paintWall();

paintWall("black", "south-east");

paintWall("Dark blue", "south-west");

// Vraag 7 (single arguments): De string wordt geprint met undefined op de plaats waar eigenlijk een argument hoort te staan.

// Vraag 6 (multiple arguments): Ja, de order van de arguments moeten juist staan om het beoogde resultaat te behalen.

// Vraag 7 (multiple arguments): Als je de agruments switcht in de function definition, dan wordt dit ook omgedraaid tijdens het callen van de function.

// Vraag 8 (multiple arguments): Als je de volgorde verandert van zowel de arguments als de calling function, krijg je het juiste resultaat.
