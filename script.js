  const bar = document.querySelector(".bar");
        const menubar = document.querySelector(".navbar-menu .menu-bar");

        bar.addEventListener("click", () =>
            menubar.classList.toggle("show"));