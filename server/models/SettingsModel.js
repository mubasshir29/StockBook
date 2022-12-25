import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    category:{
        type: String,
        required: true
    }
})

const typeSchema = mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    }
})
const vendorSchema = mongoose.Schema({
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
    }
})
const modelSchema = mongoose.Schema({
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
    }
})
const projectSchema = mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    project:{
        type: String,
        required: true
    }
})
const personSchema = mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    person:{
        type: String,
        required: true
    }
})

export const categoryModel = mongoose.model('Category',categorySchema, 'categories' )
export const typeModel = mongoose.model('Type',typeSchema, 'types' )
export const vendorModel = mongoose.model('Vendor',vendorSchema, 'vendors' )
export const modelModel = mongoose.model('Model',modelSchema, 'models' )
export const projectModel = mongoose.model('Project',projectSchema, 'projects' )
export const personModel = mongoose.model('Person',personSchema, 'persons' )
