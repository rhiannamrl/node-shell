process.stdout.write("promt > ");

process.stdin.on("data", data => {
  const cmd = data.toString().trim();

  process.stdout.write(process.cwd());
  process.stdout.write("\npromt > ");
});
