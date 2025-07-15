export function anim(
  cls: string,
  options?: { once?: boolean; delay?: number; immediate?: boolean }
) {
  const base = ["animate", `animate--${cls}`];

  if (options?.immediate) base.push("immediate");
  else if (options?.once) base.push("once");
  else base.push("repeat");

  if (options?.delay != null) base.push(`delay-${options.delay}`);
  return base;
}
