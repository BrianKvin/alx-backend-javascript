function calculateNumber(type, a, b) {
  if (typeof type === String || type === 'SUM' || type === 'SUBTRACT' || type === 'DIVIDE') {
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
        return Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
        if (Math.round(b) === 0) {
          return 'Error';
	}
        return Math.round(a) / Math.round(b);
    } else {
      return 'Error';
    }
  }
}

module.exports = calculateNumber;

