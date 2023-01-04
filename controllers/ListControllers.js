const {List, Card,} = require ('../models')

const  GetDeck= async (req,res)=>{
    try{
       const lists = await List.findByPk(req.params.list_id,{
        include: [{model:Card, as:'deck'}]
    })
        res.send(lists)
    } catch(error){
        throw error
    }
}

const  CreateNewList = async (req,res)=>{
    try{
       let userId = req.params.user_id
       let body = req.body

       const list = await List.create(
        {userId, ...body}
       )
        res.send(list)
    } catch(error){
        throw error
    }
}

const DeleteList = async (req,res)=>{
    try{
       let listId = (req.params.list_id)
       await List.destroy({where:{id:listId}})
        res.send({message:`List id'd ${listId} has been deleted`})
    } catch(error){
        throw error
    }
}

const UpdateList = async (req,res)=>{
    try{
       let listId = parseInt(req.params.list_id)
       let updatedList = await List.update(req.body,{where:{id:listId},returning:true})
        res.send(updatedList)
    } catch(error){
        throw error
    }
}

module.exports ={
    GetDeck,
    CreateNewList,
    DeleteList,
    UpdateList
}