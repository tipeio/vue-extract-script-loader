module.exports = loader

function loader (source) {
	if (this.cacheable) {
    this.cacheable();
  }
  const check = /<script[\s\S]*?>([\s\S]*?)<\/script>/;
  if (check.test(source)) {
    return check.exec(source)[1];
  }
  return source;
}
