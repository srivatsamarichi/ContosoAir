const mongoose = require('mongoose');
const UserInfoModelSchema = require('./book.repository.model');

class BookFlightsRepository {
    constructor(options) {
        let { cosmosdb_name, cosmosdb_key, cosmosdb_url, database_name } = options;
        cosmosdb_url = cosmosdb_url  || `${cosmosdb_name}.documents.azure.com:10255`;
        database_name = database_name  || 'admin';
        const connectionString = "mongodb://lifeonland:YlZSKk7fBMQZML9SNAfA5Gwqe0St8jxs2vuJgoPZdSUb34eUxMeRQpg7VbAAHeslulPwejprce6ySq6G18gWiQ==@lifeonland.mongo.cosmos.azure.com:10255/?ssl=true&appName=@lifeonland@";
        mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.Promise = global.Promise;
    }
    async getUserInfo(username) {
        const UserInfoModel = await mongoose.model('UserInfoModel', UserInfoModelSchema);
        const result = await UserInfoModel.findOne({ user: username }).lean().exec();
        return result || { user: username, booked: null, purchased: [] };
    }

    async createOrUpdateUserInfo(userInfo) {
        const UserInfoModel = await mongoose.model('UserInfoModel', UserInfoModelSchema);
        await UserInfoModel.findOneAndUpdate({ user: userInfo.user }, userInfo, { upsert: true });
    }
}

module.exports = BookFlightsRepository;