document.addEventListener("DOMContentLoaded", function () {

    const dynamicContent = document.getElementById("dynamic-text");

    const phrases = ["Software Engineer...", "Mentor...", "Human Being...", "teacher at Devsnest"]
    let pharseIndex = 0;
    let letterIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 75

    function printLetters(phrase) {

        if (letterIndex == phrase.length) {
            // clear letter which have been typed
            clearLetters();
        }
        else if (letterIndex < phrase.length) {
            dynamicContent.textContent += phrase.charAt(letterIndex);
            letterIndex += 1;
            setTimeout(function () {
                printLetters(phrase)
            }, typingSpeed)
        }
    }

    function clearLetters() {
        if (letterIndex == -1) {
            pharseIndex = (pharseIndex + 1) % phrases.length;
            letterIndex = 0;
            printLetters(phrases[pharseIndex])
        }
        else if (letterIndex > -1) {
            let updatedPhrase = "";
            for (let index = 0; index < letterIndex; index++) {
                updatedPhrase += phrases[pharseIndex].charAt(index);

            }
            dynamicContent.textContent = updatedPhrase;
            letterIndex -= 1;
            setTimeout(clearLetters, erasingSpeed)
        }
    }

    printLetters(phrases[pharseIndex]);

    window.addEventListener("scroll", function () {
        console.log(this.window.scrollY)
        let intro = this.document.querySelector(".intro");
        if (this.window.scrollY >= (intro.offsetHeight + intro.offsetTop)) {
            this.document.querySelector(".header").style.position = "sticky";
        } else {
            this.document.querySelector(".header").style.position = "revert";

        }
    })
})

