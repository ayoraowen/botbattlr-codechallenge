import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({botData}) {//
  //start here with your code for step one

  const [armyBot, setArmyBot] = useState([])

  function renderChosenBot(bot) {
    // const botChosen = botData.filter(eachBot => {
    //   console.log(eachBot)
    //   return eachBot.id === botId
    // })
    // setBot(botChosen)//return botChosen
    if (!armyBot.includes(bot)){
      setArmyBot([...armyBot, bot])
    }

  }

  

  
  console.log(botData)


  return (
    <div>
      <YourBotArmy botData={armyBot} onBotArmyAdd={renderChosenBot}/>
      <BotCollection botData={botData} onBotArmyAdd={renderChosenBot}/>
    </div>
  )
}

export default BotsPage;
