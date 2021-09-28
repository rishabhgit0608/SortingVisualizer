export function InsertionSortHelper(arr) {
  let animations = [];
  inserSort(arr, animations);
  console.log(animations);
  return animations;
}

async function inserSort(arr) {
  let bars = document.querySelectorAll(".array-bars");
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    bars[i].style.backgroundColor = "darkblue";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 5)
    );

    while (j >= 0 && curr < arr[j]) {
      arr[j + 1] = arr[j];
      bars[j + 1].style.height = `${arr[j]}px`;
      document.querySelectorAll(".array-bars")[j].style.backgroundColor =
        "darkblue";
      j--;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 5)
      );
      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = "pink";
      }
    }
    arr[j + 1] = curr;
    bars[j + 1].style.height = `${arr[j + 1]}px`;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 5)
    );
  }
}
