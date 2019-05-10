import R from 'ramda'

export const slug = R.pipe(
  R.toLower,
  R.replace(/\s+/g, "-"), // Replace spaces with -
  R.replace(/^-+/, ""), // Trim - from start of text
  R.replace(/-+$/, "") // Trim - from end of text
);

export const unslug = R.pipe(
  R.toLower,
  R.replace(/-/g, " ") // Replace spaces with -
);
