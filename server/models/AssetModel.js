import mongoose from 'mongoose'

const assetSchema = mongoose.Schema({
    category:'',
    type:'',
    vendor:'',
    model:'',
    serial_no:'',
    description:'',
    project:'',
    date:'',
    person:'',
    icon:'',
    attach:'',
    category:'',
    comments:'',
    status:''
})