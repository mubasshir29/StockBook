import mongoose from 'mongoose'

const assetSchema = mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    vendor:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    serial_no:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    project:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    person:{
        type: String,
        required: true
    },
    icon:{
        type: String,
        required: true
    },
    attach:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    comments:{
        type: String,
    },
    status:{
        type: String,
        required: true
    }
})

const assetModel = mongoose.model('Asset',assetSchema)

export default assetModel;