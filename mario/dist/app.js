"use strict";
class Mario {
    constructor() {
        this.avatar = document.getElementById("avatar");
        this.coin = document.getElementById("coin");
        this.score = document.getElementById("score");
        this.snd = new Audio("../smw_coin.wav");
        this.avatarTop = 100;
        this.avatarLeft = 100;
        this.configure();
    }
    isTouching(a, b) {
        const aRect = a.getBoundingClientRect();
        const bRect = b.getBoundingClientRect();
        return !(aRect.top + aRect.height < bRect.top ||
            aRect.top > bRect.top + bRect.height ||
            aRect.left + aRect.width < bRect.left ||
            aRect.left > bRect.left + bRect.width);
    }
    judgeHandler() {
        const touch = this.isTouching(this.avatar, this.coin);
        if (touch) {
            this.score.innerText = (+this.score.innerText + 1).toString();
            this.snd.play();
            const randomX = Math.floor((Math.random() * window.innerWidth) / 2);
            const randomY = Math.floor(Math.random() * window.innerHeight);
            this.coin.style.top = `${randomX}px`;
            this.coin.style.left = `${randomY}px`;
        }
    }
    moveAvatar(e) {
        if (e.key === "w") {
        }
        if (e.key === "a") {
            this.avatarLeft -= 15;
            this.avatar.style.left = `${this.avatarLeft}px`;
        }
        if (e.key === "s") {
            this.avatarTop += 15;
            this.avatar.style.top = `${this.avatarTop}px`;
        }
        if (e.key === "d") {
            this.avatarLeft += 15;
            this.avatar.style.left = `${this.avatarLeft}px`;
        }
        this.judgeHandler();
    }
    configure() {
        document.addEventListener("keydown", this.moveAvatar);
    }
}
const mario = new Mario();
//# sourceMappingURL=app.js.map