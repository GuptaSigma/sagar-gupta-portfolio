// Pura code DOMContentLoaded ke andar hai, taaki HTML pehle load ho jaye
document.addEventListener("DOMContentLoaded", function() {

    // ==========================================
    // 1. Theme Toggle Logic
    // ==========================================
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check karte hain ki button HTML me exist karta hai ya nahi
    if (themeBtn) {
        const icon = themeBtn.querySelector('i');
        
        themeBtn.addEventListener('click', () => {
            // Body se 'dark-theme' class toggle karo
            body.classList.toggle('dark-theme');
            
            // Icon change karo (Sun or Moon)
            if(body.classList.contains('dark-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    // ==========================================
    // 2. Dynamic Typing Effect
    // ==========================================
    const textArray = ["Intelligent Web Apps", "Machine Learning Models", "Smart User Interfaces"];
    let textIndex = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("dynamic-text");

    function type() {
        if (!typingElement) return; // Safety check

        if (charIndex < textArray[textIndex].length) {
            typingElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Typing speed
        } else {
            setTimeout(erase, 2000); // Erase hone se pehle ka wait time
        }
    }

    function erase() {
        if (!typingElement) return; // Safety check

        if (charIndex > 0) {
            typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Erasing speed
        } else {
            textIndex++;
            if (textIndex >= textArray.length) textIndex = 0;
            setTimeout(type, 500); // Naya word type hone se pehle ka wait time
        }
    }

    // Agar element HTML me hai, tabhi typing start karo
    if (typingElement) {
        setTimeout(type, 1000); // Page load hone ke 1 second baad start hoga
    }

    // ==========================================
    // 3. Set Current Year in Footer Automatically
    // ==========================================
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});