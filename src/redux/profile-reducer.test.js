import React from "react";
import {render} from "@testing-library/react";
import App from "../App";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, World', likesCount: 0},
        {id: 2, message: 'It is my first post!', likesCount: 9}
    ]
};

test('length of posts should be incremented', () => {
    // 1. test data (start data)
    let action = addPostActionCreator("testing text to add as the next post");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(3);
});

test('text of the new post should be correct', () => {
    // 1. test data (start data)
    let action = addPostActionCreator("testing text to add as the next post");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts[2].message).toBe("testing text to add as the next post");
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data (start data)
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(1);
});

test('after deleting length of messages should NOT be decrement if postId is incorrect', () => {
    // 1. test data (start data)
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(2);
});