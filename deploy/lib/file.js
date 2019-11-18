const fs = require('fs');

function fsExistsSync(path) {
  try {
    fs.accessSync(path, fs.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}

function fsReplace(resouce, target, reg, replacement) {
  try {
    const content = fs.readFileSync(resouce, 'utf8');
    const res = content.replace(reg, replacement);
    console.log(res);
    fs.writeFileSync(target, res, 'utf8');
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = {
  fsExistsSync,
  fsReplace
};
