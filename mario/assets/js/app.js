function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.getElementById("avatar");
const coin = document.getElementById("coin");
const score = document.getElementById("score");
const snd = new Audio("../smw_coin.wav");

let avatarTop = 100;
let avatarLeft = 100;

const moveAvatar = (e) => {
  if (e.key === "w") {
    avatarTop -= 15;
    avatar.style.top = `${avatarTop}px`;
  }
  if (e.key === "a") {
    avatarLeft -= 15;
    avatar.style.left = `${avatarLeft}px`;
  }
  if (e.key === "s") {
    avatarTop += 15;
    avatar.style.top = `${avatarTop}px`;
  }
  if (e.key === "d") {
    avatarLeft += 15;
    avatar.style.left = `${avatarLeft}px`;
  }

  const touch = isTouching(avatar, coin);

  if (touch) {
    score.innerText = +score.innerText + 1;

    snd.play();

    const randomX = Math.floor((Math.random() * window.innerWidth) / 2);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    coin.style.top = `${randomX}px`;
    coin.style.left = `${randomY}px`;
  }
};

document.addEventListener("keydown", moveAvatar);
