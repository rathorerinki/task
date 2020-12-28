const NotesModel = require("../models/NotesModel");
const blogModel = require("../models/BlogModel");
var mongoose = require('mongoose');


 // start user login and singup --------------------- 
  exports.create = async (req, res) => {
    const Note = req.body;
    const email=req.body.email;


      //checking email exist or not
      try {
         await NotesModel.findOne({"email": email},function(err,data){
          if (err){ 
          } 
          else{ 
            if(data==null){
              try {
                let NoteDoc = new NotesModel(Note);
                NoteDoc.save();
                res.send({"msg":"user data inserted",Data:NoteDoc, status:'true'});
              }
              catch(error){
                res.status(500).send(error);
              }
            }
            else{
              res.send({"msg":"User already exist",Data:'',status:'false'});
            }
          } 

        });

    } catch (error) {
      res.status(500).send(error);
    }
  };


  exports.login = async (req, res) => {
    const Note = req.body;
    const email=req.body.email;
    const password=req.body.password;


      //checking email exist or not
      try {
         await NotesModel.findOne({"email": email,"password":password},function(err,data){
          if (err){ 
              //console.log.log(err) 
          } 
          else{ 
            if(data==null){
              try {
                res.send({"msg":"user isn't exist","Data":data,status:'false'});
              }
              catch(error){
                res.status(500).send(error);
              }
            }
            else{
              res.send({"msg":"user exist","Data":data,status:'true'});
            }
          } 

        });

    } catch (error) {
      res.status(500).send(error);
    }
  };
  
 // end user login and singup --------------------- 


 // start all blogs create,delete,edit,update --------------------- 

 exports.blogCreate = async (req, res) => {
  const Note = req.body;

  try {
    let NoteDoc = new blogModel(Note);
    NoteDoc.save();
    res.send({"Data":"Blog inserted",status:'true'});
  }
  catch(error){
    res.status(500).send(error);
  }
}
        




  exports.blogFindAll = async (req, res) => {
    //console.log.log("call");
  
  
      try {
        const notes = await blogModel.find({});
        //console.log.log("notes",notes)
        res.send(notes);
      } catch (error) {
        res.status(500).send({
          message: error.message || "Some error occured while retrieving Notes",
        });
      }
    };
  exports.blogFindOne = async (req, res) => {
    const id = req.params.id;
  
    try {
      let Note = await blogModel.findById(id);
      res.send(Note);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  exports.blogUpdate = async (req, res) => {
    let  data = req.body;
    let id=req.params.id
    // console.log("data: ",data);

    const update =data;

    blogModel.findOneAndUpdate(id,update,{'useFindAndModify': true})
    .then((docs)=>{
      if(docs) {
        res.status(200).send({data:docs});

      } else {
        res.status(200).send({data:"Failed"});

      }
    }).catch((err)=>{
    res.status(500).send(error);
    })

  };
  
  exports.blogDelete = async (req, res) => {

    let id = req.params.id;

      blogModel.findOneAndDelete(id)
        .then((docs)=>{
           if(docs) {
            res.status(200).send({data:"deleted"});

           } else {
            res.status(200).send({data:"Isn't delete"});

           }
      }).catch((err)=>{
        res.status(500).send(error);
      })
  
  };

 // start all blogs create,delete,edit,update --------------------- 

