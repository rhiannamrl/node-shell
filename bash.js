process.stdout.write("promt > ");

process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    process.stdout.write(pwd());
  } else if (cmd === "ls") {
    process.stdout.write(ls);
  }
  process.stdout.write("\nprompt > ");
});

const pwd = require("./pwd.js");
const ls = require("./ls.js");
