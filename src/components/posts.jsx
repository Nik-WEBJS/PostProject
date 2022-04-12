import React, { useState } from "react";
import Post from "./post";

export const PostsList = () => {
  const initialState = [
    {id:1, data: "2.01.2001", header: "Паблик кулинарии", text: "Ненужная вещь оказалась нужна"},
    {id:2, data: "3.02.2001", header: "Паблик спорта", text: "Ложка прибыла под пирамидой 20 веков" },
    {id:3, data: "4.03.2001", header: "Паблик IT", text: "Вилка сломала стиральную машину" },
  ];

  const [post, setPost] = useState(initialState);

  const handleDelete = (id) => {
    const newPost = post.filter((c) => c.id !== id);
    setPost(newPost);
  };

  return (
    <>
      {post.map((count) => (
        <Post key={count.data} {...count} onDelete={handleDelete}/>
      ))}
    </>
  );
};

