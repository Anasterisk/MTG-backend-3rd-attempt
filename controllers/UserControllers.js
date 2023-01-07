const {User, List} = require ('../models')

const GetAllUserProfile = async (req,res)=>{
    try{
        const users = await User.findAll({ where:
            {username:'fake'}})
        res.send(users)
    } catch(error){
        throw error
    }
}
const LoginBypass = async (req,res)=>{
    try{
        const users = await User.findAll({ where:
            {username:'fake'}})
        res.send(users)
    } catch(error){
        throw error
    }
}
const  GetIndividualUserProfile= async (req,res)=>{
    try{
       const users = await User.findByPk(req.params.userId,{
        include: [{model:List, as:'owner'}]
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
        const { username, password } = req.body; 
        const user = await User.findOne({
        where: { username: username }
  });
  if (!user)
    res.send({ error: "User Doesn't Exist" })
  else {
      compare(password, user.password)
      then((match) => {
        if (!match)
          res.send({ error: "Wrong Username And Password Combination" })
        else {
          res.send(user);
        }
      });
  }

    } catch(error){
        throw error
    }
}



module.exports ={
    GetAllUserProfile,
    GetIndividualUserProfile,
    CreateNewUser,
    Login,
    LoginBypass,
    DeleteAccount,
}