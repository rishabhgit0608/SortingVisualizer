export async function SelectionSortHelper(arr) {
  let bars = document.querySelectorAll(".array-bars");
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    bars[i].style.backgroundColor = "darkblue";
    console.log("Color should change");
    for (let j = i + 1; j < arr.length; j++) {
      bars[j].style.backgroundColor = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 0.5)
      );
      if (arr[j] < arr[min]) {
        min = j;
      }

      bars[j].style.backgroundColor = "pink";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 0.5)
      );
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
    let temp1 = bars[min].style.height;
    bars[min].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
  }
}
