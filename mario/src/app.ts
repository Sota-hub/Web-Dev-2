class Mario {
  private avatar: HTMLImageElement;
  private coin: HTMLImageElement;
  private score: HTMLHeadElement;
  private readonly snd: HTMLAudioElement;
  private avatarTop: number;
  private avatarLeft: number;

  constructor() {
    this.avatar = document.getElementById("avatar")! as HTMLImageElement;
    this.coin = document.getElementById("coin")! as HTMLImageElement;
    this.score = document.getElementById("score")! as HTMLHeadElement;
    this.snd = new Audio("../smw_coin.wav");
    this.avatarTop = 100;
    this.avatarLeft = 100;

    this.configure();
  }

  private isTouching<T extends HTMLImageElement>(a: T, b: T) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    return !(
      aRect.top + aRect.height < bRect.top ||
      aRect.top > bRect.top + bRect.height ||
      aRect.left + aRect.width < bRect.left ||
      aRect.left > bRect.left + bRect.width
    );
  }

  private judgeHandler() {
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

  private moveAvatar(e: KeyboardEvent) {
    if (e.key === "w") {
      // this.avatarTop -= 15;
      // this.avatar.style.top = `${this.avatarTop}px`;
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

  private configure() {
    document.addEventListener("keydown", this.moveAvatar);
  }
}

const mario = new Mario();
