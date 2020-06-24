var removedItem,
sum = 0;

$(function () {
  // calculate the values at the start
  calculatePrices();

  // Click to remove an item
  $(document).on("click", "a.remove", function () {
    removeItem.apply(this);
  });

  // Undo removal link click
  $(document).on("click", ".removeAlert a", function () {
    // insert it into the table
    addItemBackIn();
    //remove the removal alert message
    hideRemoveAlert();
  });

  $(document).on("change", "input.quantity", function () {
    var val = $(this).val(),
    pricePer,
    total;

    if (val <= "0") {
      removeItem.apply(this);
    } else {
      // reset the prices
      sum = 0;

      // get the price for the item
      pricePer = $(this).parents("td").prev("td").text();
      // set the pricePer to a nice, digestable number
      pricePer = formatNum(pricePer);
      // calculate the new total
      total = parseFloat(val * pricePer).toFixed(2);
      // set the total cell to the new price
      $(this).parents("td").siblings(".itemTotal").text("$" + total);

      // recalculate prices for all items
      calculatePrices();
    }
  });

});



function removeItem() {
  // store the html
  removedItem = $(this).closest("tr").clone();
  // fade out the item row
  $(this).closest("tr").fadeOut(500, function () {
    $(this).remove();
    sum = 0;
    calculatePrices();
  });
  // fade in the removed confirmation alert
  $(".removeAlert").fadeIn();

  // default to hide the removal alert after 5 sec
  setTimeout(function () {
    hideRemoveAlert();
  }, 5000);
}

function hideRemoveAlert() {
  $(".removeAlert").fadeOut(500);
}

function addItemBackIn() {
  sum = 0;
  $(removedItem).prependTo("table.items tbody").hide().fadeIn(500);
  calculatePrices();
}

function updateSubTotal() {
  $("table.items td.itemTotal").each(function () {
    var value = $(this).text();
    // set the pricePer to a nice, digestable number
    value = formatNum(value);

    sum += parseFloat(value);
    $("table.pricing td.subtotal").text("$" + sum.toFixed(2));
  });
}

function addTax() {
  var tax = parseFloat(sum * 0.05).toFixed(2);
  $("table.pricing td.tax").text("$" + tax);
}

function calculateTotal() {
  var subtotal = $("table.pricing td.subtotal").text(),
  tax = $("table.pricing td.tax").text(),
  shipping = $("table.pricing td.shipping").text(),
  total;

  subtotal = formatNum(subtotal);
  tax = formatNum(tax);
  shipping = formatNum(shipping);

  total = (subtotal + tax + shipping).toFixed(2);

  $("table.pricing td.orderTotal").text("$" + total);
}

function calculatePrices() {
  updateSubTotal();
  addTax();
  calculateTotal();
}

function formatNum(num) {
  return parseFloat(num.replace(/[^0-9-.]/g, ''));
}



function chkcart(x) {
            var rootRef = firebase.database().ref(x + '/cart');

            rootRef.on("child_added", snap => {

            var id = snap.child("id").val();
            var qnty = snap.child("qnty").val();
            var ctid = snap.child("tmst").val();
            var lmd = snap.child("typ").val();
            

            if(!ids.includes(id) && lmd!="temp"){
                ids[cnt] = id;
            qtys[cnt] = qnty;
            tmsts[cnt] = ctid;
            //console.log(ids[cnt] + ", " + qtys[cnt] + ", " + tmsts[cnt]);
            
            chkfoods(id,qnty,ctid);
            cnt += 1;
            if(cnt==1){Util.removeClass(cart[0], 'cd-cart--empty');}
            
            var pdt = document.querySelectorAll(".cd-cart__product");
            
            if (pdt.length > 0) {

                Util.removeClass(cart[0], 'cd-cart--empty');
                Util.addClass(cartCount, 'cd-cart__count--update');

                    setTimeout(function() {
                        
                    }, 150);

                    setTimeout(function() {
                        Util.removeClass(cartCount, 'cd-cart__count--update');
                    }, 200);

                    setTimeout(function() {
                        
                        animatingQuantity = false;
                    }, 230);
            }
        }
        });

        }

        function chkfoods(y,z,m) {
            var rootRef = firebase.database().ref('foods');

            rootRef.on("child_added", snap => {

            var id = snap.child("id").val();
            var price = snap.child("price").val();
            var name = snap.child("name").val();
            var thumb = snap.child("thumb").val();
            if(id == y){
            price = price * z;
            addProduct(m,price,id,name,thumb,z);

            updateCartCount(false, z);

            updateCartTotal(price, true);

            document.getElementById(y + "qtys").innerText = z + " added to cart";
            document.getElementById(y + "qtycnt").setAttribute("data-qty", z);
            document.getElementById(y + "vw").setAttribute("data-qty", z);
            document.getElementById(y + "qtys").style.display = "block";
            var smj = qtys.reduce(function(a, b){
            return a + b;
            }, 0);
            document.getElementById('cartcntside').innerText = smj;
            //cartCountItems[0].innerText = sum; //cartCountItems[0].innerText;
        }
        });
           
            var rootRef = firebase.database().ref('medicine');

            rootRef.on("child_added", snap => {

            var id = snap.child("id").val();
            var price = snap.child("price").val();
            var name = snap.child("name").val();
            var thumb = snap.child("thumb").val();
            if(id == y){
            price = price * z;
            addProduct(m,price,id,name,thumb,z);

            updateCartCount(false, z);

            updateCartTotal(price, true);
            document.getElementById(y + "qtys").innerText = z + " added to cart";
            document.getElementById(y + "qtycnt").setAttribute("data-qty", z);
            document.getElementById(y + "vw").setAttribute("data-qty", z);
            document.getElementById(y + "qtys").style.display = "block";
            var smj = qtys.reduce(function(a, b){
            return a + b;
            }, 0);
            document.getElementById('cartcntside').innerText = smj;
            //cartCountItems[0].innerText = sum; //cartCountItems[0].innerText;
        }
        });
                      
        }
        
        function chkchd(x) {
            var rootRef = firebase.database().ref(x + '/cart');

            rootRef.on("child_changed", snap => {

            var id = snap.child("id").val();
            var qnty = snap.child("qnty").val();
            var ctid = snap.child("tmst").val();
            var lmd = snap.child("typ").val();
                if(lmd!="temp")
                chkdd(x);
            
        });

        }
        
        function chkdd(y) {
            document.getElementsByClassName('js-cd-cart')[0].getElementsByClassName('cd-cart__checkout')[0].getElementsByTagName('span')[0] = 0.00;
            document.getElementsByClassName('js-cd-cart')[0].getElementsByClassName('cd-cart__count')[0].getElementsByTagName('li')[0] = 1;
            document.getElementsByClassName('js-cd-cart')[0].getElementsByClassName('cd-cart__count')[0].getElementsByTagName('li')[0] = 2;            
            price = 0;
            quantity = 0;
            cartCountItems[0].innerText = 0;
            cartTotal.innerText = 0;
             var x = document.querySelectorAll(".cd-cart__product");
                var i;
                for (i = 0; i < x.length; i++) {
                x[i].remove();
            }
            ids = [];
            qtys = [];
            tmsts = [];
            chkcart(y);
        }