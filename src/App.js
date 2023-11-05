import Input from "./utils/Input.js";
import Output from "./utils/Output.js";
import Lottos from "./Lottos.js";

class App {  
  async play() {    
    const purchaseAmount = await Input.getPurchaseAmount();
    const ticketCount = purchaseAmount / 1000;
    Output.printTicketCount(ticketCount);
    const lottos = new Lottos(ticketCount);

    const winningNumbers = await Input.getWinningNumbers();
    const bonusNumber = await Input.getBonusNumber();    

    const results = lottos.calculateResults(winningNumbers, bonusNumber)
  }    
}

export default App;
