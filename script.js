

const textDiv = document.getElementById('text');
const emoji = document.getElementById('emoji');
const screen = document.querySelector('.screen');
const refreshButton = document.getElementById("refreshButton");

// Ekranın genişliği ve yüksekliğini al
const screenWidth = screen.offsetWidth;
const screenHeight = screen.offsetHeight;

// yazının genişliği ve yüksekliğini al
const textWidth = textDiv.offsetWidth;
const textHeight = textDiv.offsetHeight;

// Rastgele bir X ve Y konumu belirle
const randomX = Math.floor(Math.random() * (screenWidth - textWidth));
const randomY = Math.floor(Math.random() * (screenHeight - textHeight));

// 'Selam' yazısının yeni konumunu ayarla
textDiv.style.left = randomX + 'px';
textDiv.style.top = randomY + 'px';

function secret() {
    setTimeout(function () {
        textDiv.style.color = 'black'; // Yazı rengini eski haline getir
        textDiv.innerText = 'Buradayım';
 
        // Rastgele bir X ve Y konumu belirle
        const randomX = Math.floor(Math.random() * (screenWidth - textWidth));
        const randomY = Math.floor(Math.random() * (screenHeight - textHeight));

        // 'Selam' yazısının yeni konumunu ayarla
        textDiv.style.left = randomX + 'px';
        textDiv.style.top = randomY + 'px';
    }, 2500);
}

secret();

textDiv.addEventListener("mouseover", function () {
    textDiv.click();
    textDiv.style.color = 'wheat';
    emoji.style.display = 'block';
});

refreshButton.addEventListener("click", function () {
    location.reload(); // Sayfayı yenile
});

document.addEventListener("keydown", function (event) {
    // Ctrl tuşuna basıldığında ve eş zamanlı olarak A tuşuna basıldığında
    if (event.ctrlKey && event.key === "a") {
        // Sayfayı yenile
        location.reload();
    }
});

 