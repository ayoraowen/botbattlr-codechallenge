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

  function removeArmyBot(e) {
    const remainingBots = armyBot.filter((eachBot) => {
      return eachBot.id!==Number(e.currentTarget.id)
    })
    setArmyBot(remainingBots)
  }

  

  
  console.log(botData)


  return (
    <div>
      <YourBotArmy botData={armyBot} onBotArmyAdd={renderChosenBot} removeArmyBot={removeArmyBot}/>
      <BotCollection botData={botData} onBotArmyAdd={renderChosenBot}/>
    </div>
  )
}

export default BotsPage;
