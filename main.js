const textElement = document.getElementById('anniversaryText');
const textContent = "Chúc bé yêu sinh nhật vvvv";
let index = 0;

  function playMusic() {
    const music = document.getElementById('background-music'); // Lấy thẻ audio
    music.play(); // Phát nhạc
  }

function typeText() {
  if (index < textContent.length) {
    textElement.textContent += textContent[index];
    index++;
    setTimeout(typeText, 100); // Tăng từng ký tự mỗi 100ms
  } else {
    // Khi hoàn thành gõ chữ, thêm hiệu ứng xuất hiện
    textElement.classList.add('show');
  }
}
// Gọi hàm khi trang tải
window.onload = () => {
  setTimeout(typeText, 500); // Đợi 500ms trước khi bắt đầu gõ
};