function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const write = async () => {
const phrases = ["Full-Stack Software Engineer", "Front-End Specialist"];
const element = document.getElementById("typewriter");

let sleepTime = 100;
let curPhraseIndex = 0;

while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      if (element != null)
        element.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      if (element != null)
        element.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    }
    else {
      curPhraseIndex++;
    }
  }
};
