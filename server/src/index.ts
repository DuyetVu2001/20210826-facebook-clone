import 'reflect-metadata';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import MongoStore from 'connect-mongo';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { COOKIE_NAME, __prod__ } from './constants';
import { Message } from './entities/Message';
import { Post } from './entities/Post';
import { User } from './entities/User';
import { MessageResolver } from './resolvers/message';
import { PostResolver } from './resolvers/post';
import { UserResolver } from './resolvers/user';
import { Context } from './types/Context';
require('dotenv').config();

// import { createServer } from 'http';
// import { execute, subscribe } from 'graphql';
// import { SubscriptionServer } from 'subscriptions-transport-ws';

const main = async () => {
	await createConnection({
		type: 'postgres',
		database: 'reddit',
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		logging: true,
		synchronize: true,
		entities: [User, Post, Message],
	});

	const app = express();
	// const httpServer = createServer(app);

	app.use(
		cors({
			origin: 'http://localhost:3000',
			credentials: true,
		})
	);

	// Session/Cookies store
	await mongoose.connect(`${process.env.URI_MONGOOSE}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log('MongoDB connected!');
	app.use(
		session({
			name: COOKIE_NAME,
			store: MongoStore.create({ mongoUrl: `${process.env.URI_MONGOOSE}` }),
			cookie: {
				maxAge: 1000 * 60 * 30, // one hour
				httpOnly: true, // JS front end cannot access the cookie
				secure: __prod__, // cookie only works in https
				sameSite: 'lax', // protection against CSRF
			},
			secret: process.env.DB_PASSWORD as string,
			saveUninitialized: false, // don't save empty session, right from start
			resave: false,
		})
	);

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [MessageResolver, UserResolver, PostResolver],
			validate: false,
		}),
		plugins: [
			ApolloServerPluginLandingPageGraphQLPlayground(),
			// {
			// 	async serverWillStart() {
			// 		return {
			// 			async drainServer() {
			// 				subscriptionServer.close();
			// 			},
			// 		};
			// 	},
			// },
		],
		context: ({ req, res }): Context => ({ req, res }),
	});

	// const subscriptionServer = SubscriptionServer.create(
	// 	{
	// 		// This is the `schema` we just created.
	// 		schema: await buildSchema({
	// 			resolvers: [MessageResolver, UserResolver, PostResolver],
	// 			validate: false,
	// 		}),
	// 		// These are imported from `graphql`.
	// 		execute,
	// 		subscribe,
	// 	},
	// 	{ server: httpServer, path: apolloServer.graphqlPath }
	// );

	await apolloServer.start();

	apolloServer.applyMiddleware({ app, cors: false });

	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () =>
		console.log(
			`Server started on port ${PORT}./nGraphQL server started on http://localhost:${PORT}${apolloServer.graphqlPath}`
		)
	);
	// httpServer.listen(PORT, () => {
	// 	console.log(
	// 		`🚀 Query endpoint ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
	// 	);
	// 	console.log(
	// 		`🚀 Subscription endpoint ready at ws://localhost:${PORT}${apolloServer.graphqlPath}`
	// 	);
	// });
};

main().catch((error) => console.error(error));
