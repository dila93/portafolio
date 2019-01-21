module.exports = {
	port: process.env.PORT || 3000,
	db: process.env.MONGODB || 'mongodb://localhost:27017/portafilio',

	develop: {
        name: 'develop',
        port: process.env.PORT || 3000,
        db: process.env.MONGODB || 'mongodb://localhost:27017/portafolio'     
    },
    production: {
        name: 'production',
        port: process.env.PORT || 3000,
        db: process.env.MONGODB || 'mongodb://localhost:27017/portafolio'      
    }
}

