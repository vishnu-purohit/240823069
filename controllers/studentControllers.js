exports.index=(req,res)=>{
    res.send("index");
}

exports.show=(req,res)=>{
    res.send(`show id ${req.params.id}`);
}

exports.store=(req,res)=>{
    res.send(`data received ${req.params.id}`);
}

exports.update=(req,res)=>{
    res.send(`updated id  ${req.params.id}`);
}

exports.delete=(req,res)=>{
    res.send(`deleted id ${req.params.id}\n`);
}
