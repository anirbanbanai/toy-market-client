import { useTitle } from "../Hooks/useTitle";

const Blog = () => {
    useTitle("Blog")
    return (
        <div className="p-5">
            <div className="mt-5 mb-5">
                <h1 className="text-2xl font-semibold">Q1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <h2 className="text-xl">Ans : Tokens are pieces of data that carry just enough information to facilitate the process of determining a users identity or authorizing a user to perform an action.
                 
                 When you need to enter privet site.You need access token. When you refresh your data then you need refresh token. To keep them secure, we should always store JWTs inside an httpOnly cookie.
                </h2>
            </div>
            <div className="mt-5 mb-5">
                <h1 className="text-2xl font-semibold">Q2. Compare SQL and NoSQL databases?</h1>
                <h2 className="text-xl">Ans : SQL databases are relational, and NoSQL databases are non-relational.
                    SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </h2>
            </div>
            <div className="mt-5 mb-5">
                <h1 className="text-2xl font-semibold">Q3. What is express js? What is Nest JS?</h1>
                <h2 className="text-xl">Ans : Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI </h2>
            </div>
            <div className="mt-5 mb-5">
                <h1 className="text-2xl font-semibold">Q4.What is MongoDB aggregate and how does it work?</h1>
                <h2 className="text-xl">Ans : Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline.</h2>
            </div>
        </div>
    );
};

export default Blog;