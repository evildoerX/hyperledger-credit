// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require("chalk");
const path = require("./lib/path");
const file = require("./lib/file");

const sshAddress = "5dd3";

require("shelljs/global");

const Log = {
  info(msg) {
    console.log(chalk.green(msg));
  },
  warn(msg) {
    console.log(chalk.yellow(msg));
  },
  error(msg) {
    console.log(chalk.red(msg));
  }
};

if(!sshAddress) {
  Log.error("没有指定ssh hostname,请更新 sshAddress 字段");
  return
}

exec("sh deploy/pb.sh")
const package = require("../package.json");

const versionDir = path.resolve(`deploy/cache/${package.version}`);

if (file.fsExistsSync(versionDir)) {
  Log.error("该版本已经存在,请先修改config版本号");
  return;
}

Log.info(`开始编译打包项目,版本号：${package.version}，打包中.....`);

const buildRes = exec("yarn build");

cp("-rf", "dist/", versionDir);

// // if (env === "preprod") {
  Log.info(`开始上传新的版本${package.version},请耐心等候上传成功.....`);
  exec(
    `scp -r ${versionDir} ${sshAddress}:/opt/ci123/www/html/webroot/${package.version}`
  );
// // }

rm("-rf", "dist");
