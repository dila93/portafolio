module.exports = {
	port: process.env.PORT || 3000,
	db: process.env.MONGODB || 'mongodb+srv://dila93:dila93@portafolio-dila-test-xvksx.mongodb.net/test?retryWrites=true',

	develop: {
        name: 'develop',
        port: process.env.PORT || 3000,
        db: process.env.MONGODB || 'mongodb+srv://dila93:dila93@portafolio-dila-test-xvksx.mongodb.net/test?retryWrites=true'     
    },
    production: {
        name: 'production',
        port: process.env.PORT || 3000,
        db: process.env.MONGODB || 'mongodb://localhost:27017/portafolio'      
    }
}

