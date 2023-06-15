const model =require('../model/product')
const Product = model.Product;

exports.createProduct = (req, res) => {
    const product = new Product(req.body);
    product.save().then((data)=>{
        console.log("Sended Data :",data)
         res.status(201).json(data)
        })
        .catch((err)=>{
        console.log("Error while Database data create :",err);
        res.status(400).json(err)
    })
}
exports.getAllProducts = async(req, res) => {
    // const products = await Product.find({price :{ $gt:100}});
    const products = await Product.find();
    res.json(products);
}

//function like findById means default take _id as there id so 
//insert _id for getting single product
exports.getSingleProduct = async(req, res) => {
    const id = req.params.id;
    const singleProduct = await Product.findById(id);  //you can use findOne({id:id})
    res.json(singleProduct);
}

//fuctionality of put->Replaced with curreent (delete prev)
exports.replaceProduct = async (req, res) => {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndReplace({_id:id}, req.body,{new:true});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
         res.status(400).json(err);
    }
}

//patch->update->(partially Update Data)
exports.updataProduct =async (req, res) => {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndUpdate({_id:id}, req.body,{new:true});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndDelete({_id:id});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
exports.frontpage = (req, res) => {
    res.sendFile(__dirname, '../index.html');
}