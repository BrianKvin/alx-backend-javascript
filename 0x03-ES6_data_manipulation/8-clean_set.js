// eslint disable-next-line consistent-return
export default function cleanSet(set, startString) {
  let t = '';
  if (!startString || !startString.length) return t;
  for (const elem of set) {
    if (elem && elem.startsWith(startString)) {
      t += `${elem.slice(startString.length)}-`;
    }
  }
  return t.slice(0, t.length - 1);
}
