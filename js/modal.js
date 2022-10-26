// modal

(() => {
    $('body').on('click', '.photo-btn', (e) => {
        const modalForm = $('#modal_form');
        const submitBtn = $(e.target);
        const card = submitBtn.closest('.column');
        const name = card.attr('data-name');
        const price = card.attr('data-price');
        const set = card.attr('data-set');

        modalForm.find('.modal__name_description').text(name);
        modalForm.find('.modal__set_description').text(set);
        modalForm.find('.modal__cost_description').text(price);

        $('form#order_form .model_name').val(name);
        $('form#order_form .kit').val(set);
        $('form#order_form .price').val(price);

        modalForm.modal('show');
    });
})();

// tab

(() => {
    $('#listPhoto a').on('click', (e) => {
        e.preventDefault();

        const tab = $(e.target);
        const additionalTabs = $('.catalog-set [data-additional-tab]');
        const additionalTabActive = $(`.catalog-set [data-additional-tab="${tab.attr('href')}"]`);

        additionalTabs.removeClass('active');
        additionalTabActive.addClass('active');
        tab.tab('show');
    });
})();

$(document).ready(function () {
    $(document).on('submit', 'form#order_form', function (event){
        event.preventDefault();
        var form_data = $(this).serialize();
        $('#modal_form').modal('hide');
        $.ajax({
            type: "post",
            url: "./send.php",
            data: form_data,
            success: function(responseData, textStatus, jqXHR) {
                $('#modal_form').modal('hide');

            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    });
});