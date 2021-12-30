function desfaceDeCanales(xR, yR, xG, yG, xB, yB) {
     let R = drawingContext.getImageData(0, 0, width, height)
     let G = drawingContext.getImageData(0, 0, width, height)
     let B = drawingContext.getImageData(0, 0, width, height)
     for (let c = 0; c < width; c++) {
          for (let f = 0; f < height; f++) {
               let i = (c + f * R.width) * 4
               R.data[i + 1] = 0
               R.data[i + 2] = 0
               G.data[i + 0] = 0
               G.data[i + 2] = 0
               B.data[i + 0] = 0
               B.data[i + 1] = 0
          }
     }
     let dR = createGraphics(width, height)
     dR.drawingContext.putImageData(R, 0, 0)
     let dG = createGraphics(width, height)
     dG.drawingContext.putImageData(G, 0, 0)
     let dB = createGraphics(width, height)
     dB.drawingContext.putImageData(B, 0, 0)
     push()
     fill("black")
     rect(0, 0, width, height)
     drawingContext.globalCompositeOperation = "screen"
     image(dR, xR, yR)
     image(dG, xG, yG)
     image(dB, xB, yB)
     pop()
}
