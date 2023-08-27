const Posts = require('../models/postModel')
 

const postvistasCtrl = {

   
  Vistas: async (req, res) => {
    try {
      const postId = req.params.id;
  
      console.log('Fetching post with ID:', postId); // Agrega este log para verificar que se esté obteniendo el ID correctamente
  
      const post = await Posts.findById(postId);
  
      if (!post) {
        return res.status(400).json({ msg: "This post does not exist." });
      }
  
      // Incrementar el contador de vistas en el post
      console.log('Current views:', post.vistas); // Agrega este log para ver el número actual de vistas antes de incrementar
  
      post.vistas += 1;
      await post.save();
      
      console.log('Views after increment:', post.vistas); // Agrega este log para ver el número de vistas después de incrementar
  
      res.status(200).json({ vistas: post.vistas });
    } catch (err) {
      console.error('Error:', err); // Agrega este log para mostrar el error en la consola
      return res.status(500).json({ msg: err.message });
    }
  },


    }

 
module.exports = postvistasCtrl