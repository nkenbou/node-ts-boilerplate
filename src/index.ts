import fs from "fs";

const srcPath = process.argv[2];
fs.writeFileSync("output.txt", srcPath);
