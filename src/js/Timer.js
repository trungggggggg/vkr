class Timer {
  #clk;
  #TACTL;
  #ccBlocks;
  #counterTAR = 0;
  constructor(clk, TACTL, tacctlRegisters) {
    this.#clk = clk;
    this.#TACTL = TACTL;
    this.#tacctlRegisters = tacctlRegisters;
  }
  jump() {
    let mode = this.#TACTL.slice(4, 5).join("");
    switch (mode) {
      case "00":
        break;
      case "01":
        if (this.#TAR === 65535) {
          this.#TAR = 0;
          if ((this.#TACTL[1] = 1)) {
            this.#TACTL[0] = 1;
            setTimeout(() => {
              this.#TACTL[0] = 0;
            }, 100);
          }
        } else {
          this.#TAR++;
          for (let TACCTL of this.#tacctlRegisters) {
          }
        }
      case "10":

      case "11":

      default:
        break;
    }
  }
}
