import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container '>
            <div className="blog-div d-block m-auto">
                <h1 className='p-5 text-center'>Blogs</h1>
                <div>
                    <p>Question: Difference between JS and Node.js</p>
                    <p>Answer: Javascript is a scripting language . we use javascript interact the website . Where Node.js is a runtime based on C++ . Node.js run javascript and compiled it to the machine language.</p>
                </div>
                <div>
                    <p>Question:When should you use node.js and when mongoDB?</p>
                    <p>Answer: Node.js and MongoDB are two different technology.we use node.js to create api , pass api to the client and connect client site with database.
                        On the other hand MOngoDb is a database technology where we can store data .
                    </p>
                </div>
                <div>
                    <p>Question: Difference between SQL and NoSQL</p>
                    <p>Answer: SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
                </div>
                <div>
                    <p>Question: What is the purpose of JWT and how does it work??</p>
                    <p>Answer: JWT means json web token.IT is used to protect api and security purpose.
                        jwt generate an access token and verify the user via token .If the user is verified ,jwt allows user to access data. Else it does not.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;