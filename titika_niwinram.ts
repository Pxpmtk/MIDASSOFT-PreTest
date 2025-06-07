function quickestPath({ portals }: { portals: { location: number, destination: number }[]}): number {
  const maxStep = 11;
  const target = 200;

  const portalMap = new Map<number, number>();
  for (const { location, destination } of portals) {
    portalMap.set(location, destination);
  }

  const queue: { pos: number, turns: number }[] = [{ pos: 1, turns: 0 }];
  const visited = new Set<number>();

  while (queue.length > 0) {
    const { pos, turns } = queue.shift()!;
    for (let step = 1; step <= maxStep; step++) {
      let next = pos + step;
      if (next > target) continue;
      if (portalMap.has(next)) {
        next = portalMap.get(next)!;
      }
      if (next === target) {
        return turns + 1;
      }
      if (!visited.has(next)) {
        visited.add(next);
        queue.push({ pos: next, turns: turns + 1 });
      }
    }
  }
  return -1;
}

const portals = [
  { location: 55, destination: 38 },
  { location: 14, destination: 35 },
  { location: 91, destination: 48 },
  { location: 30, destination: 8 },
  { location: 31, destination: 70 },
  { location: 63, destination: 83 },
  { location: 3, destination: 39 },
  { location: 47, destination: 86 },
  { location: 71, destination: 93 },
  { location: 79, destination: 42 },
  { location: 87, destination: 54 },
  { location: 90, destination: 119 },
  { location: 120, destination: 149 },
  { location: 150, destination: 179 },
  { location: 180, destination: 200 }
];

console.log(quickestPath({ portals }));
