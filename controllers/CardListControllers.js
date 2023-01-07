const {List, Card, CardList} = require ('../models')

//?list_id=x&card_id=y
const AddCard = async (req, res)=>{
    try{
        let x = req.query.list_id
        let y = req.query.card_id
        
        const add = await CardList.create(
            {list_Id:x, listId:x, card_Id:y, cardId:y }
        )
        res.send(add)
    }catch(error){
    throw error
    }
}
//?CLId=x
const RemoveCard = async (req, res)=>{
    try{
        let CLId = req.query.CLId 
        await CardList.destroy({where:{id:CLId}})
        res.send({message:`Card removed from List`})
    }catch(error){
        throw error
    }
}

module.exports ={
    AddCard,
    RemoveCard
}