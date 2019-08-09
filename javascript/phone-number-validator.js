function telephoneCheck(str) {

    let testRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return testRegex.test(str);
  }