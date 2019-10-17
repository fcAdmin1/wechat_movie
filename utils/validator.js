

const strategies = {
  isNonEmpty(value, errorMsg) {
    if (value === '') {
      return errorMsg;
    }
  },
  minLength(value, length, errorMsg) {
    if (value.length > length) {
      return errorMsg;
    }
  },
  isMobile(value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  }
};

class Validator {
  constructor() {
    this.cache = [];
  }
  add(value, rules) {
    console.log(arguments)
    rules.forEach(item => {
      console.log(item)
      let ary = item.strategy.split(':');
      console.log(ary)
      this.cache.push(function() {
        const strategy = ary.shift();
        console.log(strategy)
        ary.unshift(value);
        ary.push(item.errorMsg);
        console.log(strategies[strategy])
        console.log(strategies[strategy])
        return strategies[strategy].apply(this, ary);
      });
    })
  }
  start() {
    for (var i = 0, validataFunc; validataFunc = this.cache[i++];) {
      var msg = validataFunc();
      if (msg) {
        return msg;
      }
    }
  }
}


export default Validator;