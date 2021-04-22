let Node = function(name){
  this.children = [];
  this.name = name;
}
// måden man laver en klasse I java på er ved at bruge .protorype til at tilføje metoder
// denne prototype-ting indeholder nogle ting I forvejen – fx splice()-funk som vi ser senere
// man har komma mellem sine funktioner
Node.prototype = {
  add : function(child) {
    this.children.push(child);
  },
  hasChildren: function () {
// hvis den har børn, så er længden jo over 0
    return this.children.length > 0;
  },
  removeChild: function (){
    let length = this.children.length;
    for(let i = 0; i < length; i++){
      if(this.children[i] === child){
// så skal vi splice den – så vi fjerner den på plads i og vi fjerner 1
        this.children.splice(i, 1);
      }
    }
  },
  getChild: function (i){
    return this.children[i];
  }
}

let n1 = new Node("root");
let c1 = new Node("child1");

n1.add(c1);

console.log(n1);
console.log(n1.hasChildren());

let fruits = ["Banan", "Orange", "Apple", "Mango"]
// I prototype ligger der bl.a. funktionen splice()
// vi skal nu bruge splice() til at fjerne children

// 2 = start fra index 2, 2 = slet 2, lemon + kiwi = sæt disse ind
console.log(fruits);
fruits.splice(2, 2, "lemon", "kiwi");
console.log(fruits);



// Composite-obj:
// ? hvorfor skriver vi funktion INDENI parantesen?
let log = (function(){
  let txt = "";
  // den returnerer et obj med 2 funktioner indeni
  return {
    add: function (message) {txt += message + "\n";},
    show: function () {
      alert(txt);
      txt = ""; // og så resetter vi txt
    }
  }
})();


// her er den selvkaldende funktion
function traverse(indent, node){
  console.log("trædybde=" + indent);

  // log.add("indent" + indent + " " + node.name);

  // join-funk(param)
  //  = vi alle de ting som står på et array om til en string (det som står som param i join er det som kommes indimellem alle de ting som er på arrayet)
  // Array(indent++) == lav et nyt array med indent++ antal pladser
  //  = param = vi siger kom dette ind imellem alle de ting som er på array'et når du laver en String
  // e.g.: Array("hej", "hej123", "hej44").join()
  log.add(Array(indent++).join("--") + node.name);

  indent++;
  // vi erklærer 2 varibler i denne for-loop
  for(let i = 0, len = node.children.length; i < len; i++){
    traverse(indent, node.getChild(i));
  }
}

traverse(1, n1);

function run() {
  let tree = new Node("root");
  let left = new Node("left");
  let right = new Node("right");
  let leftLeft = new Node("leftLeft");
  let rightRight = new Node("rightRight");

  left.add(leftLeft);
  right.add(rightRight);

  tree.add(left);
  tree.add(right);


  traverse(1, tree);


  log.show();
}

run();
