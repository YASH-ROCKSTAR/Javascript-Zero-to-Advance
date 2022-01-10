console.log('we are learning child ,parent and traversing the DOM');

let cont=document.querySelector('.no');
cont=document.querySelector('.container')
// console.log(cont);
let nodename=cont.childNodes[1].nodeName;
let nodetype=cont.childNodes[1].nodeType;
// console.log(nodename);
// console.log(nodetype);

//Node type
// 1.Element
// 2.attribute
// 3.text node
// 8.comment
// 9.document
// 10.docType
// console.log(cont.childNodes)
// console.log(cont.children)
let container=document.querySelector('div.container');
// console.log(container.children[1].children.children);
// console.log(container.firstChild)
// console.log(container.firstElementChild)
// console.log(container.lastChild)
// console.log(container.lastElementChild)

// console.log(container.childElementCount)
console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextSibling)
console.log(container.firstElementChild.nextElementSibling)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)