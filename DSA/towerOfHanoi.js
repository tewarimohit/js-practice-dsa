const towerOfHanoi = (num, fromtPole, toPole, usingPole) => {
  if (num === 1) {
    console.log(`Move disk 1 from ${fromtPole} to ${toPole}`);
    return;
  }
  towerOfHanoi(num - 1, fromtPole, usingPole, toPole);
  console.log(`Move disk ${num} from ${fromtPole} to ${toPole}`);
  towerOfHanoi(num - 1, usingPole, toPole, fromtPole);
};

towerOfHanoi(2, "A", "C", "B");
// Big O=> O(2^n)
