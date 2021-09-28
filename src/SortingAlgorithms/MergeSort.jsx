export function mergeSortHelper(arr) {
  const animations = [];
  mergeSort(arr, 0, arr.length - 1, animations);
  return animations;
}

function mergeSort(arr, lo, hi, animations) {
  if (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);

    mergeSort(arr, lo, mid, animations);
    mergeSort(arr, mid + 1, hi, animations);
    merge(arr, lo, mid, hi, animations);
  }
}

function merge(arr, lo, mid, hi, animations) {
  let a = [];
  let b = [];
  let n1 = mid - lo + 1;
  let n2 = hi - mid;
  for (let i = 0; i < n1; i++) {
    a.push(arr[lo + i]);
  }
  for (let i = 0; i < n2; i++) {
    b.push(arr[mid + 1 + i]);
  }
  let i = 0,
    j = 0,
    k = lo;

  while (i < n1 && j < n2) {
    animations.push([i, j + mid + 1]);
    animations.push([i, j + mid + 1]);
    if (a[i] <= b[j]) {
      animations.push([k, a[i]]);
      arr[k] = a[i];
      i++;
      k++;
    } else {
      animations.push([k, b[j]]);
      arr[k] = b[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, a[i]]);
    arr[k] = a[i];
    i++;
    k++;
  }
  while (j < n2) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, b[j]]);
    arr[k] = b[j];
    j++;
    k++;
  }
}
