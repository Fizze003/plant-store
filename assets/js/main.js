document.querySelectorAll('.dropdown').forEach(dropdown => {

    dropdown.addEventListener('click', function (e) {
        e.stopPropagation();

        document.querySelectorAll('.dropdown').forEach(d => {
           
            if (d !== this) {
                d.classList.remove('open');
            }
        });

        
        this.classList.toggle('open');
    });
});


window.addEventListener('click', function() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
    });
});




window.addEventListener('scroll', function () {
    var mainHeader = document.querySelector('.main-header-area');
    var stickyHeader = document.querySelector('.header-sticky');

    if (window.scrollY > mainHeader.offsetHeight) {
        stickyHeader.classList.add('sticky');
    } else {
        stickyHeader.classList.remove('sticky');
    }
});




// Banner 
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".count");

    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.innerText;
        const endValue = +counter.getAttribute("data-target"); 
        const speed = 120; 

        if (target < endValue) {
          counter.innerText = Math.ceil(target + (endValue - target) / 10);
          setTimeout(updateCounter, speed);
        } else {
          counter.innerText = endValue;
        }
      };

      updateCounter();
    });
  });
