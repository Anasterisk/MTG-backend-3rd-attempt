const {Card, List} = require('../models');
const lists = require('../models/list');

const getPage =(page,size)=>{
    const limit = size? + size: 10;
    const offset = page? + page *limit:0;
    return {limit, offset}
}
const getPageData = (data, page, limit)=>{
    const {count: totalItems, rows: items} = data;
    const currentPage = page? + page:0
    const totalPages = Math.ceil(totalItems/limit);
    return {totalItems, items, totalPages, currentPage}
}

// const GetAllCards = async (req,res)=>{
//     const {page,size, name } = req.query
//     let condition = name ? {name:{[Op.like]:`%${name}%`}}:null
//     const {limit, offset} = getPage(page,size)
//     try{
//        const cards = await Card.findAndCountAll({where: condition, limit, offset})
//        .then(data=>{
//         const response = getPageData(data,page,limit)
//        })
//         res.send(cards)
//     } catch(error){
//         throw error
//     }
// }
const GetAllCards= async(req,res)=>{
    try{
        const cards = await Card.findAll()
        res.send(cards)
    } catch(error){
        throw error
    }
}

const GetCardDetail  = async (req,res)=>{
    try{
       const card = await Card.findByPk(req.params.card_Id,{
        include: [{model:List, as:'deck'}]
       })
        res.send(card)
    } catch(error){
        throw error
    }
}

const CreateCard = async (req,res)=>{
    try{
       const {
        name,
        type,
        subtype,
        cost,
        colors,
        colorIdentity,
        uniqueId,
        imageUrl,
        basicLand
       } = req.body
       const card = await Card.create(
        {name:name,
        type:type,
        subtype:subtype,
        cost:cost, 
        colors: colors,
        colorIdentity: colorIdentity,
        uniqueId: uniqueId,
        imageUrl: imageUrl,
        basicLand: basicLand
        }
       )
        res.send(card)
    } catch(error){
        throw error
    }
}

const DeleteCard  = async (req,res)=>{
    try{
        let cardId = ( req.params.card_id)
        let card = await Card.destroy({
        where:{id:cardId}
       })
        res.send({message:`Card id'd ${cardId} has been removed`})
    } catch(error){
        throw error
    }
}

const UpdateCard = async (req,res)=>{
    try{
        let cardId = parseInt(req.params.card_id)
        let updatedCard = await Card.update(req.body,
            {where:{id:cardId}, returning:true})
            res.send(updatedCard)
    } catch(error){
        throw error
    }
}

module.exports ={
    GetAllCards,
    GetCardDetail,
    CreateCard,
    UpdateCard,
    DeleteCard
}