$("#customer").css('display','none');
$("#employee").css('display','none');
$("#supplier").css('display','none');
$("#item").css('display','none');
$("#inventory").css('display','none');
$("#order").css('display','none');
$("#refund_form").css('display','none');
$("#adminPanel_from").css('display','none');


/*Buttons*/
$('#customer_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','block');
    $("#employee").css('display','none');
    $("#supplier").css('display','none');
    $("#item").css('display','none');
    $("#inventory").css('display','none');
    $("#order").css('display','none');
    $("#main-panel").css('display','none');
    $("#refund_form").css('display','none');
    $("#adminPanel_from").css('display','none');


})
$('#employee_btn').on("click", () => {
    event.preventDefault();
    $("#employee").css('display','block');
    $("#customer").css('display','none');
    $("#supplier").css('display','none');
    $("#item").css('display','none');
    $("#inventory").css('display','none');
    $("#order").css('display','none');
    $("#main-panel").css('display','none');
    $("#refund_form").css('display','none');
    $("#adminPanel_from").css('display','none');


})
$('#supplier_btn').on("click", () => {
    event.preventDefault();
    $("#employee").css('display','none');
    $("#customer").css('display','none');
    $("#supplier").css('display','block');
    $("#item").css('display','none');
    $("#inventory").css('display','none');
    $("#order").css('display','none');
    $("#main-panel").css('display','none');
    $("#refund_form").css('display','none');
    $("#adminPanel_from").css('display','none');


})

$('#item_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#employee").css('display','none');
    $("#supplier").css('display','none');
    $("#item").css('display','block');
    $("#inventory").css('display','none');
    $("#order").css('display','none');
    $("#main-panel").css('display','none');
    $("#refund_form").css('display','none');
    $("#adminPanel_from").css('display','none');



})
$('#inventory_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#employee").css('display','none');
    $("#supplier").css('display','none');
    $("#item").css('display','none');
    $("#inventory").css('display','block');
    $("#order").css('display','none');
    $("#main-panel").css('display','none');
    $("#refund_form").css('display','none');
    $("#adminPanel_from").css('display','none');



})
$('#sale_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#employee").css('display','none');
    $("#supplier").css('display','none');
    $("#item").css('display','none');
    $("#inventory").css('display','none');
    $("#order").css('display','block');
    $("#main-panel").css('display','none');
    $("#refund_form").css('display','none');
    $("#adminPanel_from").css('display','none');


})
$('#refund_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#employee").css('display','none');
    $("#supplier").css('display','none');
    $("#item").css('display','none');
    $("#inventory").css('display','none');
    $("#order").css('display','none');
    $("#main-panel").css('display','none');
    $("#refund_form").css('display','block');
    $("#adminPanel_from").css('display','none');


})
$('#admin_btn').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#employee").css('display','none');
    $("#supplier").css('display','none');
    $("#item").css('display','none');
    $("#inventory").css('display','none');
    $("#order").css('display','none');
    $("#main-panel").css('display','none');
    $("#refund_form").css('display','none');
    $("#adminPanel_from").css('display','block');


})

/*Nav Bar*/
$('.navbar-brand').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#employee").css('display','none');
    $("#item").css('display','none');
    $("#inventory").css('display','none');
    $("#supplier").css('display','none');
    $("#order").css('display','none');
    $("#menu-section").css('display','block');
    $("#refund_form").css('display','none');
    $("#adminPanel_from").css('display','none');

})

$('#nav_cust').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','block');
    $("#employee").css('display','none');
    $("#supplier").css('display','none');
    $("#item").css('display','none');
    $("#inventory").css('display','none');
    $("#order").css('display','none');
    $('#menu-section').css('display', 'none');
    $("#refund_form").css('display','none');
    $("#adminPanel_from").css('display','none');

})

$('#nav_employee').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#employee").css('display','block');
    $("#supplier").css('display','none');
    $("#item").css('display','none');
    $("#inventory").css('display','none');
    $("#order").css('display','none');
    $('#menu-section').css('display', 'none');
    $("#refund_form").css('display','none');
    $("#adminPanel_from").css('display','none');


})


$('#nav_supplier').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#employee").css('display','none');
    $("#supplier").css('display','block');
    $("#item").css('display','none');
    $("#inventory").css('display','none');
    $("#order").css('display','none');
    $("#menu-section").css('display','none');
    $("#refund_form").css('display','none');
    $("#adminPanel_from").css('display','none');

})
$('#nav_item').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#employee").css('display','none');
    $("#supplier").css('display','none');
    $("#item").css('display','block');
    $("#inventory").css('display','none');
    $("#order").css('display','none');
    $("#menu-section").css('display','none');
    $("#place_order").css('display','none');
    $("#adminPanel_from").css('display','none');

})
$('#nav_inventory').on("click", () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#employee").css('display','none');
    $("#supplier").css('display','none');
    $("#item").css('display','none');
    $("#inventory").css('display','block');
    $("#order").css('display','none');
    $("#menu-section").css('display','none');
    $("#place_order").css('display','none');
    $("#adminPanel_from").css('display','none');

})

$('#nav_place').on('click', () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#supplier").css('display','none');
    $("#employee").css('display','none');
    $("#order").css('display','block');
    $("#menu-section").css('display','none');
    $("#place_order").css('display','none');
    $("#adminPanel_from").css('display','none');
})

$('#nav_recent').on('click', () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#supplier").css('display','none');
    $("#employee").css('display','none');
    $("#order").css('display','none');
    $("#menu-section").css('display','none');
    $("#place_order").css('display','block');
    $("#adminPanel_from").css('display','none');

})

$('#nav_admin').on('click', () => {
    event.preventDefault();
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#supplier").css('display','none');
    $("#employee").css('display','none');
    $("#order").css('display','none');
    $("#menu-section").css('display','none');
    $("#place_order").css('display','none');
    $("#adminPanel_from").css('display','block');

})


let clicked = false;

$('.dropdown-toggle').on('click', () => {
    if (!clicked) {
        $('.dropdown-menu').addClass('show');
        clicked = true;
    } else {
        $('.dropdown-menu').removeClass('show');
        clicked = false;
    }
});
    function logout() {
    // Remove the access token from local storage
    localStorage.removeItem('accessToken');

    // Redirect to the login page
    window.location.href = "logging.html";
}

