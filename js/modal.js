// modal

(() => {
    $('body').on('click', '.photo-btn', () => {
        const modalForm = $('#modal_form');
        const submitBtn = $(this);

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