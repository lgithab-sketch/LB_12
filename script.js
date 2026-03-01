const tabsContainer = document.querySelector(".tabs__buttons");
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

// Делегування подій
tabsContainer.addEventListener("click", function (event) {

    const clickedTab = event.target.closest(".tab");

    if (!clickedTab) return;

    const targetId = clickedTab.dataset.tab;

    // Видалити active у всіх вкладок
    tabs.forEach(tab => tab.classList.remove("active"));

    // Приховати всі панелі
    contents.forEach(content => content.classList.remove("active"));

    // Додати active натиснутій вкладці
    clickedTab.classList.add("active");

    // Показати відповідний контент
    document.getElementById(targetId).classList.add("active");
});