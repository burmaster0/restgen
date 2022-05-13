import mongoose, { Schema } from 'mongoose'

const peopleApiSchema = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  age: {
    type: String
  },
  updated: {
    type: String
  },
  addresses: {
    type: String
  },
  born: {
    type: String
  },
  current_address: {
    type: String
  },
  emails: {
    type: String
  },
  phones: {
    type: String
  },
  checked: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

peopleApiSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      address: this.address,
      age: this.age,
      updated: this.updated,
      addresses: this.addresses,
      born: this.born,
      current_address: this.current_address,
      emails: this.emails,
      phones: this.phones,
      checked: this.checked,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('PeopleApi', peopleApiSchema)

export const schema = model.schema
export default model
