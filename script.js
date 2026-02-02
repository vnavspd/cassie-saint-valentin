(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "T'es sûre?",
    "Vraiment sûre??",
    "T'es certaine?",
    "S'il te plaît...",
    "Pense s'y bien!",
    "Si tu dis non, je serai vraiment triste...",
    "Je serai très triste...",
    "Je serai très très très triste...",
    "Ok c'est bon, j'arrête de demander...",
    "Je niaise, dis oui s'il te plaît! ❤️"
];

const gifs = [
    "https://media.giphy.com/media/abZ5exGrse0W4/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxybzhuZzRyeWU4eWR3MGZ5eWc1ZHl5YzlzZjF1bjY0OTN3M3RyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ffzhLUixCtlsc/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHY0ZDR0czcxaHhvYXAycm82ajBrejF0cWl0NmNwa3JmZzAwNjNjdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vkxxV45WtCmRTwFTDz/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW0yZjdpdnRxdmRmOXd1MXE5MGV6M24yc2loZWVhdmYyNG0xcTZ6MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YZOsKxJfmvzG0/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzg3cHo0aWYzeXlrYjRpbTd1YzVnbHlnM3ByeGo5NTZyMG5rb2h0YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rehVUJEdT36DdGTK5A/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGY2ZzRndjB1ZHhnd3N2dHMxMnpyZXg2c3Fwamtlc3Bzb2NtajU5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dJYoOVAWf2QkU/giphy.gif",
    "https://media.giphy.com/media/4zUmRD2x9vl06ltMXd/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG05NW1oMDRrcTVzNmtoOWJjenRsOTF0ZmQ2MDdwbG03MXFxejc3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AzEXdIb1wyCTWJntb/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGFxdzg4YXB4enFwbXl6ZzR5anRtMHVwMDY4OG04NW96dXB4MmxvYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/awjh48VUptCPbEvYob/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXMwZXpvZmU3anoxOXIzaWs1ZDE0dms4MjRmMnlyOGhpZnprbTU0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/USFBeBYAY076m5KcKR/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXl0MXN1NHgyd2lsZHMyaXZoamdjaHlqYmt1dzljc2J2N2JkNmExdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/E1sD9HYfQXZRrcMkF1/giphy.gif"
];

let messageIndex = 0;

function handleYesClick() {
    if (messageIndex === messages.length) {
        // After all messages shown, next click goes to success page
        window.location.href = "yes_page.html";
        return;
    }
    
    const promptText = document.querySelector('.prompt-text');
    const gifImage = document.querySelector('.gif_container img');
    
    promptText.textContent = messages[messageIndex];
    gifImage.src = gifs[messageIndex];
    messageIndex = messageIndex + 1;
}

function handleNoClick() {
    window.location.href = "no_page.html";
}