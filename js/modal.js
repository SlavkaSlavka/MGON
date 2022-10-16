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