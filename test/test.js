var list;

module("SkipList Additions", {
  setup: function() {
    list = new SkipList();
  }
});

function toArray(list) {
  var array = [];

  for (var i=0; i<list.size; i++) {
    array.push(list.at(i));
  }

  return array;
}

test("starts empty", function() {
  equal(list.size, 0);
});

test("at the front", function() {
  list.insertAt(0, "hello world");
  equal(list.at(0), "hello world");
});

test("at the back", function() {
  list.insertAt(0, "hello world");
  list.insertAt(1, "goodbye cruel world");

  deepEqual(toArray(list), ["hello world", "goodbye cruel world"]);
});

test("in the middle", function() {
  list.insertAt(0, "hello world");
  list.insertAt(1, "goodbye cruel world");
  list.insertAt(1, "la dee da");

  deepEqual(toArray(list), ["hello world", "la dee da", "goodbye cruel world"]);
});

module("SkipList Removals", {
  setup: function() {
    list = new SkipList();
    list.insertAt(0, "hello world");
    list.insertAt(1, "goodbye cruel world");
    list.insertAt(1, "la dee da");
  }
});

test("from the front", function() {
  list.deleteAt(0);
  deepEqual(toArray(list), ["la dee da", "goodbye cruel world"]);
});

test("from the back", function() {
  list.deleteAt(2);
  deepEqual(toArray(list), ["hello world", "la dee da"]);
});

test("from the middle", function() {
  list.deleteAt(1);
  deepEqual(toArray(list), ["hello world", "goodbye cruel world"]);
});

var array;

module("Random mutations")

test("inserts and deletes", function () {
  list = new SkipList();
  array = [];
  var i;
  for (i = 0; i < 100; i++) {
    list.insertAt(list.size, i);
    array.push(i);
  }

  equal(list.size, array.length);

  deepEqual(toArray(list), array);

  var idx, val;
  for (i = 0; i < 100; i++) {
    idx = Math.round(Math.random(i) * 100);
    val = i+100;
    array.splice(idx, 0, val);
    list.insertAt(idx, val);
  }

  equal(list.size, array.length);
  deepEqual(toArray(list), array);

  for (i = 0; i < 100; i++) {
    idx = Math.round(Math.random(i) * 100);
    array.splice(idx, 1);
    list.deleteAt(idx);
  }

  equal(list.size, array.length);
  deepEqual(toArray(list), array);
});
