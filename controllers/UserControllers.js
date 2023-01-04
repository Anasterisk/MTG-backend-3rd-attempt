const {User, List} = require ('../models')

const GetAllUserProfile = async (req,res)=>{
    try{
        const users = await User.findAll()
        res.send(users)
    } catch(error){
        throw error
    }
}
const  GetIndividualUserProfile= async (req,res)=>{
    try{
       const users = await User.findByPk(req.params.userId,{
        include: [{model:List, as:owner}]
       })
       res.send(users)
    } catch(error){
        throw error
    }
}

const  CreateNewUser= async (req,res)=>{
    try{
       const {name, username, password} = req.body
       const user = await User.create(
        {name:name, username:username, password:password}
       )
       res.send(user)
    } catch(error){
        throw error
    }
}

const  DeleteAccount= async (req,res)=>{
    try{
       let userId = (req.params.userId)
       await User.destroy({where:{id:userId}})
        res.send({message:`Account of ID ${userId} has been deleted`})
    } catch(error){
        throw error
    }
}

const Login = async (req,res)=>{
    try{
       let user = await User.find({
        where:{username:req.body.username}
       })
       if(user.username==req.body.username && user.password == req.body.password){
        let payload = {
            id:user.id,
            username: user.name
        }
        return res.send({payload})
        }else{
        console.log('user and/or password flase')
        }
        res.status(401).send({
            status: 'error',
            msg:'unauthorized login'
        })
    } catch(error){
        throw error
    }
}

module.exports ={
    GetAllUserProfile,
    GetIndividualUserProfile,
    CreateNewUser,
    Login,
    DeleteAccount
}