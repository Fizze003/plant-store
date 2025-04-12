document.querySelectorAll('.dropdown').forEach(dropdown => {
    // Dropdown-a klik edildikdə
    dropdown.addEventListener('click', function (e) {
        e.stopPropagation(); // Klikin yayılmasını dayandırır

        // Əvvəlcə bütün dropdown-ları bağla
        document.querySelectorAll('.dropdown').forEach(d => {
            // Əgər o dropdown artıq açıqdırsa, onu bağla
            if (d !== this) {
                d.classList.remove('open');
            }
        });

        // Bu dropdown-un açılmasını təmin et
        this.classList.toggle('open');
    });
});

// Sayfa daxilində başqa yerlərdə klik edildikdə dropdown-u bağla
window.addEventListener('click', function() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
    });
});



// Yalnız scroll hadisəsindən sonra sticky header göstərilsin
window.addEventListener('scroll', function () {
    var mainHeader = document.querySelector('.main-header-area');
    var stickyHeader = document.querySelector('.header-sticky');

    // Əgər səhifənin yeri əsas header-in altından keçibsə, sticky header göstərilsin
    if (window.scrollY > mainHeader.offsetHeight) {
        stickyHeader.classList.add('sticky');
    } else {
        stickyHeader.classList.remove('sticky');
    }
});
