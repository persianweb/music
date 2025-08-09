// 📌 "InstaGram & TeleGram: @amirdev_ir" ❤️ -->
addEventListener("contextmenu", function (e) { e.preventDefault() })
addEventListener("dragstart", function (e) { e.preventDefault() })
addEventListener("select", function (e) { e.preventDefault() })
addEventListener("keydown", function (e) { e.preventDefault() })
const scrollContainer = document.querySelector('.scrollbar-hide'); let isDown = !1; let startX; let scrollLeft; scrollContainer.addEventListener('mousedown', (e) => { isDown = !0; scrollContainer.classList.add('cursor-grabbing'); startX = e.pageX - scrollContainer.offsetLeft; scrollLeft = scrollContainer.scrollLeft }); scrollContainer.addEventListener('mouseleave', () => { isDown = !1; scrollContainer.classList.remove('cursor-grabbing') }); scrollContainer.addEventListener('mouseup', () => { isDown = !1; scrollContainer.classList.remove('cursor-grabbing') }); scrollContainer.addEventListener('mousemove', (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - scrollContainer.offsetLeft; const walk = (x - startX) * 1.5; scrollContainer.scrollLeft = scrollLeft - walk })
// 📌 "InstaGram & TeleGram: @amirdev_ir" ❤️ -->
