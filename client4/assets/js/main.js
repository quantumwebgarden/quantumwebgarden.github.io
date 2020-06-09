var cnt = 0;
var ids = [];
var qtys = [];
var tmsts = [];
var lstid = "";
var lstqty = "";
(function(){
  // Add to Cart Interaction - by CodyHouse.co
  var cart = document.getElementsByClassName('js-cd-cart');

  if(cart.length > 0) {
    var cartAddBtns = document.getElementsByClassName('js-cd-add-to-cart'),
        cartBody = cart[0].getElementsByClassName('cd-cart__body')[0],
        cartList = cartBody.getElementsByTagName('ul')[0],
        cartListItems = cartList.getElementsByClassName('cd-cart__product'),
        cartTotal = cart[0].getElementsByClassName('cd-cart__checkout')[0].getElementsByTagName('span')[0],
        cartCount = cart[0].getElementsByClassName('cd-cart__count')[0],
        cartCountItems = cartCount.getElementsByTagName('li'),
        cartUndo = cart[0].getElementsByClassName('cd-cart__undo')[0],
        productId = 0, //this is a placeholder -> use your real product ids instead
        cartTimeoutId = false,
        animatingQuantity = false;
        initCartEvents();


            

        function initCartEvents() {
            // add products to cart
            for(var i = 0; i < cartAddBtns.length; i++) {(function(i){
                cartAddBtns[i].addEventListener('click', addToCart);
            })(i);}

            // open/close cart
            cart[0].getElementsByClassName('cd-cart__trigger')[0].addEventListener('click', function(event){
                event.preventDefault();
                toggleCart();
            });
            
            cart[0].addEventListener('click', function(event) {
                if(event.target == cart[0]) { // close cart when clicking on bg layer
                    toggleCart(true);
                } else if (event.target.closest('.cd-cart__delete-item')) { // remove product from cart
                    event.preventDefault();
                    removeProduct(event.target.closest('.cd-cart__product'));
                }
            });
            
            
            // update product quantity inside cart
            cart[0].addEventListener('change', function(event) {
                if(event.target.tagName.toLowerCase() == 'select') quickUpdateCart();
            });

            //reinsert product deleted from the cart
            cartUndo.addEventListener('click', function(event) {
                if(event.target.tagName.toLowerCase() == 'a') {
                    event.preventDefault();
                    if(cartTimeoutId) clearInterval(cartTimeoutId);
                    // reinsert deleted product
                    var deletedProduct = cartList.getElementsByClassName('cd-cart__product--deleted')[0];
                    lstid = cartList.getElementsByClassName('cd-cart__product--deleted')[0].getElementsByClassName('cd-cart__delete-item')[0].getAttribute('data-id');
                    lstqty = cartList.getElementsByClassName('cd-cart__product--deleted')[0].getElementsByClassName('cd-cart__delete-item')[0].getAttribute('data-qty');
                    

                    Util.addClass(deletedProduct, 'cd-cart__product--undo');
                    deletedProduct.addEventListener('animationend', function cb(){
                        deletedProduct.removeEventListener('animationend', cb);
                        Util.removeClass(deletedProduct, 'cd-cart__product--deleted cd-cart__product--undo');
                        deletedProduct.removeAttribute('style');
                        quickUpdateCart();
                    });
                    Util.removeClass(cartUndo, 'cd-cart__undo--visible');
                }
            });
            

            chkcart(u);
            chkchd(u);
            
        };

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

        };

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

            var rootRef = firebase.database().ref('grocery');

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

            var rootRef = firebase.database().ref('essentials');

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
                      
        };
        
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

        };
        
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
        };
        

        function addToCart(event) {

            event.preventDefault();
            if(animatingQuantity) return;
            var cartIsEmpty = Util.hasClass(cart[0], 'cd-cart--empty');
            //update cart product list
            /*addProduct(this.getAttribute('data-price'), this.getAttribute('data-itemid'), this.getAttribute('data-itemname'), this.getAttribute('data-pic'));
            //update number of items 
            updateCartCount(cartIsEmpty);
            //update total price
            updateCartTotal(this.getAttribute('data-price'), true);
            //show cart*/
            Util.removeClass(cart[0], 'cd-cart--empty');
        };

        

        function toggleCart(bool) { // toggle cart visibility
            var cartIsOpen = ( typeof bool === 'undefined' ) ? Util.hasClass(cart[0], 'cd-cart--open') : bool;
        
            if( cartIsOpen ) {
                Util.removeClass(cart[0], 'cd-cart--open');
                //reset undo
                if(cartTimeoutId) clearInterval(cartTimeoutId);
                Util.removeClass(cartUndo, 'cd-cart__undo--visible');
                removePreviousProduct(); // if a product was deleted, remove it definitively from the cart

                setTimeout(function(){
                    cartBody.scrollTop = 0;
                    //check if cart empty to hide it
                    if( Number(cartCountItems[0].innerText) == 0) Util.addClass(cart[0], 'cd-cart--empty');
                }, 500);
            } else {
                Util.addClass(cart[0], 'cd-cart--open');
            }
        };

        function addProduct(ctid,price,itemid,itemname,itempic,qnty) {
            // this is just a product placeholder
            // you should insert an item with the selected product info
            // replace productId, productName, price and url with your real product info
            // you should also check if the product was already in the cart -> if it is, just update the quantity
            //qnty = productId + 1;
            pr_qt = price/qnty;
            var productAdded = '<li class="cd-cart__product" data-ctid="' + ctid + '"><div class="cd-cart__image"><a href="#0"><img src="' + itempic + '" alt="' + itemname + '"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">' + itemname + '</a></h3><span class="cd-cart__price">' + price + '</span><div class="cd-cart__actions"><a href="#0" id="del'+ itemid +'" class="cd-cart__delete-item" data-id="' + itemid + '" data-price="' + pr_qt + '" data-qty="' + qnty + '">Delete</a><div class="cd-cart__quantity"><label for="cd-product-'+ itemid +'">Qty</label><span class="cd-cart__select"> <img class="rmvcl mn' + qnty + '" src="minus.png" width="20px" height="20px" data-qty="' + qnty + '" data-itemid="' + itemid + '" id="minus' + itemid + '" onclick="rmv(this)"> <b class="reset" id="cd-product-'+ itemid +'" name="quantity">' + qnty + '</b> <img src="plus.png" width="20px" height="20px" data-qty="' + qnty + '" data-itemid="' + itemid + '" onclick="adc(this)"></span></div></div></div></li>';
            cartList.insertAdjacentHTML('beforeend', productAdded);
        };

        function removeProduct(product) {
            if(cartTimeoutId) clearInterval(cartTimeoutId);
            removePreviousProduct(); // prduct previously deleted -> definitively remove it from the cart
            
            var fdSid = product.getElementsByClassName('cd-cart__delete-item')[0].getAttribute('data-id');
            document.getElementById(fdSid + "qtys").innerHTML = 'just removed from cart';
            document.getElementById(fdSid + "qtys").style.color = 'grey';

            var topPosition = product.offsetTop,
                productQuantity = Number(product.getElementsByClassName('cd-cart__delete-item')[0].getAttribute('data-qty')),
                productTotPrice = Number(product.getElementsByClassName('cd-cart__delete-item')[0].getAttribute('data-price')) * productQuantity;

            product.style.top = topPosition+'px';
            Util.addClass(product, 'cd-cart__product--deleted');

            var ctidtemp = document.querySelectorAll('.cd-cart__product--deleted')[0].getAttribute('data-ctid');
            firebase.database().ref(u + "/cart/" + ctidtemp).update({typ:'temp'});

            //update items count + total price
            updateCartTotal(productTotPrice, false);
            updateCartCount(true, -productQuantity);
            Util.addClass(cartUndo, 'cd-cart__undo--visible');


            //wait 8sec before completely remove the item
            cartTimeoutId = setTimeout(function(){
                Util.removeClass(cartUndo, 'cd-cart__undo--visible');
                removePreviousProduct();
            }, 10000);
        };

        function removePreviousProduct() { // definitively removed a product from the cart (undo not possible anymore)
            var deletedProduct = cartList.getElementsByClassName('cd-cart__product--deleted');
            
            if(deletedProduct.length > 0 ) {
            var ctid = document.querySelectorAll('.cd-cart__product--deleted')[0].getAttribute('data-ctid');

            var fdSid = cartList.getElementsByClassName('cd-cart__product--deleted')[0].getElementsByClassName('cd-cart__delete-item')[0].getAttribute('data-id');
            document.getElementById(fdSid + "qtys").innerHTML = '0';
            document.getElementById(fdSid + "qtys").style.display = 'none';
            document.getElementById(fdSid + "qtys").style.color = 'black';
            ids[ids.indexOf(fdSid)]= '';
            qtys[ids.indexOf(fdSid)]= '';
            tmsts[ids.indexOf(fdSid)]= '';
            document.getElementById(fdSid + "qtycnt").setAttribute('data-qty', 0);
            document.getElementById(fdSid + "vw").setAttribute('data-qty', 0);
            upd = fdSid;

            var smj = qtys.reduce(function(a, b){
            return a + b;
            }, 0);
            document.getElementById('cartcntside').innerText = smj;

            var userRef = firebase.database().ref(u + '/cart/' + ctid).remove();
                deletedProduct[0].remove();
            }
        };

        function updateCartCount(emptyCart, quantity) {
            if( typeof quantity === 'undefined' ) {
                var actual = Number(cartCountItems[0].innerText) + 1;
                var next = actual + 1;
                
                if( emptyCart ) {
                    cartCountItems[0].innerText = actual;
                    cartCountItems[1].innerText = next;
                    animatingQuantity = false;
                } else {
                    Util.addClass(cartCount, 'cd-cart__count--update');

                    setTimeout(function() {
                        cartCountItems[0].innerText = actual;
                    }, 150);

                    setTimeout(function() {
                        Util.removeClass(cartCount, 'cd-cart__count--update');
                    }, 200);

                    setTimeout(function() {
                        cartCountItems[1].innerText = next;
                        animatingQuantity = false;
                    }, 230);
                }
            } else {
                var actual = Number(cartCountItems[0].innerText) + quantity;
                var next = actual + 1;
                
                cartCountItems[0].innerText = actual;
                cartCountItems[1].innerText = next;
                animatingQuantity = false;
            }
            var smj = qtys.reduce(function(a, b){
            return a + b;
            }, 0);
            document.getElementById('cartcntside').innerText = smj;
        };

        function updateCartTotal(price, bool) {
            cartTotal.innerText = bool ? (Number(cartTotal.innerText) + Number(price)).toFixed(2) : (Number(cartTotal.innerText) - Number(price)).toFixed(2);
        };

        function quickUpdateCart() {
            var quantity = 0;
            var price = 0;
            for(var i = 0; i < cartListItems.length; i++) {
                if( !Util.hasClass(cartListItems[i], 'cd-cart__product--deleted') ) {
                    var singleQuantity = Number(cartListItems[i].getElementsByClassName('cd-cart__delete-item')[0].getAttribute('data-qty'));
                    quantity = quantity + singleQuantity;
                    price = price + singleQuantity*Number(cartListItems[i].getElementsByClassName('cd-cart__delete-item')[0].getAttribute('data-price'));
                }
            }

            cartTotal.innerText = price.toFixed(2);
            cartCountItems[0].innerText = quantity;
            cartCountItems[1].innerText = quantity+1;

            firebase.database().ref(u + "/cart/" + tmsts[ids.indexOf(lstid)]).update({typ:'main'});
            //console.log(tmsts[ids.indexOf(lstid)] + 'Quick');
            document.getElementById(lstid + "qtys").innerText = lstqty + ' added to cart';
            document.getElementById(lstid + "qtycnt").setAttribute('data-qty', lstqty);
            document.getElementById(lstid + "vw").setAttribute('data-qty', lstqty);
            document.getElementById(lstid + "qtys").style.display = 'block';
            document.getElementById(lstid + "qtys").style.color = 'black';
            

        };
  }
})();