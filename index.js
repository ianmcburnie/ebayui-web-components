window.onload = function(e) {
    const switchEls = document.querySelectorAll('ebayui-switch');
    const switchClasses = document.querySelectorAll('.ebayui-switch');

    switchEls.forEach(function(e, i) {
        console.log(e, i);
    });

    switchClasses.forEach(function(e, i) {
        const widget = new EbayUISwitchClass(e);
    });
};
