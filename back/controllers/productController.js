const producto = require("../models/productos")
const fetch = (url) => import('node-fetch').then(({default:fetch})=>fetch(url));//Usurpación del require
//Ver la lista de productos
exports.getProducts=async(req,res,next)=>{
    
    const productos = await producto.find();
    
    res.status(200).json({
        sucess:true,
        cantidad: productos.length,
        //message:"En esta ruta usted va a poder ver todos los productos"
        productos
    })
}
//Ver un producto por ID
exports.getProductById=async(req,res,next)=>{
    const product =await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success: false,
            message: "No encontramos ese producto"
         })
    }
    res.status(200).json({
        sucess:true,
        message:"Aqui debajo encuentras información sobre tu producto",
        product
    })
}

//Update un producto
exports.updateProduct=async(req,res,next)=>{
    let product = await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto'
        })
    }
    //Si el objeto si existia, entonces si actualice
    product = await producto.findByIdAndUpdate(req.params.id,req.body,{
        new:true,//valido solo los datos nuevos
        runValidators:true

    });
    //Respondo ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product = await producto.create(req.body);
    res.status(201).json({
        success:true,
        product

    })
}

//Eliminar un producto
exports.deleteProduct= async(req,res,next)=>{
    const product = await producto.findById(req.params.id)
    if(!product){//verifico que el producto no existe para finalizar el proceso
        return res.status(400).json({//si el objeto no existe, return termina el proceso
            success:false,
            message: "No encontramos ese producto"
        })

    }
    await product.remove();
    res.status(200).json({
        success: true,
        message:"Producto eliminado correctamente",


    })
}

//HABLEMOS DE FETCH 
//Ver todos los productos 
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//ver por el id 
//verProductos();//Llamamos al metodo creado para probar la consulta

//Ver por id 
function verProductosPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
