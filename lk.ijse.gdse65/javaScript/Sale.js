//
// const loadAllInventoryCode = () => {
//     $('#order_item_id').empty();
//     $('#order_item_id').append("<option selected>Select item code</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/inventory",
//         method: "GET",
//         processData: false,
//         contentType: false,
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function (resp) {
//             console.log(resp);
//             for (const inventory of resp) {
//                 let option = `<option data-description="${inventory.item_desc}" data-unitPrice="${inventory.unit_price_sale}" data-qty="${inventory.item_qty}" data-size="${inventory.size}">${inventory.item_code}</option>;`
//                 $("#order_item_id").append(option);
//             }
//         },
//         error: function (xhr, exception) {
//             console.log("Error loading item codes:", exception);
//         }
//     });
// }
//
// $('#order_item_id').change((e) => {
//     const item_id_sale = e.target.value;
//     if ('Select item code' !== item_id_sale) {
//         const description = e.target.options[e.target.selectedIndex].getAttribute('data-description');
//         $('#description').val(description);
//
//         const unitPrice = e.target.options[e.target.selectedIndex].getAttribute('data-unitPrice');
//         $('#unit_price').val(unitPrice);
//
//         const qty = e.target.options[e.target.selectedIndex].getAttribute('data-qty');
//         $('#qty_on_hand').val(qty);
//
//         const size = e.target.options[e.target.selectedIndex].getAttribute('data-size');
//         $('#orSize').val(size);
//     }
// });
//
// const loadAllCustomerId = () => {
//     $('#customer_id').empty();
//     $('#customer_id').append("<option selected>Select Customer Id</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/customer",
//         method: "GET",
//         processData: false,
//         contentType: false,
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function (resp) {
//             console.log(resp);
//             for (const customer of resp) {
//                 let option = `<option data-customer_name="${customer.customer_name}">${customer.customer_code}</option>;`
//                 $("#customer_id").append(option);
//             }
//         },
//         error: function (xhr, exception) {
//             console.log("Error loading customer names:", exception);
//         }
//     });
// };
// $('#customer_id').change((e) => {
//     const customer_id = e.target.value;
//     if ('Select customer code' !== customer_id) {
//         const name = e.target.options[e.target.selectedIndex].getAttribute('data-customer_name');
//         $('#customer_name').val(name);
//     }
// });
//
// const loadAllEmployeeName = () => {
//     $('#employee_name').empty();
//     $('#employee_name').append("<option selected>Select employee name</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/employee",
//         method: "GET",
//         processData: false,
//         contentType: false,
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function (resp) {
//             console.log(resp);
//             for (const employee of resp) {
//                 let option = `<option data-employeeID="${employee.employeeId}">${employee.employeeName}</option>;`
//                 $("#employee_name").append(option);
//             }
//         },
//         error: function (xhr, exception) {
//             console.log("Error loading employee names:", exception);
//         }
//     });
// };
// $('#employee_name').change((e) => {
//     const employee_name = e.target.value;
//     if ('Select employee name' !== employee_name) {
//         const id = e.target.options[e.target.selectedIndex].getAttribute('data-employeeID');
//         $('#employee_code').val(id);
//     }
// });
//
//
//
// loadAllInventoryCode();
// loadAllCustomerId();
// loadAllEmployeeName();
//
// function loadItemData() {
//
// }
//
// $("#unit_price, #qty_on_hand, #order_qty").on("input", updateTotal);
//
// let itemsArray = [
//     { item_id: '1', description: 'Item 1', qty: 10, item_price: 5.00 },
// ];
//
// function updateTotal() {
//     const unitPrice = parseFloat($("#unit_price").val()) || 0;
//     const quantity = parseInt($("#order_qty").val()) || 0;
//     const total = (unitPrice * quantity);
//     $("#final_total").val(total.toFixed(2));
//     return total;
// }
//
// function addToCart() {
//     let item_id = $('#order_item_id option:selected').text();
//     let itemExists = false;
//
//     $('#order_table_body .item_id').each(function () {
//         if ($(this).text() === item_id) {
//             itemExists = true;
//             let existingQty = parseInt($(this).closest('tr').find('.qty').text());
//             let qty = parseInt($('#order_qty').val());
//             let newQty = existingQty + qty;
//
//             let existingTotal = parseFloat($(this).closest('tr').find('.total').text());
//             let add_total = updateTotal(); // Update the total and return it
//             let newTotal = existingTotal + add_total;
//
//             let selectedItem = itemsArray.find(item => item.item_id === item_id);
//
//             if (selectedItem) {
//                 if (selectedItem.qty < qty) {
//                     toastr.error('Error: Not enough items in stock.');
//                     return;
//                 } else {
//                     selectedItem.qty -= qty;
//                     $(this).closest('tr').find('.qty').text(newQty);
//                     $(this).closest('tr').find('.total').text(newTotal.toFixed(2));
//                     loadItemData();
//                 }
//             }
//
//             updateFinalTotal();
//             return false;
//         }
//     });
//
//     if (!itemExists) {
//         console.log('Item with ID ' + item_id + ' is not in the table.');
//
//         let desc = $('#description').val();
//         let total = updateTotal();
//         let qty = $('#order_qty').val();
//         let size = $('#orSize').val();
//
//         let selectedItem = itemsArray.find(item => item.item_id === item_id);
//
//         if (selectedItem) {
//             if (selectedItem.qty < qty) {
//                 toastr.error('Error: Not enough items in stock.');
//                 return;
//             } else {
//                 selectedItem.qty -= parseInt(qty);
//                 loadItemData();
//             }
//         }
//
//         let record = `<tr><td class="item_id">${item_id}</td><td class="desc">${desc}</td><td class="qty">${qty}</td><td class="total">${total.toFixed(2)}</td><td class="oSize">${size}</td></tr>;`
//         $("#order_table_body").append(record);
//
//         toastr.success("Add to cart...🛒");
//
//         // $('#order_item_id').val('');
//         // $('#description').val('');
//         // $('#unit_price').val('');
//         // $('#qty_on_hand').val('');
//         // $('#order_qty').val('');
//         // $('#orSize').val('');
//     } else {
//         console.log('Item not found in itemsArray.');
//     }
//     callMethod();
//     resetOrderForm();
//     updateFinalTotal();
// }
// $(document).ready(function() {
//     $("#add_cart").click(function() {
//         // Assuming you have code here to add the item to the cart
//         addToCart();
//         resetOrderForm();
//     });
// });
// function updateFinalTotal() {
//     let total = 0;
//     $('#order_table_body tr').each(function() {
//         let qty = parseFloat($(this).find('.qty').text()) || 0;
//         let unitPrice = parseFloat($(this).find('.total').text()) || 0;
//         total += qty * unitPrice;
//     });
//     $("#final_total").val(total.toFixed(2));
// }
// function resetOrderForm() {
//     $("#description").val("");
//     $("#orSize").val("");
//     $("#unit_price").val("");
//     $("#qty_on_hand").val("");
//     $("#order_qty").val("");
// }
// function callMethod() {
//     $("#order_table_body > tr").click(function () {
//         let item_id = $(this).find('.item_id').text();
//         let desc = $(this).find('.desc').text();
//         let qty = $(this).find('.qty').text();
//         let total = $(this).find('.total').text();
//         let size = $(this).find('.oSize').text();
//
//         $("#order_item_id").val(item_id);
//         $("#description").val(desc);
//         $("#order_qty").val(qty);
//         $("#unit_price").val(total/qty);
//         $("#orSize").val(size);
//
//     });
// }
// $("#remove").click(function () {
//     let selectedItemId = $('#order_item_id').val();
//
//     $('#order_item_id').val('');
//     $('#description').val('');
//     $('#unit_price').val('');
//     $('#qty_on_hand').val('');
//     $('#order_qty').val('');
//     $('#final_total').val('');
//
//     $("#order_table_body tr").each(function () {
//         if ($(this).find('.item_id').text() === selectedItemId) {
//             $(this).remove();
//             return false;
//         }
//     });
// });
//
// $("#place_ord").click(function () {
//
//     let formData = new FormData();
//     formData.append("order_id", $("#order_id").val());
//     formData.append("customer_id", $("#customer_id").val());
//     formData.append("customer_name", $("#customer_name").val());
//     formData.append("order_item_id", $("#order_item_id").val());
//     formData.append("description", $("#description").val());
//     formData.append("total", $("#final_total").val());
//
//     $.ajax({
//         method: "POST",
//         url: "http://localhost:8080/POS_system_spring_war_exploded/api/v1/order",
//         async: true,
//         processData: false,
//         contentType: false,
//         data: formData,
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function (data) {
//             reset();
//             alert("Order saved successfully.");
//         },
//         error: function (xhr, status, error) {
//             alert("Error: " + error);
//         }
//     });
// });

// $(document).ready(function() {
//     loadAllInventoryCode();
//     loadAllCustomerId();
//     loadAllEmployeeName();
//
//     $("#unit_price, #qty_on_hand, #order_qty").on("input", updateTotal);
//
//     $("#add_cart").click(function() {
//         addToCart();
//         resetOrderForm();
//     });
//
//     $("#remove").click(function() {
//         removeSelectedItem();
//     });
//
//     $("#place_ord").click(function() {
//         placeOrder();
//     });
// });
//
// function loadAllInventoryCode() {
//     $('#order_item_id').empty();
//     $('#order_item_id').append("<option selected>Select item code</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/inventory",
//         method: "GET",
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function(resp) {
//             for (const inventory of resp) {
//                 let option = `<option data-description="${inventory.item_desc}" data-unitPrice="${inventory.unit_price_sale}" data-qty="${inventory.item_qty}" data-size="${inventory.size}">${inventory.item_code}</option>`;
//                 $("#order_item_id").append(option);
//             }
//         },
//         error: function(xhr, exception) {
//             console.log("Error loading item codes:", exception);
//         }
//     });
// }
//
// $('#order_item_id').change((e) => {
//     const item_id_sale = e.target.value;
//     if ('Select item code' !== item_id_sale) {
//         const selectedOption = e.target.options[e.target.selectedIndex];
//         const description = selectedOption.getAttribute('data-description');
//         const unitPrice = selectedOption.getAttribute('data-unitPrice');
//         const qty = selectedOption.getAttribute('data-qty');
//         const size = selectedOption.getAttribute('data-size');
//
//         $('#description').val(description);
//         $('#unit_price').val(unitPrice);
//         $('#qty_on_hand').val(qty);
//         $('#orSize').val(size);
//     }
// });
//
// function loadAllCustomerId() {
//     $('#customer_id').empty();
//     $('#customer_id').append("<option selected>Select Customer Id</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/customer",
//         method: "GET",
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function(resp) {
//             for (const customer of resp) {
//                 let option = `<option data-customer_name="${customer.customer_name}">${customer.customer_code}</option>`;
//                 $("#customer_id").append(option);
//             }
//         },
//         error: function(xhr, exception) {
//             console.log("Error loading customer names:", exception);
//         }
//     });
// }
//
// $('#customer_id').change((e) => {
//     const customer_id = e.target.value;
//     if ('Select Customer Id' !== customer_id) {
//         const selectedOption = e.target.options[e.target.selectedIndex];
//         const name = selectedOption.getAttribute('data-customer_name');
//         $('#customer_name').val(name);
//     }
// });
//
// function loadAllEmployeeName() {
//     $('#employee_name').empty();
//     $('#employee_name').append("<option selected>Select employee name</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/employee",
//         method: "GET",
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function(resp) {
//             for (const employee of resp) {
//                 let option = `<option data-employeeID="${employee.employeeId}">${employee.employeeName}</option>`;
//                 $("#employee_name").append(option);
//             }
//         },
//         error: function(xhr, exception) {
//             console.log("Error loading employee names:", exception);
//         }
//     });
// }
//
// $('#employee_name').change((e) => {
//     const employee_name = e.target.value;
//     if ('Select employee name' !== employee_name) {
//         const selectedOption = e.target.options[e.target.selectedIndex];
//         const id = selectedOption.getAttribute('data-employeeID');
//         $('#employee_code').val(id);
//     }
// });
//
// function updateTotal() {
//     const unitPrice = parseFloat($("#unit_price").val()) || 0;
//     const quantity = parseInt($("#order_qty").val()) || 0;
//     const total = unitPrice * quantity;
//     $("#final_total").val(total.toFixed(2));
//     return total;
// }
//
// let itemsArray = [
//     { item_id: '1', description: 'Item 1', qty: 10, item_price: 5.00 }
// ];
//
// function addToCart() {
//     let item_id = $('#order_item_id option:selected').text();
//     let itemExists = false;
//
//     $('#order_table_body .item_id').each(function() {
//         if ($(this).text() === item_id) {
//             itemExists = true;
//             let existingQty = parseInt($(this).closest('tr').find('.qty').text());
//             let qty = parseInt($('#order_qty').val());
//             let newQty = existingQty + qty;
//
//             let existingTotal = parseFloat($(this).closest('tr').find('.total').text());
//             let add_total = updateTotal();
//             let newTotal = existingTotal + add_total;
//
//             let selectedItem = itemsArray.find(item => item.item_id === item_id);
//
//             if (selectedItem) {
//                 if (selectedItem.qty < qty) {
//                     toastr.error('Error: Not enough items in stock.');
//                     return;
//                 } else {
//                     selectedItem.qty -= qty;
//                     $(this).closest('tr').find('.qty').text(newQty);
//                     $(this).closest('tr').find('.total').text(newTotal.toFixed(2));
//                 }
//             }
//
//             updateFinalTotal();
//             return false;
//         }
//     });
//
//     if (!itemExists) {
//         let desc = $('#description').val();
//         let total = updateTotal();
//         let qty = parseInt($('#order_qty').val());
//         let size = $('#orSize').val();
//
//         let selectedItem = itemsArray.find(item => item.item_id === item_id);
//
//         if (selectedItem) {
//             if (selectedItem.qty < qty) {
//                 toastr.error('Error: Not enough items in stock.');
//                 return;
//             } else {
//                 selectedItem.qty -= qty;
//             }
//         }
//
//         let record = `<tr><td class="item_id">${item_id}</td><td class="desc">${desc}</td><td class="qty">${qty}</td><td class="total">${total.toFixed(2)}</td><td class="oSize">${size}</td></tr>`;
//         $("#order_table_body").append(record);
//
//         toastr.success("Added to cart...🛒");
//     }
//
//     callMethod();
//     updateFinalTotal();
// }
//
// function updateFinalTotal() {
//     let total = 0;
//     $('#order_table_body tr').each(function() {
//         let rowTotal = parseFloat($(this).find('.total').text()) || 0;
//         total += rowTotal;
//     });
//     $("#final_total").val(total.toFixed(2));
// }
//
// function resetOrderForm() {
//     $("#order_item_id").val("Select item code");
//     $("#description").val("");
//     $("#orSize").val("");
//     $("#unit_price").val("");
//     $("#qty_on_hand").val("");
//     $("#order_qty").val("");
// }
//
// function callMethod() {
//     $("#order_table_body > tr").click(function() {
//         let item_id = $(this).find('.item_id').text();
//         let desc = $(this).find('.desc').text();
//         let qty = $(this).find('.qty').text();
//         let total = $(this).find('.total').text();
//         let size = $(this).find('.oSize').text();
//
//         $("#order_item_id").val(item_id);
//         $("#description").val(desc);
//         $("#order_qty").val(qty);
//         $("#unit_price").val((parseFloat(total) / parseInt(qty)).toFixed(2));
//         $("#orSize").val(size);
//     });
// }
//
// function removeSelectedItem() {
//     let selectedItemId = $('#order_item_id').val();
//
//     $('#order_item_id').val('');
//     $('#description').val('');
//     $('#unit_price').val('');
//     $('#qty_on_hand').val('');
//     $('#order_qty').val('');
//     $('#final_total').val('');
//
//     $("#order_table_body tr").each(function() {
//         if ($(this).find('.item_id').text() === selectedItemId) {
//             $(this).remove();
//             return false;
//         }
//     });
//
//     updateFinalTotal();
// }
//
// function placeOrder() {
//     let formData = new FormData();
//     formData.append("order_id", $("#order_id").val());
//     formData.append("customer_id", $("#customer_id").val());
//     formData.append("customer_name", $("#customer_name").val());
//     formData.append("order_item_id", $("#order_item_id").val());
//     formData.append("description", $("#description").val());
//     formData.append("total", $("#final_total").val());
//
//     $.ajax({
//         method: "POST",
//         url: "http://localhost:8080/POS_system_spring_war_exploded/api/v1/order",
//         processData: false,
//         contentType: false,
//         data: formData,
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function(data) {
//             resetOrderForm();
//             $("#order_table_body").empty();
//             $("#final_total").val('0.00');
//             alert("Order saved successfully.");
//         },
//         error: function(xhr, status, error) {
//             alert("Error: " + error);
//         }
//     });
// }

// ---------------------------------------------------
// const loadAllInventoryCode = () => {
//     $('#order_item_id').empty();
//     $('#order_item_id').append("<option selected>Select item code</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/inventory",
//         method: "GET",
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function(resp) {
//             for (const inventory of resp) {
//                 let option = `<option data-description="${inventory.item_desc}" data-unitPrice="${inventory.unit_price_sale}" data-qty="${inventory.item_qty}" data-size="${inventory.size}">${inventory.item_code}</option>`;
//                 $("#order_item_id").append(option);
//             }
//         },
//         error: function(xhr, exception) {
//             console.log("Error loading item codes:", exception);
//         }
//     });
// }
//
// $('#order_item_id').change((e) => {
//     const item_id_sale = e.target.value;
//     if ('Select item code' !== item_id_sale) {
//         const selectedOption = e.target.options[e.target.selectedIndex];
//         const description = selectedOption.getAttribute('data-description');
//         const unitPrice = selectedOption.getAttribute('data-unitPrice');
//         const qty = selectedOption.getAttribute('data-qty');
//         const size = selectedOption.getAttribute('data-size');
//
//         $('#description').val(description);
//         $('#unit_price').val(unitPrice);
//         $('#qty_on_hand').val(qty);
//         $('#orSize').val(size);
//     }
// });
//
// const loadAllCustomerId = () => {
//     $('#customer_id').empty();
//     $('#customer_id').append("<option selected>Select Customer Id</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/customer",
//         method: "GET",
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function(resp) {
//             for (const customer of resp) {
//                 let option = `<option data-customer_name="${customer.customer_name}">${customer.customer_code}</option>`;
//                 $("#customer_id").append(option);
//             }
//         },
//         error: function(xhr, exception) {
//             console.log("Error loading customer names:", exception);
//         }
//     });
// }
//
// $('#customer_id').change((e) => {
//     const customer_id = e.target.value;
//     if ('Select Customer Id' !== customer_id) {
//         const selectedOption = e.target.options[e.target.selectedIndex];
//         const name = selectedOption.getAttribute('data-customer_name');
//         $('#customer_name').val(name);
//     }
// });
//
// const loadAllEmployeeName = () => {
//     $('#employee_name').empty();
//     $('#employee_name').append("<option selected>Select employee name</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/employee",
//         method: "GET",
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function(resp) {
//             for (const employee of resp) {
//                 let option = `<option data-employeeID="${employee.employeeId}">${employee.employeeName}</option>`;
//                 $("#employee_name").append(option);
//             }
//         },
//         error: function(xhr, exception) {
//             console.log("Error loading employee names:", exception);
//         }
//     });
// }
//
// $('#employee_name').change((e) => {
//     const employee_name = e.target.value;
//     if ('Select employee name' !== employee_name) {
//         const selectedOption = e.target.options[e.target.selectedIndex];
//         const id = selectedOption.getAttribute('data-employeeID');
//         $('#employee_code').val(id);
//     }
// });
//
// loadAllInventoryCode();
// loadAllCustomerId();
// loadAllEmployeeName();
//
//
// $("#add_cart").click(function () {
//     updateTotal();
// });
// $("#unit_price, #qty_on_hand").on("input", updateTotal);
//
//
// let itemsArray = [
//     { item_id: '1', description: 'Item 1', qty: 10, item_price: 5.00 },
// ];
//
// function loadItemData() {
//
// }
//
// function updateTotal() {
//     const unitPrice = parseFloat($("#unit_price").val()) || 0;
//     const quantity = parseInt($("#order_qty").val()) || 0;
//     const total = (unitPrice * quantity);
//     $("#final_total").val(total.toFixed(2));
//     return total;
// }
//
// function addToCart() {
//     let item_id = $('#order_item_id option:selected').text();
//     let itemExists = false;
//
//     $('#order_table_body .item_id').each(function() {
//         if ($(this).text() === item_id) {
//             itemExists = true;
//             let existingQty = parseInt($(this).closest('tr').find('.qty').text());
//             let qty = parseInt($('#order_qty').val());
//             let newQty = existingQty + qty;
//
//             let existingTotal = parseFloat($(this).closest('tr').find('.total').text());
//             let add_total = updateTotal();
//             let newTotal = existingTotal + add_total;
//
//             let selectedItem = itemsArray.find(item => item.item_id === item_id);
//
//             if (selectedItem) {
//                 if (selectedItem.qty < qty) {
//                     toastr.error('Error: Not enough items in stock.');
//                     return;
//                 } else {
//                     selectedItem.qty -= qty;
//                     $(this).closest('tr').find('.qty').text(newQty);
//                     $(this).closest('tr').find('.total').text(newTotal.toFixed(2));
//                 }
//             }
//
//             updateFinalTotal();
//             return false;
//         }
//     });
//
//     if (!itemExists) {
//         let desc = $('#description').val();
//         let total = updateTotal();
//         let qty = parseInt($('#order_qty').val());
//         let size = $('#orSize').val();
//
//         let selectedItem = itemsArray.find(item => item.item_id === item_id);
//
//         if (selectedItem) {
//             if (selectedItem.qty < qty) {
//                 toastr.error('Error: Not enough items in stock.');
//                 return;
//             } else {
//                 selectedItem.qty -= qty;
//             }
//         }
//
//         let record = `<tr><td class="item_id">${item_id}</td><td class="desc">${desc}</td><td class="qty">${qty}</td><td class="total">${total.toFixed(2)}</td><td class="oSize">${size}</td></tr>`;
//         $("#order_table_body").append(record);
//
//         toastr.success("Added to cart...🛒");
//     }
//
//     callMethod();
//     updateFinalTotal();
//     resetOrderForm();
// }
// $('#add_cart').on('click', addToCart);
//
// function updateFinalTotal() {
//     let total = 0;
//     $('#order_table_body tr').each(function() {
//         let rowTotal = parseFloat($(this).find('.total').text()) || 0;
//         total += rowTotal;
//     });
//     $("#final_total").val(total.toFixed(2));
// }
//
// function resetOrderForm() {
//     $("#order_item_id").val("Select item code");
//     $("#description").val("");
//     $("#orSize").val("");
//     $("#unit_price").val("");
//     $("#qty_on_hand").val("");
//     $("#order_qty").val("");
// }
//
// function callMethod() {
//     $("#order_table_body > tr").click(function () {
//         let item_id = $(this).find('.item_id').text();
//         let desc = $(this).find('.desc').text();
//         let qty = $(this).find('.qty').text();
//         let total = $(this).find('.total').text();
//
//         $("#order_item_id").val(item_id);
//         $("#description").val(desc);
//         $("#order_qty").val(qty);
//         $("#unit_price").val(total/qty);
//
//     });
// }
// $("#remove").click(function () {
//     let selectedItemId = $('#order_item_id').val();
//
//     $('#order_item_id').val('');
//     $('#description').val('');
//     $('#unit_price').val('');
//     $('#qty_on_hand').val('');
//     $('#order_qty').val('');
//     $('#final_total').val('');
//
//     $("#order_table_body tr").each(function () {
//         if ($(this).find('.item_id').text() === selectedItemId) {
//             $(this).remove();
//             return false;
//         }
//     });
// });
//
// // $("#place_ord").click(function () {
// //
// //     let formData = new FormData();
// //     formData.append("order_id", $("#order_id").val());
// //     formData.append("customer_id", $("#customer_id").val());
// //     formData.append("customer_name", $("#customer_name").val());
// //     formData.append("order_item_id", $("#order_item_id").val());
// //     formData.append("description", $("#description").val());
// //     formData.append("total", $("#final_total").val());
// //
// //     $.ajax({
// //         method: "POST",
// //         url: "http://localhost:8080/POS_system_spring_war_exploded/api/v1/order",
// //         async: true,
// //         processData: false,
// //         contentType: false,
// //         data: formData,
// //         success: function (data) {
// //             reset();
// //             alert("Order saved successfully.");
// //         },
// //         error: function (xhr, status, error) {
// //             alert("Error: " + error);
// //         }
// //     });
// // });
//
// function placeOrder() {
//     let saleInventoryDetails = [];
//
//     $("#order_table_body tr").each(function () {
//         let item_id = $(this).find('.item_id').text();
//         let description = $(this).find('.desc').text();
//         let qty = parseInt($(this).find('.qty').text());
//         let unit_price = parseFloat($(this).find(10).text());
//         let total = parseFloat($(this).find('.total').text());
//         let size = $(this).find('.oSize').text();
//
//         saleInventoryDetails.push({
//             item_code: item_id,
//             item_desc: description,
//             item_qty: qty,
//             unit_price:unit_price,
//             total_price: total,
//             size: size
//         });
//     });
//
//     let orderData = {
//         order_no: $("#order_id").val(),
//         employeeId: $("#employee_code").val(),
//         customer_code: $("#customer_id").val(),
//         purchase_date: new Date(), // Assuming current date
//         payment_method: $("input[name='payment_method']:checked").val(), // Assuming radio buttons for payment method
//         added_points: parseFloat($("#added_points").val()) || 0,
//         netTotal: parseFloat($("#final_total").val()),
//         cashier: {employeeId: $("#employee_code").val()}, // Assuming cashier details
//         customer: {customer_code: $("#customer_id").val()}, // Assuming customer details
//         saleInventoryDetails: saleInventoryDetails
//     };
//
//     $.ajax({
//         method: "POST",
//         url: "http://localhost:8081/shop/api/v1/sale",
//         contentType: "application/json",
//         data: JSON.stringify(orderData),
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("accessToken")
//         },
//         success: function (data) {
//             resetOrderForm();
//             $("#order_table_body").empty();
//             $("#final_total").val('0.00');
//             alert("Order saved successfully.");
//         },
//         error: function (xhr, status, error) {
//             alert("Error: " + error);
//         }
//     });
// }
// $('#place_ord').on('click', placeOrder);
//
// const loadAllOrders = () => {
//     $("#place-tbl-body").empty();
//     $.ajax({
//         url: "http://localhost:8080/POS_system_spring_war_exploded/api/v1/order",
//         method: "GET",
//         dataType: "json",
//         success: function (resp) {
//             console.log(resp);
//             for (const order of resp) {
//                 let row = `<tr><td>${order.order_id}</td><td>${order.customer_id}</td><td>${order.customer_name}</td><td>${order.order_item_id}</td><td>${order.description}</td><td>${order.total}</td></tr>;`
//                 $("#place-tbl-body").append(row);
//             }
//             callMethod()
//         }
//     });
// }
// $("#detail_nav").click(function () {
//     loadAllOrders();
// });
// -----------------------------------------

//**************************************************************
// $(document).ready(function() {
//     loadAllInventoryCode();
//     loadAllCustomerId();
//     loadAllEmployeeName();
//
//     $("#unit_price, #qty_on_hand, #order_qty").on("input", updateTotal);
//
//     $("#add_cart").click(addToCart);
//     $("#remove").click(removeSelectedItem);
//     $("#place_ord").click(placeOrder);
// });
//
// const loadAllInventoryCode = () => {
//     $('#order_item_id').empty().append("<option selected>Select item code</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/inventory",
//         method: "GET",
//         headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") },
//         success: function(resp) {
//             resp.forEach(inventory => {
//                 let option = `<option data-description="${inventory.item_desc}" data-unitPrice="${inventory.unit_price_sale}" data-qty="${inventory.item_qty}" data-size="${inventory.size}">${inventory.item_code}</option>`;
//                 $("#order_item_id").append(option);
//             });
//         },
//         error: function(xhr, exception) {
//             console.log("Error loading item codes:", exception);
//         }
//     });
// }
//
// $('#order_item_id').change(function(e) {
//     const selectedOption = e.target.options[e.target.selectedIndex];
//     if (selectedOption.value !== 'Select item code') {
//         $('#description').val(selectedOption.getAttribute('data-description'));
//         $('#unit_price').val(selectedOption.getAttribute('data-unitPrice'));
//         $('#qty_on_hand').val(selectedOption.getAttribute('data-qty'));
//         $('#orSize').val(selectedOption.getAttribute('data-size'));
//     }
// });
//
// const loadAllCustomerId = () => {
//     $('#customer_id').empty().append("<option selected>Select Customer Id</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/customer",
//         method: "GET",
//         headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") },
//         success: function(resp) {
//             resp.forEach(customer => {
//                 let option = `<option data-customer_name="${customer.customer_name}">${customer.customer_code}</option>`;
//                 $("#customer_id").append(option);
//             });
//         },
//         error: function(xhr, exception) {
//             console.log("Error loading customer names:", exception);
//         }
//     });
// }
//
// $('#customer_id').change(function(e) {
//     const selectedOption = e.target.options[e.target.selectedIndex];
//     if (selectedOption.value !== 'Select Customer Id') {
//         $('#customer_name').val(selectedOption.getAttribute('data-customer_name'));
//     }
// });
//
// const loadAllEmployeeName = () => {
//     $('#employee_name').empty().append("<option selected>Select employee name</option>");
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/employee",
//         method: "GET",
//         headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") },
//         success: function(resp) {
//             resp.forEach(employee => {
//                 let option = `<option data-employeeID="${employee.employeeId}">${employee.employeeName}</option>`;
//                 $("#employee_name").append(option);
//             });
//         },
//         error: function(xhr, exception) {
//             console.log("Error loading employee names:", exception);
//         }
//     });
// }
//
// $('#employee_name').change(function(e) {
//     const selectedOption = e.target.options[e.target.selectedIndex];
//     if (selectedOption.value !== 'Select employee name') {
//         $('#employee_code').val(selectedOption.getAttribute('data-employeeID'));
//     }
// });
//
// function updateTotal() {
//     const unitPrice = parseFloat($("#unit_price").val()) || 0;
//     const quantity = parseInt($("#order_qty").val()) || 0;
//     const total = unitPrice * quantity;
//     $("#final_total").val(total.toFixed(2));
//     return total;
// }
//
// function addToCart() {
//     let item_id = $('#order_item_id option:selected').text();
//     let itemExists = false;
//
//     $('#order_table_body .item_id').each(function() {
//         if ($(this).text() === item_id) {
//             itemExists = true;
//             let existingQty = parseInt($(this).closest('tr').find('.qty').text());
//             let qty = parseInt($('#order_qty').val());
//             let newQty = existingQty + qty;
//
//             let existingTotal = parseFloat($(this).closest('tr').find('.total').text());
//             let add_total = updateTotal();
//             let newTotal = existingTotal + add_total;
//
//             $(this).closest('tr').find('.qty').text(newQty);
//             $(this).closest('tr').find('.total').text(newTotal.toFixed(2));
//
//             updateFinalTotal();
//             return false;
//         }
//     });
//
//     if (!itemExists) {
//         let desc = $('#description').val();
//         let qty = $('#order_qty').val();
//         let total = updateTotal();
//         let oSize = $('#orSize').val();
//
//         let row = `<tr>
//             <td class="item_id">${item_id}</td>
//             <td class="desc">${desc}</td>
//             <td class="qty">${qty}</td>
//             <td class="total">${total.toFixed(2)}</td>
//             <td class="oSize">${oSize}</td>
//         </tr>`;
//
//         $('#order_table_body').append(row);
//         updateFinalTotal();
//     }
//
//     resetOrderDetails();
// }
//
// function removeSelectedItem() {
//     $('#order_table_body tr').last().remove();
//     updateFinalTotal();
// }
//
// function updateFinalTotal() {
//     let finalTotal = 0;
//     $('#order_table_body .total').each(function() {
//         finalTotal += parseFloat($(this).text());
//     });
//     $('#final_total').val(finalTotal.toFixed(2));
// }
//
// function resetOrderDetails() {
//     $('#order_item_id').val('Select item code');
//     $('#description').val('');
//     $('#unit_price').val('');
//     $('#qty_on_hand').val('');
//     $('#order_qty').val('');
//     $('#orSize').val('');
// }
//
// function placeOrder() {
//     let orderData = {
//         purchase_date: $("#purchDate").val(),
//         payment_method: $("#payment").val(),
//         added_points: $("#point").val(),
//         netTotal: parseFloat($("#final_total").val()),
//         cashier: { employeeId: $("#employee_code").val() },
//         customer: { customer_code: $("#customer_id").val() },
//         saleInventoryDetails: []
//     };
//
//     $('#order_table_body tr').each(function() {
//         let item = {
//             item_desc: $(this).find('.desc').text(),
//             size: parseInt($(this).find('.oSize').text()),
//             unit_price: parseFloat($(this).find('.total').text()) / parseInt($(this).find('.qty').text()),
//             item_qty: parseInt($(this).find('.qty').text()),
//             total_price: parseFloat($(this).find('.total').text()),
//             inventory: { item_code: $(this).find('.item_id').text() }
//         };
//         orderData.saleInventoryDetails.push(item);
//     });
//
//     $.ajax({
//         url: "http://localhost:8081/shop/api/v1/sale",
//         method: "POST",
//         processData: false,
//         contentType: false,
//         data: JSON.stringify(orderData),
//         headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") },
//         success: function(resp) {
//             alert("Order placed successfully!");
//             resetForm();
//         },
//         error: function(xhr, exception) {
//             console.log("Error placing order:", exception);
//         }
//     });
// }
//
// function resetForm() {
//     $("#order_form")[0].reset();
//     $('#order_table_body').empty();
//     $('#final_total').val('');
//     loadAllInventoryCode();
//     loadAllCustomerId();
//     loadAllEmployeeName();
// }
//******************************************************************

$(document).ready(function() {
    loadAllInventoryCode();
    loadAllCustomerId();
    loadAllEmployeeName();

    $("#unit_price, #qty_on_hand, #order_qty").on("input", updateTotal);

    $("#add_cart").click(addToCart);
    $("#remove").click(removeSelectedItem);
    $("#place_ord").click(placeOrder);
});

const loadAllInventoryCode = () => {
    $('#order_item_id').empty().append("<option selected>Select item code</option>");

    $.ajax({
        url: "http://localhost:8081/shop/api/v1/inventory",
        method: "GET",
        headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") },
        success: function(resp) {
            resp.forEach(inventory => {
                let option = `<option data-description="${inventory.item_desc}" data-unitPrice="${inventory.unit_price_sale}" data-qty="${inventory.item_qty}" data-size="${inventory.size}">${inventory.item_code}</option>`;
                $("#order_item_id").append(option);
            });
        },
        error: function(xhr, exception) {
            console.log("Error loading item codes:", exception);
        }
    });
}

$('#order_item_id').change(function(e) {
    const selectedOption = e.target.options[e.target.selectedIndex];
    if (selectedOption.value !== 'Select item code') {
        $('#description').val(selectedOption.getAttribute('data-description'));
        $('#unit_price').val(selectedOption.getAttribute('data-unitPrice'));
        $('#qty_on_hand').val(selectedOption.getAttribute('data-qty'));
        $('#orSize').val(selectedOption.getAttribute('data-size'));
    }
});

const loadAllCustomerId = () => {
    $('#customer_id').empty().append("<option selected>Select Customer Id</option>");

    $.ajax({
        url: "http://localhost:8081/shop/api/v1/customer",
        method: "GET",
        headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") },
        success: function(resp) {
            resp.forEach(customer => {
                let option = `<option data-customer_name="${customer.customer_name}">${customer.customer_code}</option>`;
                $("#customer_id").append(option);
            });
        },
        error: function(xhr, exception) {
            console.log("Error loading customer names:", exception);
        }
    });
}

$('#customer_id').change(function(e) {
    const selectedOption = e.target.options[e.target.selectedIndex];
    if (selectedOption.value !== 'Select Customer Id') {
        $('#customer_name').val(selectedOption.getAttribute('data-customer_name'));
    }
});

const loadAllEmployeeName = () => {
    $('#employee_name').empty().append("<option selected>Select employee name</option>");

    $.ajax({
        url: "http://localhost:8081/shop/api/v1/employee",
        method: "GET",
        headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") },
        success: function(resp) {
            resp.forEach(employee => {
                let option = `<option data-employeeID="${employee.employeeId}">${employee.employeeName}</option>`;
                $("#employee_name").append(option);
            });
        },
        error: function(xhr, exception) {
            console.log("Error loading employee names:", exception);
        }
    });
}

$('#employee_name').change(function(e) {
    const selectedOption = e.target.options[e.target.selectedIndex];
    if (selectedOption.value !== 'Select employee name') {
        $('#employee_code').val(selectedOption.getAttribute('data-employeeID'));
    }
});

function updateTotal() {
    const unitPrice = parseFloat($("#unit_price").val()) || 0;
    const quantity = parseInt($("#order_qty").val()) || 0;
    const total = unitPrice * quantity;
    $("#final_total").val(total.toFixed(2));
    return total;
}

function addToCart() {
    let item_id = $('#order_item_id option:selected').text();
    let itemExists = false;

    $('#order_table_body .item_id').each(function() {
        if ($(this).text() === item_id) {
            itemExists = true;
            let existingQty = parseInt($(this).closest('tr').find('.qty').text());
            let qty = parseInt($('#order_qty').val());
            let newQty = existingQty + qty;

            let existingTotal = parseFloat($(this).closest('tr').find('.total').text());
            let add_total = updateTotal();
            let newTotal = existingTotal + add_total;

            $(this).closest('tr').find('.qty').text(newQty);
            $(this).closest('tr').find('.total').text(newTotal.toFixed(2));

            updateFinalTotal();
            return false;
        }
    });

    if (!itemExists) {
        let itemId = $('#order_item_id').val();
        let desc = $('#description').val();
        let qty = $('#order_qty').val();
        let unitP = $('#unit_price').val();
        let total = updateTotal();
        let oSize = $('#orSize').val();

        let row = `<tr>
            <td class="item_id">${itemId}</td>
            <td class="desc">${desc}</td>
            <td class="qty">${qty}</td>
            <td class="unit_price">${unitP}</td>
            <td class="total">${total.toFixed(2)}</td>
            <td class="oSize">${oSize}</td>
        </tr>`;

        $('#order_table_body').append(row);
        updateFinalTotal();
    }

    resetOrderDetails();
}

function removeSelectedItem() {
    $('#order_table_body tr').last().remove();
    updateFinalTotal();
}

function updateFinalTotal() {
    let finalTotal = 0;
    $('.total').each(function() {
        finalTotal += parseFloat($(this).text());
    });
    $('#final_total').val(finalTotal.toFixed(2));
}

function resetOrderDetails() {
    $('#order_item_id').val('Select item code');
    $('#description').val('');
    $('#unit_price').val('');
    $('#qty_on_hand').val('');
    $('#order_qty').val('');
    $('#orSize').val('');
}
// document.getElementById("place_ord").onclick = function() {
//     placeOrder();
// };
$("#place_ord").click(placeOrder);

function placeOrder() {
    let orderData = {
        employeeId: $("#employee_code").val(),
        customer_code: $("#customer_id").val(),
        purchase_date: new Date($("#purchDate").val()).toISOString(),
        payment_method: $("#payment").val(),
        added_points: parseInt($("#point").val()) || 0,
        netTotal:parseFloat($("#final_total").val()),
        saleInventoryDetails: []
    };

    $('#order_table_body tr').each(function() {
        let item = {
            item_code: $(this).find('.item_id').text(),
            item_desc: $(this).find('.desc').text(),
            size: parseInt($(this).find('.oSize').text()),
            unit_price: parseFloat($(this).find('.unit_price').text()),
            item_qty: parseInt($(this).find('.qty').text()),
            total_price: parseFloat($(this).find('.total').text())
        };
        orderData.saleInventoryDetails.push(item);
    });

    $.ajax({
        url: "http://localhost:8081/shop/api/v1/sale",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(orderData),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("accessToken")
        },
        success: function(resp) {
            alert("Order placed successfully!");
            resetForm();
        },
        error: function(xhr, exception) {
            if (xhr.status === 403) {
                alert("You do not have permission to place this order.");
            } else {
                console.log("Error placing order:", exception);
            }
        }
    });
}

function resetForm() {
    $('#order_id').val('');
    $('#customer_id').val('');
    $('#customer_name').val('');
    $('#order_item_id').val('');
    $('#description').val('');
    $('#orSize').val('');
    $('#unit_price').val('');
    $('#qty_on_hand').val('');
    $('#order_qty').val('');
    $('#purchDate').val('');
    $('#final_total').val('');
    $('#payment').val('Choose...');
    $('#point').val('');
    $('#employee_name').val('');
    $('#employee_code').val('');
    $('#order_table_body').empty(); // Clear the order table
}
