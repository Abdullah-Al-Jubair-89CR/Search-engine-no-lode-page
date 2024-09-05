const product = [];
function productBio(image,name,prize) {
   product.push(
     {
       image:image,
       name:name,
       prize:prize
     })
}
productBio("/image/camera.jpeg","DSAR 280max lence 10x","100");
productBio("/image/mouthSpecker.jpeg","microphon","30");
productBio("/image/bluetooth.jpeg","bluetooth","20");
productBio("/image/phon.jpeg","Samgsang s20 ultra","60");
productBio("/image/phon.jpeg","Samgsang s30 ultra","60");

productBio("/image/handWatch.jpeg","Smart p48 handWatch","prize6");
productBio("/image/watch.jpeg","headPhon","prize6");

function display(products) {
  const productConteinar = document.getElementById('product');
  productConteinar.innerHTML = '';
  products.forEach(arg => {
    productConteinar.innerHTML +=
      `<div>
<img src="${arg.image}" alt="">
  <h5>${arg.name}</h5>
   <h4>${arg.prize}$</h4>
  <button>Add to cart</button>
   </div>`
  })
}
display(product);
document.getElementById('userSearchValue').addEventListener('keyup',filterData);
function filterData() {
let usv = document.getElementById('userSearchValue').value.trim().toLowerCase();
let filterProduct = product.filter((arg) => {
   return arg.name.toLowerCase().includes(usv);
})

  display(filterProduct);
}