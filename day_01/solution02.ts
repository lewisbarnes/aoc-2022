const getElves = (input: string) => {
  return input.split('\n\n').map((elf) => elf.split('\n').map((cals) => parseInt(cals)));
};

const getSumOfTopX = (input: number[][], topX: number) => {
  return input
    .map((elf) => elf.reduce((a, b) => a + b, 0))
    .sort((a, b) => (a < b ? 1 : -1))
    .slice(0, topX)
    .reduce((a, b) => a + b, 0);
};

const input = new TextDecoder().decode(Deno.readFileSync('./input.txt'));

const elves = getElves(input);

console.log(getSumOfTopX(elves, 3));
