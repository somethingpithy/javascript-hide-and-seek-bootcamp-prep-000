function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list li');
  for(var i=0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
  }

function deepestChild() {
  const childlist = document.querySelector('div#grand-node').querySelectorAll('*');
  var deepest = childlist.length - 1;
  return childlist[deepest]
}