function printText(char) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(process.stdout.write(char));
    }, 25);
  });
}

async function doIt(text) {
  for (let index = 0; index < 200; index++) {
    for (let index = 0; index < text.length; index++) {
      await printText(text.charAt(index));
        
    }
    console.log(" ");
    console.log(" ");
  }
}

doIt("Hello World...");
