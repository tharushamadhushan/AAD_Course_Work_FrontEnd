
$(document).ready(function() {
    function updateCustomerCount() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/customer/count",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalCustomersLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch customer count:", error);
            }
        });
    }

    updateCustomerCount();
});

$(document).ready(function() {
    function updateEmployeeCount() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/employee/count",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalEmployeesLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch employee count:", error);
            }
        });
    }

    updateEmployeeCount();
});

$(document).ready(function() {
    function updateSupplierCount() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/suppliers/count",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalSuppliersLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch employee count:", error);
            }
        });
    }

    updateSupplierCount();
});

$(document).ready(function() {
    function updateInventorysCount() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/inventory/count",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalInventorysLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch item count:", error);
            }
        });
    }

    updateInventorysCount();
});

$(document).ready(function() {
    function updateInventoryProfit() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/inventory/totalProfit",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalProfitLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch item count:", error);
            }
        });
    }

    updateInventoryProfit()
});

$(document).ready(function() {
    function updateInventorySales() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/inventory/total-sales",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#totalSalesLabel').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch item count:", error);
            }
        });
    }

    updateInventorySales();
});

$(document).ready(function() {
    function mostPopularItem() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/inventory/most-sold-item-name",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#mostPopularItem').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch item count:", error);
            }
        });
    }

    mostPopularItem();
});

$(document).ready(function() {
    function mostPopularItemQty() {
        $.ajax({
            url: "http://localhost:8081/shop/api/v1/inventory/most-sold-item-qty",
            method: "GET",
            dataType: "json",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $('#mostPopularItemQty').text(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to fetch item count:", error);
            }
        });
    }

    mostPopularItemQty();
});