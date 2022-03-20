// const card = document.querySelectorAll('.card');
// const addtocard = document.querySelectorAll('.addtocard');
// const tbody = document.querySelector('#tbody')
// for (let i = 0; i < card.length; i++) {
//     addtocard[i].addEventListener('click',function(a){
//         let i = 0
//         let id = a.currentTarget.parentElement.parentElement.parentElement.parentElement.children[0].children[0].getAttribute('data-id');
//         let sekil = a.currentTarget.parentElement.parentElement.parentElement.parentElement.children[0].children[1].getAttribute('src');
//         let ad = a.currentTarget.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].innerText
//         let desc = a.currentTarget.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[1].children[0].innerText
//         let price = a.currentTarget.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[2].children[0].children[0].innerText
//         let qty = 1
//         // if (condition) {
            
//         // }
//         tbody.innerHTML += `
//                         <tr class='tr' product-id = '${id}'>
//                             <td>${i++}</td>
//                             <td><img class='w-100' src='${sekil}'/></td>
//                             <td>${ad}</td>
//                             <td>${desc}</td>
//                             <td><button class='w-25 btn float-left minus'>-</button><input class='w-50 float-left' type='text' value='${qty}' class='quantity'><button class='w-25 btn float-left plus'>+</button></td>
//                             <td>${price}</td>
//                             <td><button class='btn btn-danger remove' type='submit'>remove</button></td>
//                             <td><button class='btn btn-success total' type='submit'>Cemi: <span class='totalPrice'></span>AZN</button></td>
//                         </tr>`;
//         let tr = document.querySelectorAll('.tr')
//         for (let index = 0; index < tr.length; index++) {
//             var eded = parseInt(tr[index].children[4].children[1].value)
//             console.log(tr[index].children[4].children[1].value);
//             var qiymet = parseInt(tr[index].children[5].innerText)
//             // totalPrice
//             tr[index].children[7].children[0].children[0].innerText = eded * qiymet
//         }
//         document.querySelector('#total').innerText = Number(document.querySelector('#total').innerText) + Number(qiymet);
//         // plus duymesine vurduqda total deyiskenliyi
//         let plus = document.querySelectorAll('.plus');
//         for (let index = 0; index < plus.length; index++) {
//             plus[index].addEventListener('click',function(a){
//                 tr[index].children[4].children[1].value++
//                 tr[index].children[7].children[0].children[0].innerText = Number(tr[index].children[7].children[0].children[0].innerText) + Number(qiymet)
//                 // yekun qiymetin artmasi 
//                 document.querySelector('#total').innerText = Number(document.querySelector('#total').innerText) + Number(qiymet);
//             })
//         }
//         // minusa vurduqda total azalmasi ve silinmesi
//         let minus = document.querySelectorAll('.minus');
//         for (let index = 0; index < minus.length; index++) {
//             i = 1
//             minus[index].addEventListener('click',function(a){
//                 tr[index].children[4].children[1].value--
//             if (minus[index].nextElementSibling.value < 1) {
//                 minus[index].parentElement.parentElement.remove();
//                 document.querySelector('#total').innerText = 0
//             }else{
//                 // var cemXanasi = tr[index].children[7].children[0].children[0].innerText
//                 tr[index].children[7].children[0].children[0].innerText = Number(tr[index].children[7].children[0].children[0].innerText) - Number(qiymet)
//                 document.querySelector('#total').innerText = Number(document.querySelector('#total').innerText) - Number(qiymet);    
//             }
//             })
//         }
//     })
// }













// const card = document.getElementsByClassName("card")
// const addtocard = document.getElementsByClassName("addtocard")
// const tbody = document.getElementById("tbody")
// let tr = document.getElementsByClassName('tr')

// class Shopping{
//     constructor(sekil,ad,desc,price,qty){
//         this.sekil = sekil
//         this.ad = ad
//         this.desc = desc
//         this.price = price
//         this.qty = qty
//     }
// }


// class UI{
//             addToCart(shopping){         
//                 tbody.innerHTML +=
//                                 `<tr class='tr'>
//                                     <td></td>
//                                      <td><img class='w-100' src='${shopping.sekil}'/></td>
//                                     <td>${shopping.ad}</td>
//                                     <td>${shopping.desc}</td>
//                                     <td><button class='w-25 btn float-left minus'>-</button><input class='w-50 float-lef eded' type='text' value='${shopping.qty}' class='quantity'><button class='w-25 btn float-left plus'>+</button></td>
//                                     <td class="price">${shopping.price}</td>
//                                     <td><button class='btn btn-danger remove' type='submit'>remove</button></td>
//                                     <td><button class='btn btn-success ' type='submit'>Cemi: <span class='totalPrice'>${shopping.price}</span>AZN</button></td>
//                                 </tr>
//                                 `
//         }
//         trCart(){               
//                                 let tr = document.getElementsByClassName("tr")
//                                  for (let i = 0; i < tr.length; i++) {     
//                                     var eded = parseInt(tr[i].getElementsByClassName("eded")[0].value)
//                                     var qiymet = parseInt(tr[i].getElementsByClassName("price")[0].textContent)
//                                     var total = tr[i].getElementsByClassName("totalPrice")[0].textContent
//                                     total = parseInt(eded *qiymet)
//                                  }
//                                  document.querySelector('#total').innerText = Number(document.querySelector('#total').innerText) + Number(qiymet)
//         }
//         plusCart(){
//                                 let plus = document.querySelectorAll(".plus")
//                                 for (let i= 0; i < plus.length; i++) {
//                                     plus[i].addEventListener("click",function(){
//                                         tr[i].getElementsByClassName("eded")[0].value++
//                                         tr[i].getElementsByClassName("totalPrice")[0].innerHTML =  tr[i].getElementsByClassName("eded")[0].value * parseInt(tr[i].getElementsByClassName("price")[0].textContent)
//                                         document.querySelector("#total").innerText = Number(document.querySelector("#total").innerText) + Number(tr[i].getElementsByClassName("price")[0].textContent)
//                                     })
//                                 }
//         }
//         minusCart(){
//             let minusBtn = document.querySelectorAll(".minus")
//             for (let i = 0; i < minusBtn.length; i++) {
//                     minusBtn[i].addEventListener("click",function(){
//                         console.log(tr[i].getElementsByClassName("eded")[0].value);
//                         tr[i].getElementsByClassName("eded")[0].value--
//                         if (tr[i].getElementsByClassName("eded")[0].value < 0 ) {
//                             tr[i].getElementsByClassName("eded")[0].parentElement.parentElement.remove()
//                             document.querySelector('#total').innerText = 0
//                         }
//                         else{
//                                             // var cemXanasi = tr[index].children[7].children[0].children[0].innerText
//                              tr[i].children[7].children[0].children[0].innerText = Number(tr[i].children[7].children[0].children[0].innerText) - Number(qiymet)
//                              document.querySelector('#total').innerText = Number(document.querySelector('#total').innerText) - Number(qiymet);    
//                              }
//                     })
//             }
//         }
//     } 
//     for (let i = 0; i < card.length; i++) {
//         addtocard[i].addEventListener("click",function(e){
//             let sekil = card[i].getElementsByClassName("photo")[0].getAttribute("src")
//           let ad  =  card[i].getElementsByClassName("productName")[0].textContent
//           let desc = card[i].getElementsByClassName("productDescription")[0].textContent
//           let price = card[i].getElementsByClassName("btn")[0].textContent
//           let qty = 1
//           let shopping = new Shopping(sekil,ad,desc,price,qty)
//           let ui = new UI()  
//           ui.addToCart(shopping)
//           ui.trCart()  
//           ui.plusCart()
//           ui.minusCart()
//         e.preventDefault()
//     })
// }





// const card = document.getElementsByClassName("card")
// const addtocard = document.querySelectorAll(".addtocard")
// const tbody = document.querySelector("#tbody")

// for (let i = 0; i < card.length; i++) {
//    addtocard[i].addEventListener("click",function(a){
//        let sekil = card[i].getElementsByClassName("photo")[0].getAttribute("src")
//        let ad  =  card[i].getElementsByClassName("productName")[0].textContent
//        let desc = card[i].getElementsByClassName("productDescription")[0].textContent
//        let price = card[i].getElementsByClassName("btn")[0].textContent
//        let qty = 1
//        console.log(i);
//        tbody.innerHTML += `
//                                 <tr class='tr'>
//                                     <td>${i++}</td>
//                                     <td><img class='w-100' src='${sekil}'/></td>
//                                     <td>${ad}</td>
//                                     <td>${desc}</td>
//                                     <td><button class='w-25 btn float-left minus'>-</button><input class='w-50 float-lef eded' type='text' value='${qty}' class='quantity'><button class='w-25 btn float-left plus'>+</button></td>
//                                     <td class="price">${price}</td>
//                                     <td><button class='btn btn-danger remove' type='submit'>remove</button></td>
//                                     <td><button class='btn btn-success ' type='submit'>Cemi: <span class='totalPrice'>${price}</span>AZN</button></td>
//                                 </tr>`
                                
//                                 let tr = document.querySelectorAll('.tr')
//                                 for (let index = 0; index < tr.length; index++) {
//                                     var eded = parseInt(tr[index].getElementsByClassName("eded")[0].value)
//                                     var qiymet = parseInt(tr[index].getElementsByClassName("price")[0].textContent)
//                                     var total = tr[index].getElementsByClassName("totalPrice")[0].textContent
//                                     total = parseInt(eded *qiymet)
//                                 }
//                                 document.querySelector('#total').innerText = Number(document.querySelector('#total').innerText) + Number(qiymet)
//                                 let plus = document.querySelectorAll(".plus")
//                                 for (let index = 0; index < plus.length; index++) {
//                                     plus[index].addEventListener("click",function(a){
//                                         tr[index].getElementsByClassName("eded")[0].value++
//                                         tr[index].getElementsByClassName("totalPrice")[0].innerHTML =  tr[index].getElementsByClassName("eded")[0].value * parseInt(tr[index].getElementsByClassName("price")[0].textContent)
//                                         document.querySelector("#total").innerText = Number(document.querySelector("#total").innerText) + Number(tr[index].getElementsByClassName("price")[0].textContent)
//                                     })
//                                 }
//                                 let minus = document.querySelectorAll(".minus")
//                                 for (let index = 0; index < minus.length; index++) {
//                                     minus[index].addEventListener("click",function(a){
//                                         i=1
//                                         tr[index].getElementsByClassName("eded")[0].value--
//                                         if (minus[index].nextElementSibling.value <1) {
//                                             minus[index].parentElement.parentElement.remove();
//                                             //hardan bildikki minusun valideyini td di consolede gostermir
//                                             document.querySelector('#total').innerText = Number(document.querySelector('#total').innerText) -  Number(tr[index].getElementsByClassName("price")[0].textContent)
//                                         }
//                                         else{
//                                              tr[index].getElementsByClassName("totalPrice")[0].innerHTML =  tr[index].getElementsByClassName("eded")[0].value * parseInt(tr[index].getElementsByClassName("price")[0].textContent)
//                                             document.querySelector('#total').innerText = Number(document.querySelector('#total').innerText) -Number(tr[index].getElementsByClassName("price")[0].textContent)
//                                         }
//                                     })
//                                 }
//                                 let remove = document.querySelectorAll(".remove")
//                                 for (let index = 0; index < remove.length; index++) {
//                                     remove[index].addEventListener("click",function(a){
//                                         remove[index].parentElement.parentElement.remove()
//                                         document.querySelector('#total').innerText = Number(document.querySelector('#total').innerText) - Number(tr[index].getElementsByClassName("totalPrice")[0].textContent)                               
//                                     })
//                                 }
//    })
// }



$(document).ready(function(){
    $(".card").each(function(i){
        $(".addtocard").eq(i).click(function(){
            $("tbody").append(`<tr class='tr'>
                                <td class="sira"></td>
                                <td><img class='w-100' src='${$(".photo").eq(i).attr('src')}'/></td>
                                <td>${$(".productName").eq(i).html()}</td>
                                <td>${$(".productDescription").eq(i).html()}</td>
                                <td><button class='w-25 btn float-left minus'>-</button><input class='w-50 float-lef eded' type='text' class='quantity' value="1"><button class='w-25 btn float-left plus'>+</button></td>
                                <td class="price">${$(".productPrice").eq(i).html()}</td>
                                <td><button class='btn btn-danger remove' type='submit'>remove</button></td>
                                <td><button class='btn btn-success ' type='submit'>Cemi: <span class='totalPrice'>${$(".productPrice").eq(i).html()}</span>AZN</button></td>
                            </tr>`)
                            let umumicem = $(this).parents("body").children().find("#total")
                            umumicem.text(Number(umumicem.text())+Number($(this).prev().text()))
                            let t = $(this).parents("body").children().find(".tr")
                            let i = 0; 
                            i < t.length;
                                i++
                                console.log(i);
                        
                        })
    })
})
$(document).on("click", ".remove", function (){
    let umumicem = $(this).parents(".modal-content").children().find(".umumicem")
    let total = $(this).parents("tr").children().find(".totalPrice").text()
    umumicem.text(umumicem.text()-Number(total))
    $(this).parents(".tr").remove()
})

$(document).on("click", ".plus", function (i) {
    $(this).prev().val(Number($(this).prev().val())+1)
    let total = $(this).parents("tr").children().find(".totalPrice");
    let price = Number($(this).parents("tr").children(".price").text());
    let value = Number($(this).prev().val());
    total.text(price * value)
    let umumicem = $(this).parents(".modal-content").children().find(".umumicem")
    umumicem.text(Number(umumicem.text())+price)
});
$(document).on("click", ".minus", function () {
    $(this).next().val(Number($(this).next().val())-1)
    let total = $(this).parents("tr").children().find(".totalPrice")
    let price = Number($(this).parents("tr").children(".price").text());
    let value = Number($(this).next().val());
    let umumicem = $(this).parents(".modal-content").children().find(".umumicem")
    umumicem.text(Number(umumicem.text())-price)
    total.text(price * value)
});