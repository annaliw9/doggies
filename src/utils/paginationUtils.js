export const getPaginationRange = (current, total) => {
  const delta = 2;

  const range = [];
  let left = Math.max(2, current - delta);
  let right = Math.min(total - 1, current + delta);

  range.push(1);

  if (left > 2) range.push("...");

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < total - 1) range.push("...");

  if (total > 1) range.push(total);

  return range;
};
