### Position Sticky 먹는 조건

function findOverflowParents(element, initEl) {

function notVisible(el) {
let overflow = getComputedStyle(el).overflow;
return overflow !== "visible";
}

function displayFlex(el) {
let display = getComputedStyle(el).display;
return display === "flex";
}

let thisEl = element;
if (!initEl) console.log('** Overflow check commence!', thisEl);
let origEl = initEl || thisEl;
if (notVisible(thisEl)) console.warn("Overflow found on:", thisEl.tagName, { issue: "OVERFLOW IS NOT VISIBLE", tagName: thisEl.tagName, id: [thisEl.id](http://thisel.id/), class: thisEl.className, element: thisEl });
if (displayFlex(thisEl)) console.warn("Flex found on:", thisEl.tagName, { issue: "DISPLAY IS FLEX", tagName: thisEl.tagName, id: [thisEl.id](http://thisel.id/), class: thisEl.className, element: thisEl });
if (thisEl.parentElement) {
return findOverflowParents(thisEl.parentElement, origEl);
} else {
return console.log('** Overflow check complete! original element:', origEl);
}

}

// to use a selector, change `#stickyElement` to your desired selector
// findOverflowParents(document.querySelector('#stickyElement'));

// or use $0 for the last element selected in the Chrome Inspector
findOverflowParents($0);

⇒ position : relative 부모가 스크롤 될때 가능

top , left 지정 필요

overflow 속성이 있을 때도 적용